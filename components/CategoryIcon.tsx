import type { ReactNode, SVGProps } from "react";

type CategoryIconProps = {
  category: string;
  className?: string;
};

// Single-colour line drawings of everyday British objects, one per category.
// Drawn on a 48-unit grid so small details (chimney pots, coin edges) survive
// at the ~44px the picker renders them; currentColor lets the card state
// (muted when disabled) carry through.
const SHARED_PROPS: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

const ICON_PATHS: Record<string, ReactNode> = {
  // Office in-tray with a sheet of paper
  Workplace: (
    <>
      <path d="M15 28 14 9.5l18-1.5 1.5 20" />
      <path d="M18 14h10M18.2 18h11M18.4 22h7" />
      <path d="M6 28 9.5 23.5h4.2M34.3 23.5h4.2L42 28" />
      <rect x="6" y="28" width="36" height="10" rx="1.5" />
      <rect x="19" y="31" width="10" height="4" rx="0.5" />
    </>
  ),
  // Appointment card with a plus sign and a small clock face
  Healthcare: (
    <>
      <rect x="5" y="11" width="38" height="27" rx="2" />
      <path d="M5 18h38" />
      <path d="M10 14.5h11" />
      <path d="M15 23.5v10M10 28.5h10" />
      <circle cx="33" cy="28.5" r="6" />
      <path d="M33 25v3.5l2.5 1.5" />
    </>
  ),
  // Row of three terraced houses with chimney pots
  "Housing & landlord": (
    <>
      <path d="M3 41h42" />
      <path d="M5 41V22M43 41V22M17.7 22v19M30.3 22v19" />
      <path d="M3.5 22.5 9 15h30l5.5 7.5H3.5Z" />
      <path d="M17.7 15v7.5M30.3 15v7.5" />
      <path d="M16 15v-4.5h3.4V15M28.6 15v-4.5h3.4V15" />
      <path d="M17 10.5V8.3M18.4 10.5V8.3M29.6 10.5V8.3M31 10.5V8.3" />
      <path d="M8 41v-8h3.6v8M20.7 41v-8h3.6v8M33.3 41v-8h3.6v8" />
      <rect x="9" y="25.5" width="5" height="4" />
      <rect x="21.7" y="25.5" width="5" height="4" />
      <rect x="34.3" y="25.5" width="5" height="4" />
    </>
  ),
  // CV page with a paperclip
  "Job search": (
    <>
      <path d="M30 6H12.5A1.5 1.5 0 0 0 11 7.5v33a1.5 1.5 0 0 0 1.5 1.5h23a1.5 1.5 0 0 0 1.5-1.5V7.5A1.5 1.5 0 0 0 35.5 6h-.5" />
      <rect x="15" y="11" width="6" height="7" rx="0.5" />
      <path d="M24 12.5h3M24 16h2" />
      <path d="M15 23h18M15 27h18M15 31h14M15 35h16" />
      <path d="M31 14.5V4.5a2 2 0 0 1 4 0V15a3 3 0 0 1-6 0V8" />
    </>
  ),
  // A mug beside a biscuit
  Social: (
    <>
      <path d="M5 19h20v14a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6Z" />
      <path d="M25 23h2.5a4 4 0 0 1 0 8H25" />
      <path d="M11.5 14c-1.4-1.6 1.4-2.9 0-4.5M18.5 14c-1.4-1.6 1.4-2.9 0-4.5" />
      <circle cx="38.5" cy="34" r="5.5" />
      <path d="M36.5 32h.01M40.5 32h.01M38.5 35h.01M36.5 37h.01M40.5 37h.01" strokeWidth={1.8} />
    </>
  ),
  // A window envelope
  "Admin & bureaucracy": (
    <>
      <rect x="5" y="12" width="38" height="25" rx="1.5" />
      <rect x="10" y="21" width="18" height="10" rx="1" />
      <path d="M13 24.5h11M13 27.5h7" />
      <rect x="33.5" y="15.5" width="5.5" height="6.5" rx="0.5" strokeDasharray="1.5 1.5" />
    </>
  ),
  // An exercise book with a pencil
  Education: (
    <>
      <rect x="6" y="6" width="23" height="36" rx="1.5" />
      <path d="M10.5 6v36" />
      <rect x="14" y="12" width="11" height="7" rx="0.5" />
      <path d="M16.5 15.5h6" />
      <g transform="rotate(18 38 25)">
        <path d="M35.5 9h5v25h-5Z" />
        <path d="M35.5 13h5" />
        <path d="M35.5 34 38 40l2.5-6" />
        <path d="M37.2 38h1.6" />
      </g>
    </>
  ),
  // Two overlapping speech bubbles, a small heart in one
  "Dating & relationships": (
    <>
      <path d="M19 27h-5l-5 5v-5H6a3 3 0 0 1-3-3V13a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v7" />
      <path d="M14 22.5c-3-2.2-4.5-3.8-4.5-5.4a2.25 2.25 0 0 1 4.5-.8 2.25 2.25 0 0 1 4.5.8c0 1.6-1.5 3.2-4.5 5.4Z" />
      <path d="M22 20h17a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2v5l-5-5H22a3 3 0 0 1-3-3V23a3 3 0 0 1 3-3Z" />
      <path d="M24 26h12M24 30h8" />
    </>
  ),
  // A 12-sided pound coin with a £ inside
  "Money & transactions": (
    <>
      <path d="M40.4 28.4 36 36l-7.6 4.4h-8.8L12 36l-4.4-7.6v-8.8L12 12l7.6-4.4h8.8L36 12l4.4 7.6Z" />
      <circle cx="24" cy="24" r="13" />
      <path d="M28 18.6a3.6 3.6 0 0 0-6.6 1.8v7.1c0 2.3-1 3.5-2.4 4H29" />
      <path d="M18.5 25.2H26" />
    </>
  ),
  // A bus-stop pole with a plain rectangular flag sign showing a front-view bus
  "Transport & commuting": (
    <>
      <path d="M20 5v18M20 34v9M15 43h10" />
      <rect x="20" y="5" width="21" height="16" rx="1" />
      <rect x="24.5" y="7.5" width="12" height="10" rx="2" />
      <path d="M26.3 9.6h8.4v3.8h-8.4Z" />
      <path d="M27.3 15.4h.01M33.7 15.4h.01" strokeWidth={1.8} />
      <path d="M26.5 17.5v1.6M34.5 17.5v1.6" />
      <rect x="16" y="23" width="8" height="11" rx="0.5" />
      <path d="M18 26.5h4M18 29h4M18 31.5h2.5" />
    </>
  ),
  // A garden gate with a rounded hedge behind it
  "Neighbours & community": (
    <>
      <path d="M3 41h42" />
      <path d="M13.5 17H9a5 5 0 0 0-5 5v19M16.5 17h15M34.5 17H39a5 5 0 0 1 5 5v19" />
      <path d="M7 27.5q1.5-1.5 3 0M8.5 34q1.5-1.5 3 0M37.5 27.5q1.5-1.5 3 0M36 34q1.5-1.5 3 0" />
      <path d="M13.5 41V14h3v27M31.5 41V14h3v27" />
      <circle cx="15" cy="12" r="1.6" />
      <circle cx="33" cy="12" r="1.6" />
      <path d="M16.5 25h15M16.5 35h15" />
      <path d="M20 38V22M24 38V21M28 38V22" />
      <path d="M19.3 23.3 20 22l.7 1.3M23.3 22.3 24 21l.7 1.3M27.3 23.3 28 22l.7 1.3" />
    </>
  ),
  // A paper carrier bag with a till receipt
  "Customer service & retail": (
    <>
      <path d="M6 17h23l1.5 25h-26Z" />
      <path d="M6.3 21.5h22.4" />
      <path d="M12 17v-4a5.5 5.5 0 0 1 11 0v4" />
      <path d="M33 14h10v26l-1.67-1.2-1.66 1.2-1.67-1.2-1.67 1.2-1.66-1.2L33 40Z" />
      <path d="M35.5 18h5M35.5 21.5h5M35.5 25h3.5M35.5 30h5M35.5 32h5" />
    </>
  ),
};

export default function CategoryIcon({ category, className }: CategoryIconProps) {
  const paths = ICON_PATHS[category];
  if (!paths) return null;
  return (
    <svg {...SHARED_PROPS} className={className}>
      {paths}
    </svg>
  );
}
