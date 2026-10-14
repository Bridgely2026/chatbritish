"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FA_ENABLED, counterpartPath, getMessages, localeFromPath } from "@/lib/i18n";

// A link to the same page in the other language. Its text is in the language
// it leads to ("فارسی" on English pages, "English" on Persian ones). Hidden
// when the flag is off and on pages with no counterpart (/privacy).
export default function LangSwitch({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  if (!FA_ENABLED) return null;
  const target = counterpartPath(pathname);
  if (!target) return null;
  const targetLang = localeFromPath(pathname) === "fa" ? "en" : "fa";
  const m = getMessages(targetLang).nav;
  return (
    <Link
      href={target}
      hrefLang={targetLang}
      lang={targetLang}
      dir={targetLang === "fa" ? "rtl" : "ltr"}
      aria-label={m.thisPageLabel}
      className={className}
    >
      {m.languageName}
    </Link>
  );
}
