import type { ReactNode } from "react";
import type { Scenario, ScenarioOption } from "@/lib/scenarios";

// A drawn phone showing a Practice screen. Decorative: the whole screen is
// one image to assistive tech, described by `label`. Fixed pixel sizes, like
// a screenshot, and always light on the dark site (.keep-light).
export function Phone({ label, height = 552, children }: { label: string; height?: number; children: ReactNode }) {
  return (
    <div className="w-[274px] shrink-0 rounded-[40px] bg-[#0F1722] p-[9px] shadow-[0_26px_50px_rgba(15,23,34,0.28)]">
      <div
        role="img"
        aria-label={label}
        style={{ height }}
        className="keep-light relative overflow-hidden rounded-[32px] bg-canvas text-[12.5px] leading-[1.45] text-ink"
      >
        {children}
      </div>
    </div>
  );
}

function ScreenTop({ streak }: { streak: number }) {
  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-4">
      <b className="font-display text-[13px] font-semibold leading-none">Chat British</b>
      <span className="text-[11.5px] text-muted">{streak} day streak</span>
    </div>
  );
}

// A Practice question after answering: the chosen wrong option in brick, the
// right one in sage, and the chosen option's feedback in the bar at the foot.
export function PracticeQuestionScreen({ scenario, chosen }: { scenario: Scenario; chosen: ScenarioOption }) {
  return (
    <>
      <ScreenTop streak={4} />
      <div className="bg-primary px-4 py-[7px] text-xs font-medium text-on-primary">{scenario.category}</div>
      <div className="px-4 py-3.5">
        <p>{scenario.setup}</p>
        <p className="my-2.5 font-display text-[14.5px] font-medium italic leading-[1.3]">{scenario.prompt}</p>
        {scenario.options.map((option, i) => {
          const state = option === chosen ? "wrong" : option.correct ? "right" : "plain";
          return (
            <div
              key={option.text}
              className={`mb-2 flex items-start gap-[9px] rounded-md border px-2.5 py-2 ${
                state === "wrong"
                  ? "border-brick bg-brick-light"
                  : state === "right"
                    ? "border-sage bg-sage-light"
                    : "border-line bg-surface"
              }`}
            >
              <span
                className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border text-[10.5px] font-medium ${
                  state === "wrong" ? "border-brick text-brick" : state === "right" ? "border-sage text-sage" : "border-field text-muted"
                }`}
              >
                {i + 1}
              </span>
              <span>{option.text}</span>
            </div>
          );
        })}
      </div>
      <div className="absolute inset-x-0 bottom-0 border-t border-brick bg-brick-light px-4 pb-4 pt-[11px]">
        <p className="mb-[3px] flex items-center gap-2 text-[13px] font-semibold text-brick">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-brick">
            <svg viewBox="0 0 12 12" className="h-[11px] w-[11px]">
              <path d="M2 2 L10 10 M10 2 L2 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          Not quite
        </p>
        <p className="text-xs text-muted">{chosen.feedback}</p>
        <span className="mt-[9px] block rounded-md bg-primary py-[9px] text-center text-[12.5px] font-semibold text-on-primary">
          Next question
        </span>
      </div>
    </>
  );
}

// A sample recap, styled like the real one in app/practice/page.tsx: a rail
// ticket with the score above the tear line and the streak below it.
export function RecapScreen() {
  return (
    <>
      <ScreenTop streak={4} />
      <div className="relative mx-4 my-3.5 border border-line bg-surface">
        <div className="bg-primary px-3.5 py-[7px] text-xs font-medium text-on-primary">Dating &amp; relationships</div>
        <div className="p-3.5">
          <p className="mb-2.5 font-display text-lg font-semibold leading-[1.1]">Session complete</p>
          <p className="font-display text-[38px] font-semibold leading-none">
            3 <small className="font-sans text-sm font-normal text-muted">/ 5 correct</small>
          </p>
          <p className="mt-2 text-muted">Good start — a couple worth revisiting when you&rsquo;re ready.</p>
        </div>
        {/* Tear line with a notch at each end. */}
        <div className="relative mx-2.5 border-t-2 border-dashed border-line">
          <span className="absolute -left-5 -top-2.5 h-[18px] w-[18px] rounded-full border border-line bg-canvas" />
          <span className="absolute -right-5 -top-2.5 h-[18px] w-[18px] rounded-full border border-line bg-canvas" />
        </div>
        <div className="px-3.5 pb-3.5 pt-3 text-muted">
          <b className="font-semibold text-ink">4 day streak</b>
          <br />
          The ones you missed will come back.
        </div>
      </div>
      <span className="mx-4 mt-2 block rounded-md border-[1.5px] border-primary bg-primary py-[9px] text-center text-[12.5px] font-semibold text-on-primary">
        Practise another category
      </span>
      <span className="mx-4 mt-2 block rounded-md border-[1.5px] border-primary bg-surface py-[9px] text-center text-[12.5px] font-semibold text-primary">
        Back to this category
      </span>
    </>
  );
}
