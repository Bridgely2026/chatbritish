import Link from "next/link";
import En from "@/components/En";
import LangSwitch from "@/components/LangSwitch";
import { getMessages, localeHref, type Locale } from "@/lib/i18n";

export default function Nav({ locale = "en" }: { locale?: Locale }) {
  const m = getMessages(locale).nav;
  const href = (path: string) => localeHref(locale, path);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3">
        <Link href={href("/")} className="whitespace-nowrap font-display text-xl font-medium tracking-tight text-ink">
          <En locale={locale}>Chat British</En>
        </Link>
        {/* Tighter gaps and button padding below sm keep the row inside 320px. */}
        <nav className="flex items-center gap-3 whitespace-nowrap text-sm text-muted sm:gap-6">
          <Link href={href("/onboarding")} className="btn-primary px-3 py-2.5 sm:px-4">
            {/* Shortened below sm so the nav stays on one line at 320px. */}
            <span className="sm:hidden">{m.start}</span>
            <span className="hidden sm:inline">{m.getStarted}</span>
          </Link>
          {/* From sm up only: below 640px the row has no room for a fourth item
              without wrapping (it's ~2px from the edge at 320 already). */}
          <Link href={href("/#how")} className="hidden underline-offset-4 hover:text-primary hover:underline sm:inline">
            {m.howItWorks}
          </Link>
          <Link href={href("/practice")} className="underline-offset-4 hover:text-primary hover:underline">
            {m.practice}
          </Link>
          <Link href={href("/debrief")} className="underline-offset-4 hover:text-primary hover:underline">
            {m.debrief}
          </Link>
          {/* Renders only with NEXT_PUBLIC_FA_ENABLED=on. From sm up only, like
              "How it works": below 640px the row has no room for it (it
              overflowed by 2-57px at 375-320). On phones the switcher is in
              the footer, and on the home page in the menu. */}
          <LangSwitch className="hidden underline-offset-4 hover:text-primary hover:underline sm:inline" />
        </nav>
      </div>
    </header>
  );
}
