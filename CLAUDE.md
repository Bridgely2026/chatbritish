# Chat British — Project Reference

**What this is:** UK Innovator Founder Visa (IFV) venture for an existing client — an English-language/cultural-communication coach in the UK with ~50 existing online clients. This doc is the working memory for the project: decisions made, architecture, and what's still open. Read this before picking work back up.

**Companion doc:** `DEVLOG.md` covers build history, bug fixes, and engineering-level debugging lessons — read that too when picking up development/debugging work specifically. This file stays focused on product, business, and the endorsement case.

**Client/founder's name: Kianoush.**

**Naming note:** the product was originally built under the name "Bridgely" and renamed "Chat British". Every user-facing reference, `package.json` and the app's own text has been updated. **GitHub stayed on the `Bridgely2026` account** (deliberately not renamed) — the repo is `Bridgely2026/chatbritish`. Old "Bridgely" references in git history, the account name, the Railway service name (`bridgely.railway.internal`) and the Word documents are expected; the product name is Chat British everywhere a user or reader sees it.

**Live site: https://chatbritish.ai** — the only domain we own. (`chatbritish.co.uk` was only ever a suggestion and is not owned; never cite it. `www.chatbritish.ai` is not attached either — see `DEVLOG.md`.)

---

## MVP build status (as of the latest session)

**Chat British is live on Railway at chatbritish.ai.** All three built features are deployed. Everything below was verified by Cursor against the build and the live HTML/headers; **the real-phone checks of the latest deploys are still pending** (see Open items).

- **Deployment: Railway** (deploys `main` only). See `DEVLOG.md` for the Netlify/Vercel/Railway history, the deploy workflow, and the custom-domain incident.
- **Repo/accounts:** kept fully separate from Amiro's other ventures — GitHub `Bridgely2026` (repo `chatbritish`), own Supabase project (`ehyglngeobtppgxtupiv`), own Anthropic API account, own Voyage AI account, own Railway account. The domain's DNS is managed in Kianoush's Hostinger account (signed up with Google, no separate password yet; Hostinger's unlink-Google-and-set-password flow is the route to shared access).
- **Feature 1 (onboarding):** real 3-step flow, Supabase Anonymous Auth, `users` table (RLS-protected). Step 1 now offers **12 situations**; `situations[]` stores the full canonical category name (e.g. "Money & transactions"), never the chip label. Step 2: household, time-in-UK, role, sector (conditional on Workplace/Job search). Step 3: city, struggle (required), goal, optional email.
  - **Four ranking signals:** `situations` (+2/category), `role` and `time-in-UK` (additive modifiers, original 6 categories only — deliberately no modifiers for the 6 new categories), and **struggle-text classification** via Voyage embeddings against 12 reference texts (floor 0.30). None can override an explicit `situations` pick.
  - `household`, `city`, `email` and `goal` are stored-only, not scored — deliberate. `goal` has 7 options (two-line chips: bold label + sentence; labels are user-facing).
- **Feature 2 (practice):** **data-driven from `data/chat_british_scenarios.xlsx`** — 120 scenarios, 10 per category across all 12. `npm run scenarios:import` validates (unique IDs, Norm ID exists and is Approved in the taxonomy, category matches, exactly one right and two wrong answers) and generates `lib/scenarios-generated.ts` from **Approved** rows only. A session draws up to 5 at random from the category, options shuffled. Streak, recap (styled as a rail-ticket stub), feedback bar as before. **The streak is per day:** `{count, lastDay}` in localStorage (`chat_british_streak`), using the device's local calendar date; finishing a session the same day leaves it, the next day adds one, any gap restarts at 1; the badge shows while the last session was today or yesterday and is hidden at 0 (an old plain-number value counts as no streak). Practice remembers what each user has seen (localStorage key chat_british_seen): a session fills its 5 slots with scenarios never seen, then those last answered wrong, then the least recently seen. The recap is a rail-ticket stub showing the streak line and, after a miss, "The ones you missed will come back." The streak code survives blocked storage. Debrief's "Practise this norm" opens `/practice?norm=<id>` and starts with that norm's scenario when one exists.
  - **Authorship, stated plainly:** all 120 scenarios were drafted by Claude from approved taxonomy entries (setup from the entry's example, right answer from its Good Response, wrong answers from the misreadings it warns about, feedback restating "What It Actually Means"; legal and statistical details deliberately left out). The workbook's **Review state** column records the truth: **24 rows** (the original 6 and the first 18) were read and approved individually by Kianoush; **96 rows** were accepted in bulk by him with item-by-item review pending. 15 of those 96 are flagged "Spot-check first". The founder-approves-everything rule is preserved by that record, not by pretending all 120 were read.
- **Feature 3 (debrief):** real RAG pipeline (Supabase pgvector + Voyage + Claude), now matching against **all 200 approved entries**. Two independent confidence signals: retrieval thresholds **0.50 (confident) / 0.30 (floor)**, plus the `entry_applies` generation check. If the top candidate is declined, up to 3 further candidates within **0.03** of the top similarity are tried before `no_match`. A malformed Claude response is retried once, then skipped; if nothing applies and one was skipped, the user gets a friendly error (503) and **no** gap row. After a follow-up, retrieval embeds only the user's own words (description + answer), not Claude's question; Claude still sees the question when generating. Unmatched/declined cases are logged to `debrief_gaps` with a `decline_reason`. Deliberately a bounded diagnostic tool, not a chatbot.
- **Design ("quietly British"):** Fraunces + Work Sans (+ Caveat for the margin note), **self-hosted with `next/font`**, so the browser makes no request to Google. **Navy primary #1F3A5F on canvas #FBFAF7**, ink text, white cards; racing green and the perforated stamp edge are gone. **Brick (and sage) are reserved for wrong (and right) answers and errors**, with one exception: the red-pen margin note "i.e. probably not." on the home hero. Amber is decorative only. Shared button classes `.btn-primary`, `.btn-secondary`, `.btn-light`, `.btn-ghost` (plus WhatsApp and LinkedIn buttons) and `.link`. "Practise" is the verb (hero, "Practise this norm", "Practise another category", meta description); "Practice" stays the noun and product name. No landmarks, crowns, red boxes or 'Made in Britain' claims. One exception: a small Union Jack in the header, the hero tagline and the footer. **No norm IDs are shown anywhere** (the hero card shows the category only).
- **Home page** (ported from `docs/mockups/chat-british-landing-mockup.html`, a reference only): a new sticky header on the home page only (`components/home/SiteHeader.tsx`: wordmark with the flag, How it works, Practice, Debrief, Contact, Get started; a `<details>` menu below 760px); **other pages keep `Nav.tsx`**. Sections in order: **hero collage** (live headline, lead and buttons; tagline with the flag; WP-1 stamp card with the first three quoted Surface Markers phrases; the margin note; a phone showing scenario SC-WP-2-a answered); **proof strip** (counts from Approved rows at build time, plus "Every norm reviewed by a working coach"); **founder section**, hidden until `NEXT_PUBLIC_FOUNDER_VIDEO_ID` and a bio in `content/founder.ts` are set; **six illustrated situation cards** (Practise opens `/practice?categories=…`; "See all 12 situations"); **How it works** (`#how`, with a hidden `#how-it-works` anchor; a sample recap phone and a sample Debrief browser frame, both labelled as samples); **coach section** with a ledger of WP-17, HC-4 and HL-1 read verbatim from the taxonomy; **FAQ** (the live answers); **closing band**; **footer** (sitewide: wordmark with the flag, tagline, Explore links, Talk to us with WhatsApp and LinkedIn only when set, support@chatbritish.ai, the not-advice line, © year).
- **Metadata:** per-page titles ("Start your profile — Chat British", "Practice — Chat British", "Debrief — Chat British"), canonical URLs per page, `metadataBase` falls back to `https://chatbritish.ai` if `NEXT_PUBLIC_SITE_URL` is unset (it was unset at build time on Railway). The sitewide footer (above) is live. **The real privacy notice is live at /privacy** (dated 9 October 2026). Source: `content/privacy-notice.md`, rendered at build time by `lib/privacy-notice.ts`; the build fails on any drafting marker; the page is indexable; the "Delete my data" button sits after section 12. Controller: Kianoush Language Academy Ltd.
- **Norm ID references:** the "Based on norm…" line was removed from the Practice feedback bar and the Debrief answer card (the ID stays in the data).

---

## The stakes and the clock

- Client is on a Graduate visa expiring **Dec 22, 2026**. Roughly 11 weeks remained at the start of October.
- Realistic process time: 4–8 weeks endorsement + 8 weeks UKVI decision (or 5 working days–next day with Priority/Super Priority service).
- **UKES contacted and confirmed as the endorsing body.**
- Client's deposit/maintenance funds and job-creation budget: **not confirmed yet.**
- **Operating entity:** Kianoush Language Academy Ltd (incorporated May 2025, 1:1 tuition), named as the controller in the privacy notice. Whether Chat British is incorporated separately before the application is undecided; ask UKES in writing and record the answer here. Use one legal entity name consistently across the website, privacy notice, Business Plan and Financial Plan.
- **Payment timing decision:** Chat British will **not accept real payments or connect Stripe until UKES confirms how the venture should be presented; default is no payments** — to protect the "new, not already trading" requirement.
- **The product is ahead of the paperwork.** The Business Plan, CV and Financial Plan are the critical path and none has started.

## Deliverables required for endorsement submission

**UKES's actual published requirements:**

**4 required documents:**
1. Complete Business Plan (UKES provides a template) — **not started**; an executive summary draft exists (still under the old "Bridgely" name; Word rebrand deliberately batched for later).
2. CV (Kianoush's) — **not started.**
3. Financial Plan: 3-year forecasts (P&L, Balance Sheet, Cashflow; UKES templates) — **not started.**
4. Identity documents: passport, second form of ID, selfie with passport, proof of address — Kianoush's own gathering.

**8 things the Business Plan must address:**
1. Innovation driven internally, not outsourced — **strong ground**: the founder-gated taxonomy and the review record.
2. New-to-market approach aligned with Innovate UK Priority Themes — **not researched.**
3. IP protection strategy — **not addressed.**
4. Technology Readiness Level (TRL) scoring — **not addressed.**
5. Clear USP with real barriers to entry — partially covered.
6. Growth driven by the core innovation — partially covered.
7. R&D activity/spend in the financials — blocked on the financial plan.
8. CV + business plan showing founder's relevant skills — narrative exists, CV doesn't.

**Executive summary:** first draft exists (1–2 pages, written for UKES; still says "Bridgely"). Kianoush should review it. **When citing the product in any UKES document, say** "founder-reviewed taxonomy of 200 entries; practice scenarios drafted by AI from it and approved by the founder", and use only `chatbritish.ai`.

---

## The product: Chat British

**Tagline:** "Speak the language. Understand the culture. Belong."
**Core idea:** Scale the founder's 1:1 cultural-communication coaching methodology through software.

### Five features
1. **Onboarding profile** — **Built.**
2. **Scenario-based practice** — rehearsal before a real situation. **Built; data-driven, 120 scenarios.**
3. **Real-situation debrief** — diagnosis after the fact. **Built, hardened, live on 200 entries.**
4. **Cultural norm library** — browsable taxonomy. Roadmapped, not built.
5. **Premium 1:1 coaching by UK-based teachers trained on the taxonomy** — premium tier + the UK job-creation story. Roadmapped.

---

## The taxonomy — the actual IP and moat

**Definition:** Norm ID, Category, Definition, Surface Markers, What It Actually Means, Example (anonymized), Good Response, Status (plus a "Grounding Check" column, now blank). **12 categories**; prefixes WP/HC/HL/JS/SO/AB and ED/DR/MN/TR/NB/CS. Norm IDs are never renumbered or reused.

### Locked decision: founder writes every entry
No automatic taxonomy generation. Quality control, and directly tied to the IFV founder-leadership requirement.

### The 200 rows are live
- Kianoush's 200-row workbook (all `Approved`) is synced: **200 active rows with 1024-dim embeddings** in `taxonomy_entries`. HC-1's text changed in the new file (it now includes the ~9-minute UK GP consultation figure; checked accurate against published research).
- **The grounding question is resolved by the founder.** The file had arrived with a "Grounding Check" column saying 159 rows were "cultural consensus — needs a real client case" and 41 "search-verified". Kianoush then stated that he reviewed all 200 **row by row**, and the column was cleared. **Consequence to remember:** clearing it also deleted the citation notes on the 41 search-verified rows; the content is untouched but the "what we checked this against" trail is gone. The sync script still holds back any row whose Grounding Check begins "Cultural consensus" (with a keep-live exception), so a future row can be flagged the same way.
- **Homepage claims** that are now public and must stay true: "Every norm in the library is reviewed by a working cultural-communication coach" and "Nothing gets published without review". Kianoush should be comfortable that both hold for all 200 entries, and that the scenarios' status is described honestly (above).
- **Original 30 AI-drafted reference rows** still sit in the old 41-row template (backup in Downloads), `Draft`, not live.

### Taxonomy gaps for Kianoush to judge (from real `debrief_gaps` and replays)
Ask him, for each: "Have you seen this with real clients?" If yes, he writes the entry (three-question method); nothing is drafted for him.
1. Colleagues not returning greetings (closest entry is about neighbours).
2. Sports-banter slang (e.g. the football "cross over the ball").
3. Classroom and teacher phrasing (education looks thin there).
4. Making friends, conversations that end abruptly.
5. Asking an existing manager for a raise (MN-4 and WP-2 each cover half; JS-2 is about job offers).
Also: the AB-2 scenario omits the taxonomy's "(not the letter)" detail — his call whether to restore it.

### Extraction process
`bridgely_taxonomy_extraction_script.md` (three-question loop; filename still old) + the taxonomy workbook (`data/chat_british_taxonomy_template.xlsx`, now the 200-row file).

---

## Monetization & go-to-market strategy (direction, not committed; gated on the payment-timing decision above)

**Segmentation:** primary — skilled-visa holders and international students, 0–18 months in the UK. Secondary — long-settled people hitting a specific wall.

**Free vs paid (proposed):** onboarding free; 1 free Practice session per category; first 2–3 Debriefs free; public glossary never gated. Paid: unlimited Practice/Debrief, saved log, nudges, premium 1:1 tier.

**Pricing direction:** anchor to relocation costs — ~£15–19/month discussed, **not committed.**

**Go-to-market:** (1) existing ~50 clients, (2) Instagram (12k) via the glossary/SEO pipeline, (3) Nika Visa as pilot partner, (4) employer/HR relocation benefits later.

**Tension to resolve:** "convert existing clients to paid before submission, as evidence of viability" conflicts with the no-payments decision. Don't act on the first until reconciled.

**Running costs (checked Oct 2026 — re-check before relying):** Voyage `voyage-3` $0.06 per million tokens with the first 200 million free (a Debrief embeds ~200 tokens, so Voyage is effectively free). Claude Sonnet 5 listed at $2 / $10 per million input/output tokens; a Debrief is probably under a cent. An account with no payment method on Voyage is limited to 3 requests/min and 10K tokens/min — **add a payment method before sharing the site more widely** (Kianoush's UK card was suggested as the natural owner). Set a monthly spend cap in the Anthropic Console.

---

## Tech stack

- **Frontend:** Next.js 16 + Tailwind. **Deployment:** Railway (one custom domain on the current plan: `chatbritish.ai`).
- **Backend/data:** Supabase (Postgres + auth + `pgvector`), project `ehyglngeobtppgxtupiv`. Tables: `users`, `taxonomy_entries`, `debrief_gaps`; function `match_taxonomy_entries()`.
- **AI layer:** Claude API (`claude-sonnet-5`) for Debrief; Practice is static, data-driven content, not live model conversation.
- **Embeddings:** Voyage AI `voyage-3`, 1024 dims — taxonomy sync, Debrief retrieval, onboarding struggle classification (`lib/category-reference-embeddings.json`, 12 entries, regenerated).
- **Auth:** Supabase Anonymous Auth. Google/social OAuth deferred.
- **Content pipelines:** `npm run taxonomy:import` / `taxonomy:sync-db` (embeds Approved rows, batched ~20 per Voyage request, paced under the free-tier limits, retry on 429 and on Supabase write failures); `npm run scenarios:import`; `npm run embed-category-refs`.
- **Network note:** from the local machine's normal network path, Voyage returned **403** (and Claude Code's login did too) until terminal traffic took a different path (VPN/proxy); the pattern fits geographic blocking at the edge (presumed, not confirmed). Railway's own calls to Voyage are unaffected. Local scripts that call Voyage need that path.

### Environment variables (names and purpose only)
`NEXT_PUBLIC_*` values are baked in at build time (a change needs a redeploy), and an unset one hides its feature.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Base for absolute URLs and share images; falls back to `https://chatbritish.ai` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Shows the WhatsApp buttons (closing band, footer, Help assistant) |
| `NEXT_PUBLIC_LINKEDIN_URL` | Shows the LinkedIn button in the footer |
| `NEXT_PUBLIC_FOUNDER_VIDEO_ID` | YouTube video ID for the home page founder section, which also needs a bio in `content/founder.ts` |
| `NEXT_PUBLIC_HELP_ASSISTANT` | `on` turns the Help assistant on; anything else leaves it off (button hidden, `/api/assistant` returns 404) |
| `ANTHROPIC_API_KEY_ASSISTANT` | A separate Anthropic key for the Help assistant; falls back to `ANTHROPIC_API_KEY` |

### RAG robustness
Low confidence → one follow-up, never a guess. Retrieval-confident but inappropriate → `entry_applies: false`. Fallback candidates and malformed-output handling as above. **Thresholds are judgments from a small calibration set** (12 clear cases scored 0.535+ except one at 0.348; vague cases 0.427/0.473; unrelated 0.297/0.195). The margins are thin, the 0.03 fallback margin rests on one observed tie, and `[debrief-debug]` logging stays on to tune from real use. Debug logs were confirmed not to print descriptions (privacy audit); the error logs were fixed to log labels and statuses only.

### Privacy and data (audit and fixes, 8–9 Oct 2026)
- **Held in Supabase:** `users` (one row per saved profile, keyed by the anonymous auth user id; free text in `struggle` and `city`, the optional `email`); `debrief_gaps` (unmatched or declined Debriefs: description, follow-up question and answer, best candidate, similarity, decline reason; **no user id and no IP**); `taxonomy_entries` (the 200 norms, no user data).
- **Anonymous accounts are created when the onboarding page opens**, before anything is saved, so there are far more auth users than profiles (89 anonymous auth users against 10 `users` rows on 8 Oct).
- **Sent to AI providers:** Debrief sends the description (plus the follow-up answer) to Voyage, and the description, follow-up question and answer, and the candidate or matched taxonomy entry to Anthropic (`claude-sonnet-5`). Onboarding sends the struggle text to Voyage through `/api/classify-struggle`; the profile goes from the browser straight to Supabase. Practice sends nothing. The Help assistant (off) sends the knowledge pack and the last six messages to Anthropic (`claude-haiku-4-5-20251001`) and stores nothing.
- **No cookies, no analytics, no third-party requests on page load.** The only third-party request is onboarding's anonymous sign-in to Supabase. No Set-Cookie on any page or API route.
- **Browser storage (localStorage only):** `chat_british_seen`, `chat_british_streak`, and the Supabase auth token (`sb-<project ref>-auth-token`).
- **Error logs** in the Debrief and classifier routes log a fixed label, the error name and an HTTP status or error code only (`lib/log-error.ts`): never a message, response body, Postgres detail or input. The `[debrief-debug]` and `[struggle-classify]` score lines log norm ids, categories and similarities only.
- **Rate limits** (in memory, per IP from `x-forwarded-for`): Debrief 10 a minute; `/api/classify-struggle` 15 a minute (onboarding skips that signal on a 429); Help assistant 6 a minute and 20 per rolling 24 hours; `/api/delete-my-data` 5 a minute.
- **Debrief's "Save to my log" button was removed**: it stored nothing.
- **Delete my data:** `POST /api/delete-my-data` (Supabase access token required) deletes the caller's `users` row and auth user. The button is at the bottom of /privacy, shown only when the browser has a session; it then clears the three storage keys. `debrief_gaps` rows can't be tied to a user, so they aren't deleted.
- **Privacy lines at collection,** each linking "How we use your information" to /privacy: under the onboarding "what's been confusing" box, under the optional email field, and under the Debrief description box.
- **Email:** nothing in the app sends email and there is no unsubscribe mechanism. The email line says people can ask us to stop, which today means emailing support@chatbritish.ai.
- **A deleted anonymous user recovers quietly:** if the stored session's user no longer exists, onboarding signs in anonymously again instead of failing to save.

### Help assistant (built, merged, ON in production)
**On in production** (checked 9 Oct 2026 with `curl -4`): `POST /api/assistant` with an empty body returns 400, not 404, and the launcher is in the live HTML of / and /privacy, so the flag is enabled in the build Railway serves. (`GET` returns 405 either way.) When off, there's no button and `POST /api/assistant` returns 404.
- **Model:** `claude-haiku-4-5-20251001`, low temperature, max 400 tokens, forced to reply through one tool that returns short text plus one action (practice, debrief, email, privacy, none; whatsapp only when a number is configured). The UI turns the action into a button; the model never writes URLs.
- **Knowledge:** the founder-approved pack at `data/help-assistant-knowledge.md`, with its counts and WhatsApp line filled from the data at build time. **The build fails** on an open `[CONFIRM …]` / `[DECIDE …]` marker or an unfilled `{{…}}`.
- **Limits:** 6 model calls a minute and 20 per rolling 24 hours per IP, in memory; only requests that reach the model count; over the daily limit, 429 `daily_limit`, a fixed local message with Email, input disabled, chips hidden; "N questions left today" at 3 or fewer.
- **Privacy:** no message storage (React state only) and no message text in logs (outcome, token counts, action, remaining and status only).
- **Local answers:** the chips "How does Practice work?", "What is Debrief?" and "Is it free?" answer with text read verbatim from the pack, and "Something else" shows a local prompt with the contact buttons; none of them calls the model or counts.
- **Hand-offs and safety:** a "Prefer a person?" row with Email (and WhatsApp when configured); a danger or distress message gets the 999 and Samaritans 116 123 reply with no buttons. Hidden while a Practice question is on screen.
- **Pre-launch checklist:**
  - [x] Real privacy notice live
  - [ ] WhatsApp number set, or a decision to go without
  - [ ] A separate Anthropic key (`ANTHROPIC_API_KEY_ASSISTANT`) with a spend cap
  - [ ] Auto-reload on in the Anthropic Console
  - [ ] Show the limit message as soon as the count hits 0 (today it shows "0 questions left today" until the next question)
  - [ ] Confirm the "free during early access" wording in the pack

---

## Open items / next steps

**Needs Amiro (only he can do these):**
- [ ] **Phone checks of the latest deploys** (Debrief leaking-tap landlord matches; a vague Debrief asks a follow-up; a money struggle ranks Money & transactions; Practice shows 12 category cards with 10 scenarios each and a 5-question session; no "Bridgely" text; favicon and WhatsApp share preview using a never-shared link such as `https://chatbritish.ai/?v=3`; the footer shows on the home page, picker and recap, is hidden while a Practice question is on screen; Contact opens a mail draft to support@chatbritish.ai; /privacy loads the notice dated 9 October 2026)
- [ ] Phone checks of the new home page (header and menu, hero collage, situation cards, How it works, coach ledger, FAQ, footer)
- [ ] Add a payment method to Voyage (see costs)
- [ ] Confirm who the registrant of `chatbritish.ai` is (should be Kianoush or the controller named in the privacy notice, not a personal account of Amiro)
- [ ] Say who made the two real Debriefs logged on the live site on 4 Oct (if neither Amiro nor Kianoush, a real user is on the site and a privacy notice becomes urgent)

**Needs Kianoush:**
- [ ] Read the 15 "Spot-check first" scenarios, then the rest at his pace, and flip Review state as he goes
- [ ] Confirm approval of the new public text: page titles, the margin note "i.e. probably not.", and the footer's not-advice line. Also the proof strip ("Every norm reviewed by a working coach") and the four FAQ answers. **"Chat British is free to use while we're in early access"** is a public statement about pricing; check it sits with the no-payments decision and any later paid tier.
- [ ] Approve the coach-section wording on the home page ("Every norm in the library is reviewed by a working cultural-communication coach…")
- [ ] WP-17's Surface Markers phrase carries a trailing comma in the spreadsheet, and the home page ledger shows it verbatim ("Let's take that offline,")
- [ ] Founder video and bio for the home page founder section (`NEXT_PUBLIC_FOUNDER_VIDEO_ID` and `content/founder.ts`)
- [ ] The five taxonomy gaps above; the AB-2 "(not the letter)" detail

**Privacy (before promoting the site or switching on the Help assistant):**
- [ ] Retention jobs (pg_cron) not yet scheduled; nothing deletes `users`, `debrief_gaps` or unused anonymous auth users today
- [ ] Check in the dashboards: the Supabase project region; whether `auth.sessions` / `auth.audit_log_entries` have IP columns and hold IPs; Railway log retention; the data processing agreements (Supabase, Railway, Voyage, Anthropic)
- [ ] The Help assistant stays off (`NEXT_PUBLIC_HELP_ASSISTANT` unset) until the notice is live

**Confirm before wide promotion:**
- [ ] Retention jobs (pg_cron) scheduled
- [ ] Data processing agreements accepted (Anthropic, Supabase, Voyage AI, Railway) and the transfer safeguards named
- [ ] Supabase region confirmed as the UK
- [ ] The solicitor's check of notice sections 4 and 7
- [ ] ICO data protection fee paid for the controller
- [ ] Update the notice date whenever its text changes

**Endorsement (critical path):**
- [ ] Business Plan (UKES template), CV, Financial Plan — none started. Start with the CV; collect his teaching history, qualifications, years coaching, client numbers, Instagram reach, testimonials
- [ ] Research Innovate UK Priority Themes alignment, IP protection strategy, TRL scoring
- [ ] Client funds and job-creation budget; pitch deck
- [ ] Batch-rebrand the Word files (executive summary etc.) and use only `chatbritish.ai`
- [ ] Ask UKES how the operating entity should be named

**Engineering / product (not urgent):**
- [ ] Revisit thresholds with real usage; trim `[debrief-debug]` logging
- [ ] The spaced follow-up nudge
- [ ] Public glossary/SEO pipeline (now more viable with 200 entries); og:title per page
- [x] Self-hosted fonts (`next/font`)
- [ ] Round 2: Practice, Debrief and onboarding layouts, and a unified header across all pages
- [ ] An About page
- [ ] Decide whether practice questions need titles (a Title column). The "Based on norm…" line was removed from the Practice feedback bar and the Debrief answer card (the ID stays in the data).
- [ ] Optional: register `chatbritish.co.uk` (cheap; blocks squatters) and redirect it to `.ai`; `www` needs a higher Railway plan or registrar forwarding
- [ ] When there's a paid tier: account claiming at payment, Google OAuth as an additional login

**Parked ideas (considered, not built):**
- PWA: an installable shell (manifest and icons, no service worker) is about an afternoon of work. Parked. iPhone has no install prompt. Push notifications for a follow-up nudge would need a service worker and are a much bigger job. Avoid page-caching service workers: we deploy often and they can serve stale pages.
- Voice: dry, understated wording in the feedback bar and onboarding copy, and a 'what they said / what they meant' ledger on Debrief answers. Proposed in the design discussion, not built.
- More Practice scenarios: about 80 taxonomy entries (6 or 7 per category) have no scenario yet, so the pool could reach about 200. Hold until Kianoush has read the 15 spot-check rows.
- A self-service 'delete my data' button: **built** (on /privacy, session required). Still parked: a 'tell us what's missing' link on the Debrief no-match screen.
