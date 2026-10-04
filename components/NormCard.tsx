import { NormEntry } from "@/lib/mock-data";
import MarginNote from "@/components/MarginNote";

// `stamp` gives the card a perforated edge (used once, on the home hero). The
// mask would clip a border or box-shadow, so the outline and offset shadow are
// drop-shadows on a wrapper, which follow the perforated shape instead. The
// offset shadow is lighter than the plain card's, since a solid ink shadow
// shows through the perforations as a heavy dotted chain.
//
// `annotation` adds a red-pen margin note. From lg up it sits beside the
// "What it actually means" label, running over the inner frame into the
// perforated margin; it stays inside the card because the stamp mask would
// clip anything past the edge. Below lg the card is too narrow for that
// without covering text, so it sits under the card instead.
export default function NormCard({
  entry,
  stamp = false,
  annotation,
}: {
  entry: NormEntry;
  stamp?: boolean;
  annotation?: string;
}) {
  const content = (
    <>
      <div className="flex items-center justify-between border-b border-line pb-3">
        <span className="font-mono text-xs uppercase tracking-wide text-muted">{entry.normId}</span>
        <span className="text-xs text-muted">{entry.category}</span>
      </div>
      <p className="mt-4 font-display text-lg italic text-ink">{entry.surfaceMarkers}</p>
      <div className={`mt-4 space-y-1 ${annotation ? "lg:mt-7" : ""}`}>
        <div className="relative">
          <p className="eyebrow text-brick">What it actually means</p>
          {annotation && (
            <MarginNote className="absolute -right-4 bottom-[3px] hidden -rotate-[4deg] lg:inline-block">
              {annotation}
            </MarginNote>
          )}
        </div>
        <p className="text-sm leading-relaxed text-ink">{entry.whatItMeans}</p>
      </div>
    </>
  );

  if (!stamp) {
    return (
      <div className="w-full max-w-md border border-line bg-white/60 p-6 shadow-[4px_4px_0_#1C2733]">{content}</div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <div
        style={{
          filter:
            "drop-shadow(1px 0 0 #d9d2c0) drop-shadow(-1px 0 0 #d9d2c0) drop-shadow(0 1px 0 #d9d2c0) drop-shadow(0 -1px 0 #d9d2c0) drop-shadow(3px 3px 0 rgba(28, 39, 51, 0.22))",
        }}
      >
        <div className="stamp-edge bg-[#fbf9f4] p-3">
          <div className="border border-line p-5">{content}</div>
        </div>
      </div>
      {annotation && (
        <div className="mt-4 text-right lg:hidden">
          <MarginNote className="-rotate-2">{annotation}</MarginNote>
        </div>
      )}
    </div>
  );
}
