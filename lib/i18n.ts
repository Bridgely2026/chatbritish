// The Persian interface: UI chrome only, under /fa. English stays at the
// unprefixed URLs. The locale comes from the URL alone: no cookie, no
// Accept-Language redirect, no middleware.
//
// NEXT_PUBLIC_FA_ENABLED must be exactly "on". Unset (or anything else), the
// /fa routes return 404, no switcher or hreflang is rendered, and the English
// pages behave as they did before this file existed.

import type { Metadata } from "next";
import en, { type Messages } from "@/messages/en";
import faJson from "@/messages/fa.json";

export type Locale = "en" | "fa";

// Inlined at build time (referenced literally), like the other NEXT_PUBLIC_ flags.
export const FA_ENABLED = process.env.NEXT_PUBLIC_FA_ENABLED === "on";

// Type-checks fa.json against the English strings: a missing key fails the build.
const fa: Messages = faJson;

export function getMessages(locale: Locale): Messages {
  return locale === "fa" ? fa : en;
}

// Fills {name} placeholders. Numbers are written with Latin digits on both
// locales (String(), never toLocaleString("fa")).
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in vars ? String(vars[key]) : match));
}

// fmt() for JSX text: the same text as separate parts ("Step ", 2, " of ", 3),
// so React renders the text nodes it rendered before these strings moved
// into messages. One merged string draws the same words but can kern
// differently at the old node boundaries.
export function fmtNodes(template: string, vars: Record<string, string | number>): (string | number)[] {
  return template
    .split(/\{(\w+)\}/)
    .map((part, i) => (i % 2 === 1 ? (part in vars ? vars[part] : `{${part}}`) : part))
    .filter((part) => part !== "");
}

// An internal path in the given locale: "/practice" -> "/fa/practice",
// "/" -> "/fa", "/#how" -> "/fa#how". /privacy is English-only, so callers
// never pass it here.
export function localeHref(locale: Locale, path: string): string {
  if (locale === "en") return path;
  if (path === "/") return "/fa";
  if (path.startsWith("/#") || path.startsWith("/?")) return `/fa${path.slice(1)}`;
  return `/fa${path}`;
}

// The same page in the other locale, from a pathname. English-only pages
// (/privacy) have no Persian version and return null.
export function counterpartPath(pathname: string): string | null {
  if (pathname === "/fa" || pathname.startsWith("/fa/")) return pathname.slice(3) || "/";
  if (pathname === "/" || ["/onboarding", "/practice", "/debrief"].includes(pathname)) {
    return pathname === "/" ? "/fa" : `/fa${pathname}`;
  }
  return null;
}

export function localeFromPath(pathname: string | null): Locale {
  return FA_ENABLED && pathname !== null && (pathname === "/fa" || pathname.startsWith("/fa/")) ? "fa" : "en";
}

// Canonical plus hreflang for a page that exists in both languages. `path`
// is the English path ("/" or "/practice"). Without the flag, only what the
// English pages had before: a self-referential canonical.
export function alternatesFor(path: string, locale: Locale): Metadata["alternates"] {
  if (!FA_ENABLED) return { canonical: "./" };
  const faPath = localeHref("fa", path);
  return {
    canonical: locale === "fa" ? faPath : path,
    languages: { en: path, fa: faPath, "x-default": path },
  };
}
