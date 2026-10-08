// A drawn browser window showing a sample Debrief: the description on the
// left, an answer card on the right with the real card's labels. The answer
// text is a sample written for the page, not a live response. Decorative:
// one image to assistive tech, described by its aria-label.
export default function DebriefSample() {
  return (
    <div
      role="img"
      aria-label="A sample Debrief. On the left, someone describes agreeing to split a group dinner bill evenly when they only had a starter and water. On the right, the sample answer, filed under Money & transactions: the surface signal is “Shall we just split it evenly?”, it means a casual default rather than a rule, and a suggested response is “I only had a starter. Would you mind if I paid a bit less?”"
      className="overflow-hidden rounded-xl border border-line bg-white text-sm leading-normal text-ink shadow-[0_22px_44px_rgba(20,35,55,0.16)]"
    >
      <div className="flex items-center gap-[7px] border-b border-line bg-[#EEF1F4] px-3.5 py-2.5">
        <i className="h-2.5 w-2.5 rounded-full bg-[#C5CCD4]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#C5CCD4]" />
        <i className="h-2.5 w-2.5 rounded-full bg-[#C5CCD4]" />
        <span className="ml-2.5 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-[12.5px] text-muted">
          chatbritish.ai/debrief
        </span>
      </div>
      <div className="grid min-[760px]:grid-cols-2">
        <div className="border-b border-[#E3E8ED] bg-canvas p-5 min-[760px]:border-b-0 min-[760px]:border-r">
          <p className="mb-2 text-[13.5px] font-semibold">What happened?</p>
          <p className="min-h-[118px] rounded-md border-[1.5px] border-field bg-white px-3 py-[11px]">
            At a group dinner we agreed to split the bill evenly, but I only had a starter and water, and I
            don&rsquo;t know if I&rsquo;m allowed to say anything.
          </p>
          <span className="mt-3.5 inline-block rounded-md bg-primary px-[18px] py-2.5 font-semibold text-white">
            Explain this
          </span>
        </div>
        <div className="p-5">
          <p className="text-xs text-muted">Money &amp; transactions</p>
          <SampleField label="Surface signal" italic>
            &ldquo;Shall we just split it evenly?&rdquo;
          </SampleField>
          <SampleField label="What it actually means">
            A casual default, not a rule. It&rsquo;s normal to say lightly that you had less.
          </SampleField>
          <SampleField label="Suggested response" italic>
            &ldquo;I only had a starter. Would you mind if I paid a bit less?&rdquo;
          </SampleField>
        </div>
      </div>
    </div>
  );
}

function SampleField({ label, italic, children }: { label: string; italic?: boolean; children: React.ReactNode }) {
  return (
    <div className="mt-3">
      <p className="eyebrow text-primary">{label}</p>
      <p className={`mt-1 ${italic ? "font-display italic" : ""}`}>{children}</p>
    </div>
  );
}
