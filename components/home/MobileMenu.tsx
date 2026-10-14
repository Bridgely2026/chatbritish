"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import LangSwitch from "@/components/LangSwitch";

export type MenuLink = { href: string; label: string };

// Below 760px: a native <details> menu, so it opens and closes without
// JavaScript. The script only closes it after a link is followed (a same-page
// link such as /#how would otherwise leave it open over the page), on Escape,
// and on a tap outside it.
export default function MobileMenu({
  links,
  menuLabel,
  navLabel,
  cta,
}: {
  links: MenuLink[];
  menuLabel: string;
  navLabel: string;
  cta: MenuLink;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const menu = ref.current;
      if (e.key === "Escape" && menu?.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    }
    function onPointer(e: PointerEvent) {
      const menu = ref.current;
      if (menu?.open && !menu.contains(e.target as Node)) menu.open = false;
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  function close() {
    if (ref.current) ref.current.open = false;
  }

  return (
    <details ref={ref} className="group relative ms-auto min-[760px]:hidden">
      <summary className="inline-flex min-h-[44px] cursor-pointer list-none items-center gap-2 rounded-lg border-[1.5px] border-line px-3.5 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
        {menuLabel}
        <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-open:rotate-180">
          <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="absolute end-0 top-[52px] min-w-[220px] rounded-[10px] border border-line bg-surface p-2 shadow-[0_12px_30px_rgb(var(--c-shadow)/0.12)]">
        <nav aria-label={navLabel}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="flex min-h-[44px] items-center rounded-md px-3.5 text-base text-ink hover:bg-sky"
            >
              {link.label}
            </Link>
          ))}
          <LangSwitch className="flex min-h-[44px] items-center rounded-md px-3.5 text-base text-ink hover:bg-sky" />
        </nav>
        <Link href={cta.href} onClick={close} className="btn-primary mt-1.5 w-full">
          {cta.label}
        </Link>
      </div>
    </details>
  );
}
