import type { Metadata } from "next";

// page.tsx is a client component, so the route's metadata lives here.
export const metadata: Metadata = { title: "Practice" };

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
