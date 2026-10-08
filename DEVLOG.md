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

**Live URL: https://chatbritish.ai** (the old `bridgely-production-c362.up.railway.app` address no longer exists).

1. Cursor commits to a **new branch**, not `main` directly.
2. Branch gets pushed to `origin` — **this alone does not deploy anything.**
   Railway only watches `main`.
3. Merge the branch into `main` explicitly, every time.
4. Check the GitHub commit status for the merge commit: Railway reports
   "Success - <domain>" when the deploy finishes.
5. **Verify live, not just "build succeeded."** Check the exact reported
   scenario, at a true 375x667 phone profile, and the real payload or
   page source where possible. A check against the live HTML (title,
   canonical, `og:image`, no "bridgely" text) is something Cursor can do;
   a real phone is something only Amiro can do.
6. Feature branches stay until the live check passes, then can be deleted.

Standing rules learned this session:
- **Never give an agent a Railway CLI login.** It can read every project
  variable, including the Anthropic, Supabase service-role and Voyage keys.
  Everything needed is two steps in the dashboard.
- **`NEXT_PUBLIC_*` values are baked in at build time.** Setting one in
  Railway does nothing until a new build runs. The live `og:image` pointed
  at localhost for this reason until `metadataBase` got a code fallback.
- **Playwright's "iPhone SE" profile is 320x568, not 375x667.** Use a true
  375x667 and 360x640 profile and keep 320 as an extra only.
- **Check a plan's custom-domain limit before adding a domain** (see the
  domain incident below).
- When an agent says a prompt's job doesn't exist in the repo, believe it:
  a prompt that was corrected before it was sent never ran.
- On this Mac curl's normal name lookup can time out while `dig` answers,
  so use `curl -4`. Its openssl is LibreSSL 3.3.6 with no `-ext` option, so
  read a certificate through curl or Python instead.

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

- Fixed reference texts (one per category; now 12, regenerated and live),
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

---

## Voyage connectivity, the taxonomy sync, and the admin-route detour

**Symptom.** Every Voyage call from the local machine (and from Cursor's
environment) returned a bare HTML **403**, even with no API key. Claude
Code's login returned an OAuth **403** too. A 403 with no JSON error, before
any key is checked, fits geographic blocking at the service's edge (a
presumption, not confirmed). Live Debrief on Railway was unaffected,
because Railway's calls come from elsewhere. Once the terminal's traffic
took a different network path (VPN/proxy), Voyage answered locally. The
exact setting wasn't recorded.

**Detour.** While the cause was unconfirmed, two secret-protected admin
routes were built to run the sync and the reference-embedding job on
Railway (shared `scripts/lib` modules, `x-admin-secret` header, dry run by
default). They were never needed, were left inert (the secret was never
set on Railway), and were **deleted** (`remove-admin-routes`). The shared
modules stayed and the CLI scripts use them.

**What the sync does now.** `scripts/lib` batches about 20 texts per Voyage
request, paces requests to stay under the no-payment-method limits (3
requests/min, 10K tokens/min), retries 429s with backoff, skips unchanged
rows by content hash, and retries Supabase writes. Eligibility: `Approved`,
and the Grounding Check cell must not start "Cultural consensus" (kept-live
exception for rows already active). `--dry-run` reads the database and
makes no Voyage calls.

**The run.** First real run wrote 103 of 197 rows, then one Supabase write
failed (`fetch failed`). Nothing was left half-written and re-running was
safe; the second run finished the other 93 with no retries. Result: 200
active, all Approved, all with 1024-dim embeddings, HC-1 carrying its new
text. The 12-category reference embeddings were regenerated in the same
session (12 entries, each 1024-dim).

## The 200-row taxonomy file — validation and resolution

The file arrived structurally clean (200 rows, no duplicate Norm IDs, no
missing fields, 12 categories, prefixes ED/DR/MN/TR/NB/CS). It carried a 9th
"Grounding Check" column: 159 rows read "Cultural consensus — needs a real
client case", 41 "Search-verified", all marked Approved. Nothing was
synced while that contradiction stood. The founder then stated that he had
reviewed all 200 individually, the column was cleared, and the sync gate
(above) was left in place for the future. Cost of clearing it: the specific
citations on the 41 search-verified rows are gone.

When the new file replaced the old one, a dry run showed 200 eligible and 0
held back. Three live rows (WP-1, HL-1, JS-1) were kept active by the
exception before that; HC-1 was re-embedded because its text had genuinely
changed.

## Debrief calibration, fallback and hardening

With 200 entries a single similarity cutoff stopped separating clear from
vague cases, so thresholds were recalibrated from a 16-description test:

| Case type | Observed top similarity |
|---|---|
| 12 clear cases (one per category) | 0.535 to 0.699, except housing at 0.348 |
| 2 vague descriptions | 0.427 and 0.473 |
| Unrelated (cat vaccinations / Victoria sponge) | 0.297 / 0.195 |

Set **0.50 confident / 0.30 floor**. A needless follow-up costs one turn; a
confident wrong answer costs trust, so the line leans strict. The cat
question still only fails because `entry_applies` says false, which is why
that check stays. End-to-end test (6 descriptions, with follow-ups): both
vague cases ended `no_match` or a follow-up, never a confident answer;
unrelated ones ended `no_match`; bill-split matched MN-3 first time.

Replay of the 11 older `debrief_gaps` rows against the 200 entries: 1 matched
on a first call, 9 asked a follow-up, 1 `no_match`; scores were all higher
than when logged. A second replay of 5 borderline cases with an invented
follow-up answer: 4 of 5 matched correctly (HC-8, WP-2, WP-17, WP-1).

**Ranking miss and fix.** The 5th (a landlord-tap case) tied HL-15 and HL-1
at 0.477, HL-15 sorted first, Claude declined it, and the route only ever
asked about the top result, so the user got `no_match` with the right entry
beside it. Fix: when the top candidate is declined, try up to 3 candidates
at or above the floor and within `FALLBACK_MARGIN = 0.03` of the top. The
margin rests on one tie (HL-1 was 0.027 below, a greetings case 0.033 below
and correctly excluded), so treat it as provisional.

**Malformed output.** One 502 in testing: Claude said an entry applied but
left out a required field, and once fallbacks existed a bad reply on any
candidate would have ended the request. Now `entry_applies` must be a
boolean and, when true, all four answer fields must be non-empty strings;
retry once, then skip to the next candidate; if nothing applied and one was
skipped, return a friendly 503 and write **no** gap row. Tested with a mocked
Anthropic API (malformed once, malformed twice then valid, malformed
throughout).

**`debrief_gaps` hygiene.** Test rows (cat, sponge, vague test, post-office
queue) were deleted after listing every row and asking for a yes. Two real
rows appeared from the live site on 4 Oct (a "can't make friends" and a
salary-raise case). The raise case would now match via the fallback; the
friends case is a real taxonomy gap.

## `situations[]` stored chip labels, not categories

Onboarding saved the chip text ("Work", "Housing") into `users.situations`,
and scoring looked it up by that text, so renaming a chip would silently
stop matching existing users. Fixed to store the full canonical category
name everywhere (scoring, sector rule, practice URL param), chips unchanged
on screen. Seven rows existed; five needed converting. Checked by running the full
role x time-in-UK x situation grid (312 combinations): no bonus ever reaches
a new category. Cheap to fix with a handful of users; much dearer later.

## Practice — second round of live bugs

- **Feedback bar covering the screen on phones.** After the earlier fixes,
  the bar still took about two thirds of a small screen because its button
  squeezed the explanation into a narrow column. Now stacked below the `sm`
  breakpoint (icon and verdict, full-width text, full-width button, norm ID)
  with tighter padding, and after an answer the page scrolls so the **chosen
  option** and the bar are both visible. Measured across every scenario and
  option: worst case 34% of the screen at 375x667, 36% at 360x640, 43.5% at
  320x568. The earlier "73%" figure had been measured at 320x568 by mistake.
- **Option shuffling, reveal-on-wrong, transparency** — as above, unchanged.

## Practice pipeline: scenarios from a workbook

Hand-written scenarios (6, written early by Claude, never reviewed until
Kianoush read them) were replaced by `data/chat_british_scenarios.xlsx` and
an import script. Validated against a deliberately broken copy: duplicate ID,
category mismatch, missing field, unknown norm, identical answers and invalid
status are each reported with a row number. `--include-draft` is dev-only and
makes the next build fail so drafts can't ship. Sessions draw 5 at random;
the old per-scenario titles were dropped (each heading now shows the
category). Debrief's "Practice this norm" now passes `?norm=<id>`.

The workbook is separate from the taxonomy workbook on purpose: both are
binary files and two people editing one causes conflicts. Its **Review
state** column (24 read individually, 96 bulk-approved) is the honest record
of how approved each row is.

## Design passes

Two restrained passes ("quietly British"): racing green accent for brand
decoration only; double rules; banded category cards; perforated stamp edge
on the home hero card only (CSS mask; a solid offset shadow showed through
the perforations and had to be lightened); rail-ticket recap; 12 redrawn
icons (three needed a second draw after a 2x review: housing read as one
building, the neighbours hedge looked like an arch, the job-search clip hit
the header lines; transport and healthcare icons were revised after the screenshot review); a hand-written margin note on the hero (placed beside the label at
1024px and above so it never covers text); a six-row field guide using
verbatim taxonomy text (WP-17, HC-4, HL-1, SO-8, DR-2, CS-1); herringbone on
the closing band; favicon, apple icon, 1200x630 share images; per-page
titles and canonical URLs. At 375, the nav only wrapped at 360 and below, so
only that was fixed ("Start" replaces "Get started" below `sm`).

The palette described here (racing green, paper) was replaced on 7 Oct; see
"Design refresh, home page and Debrief follow-up fix" below.

## Domain and certificate incident

`www.chatbritish.ai` was added in Railway to make `www` work. The plan allows
**one** custom domain, so the new entry took the only slot and the main
domain lost its certificate: Chrome showed `NET::ERR_CERT_COMMON_NAME_INVALID`
on both addresses and the site was effectively down until Amiro removed
`www` and re-added `chatbritish.ai` (valid Let's Encrypt certificate,
expiring 3 Jan 2027, auto-renews). A code redirect from `www` to the main
domain exists but does nothing while `www` isn't attached. The two `www`
DNS records in Hostinger have been deleted; `www` no longer resolves. Don't touch `ALIAS @` or
`TXT _railway-verify`. All email records (MX, SPF, DKIM CNAMEs, DMARC,
autoconfig/autodiscover) belong to Hostinger mail and must stay.

## Claude Code login (local machine)

`/login` completed in the browser ("You're all set up") but the terminal kept
asking, then returned `OAuth error: Request failed with status code 403`.
Known token-handoff bug reports exist, and the 403 fits the same network
cause as Voyage, but the cause was never isolated. Cursor worked normally
afterwards, so it didn't block anything; don't spend time on it unless it
recurs.

## Practice variety and a streak crash
- The recap no longer lists norm IDs. After any wrong answer it says "The
  ones you missed will come back first."
- lib/seen.ts records each answered scenario (right or wrong, with a
  timestamp) in localStorage under chat_british_seen, at answer time, so
  quitting midway still counts. Slots fill: never seen, then last answered
  wrong, then least recently seen; the Debrief hand-off scenario goes
  first. It is per browser, so clearing data or switching device starts
  fresh. Tested over three sessions in one category: sessions 1 and 2
  covered all 10 with no repeats, and session 3 began with the misses.
- A bug found on the way: lib/streak.ts had no try/catch, so a browser
  that blocks storage crashed the whole Practice page (also on main
  before). Fixed; counting is unchanged.
- Norm ID labels were removed from the feedback bar and the Debrief answer
  card. The feedback bar is now at most 28.2% of the screen at 375x667 and
  29.4% at 360x640, down from 31.8% and 35.6%.

---

## Footer and privacy stub

A sitewide footer and a noindex /privacy placeholder are live. The footer is
hidden while a Practice question is on screen, because it sat under the fixed
feedback bar and hid its disclaimer. The branch had uncommitted work from an
earlier session; check the diff of leftover work before building on it. The
live check on 5-6 Oct confirmed: valid Let's Encrypt certificate to 3 Jan
2027, all four pages 200 with correct titles and canonicals, no 'bridgely' or
'Based on norm' in the live code.

---

## Design refresh, home page and Debrief follow-up fix (7 Oct 2026)

Three merges to main, each deployed with Railway reporting success:
`cab0a77` (Debrief fix), `d04e03f` (design refresh), `5f80c56` (home page).
The live site was checked with `curl -4` afterwards: `#how-it-works`, the
"Questions" FAQ, the proof strip and `#1F3A5F` in the CSS are all present.

**Debrief: retrieval ignores Claude's follow-up question.** After a
follow-up, the route used to embed `description + "Follow-up Q: …" + answer`.
Claude's question can name other topics as alternatives ("a referencing
check or ending your tenancy?"), which pulled those entries above the right
one. Retrieval now embeds `description + answer` only; Claude still sees the
question in the generation step. Regression run (dev server, ~25 s apart):
leaking tap, greetings, cat vaccination and Victoria sponge passed earlier;
bill split MN-3 0.669, promotion WP-2 0.627, "take that offline" WP-17
0.521 on the first call; "I'll see what I can do" asked a follow-up (WP-1
0.419) and matched WP-1 at 0.450 after the answer.
- **GP lesson:** the first GP wording described a *receptionist* saying
  "not urgent". HC-8 ranked top (0.608) but Claude correctly said it didn't
  apply, because HC-8 is the GP's own wait-and-see. Reworded as the GP
  saying it ("come back in two weeks if it hasn't settled"), it matched
  HC-8 at 0.579 first time. A high similarity with `entry_applies: false`
  can be the check working, not a bug; read the entry before blaming the
  route.
- **Testing without writing gap rows:** a temporary one-line early `return`
  at the top of `logGap()`, tagged `TEMP-NO-GAP`, with a `debrief_gaps` row
  count before and after (15 and 15). It was removed before committing and
  `logGap()` diffed identical to main's. Never commit with that tag present.
- The leaking-tap test row from 6 Oct was deleted from `debrief_gaps`
  (exactly one matching row); the table now has 14 rows.
- The Supabase MCP connector returned "You do not have permission" on this
  project. Small read-only scripts using `node --env-file=.env.local` and
  `@supabase/supabase-js` with the service-role key worked instead.

**Design refresh (design-startup-1).** Navy primary `#1F3A5F` (with
`primary-dark`, `sky`), canvas `#FBFAF7`, amber decorative only, `field` for
input borders (3:1), `muted` darkened to `#56626E` so it passes 4.5:1 on
every background including the wrong-answer bar; racing green, paper and
brick-dark removed. Shared `.btn-primary` / `.btn-secondary` / `.link`;
sticky nav (Practice auto-scroll measures from below it); icons and share
images recoloured with the same layouts. Brick and sage are answer states
and errors only, except the hero's red-pen margin note, which was moved
from navy to brick (6.43:1 on white, 6.16:1 on canvas) and is named as the
one exception in `tailwind.config.ts`.

**Home page (design-startup-2).** Proof strip (counts generated from
Approved rows at build time), How it works (`#how-it-works`, three steps,
`components/StepIcon.tsx`), Practice and Debrief cards with real 375px
screenshots via `next/image` (width/height set, lazy), FAQ with native
`<details>`. The "How it works" nav link shows from `sm` up only; below
640px it pushed the page sideways. "Practise" became the verb in four
places (hero, "Practise this norm", "Practise another category", meta
description); onboarding's lowercase "practice"/"practicing" was left alone.
- **Debrief screenshot:** replaced the leaking-tap follow-up screen with a
  real answer card. The bill-split sentence scored MN-3 0.592 on retrieval
  alone, then one real request matched MN-3. The first capture had the
  Next.js dev-mode "N" badge over a button; it was re-shot by having
  Playwright return the same response (`page.route`) with
  `nextjs-portal{display:none}`, so no second real request was made.
  `public/home-debrief.webp` is 654×1456, 84.6 KB (`cwebp -q 82`).
- **Page checks** (production build, Playwright from the gstack install):
  one h1, no sideways scroll at 320/360/375/640/768/1280, nav on one line,
  CLS 0, both images load. Screenshots and `v7-report.json` are in
  `~/Desktop/chatbritish-design-screens/v7`.

All three working branches were safe-deleted locally and on origin after
checking their tips were in main; only `main` remains.

**Fonts are now self-hosted** with `next/font/google` (in `app/layout.tsx`,
from the redesign-1 branch): Fraunces, Work Sans and Caveat are downloaded
at build time and served from our own domain, so visitors' browsers no
longer request anything from fonts.googleapis.com or fonts.gstatic.com.

---

## Privacy audit and fixes (8–9 Oct 2026)

**Audit (read-only).** Supabase holds `users` (keyed by the anonymous auth
user id, with free-text `struggle` and `city` and the optional `email`),
`debrief_gaps` (free-text descriptions and follow-up answers, no user id,
no IP) and `taxonomy_entries`. Anonymous auth users far outnumber profiles,
because sign-in happens when the onboarding page opens. No cookies, no
Set-Cookie, no analytics, no third-party requests on page load except
onboarding's Supabase sign-in; localStorage holds `chat_british_seen`,
`chat_british_streak` and the Supabase auth token. Findings that led to
fixes: error logs printed whole error objects (a Postgres constraint
error's details include the failing row, and Voyage error bodies were
logged verbatim); `/api/classify-struggle` had no rate limit; Debrief's
"Save to my log" stored nothing; no privacy information at collection; no
way to delete one's data. Nothing sends email and there's no unsubscribe;
there is no retention job, delete route or TTL anywhere.

**The fixes (merged as `b3e8f25`), and how each was proved:**
- **Safe error logs** (`lib/log-error.ts`): a fixed label, the error name,
  and an HTTP status or short error code only. Voyage errors no longer keep
  the response body. Proved with a **canary test**: a `fetch` preloaded into
  the Next server (`NODE_OPTIONS=--import`) answered every Voyage, Anthropic
  and Supabase call itself, returning failures whose messages, bodies and
  Postgres "Failing row contains" details carried one canary, while each
  request's text carried another. All eight failure paths (Voyage,
  `match_taxonomy_entries`, follow-up, gap insert, grounded answer,
  malformed output, misconfiguration, and the classifier) were hit; neither
  canary appeared in stdout or stderr.
- **Classifier rate limit** (15 a minute per IP, the Debrief pattern; 429
  with a friendly JSON error). **Limiter test:** 15 requests 200, the 16th
  429, another IP unaffected; real onboarding with the limit used up still
  saved the profile, skipping the struggle signal.
- **"Save to my log" removed** from the Debrief answer card.
- **Privacy lines** under the onboarding struggle box, the email field and
  the Debrief description box, linking to /privacy; no overflow at 375 or
  360.
- **Delete my data:** `/api/delete-my-data` verifies the caller's access
  token with the service-role client, deletes their `users` row and auth
  user, returns 204, 5 a minute per IP, logs nothing about the user; a
  confirm-then-delete button on /privacy (session required) signs out and
  clears the three storage keys. **Throwaway-user delete test:** one
  anonymous user made through real onboarding had 1 row and an auth user;
  after the delete, 0 rows, no auth user, `users` back to 10, localStorage
  empty, button gone on reload. 401 without or with a bad token.
- **Follow-up, deleted-user recovery (`ff8b713`):** after an admin delete
  of the auth user (which cascades the `users` row), the browser kept the
  stale session and the next onboarding save failed (409, 23503).
  `ensureAnonymousUserId` now confirms a stored session with `getUser()`
  and signs in again when Supabase says the user is gone. Retested: one
  fresh sign-in, the profile saved under the new user, everything created
  removed (users 10 -> 10, auth users 89 -> 89).

**Supabase access limitation.** The Supabase MCP connector returns "You do
not have permission" on this project, and the service-role REST API only
reaches the `public` schema (`auth` and `cron` give HTTP 406). So the
`auth.sessions` / `auth.audit_log_entries` IP columns, pg_cron jobs and
Edge Functions can't be checked from here: do those in the Supabase
dashboard. Counts were read with a small `node --env-file=.env.local`
script using the service-role key, printing counts and column names only.

---

## Landing-page redesign (8 Oct 2026)

The approved design is an HTML mockup kept as a reference in
`docs/mockups/chat-british-landing-mockup.html`; it isn't served or
imported. It was ported to React components on the site's tokens and
Tailwind setup (`e8da066`, `384ae01`), without touching Practice, Debrief,
onboarding or their logic.
- **Fonts moved to `next/font`** (Fraunces, Work Sans, Caveat): the old
  Google Fonts `@import` was itself a third-party request on every page, so
  the page couldn't pass "no third-party requests on load" without it.
  Sitewide, same fonts, no new dependency.
- **Header on the home page only** (`components/home/SiteHeader.tsx`);
  Practice measures `Nav.tsx` to keep answers clear of it, so the other
  pages keep that. Feedback-bar heights were measured before and after and
  are identical (149.5 / 168.75 px at 375 and 360, 110.5 px at 1280).
- **Real data, not copies:** counts, the WP-1 stamp card (category plus the
  first three quoted Surface Markers phrases; no norm ID), the SC-WP-2-a
  phone and the WP-17 / HC-4 / HL-1 ledger are read from the generated data.
- **Anchors:** How it works is `#how`, with a hidden `#how-it-works` span
  so old links (and the live check) still land on it.
- **Practise buttons** on the six situation cards use
  `/practice?categories=<category>`: Practice has no `?category=`, but it
  already reads the onboarding `?categories=` list and opens a session in
  the first category with scenarios.
- **Optional pieces render nothing until configured:** the founder section
  (video facade, no request to YouTube before a click), WhatsApp and
  LinkedIn buttons.
- Removed `NormCard`, `StepIcon`, the stamp-edge CSS and the two old
  screenshots (`public/home-*.webp`). Checks: one h1, CLS 0, no text under
  4.5:1, focus visible, no sideways scroll at 1280/390/375/360. Screenshots
  in `~/Desktop/chatbritish-design-screens/v9`.

## Help assistant (8 Oct 2026)

Built behind `NEXT_PUBLIC_HELP_ASSISTANT` and merged, **off**
(`70f43c7`, `a2e911e`, `f506d46`). `/api/assistant` calls
`claude-haiku-4-5-20251001` with the filled knowledge pack as the system
prompt and a forced `reply` tool (`text` plus one `action`); the build
fails on open `[CONFIRM`/`[DECIDE` markers or unfilled `{{…}}` (proved by
temporarily appending each to a copy of the pack).
- **The 23 pack test questions** were run against the real route. First
  run: 4 ("what does … mean") added a hint at the meaning; 14 (visa)
  echoed "visa"; 13 pointed to "a housing adviser or solicitor"; 19 said
  "we take privacy seriously"; 22 answered from outside the pack. Fixes: a
  tool-description line ("Never hint at what a phrase means, even briefly;
  send the person to Debrief."), two pack additions (the day-streak
  sentence and the no-security-claims bullet); 13 and the echoed "visa"
  were accepted as fine. Rerun: all required behaviours pass (declines
  legal, medical and immigration; no visas, prices or other businesses;
  injection resisted; safety reply with no buttons; under 80 words).
- **Rate limit design:** only requests that reach the model count, 6 a
  minute and 20 per rolling 24 hours per IP, in memory, expired stamps
  pruned; checked after validation so invalid requests don't count. The
  three question chips answer locally from the pack (the build fails if
  one can't be found), so they can't be used to spend the limit.
- **Local stand-in API for the limit tests:** a small HTTP server returning
  a fixed tool reply, with the server started with `ANTHROPIC_BASE_URL`
  pointing at it (the SDK reads it, so no test hook in the route). It
  counted every call: 20 succeeded with `remaining` 19 → 0, the 21st was
  `daily_limit` with no model call, another IP was unaffected; 62 calls
  exactly as expected.
- **No text in logs:** each call logs one `[assistant]` line (outcome,
  token counts, action, remaining, status); errors log the class and
  status only. No test question appeared in any server output.

## Anthropic credit incident (8 Oct 2026)

The Anthropic account ran out of credit partway through the first
assistant test run: from question 15 every call returned 400 "Your credit
balance is too low". The same key serves Debrief, so **live Debrief was
failing too** until credit was added, which was the fix. The route
deliberately doesn't log error messages, so the cause was found with one
direct API call with a neutral prompt. Follow-ups: turn on auto-reload in
the Anthropic Console, and give the assistant its own key and workspace
with a spend cap (`ANTHROPIC_API_KEY_ASSISTANT` is supported; not set yet).

## Day streak (8 Oct 2026)

`lib/streak.ts` added 1 per finished session and never reset, while the
label said "day streak" (`1e390ae`). It now stores `{count, lastDay}` with
the device's local date: same day unchanged, the next day +1, any gap back
to 1; the badge is hidden at 0 and an old plain number counts as no streak.
Tested with a mocked clock (two sessions in a day → 1, next day → 2, a
skipped day → 1, legacy value and blocked storage don't crash). The
"come back first" copy was untrue (unseen questions come first) and now
says "The ones you missed will come back."

---

## Open technical items (engineering-only; see CLAUDE.md for the rest)

- [ ] Real-phone verification of the latest deploys (Debrief, onboarding,
      Practice, favicon, share preview)
- [ ] Voyage payment method (rate limit), Anthropic monthly spend cap
- [ ] Debrief thresholds and the 0.03 fallback margin: revisit with real
      usage.
- [ ] Struggle-classification floor (0.30): revisit with real usage
- [ ] Onboarding upsert failure: root cause never directly observed
- [ ] `og:title` and `twitter:title` still show the home title on every page
- [ ] Practice question titles (needs a Title column in the scenarios
      workbook). The "Based on norm…" line was removed from the Practice
      feedback bar and the Debrief answer card (the ID stays in the data).
- [ ] Batch-rebrand remaining Word files
