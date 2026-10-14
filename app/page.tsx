import type { Metadata, Viewport } from "next";
import HomeScreen from "@/components/screens/HomeScreen";
import { FA_ENABLED, alternatesFor } from "@/lib/i18n";

// Lets the sticky header and the footer sit under a phone's notch and home
// bar; they pad themselves with the safe-area insets.
export const viewport: Viewport = { viewportFit: "cover" };

// hreflang only when the Persian pages exist; otherwise the root layout's
// self-referential canonical, as before.
export const metadata: Metadata = FA_ENABLED ? { alternates: alternatesFor("/", "en") } : {};

export default function LandingPage() {
  return <HomeScreen locale="en" />;
}
