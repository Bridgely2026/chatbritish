import Link from "next/link";
import En from "@/components/En";
import LangSwitch from "@/components/LangSwitch";
import UnionJack from "@/components/UnionJack";
import { getMessages, localeHref, type Locale } from "@/lib/i18n";
import MobileMenu, { type MenuLink } from "./MobileMenu";

export function headerLinks(locale: Locale): MenuLink[] {
  const m = getMessages(locale).nav;
  return [
    { href: localeHref(locale, "/#how"), label: m.howItWorks },
    { href: localeHref(locale, "/practice"), label: m.practice },
    { href: localeHref(locale, "/debrief"), label: m.debrief },
    { href: localeHref(locale, "/#footer-contact"), label: m.contact },
  ];
}

// The home page header. The other pages keep components/Nav.tsx: Practice
// measures the sticky nav to keep an answer clear of it, and that page isn't
// part of this redesign.
//
// From 760px up: links, then "Get started". Below that: a native <details>
// menu holding the same links and the button. Sticky below the top safe-area
// inset (the home page sets viewport-fit=cover).
export default function SiteHeader({ locale = "en" }: { locale?: Locale }) {
  const m = getMessages(locale).nav;
  const links = headerLinks(locale);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas pt-[env(safe-area-inset-top,0px)]">
      <div className="wrap flex min-h-[68px] items-center gap-7">
        <Link
          href={localeHref(locale, "/")}
          className="inline-flex min-h-[44px] items-center gap-2.5 whitespace-nowrap font-display text-[21px] font-semibold tracking-tight text-ink"
        >
          <UnionJack id="header" />
          <En locale={locale}>Chat British</En>
        </Link>
        <nav aria-label={m.mainLabel} className="ms-auto hidden items-center gap-[26px] min-[760px]:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center text-base text-muted underline-offset-[5px] hover:text-ink hover:underline"
            >
              {link.label}
            </Link>
          ))}
          <LangSwitch className="inline-flex min-h-[44px] items-center text-base text-muted underline-offset-[5px] hover:text-ink hover:underline" />
        </nav>
        <Link href={localeHref(locale, "/onboarding")} className="btn-primary hidden px-4 min-[760px]:inline-flex">
          {m.getStarted}
        </Link>
        <MobileMenu
          links={links}
          menuLabel={m.menu}
          navLabel={m.mainLabel}
          cta={{ href: localeHref(locale, "/onboarding"), label: m.getStarted }}
        />
      </div>
    </header>
  );
}
