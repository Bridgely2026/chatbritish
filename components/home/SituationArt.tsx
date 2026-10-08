// Illustrations for the six situation cards on the home page, copied from
// the approved mockup (docs/mockups/chat-british-landing-mockup.html). Inline
// SVG, so there's no image request. Each is labelled as an illustration.

export type SituationArtName = "workplace" | "housing" | "healthcare" | "social" | "money" | "transport";

const ART: Record<SituationArtName, { label: string; body: React.ReactNode }> = {
  workplace: {
    label: "Illustration: a laptop with a speech bubble and a mug on a desk",
    body: (
      <>
        <rect width="320" height="200" fill="#EAF1F8"/><g fill="#fff" stroke="#1F3A5F" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"><path d="M22 168 H298" fill="none"/><rect x="92" y="78" width="136" height="76" rx="6"/><path d="M76 154 H244 L234 166 H86 Z"/><path d="M110 100 H200 M110 116 H170 M110 132 H190" fill="none"/><path d="M196 22 h78 a10 10 0 0 1 10 10 v26 a10 10 0 0 1 -10 10 h-44 l-16 14 v-14 h-18 a10 10 0 0 1 -10 -10 v-26 a10 10 0 0 1 10 -10z"/><circle cx="222" cy="45" r="3" fill="#1F3A5F"/><circle cx="240" cy="45" r="3" fill="#1F3A5F"/><circle cx="258" cy="45" r="3" fill="#1F3A5F"/><path d="M258 126 h34 v28 a8 8 0 0 1 -8 8 h-18 a8 8 0 0 1 -8 -8z"/><path d="M292 134 h5 a7 7 0 0 1 0 14 h-5" fill="none"/></g>
      </>
    ),
  },
  housing: {
    label: "Illustration: a row of terraced houses with chimneys",
    body: (
      <>
        <rect width="320" height="200" fill="#FCEBCB"/><g fill="#fff" stroke="#1F3A5F" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"><path d="M22 168 H298" fill="none"/><path d="M36 86 L72 54 H248 L284 86 Z"/><rect x="98" y="30" width="16" height="26"/><rect x="206" y="30" width="16" height="26"/><rect x="46" y="86" width="228" height="82"/><path d="M122 86 V168 M198 86 V168" fill="none"/><rect x="73" y="124" width="22" height="44"/><rect x="149" y="124" width="22" height="44"/><rect x="225" y="124" width="22" height="44"/><rect x="70" y="96" width="28" height="22"/><rect x="146" y="96" width="28" height="22"/><rect x="222" y="96" width="28" height="22"/></g>
      </>
    ),
  },
  healthcare: {
    label: "Illustration: an appointment card with a clock",
    body: (
      <>
        <rect width="320" height="200" fill="#DDE6E0"/><g fill="#fff" stroke="#1F3A5F" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"><rect x="60" y="34" width="200" height="132" rx="10"/><path d="M60 68 H260" fill="none"/><path d="M82 51 v14 M75 58 h14" fill="none"/><path d="M84 94 H168 M84 112 H150 M84 130 H160" fill="none"/><circle cx="214" cy="116" r="26"/><path d="M214 116 V99 M214 116 L227 123" fill="none"/></g>
      </>
    ),
  },
  social: {
    label: "Illustration: two mugs and a biscuit on a table",
    body: (
      <>
        <rect width="320" height="200" fill="#EAF1F8"/><g fill="#fff" stroke="#1F3A5F" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"><path d="M22 168 H298" fill="none"/><path d="M60 104 h58 v38 a14 14 0 0 1 -14 14 h-30 a14 14 0 0 1 -14 -14z"/><path d="M118 112 h8 a11 11 0 0 1 0 22 h-8" fill="none"/><path d="M202 104 h58 v38 a14 14 0 0 1 -14 14 h-30 a14 14 0 0 1 -14 -14z"/><path d="M260 112 h8 a11 11 0 0 1 0 22 h-8" fill="none"/><path d="M80 90 c-6 -10 6 -14 0 -26 M98 90 c-6 -10 6 -14 0 -26 M222 90 c-6 -10 6 -14 0 -26 M240 90 c-6 -10 6 -14 0 -26" fill="none"/><circle cx="160" cy="150" r="14"/><circle cx="155" cy="147" r="1.6" fill="#1F3A5F"/><circle cx="164" cy="146" r="1.6" fill="#1F3A5F"/><circle cx="160" cy="155" r="1.6" fill="#1F3A5F"/></g>
      </>
    ),
  },
  money: {
    label: "Illustration: a twelve-sided pound coin and a receipt",
    body: (
      <>
        <rect width="320" height="200" fill="#FCEBCB"/><g fill="#fff" stroke="#1F3A5F" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"><polygon points="174.0,111.0 159.0,137.0 133.0,152.0 103.0,152.0 77.0,137.0 62.0,111.0 62.0,81.0 77.0,55.0 103.0,40.0 133.0,40.0 159.0,55.0 174.0,81.0"/><circle cx="118" cy="96" r="40" fill="none"/><path d="M206 36 h66 v118 l-8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 -8 -6 -8 6 z"/><path d="M220 60 H258 M220 78 H250 M220 96 H258 M220 114 H244" fill="none"/></g><text x="118" y="112" textAnchor="middle" fontFamily="var(--font-fraunces), Fraunces, Georgia, serif" fontWeight="600" fontSize="52" fill="#1F3A5F">£</text>
      </>
    ),
  },
  transport: {
    label: "Illustration: a bus stop sign and the front of a bus",
    body: (
      <>
        <rect width="320" height="200" fill="#1F3A5F"/><g fill="#fff" stroke="#fff" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"><path d="M22 170 H298" fill="none"/><path d="M62 170 V40" fill="none"/><rect x="62" y="40" width="66" height="40" rx="4" fill="#1F3A5F"/><rect x="72" y="50" width="46" height="20" rx="3" fill="#fff" stroke="none"/><path d="M84 66 h22" stroke="#1F3A5F" strokeWidth="2.5" fill="none"/><rect x="164" y="64" width="116" height="92" rx="10" stroke="#1F3A5F" strokeWidth="3"/><rect x="176" y="76" width="92" height="38" rx="5" fill="#EAF1F8" stroke="#1F3A5F"/><circle cx="192" cy="134" r="7" fill="#F2A93B" stroke="#1F3A5F"/><circle cx="252" cy="134" r="7" fill="#F2A93B" stroke="#1F3A5F"/><path d="M176 148 H268" stroke="#1F3A5F" fill="none"/><rect x="178" y="154" width="18" height="14" fill="#1F3A5F" stroke="none"/><rect x="248" y="154" width="18" height="14" fill="#1F3A5F" stroke="none"/></g>
      </>
    ),
  },
};

export default function SituationArt({ name }: { name: SituationArtName }) {
  const art = ART[name];
  return (
    <svg viewBox="0 0 320 200" role="img" aria-label={art.label} className="block aspect-[16/10] w-full">
      {art.body}
    </svg>
  );
}
