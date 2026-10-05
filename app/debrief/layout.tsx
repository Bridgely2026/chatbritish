import type { Metadata } from "next";

// page.tsx is a client component, so the route's metadata lives here.
export const metadata: Metadata = { title: "Debrief" };

export default function DebriefLayout({ children }: { children: React.ReactNode }) {
  return children;
}
