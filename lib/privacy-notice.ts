import fs from "node:fs";
import path from "node:path";

// The privacy notice, read from content/privacy-notice.md when the page is
// built. Don't reword it here; edit the Markdown file, and only once the
// wording is approved.
//
// The parser supports only what the file uses: one "# " heading, "## "
// headings, paragraphs (a single line break inside one is kept), "- " bullet
// lists and **bold**. Evaluated when the page module loads, which `next build`
// does while prerendering, so a file that still has a drafting note fails the
// build.

const NOTICE_PATH = path.join(process.cwd(), "content", "privacy-notice.md");

const UNFINISHED = /\[(CONFIRM|DECIDE|LAWYER|INCLUDE|PUBLISH)\b|DATE:|## ##/;

export type Inline = { text: string; bold: boolean };
export type Block =
  | { kind: "h1"; text: string }
  | { kind: "h2"; text: string; id: string }
  | { kind: "p"; lines: Inline[][] }
  | { kind: "ul"; items: Inline[][] };

function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Splits on **…**; the odd-numbered parts are bold.
function inline(text: string): Inline[] {
  return text
    .split("**")
    .map((part, i) => ({ text: part, bold: i % 2 === 1 }))
    .filter((part) => part.text !== "");
}

function parse(raw: string): Block[] {
  const blocks: Block[] = [];
  let para: string[] = [];
  let list: string[] = [];

  const flush = () => {
    if (para.length) blocks.push({ kind: "p", lines: para.map(inline) });
    if (list.length) blocks.push({ kind: "ul", items: list.map(inline) });
    para = [];
    list = [];
  };

  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    if (line === "") {
      flush();
    } else if (line.startsWith("## ")) {
      flush();
      const text = line.slice(3).trim();
      blocks.push({ kind: "h2", text, id: slug(text) });
    } else if (line.startsWith("# ")) {
      flush();
      blocks.push({ kind: "h1", text: line.slice(2).trim() });
    } else if (line.startsWith("- ")) {
      if (para.length) flush();
      list.push(line.slice(2).trim());
    } else {
      if (list.length) flush();
      para.push(line.trim());
    }
  }
  flush();

  if (blocks.filter((b) => b.kind === "h1").length !== 1 || blocks[0]?.kind !== "h1") {
    throw new Error("content/privacy-notice.md must start with exactly one # heading");
  }
  return blocks;
}

function load(): Block[] {
  const raw = fs.readFileSync(NOTICE_PATH, "utf8");
  const unfinished = raw.match(UNFINISHED);
  if (unfinished) {
    throw new Error(`content/privacy-notice.md still has a drafting note: "${unfinished[0]}"`);
  }
  return parse(raw);
}

export const PRIVACY_NOTICE = load();
