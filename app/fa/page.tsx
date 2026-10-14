import type { Metadata, Viewport } from "next";
import HomeScreen from "@/components/screens/HomeScreen";
import { alternatesFor } from "@/lib/i18n";

export const viewport: Viewport = { viewportFit: "cover" };

export const metadata: Metadata = { alternates: alternatesFor("/", "fa") };

export default function PersianLandingPage() {
  return <HomeScreen locale="fa" />;
}
