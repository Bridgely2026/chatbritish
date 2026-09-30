# Chat British — Project Reference

**What this is:** UK Innovator Founder Visa (IFV) venture for an existing client — an English-language/cultural-communication coach in the UK with ~50 existing online clients. This doc is the working memory for the project: decisions made, architecture, and what's still open. Read this before picking work back up.

**Companion doc:** `DEVLOG.md` covers build history, bug fixes, and engineering-level debugging lessons — read that too when picking up development/debugging work specifically. This file stays focused on product, business, and the endorsement case.

**Client/founder's name: Kianoush.**

**Naming note:** the product was originally built and shipped under the name "Bridgely." Renamed to "Chat British" this session — every user-facing reference, `package.json`, and the app's own text has been updated. **GitHub stayed on the `Bridgely2026` account** (deliberately not renamed, to avoid breaking Railway's integration and local git remotes for no real benefit) — the repo itself is `Bridgely2026/chatbritish`. Don't be confused if old references to "Bridgely" turn up in git history or the account name; the product name is Chat British everywhere that matters.

---

## MVP build status (as of this session)

**Chat British is live.** All three built features (onboarding, practice, debrief) have been verified end-to-end on a real public deployment, and hardened since against real bugs found by Kianoush on his own phone (full detail in `DEVLOG.md`).

- **Deployment: Railway.** See `DEVLOG.md` for the Netlify/Vercel/Railway platform history and why Railway is what's live — don't re-litigate from scratch.
- **Repo/accounts:** kept fully separate from Amiro's other ventures per explicit decision — GitHub account `Bridgely2026` (repo `chatbritish`), own Supabase project (`ehyglngeobtppgxtupiv`), own Anthropic API account, own Voyage AI account, own Railway account.
- **Standard deploy workflow** (new branch → push → merge to `main` → confirm Railway rebuild → verify live at mobile width) is written up in `DEVLOG.md` — follow it every time, re-learned the hard way more than once.
- **Feature 1 (onboarding):** real 3-step flow with real persistence via Supabase Anonymous Auth, upserting into a real `users` table (RLS-protected).
  - Step 1: situations multi-select. Step 2: household, time-in-UK, role/life-stage, sector (conditional). Step 3: city, struggle (required), goal, optional email.
  - **Ranking algorithm has four signals:** `situations` (explicit, +2/category) and `role`/`time-in-UK` (additive modifiers), plus **struggle-text classification** via Voyage embeddings (0.30 confidence floor). None can override an explicit `situations` pick.
  - `household`, `city`, `email` remain stored-only, not scored — deliberate, for future segmentation.
  - `goal` is also deliberately stored-only — 7 options, each a two-line chip (bold category label + full sentence, both user-facing). Full reasoning in `DEVLOG.md`.
  - Google/social OAuth remains deliberately deferred — anonymous auth by design.
- **Feature 2 (practice):** category picker, multi-question sessions, animated feedback, real `localStorage` streak (key renamed to `chat_british_streak` as part of the rebrand — existing streaks reset, accepted as fine at this stage), adaptive recap. 6 scenarios exist across the original 6 categories, 2 flagged `provisional: true` pending founder review. Several real mobile-only bugs found live and fixed this session — full detail in `DEVLOG.md`.
- **Feature 3 (debrief):** real RAG pipeline (Supabase pgvector + Voyage embeddings + Claude), hardened with real test data. Two independent confidence signals (retrieval threshold + `entry_applies` generation-stage check), graceful `no_match` handling logged to `debrief_gaps` with a `decline_reason`. Deliberately stays a bounded diagnostic tool, not an open-ended chatbot.
- **Norm ID references** ("Based on norm WP-1-...") shown on Practice/Debrief screens are currently a dead-end reference — no norm library exists yet to link to. Decision on whether to remove/restyle deliberately deferred.
- **Design system:** Fraunces (display) + Work Sans (body), paper/ink/brick/sage palette.

---

## The stakes and the clock

- Client is on a Graduate visa expiring **Dec 22, 2026** (date confirmed this session).
- Realistic process time: 4–8 weeks endorsement + 8 weeks UKVI decision (or 5 working days–next day with Priority/Super Priority service).
- **UKES contacted and confirmed as the endorsing body**, with no capacity limitations flagged — no longer a "leading candidate," this is settled.
- Client's deposit/maintenance funds and job-creation budget: **not confirmed yet.**
- **Company structure:** Kianoush has an existing UK company, Kianoush Academy (incorporated May 2025), for his 1:1 English tuition — separate from this venture. **Chat British will be incorporated as its own new, separate UK company**, not folded under Kianoush Academy.
- **Payment timing decision:** Chat British (the new company) will **not accept real customer payments or connect Stripe until the visa itself is granted** — not just endorsed. This is deliberate, to avoid risking the "new, not already trading" eligibility requirement. Keep this in mind for the monetization section below — none of that gets switched on early no matter how tempting real revenue evidence sounds.

## Deliverables required for endorsement submission

**UKES's actual published requirements:**

**4 required documents:**
1. Complete Business Plan (UKES provides a template) — **not started**; an executive summary draft exists (still under the old "Bridgely" name — batching the docx rebrand for later, not done yet).
2. CV (Kianoush's) — **not started.**
3. Financial Plan: 3-year forecasts (P&L, Balance Sheet, Cashflow; UKES provides templates) — **not started.**
4. Identity documents: passport, second form of ID, selfie with passport, proof of address — Kianoush's own administrative gathering.

**8 things the Business Plan specifically needs to address:**
1. Innovation driven/developed internally, not outsourced — **strong ground already**: the founder-gated taxonomy architecture is direct evidence.
2. New-to-market approach aligned with Innovate UK's Priority Themes — **not researched yet.**
3. IP protection strategy — **not addressed.**
4. Technology Readiness Level (TRL) scoring — **not addressed.**
5. Clear USP with real barriers to entry — partially covered narratively.
6. Growth driven by the core innovation — partially covered by business model/job creation narrative.
7. R&D activity/spend shown in the financials — blocked on the financial plan not existing yet.
8. CV + business plan showing founder's relevant skills — narrative exists, CV document doesn't.

**Executive summary:** a first draft exists, still under the "Bridgely" name pending the docx rebrand batch — covers Opportunity, Solution, Founder-Market Fit, Innovation, Traction, Market & Go-to-Market, Business Model, and Job Creation & Scalability. Kianoush should review it for tone/accuracy. Starting point for the full Business Plan, not a substitute.

---

## The product: Chat British

**Tagline:** "Speak the language. Understand the culture. Belong." (unchanged by the rename)
**Core idea:** Scale the founder's existing 1:1 cultural-communication coaching methodology through software.

### Five features

1. **Onboarding profile** — personalized form, real persisted four-signal-weighted persona per user. **Built and persisted.**
2. **Scenario-based AI conversation practice** — rehearsal, before a real situation happens. **Built.**
3. **Real-situation debrief tool** — diagnosis, after a real situation happens. **Built, hardened, live.**
4. **Cultural norm library** — browsable taxonomy reference. Roadmapped, not built.
5. **Premium 1:1 coaching, UK-based teachers trained on the taxonomy** — premium revenue tier + UK job-creation story. Roadmapped, not an MVP build item.

### MVP build scope
**Features 1–3: done, live, hardened.** Features 4–5 stay scoped-but-not-built.

---

## The taxonomy — the actual IP and moat, and a real open question

**Definition:** Norm ID, Category, Definition, Surface Markers, What It Actually Means, Example (anonymized), Good Response, Status. **Now 12 categories**, not 6 — see below.

**Norm ID convention:** `PREFIX-NUMBER-slug`. Sequential within category, never renumbered/reused. Original six: WP/HC/HL/JS/SO/AB. **Six new prefixes, from the 200-row file:** ED (Education), DR (Dating & relationships), MN (Money & transactions), TR (Transport & commuting), NB (Neighbours & community), CS (Customer service & retail).

### Locked decision: no automatic taxonomy generation
Founder writes every entry, always — quality control, and directly tied to the IFV founder-leadership requirement. This is the single most important rule in this whole document.

### The 200-row submission — received, NOT yet synced, open grounding question

Kianoush sent a completed spreadsheet with 200 rows, all marked `Status: Approved`, spanning 12 categories (the original 6 plus 6 new ones — see above). Structurally clean: no duplicate Norm IDs, no missing required fields.

**But there's an unresolved problem, and nothing from this file should be synced into the live system until it's settled.** The file has a 9th column, "Grounding Check," not part of the original template:
- **159 of the 200 rows** contain the note: *"Cultural consensus — no independent citation to check; needs a real client case, not further AI search."* — i.e., by the data's own self-description, these are **not** grounded in a specific remembered client case.
- **41 rows** say *"Search-verified"* — fact-checked against real external sources (e.g. ACAS's disciplinary process, the FCA's contactless limit change), which is good for factual accuracy but is a different thing from case-grounding.

Asked Amiro how this was produced; answer given was "the founder built it himself." That doesn't resolve the actual issue — the question isn't who operated the spreadsheet, it's that the rows' own self-assessment contradicts their `Approved` status. **Open, unresolved as of this session:** does Kianoush want to go back and ground the 159 flagged rows in real cases (matching what his own note suggests), or is he making a deliberate, conscious call that "cultural consensus" is an acceptable basis for some entries without a specific case? Either is a legitimate decision for him to make — but it needs to be an explicit one, not something that slides through because a status column defaulted to `Approved`. **Nothing from this file gets embedded/synced as live content until this is answered.**

### Exception, unrelated to the above: the original 30 AI-drafted reference rows
Still sitting in the original template, marked `Draft`, light-blue filled, flagged for founder rewrite before ever `Approved` — unrelated to the 200-row submission, not a shortcut around the locked decision.

### 12-category app expansion — in progress, separate from the grounding question
Decided this session: expand the app's fixed category list from 6 to 12 to match the new taxonomy scope (onboarding situations, Practice picker, struggle-classification reference embeddings). **Deliberately not** adding role/time-in-UK scoring modifiers for the 6 new categories — no clean mapping exists, and inventing one would mean forcing a signal that isn't really there. This work is independent of the grounding question above — pure schema/UI scaffolding, no taxonomy content gets marked live either way. CLI prompt for this handed off; implementation status not yet confirmed as of this doc's last update.

### Extraction process
`bridgely_taxonomy_extraction_script.md` (three-question loop — filename still under the old name, not yet renamed) + the taxonomy template (now `chat_british_taxonomy_template.xlsx` in the repo, renamed as part of the rebrand).

---

## Monetization & go-to-market strategy (discussed this session — direction, not committed; also gated on the payment-timing decision above)

**Segmentation:** primary — skilled-visa holders and international students, 0–18 months in the UK. Secondary — long-settled people hitting a specific wall.

**Free vs. paid, proposed split:** onboarding always free; 1 free Practice session per category; first 2–3 Debrief uses free; public glossary pages never gated. Paid: unlimited Practice/Debrief, saved debrief log, spaced nudges, premium 1:1 human-coaching tier.

**Pricing direction:** anchor to relocation costs, not language-app pricing — ~£15–19/month discussed, **not committed.**

**Go-to-market sequencing:** (1) existing ~50 clients first, (2) Instagram (12k followers) via the glossary/SEO pipeline, (3) Nika Visa as a pilot distribution partner, (4) employer/HR relocation benefits later.

**Reminder given the payment-timing decision above:** none of this — free tiers, paid tiers, Stripe — goes live for real money until the visa is *granted*, not just endorsed. Converting existing clients "to evidence viability" needs rethinking in light of that constraint; flag if this creates tension with the endorsement-case argument that relied on real revenue as evidence.

---

## Tech stack

- **Frontend:** Next.js 16 + Tailwind.
- **Deployment: Railway.**
- **Backend/data:** Supabase (Postgres + auth + `pgvector`) — own separate project (`ehyglngeobtppgxtupiv`).
- **AI layer:** Claude API (`claude-sonnet-5`) — debrief's classification/structured output **wired, live**; live scenario-practice conversations **not yet wired.**
- **Embeddings:** Voyage AI, `voyage-3`, 1024 dimensions — debrief retrieval + onboarding's struggle-text classification (soon to be re-run for 12 categories).
- **Auth:** Supabase Anonymous Auth — **wired, live.**
- **Data model (built):** `users`, `taxonomy_entries`, `debrief_gaps`, `match_taxonomy_entries()` — see `DEVLOG.md` for exact columns.
- **Data model (not yet built):** `scenarios`/`conversations` as live Supabase tables.

### RAG robustness notes
Low-confidence → follow-up, never a guess (**built, verified**). Retrieval-confident but generation-inappropriate → `entry_applies: false` catches it independently (**built, verified**). **Confidence thresholds still provisional** (`0.35`/`0.25` for debrief, `0.30` for struggle-text) — worth a real recalibration pass once the 200-row grounding question is resolved and real `Approved` content volume goes up meaningfully.

---

## Open items / next steps

- [ ] **Resolve the 200-row taxonomy grounding question** — see above, this blocks syncing any of that content live
- [ ] Confirm the 12-category app expansion landed and works (CLI prompt handed off, not yet confirmed complete)
- [ ] Batch-rebrand the remaining Word/docx files (executive summary, etc.) — deliberately deferred, not forgotten
- [ ] Gather client's deposit/maintenance funds and job-creation budget picture
- [ ] Full Business Plan, CV, Financial Plan — none started
- [ ] Research Innovate UK Priority Themes alignment, IP protection strategy, TRL scoring
- [ ] Pitch deck — not started
- [ ] Wire live Claude-powered scenario-practice conversations
- [ ] Build debrief's "save to my log," the spaced follow-up nudge
- [ ] Recalibrate confidence thresholds once the taxonomy question resolves and real volume exists
- [ ] Build scenarios for the 6 new categories (and eventually the rest of the original 6 beyond the single-scenario-each state)
- [ ] Decide whether to remove/restyle the "Based on norm..." dead-end reference
- [ ] Firm up pricing — and reconcile the proposed "convert clients to paid before submission" idea with the payment-timing decision above
- [ ] When there's a real domain: add Google/social OAuth as an *additional* login option
- [ ] What new "goal" option Kianoush originally wanted — resolved this session (7 options added), but double-check nothing further was expected
