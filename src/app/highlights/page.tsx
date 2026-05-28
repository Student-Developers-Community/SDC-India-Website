import { HIGHLIGHTS } from "@/data/highlights";
import HighlightCard from "@/components/cards/HighlightCard";

export default function HighlightsPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="sec-label mb-2">// EVENT HIGHLIGHTS</div>
        <h1 className="sec-title">Champions & winning teams</h1>
        <p className="sec-sub mb-12">
          Highlights from SDC&apos;s flagship hackathons — the teams who came together, built fast, and walked away with the prize.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.3rem]">
          {HIGHLIGHTS.map((h) => (
            <div key={h.id} id={h.id}>
              <HighlightCard highlight={h} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
