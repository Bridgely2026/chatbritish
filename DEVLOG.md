# Chat British — Development Log

This is the technical companion to `CLAUDE.md`. `CLAUDE.md` covers product,
business, and endorsement-case context — read that first for "what is this
and why." This file covers build history, bugs, fixes, and debugging lessons
— read this for "what actually happened in the code and why it broke."

**Naming note:** this project was built and shipped under the name
"Bridgely" and renamed to "Chat British" partway through. Entries below
from before the rename may reference the old name in commit messages, file
paths, or quoted error output — left as-is rather than rewritten, since
that's what actually happened at the time.

---

## Standard deploy workflow (follow this every time)

**Live URL:** https://bridgely-production-c362.up.railway.app

1. Cursor commits to a **new branch**, not `main` directly.
2. Branch gets pushed to `origin` — **this alone does not deploy anything.**
   Railway only watches `main`.
3. Merge the branch into `main` explicitly, every time.
4. Check Railway's **Deployments tab** for a fresh build actually running.
5. **Verify live, not just "build succeeded."** Check the exact reported
   scenario, at mobile width (375×667 minimum), and the actual network
   payload/console output where possible — not just that the UI looks right.

Feature branches are left in place until the live check passes.

---

## Rebrand: Bridgely → Chat British

Full rename across the codebase and GitHub. Sequence:

1. **GitHub repo renamed** (`bridgely` → `chatbritish`). **Account NOT
   renamed** — deliberately left as `Bridgely2026`, to avoid extra risk to
   Railway's integration and local git remotes for a purely cosmetic gain.
   Repo URL is now `https://github.com/Bridgely2026/chatbritish`.
2. **Local git remote confusion, worth remembering:** mid-rename, the local
   remote briefly pointed at a URL that didn't exist yet
   (`ChatBritish2026/chat-british` — wrong account name, wrong repo
   spelling), producing a "Repository not found" error that looked like a
   credentials problem but was actually just a nonexistent target. Lesson:
   when a rename is happening across GitHub's UI and the local git config
   at the same time, confirm what actually exists on GitHub's side (via the
   browser, not assumption) before updating the local remote to match — the
   two can drift apart easily mid-process.
3. **Code rebrand** (separate step, after the repo settled): grepped the
   whole repo for "bridgely"/"Bridgely" case-insensitive before touching
   anything, updated UI text, `package.json` name (`chat-british`),
   `app/layout.tsx` metadata, the debrief API's fallback message and system
   prompt, README, and renamed the taxonomy spreadsheet file
   (`chat_british_taxonomy_template.xlsx`). Verified via the actual built
   `.next` output and rendered page HTML, not just a source-level grep.
4. **Deliberately NOT renamed:** database table/column names, environment
   variable names, taxonomy content itself — internal identifiers and data,
   not brand references.
5. **Known side effect, accepted:** the `localStorage` streak key changed
   (`bridgely_streak` → `chat_british_streak`), so any existing streak
   resets. Fine at this stage — no real users yet beyond Kianoush testing.
6. **Deliberately deferred:** the executive summary `.docx` and other Word
   files still say "Bridgely" — batching that rebrand for later rather than
   doing it piecemeal now.

---

## Claude Code CLI install issues (local machine, unrelated to the app itself)

Two separate problems hit back to back, worth recording since they look
similar but aren't:

1. **`zsh: permission denied: claude`** — turned out to be a stale shell
   command-hash pointing at a broken/nonexistent path, compounded by
   running the command from the wrong project folder entirely
   (`finnex-landing`, a different venture). `which claude` returning "not
   found" was the real signal — no executable existed in PATH at all.
2. **`npm install -g @anthropic-ai/claude-code` failing with `ENOTEMPTY`**
   — a previous interrupted install left a stray temp-named folder
   (`.claude-code-xxxxx`) sitting in `/opt/homebrew/lib/node_modules/
   @anthropic-ai/`, blocking npm's atomic rename-based install step.
   Fixed by manually removing both the broken install and the stray temp
   folder, then reinstalling clean. Both folders were user-owned (not
   root), so no `sudo` was needed — worth checking ownership before
   reaching for `sudo` on a permissions-shaped error, since it isn't always
   actually a permissions problem.

---

## Onboarding — transient upsert failures

A real user (Kianoush, on his own phone, in mobile Safari) hit "We couldn't
save your answers" twice. Root cause never directly captured, but two
genuine issues were found and fixed:

- **Missing pending-state feedback.** `ensureAnonymousUserId()`'s in-flight
  promise was already correctly memoized — the actual gap was nothing
  stopping a submit tap *during* that wait with no visible feedback. Fixed
  with an `authChecked` state and a "Preparing…" disabled button state,
  gated on the bootstrap effect settling (success **or** failure).
- **Double-tap race.** A `useRef`-based submit lock, reset in a `finally`
  block so a failed submit can't get permanently stuck locked.
- **Logging added**: `console.error("[onboarding-upsert-failed]", err)`
  with the real thrown Supabase error, for next time.

## Onboarding — struggle-text classification (new feature)

Free-text "what's confusing you" classified into a taxonomy category via
Voyage embeddings, a 4th additive modifier in `computeStartingPoint()`.

- Fixed reference texts (one per category, now being expanded to 12),
  embedded via `scripts/embed-category-references.mjs`, stored in
  `lib/category-reference-embeddings.json`.
- `app/api/classify-struggle/route.ts` logs the full sorted list
  unconditionally (`[struggle-classify]`) before any floor is applied.
- Confidence floor: **0.30**, from 4 real calibration samples — low-stakes
  given this is an additive nudge that can never override an explicit
  `situations` pick, unlike debrief's threshold.
- `goal` deliberately **not** added to scoring — answers "why are you
  here," not "which topic." Stays stored-only.

## Onboarding — goal field redesign

Two rounds: replaced 3 original options with Kianoush's 7 richer ones (one
wording correction on #6 discussed and then explicitly reverted back to
his original phrasing per his call — noted so it doesn't get "fixed" again
without context), then restructured into a two-line stacked chip (bold
category label above, full sentence below) — reverses an earlier "labels
shouldn't be user-facing" decision; they're deliberately visible now.

## Practice session — bug fixes (all found live, by Kianoush, on mobile)

- **Wrong-answer transparency.** `bg-brick/10` (10%-opacity) was used for
  incorrect states while correct used solid `bg-sagelight` — an asymmetry
  in the original spec. Fixed with a solid `brick-light` color
  (`#F0DAD5`), used everywhere `bg-brick/10` was.
- **Feedback bar overlapping options — found and "fixed" twice.** First fix
  (dynamic `paddingBottom` via `ResizeObserver`) was verified only against
  the scrolled-to-bottom state. Reported again on a different scenario
  (JS-1). Actual root cause: nothing ever auto-scrolled — the padding
  reserved space correctly the whole time, a user who hadn't scrolled just
  never saw it. Fixed with auto-scroll-to-bottom on answer. **Lesson:** a
  fix that passes its own test can still be tested against an incomplete
  scenario — re-test the literal reported case, not an inferred equivalent.
- **Correct answer always at position 2**, across all 6 hand-written
  scenarios — unintentional authoring pattern. Fixed with a Fisher-Yates
  shuffle at render time, re-shuffled every question transition (a memo
  keyed on scenario identity would silently fail for single-scenario
  categories).
- **Reveal correct answer on a wrong pick** (Duolingo's "knowledge of
  correct response" pattern) — reversed an earlier "don't reveal it"
  choice on Kianoush's suggestion; better learning-design pattern.

---

## The 200-row taxonomy submission — structural validation results

Ran the same validation pass as the original template: **200 rows, zero
duplicate Norm IDs, zero missing required fields.** Structurally clean.

**Not structurally clean, though — a content/process issue, not a data-
integrity one:** the file has a 9th "Grounding Check" column not part of
the original template. 159/200 rows self-flag as "Cultural consensus — no
independent citation to check; needs a real client case, not further AI
search"; 41/200 say "Search-verified" (fact-checked, not case-grounded).
All 200 are marked `Status: Approved` regardless. This contradicts the
locked no-automatic-generation/founder-grounding rule as written. See
`CLAUDE.md`'s taxonomy section for the full discussion — **nothing from
this file has been synced into the live system**, pending resolution.

Also found: the file introduces 6 new categories (Education, Dating &
relationships, Money & transactions, Transport & commuting, Neighbours &
community, Customer service & retail) with their own consistent Norm ID
prefix scheme (ED/DR/MN/TR/NB/CS) — adopted as-is for the app's 12-category
expansion rather than inventing a different one.

---

## Open technical items (engineering-only; see CLAUDE.md for product/business open items)

- [ ] Confirm the 12-category expansion CLI prompt actually landed and
      passed its sanity checks — handed off, not yet confirmed
- [ ] Onboarding upsert failure — root cause still not directly observed
- [ ] Struggle-classification floor (0.30) — revisit once real usage/volume
      exists, same as debrief's thresholds
- [ ] Norm ID references ("Based on norm WP-1-...") — still a dead-end
      reference, decision deferred
- [ ] Batch-rebrand remaining docx files (executive summary, etc.)
