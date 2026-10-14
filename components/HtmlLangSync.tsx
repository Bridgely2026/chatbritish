"use client";

import { useEffect } from "react";

// The root layout renders <html lang="en"> for every route. On the Persian
// pages this sets lang="fa" dir="rtl" on <html> once the page is running, and
// puts back lang="en" (no dir) when you leave them, by link or Back button.
// The page's own wrapper (app/fa/layout.tsx) already carries lang and dir in
// the server HTML, so nothing depends on this for layout.
export default function HtmlLangSync() {
  useEffect(() => {
    const html = document.documentElement;
    html.lang = "fa";
    html.dir = "rtl";
    return () => {
      html.lang = "en";
      html.removeAttribute("dir");
    };
  }, []);
  return null;
}
