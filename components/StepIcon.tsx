import type { ReactNode } from "react";
import { SHARED_PROPS } from "@/components/CategoryIcon";

// Line icons for the home page's "How it works" steps and proof strip, drawn
// in the same style as CategoryIcon (48-unit grid, 1.5 stroke, currentColor).
const STEP_PATHS = {
  // Clipboard with a short checklist: the profile
  profile: (
    <>
      <rect x="12" y="9" width="24" height="32" rx="2" />
      <path d="M19 9V7.5A1.5 1.5 0 0 1 20.5 6h7A1.5 1.5 0 0 1 29 7.5V9" />
      <rect x="19" y="9" width="10" height="4" rx="1" />
      <path d="m17 21 1.5 1.5L21 20M24.5 21H31M17 28l1.5 1.5L21 27M24.5 28H31M17 35h4M24.5 35H29" />
    </>
  ),
  // Two speech bubbles, the reply ticked: rehearsing an exchange
  practice: (
    <>
      <path d="M8 10h20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H16l-5 4v-4H8a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
      <path d="M11 15h14M11 19h9" />
      <path d="M40 28H24a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10l4 3.5V39h2a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z" />
      <path d="m28 33.5 2.5 2.5 5-5" />
    </>
  ),
  // Magnifying glass over a line of text: looking back at what was said
  debrief: (
    <>
      <circle cx="21" cy="21" r="12" />
      <path d="m29.5 29.5 10 10M16 18h10M16 23h7" />
    </>
  ),
  // A pen nib with a ruled line under it: reviewed by a coach
  reviewed: (
    <>
      <path d="m12 35 3-8.5L32 9.5a2.8 2.8 0 0 1 4 0l1.5 1.5a2.8 2.8 0 0 1 0 4L20.5 32 12 35Z" />
      <path d="m29 12.5 6.5 6.5M10 41h22" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type StepIconName = keyof typeof STEP_PATHS;

export default function StepIcon({ name, className }: { name: StepIconName; className?: string }) {
  return (
    <svg {...SHARED_PROPS} className={className}>
      {STEP_PATHS[name]}
    </svg>
  );
}
