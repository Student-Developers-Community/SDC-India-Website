import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { EVENTS, getEventById, getRelatedEvents } from "@/data/events";
import EventCard from "@/components/cards/EventCard";

export async function generateStaticParams() {
  return EVENTS.map((e) => ({ id: e.id }));
}

export default async function EventDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = getEventById(id);
  if (!event) return notFound();
  const related = getRelatedEvents(id, 3);

  return (
    <main className="pt-24 pb-20">
      {/* Hero banner */}
      <div className="relative h-[340px] md:h-[420px] overflow-hidden">
        <Image src={event.image || "/assets/events/sdc-india-logo.jpeg"} alt={event.title} fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,8,.95) 0%, rgba(8,8,8,.55) 50%, rgba(8,8,8,.4) 100%)" }} />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1100px] mx-auto w-full px-6 pb-10">
            <Link href="/events" className="inline-block text-[.78rem] mb-4 transition-colors hover:text-white" style={{ color: "var(--sub)", fontFamily: "Space Mono, monospace" }}>
              ← Back to events
            </Link>
            <span
              className="inline-block px-3 py-1 rounded-full text-[.65rem] mb-3"
              style={{
                background: event.isPast ? "rgba(136,136,136,.18)" : "rgba(34,197,94,.18)",
                color: event.isPast ? "var(--sub)" : "#22c55e",
                fontFamily: "Space Mono, monospace",
              }}
            >
              {event.isPast ? "PAST EVENT" : "UPCOMING"}
            </span>
            <h1 className="font-extrabold text-3xl md:text-5xl" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-.02em" }}>{event.title}</h1>
            <div className="flex flex-wrap gap-4 mt-3 text-sm" style={{ color: "var(--sub)" }}>
              <span>📅 {event.date}</span>
              <span>📍 {event.location}</span>
              <span>⏱ {event.duration}</span>
              <span>👥 {event.attendees}+ attendees</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <h2 className="sec-title mb-4" style={{ fontSize: "1.5rem" }}>About this event</h2>
            <p className="text-base leading-[1.85] mb-6" style={{ color: "var(--sub)" }}>{event.description}</p>

            <h3 className="font-extrabold text-lg mb-3 mt-8" style={{ fontFamily: "Syne, sans-serif" }}>Speakers / Mentors</h3>
            <p className="text-sm" style={{ color: "var(--sub)" }}>{event.speaker}</p>

            {event.winners && event.winners.length > 0 && (
              <>
                <h3 className="font-extrabold text-lg mb-3 mt-8" style={{ fontFamily: "Syne, sans-serif" }}>Winners</h3>
                <ul className="space-y-2.5 list-none p-0">
                  {event.winners.map((w, i) => (
                    <li key={w} className="flex gap-3 text-[.92rem] leading-relaxed" style={{ color: "var(--sub)" }}>
                      <span>{i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside>
            <div className="rounded-[16px] p-6 sticky top-24" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <h3 className="font-extrabold text-base mb-4" style={{ fontFamily: "Syne, sans-serif" }}>Event Details</h3>
              <div className="space-y-3 text-sm" style={{ color: "var(--sub)" }}>
                <div><span className="block text-[.65rem] mb-0.5" style={{ color: "var(--muted)", fontFamily: "Space Mono, monospace" }}>CATEGORY</span>{event.category}</div>
                <div><span className="block text-[.65rem] mb-0.5" style={{ color: "var(--muted)", fontFamily: "Space Mono, monospace" }}>MODE</span>{event.mode}</div>
                <div><span className="block text-[.65rem] mb-0.5" style={{ color: "var(--muted)", fontFamily: "Space Mono, monospace" }}>TIME</span>{event.time}</div>
                <div><span className="block text-[.65rem] mb-0.5" style={{ color: "var(--muted)", fontFamily: "Space Mono, monospace" }}>DURATION</span>{event.duration}</div>
              </div>
              {!event.isPast && (
                <Link href="/contact" className="btn-grad w-full mt-5 text-center" style={{ fontSize: ".85rem" }}>
                  Get Notified →
                </Link>
              )}
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <>
            <div className="hdivider" />
            <h2 className="sec-title mb-6" style={{ fontSize: "1.5rem" }}>Related events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((e) => (
                <Link key={e.id} href={`/events/${e.id}`} className="block">
                  <EventCard event={e} variant={e.isPast ? "past" : "upcoming"} />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
