import Link from "next/link";
import UnionJack from "@/components/UnionJack";
import MobileMenu, { type MenuLink } from "./MobileMenu";

export const HEADER_LINKS: MenuLink[] = [
  { href: "/#how", label: "How it works" },
  { href: "/practice", label: "Practice" },
  { href: "/debrief", label: "Debrief" },
  { href: "/#footer-contact", label: "Contact" },
];

// The home page header. The other pages keep components/Nav.tsx: Practice
// measures the sticky nav to keep an answer clear of it, and that page isn't
// part of this redesign.
//
// From 760px up: links, then "Get started". Below that: a native <details>
// menu holding the same links and the button. Sticky below the top safe-area
// inset (the home page sets viewport-fit=cover).
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas pt-[env(safe-area-inset-top,0px)]">
      <div className="wrap flex min-h-[68px] items-center gap-7">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center gap-2.5 whitespace-nowrap font-display text-[21px] font-semibold tracking-tight text-ink"
        >
          <UnionJack id="header" />
          Chat British
        </Link>
        <nav aria-label="Main" className="ml-auto hidden items-center gap-[26px] min-[760px]:flex">
          {HEADER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center text-base text-muted underline-offset-[5px] hover:text-ink hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/onboarding" className="btn-primary hidden px-4 min-[760px]:inline-flex">
          Get started
        </Link>
        <MobileMenu links={HEADER_LINKS} />
      </div>
    </header>
  );
}
