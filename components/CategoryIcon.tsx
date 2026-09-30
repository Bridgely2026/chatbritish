import type { ReactNode, SVGProps } from "react";

type CategoryIconProps = {
  category: string;
  className?: string;
};

const SHARED_PROPS: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICON_PATHS: Record<string, ReactNode> = {
  Workplace: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </>
  ),
  "Housing & landlord": (
    <>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
      <path d="M10 20v-5a2 2 0 0 1 4 0v5" />
    </>
  ),
  Healthcare: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </>
  ),
  "Job search": (
    <>
      <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="15" x2="15" y2="15" />
      <line x1="9" y1="18" x2="13" y2="18" />
    </>
  ),
  Social: (
    <>
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h7A2.5 2.5 0 0 1 16 6.5v4A2.5 2.5 0 0 1 13.5 13H9l-3 2.5V13h-.5A2.5 2.5 0 0 1 4 10.5Z" />
      <path d="M12 11.5A2 2 0 0 1 14 9.5h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.3l1.3 1.5-2.5-1.5H14a2 2 0 0 1-2-2Z" />
    </>
  ),
  "Admin & bureaucracy": (
    <>
      <path d="M3 9 12 4l9 5" />
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="6" y1="9" x2="6" y2="17" />
      <line x1="10" y1="9" x2="10" y2="17" />
      <line x1="14" y1="9" x2="14" y2="17" />
      <line x1="18" y1="9" x2="18" y2="17" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </>
  ),
  Education: (
    <>
      <path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5" />
      <path d="M12 6.5c2-1.5 5-2 8.5-1.5v13c-3.5-.5-6.5 0-8.5 1.5" />
      <line x1="12" y1="6.5" x2="12" y2="19.5" />
    </>
  ),
  "Dating & relationships": (
    <>
      <path d="M9 19s-6-3.8-6-8.2A3.3 3.3 0 0 1 9 9a3.3 3.3 0 0 1 6 1.8C15 15.2 9 19 9 19Z" />
      <path d="M13.5 6.2A3.3 3.3 0 0 1 21 7.8c0 3.3-3.4 6.2-5.2 7.5" />
    </>
  ),
  "Money & transactions": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 8.5a2.5 2.5 0 0 0-4.5 1.5v5.5" />
      <line x1="8.5" y1="12.5" x2="13" y2="12.5" />
      <line x1="8.5" y1="15.5" x2="15.5" y2="15.5" />
    </>
  ),
  "Transport & commuting": (
    <>
      <rect x="5" y="3" width="14" height="15" rx="2.5" />
      <line x1="5" y1="11" x2="19" y2="11" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <circle cx="8.5" cy="14.5" r="1" />
      <circle cx="15.5" cy="14.5" r="1" />
      <line x1="7.5" y1="18" x2="7.5" y2="21" />
      <line x1="16.5" y1="18" x2="16.5" y2="21" />
    </>
  ),
  "Neighbours & community": (
    <>
      <path d="M2.5 12 7 8l4.5 4" />
      <path d="M3.5 11v8h7v-8" />
      <path d="M12.5 12 17 8l4.5 4" />
      <path d="M13.5 11v8h7v-8" />
      <path d="M6 19v-3h2v3" />
      <path d="M16 19v-3h2v3" />
    </>
  ),
  "Customer service & retail": (
    <>
      <path d="M5 8h14l-1 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Z" />
      <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
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
