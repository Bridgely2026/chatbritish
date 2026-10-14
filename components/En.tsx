import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

// English content shown on a Persian page (scenarios, taxonomy phrases, the
// wordmark, Debrief answers): marked lang="en" dir="ltr" so screen readers
// switch voice and punctuation stays on the right side. On English pages it
// renders its children unwrapped, so the English HTML is unchanged.
export default function En({
  locale,
  as: Tag = "span",
  className,
  children,
}: {
  locale: Locale;
  as?: "span" | "div" | "p";
  className?: string;
  children: ReactNode;
}) {
  if (locale === "en") return <>{children}</>;
  return (
    <Tag lang="en" dir="ltr" className={className}>
      {children}
    </Tag>
  );
}
