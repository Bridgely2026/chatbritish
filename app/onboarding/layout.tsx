import type { Metadata } from "next";
import { FA_ENABLED, alternatesFor } from "@/lib/i18n";

// page.tsx is a client component, so the route's metadata lives here.
export const metadata: Metadata = {
  title: "Start your profile",
  // hreflang only when the Persian pages exist.
  ...(FA_ENABLED ? { alternates: alternatesFor("/onboarding", "en") } : {}),
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
