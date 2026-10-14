import type { Metadata } from "next";
import { alternatesFor, getMessages } from "@/lib/i18n";

// page.tsx is a client component, so the route's metadata lives here.
export const metadata: Metadata = {
  title: getMessages("fa").meta.practiceTitle,
  alternates: alternatesFor("/practice", "fa"),
};

export default function PersianPracticeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
