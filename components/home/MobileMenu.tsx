"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export type MenuLink = { href: string; label: string };

// Below 760px: a native <details> menu, so it opens and closes without
// JavaScript. The script only closes it after a link is followed (a same-page
// link such as /#how would otherwise leave it open over the page), on Escape,
// and on a tap outside it.
export default function MobileMenu({ links }: { links: MenuLink[] }) {
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
    <details ref={ref} className="group relative ml-auto min-[760px]:hidden">
      <summary className="inline-flex min-h-[44px] cursor-pointer list-none items-center gap-2 rounded-lg border-[1.5px] border-line px-3.5 text-[15px] font-medium text-ink [&::-webkit-details-marker]:hidden">
        Menu
        <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-open:rotate-180">
          <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="absolute right-0 top-[52px] min-w-[220px] rounded-[10px] border border-line bg-white p-2 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
        <nav aria-label="Main">
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
        </nav>
        <Link href="/onboarding" onClick={close} className="btn-primary mt-1.5 w-full">
          Get started
        </Link>
      </div>
    </details>
  );
}
