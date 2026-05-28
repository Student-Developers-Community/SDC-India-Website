import Image from "next/image";
import { aboutPageContent, impactStatsStub, partnerLogosStub } from "@/data/about";
import PartnerCard from "@/components/cards/PartnerCard";

const GALLERY = [
  { src: "/assets/blog/event.jpeg",       alt: "SDC Event",     span: "col-span-2 aspect-[2/1]" },
  { src: "/assets/blog/snist.jpeg",       alt: "SNIST Campus",  span: "aspect-square" },
  { src: "/assets/blog/community-1.jpeg", alt: "Community",     span: "aspect-square" },
  { src: "/assets/blog/community-2.jpeg", alt: "Members",       span: "aspect-square" },
  { src: "/assets/blog/community-3.jpeg", alt: "Team",          span: "aspect-square" },
];

const VALUES = [
  "Open and inclusive learning environment",
  "Real-world, hands-on exposure beyond classroom theory",
  "Peer collaboration over competition",
  "Industry-aligned skill building with practical mentorship",
  "National-level event partnerships and exposure",
  "Community-driven growth and student leadership",
];

const TAGS = ["Web Development", "AI / ML", "UI / UX Design", "Blockchain / Web3", "Backend Dev", "Data Science", "Hackathons", "Open Source"];

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="sec-label mb-2">// OUR STORY</div>
        <h1 className="sec-title">About <span className="gtext">SDC INDIA</span></h1>
        <p className="sec-sub mb-12">{aboutPageContent.heroSubtitle}</p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Box icon="🎯" title="Our Mission" body={aboutPageContent.mission} />
          <Box icon="👁"  title="Our Vision"  body={aboutPageContent.vision} />
        </div>

        <div className="rounded-[16px] p-8 mb-12" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h3 className="font-extrabold text-xl mb-3" style={{ fontFamily: "Syne, sans-serif" }}>Founding Story</h3>
          <p className="text-[.92rem] leading-[1.85]" style={{ color: "var(--sub)" }}>
            The <strong style={{ color: "var(--text)" }}>Student Developers Community (SDC)</strong> was established in <strong style={{ color: "var(--text)" }}>2022 at Sreenidhi Institute of Science and Technology (SNIST)</strong>, founded by <strong style={{ color: "var(--text)" }}>Mr. Chandrashekhar M</strong> — a SNIST alumnus from the 2021–2024 batch.
          </p>
          <p className="text-[.92rem] leading-[1.85] mt-3" style={{ color: "var(--sub)" }}>
            His vision was simple: create a space where students grow technically through collaboration and hands-on learning. Today, SDC unites over <strong style={{ color: "var(--text)" }}>2500 members</strong> with a growing national footprint under <span className="gtext font-bold">SDC INDIA</span>.
          </p>
        </div>

        <div className="sec-label mb-2">// COMMUNITY IMPACT</div>
        <h3 className="sec-title mb-6" style={{ fontSize: "1.5rem" }}>By the numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[...impactStatsStub, { value: "2500+", label: "Community Members" }].map((s) => (
            <div key={s.label} className="rounded-[14px] p-6 text-center" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="gtext font-extrabold text-[2.4rem]" style={{ fontFamily: "Syne, sans-serif" }}>{s.value}</div>
              <div className="text-[.72rem] mt-1.5" style={{ color: "var(--muted)", fontFamily: "Space Mono, monospace" }}>
                {s.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        <div className="sec-label mb-2">// CORE VALUES</div>
        <h3 className="sec-title mb-6" style={{ fontSize: "1.5rem" }}>What we believe in</h3>
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <ul className="space-y-3 list-none p-0">
              {VALUES.map((v) => (
                <li key={v} className="flex gap-3 text-[.9rem] leading-[1.65]" style={{ color: "var(--sub)" }}>
                  <span className="shrink-0" style={{ color: "var(--a1)", fontFamily: "Space Mono, monospace" }}>→</span>
                  {v}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-7">
              {TAGS.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-[.7rem]" style={{ border: "1px solid var(--border2)", color: "var(--sub)", fontFamily: "Space Mono, monospace" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[.65rem] mb-3 tracking-widest" style={{ color: "var(--sub)", fontFamily: "Space Mono, monospace" }}>📸 COMMUNITY GALLERY</div>
            <div className="grid grid-cols-3 gap-2.5">
              {GALLERY.map((g) => (
                <div key={g.src} className={`relative ${g.span} overflow-hidden rounded-[10px]`} style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <Image src={g.src} alt={g.alt} fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="(max-width: 768px) 33vw, 18vw" />
                </div>
              ))}
            </div>
            <p className="text-[.67rem] mt-2" style={{ color: "var(--muted)", fontFamily: "Space Mono, monospace" }}>
              Moments from SDC events · 2022 — 2025
            </p>
          </div>
        </div>

        <div className="sec-label mb-2">// PARTNERS & COLLABORATORS</div>
        <h3 className="sec-title mb-3" style={{ fontSize: "1.5rem" }}>We partner with</h3>
        <p className="sec-sub mb-6">National communities and industry organizations that have hosted, sponsored, or partnered with SDC events.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {partnerLogosStub.map((p, i) => (
            <PartnerCard key={p.alt} src={`/assets/partners/${p.src.split("/").pop()}`} alt={p.alt} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}

function Box({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="rounded-[16px] p-7" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
      <div className="text-[1.8rem] mb-3">{icon}</div>
      <h3 className="font-extrabold text-lg mb-2.5" style={{ fontFamily: "Syne, sans-serif" }}>{title}</h3>
      <p className="text-[.88rem] leading-[1.75]" style={{ color: "var(--sub)" }}>{body}</p>
    </div>
  );
}
