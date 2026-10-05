import type { Metadata } from "next";

// page.tsx is a client component, so the route's metadata lives here.
export const metadata: Metadata = { title: "Start your profile" };

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
