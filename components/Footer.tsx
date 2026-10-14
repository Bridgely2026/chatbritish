"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import En from "@/components/En";
import LangSwitch from "@/components/LangSwitch";
import UnionJack from "@/components/UnionJack";
import { LinkedInIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { vazirmatn } from "@/lib/font-fa";
import { SUPPORT_EMAIL, SUPPORT_MAILTO, linkedinHref, whatsappHref } from "@/lib/contact";
import { FA_ENABLED, counterpartPath, getMessages, localeFromPath, localeHref } from "@/lib/i18n";

// Sitewide footer: wordmark and tagline, Explore links, and a contact column
// (WhatsApp and LinkedIn render only when their variables are set; see
// lib/contact.ts). Practice hides it while a question is on screen (see
// body[data-practice-question] in globals.css). Links get a 44px tap area.
//
// The root layout renders it, outside the /fa layout, so it reads the locale
// from the URL itself (a client component, still prerendered with the page).
// On Persian pages it carries its own lang/dir. Privacy always links to the
// English notice: there is no Persian one.
// `year` comes from the server (the build year on static pages), so the
// client never renders a different year than the prerendered HTML.
export default function Footer({ year }: { year: number }) {
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const showSwitch = FA_ENABLED && counterpartPath(pathname) !== null;
  const m = getMessages(locale);
  const exploreLinks = [
    { href: localeHref(locale, "/practice"), label: m.nav.practice },
    { href: localeHref(locale, "/debrief"), label: m.nav.debrief },
    { href: localeHref(locale, "/#how"), label: m.nav.howItWorks },
    { href: "/privacy", label: m.footer.privacy },
  ];
  return (
    <footer
      id="footer-contact"
      {...(locale === "fa" ? { lang: "fa", dir: "rtl" } : {})}
      className={`${locale === "fa" ? `${vazirmatn.variable} ` : ""}site-footer scroll-mt-[calc(env(safe-area-inset-top,0px)+72px)] border-t border-line bg-canvas pb-[max(40px,env(safe-area-inset-bottom,0px))] pt-14`}
    >
      <div className="wrap">
        <div className="grid gap-11 min-[560px]:grid-cols-2 min-[980px]:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="min-[560px]:col-span-2 min-[980px]:col-span-1">
            <Link
              href={localeHref(locale, "/")}
              className="inline-flex min-h-[44px] items-center gap-2.5 whitespace-nowrap font-display text-[21px] font-semibold tracking-tight text-ink"
            >
              <UnionJack id="footer" className="h-3.5 w-7" />
              <En locale={locale}>Chat British</En>
            </Link>
            <p className="mt-2 max-w-[19em] text-muted">{m.footer.tagline}</p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className="mb-2 text-[15px] font-semibold text-ink">
              {m.footer.explore}
            </h2>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-muted underline-offset-4 hover:text-ink hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {showSwitch && (
                <li>
                  <LangSwitch className="inline-flex min-h-[44px] items-center text-muted underline-offset-4 hover:text-ink hover:underline" />
                </li>
              )}
            </ul>
          </nav>

          <div>
            <h2 className="mb-3.5 text-[15px] font-semibold text-ink">{m.footer.talkToUs}</h2>
            <div className="flex flex-col items-start gap-3">
              {whatsappHref && (
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <WhatsAppIcon />
                  {m.footer.whatsapp}
                </a>
              )}
              {linkedinHref && (
                <a href={linkedinHref} target="_blank" rel="noopener noreferrer" className="btn-linkedin">
                  <LinkedInIcon />
                  {m.footer.linkedin}
                </a>
              )}
              <a href={SUPPORT_MAILTO} className="link inline-flex min-h-[44px] items-center">
                <En locale={locale}>{SUPPORT_EMAIL}</En>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-x-7 gap-y-3 border-t border-line pt-[22px] text-sm text-muted">
          <p className="max-w-[44em]">{m.footer.notAdvice}</p>
          {/* Static pages are prerendered, so the year is the build year. */}
          <p>
            <En locale={locale}>© {year} Chat British</En>
          </p>
        </div>
      </div>
    </footer>
  );
}
