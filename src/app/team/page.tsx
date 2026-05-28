import { FOUNDER, CORE_TEAM, type TeamMember } from "@/data/team";
import TeamCard from "@/components/cards/TeamCard";

export default function TeamPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="sec-label mb-2">// THE PEOPLE BEHIND SDC</div>
        <h1 className="sec-title">Meet the team</h1>
        <p className="sec-sub mb-12">
          The founder and core contributors driving SDC INDIA forward. Click any member to learn more.
        </p>

        <TeamGroup title="Founder" members={FOUNDER} />
        <TeamGroup title="Core Contributors" members={CORE_TEAM} />
      </div>
    </main>
  );
}

function TeamGroup({ title, members }: { title: string; members: TeamMember[] }) {
  return (
    <section className="mb-10">
      <h2
        className="font-extrabold text-base mb-5 flex items-center gap-2.5"
        style={{ fontFamily: "Syne, sans-serif", color: "var(--text)", letterSpacing: "-.01em" }}
      >
        <span className="inline-block w-[18px] h-[2px] rounded" style={{ background: "var(--grad)" }} />
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[1.2rem]">
        {members.map((m) => (
          <div key={m.id} id={m.id}>
            <TeamCard member={m} />
          </div>
        ))}
      </div>
    </section>
  );
}
