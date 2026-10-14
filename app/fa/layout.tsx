import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HtmlLangSync from "@/components/HtmlLangSync";
import { vazirmatn } from "@/lib/font-fa";
import { FA_ENABLED, getMessages } from "@/lib/i18n";

// The Persian interface (UI chrome only; scenarios, taxonomy text, Debrief
// answers and /privacy stay English). Behind NEXT_PUBLIC_FA_ENABLED=on:
// without it every /fa route is a 404.

const m = getMessages("fa").meta;

export const metadata: Metadata = {
  title: { default: m.title, template: "%s | Chat British" },
  description: m.description,
  openGraph: { title: m.title, description: m.description, type: "website", url: "./", locale: "fa_IR" },
  twitter: { card: "summary_large_image", title: m.title, description: m.description },
};

export default function PersianLayout({ children }: { children: React.ReactNode }) {
  if (!FA_ENABLED) notFound();
  return (
    <div lang="fa" dir="rtl" className={`locale-fa ${vazirmatn.variable}`}>
      <HtmlLangSync />
      {children}
    </div>
  );
}
