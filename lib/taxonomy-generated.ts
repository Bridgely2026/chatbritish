// AUTO-GENERATED from data/chat_british_taxonomy_template.xlsx by scripts/import-taxonomy.mjs
// Do not edit by hand — edit the spreadsheet and re-run: npm run taxonomy:import
import type { NormEntry } from "./mock-data";

export const generatedTaxonomy: NormEntry[] = [
  {
    "normId": "WP-1-indirect-refusal-workplace",
    "category": "Workplace",
    "definition": "British colleagues rarely say a direct no to a request from a peer or senior; refusal is signaled through hedged language instead.",
    "surfaceMarkers": "\"I'll think about it\" / \"let me get back to you\" / \"I'll keep it in mind\" + changing the subject or deferring to another conversation",
    "whatItMeans": "Likely a soft no, or at minimum \"not convinced yet\" — not genuine active consideration.",
    "example": "A client proposed an idea to their team lead, who replied \"that's interesting, let me think about it and get back to you after I've spoken to the client.\" Client took this as agreement.",
    "goodResponse": "Ask a direct follow-up with a specific choice: \"Should I hold off, or keep developing it?\" rather than assuming agreement.",
    "status": "Approved"
  },
  {
    "normId": "WP-2-promotion-discussion-indirectness",
    "category": "Workplace",
    "definition": "Career progression conversations are rarely given a firm yes/no in the moment; managers tend to defer to a future review cycle.",
    "surfaceMarkers": "\"Let's revisit this at your next review\" / \"it's definitely something we can look at\" with no committed timeline",
    "whatItMeans": "Not a promise — it's a deferral. A real commitment usually comes with a specific date or documented next step, not just warm language.",
    "example": "A client asked about promotion and was told \"it's something we can definitely look at,\" and took it as a near-term commitment. Nothing was scheduled.",
    "goodResponse": "Ask for something concrete: \"Could we set a specific date to revisit this, and what would you want to see from me before then?\"",
    "status": "Approved"
  },
  {
    "normId": "WP-3-formal-warning-procedural-tone",
    "category": "Workplace",
    "definition": "Formal HR processes (warnings, performance notices) use flat, procedural, legalistic language — this is standard process, not a sign of personal hostility.",
    "surfaceMarkers": "Formal letter/email format, phrases like \"in accordance with company policy,\" no informal or apologetic tone",
    "whatItMeans": "The coldness is procedural convention, not personal hostility — ACAS's standard process runs informal/verbal warning, then a first written warning (usually valid 6 months), then a final written warning (usually valid 12 months) before dismissal, each confirmed in writing with a right of appeal.",
    "example": "A client received a written warning email in very formal language and assumed their manager was furious with them personally.",
    "goodResponse": "Separate the tone from the content — read the specific facts/actions stated, and ask HR or the manager directly what the practical next steps are.",
    "status": "Approved"
  },
  {
    "normId": "WP-4-deadline-reminder-escalation",
    "category": "Workplace",
    "definition": "Deadline reminders start polite and indirect, then escalate in firmness with repetition — the politeness doesn't mean the urgency is low.",
    "surfaceMarkers": "\"Just a gentle reminder\" (1st ask) → \"following up again on this\" (2nd) → \"I need this by end of day\" (3rd, now direct)",
    "whatItMeans": "Each repeated \"gentle\" reminder signals rising urgency, even though the wording stays polite — treat repetition itself as the real signal.",
    "example": "A client kept receiving \"just a gentle reminder\" emails and didn't realize the third one meant their manager was now seriously concerned.",
    "goodResponse": "Treat any second follow-up on the same task as a priority signal, regardless of how mild the wording still sounds.",
    "status": "Approved"
  },
  {
    "normId": "WP-5-team-ritual-participation",
    "category": "Workplace",
    "definition": "Small recurring team rituals (tea rounds, birthday collections, Friday drinks) function as belonging signals; opting out repeatedly can be read as disengagement even if unintended.",
    "surfaceMarkers": "Being asked \"are you coming to...\" repeatedly, or noticing colleagues stop including you in casual invites",
    "whatItMeans": "Declining once is neutral; declining consistently can quietly affect how included/trusted a colleague is seen to be, separate from work performance.",
    "example": "A client always skipped Friday team drinks for religious/personal reasons and later felt excluded from casual work decisions, without realizing the two were connected.",
    "goodResponse": "Participate selectively where possible, or briefly explain the reason once so it reads as a boundary rather than disinterest.",
    "status": "Approved"
  },
  {
    "normId": "HC-1-gp-appointment-brevity",
    "category": "Healthcare",
    "definition": "GPs are brief and businesslike due to strict time slots (often 10 minutes); this is standard practice, not rudeness or disinterest.",
    "surfaceMarkers": "Doctor asks few questions, gives short direct answers, ends the appointment quickly",
    "whatItMeans": "The GP is following time constraints, not dismissing the patient's concern — 10 minutes is the standard NHS slot, and the UK average consultation is only around 9 minutes, one of the shortest in Europe.",
    "example": "A client felt their GP \"didn't take them seriously\" because the appointment lasted only 8 minutes and the doctor gave a brief answer.",
    "goodResponse": "Prepare 2-3 clear points before the appointment, and ask directly for a follow-up if more time is needed: \"Could we book a longer appointment to go through this properly?\"",
    "status": "Approved"
  },
  {
    "normId": "HC-2-referral-wait-silence",
    "category": "Healthcare",
    "definition": "A referral to a specialist is often followed by a long silence rather than active updates — no news is normal, not a sign of being forgotten.",
    "surfaceMarkers": "\"We'll be in touch once it's been reviewed\" with no timeline, followed by weeks of no contact",
    "whatItMeans": "This reflects NHS process/backlog, not that the case was dropped — the official standard is 18 weeks from referral to treatment, but as of 2026 only around two-thirds of patients are actually being seen within that window nationally, so a longer wait is common, not exceptional.",
    "example": "A client waited six weeks after a GP referral with no contact and assumed the request had been lost.",
    "goodResponse": "Call the GP surgery or hospital referral line directly to check status rather than assuming; this is normal and expected, not rude to ask.",
    "status": "Approved"
  },
  {
    "normId": "HL-1-landlord-vague-commitment",
    "category": "Housing & landlord",
    "definition": "Landlords often respond to repair requests with non-committal language rather than a firm yes or no.",
    "surfaceMarkers": "\"I'll see what I can do\" / \"I'll look into it\" with no timeframe given",
    "whatItMeans": "Often means low priority unless followed up — not necessarily a refusal, but not a commitment either.",
    "example": "A client asked their landlord to fix the heating; landlord replied \"I'll see what I can do about it.\" Two weeks passed with no action.",
    "goodResponse": "Follow up in writing with a specific ask: \"Could you give me a rough date for the repair? It's been two weeks.\"",
    "status": "Approved"
  },
  {
    "normId": "HL-2-passive-aggressive-written-notice",
    "category": "Housing & landlord",
    "definition": "Complaints about noise, cleanliness, or shared spaces are often delivered as overly polite written notes rather than direct confrontation.",
    "surfaceMarkers": "Notes/texts starting with \"just a friendly reminder\" or \"hope you don't mind me asking\" about a repeated issue",
    "whatItMeans": "The politeness is a social buffer — the underlying message is a firm complaint, not a casual suggestion.",
    "example": "A client received a \"friendly note\" about bin day from a neighbor and didn't realize it was actually a repeated complaint.",
    "goodResponse": "Treat the specific ask as the real message regardless of the soft wording, and respond to the practical issue directly.",
    "status": "Approved"
  },
  {
    "normId": "JS-1-vague-interview-feedback",
    "category": "Job search",
    "definition": "UK employers rarely give a direct rejection after an interview; silence or vague language is the common signal.",
    "surfaceMarkers": "\"We'll be in touch\" with no specific timeline, or no response after the stated decision date",
    "whatItMeans": "Usually means the application was unsuccessful, especially past the stated timeline.",
    "example": "A client was told \"we'll let you know either way\" after a final-round interview, then heard nothing for three weeks.",
    "goodResponse": "Send one polite follow-up after the stated timeline passes, then treat continued silence as a likely no and keep applying elsewhere.",
    "status": "Approved"
  },
  {
    "normId": "JS-2-salary-negotiation-indirectness",
    "category": "Job search",
    "definition": "UK job offers often avoid stating a number first and expect the candidate to respond to a range rather than name a figure outright.",
    "surfaceMarkers": "\"What's your expected salary range?\" asked before any number is offered",
    "whatItMeans": "This is a negotiation norm, not evasiveness — giving a well-researched range in response is expected and normal, not pushy.",
    "example": "A client felt uncomfortable being asked their expectation first and gave a vague non-answer, which read as unprepared.",
    "goodResponse": "Research the market range beforehand and state a confident range when asked, rather than deflecting the question.",
    "status": "Approved"
  },
  {
    "normId": "WP-6-agreement-in-meetings-silence",
    "category": "Workplace",
    "definition": "In meetings, silence or a brief “sure, sounds good” from colleagues doesn't necessarily mean genuine agreement — open disagreement in a group setting is often avoided in favor of raising concerns privately afterward.",
    "surfaceMarkers": "Nodding, “yeah, that could work,” no pushback in the room, but a colleague pulls you aside later or emails a “quick thought” afterwards.",
    "whatItMeans": "Real objections are often saved for a private, one-on-one follow-up rather than voiced in front of the group — the meeting-room agreement can be provisional, not final.",
    "example": "A client presented a plan in a team meeting; everyone nodded along. Two days later, a colleague emailed several concerns that were never raised in the room.",
    "goodResponse": "After a meeting where a decision was made, follow up individually with key people: “Any concerns before I move ahead with this?” — invites private pushback before it's too late to change course.",
    "status": "Approved"
  },
  {
    "normId": "WP-7-cc-escalation-email",
    "category": "Workplace",
    "definition": "Being copied (CC'd) into an email thread you weren't previously part of, especially involving a manager, is a subtle signal that something has become a formal concern.",
    "surfaceMarkers": "A sudden CC to a manager or HR on a routine email chain, with no explanation of why they were added.",
    "whatItMeans": "This often marks the point an issue is being formally tracked or escalated, even though the email's tone may stay friendly and unchanged.",
    "example": "A client's routine project email suddenly included their manager in CC with no comment; they didn't realize this meant the sender wanted it on record.",
    "goodResponse": "When newly CC'd people appear, ask plainly: “Just flagging — is there a concern here I should be addressing directly?”",
    "status": "Approved"
  },
  {
    "normId": "WP-8-sorry-to-bother-request",
    "category": "Workplace",
    "definition": "“Sorry to bother you, but...” at the start of a request is a politeness convention, not a sign the request is a minor imposition or something to be brushed off.",
    "surfaceMarkers": "“Sorry to bother you,” “this is probably nothing, but,” “just a quick one” before what turns out to be a substantial ask.",
    "whatItMeans": "The apology softens the tone of the request but doesn't reflect its actual size or urgency — take the request itself at face value, not the apology.",
    "example": "A client's manager opened with “sorry to bother you, probably nothing” before asking for a full report rewritten by end of day; the client assumed it was low priority and delayed.",
    "goodResponse": "Treat the substance of the ask, not the softening language, as the real signal of urgency and size.",
    "status": "Approved"
  },
  {
    "normId": "WP-9-open-door-policy-literal",
    "category": "Workplace",
    "definition": "An “open door policy” is a genuine invitation to raise issues, but going to a manager's desk unannounced is still often expected to be brief and scheduled where possible, not a literal drop-in at any time.",
    "surfaceMarkers": "“My door's always open” stated once at onboarding, but calendar-blocked time or a quick Slack “got a sec?” is the actual norm for anything beyond a 2-minute question.",
    "whatItMeans": "The offer is sincere, but the practical expectation is still to signal first for anything substantial — treating it as a literal any-time invitation can read as inconsiderate of their time.",
    "example": "A client took “my door is always open” literally and would walk in mid-task with lengthy questions, and noticed her manager becoming visibly less receptive over time without saying why.",
    "goodResponse": "For anything beyond a quick yes/no, send a short message first: “Have a sec today for a 10-minute chat about X?”",
    "status": "Approved"
  },
  {
    "normId": "WP-10-feedback-sandwich",
    "category": "Workplace",
    "definition": "Constructive criticism is frequently delivered wrapped between two positive comments, and the negative point can be easy to miss if it's not clearly flagged.",
    "surfaceMarkers": "“Really strong work on X, one thing to think about is Y, and Z was great too” — the critical point sits in the middle, minimized in length compared to the praise around it.",
    "whatItMeans": "The middle comment is often the actual, most important point of the feedback — proportionally small wording doesn't mean proportionally small importance.",
    "example": "A client's manager said “great presentation, maybe tighten the data section next time, but overall well done” — the client only registered the praise and repeated the same issue the following week.",
    "goodResponse": "When feedback includes a “middle” point, repeat it back to confirm: “So the main thing to work on is the data section — got it.”",
    "status": "Approved"
  },
  {
    "normId": "HC-3-nhs-111-triage-language",
    "category": "Healthcare",
    "definition": "NHS 111 phone/online triage uses cautious, worst-case-inclusive language by design; being told to “go to A&E if it gets worse” isn't a sign your case is being taken as urgent right now, it's a standard safety-net instruction.",
    "surfaceMarkers": "“If you experience X, Y, or Z, go to A&E immediately” listed at the end of an otherwise calm, non-urgent-sounding call or web triage result.",
    "whatItMeans": "This is defensive, standardized safety language given to nearly everyone, not a specific escalation of concern about your individual case.",
    "example": "A client called 111 about a minor issue and was told a long list of “go to A&E if...” symptoms; they panicked, assuming their case was more serious than the calm tone of the rest of the call suggested.",
    "goodResponse": "Ask directly: “Based on what I've told you, how urgent is this specifically?” rather than reading the standard safety list as a signal.",
    "status": "Approved"
  },
  {
    "normId": "HC-4-pharmacist-first-point-of-contact",
    "category": "Healthcare",
    "definition": "Pharmacists are a legitimate and commonly used first point of contact for minor ailments in the UK — since the NHS Pharmacy First scheme launched in January 2024, they can now formally assess and prescribe for seven specific common conditions without a GP referral.",
    "surfaceMarkers": "A GP receptionist or NHS 111 suggesting \"try the pharmacy first\" for symptoms like a sore throat, earache, sinusitis, an infected insect bite, impetigo, shingles, or a suspected UTI — the seven conditions specifically covered by the scheme.",
    "whatItMeans": "This is a standard, expected referral for minor issues (rashes, coughs, UTIs, etc.), not the surgery deflecting or downgrading the concern.",
    "example": "A client felt dismissed when a GP receptionist suggested the pharmacist instead of booking a GP appointment for a minor skin issue, not realizing this is the normal, expected first step.",
    "goodResponse": "Treat a pharmacist referral as a genuine, appropriate option — and if symptoms persist after, that's the natural point to request a GP appointment.",
    "status": "Approved"
  },
  {
    "normId": "HC-5-patient-advocating-for-self",
    "category": "Healthcare",
    "definition": "Patients are generally expected to actively state their own priorities and ask direct questions in appointments — deference to the doctor's judgement without input can result in your specific concern going unaddressed.",
    "surfaceMarkers": "A GP asking “anything else?” briefly at the end of a short appointment, with no further prompting for detail.",
    "whatItMeans": "The system expects the patient to raise what matters to them proactively; staying quiet out of politeness or deference is read as “nothing else,” not as holding back out of respect.",
    "example": "A client had a second, more concerning symptom they didn't mention because the doctor “seemed busy,” and the appointment ended without it ever being raised.",
    "goodResponse": "Prepare your 1-2 main points beforehand and state them directly and early: “There are two things I want to cover today: X and Y.”",
    "status": "Approved"
  },
  {
    "normId": "HC-6-cancellation-text-formality",
    "category": "Healthcare",
    "definition": "A short, impersonal-seeming NHS text or letter cancelling or rescheduling an appointment is standard administrative process, not a sign the appointment or your case is being deprioritized.",
    "surfaceMarkers": "A terse automated text: “Your appointment on [date] has been cancelled. Please call to rebook.” with no explanation or apology.",
    "whatItMeans": "This reflects a standardized admin system, not a judgement about how important your case is — cancellations happen routinely for capacity reasons.",
    "example": "A client received a blunt cancellation text with no explanation and assumed their case had been deprioritized or lost; it had simply been rebooked due to a scheduling clash.",
    "goodResponse": "Call to rebook and ask plainly if there's a reason for the change or an expected new timeframe, rather than assuming a downgrade in priority.",
    "status": "Approved"
  },
  {
    "normId": "HC-7-mental-health-checkin-brevity",
    "category": "Healthcare",
    "definition": "A GP's brief, checklist-style mental health screening (e.g. a short PHQ-9 style questionnaire) is a standard clinical tool, not a sign the conversation is being rushed or the concern minimized.",
    "surfaceMarkers": "A GP reading out a short set of standardized questions from a screen rather than an open-ended conversation.",
    "whatItMeans": "This is a validated clinical instrument used to structure the assessment, not a replacement for a fuller conversation — more time and follow-up can still be requested.",
    "example": "A client felt their mental health concern wasn't taken seriously because the GP mostly worked through a short questionnaire rather than talking freely.",
    "goodResponse": "After the questionnaire, ask directly: “Can we talk a bit more about what's actually going on, beyond these questions?”",
    "status": "Approved"
  },
  {
    "normId": "HL-3-inventory-check-in-formality",
    "category": "Housing & landlord",
    "definition": "A detailed, formal move-in inventory and condition report is standard UK rental practice and protects the tenant as much as the landlord — it isn't a sign of distrust.",
    "surfaceMarkers": "A lengthy printed or app-based inventory listing every mark, scuff, and item condition, often with photos, at move-in.",
    "whatItMeans": "This document is the tenant's main protection against unfair deposit deductions later — treating it as excessive or skipping a careful read works against the tenant's own interest.",
    "example": "A client rushed through signing the move-in inventory to seem agreeable, then couldn't dispute a deposit deduction for a mark that was actually already there.",
    "goodResponse": "Take time to check the inventory thoroughly and add notes/photos for anything inaccurate before signing, regardless of how quick the landlord seems to want it done.",
    "status": "Approved"
  },
  {
    "normId": "HL-4-section-21-notice-tone",
    "category": "Housing & landlord",
    "definition": "Section 21 'no-fault' eviction notices were abolished in England from 1 May 2026 under the Renters' Rights Act 2025 — landlords must now use a Section 8 notice citing a specific legal ground, delivered in the same flat, procedural legal language regardless of the relationship.",
    "surfaceMarkers": "A formal Section 8 notice citing a specific numbered ground (e.g. rent arrears, landlord selling, landlord/family moving in), served in procedural legal language, sometimes alongside supporting evidence for that ground.",
    "whatItMeans": "Before May 2026, landlords could evict without giving any reason (Section 21); that route no longer exists. A Section 8 notice must now state a real, provable ground, so its formal tone reflects a genuine legal process, not personal conflict — and, unlike the old Section 21, the tenant can contest the stated ground in court.",
    "example": "A client received a formally worded Section 8 eviction notice from an otherwise friendly landlord and assumed the relationship had turned hostile, not realizing a specific legal ground is now always required and the formal tone is simply how any such notice is legally required to be worded.",
    "goodResponse": "Read the specific ground cited in a Section 8 notice carefully — since Section 21 no longer exists, a valid eviction always requires one now, and it's reasonable to seek advice (e.g. from Shelter) on whether the stated ground genuinely applies.",
    "status": "Approved"
  },
  {
    "normId": "HL-5-deposit-protection-scheme-silence",
    "category": "Housing & landlord",
    "definition": "Landlords are legally required to protect a tenant's deposit in a government-approved scheme and provide proof within 30 days — but they often won't proactively explain this, expecting the tenant to know to ask.",
    "surfaceMarkers": "No mention of deposit protection at move-in beyond a brief line in the contract, and no proactive confirmation email.",
    "whatItMeans": "The absence of explanation doesn't mean it hasn't been done (or that it's being skipped) — but it's the tenant's responsibility to confirm, not something that will necessarily be volunteered.",
    "example": "A client never received confirmation their deposit was protected and assumed asking would seem distrustful, so never followed up — leaving them unable to verify their legal protection.",
    "goodResponse": "Ask directly and in writing within the first few weeks: “Could you send me the deposit protection scheme reference for my deposit?” — this is a standard, expected request, not an accusation.",
    "status": "Approved"
  },
  {
    "normId": "HL-6-shared-house-kitchen-etiquette-notes",
    "category": "Housing & landlord",
    "definition": "Written notes left in shared kitchens/bathrooms about mess, dishes, or shared items are a common indirect way flatmates raise ongoing frustration, rather than a one-off, low-stakes reminder.",
    "surfaceMarkers": "A note on the fridge or whiteboard: “Can everyone please remember to wash up their own dishes :)” — friendly phrasing, but often after repeated unaddressed frustration.",
    "whatItMeans": "By the time a note appears, the issue has likely been building for a while — it's rarely the first time it's bothered someone.",
    "example": "A client saw a cheerful note about washing dishes and didn't think much of it, not realizing a flatmate had been quietly frustrated for weeks.",
    "goodResponse": "Respond to a shared-space note promptly and directly, and consider a brief in-person acknowledgment: “Sorry, I'll sort that — let me know if it's been an ongoing issue.”",
    "status": "Approved"
  },
  {
    "normId": "HL-7-viewing-feedback-silence",
    "category": "Housing & landlord",
    "definition": "Not hearing back after a rental viewing, even after being told “we'll be in touch,” commonly means the application was unsuccessful — landlords and agents rarely send explicit rejections.",
    "surfaceMarkers": "“We'll let you know” at the end of a viewing, followed by no contact within the stated or implied timeframe.",
    "whatItMeans": "Silence past the expected timeframe functions as the rejection in UK rental practice — an explicit “no” is uncommon.",
    "example": "A client kept waiting to hear back after a viewing for two weeks, assuming they were still being considered, and missed other opportunities in the meantime.",
    "goodResponse": "Treat silence past the stated timeframe as a likely no and keep actively viewing other properties in parallel, following up once politely for a final answer.",
    "status": "Approved"
  },
  {
    "normId": "JS-3-cv-personal-statement-understatement",
    "category": "Job search",
    "definition": "UK CVs and cover letters traditionally favor understated, evidence-led language over overt self-promotion — the British norm skews toward “developed” and “contributed to” rather than “spearheaded” and “transformed.”",
    "surfaceMarkers": "Hiring feedback or example CVs that read as modest and factual compared to CVs from more self-promotional cultures.",
    "whatItMeans": "Understated language is not a lack of confidence in this context — being extremely self-promotional can actually read as less credible in some UK sectors, particularly traditional or public-sector ones.",
    "example": "A client's confident, achievement-heavy CV drew less positive feedback than expected from UK recruiters, who found the tone off-putting rather than impressive.",
    "goodResponse": "Lead with specific, factual outcomes (numbers, concrete results) rather than superlative language — let the evidence carry the weight instead of the adjectives.",
    "status": "Approved"
  },
  {
    "normId": "JS-4-recruiter-warm-language-non-commitment",
    "category": "Job search",
    "definition": "Recruiters often use warm, encouraging language throughout a process without it reflecting an actual decision or preference — professional friendliness is separate from outcome.",
    "surfaceMarkers": "“You're a really strong candidate,” “the client loved you” — said before any offer or explicit next-step confirmation.",
    "whatItMeans": "This is standard relationship-management language recruiters use with most candidates to keep them engaged, not a reliable signal of where you stand.",
    "example": "A client was told repeatedly they were “the client's favorite” and assumed the job was essentially theirs, then didn't get an offer.",
    "goodResponse": "Ask directly for concrete next steps and timelines rather than reading warmth as commitment: “What's the next formal step, and by when should I expect to hear?”",
    "status": "Approved"
  },
  {
    "normId": "JS-5-competency-question-structure-expectation",
    "category": "Job search",
    "definition": "UK interviews frequently use structured competency questions (“Tell me about a time when...”) expecting a specific STAR-style (Situation, Task, Action, Result) answer format, not a general conversational response.",
    "surfaceMarkers": "“Tell me about a time when you had to deal with a difficult colleague” asked as a standalone question, with the interviewer waiting for a structured example.",
    "whatItMeans": "A vague or general answer (“I always try to communicate well”) reads as unprepared — a specific, structured past example is what's actually being assessed.",
    "example": "A client answered competency questions with general philosophy statements rather than specific stories, and was told afterward the answers “lacked detail,” without understanding why.",
    "goodResponse": "Prepare 4-5 specific past examples in advance, structured as situation → task → action → result, ready to adapt to different competency questions.",
    "status": "Approved"
  },
  {
    "normId": "JS-6-notice-period-negotiation-norm",
    "category": "Job search",
    "definition": "Stating a full statutory or contractual notice period when asked about availability is expected and normal — it is not read as a lack of enthusiasm for the new role.",
    "surfaceMarkers": "“When could you start?” asked directly in an interview or offer stage.",
    "whatItMeans": "Employers expect and plan around a standard notice period; a shorter-than-normal answer isn't required to demonstrate keenness, and honesty here is the norm, not a risk.",
    "example": "A client considered saying they could start immediately, despite a month's notice at their current job, out of fear of seeming uncommitted, before checking what was actually expected.",
    "goodResponse": "State the real notice period plainly and, if genuinely relevant, add a brief note of enthusiasm: “My notice period is one month, but I'm very keen to start as soon as that allows.”",
    "status": "Approved"
  },
  {
    "normId": "JS-7-networking-coffee-informality",
    "category": "Job search",
    "definition": "A “let's grab a coffee” or informal chat request from a UK professional contact is a genuine, low-stakes networking norm — it is not a lesser or performative substitute for a real meeting.",
    "surfaceMarkers": "“Would you fancy a coffee sometime to chat about X?” proposed instead of a formal meeting request.",
    "whatItMeans": "This is a standard, taken-seriously way to build a professional relationship or explore an opportunity informally — showing up prepared and treating it as a real conversation is expected, not just small talk.",
    "example": "A client treated an informal coffee invitation from a senior contact as purely social and came without any preparation, missing a genuine opportunity to discuss a role.",
    "goodResponse": "Treat an informal coffee/chat invitation from a professional contact as a real opportunity — prepare a few relevant points or questions, same as for a formal meeting.",
    "status": "Approved"
  },
  {
    "normId": "SO-1-self-deprecating-humor-not-literal",
    "category": "Social",
    "definition": "Self-deprecating jokes (“I'm useless at this,” “typical me, running late again”) are a common social register and not meant to be taken as literal, serious self-assessment.",
    "surfaceMarkers": "Light, joking self-criticism delivered with a smile or in a casual tone, often about a minor mistake.",
    "whatItMeans": "This is typically a bonding or humility-signaling social habit, not a genuine request for reassurance or a literal statement of low self-worth.",
    "example": "A client's British colleague joked “I'm hopeless with technology” after a minor mistake, and the client responded with unexpectedly serious reassurance, which felt oddly formal to the colleague.",
    "goodResponse": "A light, matching response (“ha, we've all been there”) usually lands better than serious reassurance for a clearly joking self-deprecating comment.",
    "status": "Approved"
  },
  {
    "normId": "SO-2-declining-invitation-vague-excuse",
    "category": "Social",
    "definition": "A vague, non-specific reason for declining a social invitation (“I've got something on that day”) is a normal, polite way to decline without giving a real reason — pressing for details can feel intrusive.",
    "surfaceMarkers": "“I've got a bit of a thing that day, sorry!” with no further detail offered or volunteered.",
    "whatItMeans": "The vagueness is intentional and socially acceptable — it isn't an invitation to ask follow-up questions about what the “thing” actually is.",
    "example": "A client kept asking a colleague for more detail about their vague excuse for missing a work social, which made the colleague visibly uncomfortable.",
    "goodResponse": "Accept a vague decline at face value with a simple “no worries, another time!” rather than probing for the real reason.",
    "status": "Approved"
  },
  {
    "normId": "SO-3-queueing-norm-enforcement",
    "category": "Social",
    "definition": "Queueing (waiting in line) in order of arrival is a strongly enforced social norm; visible frustration or comment is common if someone appears to jump the queue, even unintentionally.",
    "surfaceMarkers": "Pointed looks, an audible tut, or a polite-but-firm “I think the queue starts back there” if someone doesn't notice a line.",
    "whatItMeans": "Queue order is taken seriously as a matter of fairness, and a correction — even a mild one — reflects a real social expectation, not an overreaction.",
    "example": "A client didn't realize a loose cluster of people near a counter was actually a queue and stepped toward the front, prompting visible annoyance from others.",
    "goodResponse": "When uncertain whether a group is queueing, ask directly: “Sorry, is this the end of the queue?” — a completely normal and expected question.",
    "status": "Approved"
  },
  {
    "normId": "SO-4-small-talk-weather-function",
    "category": "Social",
    "definition": "Weather-focused small talk at the start of an interaction isn't really about the weather — it's a low-stakes way to open a conversation and signal friendliness before the actual topic.",
    "surfaceMarkers": "“Terrible weather we're having, isn't it?” said by a stranger, shopkeeper, or acquaintance as a conversation opener.",
    "whatItMeans": "This is a social ritual to establish a friendly tone, not a genuine request for detailed opinion or information about the weather.",
    "example": "A client gave a long, detailed answer about weather patterns to a simple opening remark, which came across as oddly serious rather than as the light exchange it was meant to be.",
    "goodResponse": "A brief, light agreement (“I know, awful, isn't it!”) is the expected response — treat it as a greeting, not a real question.",
    "status": "Approved"
  },
  {
    "normId": "SO-5-punctuality-for-social-events",
    "category": "Social",
    "definition": "For informal social gatherings (dinner at someone's home, a casual meetup), arriving slightly late (5-15 minutes) is often more normal and expected than arriving exactly on time or early, though this varies more than workplace punctuality.",
    "surfaceMarkers": "A host still visibly preparing when a guest arrives exactly on time, or other guests arriving noticeably after the stated time.",
    "whatItMeans": "For casual social events specifically (not formal or work-related ones), the stated time is often treated as approximate rather than fixed — arriving exactly on time can occasionally catch a host still getting ready.",
    "example": "A client arrived precisely on time to a casual dinner party and found the host still cooking, unprepared for guests, creating an awkward start.",
    "goodResponse": "For clearly informal social invitations, treat the stated time as approximate and consider arriving 10-15 minutes after — though always exactly on time for anything formal or work-related.",
    "status": "Approved"
  },
  {
    "normId": "AB-1-council-tax-band-query-formality",
    "category": "Admin & bureaucracy",
    "definition": "Contacting the local council about council tax, bins, or similar services usually requires going through a formal online form or long phone queue, even for simple questions — this reflects the system's structure, not unhelpfulness.",
    "surfaceMarkers": "A council website directing every query, however small, to a multi-step form or a phone line with a long wait, with no direct email option.",
    "whatItMeans": "This is the standard structure of UK local council service delivery, not a sign the council is uninterested in resolving a simple issue quickly.",
    "example": "A client wanted to ask a quick question about their council tax band and was frustrated to find only a lengthy form or a 40-minute phone queue as options, assuming this meant the council was being deliberately unhelpful.",
    "goodResponse": "Use the official form or phone line as the expected channel, and if it's genuinely urgent, note that clearly at the start of the request rather than expecting a faster informal route.",
    "status": "Approved"
  },
  {
    "normId": "AB-2-bank-letter-formal-tone-routine",
    "category": "Admin & bureaucracy",
    "definition": "Formal-sounding letters from a bank (e.g. requesting updated ID or address proof) are often routine compliance checks, not a sign of a problem with the account.",
    "surfaceMarkers": "A letter with serious, legal-sounding language (“failure to respond may result in restrictions”) requesting standard documentation.",
    "whatItMeans": "Banks are required to periodically verify customer information for regulatory reasons; the formal tone is standard template language, not an indication of suspicion about the specific account.",
    "example": "A client received a formal-sounding letter asking for updated proof of address and panicked, assuming their account was under investigation, when it was a routine periodic check.",
    "goodResponse": "Respond to the specific document request within the stated deadline; if genuinely uncertain, call the number on an official statement (not the letter) to confirm it's routine.",
    "status": "Approved"
  },
  {
    "normId": "AB-3-gp-registration-proof-of-address-strictness",
    "category": "Admin & bureaucracy",
    "definition": "Registering with a GP, opening a bank account, or similar admin tasks often require very specific, narrowly-defined proof-of-address documents — being told a document “doesn't count” is a standard bureaucratic rule, not personal scrutiny.",
    "surfaceMarkers": "A receptionist or clerk saying “we can't accept that, it needs to be a utility bill or bank statement from the last 3 months” after a tenancy agreement or other document is offered.",
    "whatItMeans": "This reflects fixed institutional rules applied uniformly to everyone, not a judgement being made about this specific case.",
    "example": "A client felt singled out when their tenancy agreement was rejected as proof of address at a GP registration, not realizing this is a standard, universally-applied rule.",
    "goodResponse": "Ask in advance exactly which documents are accepted before attending in person, to avoid a wasted trip and the frustration of an on-the-spot rejection.",
    "status": "Approved"
  },
  {
    "normId": "AB-4-hmrc-letter-response-urgency-mismatch",
    "category": "Admin & bureaucracy",
    "definition": "HMRC (tax authority) correspondence uses very formal, sometimes alarming-sounding legal language even for routine or minor matters — the tone doesn't reliably indicate the seriousness of the actual issue.",
    "surfaceMarkers": "Legal-sounding phrases like “you may be liable for a penalty” appearing in letters about comparatively minor, easily-resolved discrepancies.",
    "whatItMeans": "Standardized formal wording is used across the full range of HMRC correspondence, from serious to trivial, so the tone alone shouldn't be used to gauge urgency.",
    "example": "A client received an HMRC letter about a minor discrepancy worded in intimidating legal language and assumed a serious problem, causing significant unnecessary anxiety before calling to check.",
    "goodResponse": "Read the specific factual content (what's actually being asked or stated), and call HMRC directly to clarify actual urgency and next steps rather than reacting to the tone.",
    "status": "Approved"
  },
  {
    "normId": "AB-5-visa-immigration-advisor-directness-expectation",
    "category": "Admin & bureaucracy",
    "definition": "When dealing with immigration solicitors or advisors, being direct about deadlines, costs, and requirements is expected and welcomed — vague, softened questions often get vague, softened (less useful) answers.",
    "surfaceMarkers": "An advisor giving a general, hedged response (“it depends,” “generally speaking”) to a vaguely-phrased question.",
    "whatItMeans": "Professional UK advisors typically respond in kind to how a question is asked — a specific, direct question usually receives a specific, direct, more useful answer.",
    "example": "A client asked an immigration advisor “is my situation okay?” and received a vague, general reassurance, when a more specific question about a particular requirement would have gotten a clearer, more useful answer.",
    "goodResponse": "Ask specific, direct questions (“What exactly is the minimum bank balance required, and for how many days?”) rather than broad ones, to get equally specific answers.",
    "status": "Approved"
  },
  {
    "normId": "WP-11-per-my-last-email",
    "category": "Workplace",
    "definition": "The phrase \"per my last email\" is rated the single most passive-aggressive email phrase by UK workplace surveys, signaling visible frustration that a point already made is being ignored, despite its polite wording.",
    "surfaceMarkers": "\"Per my last email,\" \"as I mentioned previously,\" \"just circling back to my earlier message,\" sent after no action following a prior request.",
    "whatItMeans": "A UK survey (Preply, 2023) found 83% of professionals had received a passive-aggressive work email, with \"per my last email\" rated the top offending phrase and 42% of cases coming from a boss or senior colleague — the politeness masks real irritation, not indifference.",
    "example": "A client's manager replied to a follow-up question with \"per my last email, the deadline is Friday,\" and the client didn't realize this was a sign of mounting frustration, not a neutral repeat of information.",
    "goodResponse": "Treat this phrase as a signal to acknowledge the oversight directly and act immediately: \"Sorry, I missed that — on it now.\"",
    "status": "Approved"
  },
  {
    "normId": "WP-12-calendar-invite-formality",
    "category": "Workplace",
    "definition": "Sending a formal calendar invite for a conversation that could have been a quick chat signals that the sender views the topic as important enough to need dedicated, documented time.",
    "surfaceMarkers": "A calendar invite with a specific title and agenda line, sent for a topic previously discussed only casually or over chat.",
    "whatItMeans": "The shift from informal chat to a scheduled invite is itself a signal the matter is being taken more seriously or formally than before.",
    "example": "A client's manager sent a calendar invite titled \"Quick catch-up\" after weeks of casual Slack messages, and the client didn't register the shift in tone until the meeting revealed a formal performance concern.",
    "goodResponse": "When an invite appears for a topic normally handled informally, prepare as if for a formal conversation rather than assuming it's purely routine.",
    "status": "Approved"
  },
  {
    "normId": "WP-13-not-the-right-forum",
    "category": "Workplace",
    "definition": "Being told a topic isn't \"the right forum\" for the current meeting or thread is a polite way of closing down discussion, not just a scheduling comment.",
    "surfaceMarkers": "\"This might not be the right forum for that,\" \"let's take that as a separate conversation,\" said in response to a question raised in a group setting.",
    "whatItMeans": "This usually means the person doesn't want to address the point in front of the group, not that the venue is genuinely wrong.",
    "example": "A client raised a budget concern in a team meeting and was told it \"wasn't quite the right forum,\" then never received a follow-up because they didn't request one.",
    "goodResponse": "Follow up directly and specifically afterward: \"Could we find 15 minutes to go through the budget point from earlier?\" rather than waiting for the other person to raise it again.",
    "status": "Approved"
  },
  {
    "normId": "WP-14-team-offsite-attendance",
    "category": "Workplace",
    "definition": "Team offsites and away days are technically optional but function as a strong belonging signal, similar to informal social rituals.",
    "surfaceMarkers": "\"It's not compulsory, but it'd be great to see everyone there,\" repeated encouragement to attend from a manager despite stated optionality.",
    "whatItMeans": "Non-attendance is usually noted even when explicitly framed as fine, and can subtly affect how included someone is seen to be.",
    "example": "A client skipped a team offsite assuming attendance was genuinely optional, and later noticed being left out of decisions made informally during the day.",
    "goodResponse": "If unable to attend, explain briefly in advance and ask to be looped in on anything discussed: \"Can't make it, but please send me a summary of anything decided.\"",
    "status": "Approved"
  },
  {
    "normId": "WP-15-meeting-jargon-deferral",
    "category": "Workplace",
    "definition": "Meeting phrases like \"let's park that\" or \"circle back\" defer a topic without specifying whether or when it will actually be revisited.",
    "surfaceMarkers": "\"Let's park that for now,\" \"put a pin in it,\" \"circle back on that one,\" with no follow-up date or owner assigned.",
    "whatItMeans": "Without a concrete next step attached, \"parking\" a topic often means it quietly drops rather than genuinely pausing.",
    "example": "A client's idea was \"parked\" in a meeting with apparent enthusiasm, and they assumed it would be revisited, but it was never mentioned again.",
    "goodResponse": "When something is parked, ask for a concrete next step on the spot: \"Who should own bringing this back, and roughly when?\"",
    "status": "Approved"
  },
  {
    "normId": "WP-16-redundancy-consultation-script",
    "category": "Workplace",
    "definition": "Formal redundancy consultation meetings use standardized, procedural, legally-careful language regardless of how the situation was discussed personally beforehand.",
    "surfaceMarkers": "Scripted phrasing like \"this is a formal consultation meeting,\" reading from prepared notes, an HR representative present even with a familiar manager.",
    "whatItMeans": "The formality reflects legal process requirements, not a shift in the manager's personal view — for 20+ redundancies, collective consultation must legally start 30-45 days before the first dismissal, and since 6 April 2026 a failure to consult properly can cost an employer up to 180 days' pay per affected employee (double the previous maximum).",
    "example": "A client was surprised by how cold a redundancy consultation felt compared to their normally friendly manager, and read it as personal, when it was standard legal procedure.",
    "goodResponse": "Separate the format from the relationship — ask direct practical questions about process and timeline, and note that HR can be followed up with directly.",
    "status": "Approved"
  },
  {
    "normId": "WP-17-lets-take-this-offline",
    "category": "Workplace",
    "definition": "\"Let's take this offline\" in a meeting signals the topic should be discussed privately afterward, either because it's sensitive or not relevant to the whole group.",
    "surfaceMarkers": "\"Let's take that offline,\" \"happy to chat about that separately,\" said to redirect a question or disagreement away from the group setting.",
    "whatItMeans": "This isn't necessarily dismissive — it can protect a sensitive point from being aired publicly — but it does require the person to actively follow up.",
    "example": "A client raised a disagreement in a meeting and was told to \"take it offline,\" then didn't follow up, assuming the topic had been dropped rather than deferred.",
    "goodResponse": "Always follow up promptly after being told to take something offline: \"Following up on the point from the meeting — do you have a few minutes today?\"",
    "status": "Approved"
  },
  {
    "normId": "HC-8-watchful-waiting-approach",
    "category": "Healthcare",
    "definition": "For many minor or ambiguous symptoms, GPs recommend a \"wait and see\" period before further tests or treatment, as standard clinical practice rather than a dismissal of concern.",
    "surfaceMarkers": "\"Let's give it two weeks and see how it settles,\" \"come back if it hasn't improved by [date],\" with no immediate test or referral offered.",
    "whatItMeans": "This is a deliberate, evidence-based strategy for self-limiting conditions, not a sign the GP thinks the concern is unimportant.",
    "example": "A client was advised to wait two weeks before further action on a minor symptom and assumed the GP hadn't taken it seriously, when this was standard practice for that type of issue.",
    "goodResponse": "Ask directly what to watch for and when to return: \"What specific signs would mean I should come back sooner than two weeks?\"",
    "status": "Approved"
  },
  {
    "normId": "HC-9-econsult-online-triage-form",
    "category": "Healthcare",
    "definition": "Many GP surgeries now require an online form (eConsult or similar) to be submitted before a phone or in-person appointment is offered, replacing direct phone booking for many requests.",
    "surfaceMarkers": "A surgery website or automated message directing every non-emergency query to an online form, often with same-day slots released only via the form.",
    "whatItMeans": "This is the surgery's standard triage process for managing demand, not a barrier placed specifically in front of this particular request.",
    "example": "A client tried calling their GP surgery directly and was told to \"fill in the online form instead,\" and felt brushed off, not realizing this is now the standard route for most surgeries.",
    "goodResponse": "Use the online form as the primary channel and be specific and complete in it, since it's often triaged faster than expected.",
    "status": "Approved"
  },
  {
    "normId": "HC-10-same-day-urgent-only-gatekeeping",
    "category": "Healthcare",
    "definition": "Receptionists asking \"is it urgent?\" before offering a same-day appointment are following a structured triage protocol, not making a personal judgment about the patient.",
    "surfaceMarkers": "\"Can I ask what it's regarding, so I can see who's best to help?\" or \"same-day slots are for urgent issues only,\" asked routinely of every caller.",
    "whatItMeans": "This question is a standard triage step for every patient, not scrutiny of whether this specific concern is valid.",
    "example": "A client felt embarrassed being asked to explain their symptom to a receptionist before getting an appointment, not realizing this question is asked of every caller as routine triage.",
    "goodResponse": "Answer the triage question factually and specifically, including how long the issue has lasted, to get routed to the right appointment type faster.",
    "status": "Approved"
  },
  {
    "normId": "HC-11-ae-triage-wait-times",
    "category": "Healthcare",
    "definition": "A&E uses a triage system where wait times are ordered by clinical urgency, not arrival time — the national target is that 95% of patients are admitted, discharged or transferred within 4 hours, though performance has been below that target for years, so a long wait for a non-urgent case is standard, not neglect.",
    "surfaceMarkers": "Being seen briefly by a triage nurse on arrival, then a long wait in the general waiting area with no further update.",
    "whatItMeans": "A long wait after initial triage typically confirms the case has been assessed as lower urgency relative to others being treated, not that it was overlooked.",
    "example": "A client waited over five hours in A&E after a brief initial check and assumed they'd been forgotten, when they had simply been triaged as non-urgent.",
    "goodResponse": "It's acceptable to ask the desk for a rough update after a long wait: \"Just checking I'm still in the queue — any sense of how much longer?\"",
    "status": "Approved"
  },
  {
    "normId": "HC-12-two-week-review-standard",
    "category": "Healthcare",
    "definition": "A GP recommending review after \"two weeks\" for many common complaints reflects a standard clinical timeframe for conditions to either resolve or reveal themselves as needing further action.",
    "surfaceMarkers": "\"If it's not settled in two weeks, book back in,\" attached to a wide range of minor complaints, from coughs to skin issues.",
    "whatItMeans": "The two-week marker is a general clinical rule of thumb used broadly, not a specific judgment about this individual case's likely course.",
    "example": "A client was given the same \"come back in two weeks\" advice for two unrelated issues months apart and wondered if the GP was just giving a generic brush-off each time.",
    "goodResponse": "Treat the given timeframe as a genuine, useful checkpoint, and book the follow-up proactively if symptoms persist rather than waiting to be prompted.",
    "status": "Approved"
  },
  {
    "normId": "HC-13-health-visitor-checklist-visits",
    "category": "Healthcare",
    "definition": "Health visitor and midwife check-ins for new parents follow a standardized national checklist of questions, not a personalized assessment of parenting ability.",
    "surfaceMarkers": "A visitor working through one of five mandated standardised contacts (antenatal at 28 weeks, new baby at 10-14 days, 6-8 weeks, 9-12 months, and 2-2½ years), covering the same fixed set of topics at each stage for every family.",
    "whatItMeans": "These visits are structured screening tools applied to every family at the same stages, not a targeted evaluation triggered by a specific concern.",
    "example": "A client felt judged by a health visitor's detailed questions about feeding and sleep, not realizing every new parent is asked the identical standardized set.",
    "goodResponse": "Answer the checklist questions honestly and use the visit to raise any specific worries directly, since the standard format doesn't prevent asking follow-up questions.",
    "status": "Approved"
  },
  {
    "normId": "HC-14-appointment-letter-postal-delay",
    "category": "Healthcare",
    "definition": "NHS appointment confirmations are often sent by post rather than a faster channel, so a multi-week gap between referral and receiving a letter is standard timing, not a sign of being deprioritized.",
    "surfaceMarkers": "\"You will receive a letter with your appointment details\" stated at referral, with no interim digital confirmation or tracking.",
    "whatItMeans": "Postal processing time is a normal part of the system's current administrative process, not an indicator of how the case has been prioritized.",
    "example": "A client heard nothing for three weeks after a referral and assumed it had been lost, before a letter arrived confirming an appointment had already been booked for the following week.",
    "goodResponse": "If a letter hasn't arrived within the timeframe mentioned, call to confirm an appointment exists rather than assuming the referral was lost.",
    "status": "Approved"
  },
  {
    "normId": "HC-15-second-opinion-request-phrasing",
    "category": "Healthcare",
    "definition": "Directly asking for a second opinion is rare in UK healthcare interactions; patients more often phrase it indirectly, and staff are trained to recognize the indirect version.",
    "surfaceMarkers": "\"Is there anyone else I could possibly speak to about this?\" or \"I just want to make sure I've explored everything,\" rather than \"I'd like a second opinion.\"",
    "whatItMeans": "This is a normal, accepted request even when phrased softly — the hedging is a politeness convention, not a sign the patient shouldn't ask.",
    "example": "A client wanted a second opinion but worried it would seem rude to their GP, and delayed asking for weeks using softer language that wasn't picked up on.",
    "goodResponse": "It's acceptable to state the request plainly: \"I'd like to get a second opinion on this — could you point me toward how to arrange that?\"",
    "status": "Approved"
  },
  {
    "normId": "HC-16-nhs-vs-private-dental-referral",
    "category": "Healthcare",
    "definition": "Dentists routinely mention private treatment options alongside NHS ones as standard practice, not as evidence the NHS option is being withheld or under-recommended.",
    "surfaceMarkers": "\"This can be done on the NHS, or there's a private option that [differs in some way],\" presented in the same neutral tone for both.",
    "whatItMeans": "Both are usually genuinely valid options with different trade-offs (speed, materials, cosmetic finish); mentioning private isn't a push away from the NHS route.",
    "example": "A client felt pressured when a private option was mentioned alongside an NHS one, and declined both out of suspicion, when the NHS option would have suited them fine.",
    "goodResponse": "Ask directly what the practical difference is: \"What would I actually get with the NHS option versus the private one?\" to make an informed choice.",
    "status": "Approved"
  },
  {
    "normId": "HC-17-duty-doctor-any-available-gp",
    "category": "Healthcare",
    "definition": "Non-urgent same-day requests are often handled by whichever GP is on \"duty\" that day rather than the patient's usual doctor, as a standard way of managing capacity.",
    "surfaceMarkers": "\"You'll speak to the duty doctor today,\" stated by reception when a specific GP isn't available, with no explanation offered unless asked.",
    "whatItMeans": "This is a routine capacity-management system, not a downgrade in care or a sign the usual GP is unavailable to this patient specifically.",
    "example": "A client was disappointed to be told they'd see \"whoever's on duty\" rather than their usual GP and assumed this meant a less thorough appointment, which wasn't the case.",
    "goodResponse": "If continuity matters for an ongoing issue, ask explicitly: \"Could this be booked with my usual GP specifically, even if it takes a bit longer to get in?\"",
    "status": "Approved"
  },
  {
    "normId": "HL-8-referencing-in-progress-delay",
    "category": "Housing & landlord",
    "definition": "Letting agents giving vague \"still in progress\" updates during tenant referencing checks reflects normal third-party processing delays, not necessarily a sign the application is failing.",
    "surfaceMarkers": "\"Referencing is still being processed, we'll update you as soon as we hear,\" repeated over more than a week with no specific reason given.",
    "whatItMeans": "Referencing depends on external providers (employers, previous landlords, credit agencies) responding, which is often the actual bottleneck, not agent inaction.",
    "example": "A client waited two weeks for a referencing update and assumed they'd been rejected, when a previous landlord had simply been slow to respond to a reference request.",
    "goodResponse": "Ask specifically which part of referencing is outstanding: \"Is there a particular reference we're still waiting on that I could help chase?\"",
    "status": "Approved"
  },
  {
    "normId": "HL-9-fair-wear-and-tear-phrase",
    "category": "Housing & landlord",
    "definition": "\"Fair wear and tear\" is a specific standard used in deposit disputes describing gradual, expected deterioration that a landlord cannot charge for, distinct from damage.",
    "surfaceMarkers": "The phrase appearing in a deposit deduction breakdown or dispute correspondence, often alongside specific item-by-item charges.",
    "whatItMeans": "Citing the phrase doesn't automatically mean the landlord agrees an item falls under it — tenants often need to actively argue this standard applies to a specific deduction.",
    "example": "A client assumed \"fair wear and tear\" being mentioned in their contract meant all deductions would automatically be waived, and was surprised when several were still charged.",
    "goodResponse": "If disputing a deduction, explicitly reference the standard and the property's age/usage: \"Given the carpet is seven years old, this mark falls under fair wear and tear, not damage.\"",
    "status": "Approved"
  },
  {
    "normId": "HL-10-right-to-rent-document-check",
    "category": "Housing & landlord",
    "definition": "Landlords are legally required to check and copy immigration status documents for every tenant before a tenancy starts, regardless of nationality or background — a landlord who lets to someone without this right can now face up to 5 years in prison.",
    "surfaceMarkers": "A request for passport, visa, or biometric residence permit copies as a standard part of the application, asked of all applicants equally.",
    "whatItMeans": "This is a mandatory legal check applied uniformly to every tenant by law, not a request specific to or targeted at this individual applicant.",
    "example": "A client felt singled out when asked for immigration documents during a rental application, not realizing every applicant, regardless of background, is legally required to provide the same.",
    "goodResponse": "Provide the requested documents promptly as a standard step, and note that a landlord who skips this check for anyone is actually the one breaking the rules.",
    "status": "Approved"
  },
  {
    "normId": "HL-11-guarantor-requirement-no-uk-credit-history",
    "category": "Housing & landlord",
    "definition": "Tenants without a UK credit history or UK-based income are commonly asked for a guarantor, as a standard risk-management requirement rather than a personal judgment.",
    "surfaceMarkers": "\"We'll need a UK-based guarantor for this application,\" stated as a fixed requirement early in the process, applied to a defined category of applicants.",
    "whatItMeans": "This reflects the agency's standard risk policy for anyone without a verifiable UK financial history, not a comment on this applicant's individual trustworthiness.",
    "example": "A client new to the UK felt insulted being asked for a guarantor, not realizing this is standard policy applied to nearly all recent arrivals regardless of income level.",
    "goodResponse": "Ask early whether alternatives exist, such as paying additional months' rent upfront in place of a guarantor, since some agencies offer this if asked directly.",
    "status": "Approved"
  },
  {
    "normId": "HL-12-income-affordability-multiplier",
    "category": "Housing & landlord",
    "definition": "Letting agents typically require proof that annual income meets a fixed multiple of the annual rent (commonly around 30 times the monthly rent), applied as a standard formula rather than case-by-case discretion.",
    "surfaceMarkers": "\"Your income needs to be at least [X] times the monthly rent,\" stated as a fixed threshold, with a specific number given regardless of other financial circumstances.",
    "whatItMeans": "This is a standardized formula applied uniformly, not a judgment about this specific applicant's overall financial reliability — and since the Renters' Rights Act 2025, it's now unlawful for a landlord or agent to refuse an otherwise-qualifying applicant, or make renting harder for them, because they receive benefits or have children (councils can fine up to £7,000 for breaching this).",
    "example": "A client with strong savings but a salary just below the multiplier was surprised to be asked for a guarantor despite having enough money to comfortably cover the rent.",
    "goodResponse": "If income is close to the threshold, ask directly whether savings or a larger upfront payment can be offered as an alternative to meeting the multiplier exactly.",
    "status": "Approved"
  },
  {
    "normId": "HL-13-hmo-licensing-silence",
    "category": "Housing & landlord",
    "definition": "Landlords of shared houses (HMOs) are legally required to hold a specific licence in many areas, but rarely mention this proactively to tenants moving in.",
    "surfaceMarkers": "No mention of HMO licensing status at move-in, with the topic only coming up if a tenant specifically asks or a problem arises.",
    "whatItMeans": "The absence of proactive mention doesn't confirm the property is or isn't properly licensed — this is the kind of detail tenants are expected to check themselves.",
    "example": "A client living in a shared house only learned about HMO licensing requirements after a dispute arose, and hadn't known to check the property's status when moving in.",
    "goodResponse": "For any shared house with three or more unrelated tenants, it's reasonable to ask directly and in writing: \"Could you confirm this property's HMO licence details?\"",
    "status": "Approved"
  },
  {
    "normId": "HL-14-permitted-occupiers-clause",
    "category": "Housing & landlord",
    "definition": "Tenancy agreements specify exactly who is permitted to live at the property, and this is enforced more strictly than casual conversation with the landlord might suggest.",
    "surfaceMarkers": "A clause listing named permitted occupiers, with anyone else's stay beyond a short visit technically requiring landlord notification or consent.",
    "whatItMeans": "A landlord being personally relaxed in conversation doesn't override the written clause — a guest staying long-term can still be a genuine breach if not addressed formally.",
    "example": "A client let a partner stay for several months without updating the tenancy agreement, assuming a friendly verbal mention to the landlord was sufficient, which it technically wasn't.",
    "goodResponse": "For any guest staying beyond a couple of weeks, request a written update to the agreement rather than relying on a verbal heads-up.",
    "status": "Approved"
  },
  {
    "normId": "HL-15-break-clause-deferral",
    "category": "Housing & landlord",
    "definition": "A landlord's response to an early-exit request is often deferred to \"checking with the agency\" even when the landlord could likely decide directly — though since the Renters' Rights Act 2025 abolished fixed-term tenancies from 1 May 2026, this now more commonly comes up as a request to end a periodic tenancy early rather than invoking a traditional fixed-term break clause.",
    "surfaceMarkers": "\"Let me check with the agency and get back to you,\" in response to a tenant's request to invoke a break clause or leave early.",
    "whatItMeans": "This may be a genuine process step, but it can also be a way of buying time or softening a refusal. Since May 2026, most tenancies are periodic from the start, and a tenant can generally end one by giving at least two months' written notice, without needing a landlord's agreement at all.",
    "example": "A client asked to leave three months early via a break clause and was told the landlord would \"check with the agency,\" then heard nothing further for a month.",
    "goodResponse": "Set a specific follow-up date when asking: \"Could you let me know by [date] either way, since I need to plan my next steps?\"",
    "status": "Approved"
  },
  {
    "normId": "HL-16-end-of-tenancy-cleaning-checklist",
    "category": "Housing & landlord",
    "definition": "A detailed professional-cleaning standard is often expected at the end of a tenancy, communicated through an inventory checklist rather than stated verbally at move-in.",
    "surfaceMarkers": "A move-out inventory referencing a \"professional clean\" standard, sometimes requiring a receipt from a cleaning company as proof.",
    "whatItMeans": "A tenant's own thorough cleaning may not meet the specific contractual standard unless a professional service and receipt are provided, regardless of how clean the property looks.",
    "example": "A client cleaned the property themselves thoroughly before moving out and still had a deposit deduction for cleaning, because the contract specifically required a professional clean receipt.",
    "goodResponse": "Check the tenancy agreement's exact cleaning clause before moving out, and book a professional clean with a receipt if that's what's specified.",
    "status": "Approved"
  },
  {
    "normId": "HL-17-section-13-rent-increase-tone",
    "category": "Housing & landlord",
    "definition": "Since the Renters' Rights Act 2025 took effect on 1 May 2026, a Section 13 notice is now the only lawful way to raise rent (contractual rent-review clauses are void), capped at once every 52 weeks and requiring at least two months' notice, delivered in fixed legal wording regardless of the landlord-tenant relationship.",
    "surfaceMarkers": "A structured legal-format letter citing the relevant notice period and legislation, arriving with no informal explanation attached.",
    "whatItMeans": "The legal format is a procedural requirement, not a sign of a changed relationship — and since May 2026 it's also the landlord's only legal route to increase rent at all, with notice periods and frequency now fixed by law rather than by whatever the tenancy agreement says.",
    "example": "A client received a formally worded rent increase notice from an otherwise easygoing landlord and worried the relationship had soured, when the landlord was simply following the required legal process.",
    "goodResponse": "Respond to the substance (the new figure and effective date) directly; if it seems above local market rent, a tenant can challenge it at the First-tier Tribunal (currently a £47 application fee) before the new rent takes effect.",
    "status": "Approved"
  },
  {
    "normId": "JS-8-keep-cv-on-file-soft-rejection",
    "category": "Job search",
    "definition": "\"We'll keep your CV on file\" at the end of an unsuccessful application is a standard soft rejection phrase, rarely followed by any actual future contact.",
    "surfaceMarkers": "\"We'll keep your details/CV on file for future opportunities,\" stated at the close of a rejection email or call.",
    "whatItMeans": "This phrase functions as a polite way to end the conversation without an explicit \"no,\" rather than a genuine commitment to revisit the application later.",
    "example": "A client was told their CV would be \"kept on file\" after an unsuccessful interview and waited to hear back about future roles, which never came.",
    "goodResponse": "Treat this phrase as the end of that specific process, and if genuinely interested in future roles, proactively follow up in a few months rather than waiting to be contacted.",
    "status": "Approved"
  },
  {
    "normId": "JS-9-assessment-centre-group-exercise-scoring",
    "category": "Job search",
    "definition": "Group exercises at assessment centres are actively scored on collaborative behavior, not just the quality of ideas contributed.",
    "surfaceMarkers": "A group task with an observer taking notes, evaluating criteria like listening, including quieter participants, and building on others' points.",
    "whatItMeans": "Dominating the discussion or pushing only one's own ideas is scored negatively even if those ideas are good — the collaborative process itself is being assessed.",
    "example": "A client spoke the most in a group exercise, assuming this demonstrated leadership, and was scored lower than a quieter candidate who consistently brought others into the discussion.",
    "goodResponse": "Actively invite quieter participants into the discussion during group exercises: \"What do you think about that, [name]?\" — this is read as a leadership signal in itself.",
    "status": "Approved"
  },
  {
    "normId": "JS-10-right-to-work-check-timing",
    "category": "Job search",
    "definition": "UK employers are legally required to check right-to-work documents before a job offer is confirmed, so this request is standard for every hire, not specific scrutiny of one candidate.",
    "surfaceMarkers": "A request for a passport or visa/BRP copy sent alongside or shortly after an offer, phrased as a standard onboarding step.",
    "whatItMeans": "This is a uniform legal requirement applied to every successful candidate, regardless of nationality or background.",
    "example": "A client felt uneasy being asked for immigration documents right after receiving a job offer, not realizing this is a legally mandatory step for every new hire in the UK.",
    "goodResponse": "Provide the requested documents promptly as a routine step, the same as any other new hire would be asked to do.",
    "status": "Approved"
  },
  {
    "normId": "JS-11-one-way-video-interview-norm",
    "category": "Job search",
    "definition": "Pre-recorded, one-way video interviews (answering set questions to a camera with no live interviewer) are a standard early-stage screening tool at many UK employers, not a sign of low interest.",
    "surfaceMarkers": "A link to record timed video answers to fixed questions, with no live person present during recording.",
    "whatItMeans": "This is typically used to screen a large applicant pool efficiently before live interviews, not a lesser process reserved for less promising candidates.",
    "example": "A client felt discouraged being asked to do a one-way video interview rather than a live call, assuming it meant the employer wasn't very interested, when it was the standard first step for all applicants.",
    "goodResponse": "Treat a one-way video interview with the same preparation as a live one — research the company and rehearse answers, since it's scored the same way.",
    "status": "Approved"
  },
  {
    "normId": "JS-12-finalizing-internally-offer-delay",
    "category": "Job search",
    "definition": "\"We're just finalizing internally\" during the offer stage usually refers to budget, headcount, or sign-off processes, not lingering doubt about the candidate.",
    "surfaceMarkers": "\"Just waiting on some internal sign-off\" or \"finalizing details on our end,\" stated after a verbal offer or strong final-round signal, with no specific date given.",
    "whatItMeans": "This delay is most often administrative (approvals, paperwork) rather than a sign the decision itself is still genuinely undecided.",
    "example": "A client heard \"just finalizing internally\" after a verbal job offer and grew anxious for two weeks assuming the offer might be withdrawn, when it was a standard payroll approval delay.",
    "goodResponse": "Ask for a specific timeframe rather than waiting anxiously: \"That's great to hear — roughly when should I expect the formal offer through?\"",
    "status": "Approved"
  },
  {
    "normId": "JS-13-cover-letter-generic-greeting",
    "category": "Job search",
    "definition": "Addressing a cover letter \"Dear Hiring Manager\" rather than a named individual is a normal, acceptable default when no contact name is provided in the job listing.",
    "surfaceMarkers": "A job advert or application portal with no named contact, leading to a generic greeting by default.",
    "whatItMeans": "A generic greeting in this situation isn't read as a lack of effort — only failing to personalize when a name was actually easy to find would be noticed.",
    "example": "A client worried their generic \"Dear Hiring Manager\" greeting looked lazy, when the job listing itself gave no named contact for them to have used instead.",
    "goodResponse": "Spend a moment checking the job listing and company website for a named contact; if none exists, a generic greeting is entirely standard.",
    "status": "Approved"
  },
  {
    "normId": "JS-14-linkedin-open-to-work-banner",
    "category": "Job search",
    "definition": "The LinkedIn \"Open to Work\" green banner is a widely used, neutral signal of active job searching, not read as a sign of desperation or a mark against the candidate.",
    "surfaceMarkers": "A green profile photo frame with \"#OpenToWork\" visible publicly or set to recruiters-only.",
    "whatItMeans": "Recruiters treat this as a standard, practical way to find candidates who are actively looking, not as a negative signal about the candidate's situation.",
    "example": "A client avoided turning on the \"Open to Work\" banner for months, worried it would look bad to their current employer, and missed recruiter messages as a result.",
    "goodResponse": "Use the recruiters-only visibility setting if worried about a current employer seeing it, which still allows recruiters to find the profile without it being publicly visible.",
    "status": "Approved"
  },
  {
    "normId": "JS-15-meet-the-team-informal-framing",
    "category": "Job search",
    "definition": "A \"meet the team\" session framed as casual and low-pressure is still an evaluated part of the hiring process, despite the informal description.",
    "surfaceMarkers": "\"This is just an informal chat to meet the team, no pressure,\" said as an invitation to a later-stage interview step.",
    "whatItMeans": "Team members are typically asked for feedback afterward regardless of the casual framing, so the conversation is genuinely assessed even if it doesn't feel like a formal interview.",
    "example": "A client treated a \"just informal, meet the team\" session very casually and gave underprepared answers, not realizing feedback from that session fed directly into the final hiring decision.",
    "goodResponse": "Prepare for an \"informal\" meeting stage with the same care as a formal interview — have a few questions and examples ready, even if the tone in the room is relaxed.",
    "status": "Approved"
  },
  {
    "normId": "JS-16-reference-request-late-timing",
    "category": "Job search",
    "definition": "UK employers typically request references only after a verbal offer has been made, near the very end of the process, rather than earlier during interviews.",
    "surfaceMarkers": "\"Could you send over two references?\" asked only after a job offer has already been discussed, not during earlier interview stages.",
    "whatItMeans": "This late timing is standard sequencing, not a sign of lingering hesitation or an unusual extra hurdle being added at the last minute.",
    "example": "A client was surprised and slightly alarmed to be asked for references only after receiving a verbal offer, assuming it signaled new doubts, when this is the typical point in the process.",
    "goodResponse": "Have two reference contacts and their confirmed willingness prepared in advance, so this standard late-stage request can be answered immediately.",
    "status": "Approved"
  },
  {
    "normId": "SO-6-lets-do-this-again-closing-phrase",
    "category": "Social",
    "definition": "\"We should do this again sometime\" said at the end of a first meetup or catch-up is often a warm closing phrase rather than a concrete commitment to a specific future plan.",
    "surfaceMarkers": "\"We should totally do this again,\" \"let's not leave it so long next time,\" said while parting ways, with no specific date proposed.",
    "whatItMeans": "The sentiment is usually genuine as a general feeling, but without a specific date attached, it's not a firm plan and may or may not happen.",
    "example": "A client took \"we should do this again sometime\" as a concrete promise and felt let down when no follow-up invitation came for months.",
    "goodResponse": "If genuinely interested in meeting again, suggest a specific time on the spot or shortly after: \"Would you be free sometime in the next couple of weeks?\"",
    "status": "Approved"
  },
  {
    "normId": "SO-7-round-buying-pub-culture",
    "category": "Social",
    "definition": "When a group goes to the pub together, there's an informal expectation that everyone takes a turn buying a round of drinks for the group.",
    "surfaceMarkers": "One person announcing \"I'll get this round\" and later looking toward others expectantly as the evening continues, with no formal request made.",
    "whatItMeans": "This is a reciprocal social norm rather than a one-off generosity; consistently not taking a turn can be quietly noticed, even if never mentioned directly.",
    "example": "A client let others buy rounds all evening without offering to buy one themselves, not realizing this was noticed and slightly resented by the group over time.",
    "goodResponse": "Offer to buy a round at a natural point in the evening, even a non-alcoholic one if preferred, to participate in the norm rather than opting out entirely.",
    "status": "Approved"
  },
  {
    "normId": "SO-8-reflexive-sorry-no-fault-apology",
    "category": "Social",
    "definition": "Saying \"sorry\" reflexively in minor everyday situations — bumping into someone, asking a question, being in someone's way — is a social reflex, not a literal admission of fault.",
    "surfaceMarkers": "\"Sorry\" said automatically when someone else bumps into you, or before asking a simple question (\"Sorry, do you know the time?\").",
    "whatItMeans": "This use of \"sorry\" functions more like a verbal cushion or attention-getter than a genuine apology for wrongdoing.",
    "example": "A client was confused when a stranger who bumped into them said \"sorry\" first, unsure whether they themselves were somehow at fault, when it was simply reflexive.",
    "goodResponse": "A quick \"no worries\" or matching \"sorry\" back is the expected response — there's no need to determine who was actually at fault.",
    "status": "Approved"
  },
  {
    "normId": "SO-9-emotional-understatement-not-too-bad",
    "category": "Social",
    "definition": "British English commonly understates both positive and negative experiences, with phrases like \"not too bad\" or \"could be worse\" used to describe a wide emotional range.",
    "surfaceMarkers": "\"Not too bad, thanks,\" \"mustn't grumble,\" or \"could be worse,\" given in response to how something actually went, whether that was good or genuinely hard.",
    "whatItMeans": "These phrases don't reliably indicate a mild or lukewarm experience — the same words are often used for situations that were actually very good or quite difficult.",
    "example": "A client asked a colleague how a big presentation went and was told \"not too bad,\" and only learned weeks later it had actually gone extremely well.",
    "goodResponse": "Follow up with a specific question rather than taking a flat understatement at face value: \"That's great to hear — what part felt strongest?\"",
    "status": "Approved"
  },
  {
    "normId": "SO-10-on-my-way-white-lie",
    "category": "Social",
    "definition": "Texting \"on my way!\" shortly before actually leaving, rather than after, is a common, broadly accepted small social convention for managing someone else's expectations.",
    "surfaceMarkers": "A message saying \"omw!\" or \"just leaving now,\" sent while still getting ready rather than literally already travelling.",
    "whatItMeans": "This isn't read as genuine dishonesty — it's understood by most people as an approximate signal that departure is imminent, not a literal timestamp.",
    "example": "A client took \"on my way\" completely literally and grew increasingly frustrated waiting, not realizing this phrase often has a commonly understood buffer of several minutes.",
    "goodResponse": "If precise timing matters, ask a specific follow-up: \"How many minutes away are you actually?\" rather than relying on the phrase alone.",
    "status": "Approved"
  },
  {
    "normId": "SO-11-dinner-party-gift-bringing-norm",
    "category": "Social",
    "definition": "When invited to someone's home for dinner, bringing a small gift (commonly wine, flowers, or chocolates) is a widely expected norm, even though hosts rarely state this explicitly when inviting.",
    "surfaceMarkers": "An invitation phrased simply as \"come round for dinner on Friday,\" with no mention of bringing anything, alongside most other guests arriving with a bottle of wine.",
    "whatItMeans": "The expectation is assumed as common knowledge rather than stated, so its absence from the invitation doesn't mean it isn't expected.",
    "example": "A client arrived empty-handed to a dinner invitation that hadn't mentioned bringing anything, and noticed every other guest had brought wine or a small gift.",
    "goodResponse": "As a general default, bring a small item (wine, a dessert, flowers) to any home dinner invitation unless the host has explicitly said not to.",
    "status": "Approved"
  },
  {
    "normId": "SO-12-i-wont-keep-you-closing-signal",
    "category": "Social",
    "definition": "\"I won't keep you\" said during a conversation is typically a polite signal that the speaker is ready to end the exchange, regardless of whether the other person actually has somewhere to be.",
    "surfaceMarkers": "\"Anyway, I won't keep you,\" \"I'll let you get on,\" said by the speaker themselves, often before the other person has indicated they need to leave.",
    "whatItMeans": "This phrase is usually about the speaker wanting to wrap up, framed politely as concern for the other person's time.",
    "example": "A client kept trying to extend a conversation after hearing \"I won't keep you,\" assuming it was a genuine question about their availability rather than a closing cue.",
    "goodResponse": "Treat this phrase as a cue to wrap up the conversation naturally: \"No worries, great to catch up — speak soon!\"",
    "status": "Approved"
  },
  {
    "normId": "SO-13-deadpan-irony-unflagged",
    "category": "Social",
    "definition": "British humor frequently uses deadpan delivery, where an ironic or sarcastic comment is said in exactly the same flat tone as a sincere statement, without an obvious verbal cue that it's a joke.",
    "surfaceMarkers": "A sarcastic remark delivered without a smile, exaggerated tone, or explicit \"just kidding,\" relying on context and content alone to signal irony.",
    "whatItMeans": "The lack of an obvious tonal cue is intentional to the humor style, not a sign the person actually meant the statement literally.",
    "example": "A client took a colleague's deadpan sarcastic comment about a chaotic project completely literally and responded with genuine concern, which confused the colleague, who had been joking.",
    "goodResponse": "When a statement seems oddly extreme or contradicts the obvious facts, consider it might be dry humor, and a light \"ha, fair enough\" response works safely either way.",
    "status": "Approved"
  },
  {
    "normId": "SO-14-whatsapp-seen-no-reply-norm",
    "category": "Social",
    "definition": "Leaving a WhatsApp or text message on \"seen\" for a while before replying, or not replying immediately, is broadly normal and not typically read as a deliberate snub.",
    "surfaceMarkers": "A message marked \"read\" with no reply for several hours or into the next day, especially for non-urgent messages.",
    "whatItMeans": "This usually reflects normal busy-life delay rather than the recipient deciding to ignore or avoid the sender.",
    "example": "A client felt anxious and repeatedly checked whether a friend had \"seen\" their message without replying for a day, assuming something was wrong, when the friend was simply busy.",
    "goodResponse": "Give a reasonable window (a day or two, depending on the relationship) before following up, and keep any follow-up light: \"No worries if you're busy, just checking you got this!\"",
    "status": "Approved"
  },
  {
    "normId": "SO-15-compliment-deflection-response",
    "category": "Social",
    "definition": "A direct compliment is commonly deflected with self-deprecating humor or a minimizing comment, rather than a simple \"thank you.\"",
    "surfaceMarkers": "\"Oh, this old thing?\" or \"it was nothing, really,\" said in response to a compliment about an outfit, achievement, or effort.",
    "whatItMeans": "This deflection is a social politeness habit rather than a genuine denial that the compliment is deserved or accurate.",
    "example": "A client gave a sincere compliment on a colleague's presentation and was met with \"oh it was nothing,\" and wasn't sure whether to take that as genuine modesty or disagreement.",
    "goodResponse": "A brief, warm restatement usually lands well after a deflection: \"Well, I thought it was great\" — no need to press further or take the deflection literally.",
    "status": "Approved"
  },
  {
    "normId": "SO-16-stay-in-touch-closing-ritual",
    "category": "Social",
    "definition": "\"Let's stay in touch\" said when parting ways (after a trip, a job, moving away) is often a closing ritual expressing genuine warmth, without a specific plan or strong expectation of regular future contact.",
    "surfaceMarkers": "\"We should definitely stay in touch,\" exchanged at the end of a shared experience, often without exchanging a concrete next step.",
    "whatItMeans": "The sentiment is usually sincere in the moment but doesn't carry the same weight as an active commitment to maintain regular contact going forward.",
    "example": "A client exchanged \"let's stay in touch\" with several people at the end of a course and felt hurt when most contact naturally faded, taking it as a broken promise rather than a normal parting ritual.",
    "goodResponse": "If a specific relationship matters, propose something concrete before parting: \"Let's grab a coffee once a month\" rather than relying on the general sentiment alone.",
    "status": "Approved"
  },
  {
    "normId": "SO-17-tea-offering-hospitality-ritual",
    "category": "Social",
    "definition": "Offering tea or coffee to a visitor, almost immediately upon arrival, is a near-automatic hospitality ritual, offered as a matter of course rather than based on judging whether the guest seems thirsty.",
    "surfaceMarkers": "\"Cup of tea?\" asked within moments of someone entering a home or office, often before any other conversation.",
    "whatItMeans": "This is a scripted hospitality gesture and a way of making a guest feel welcome, more than a genuine read of the guest's actual thirst.",
    "example": "A client politely declined a tea offer at the start of a home visit assuming it was a minor, optional gesture, and later realized the host had felt slightly awkward not having anything to offer.",
    "goodResponse": "Accepting the offer, even a small \"just a glass of water, thanks,\" is usually the smoother social move than declining outright.",
    "status": "Approved"
  },
  {
    "normId": "AB-6-dvla-postal-address-update-delay",
    "category": "Admin & bureaucracy",
    "definition": "Updating a driving licence address with the DVLA by post can take several weeks, which is standard processing time rather than a sign of a lost or stuck application.",
    "surfaceMarkers": "No tracking or confirmation email after posting a change-of-address form, with the only confirmation being the new physical licence arriving eventually.",
    "whatItMeans": "The absence of interim updates reflects the DVLA's standard postal process, not that the specific application has been delayed or lost.",
    "example": "A client heard nothing for five weeks after posting a DVLA address change and assumed it had gone missing, before the updated licence simply arrived without any prior notice.",
    "goodResponse": "Use the DVLA's online status checker if concerned, and allow the stated processing window in full before assuming an issue and calling to check.",
    "status": "Approved"
  },
  {
    "normId": "AB-7-ni-number-application-wait",
    "category": "Admin & bureaucracy",
    "definition": "Applying for a National Insurance number can take several weeks to be processed and issued, which is standard, not a sign of an issue with the application.",
    "surfaceMarkers": "No interim confirmation after the application interview or submission, with only the final letter arriving as the first real update.",
    "whatItMeans": "The waiting period is standard system processing time, not the applicant's case being deprioritized — as of 2026 the standard window is around 4-8 weeks with DWP's digital-first process, though it can still run longer if an identity-verification interview is needed.",
    "example": "A client waited over a month with no updates after their National Insurance number interview and worried something had gone wrong, when the timeframe was entirely typical.",
    "goodResponse": "Note the reference number given at application and only chase up if the wait significantly exceeds the stated standard timeframe, which is usually a matter of weeks.",
    "status": "Approved"
  },
  {
    "normId": "AB-8-please-allow-28-days-boilerplate",
    "category": "Admin & bureaucracy",
    "definition": "Government and official forms commonly state a standard maximum processing time (often \"please allow 28 days\" or similar), which is a stated ceiling, not necessarily a prediction of the typical actual wait.",
    "surfaceMarkers": "\"Please allow up to 28 days for a response,\" printed as standard boilerplate on many official UK forms, regardless of the specific request.",
    "whatItMeans": "Actual processing is often faster than the stated maximum, since the figure is a safety margin covering worst-case delays, not an average expectation.",
    "example": "A client assumed a form stating \"allow 28 days\" meant it would definitely take close to a month, and was surprised when a response came back within a week.",
    "goodResponse": "Treat the stated window as an upper limit rather than an expected wait, and only follow up once that full window has genuinely passed.",
    "status": "Approved"
  },
  {
    "normId": "AB-9-energy-switch-retention-script",
    "category": "Admin & bureaucracy",
    "definition": "When a customer tries to switch energy suppliers, the current provider's retention call follows a fairly standard script offering a better deal to stay, rather than a personalized negotiation.",
    "surfaceMarkers": "\"Before you go, can I offer you our best available rate?\" said routinely as part of a scripted cancellation process, regardless of the specific customer's situation.",
    "whatItMeans": "This is a standard sales retention step applied broadly, not a special effort made only because this particular customer is especially valued.",
    "example": "A client felt suspicious of a suddenly better rate offered right as they tried to leave a supplier, wondering why it hadn't been offered before, not realizing this is a routine retention tactic used on nearly every switching customer.",
    "goodResponse": "It's fine to compare the retention offer against the new supplier's deal on its own merits and simply decline if the new offer is still better.",
    "status": "Approved"
  },
  {
    "normId": "AB-10-tv-licence-enforcement-letter-tone",
    "category": "Admin & bureaucracy",
    "definition": "TV Licensing sends broadly worded enforcement letters (\"we have reason to believe you may be watching TV without a licence\") to large numbers of addresses as a standard, non-targeted mailing.",
    "surfaceMarkers": "Letters with phrases like \"our records show no licence is held at this address,\" sent even to households that don't watch broadcast TV at all.",
    "whatItMeans": "These letters are sent widely and are not evidence of a specific investigation into that individual household's viewing habits.",
    "example": "A client who doesn't own a television received an intimidating-sounding TV Licensing letter and panicked, assuming they were specifically being investigated, when the letter was part of a routine broad mailing.",
    "goodResponse": "If no licence is genuinely needed, it's sufficient to complete the standard \"no licence needed\" declaration on their website rather than worrying further.",
    "status": "Approved"
  },
  {
    "normId": "AB-11-universal-credit-journal-formality",
    "category": "Admin & bureaucracy",
    "definition": "Communication through the Universal Credit online journal uses formal, standardized administrative language, even for routine or minor updates.",
    "surfaceMarkers": "Journal messages phrased in fixed, official wording (\"you are required to provide evidence of...\") for both minor requests and more significant ones.",
    "whatItMeans": "The formal tone is the system's standard communication style across the board, not an indication of how serious a particular message is relative to others.",
    "example": "A client received a formally worded journal message about a routine document request and assumed something serious was wrong with their claim, when it was a standard, low-stakes step.",
    "goodResponse": "Read the specific action requested rather than the tone, and respond to exactly what's asked for within the stated deadline.",
    "status": "Approved"
  },
  {
    "normId": "AB-12-school-waiting-list-ack-letter",
    "category": "Admin & bureaucracy",
    "definition": "A school or nursery sending a formal acknowledgment letter after a place application confirms receipt of the application only, not any commitment about the outcome or timing of a placement offer.",
    "surfaceMarkers": "\"Your application has been received and added to our records,\" stated formally, with no indication of position on a waiting list or likely timeframe.",
    "whatItMeans": "This letter is purely procedural confirmation, and its formal tone doesn't provide any signal about how likely or soon a place might be offered.",
    "example": "A client received a formal acknowledgment letter after applying for a nursery place and assumed a place was likely secured soon, when the letter only confirmed the application had been logged.",
    "goodResponse": "If timing matters, ask directly and separately: \"Roughly where would we be on the waiting list, and when might we hear about a place?\"",
    "status": "Approved"
  },
  {
    "normId": "AB-13-passport-check-and-send-service",
    "category": "Admin & bureaucracy",
    "definition": "An optional paid \"check and send\" service offered when renewing a passport (via the Post Office or similar) is a convenience add-on, not an indication the application would otherwise be rejected.",
    "surfaceMarkers": "\"We recommend our check and send service for an extra fee,\" offered alongside standard passport application submission.",
    "whatItMeans": "This service mainly speeds up processing and reduces the chance of simple errors — declining it doesn't mean the application is at higher risk of failing.",
    "example": "A client felt pressured into paying for the \"check and send\" service, worried their application would otherwise be rejected, when it's an optional convenience service rather than a requirement.",
    "goodResponse": "It's reasonable to decline the paid add-on and submit a standard application directly if the details have already been carefully checked.",
    "status": "Approved"
  },
  {
    "normId": "AB-14-ombudsman-escalation-language",
    "category": "Admin & bureaucracy",
    "definition": "Mentioning an ombudsman as a next step after an unresolved complaint is a standard, expected part of the UK formal complaints process, not an unusually aggressive or hostile move.",
    "surfaceMarkers": "\"If you're not satisfied, you can refer this to the [relevant] Ombudsman,\" stated as standard closing wording on a final complaint response letter.",
    "whatItMeans": "This phrase is often boilerplate required by regulation on every final response letter, regardless of how serious the specific complaint actually was.",
    "example": "A client hesitated to mention the ombudsman when following up on a complaint, worried it would seem overly aggressive, not realizing it's a standard step that companies mention themselves as routine.",
    "goodResponse": "Referring to the ombudsman step is a normal, non-confrontational part of the process — it's fine to say plainly: \"If this isn't resolved, I'll take it to the ombudsman next.\"",
    "status": "Approved"
  },
  {
    "normId": "AB-15-call-recording-disclosure-boilerplate",
    "category": "Admin & bureaucracy",
    "definition": "The standard opening line on customer service calls stating the call may be recorded \"for security and training purposes\" is fixed boilerplate read on every call, not a signal of special scrutiny.",
    "surfaceMarkers": "\"This call may be recorded for security and training purposes,\" stated automatically at the start of nearly every UK customer service call.",
    "whatItMeans": "This disclosure is a standard legal/regulatory requirement applied to all calls uniformly, not an indication that anything about this specific call is unusual.",
    "example": "A client felt unexpectedly nervous hearing the recording disclosure before a routine account query, assuming it signaled something serious, when it's said identically before every call.",
    "goodResponse": "Treat the disclosure as routine and proceed with the call normally — it has no bearing on how the specific query will be handled.",
    "status": "Approved"
  },
  {
    "normId": "AB-16-foi-request-standard-format",
    "category": "Admin & bureaucracy",
    "definition": "Public bodies respond to Freedom of Information (FOI) requests using a standardized formal reply format and legal references, regardless of how simple or complex the original request was.",
    "surfaceMarkers": "A response citing specific FOI Act sections and formal wording, even for a straightforward factual question.",
    "whatItMeans": "The legalistic format is a required standard template for all FOI responses, not an indication the request was treated as unusually complicated or contentious.",
    "example": "A client submitted a simple factual FOI request and was unsettled by the dense legal formatting of the reply, assuming their request had caused some difficulty, when the format is identical for every request.",
    "goodResponse": "Focus on the specific answer given within the formal wording, and follow up with a plain-language clarifying question if any part of the response is unclear.",
    "status": "Approved"
  },
  {
    "normId": "ED-1-seminar-participation-expectation",
    "category": "Education",
    "definition": "UK university seminars expect proactive verbal participation from every student; staying silent reads as under-preparation, not modesty or respect.",
    "surfaceMarkers": "A tutor asking open questions to the room and waiting through silence, or explicitly cold-calling students by name after no one volunteers.",
    "whatItMeans": "Consistent silence is interpreted as not having done the reading or not engaging with the material, not as a considerate or humble communication style.",
    "example": "A client stayed quiet in seminars out of politeness, expecting to be invited to speak, and was later told their participation grade was low despite having done all the reading.",
    "goodResponse": "Prepare one or two specific points or questions before each seminar and volunteer them early, since contributing even briefly is read very differently from staying silent.",
    "status": "Approved"
  },
  {
    "normId": "ED-2-dissertation-supervisor-email-formality",
    "category": "Education",
    "definition": "Dissertation or project supervisors often reply to emails briefly and quickly, sometimes just a line or two, due to a high volume of students, not because they're uninterested.",
    "surfaceMarkers": "A one- or two-sentence email reply with no greeting or sign-off, sometimes sent from a phone, in response to a detailed student question.",
    "whatItMeans": "Brevity reflects time pressure across many students, not a judgment on the importance of the question or the student's work.",
    "example": "A client sent a detailed question to their supervisor and received a two-line reply, and worried this meant the supervisor wasn't taking their project seriously.",
    "goodResponse": "Read brief replies at face value for their content, and if more detail is genuinely needed, ask a specific follow-up or request a short meeting rather than reading disinterest into the length.",
    "status": "Approved"
  },
  {
    "normId": "ED-3-extension-request-norm",
    "category": "Education",
    "definition": "Requesting a formal extension on coursework through the university's official process (usually an extenuating circumstances form) is the expected, normal route when genuinely needed, not a sign of weakness.",
    "surfaceMarkers": "A clearly signposted \"extenuating circumstances\" or \"mitigating circumstances\" form on the university portal, with a stated evidence requirement.",
    "whatItMeans": "Using the formal process is treated as routine administration, not as an admission of failure or something to be embarrassed about.",
    "example": "A client struggled to meet a deadline but pushed through without requesting an extension, embarrassed to ask, and submitted lower-quality work than if they had used the formal process available to them.",
    "goodResponse": "If genuinely needed, submit the formal extension request as early as possible with whatever evidence is required, rather than trying to manage alone.",
    "status": "Approved"
  },
  {
    "normId": "ED-4-plagiarism-citation-strictness",
    "category": "Education",
    "definition": "UK universities apply strict, often automated (e.g. Turnitin) citation and originality checks, and even unintentional close paraphrasing without proper citation can trigger a formal academic misconduct process.",
    "surfaceMarkers": "A percentage \"similarity score\" report attached to submitted work, or a formal letter inviting the student to an academic misconduct meeting.",
    "whatItMeans": "The system doesn't generally distinguish intent at the automated-detection stage — unintentional poor citation practice can still trigger the same formal process as deliberate copying.",
    "example": "A client paraphrased a source closely without realizing proper in-text citation was still required, and was called into a formal misconduct meeting despite not intending to cheat.",
    "goodResponse": "Learn the specific citation style required (e.g. Harvard, APA) early and cite even paraphrased ideas, not just direct quotes, to avoid triggering the automated similarity checks.",
    "status": "Approved"
  },
  {
    "normId": "ED-5-personal-tutor-checkin-brevity",
    "category": "Education",
    "definition": "Personal tutor or pastoral check-in meetings at university are often brief and checklist-style, covering standard wellbeing and progress questions quickly.",
    "surfaceMarkers": "A short, scheduled 15-20 minute meeting working through a few standard questions (\"how's the course going, any concerns?\") rather than an open-ended conversation.",
    "whatItMeans": "The brevity is a structural feature of how these meetings are run across many students, not a signal that the tutor isn't available to help with something specific.",
    "example": "A client had a genuine concern but didn't raise it in a brief personal tutor check-in, assuming the format meant it wasn't the right moment, and the concern went unaddressed for a term.",
    "goodResponse": "Raise a specific concern directly even in a brief check-in: \"There's actually something I wanted to flag\" — tutors expect this and it will extend the meeting if needed.",
    "status": "Approved"
  },
  {
    "normId": "ED-6-parents-evening-five-minute-slots",
    "category": "Education",
    "definition": "School parents' evenings are typically run as a sequence of very short, fixed time slots (often five to ten minutes) per subject teacher, not an open-ended conversation.",
    "surfaceMarkers": "A booking system assigning specific time slots per teacher, with a queue of other parents waiting immediately after the allotted time.",
    "whatItMeans": "The brevity is a scheduling necessity across many families in one evening, not a sign the teacher has little to say or little interest in the child.",
    "example": "A client felt a teacher was rushing them through a five-minute parents' evening slot and assumed the teacher didn't care, when every parent was given the identical short slot.",
    "goodResponse": "Prepare one or two specific questions in advance to make the most of the short slot, and request a longer separate meeting by email if more discussion is genuinely needed.",
    "status": "Approved"
  },
  {
    "normId": "ED-7-school-uniform-rule-strictness",
    "category": "Education",
    "definition": "UK schools often enforce uniform rules strictly and specifically (exact shoe type, skirt length, top button done up), even for details that seem minor.",
    "surfaceMarkers": "A specific written uniform policy document, and a teacher or staff member raising a minor infringement (e.g. wrong colour socks) directly with the student or in a letter home.",
    "whatItMeans": "Strict enforcement of small details reflects standard, uniformly applied school policy, not a specific concern being raised about that particular family or student.",
    "example": "A client's child was pulled up repeatedly for a minor uniform detail and the parent assumed the school was singling their child out, when the same rule was being enforced identically for every student.",
    "goodResponse": "Check the specific written uniform policy directly (usually on the school website) rather than relying on general assumptions, since UK schools tend to be precise about small details.",
    "status": "Approved"
  },
  {
    "normId": "ED-8-exam-results-day-protocol",
    "category": "Education",
    "definition": "UK exam results (GCSE, A-level, degree) are released on specific fixed dates with a formal process for accessing marks and, separately, for requesting a remark or appeal.",
    "surfaceMarkers": "Results appearing on a portal on a specific published date, alongside clearly signposted deadlines for a formal \"remark\" or \"appeal\" request if the result seems wrong.",
    "whatItMeans": "The formal, procedural tone of results communication is standard for everyone and doesn't itself indicate anything unusual about a specific result.",
    "example": "A client was surprised by the very formal, impersonal tone of their results notification and wondered if something had gone wrong with their specific case, when it was the same standard format sent to everyone.",
    "goodResponse": "If a result seems genuinely wrong, use the specific formal remark/appeal process and its stated deadline, rather than contacting individual teachers informally.",
    "status": "Approved"
  },
  {
    "normId": "ED-9-teacher-email-signoff-formality",
    "category": "Education",
    "definition": "Teacher and lecturer emails are often brief and businesslike, sometimes closing with just initials or a first name and no elaborate sign-off, reflecting a high volume of routine correspondence.",
    "surfaceMarkers": "A short email answering exactly the question asked, closing with just \"Thanks, [initial]\" rather than a warmer or more elaborate closing.",
    "whatItMeans": "This brevity is a professional norm for managing a high email volume, not an indication of a curt or unfriendly attitude toward the specific student.",
    "example": "A client received a very short, businesslike reply to an email and worried they'd upset the teacher, when the same brief style was used in every email that teacher sent.",
    "goodResponse": "Match the brevity in follow-up emails rather than reading tone into short professional replies, and pick up the phone or ask in person if something more nuanced needs discussing.",
    "status": "Approved"
  },
  {
    "normId": "ED-10-school-trip-permission-form-strictness",
    "category": "Education",
    "definition": "School trip permission forms require detailed, specific information (medical details, emergency contacts, exact consent wording) and are enforced strictly, with a child unable to attend without a fully completed form.",
    "surfaceMarkers": "A multi-page consent form with specific deadline dates, sent home with the expectation of being returned exactly as required, with no informal verbal consent accepted as a substitute.",
    "whatItMeans": "The strictness reflects liability and safeguarding requirements applied uniformly to every pupil, not extra scrutiny of a specific family.",
    "example": "A client gave verbal confirmation to a teacher that their child could attend a trip, assuming this was sufficient, and the child was excluded from the trip because the written form hadn't been returned.",
    "goodResponse": "Always return the written form itself by the stated deadline, even if verbal confirmation has already been given directly to a teacher.",
    "status": "Approved"
  },
  {
    "normId": "ED-11-sen-support-request-process",
    "category": "Education",
    "definition": "Requesting additional learning support (for a suspected learning difficulty or special educational need) requires a formal assessment and application process, and isn't granted based on a parent's or student's description alone.",
    "surfaceMarkers": "A request for support being met with information about a formal assessment pathway (e.g. an educational psychologist referral) rather than immediate accommodations.",
    "whatItMeans": "Universities and schools generally expect and plan for this — a school's SENCo submits a request, the local authority must respond within 6 weeks and reach a decision within 16 weeks, and a formal Education, Health and Care Plan (EHCP) is only issued if the assessment supports it; note that England's SEND system is under active reform as of 2026, with a February 2026 white paper proposing EHCPs be reserved for the most complex needs going forward.",
    "example": "A client raised a concern about their child's reading difficulties and was directed to a lengthy formal assessment process, and felt brushed off, when this is the standard required route to access any additional support.",
    "goodResponse": "Start the formal assessment request as early as possible given it can take time, and ask directly what interim support, if any, is available while the assessment is pending.",
    "status": "Approved"
  },
  {
    "normId": "ED-12-headteacher-escalation-formality",
    "category": "Education",
    "definition": "Escalating an unresolved school concern to the headteacher or school office follows a specific formal written procedure (often a complaints policy document), rather than simply dropping by or calling.",
    "surfaceMarkers": "A school website listing a formal \"complaints procedure\" with defined stages (class teacher, then head of year, then headteacher, then governors), each requiring a written record.",
    "whatItMeans": "This structured escalation is the school's standard, expected process for any unresolved concern, not an indication that going further is confrontational or unusual.",
    "example": "A client tried to raise a concern directly with the headteacher without going through the earlier stages first, and was redirected back to follow the formal complaints procedure from the start.",
    "goodResponse": "Follow the published complaints procedure in order and in writing at each stage, since skipping stages typically means being redirected back to the start.",
    "status": "Approved"
  },
  {
    "normId": "ED-13-freshers-week-social-pressure",
    "category": "Education",
    "definition": "University freshers' week events are framed as something \"everyone\" attends, but declining any individual event is entirely normal and doesn't meaningfully affect how a student is seen socially afterward.",
    "surfaceMarkers": "Flatmates or course peers saying \"everyone's going\" about a specific freshers' event, without genuine social consequence for those who don't attend.",
    "whatItMeans": "The framing is enthusiastic marketing language for the events themselves, not an accurate description of real social obligation or expectation.",
    "example": "A client felt they had to attend every single freshers' week event out of fear of being left out socially, and found the intensity exhausting in the first week of a new city and language.",
    "goodResponse": "Pick a few events that genuinely appeal and skip the rest without concern — most students do the same, and social groups form over the following weeks, not solely in freshers' week.",
    "status": "Approved"
  },
  {
    "normId": "ED-14-group-project-unequal-contribution-norm",
    "category": "Education",
    "definition": "Raising unequal contribution within a group project directly with a tutor or module leader is an expected, legitimate step in UK universities, not seen as complaining or undermining group members.",
    "surfaceMarkers": "A module handbook explicitly mentioning a peer-assessment form or process for flagging unequal contribution, alongside guidance to raise concerns with the tutor if informal resolution fails.",
    "whatItMeans": "Universities generally expect and plan for this kind of issue to arise and be raised formally — it isn't treated as a personal or social failure to do so.",
    "example": "A client's group project had one member who did very little work, and the client stayed silent to avoid seeming difficult, resulting in a shared grade that didn't reflect their actual individual effort.",
    "goodResponse": "Raise unequal contribution with the tutor directly and factually, ideally with some documentation (meeting notes, message logs), well before the final deadline rather than after grading.",
    "status": "Approved"
  },
  {
    "normId": "ED-15-lecture-recording-policy-formality",
    "category": "Education",
    "definition": "Whether lectures are recorded and made available afterward varies by course and lecturer, governed by a specific stated policy rather than a universal expectation.",
    "surfaceMarkers": "A course handbook or module page explicitly stating the recording policy (\"lectures will/will not be recorded\"), sometimes differing lecturer to lecturer within the same course.",
    "whatItMeans": "The absence of a recording for a specific lecture reflects that lecturer's or module's stated policy, not an oversight or a decision made about a specific student's needs.",
    "example": "A client assumed all lectures would automatically be recorded and available to review, and missed content permanently when a specific lecturer's module turned out not to record sessions.",
    "goodResponse": "Check each module's specific recording policy at the start of term rather than assuming a university-wide standard, and take notes as a backup regardless.",
    "status": "Approved"
  },
  {
    "normId": "ED-16-feedback-on-essay-terse-comments",
    "category": "Education",
    "definition": "Written feedback on essays or assignments is often very brief (a few words like \"expand\" or \"good analysis\" in the margin), functioning as shorthand rather than a full explanation.",
    "surfaceMarkers": "Short handwritten or typed marginal comments and a brief overall summary, rather than an extended paragraph of feedback for each point.",
    "whatItMeans": "The brevity is a standard grading practice for managing a large volume of marking, not a sign the work wasn't read carefully or valued.",
    "example": "A client received only a few brief marginal comments on a long essay and assumed the marker hadn't engaged seriously with the work, when this level of brevity was standard across all submissions.",
    "goodResponse": "If a brief comment is unclear, follow up directly and specifically: \"Could you expand on what you meant by 'strengthen this section' in the third paragraph?\"",
    "status": "Approved"
  },
  {
    "normId": "ED-17-office-hours-drop-in-norm",
    "category": "Education",
    "definition": "A lecturer's stated \"office hours\" are a genuine, expected invitation for any student to drop in with questions, not reserved only for students who are struggling significantly.",
    "surfaceMarkers": "A specific weekly time slot listed on a course page or door as \"office hours,\" with no further explanation of who it's for.",
    "whatItMeans": "Office hours are intended for general use by any student, including simply to discuss an idea further or clarify a minor point, not just as a last resort for failing students.",
    "example": "A client avoided using their lecturer's office hours, assuming it would look like they were struggling badly, and missed an easy opportunity to clarify a point that would have taken five minutes.",
    "goodResponse": "Use office hours for even minor questions without hesitation — turning up with a small, specific question is completely normal and expected use of the time.",
    "status": "Approved"
  },
  {
    "normId": "DR-1-texting-pace-not-urgency",
    "category": "Dating & relationships",
    "definition": "A slower or more relaxed texting pace in the early stages of dating is common in the UK and doesn't reliably indicate a lack of interest.",
    "surfaceMarkers": "Replies arriving after several hours or the next day, with no urgency or apology attached, even when the interaction is going well overall.",
    "whatItMeans": "Response speed is not treated as a strong signal of interest the way it might be in some other dating cultures — busyness and a more relaxed pace are both genuinely normal.",
    "example": "A client assumed a slow reply meant declining interest and stopped responding themselves, when the other person was simply not in the habit of texting quickly.",
    "goodResponse": "Judge interest by the content and consistency of messages over time rather than reply speed alone, and it's fine to ask directly if genuinely unsure: \"Just checking we're both still keen on this!\"",
    "status": "Approved"
  },
  {
    "normId": "DR-2-lets-see-where-this-goes-ambiguity",
    "category": "Dating & relationships",
    "definition": "\"Let's see where this goes\" is a deliberately open, non-committal phrase used early in dating, reflecting genuine caution rather than active avoidance of the person.",
    "surfaceMarkers": "\"Let's just see where this goes\" or \"no pressure, let's take it slow,\" said in response to a question about where things stand.",
    "whatItMeans": "This phrase usually reflects a real preference for not over-defining things early on, rather than a hidden reluctance specifically about this person.",
    "example": "A client heard \"let's see where this goes\" and took it as a soft rejection, when the other person meant it literally as genuine openness without wanting to label things yet.",
    "goodResponse": "If clarity matters, ask a more specific question later on rather than reading a fixed meaning into the phrase itself: \"How are you feeling about where things are at the moment?\"",
    "status": "Approved"
  },
  {
    "normId": "DR-3-splitting-the-bill-default-norm",
    "category": "Dating & relationships",
    "definition": "Splitting the bill on a first date, regardless of gender, is a common default expectation in the UK, and offering to split isn't read as an insult or a sign of low interest.",
    "surfaceMarkers": "One person asking \"shall we just split this?\" or the bill being presented with an implicit expectation of splitting, without either person feeling they should insist on paying fully.",
    "whatItMeans": "Splitting reflects independence and practicality rather than stinginess or disinterest — insisting on paying fully is a personal choice, not the assumed norm.",
    "example": "A client offered to split the bill on a first date and worried afterward this might have seemed rude or ungenerous, when it's a widely accepted, unremarkable default in UK dating.",
    "goodResponse": "Splitting the bill, or letting the other person offer to split, is a safe, normal default; a genuine wish to pay fully can simply be stated directly: \"Let me get this one.\"",
    "status": "Approved"
  },
  {
    "normId": "DR-4-public-affection-reserve",
    "category": "Dating & relationships",
    "definition": "Limited public displays of affection between couples is a common cultural norm in the UK compared to some other cultures, reflecting general reserve rather than a lack of feeling.",
    "surfaceMarkers": "Couples holding hands or briefly kissing in public, but generally avoiding more prolonged or overt displays of affection in front of others.",
    "whatItMeans": "This reserve is a broad cultural pattern rather than a specific signal about the strength or genuineness of a particular relationship.",
    "example": "A client felt hurt that their British partner was reserved with public affection around friends and family, reading it as a lack of pride in the relationship, when it reflected a general cultural pattern rather than anything specific to how the partner felt.",
    "goodResponse": "If public affection matters personally, raise the specific preference directly and calmly rather than assuming its absence reflects something about the relationship itself.",
    "status": "Approved"
  },
  {
    "normId": "DR-5-meeting-parents-timing-expectation",
    "category": "Dating & relationships",
    "definition": "\"Meeting the parents\" is generally treated as a significant, later-stage relationship milestone in UK dating culture, often coming later than in some other cultures.",
    "surfaceMarkers": "A partner being noticeably hesitant or slow to suggest meeting their family, even well into an otherwise serious relationship.",
    "whatItMeans": "A delay in this specific step doesn't necessarily indicate a lack of seriousness about the relationship overall — it's often just treated as a bigger, separately-timed milestone.",
    "example": "A client felt their relationship wasn't being taken seriously because months had passed without meeting the partner's parents, when this timing was actually fairly typical for that stage of a relationship in this context.",
    "goodResponse": "If the timing feels important, it's reasonable to raise it directly and gently rather than assuming its absence reflects the seriousness of the relationship: \"I'd love to meet your family at some point when it feels right.\"",
    "status": "Approved"
  },
  {
    "normId": "DR-6-exclusivity-conversation-directness-expected",
    "category": "Dating & relationships",
    "definition": "UK dating culture generally expects couples to explicitly raise and agree on exclusivity, rather than assuming it automatically after a certain point or number of dates.",
    "surfaceMarkers": "Continued dating without an explicit conversation about seeing other people, with neither party assuming the other has stopped seeing others until it's actually discussed.",
    "whatItMeans": "Without an explicit conversation, exclusivity is not safely assumed by either person, regardless of how the relationship might feel emotionally.",
    "example": "A client assumed exclusivity after several dates going well and was upset to learn the other person was still seeing other people, since neither had actually raised or agreed to exclusivity directly.",
    "goodResponse": "Raise the exclusivity question directly once it feels relevant, rather than assuming: \"I'd like to talk about whether we're seeing other people or not.\"",
    "status": "Approved"
  },
  {
    "normId": "DR-7-ghosting-normalized-explanation",
    "category": "Dating & relationships",
    "definition": "Stopping contact without an explanation after a few dates (\"ghosting\") is unfortunately a fairly normalized, if disliked, pattern in modern UK dating, and often doesn't reflect anything specific about the other person.",
    "surfaceMarkers": "Messages going unanswered indefinitely after previously regular contact, with no explanation or closure given.",
    "whatItMeans": "While painful, this pattern is frequently more about the other person's avoidance of a difficult conversation than a specific, considered judgment about the recipient.",
    "example": "A client experienced being ghosted after several good dates and spent weeks assuming they had done something specifically wrong, when this pattern is a common, if frustrating, general dating behavior.",
    "goodResponse": "After a reasonable window with no response (roughly a week for an active connection), it's fine to treat it as a closed situation and move on, rather than continuing to seek an explanation.",
    "status": "Approved"
  },
  {
    "normId": "DR-8-breakup-softening-language",
    "category": "Dating & relationships",
    "definition": "Breakup phrases like \"it's not you, it's me\" or \"I just don't think I'm ready for a relationship right now\" are conventional softening language, not necessarily the literal or complete explanation.",
    "surfaceMarkers": "A vague, self-focused explanation given at the end of a relationship, with few specific details about what led to the decision.",
    "whatItMeans": "These phrases are a social convention for ending things with minimal conflict, and pressing for a more literal or complete explanation usually isn't productive.",
    "example": "A client kept trying to get a more specific, literal explanation after hearing \"it's not you, it's me,\" which extended a difficult conversation the other person was trying to close gently.",
    "goodResponse": "It's usually more constructive to accept a softened explanation and ask only genuinely practical questions (logistics, mutual friends) rather than pushing for a fuller emotional account.",
    "status": "Approved"
  },
  {
    "normId": "DR-9-moving-in-together-pace-expectation",
    "category": "Dating & relationships",
    "definition": "UK couples often wait longer before moving in together compared to some other cultures, a pace driven partly by high housing costs and existing living arrangements as much as relationship readiness.",
    "surfaceMarkers": "A couple in a serious, established relationship still maintaining separate homes for a significant period, without this being read as a lack of commitment.",
    "whatItMeans": "The timing of this specific step is heavily shaped by practical UK housing factors (cost, existing leases, flatshares), not solely a direct measure of how committed the relationship is.",
    "example": "A client felt their relationship must not be serious because they hadn't moved in together after a year, not realizing this pace is fairly typical given UK housing costs and rental commitments.",
    "goodResponse": "Treat the moving-in timeline as a separate, practical decision from the emotional seriousness of the relationship, and discuss housing logistics directly when both people feel ready.",
    "status": "Approved"
  },
  {
    "normId": "DR-10-dating-app-messaging-norm",
    "category": "Dating & relationships",
    "definition": "Brief, relatively low-effort opening messages on UK dating apps are standard practice, and don't reliably indicate a lack of genuine interest.",
    "surfaceMarkers": "A short opening message referencing something specific from a profile (\"loved the photo from Cornwall\"), rather than a long, detailed introduction.",
    "whatItMeans": "Message length and effort on a first contact are not strongly correlated with how genuinely interested someone actually is once a conversation develops.",
    "example": "A client felt discouraged by short opening messages on dating apps, assuming this meant low genuine interest, when brief opening messages are simply the norm regardless of how the conversation later develops.",
    "goodResponse": "Respond based on how the conversation actually develops rather than judging by the length or effort of the very first message.",
    "status": "Approved"
  },
  {
    "normId": "DR-11-declining-a-second-date-vague-language",
    "category": "Dating & relationships",
    "definition": "A vague, warm-sounding phrase like \"had a lovely time, let's stay in touch\" after a date is commonly used as a polite way of declining a second date, similar to a general social decline.",
    "surfaceMarkers": "\"Really enjoyed meeting you, let's stay in touch!\" sent after a date with no specific follow-up plan proposed by either side.",
    "whatItMeans": "Without a specific next date proposed, this phrase usually functions as a gentle decline rather than a genuine open-ended invitation to arrange something later.",
    "example": "A client received \"had a lovely time, let's stay in touch\" after a date and waited for the other person to suggest a second date, not realizing this was likely intended as a polite decline.",
    "goodResponse": "If genuinely interested in a second date, propose something specific rather than waiting: \"I'd love to see you again — are you free next week sometime?\"",
    "status": "Approved"
  },
  {
    "normId": "DR-12-house-party-flirting-norm",
    "category": "Dating & relationships",
    "definition": "Flirting at UK social gatherings (house parties, pub nights) often relies on subtle, indirect cues — sustained eye contact, teasing banter, proximity — rather than an overt, direct approach.",
    "surfaceMarkers": "Prolonged conversation, gentle teasing, or a person repeatedly ending up near the same group, without an explicit statement of romantic interest.",
    "whatItMeans": "The absence of an explicit, direct statement of interest doesn't mean interest isn't present — it's often being signaled through sustained attention and banter instead.",
    "example": "A client didn't realize someone was flirting with them at a party because no explicit statement of interest was made, and the moment passed without either person acting on it.",
    "goodResponse": "Notice sustained attention and playful teasing as potential interest signals in themselves, and it's fine to test the waters with a direct, low-pressure question if unsure: \"Should we swap numbers?\"",
    "status": "Approved"
  },
  {
    "normId": "DR-13-anniversary-milestone-low-key-marking",
    "category": "Dating & relationships",
    "definition": "Relationship anniversaries and similar milestones are often marked relatively modestly in UK couple culture compared to the larger celebrations common in some other cultures.",
    "surfaceMarkers": "A quiet dinner out or a small card exchanged for an anniversary, rather than an elaborate planned event or public celebration.",
    "whatItMeans": "A low-key marking of the occasion doesn't reflect low regard for the relationship or the milestone — it's simply a more understated general cultural approach to these occasions.",
    "example": "A client felt disappointed by a partner's modest anniversary plans, reading it as a lack of care, when the partner's approach reflected a broader cultural pattern of understated celebration rather than anything specific about how they felt.",
    "goodResponse": "If a bigger celebration matters personally, it's more effective to state that preference directly in advance rather than assuming the other person will infer it from the occasion alone.",
    "status": "Approved"
  },
  {
    "normId": "DR-14-partners-friends-approval-indirectness",
    "category": "Dating & relationships",
    "definition": "Friends' approval or disapproval of a new partner is often communicated indirectly, through subtle changes in warmth or inclusion, rather than a direct statement either way.",
    "surfaceMarkers": "Friends being politely welcoming but slightly less warm or inclusive toward a new partner, without any explicit negative comment being made.",
    "whatItMeans": "The absence of an openly negative comment doesn't necessarily mean full approval — a noticeable but unstated coolness can be a real, if indirect, signal.",
    "example": "A client assumed their friends liked their new partner because no one said anything negative, and was surprised later to learn some friends had real reservations they had never voiced directly.",
    "goodResponse": "If reading the group's reaction genuinely matters, ask a trusted close friend directly and privately for their honest impression, rather than relying on the group's general politeness as a signal.",
    "status": "Approved"
  },
  {
    "normId": "DR-15-long-distance-relationship-texting-expectation-mismatch",
    "category": "Dating & relationships",
    "definition": "Expectations around daily check-in frequency in long-distance relationships can differ by culture; some UK partners find frequent, constant texting overwhelming rather than reassuring.",
    "surfaceMarkers": "A UK partner responding less frequently than expected to daily check-in messages, or expressing that constant contact feels like \"a lot.\"",
    "whatItMeans": "Lower contact frequency in this context often reflects a different, culturally shaped preference around communication style, not reduced care or commitment to the relationship.",
    "example": "A client in a long-distance relationship felt anxious and under-prioritized when their UK partner didn't want to text throughout the day, not realizing this reflected a differing general communication preference rather than declining interest.",
    "goodResponse": "Discuss and agree on a specific, mutually comfortable contact frequency directly rather than assuming a shared default, since expectations here can genuinely differ between people and cultures.",
    "status": "Approved"
  },
  {
    "normId": "DR-16-meeting-the-family-formal-occasion",
    "category": "Dating & relationships",
    "definition": "A Sunday lunch or dinner at a family home is a common, semi-formal setting specifically used for introducing a new partner to family in the UK.",
    "surfaceMarkers": "An invitation phrased as \"come for Sunday lunch and meet everyone,\" carrying more social weight than a casual weekday visit would.",
    "whatItMeans": "This specific setting is often chosen deliberately as the occasion for this milestone, rather than being simply the next convenient time to visit.",
    "example": "A client didn't realize a casual-sounding \"Sunday lunch\" invitation was actually a significant, deliberately chosen occasion for meeting the family, and turned up underprepared for how significant the moment was.",
    "goodResponse": "Treat a Sunday lunch family invitation as a meaningful occasion worth preparing for (a small gift, appropriate dress), even if the invitation itself sounds casual.",
    "status": "Approved"
  },
  {
    "normId": "DR-17-relationship-label-avoidance-early-stage",
    "category": "Dating & relationships",
    "definition": "Avoiding the label \"boyfriend\" or \"girlfriend\" in the early stages of dating is a common, normal caution in UK dating culture, and doesn't necessarily reflect reluctance about the specific person.",
    "surfaceMarkers": "Referring to someone as \"the person I've been seeing\" or by name only, rather than using a relationship label, even after several dates.",
    "whatItMeans": "This caution is often about the label itself and its implied commitment, rather than a specific hesitation about that particular person.",
    "example": "A client felt hurt at not being introduced with a relationship label after a few weeks of dating, assuming it reflected doubt about them specifically, when the other person was simply cautious about labels generally at that early stage.",
    "goodResponse": "If the label matters, it's fine to raise it directly once enough time has passed: \"How would you describe what we are at this point?\" rather than assuming a fixed meaning from its absence.",
    "status": "Approved"
  },
  {
    "normId": "MN-1-tipping-optional-modest-norm",
    "category": "Money & transactions",
    "definition": "UK tipping norms are more modest and optional than in some countries, and vary sharply by venue — surveys put the average restaurant tip around 9% of the bill, with roughly 88% tipping waiters but only around 29% tipping bar staff and 19% tipping rideshare drivers.",
    "surfaceMarkers": "No prompt or pressure to tip at most counters, and restaurant tips often left as a discretionary addition rather than a stated firm expectation.",
    "whatItMeans": "Not tipping in many everyday settings (cafes, takeaways, taxis) is genuinely normal and not read as rude, unlike in some tipping-heavy cultures.",
    "example": "A client felt anxious about under-tipping at a casual UK cafe, not realizing tipping isn't generally expected there at all.",
    "goodResponse": "Tip around 10-12.5% at sit-down restaurants if service isn't already included, and don't feel obligated to tip at counters, cafes, or most takeaways.",
    "status": "Approved"
  },
  {
    "normId": "MN-2-service-charge-auto-added-notice",
    "category": "Money & transactions",
    "definition": "Many UK restaurants automatically add a \"discretionary\" service charge (commonly around 12.5%) to the bill, which can technically be asked to be removed if service was genuinely unsatisfactory.",
    "surfaceMarkers": "A line item on the bill labeled \"service charge\" or \"discretionary service charge\" added automatically, sometimes only for larger groups.",
    "whatItMeans": "Since the Employment (Allocation of Tips) Act 2023 came into force on 1 October 2024, staff are legally entitled to 100% of tips and service charges with no employer deductions — so despite being labelled \"discretionary,\" the charge is now guaranteed by law to reach staff, which most diners still don't know.",
    "example": "A client was surprised to see a service charge already added to their bill and assumed it was mandatory and non-negotiable, not realizing it's technically discretionary.",
    "goodResponse": "It's fine to simply pay the standard service charge in most cases; if service was genuinely poor, it's acceptable to politely ask for it to be removed or reduced.",
    "status": "Approved"
  },
  {
    "normId": "MN-3-splitting-bill-evenly-default",
    "category": "Money & transactions",
    "definition": "Splitting a group restaurant bill evenly among everyone present, regardless of what each person individually ordered, is a common casual default in the UK.",
    "surfaceMarkers": "\"Shall we just split it evenly?\" suggested by someone at the table at the end of a casual group meal, without itemizing who had what.",
    "whatItMeans": "This default reflects convenience and a general social ease around small imbalances, rather than an expectation that everyone calculate their exact share.",
    "example": "A client felt uncomfortable with an even split after ordering less than others, unsure whether raising it would seem petty, and stayed quiet despite feeling it was unfair.",
    "goodResponse": "It's entirely acceptable to say plainly and lightly: \"I only had a starter, would you mind if I paid a bit less?\" — this is a normal, unremarkable thing to raise.",
    "status": "Approved"
  },
  {
    "normId": "MN-4-salary-discussion-taboo",
    "category": "Money & transactions",
    "definition": "Directly discussing one's own salary or asking someone else theirs is a notable social taboo in the UK, treated as a private matter even among close colleagues or friends.",
    "surfaceMarkers": "A vague or deflecting answer (\"I do alright,\" \"can't complain\") given in response to a direct question about salary or income.",
    "whatItMeans": "This reticence is a strong general cultural norm rather than evasiveness aimed at the specific person asking — a UK survey (Indeed, 7,000+ workers) found 87% of employees uncomfortable asking a colleague their salary and 84% unwilling to share their own, with only 16% comfortable discussing pay with colleagues at all.",
    "example": "A client asked a new UK colleague directly what they earned, intending it as friendly curiosity, and the question landed as a noticeable social misstep.",
    "goodResponse": "Avoid asking directly about someone's salary; if the topic is genuinely relevant (e.g. negotiating a role), frame it around a range or market rate rather than a personal question.",
    "status": "Approved"
  },
  {
    "normId": "MN-5-borrowing-money-awkwardness-indirect-language",
    "category": "Money & transactions",
    "definition": "Asking to borrow money from a friend is approached with noticeable hesitation and heavily hedged language in UK social culture, reflecting genuine discomfort with the topic rather than reluctance about the friendship.",
    "surfaceMarkers": "\"This is really awkward to ask, but...\" or \"I feel bad even asking this\" used as a preface before a request to borrow money, even a small amount.",
    "whatItMeans": "The hedging reflects a real, broadly shared discomfort around money between friends, not a sign that the specific request is unusually large or inappropriate.",
    "example": "A client was asked to lend a friend money with heavy, awkward hedging and assumed something was seriously wrong, when the amount was actually modest and the awkwardness was just the normal way this topic is raised.",
    "goodResponse": "Respond to the practical request itself rather than reading deep concern into the awkward framing, and it's fine to agree or decline plainly either way.",
    "status": "Approved"
  },
  {
    "normId": "MN-6-whos-paying-ambiguity-group-meal",
    "category": "Money & transactions",
    "definition": "At a casual group meal, there's often a brief, slightly ambiguous moment over who will pay or initiate splitting, resolved through small social cues (reaching for a wallet, glancing around) rather than a stated plan.",
    "surfaceMarkers": "Someone reaching for the bill or a card slightly first, or an exchange of glances around the table when the bill arrives, without anyone stating a plan aloud.",
    "whatItMeans": "This ambiguity is a normal, low-stakes social moment rather than a genuine standoff — someone usually resolves it quickly with a suggestion to split or a offer to get it this time.",
    "example": "A client felt anxious during the brief ambiguous pause when a group bill arrived, unsure whether to offer to pay or wait, not realizing this brief hesitation is completely normal and usually resolves itself within seconds.",
    "goodResponse": "If the pause feels uncomfortable, it's fine to simply suggest resolving it directly: \"Shall we just split it?\" — taking the initiative to name it is well received.",
    "status": "Approved"
  },
  {
    "normId": "MN-7-buy-now-pay-later-framing",
    "category": "Money & transactions",
    "definition": "\"Buy now, pay later\" checkout options (like Klarna or Clearpay) are presented casually and neutrally at UK online checkouts as a standard payment choice, not specifically flagged as a sign of financial difficulty.",
    "surfaceMarkers": "A payment option button alongside standard card payment, offered to every customer regardless of order size or apparent financial situation.",
    "whatItMeans": "Choosing this option is a mainstream, widely used payment preference for many UK shoppers, not something that signals financial distress to the retailer or to others.",
    "example": "A client felt embarrassed using a buy-now-pay-later option at checkout, worried it implied financial struggle, when it's a widely used, unremarkable payment choice offered to virtually every customer.",
    "goodResponse": "Use the option freely if it suits budgeting preferences, while being aware it's still a form of credit with its own terms worth reading carefully.",
    "status": "Approved"
  },
  {
    "normId": "MN-8-direct-debit-default-payment-method",
    "category": "Money & transactions",
    "definition": "Many UK utility, subscription, and council services default to or strongly prefer direct debit as the payment method, often with a small discount for using it.",
    "surfaceMarkers": "A sign-up form or bill listing direct debit as the recommended default option, sometimes with a stated discount for choosing it over other payment methods.",
    "whatItMeans": "This preference reflects the provider's administrative convenience and reduced payment-failure risk, not a specific judgment about a customer's financial reliability.",
    "example": "A client felt uneasy being pushed toward direct debit for a new utility account, unsure if declining it would seem suspicious, when it's simply the standard preferred option offered to every customer.",
    "goodResponse": "Set up direct debit if comfortable with it, since it's usually the easiest and sometimes cheapest option, but it's also fine to ask about alternative payment methods if preferred.",
    "status": "Approved"
  },
  {
    "normId": "MN-9-fixed-price-no-haggling-norm",
    "category": "Money & transactions",
    "definition": "Prices in most UK shops, including many markets, are fixed and non-negotiable, in contrast to bargaining-common retail cultures elsewhere.",
    "surfaceMarkers": "A clearly marked price tag with no invitation to negotiate, and staff generally not expecting or responding to an attempt to haggle.",
    "whatItMeans": "Attempting to negotiate the price in a standard UK shop is unusual and can create an awkward interaction, rather than being read as normal, expected behavior.",
    "example": "A client tried to negotiate the price of an item in a UK shop as they would have done at home, and the staff member seemed confused and slightly uncomfortable with the attempt.",
    "goodResponse": "Treat marked prices as fixed in standard retail settings; genuine flexibility mainly exists at some markets, car dealerships, or when buying secondhand items directly from an individual.",
    "status": "Approved"
  },
  {
    "normId": "MN-10-treating-someone-no-expectation-of-repayment",
    "category": "Money & transactions",
    "definition": "When someone says \"I'll get this one\" to treat a friend to a meal or drink, it genuinely means no repayment is expected, rather than an informal debt to be tracked or reciprocated immediately.",
    "surfaceMarkers": "\"Don't worry about it, I've got this\" said while paying, without any explicit mention of paying it back or an expectation raised later.",
    "whatItMeans": "This is intended as a straightforward, closed gesture rather than the start of an ongoing tally between friends that needs to be evened out.",
    "example": "A client kept insisting on repaying a friend who had said \"I've got this,\" which the friend found slightly awkward, as it wasn't meant to be tracked or repaid.",
    "goodResponse": "Accept the gesture graciously with a simple thank you, and reciprocate naturally another time rather than insisting on immediate repayment.",
    "status": "Approved"
  },
  {
    "normId": "MN-11-charity-doorstep-direct-debit-solicitation",
    "category": "Money & transactions",
    "definition": "Charity fundraisers approaching people on the street or door-to-door to sign up for a regular monthly direct debit donation is a common, normalized fundraising method in the UK.",
    "surfaceMarkers": "A fundraiser (often wearing branded clothing) asking for \"just two minutes\" to discuss a regular monthly donation, using a tablet to sign people up on the spot.",
    "whatItMeans": "This is a standard, widely used charity fundraising approach rather than a sign of a specific, unusually aggressive or targeted ask.",
    "example": "A client felt cornered and unsure how to say no to a street charity fundraiser, not realizing a brief, direct decline is completely normal and expected in this situation.",
    "goodResponse": "A brief, polite \"not today, thanks\" while continuing to walk is a completely normal and sufficient response to a street fundraiser.",
    "status": "Approved"
  },
  {
    "normId": "MN-12-arranged-vs-unarranged-overdraft-terminology",
    "category": "Money & transactions",
    "definition": "UK banks distinguish clearly between an \"arranged\" overdraft (pre-agreed with the bank) and an \"unarranged\" one (going over without prior agreement, or beyond an agreed limit) — though since the FCA banned banks from charging higher fees for unarranged overdrafts in April 2020, both are now priced at the same simple annual interest rate (commonly around 35-40%), so the real difference is agreement and control, not cost.",
    "surfaceMarkers": "A bank letter or app notification specifically using the terms \"arranged\" or \"unarranged\" overdraft, often with a warning about different charges for each.",
    "whatItMeans": "This is precise, standard banking terminology rather than a personal warning about financial behaviour — since April 2020, an unarranged overdraft no longer costs noticeably more than an arranged one (both use the same rate), so the real risk is simply not knowing a limit was agreed, or exceeding it, rather than a punitive fee difference.",
    "example": "A client saw the word \"unarranged\" in a bank notification and worried it implied wrongdoing, when it's simply the bank's standard term for an overdraft that wasn't set up in advance.",
    "goodResponse": "Ask the bank directly to set up an arranged overdraft limit in advance if overdraft use is likely, since this generally comes with lower fees than going into an unarranged one unexpectedly.",
    "status": "Approved"
  },
  {
    "normId": "MN-13-self-checkout-default-expectation",
    "category": "Money & transactions",
    "definition": "Self-checkout machines are increasingly the default, and sometimes only, option in many UK supermarkets, offered upfront rather than staffed tills.",
    "surfaceMarkers": "A row of self-checkout machines actively directed toward by staff, with only a small number of staffed tills remaining open, especially for smaller baskets.",
    "whatItMeans": "Being directed to self-checkout reflects standard store staffing and layout policy, not a judgment about the customer or their purchase.",
    "example": "A client felt slightly dismissed being directed to a self-checkout machine rather than a staffed till, when this is simply the store's standard default for most transactions.",
    "goodResponse": "Use self-checkout for straightforward purchases, and it's completely fine to ask a staff member directly for a staffed till if preferred, especially for a large or complicated shop.",
    "status": "Approved"
  },
  {
    "normId": "MN-14-student-loan-automatic-deduction-payslip",
    "category": "Money & transactions",
    "definition": "UK student loan repayments are automatically deducted directly from a graduate's payslip once earnings exceed a set threshold, with relatively little proactive explanation sent beforehand.",
    "surfaceMarkers": "A new deduction line appearing on a payslip labeled \"student loan\" once salary crosses the repayment threshold, calculated automatically by the employer's payroll system.",
    "whatItMeans": "This is an automatic, income-linked system working exactly as designed — for 2026/27 the repayment threshold is £25,000 for Plan 5 (most students who started English courses from Aug 2023 onward), rising to £29,385 for Plan 2 and £33,795 for Plan 4 (Scotland), all at 9% of income above the threshold.",
    "example": "A client was alarmed to see an unexplained new deduction appear on their payslip and worried it was a mistake, not realizing it was the standard, automatic start of student loan repayment once their income crossed the threshold.",
    "goodResponse": "Check current earnings against the current repayment threshold if a new deduction appears, and contact the Student Loans Company directly for specifics on the loan account rather than the employer.",
    "status": "Approved"
  },
  {
    "normId": "MN-15-contactless-tap-default-payment-norm",
    "category": "Money & transactions",
    "definition": "Contactless card or phone payment is the default expected method for most small UK purchases, with cash increasingly uncommon and sometimes even declined outright by some businesses.",
    "surfaceMarkers": "A card reader positioned for an immediate contactless tap with no prompt, and some smaller shops or cafes displaying a \"card only, no cash\" sign.",
    "whatItMeans": "A business declining cash reflects standard operational policy at that location, not a judgment about the specific customer offering it.",
    "example": "A client tried to pay with cash at a small cafe and was told it wasn't accepted, and felt embarrassed, not realizing card-only policies are increasingly common and unrelated to them personally.",
    "goodResponse": "Carry a contactless card or phone payment method as the reliable default, and check in advance if a specific venue is cash-only or card-only if it matters.",
    "status": "Approved"
  },
  {
    "normId": "MN-16-council-tax-direct-debit-discount-incentive",
    "category": "Money & transactions",
    "definition": "Local councils often offer a small discount or incentive for paying council tax by direct debit rather than other methods, framed as standard administrative efficiency rather than a special favor.",
    "surfaceMarkers": "A council tax bill or website mentioning a modest discount specifically for setting up a direct debit, alongside the standard payment amount.",
    "whatItMeans": "This incentive is offered uniformly to every resident as a way of reducing the council's own administrative costs, not a personalized offer.",
    "example": "A client wasn't sure why a direct debit discount was being offered and worried there was a catch, when it's simply a standard, uniformly available incentive to reduce administrative costs for the council.",
    "goodResponse": "Setting up direct debit for council tax is generally a safe, standard choice worth taking if the small discount is offered.",
    "status": "Approved"
  },
  {
    "normId": "TR-1-delay-repay-compensation-claim-norm",
    "category": "Transport & commuting",
    "definition": "UK train delays over a set threshold (often 15 or 30 minutes depending on operator) entitle passengers to compensation through a scheme usually called \"Delay Repay,\" but this must be actively claimed, not automatically issued.",
    "surfaceMarkers": "No automatic refund or compensation given after a delayed journey — a separate claim form (often online) must be completed by the passenger, usually with the ticket details.",
    "whatItMeans": "This is a deliberate, genuinely used compensation scheme (thresholds and payout tiers vary slightly by operator), but the system relies entirely on the passenger noticing and submitting a claim within 28 days of the journey — nothing is issued automatically for most tickets.",
    "example": "A client experienced a significantly delayed train journey and assumed nothing could be done about it, not realizing they were entitled to claim compensation through the operator's Delay Repay scheme.",
    "goodResponse": "After any delay of 15 minutes or more, check the specific train operator's Delay Repay claim process online and submit a claim with the ticket and journey details.",
    "status": "Approved"
  },
  {
    "normId": "TR-2-quiet-coach-etiquette",
    "category": "Transport & commuting",
    "definition": "Many UK trains designate a specific \"quiet coach\" where phone calls and loud conversation are firmly discouraged, enforced socially by fellow passengers as much as by staff.",
    "surfaceMarkers": "Signage marking a \"quiet coach,\" and passengers giving pointed looks or occasionally speaking up directly if someone takes a call or plays music without headphones there.",
    "whatItMeans": "The social enforcement in this specific carriage is taken seriously even without staff present, reflecting a genuinely strong shared expectation, not just a suggestion.",
    "example": "A client took a phone call in what turned out to be the quiet coach and was surprised by the visible disapproval from several other passengers before realizing their mistake.",
    "goodResponse": "Check for quiet coach signage when boarding, and move to a vestibule or another carriage for any call, even a short one, if seated in a quiet coach.",
    "status": "Approved"
  },
  {
    "normId": "TR-3-give-up-seat-norm",
    "category": "Transport & commuting",
    "definition": "Offering a seat to an elderly, pregnant, or visibly disabled passenger on public transport is a strongly expected norm; not offering when clearly appropriate can draw visible social disapproval.",
    "surfaceMarkers": "\"Baby on board\" badges worn by pregnant passengers as a subtle signal, and other passengers standing up promptly and without being asked when someone with a clear need boards.",
    "whatItMeans": "This is treated as a firm, widely shared social expectation rather than an optional courtesy, and failing to act on it is noticed by others nearby.",
    "example": "A client didn't notice a pregnant passenger standing nearby and didn't offer their seat, and felt the disapproving reaction from other passengers around them before realizing what had happened.",
    "goodResponse": "Stay alert to fellow passengers who may need a seat (elderly, visibly pregnant, using a mobility aid) and offer proactively rather than waiting to be asked.",
    "status": "Approved"
  },
  {
    "normId": "TR-4-escalator-standing-side-norm",
    "category": "Transport & commuting",
    "definition": "Standing on the right and keeping the left side clear for walking is a strongly enforced unwritten rule on escalators, especially on the London Underground.",
    "surfaceMarkers": "Passengers walking briskly down the left side of an escalator, and visible frustration (a sigh, a pointed \"excuse me\") directed at anyone standing on the wrong side.",
    "whatItMeans": "This is treated as a near-firm rule in practice, not a loose suggestion, particularly during busy commuting periods.",
    "example": "A client stood on the left side of an escalator not realizing the convention, and was met with visible irritation from commuters trying to walk past.",
    "goodResponse": "Default to standing on the right on any escalator in a busy transport hub, keeping the left clear for people who want to walk.",
    "status": "Approved"
  },
  {
    "normId": "TR-5-staff-apology-on-behalf-of-delay",
    "category": "Transport & commuting",
    "definition": "Train and transport staff frequently apologize personally for delays and disruptions that are entirely outside their control, as a standard customer service script.",
    "surfaceMarkers": "\"I'm so sorry about the delay\" said by a conductor or station staff member for a delay caused by, for example, a signal failure or another operator entirely.",
    "whatItMeans": "This is a scripted, standard customer service courtesy rather than the individual staff member taking personal responsibility for the cause of the delay.",
    "example": "A client thanked a conductor for personally apologizing about a delay and assumed it meant the specific issue would be resolved quickly, when it was standard courteous scripting unrelated to the actual cause or timeline.",
    "goodResponse": "Accept the apology as standard courtesy and, if practical information is genuinely needed, ask directly: \"Do you have any update on how long the delay might be?\"",
    "status": "Approved"
  },
  {
    "normId": "TR-6-bus-request-stop-hand-signal",
    "category": "Transport & commuting",
    "definition": "Many UK bus stops are \"request stops,\" requiring a passenger to actively raise a hand to signal the driver to stop, or the bus may simply pass by without stopping.",
    "surfaceMarkers": "A bus stop sign marked or understood locally as a request stop, with the bus continuing past without slowing if no one signals and no one is waiting to board.",
    "whatItMeans": "The bus not stopping automatically at every stop is standard operating procedure at request stops, not an error or the driver missing the passenger.",
    "example": "A client waited at what turned out to be a request stop without raising a hand, and the bus drove straight past, leaving them confused about why it hadn't stopped.",
    "goodResponse": "Raise a hand clearly as the bus approaches any stop that might be a request stop, rather than assuming the bus will stop automatically.",
    "status": "Approved"
  },
  {
    "normId": "TR-7-tap-in-tap-out-contactless-fare-norm",
    "category": "Transport & commuting",
    "definition": "Contactless card or Oyster payment on UK public transport requires tapping both at the start and end of a journey; forgetting to tap out results in the maximum possible fare being charged.",
    "surfaceMarkers": "A yellow card reader at both entry and exit points of a station or bus, with no verbal reminder given to tap out specifically.",
    "whatItMeans": "The maximum fare charge for a missed tap-out is an automatic system rule applied uniformly, not a targeted penalty or an error that will necessarily be refunded without a specific request.",
    "example": "A client forgot to tap out at the end of a journey and was charged the maximum possible fare, and didn't realize this could usually be disputed and refunded through the operator's website.",
    "goodResponse": "Always tap out at the end of every journey, and if a maximum fare is mistakenly charged, submit a fare correction request online with the specific journey details.",
    "status": "Approved"
  },
  {
    "normId": "TR-8-excuse-me-this-is-my-stop-navigating-crowd",
    "category": "Transport & commuting",
    "definition": "Saying \"excuse me, this is my stop\" to politely ask standing passengers to let you past is the expected, standard way to navigate a crowded bus or train before alighting, rather than physically pushing through.",
    "surfaceMarkers": "A passenger saying \"sorry, excuse me\" while gesturing toward the door, with others typically moving aside promptly in response.",
    "whatItMeans": "This verbal request is treated as sufficient and expected — physically pushing past without speaking first is more likely to be read as rude.",
    "example": "A client tried to squeeze past standing passengers physically without saying anything, which drew visible irritation, when a simple verbal \"excuse me, this is my stop\" would have prompted people to move aside easily.",
    "goodResponse": "Say \"excuse me, this is my stop\" clearly a stop or two in advance to give people time to move, rather than waiting until the doors are about to open.",
    "status": "Approved"
  },
  {
    "normId": "TR-9-taxi-uber-tipping-modest-optional",
    "category": "Transport & commuting",
    "definition": "Tipping taxi and rideshare drivers in the UK is optional and generally modest (commonly just rounding up the fare), rather than a strong expectation of a set percentage.",
    "surfaceMarkers": "A driver accepting exact fare payment without prompting for a tip, and the app not defaulting to a suggested tip percentage in the same way as in some other countries.",
    "whatItMeans": "Not tipping at all is broadly acceptable and not read as rude, and a small rounding-up gesture is generally seen as generous rather than the expected minimum.",
    "example": "A client felt they had to calculate a specific percentage tip for every taxi journey, not realizing that simply rounding up or not tipping at all is both common and acceptable.",
    "goodResponse": "Round up to the nearest pound or two as a simple, sufficient gesture if a tip feels appropriate, without needing to calculate a specific percentage.",
    "status": "Approved"
  },
  {
    "normId": "TR-10-parking-permit-zone-strict-enforcement",
    "category": "Transport & commuting",
    "definition": "Residential parking permit zones in the UK are strictly enforced, often via automated cameras, with fines issued with little tolerance for visitor confusion about the rules.",
    "surfaceMarkers": "Small, easily missed signage indicating permit-only parking hours, with automated enforcement cameras rather than a visible traffic warden giving a warning first.",
    "whatItMeans": "Enforcement is automated and consistent regardless of whether the driver genuinely understood the local rules, so unfamiliarity doesn't typically prevent a fine.",
    "example": "A client parked in an unfamiliar residential area without realizing it required a permit, and received a fine by post weeks later, having had no warning at the time.",
    "goodResponse": "Check for parking signage carefully in any unfamiliar area, or use a parking app to confirm permit requirements before leaving a car in a residential zone.",
    "status": "Approved"
  },
  {
    "normId": "TR-11-driving-test-indicating-precision",
    "category": "Transport & commuting",
    "definition": "The UK driving test assesses very precise use of indicators, mirror checks, and manoeuvre sequencing, often stricter than the habits many experienced drivers develop casually afterward.",
    "surfaceMarkers": "A specific examiner checklist covering exact mirror-signal-manoeuvre order for every turn or lane change, marked as a fault if the sequence or timing is off.",
    "whatItMeans": "The precision expected specifically for passing the test is a formal, examined standard, distinct from the more relaxed habits common among everyday qualified drivers.",
    "example": "A client learning to drive was frustrated by how strictly their instructor insisted on indicator timing, not realizing this exact precision is specifically what the driving test examiner checks for.",
    "goodResponse": "Practice the precise mirror-signal-manoeuvre sequence deliberately for the test itself, even if real-world driving afterward tends to be more relaxed about exact timing.",
    "status": "Approved"
  },
  {
    "normId": "TR-12-road-rage-passive-restrained-norm",
    "category": "Transport & commuting",
    "definition": "Driving frustration in the UK is generally expressed in a restrained, passive way (a slow head shake, a pointed look, flashing headlights) rather than overt confrontation such as prolonged horn use or shouting.",
    "surfaceMarkers": "A brief flash of headlights or a single short horn tap to indicate frustration, rather than sustained horn use or a driver getting out of the car to confront another.",
    "whatItMeans": "These are understood as clear but contained frustration signals within the driving culture, not an invitation to escalate into a direct confrontation.",
    "example": "A client responded to a brief headlight flash from another driver as an aggressive challenge and became confrontational, when it was intended and generally understood as a mild, passing expression of frustration.",
    "goodResponse": "Read a brief horn tap or headlight flash as mild, passing frustration rather than an escalation, and respond calmly (a small wave or nod) rather than engaging further.",
    "status": "Approved"
  },
  {
    "normId": "TR-13-ulez-congestion-charge-unfamiliarity",
    "category": "Transport & commuting",
    "definition": "Low emission zones (ULEZ) and congestion charges in UK cities apply automatically via number-plate recognition cameras, with fines issued by post — there's no barrier or staffed gate to alert an unfamiliar driver at the time.",
    "surfaceMarkers": "No visible checkpoint or toll booth at the zone boundary — only small roadside signage, with the charge and any fine processed entirely after the fact by post.",
    "whatItMeans": "The absence of an immediate prompt or barrier means a driver can genuinely be unaware they've entered a charged zone until a bill or fine arrives later.",
    "example": "A client drove into a city's congestion charge zone without realizing it, assuming they would have been stopped or warned if a charge applied, and received a fine by post weeks later.",
    "goodResponse": "Check a city's specific emission zone and congestion charge boundaries and rules online before driving into an unfamiliar UK city centre, since there's no in-the-moment warning.",
    "status": "Approved"
  },
  {
    "normId": "TR-14-luggage-rack-space-etiquette",
    "category": "Transport & commuting",
    "definition": "There's an unwritten expectation to keep luggage compact and out of the way in overhead racks or designated luggage areas on UK trains, and taking up excessive shared space can draw direct comment from other passengers.",
    "surfaceMarkers": "A passenger with a large case spread across multiple luggage slots, prompting another passenger to ask directly: \"Would you mind moving that up a bit, so I can fit mine in too?\"",
    "whatItMeans": "This direct request, while it can feel blunt, reflects a genuine, reasonable shared-space expectation rather than personal rudeness toward the specific traveller.",
    "example": "A client left a large suitcase taking up significant shared luggage space and was surprised by a fellow passenger's direct request to make room, not realizing this kind of direct ask about shared space is fairly normal.",
    "goodResponse": "Keep luggage as compact as possible in shared spaces, and respond to a direct request to make room without taking it personally — it's a normal, practical ask.",
    "status": "Approved"
  },
  {
    "normId": "TR-15-station-announcement-apology-language",
    "category": "Transport & commuting",
    "definition": "Station and train announcements use formulaic apology language (\"we are sorry for any inconvenience caused\") for delays and cancellations, as standard scripted wording rather than a reflection of how serious the specific disruption is.",
    "surfaceMarkers": "The same fixed phrase used for both a two-minute delay and a significant cancellation, with no variation in tone or wording to distinguish severity.",
    "whatItMeans": "The consistent, formulaic language doesn't itself convey how significant a given disruption actually is — the practical details (new time, alternative route) carry the real information.",
    "example": "A client heard the standard apology announcement and assumed a delay must be relatively minor based on the calm, routine tone, when the same wording is used for both trivial and significant disruptions.",
    "goodResponse": "Focus on the specific practical details given (revised time, alternative platform or route) rather than reading the severity of a disruption from the tone of the standard apology language.",
    "status": "Approved"
  },
  {
    "normId": "TR-16-cycling-helmet-social-expectation",
    "category": "Transport & commuting",
    "definition": "Cycling helmets are not a legal requirement for adults in the UK, but there is a social expectation of wearing one in many contexts, and cycling without one can draw comment, particularly from more safety-conscious cyclists or family members.",
    "surfaceMarkers": "Other cyclists or family members asking \"where's your helmet?\" or expressing mild concern when someone cycles without one, despite it not being a legal requirement.",
    "whatItMeans": "The comment reflects a genuine, if informal, safety-based social expectation rather than confusion about the actual legal requirement.",
    "example": "A client was surprised by repeated comments about not wearing a cycling helmet, having correctly understood it wasn't legally required, not realizing there's still a strong informal social expectation around it.",
    "goodResponse": "Wearing a helmet, while not legally required, avoids this recurring social friction and is broadly recommended regardless of the legal position.",
    "status": "Approved"
  },
  {
    "normId": "TR-17-first-class-carriage-informal-enforcement",
    "category": "Transport & commuting",
    "definition": "Sitting in a first-class train carriage with a standard ticket is informally but firmly enforced by conductors, who will typically ask the passenger to move or offer a paid upgrade rather than simply ignoring it.",
    "surfaceMarkers": "A conductor checking tickets specifically in first class and saying, politely but directly, \"This is a first-class carriage, would you like to upgrade or move to standard?\"",
    "whatItMeans": "This is treated as a genuine, consistently enforced rule rather than a loose guideline that depends on how busy the train happens to be.",
    "example": "A client sat in an empty first-class carriage on a quiet train assuming it would be fine given the empty seats, and was asked directly by the conductor to either move or pay for an upgrade.",
    "goodResponse": "Check ticket class before sitting down, and move to the correct carriage promptly if asked, since this is consistently enforced regardless of how empty first class appears.",
    "status": "Approved"
  },
  {
    "normId": "NB-1-bin-collection-day-strictness",
    "category": "Neighbours & community",
    "definition": "UK councils assign specific bins (general waste, recycling, food, garden) to specific collection days and weeks, and getting the wrong bin or day wrong typically results in it simply being left uncollected, with no direct personal warning given.",
    "surfaceMarkers": "A printed or emailed collection calendar from the council, with bins left uncollected and a small sticker or note attached if sorted incorrectly, rather than a phone call or knock at the door.",
    "whatItMeans": "The lack of a direct, personal warning reflects the scale and standard process of council waste collection, not a decision specifically targeting that household.",
    "example": "A client put the wrong bin out on the wrong day and it was left uncollected with no explanation given at the time, and didn't realize until checking the council's collection calendar what had gone wrong.",
    "goodResponse": "Check the specific council collection calendar for the exact address, since bin days and which bin is collected can vary street by street and change with public holidays.",
    "status": "Approved"
  },
  {
    "normId": "NB-2-garden-hedge-boundary-etiquette",
    "category": "Neighbours & community",
    "definition": "Hedge height, fence maintenance, and garden boundary issues between neighbours are generally handled through informal, indirect conversation at first, rather than an immediate formal complaint or legal step.",
    "surfaceMarkers": "A neighbour mentioning a hedge issue briefly and lightly in passing (\"the hedge is getting a bit tall on our side, whenever you get a chance\") rather than a direct, formal request.",
    "whatItMeans": "This indirect first approach is the expected initial step — escalating quickly to something formal without first raising it casually can come across as overly confrontational.",
    "example": "A client received a formal-sounding letter about their hedge height without any prior casual conversation, and their neighbour later admitted this felt more confrontational than the informal chat they'd normally expect first.",
    "goodResponse": "Raise a boundary or hedge issue casually and lightly with a neighbour directly first, and reserve anything more formal for if the casual approach doesn't lead to any change.",
    "status": "Approved"
  },
  {
    "normId": "NB-3-neighbourhood-facebook-group-norms",
    "category": "Neighbours & community",
    "definition": "Local community Facebook or WhatsApp groups have their own unwritten norms (avoiding overtly political posts, welcoming lost-pet or local-recommendation posts), enforced through admin moderation or visible social pushback from other members.",
    "surfaceMarkers": "A post being quietly removed by an admin, or receiving several disapproving comments, when it strays outside the group's typical unwritten topics.",
    "whatItMeans": "These norms are genuinely, if informally, enforced, and posts outside the expected range can draw a noticeably cool or corrective response from the group.",
    "example": "A client posted a strongly opinionated comment about a local political issue in a neighbourhood Facebook group and was surprised by the sharp pushback and an admin warning, not realizing this topic was informally considered off-limits for the group.",
    "goodResponse": "Observe the general tone and typical topics of a local community group for a while before posting anything opinionated, and keep contributions practical and local (recommendations, lost items, local news).",
    "status": "Approved"
  },
  {
    "normId": "NB-4-brief-hello-not-deep-conversation-norm",
    "category": "Neighbours & community",
    "definition": "A brief \"morning!\" or a wave is the typical expected level of interaction when passing a neighbour, with a longer, deeper conversation each time being less common and occasionally seen as slightly overstepping.",
    "surfaceMarkers": "A quick greeting exchanged while walking past, with both people continuing on their way rather than stopping for an extended chat.",
    "whatItMeans": "This brevity is a comfortable social default reflecting general reserve, not coldness or a specific signal about how the neighbour feels about the relationship.",
    "example": "A client tried to stop for a lengthy conversation with a neighbour every time they crossed paths, and noticed the neighbour becoming increasingly brief in response, not realizing brief greetings were the more comfortable norm.",
    "goodResponse": "A brief, warm greeting each time is generally the expected and most comfortable interaction; longer conversations tend to happen occasionally and more naturally rather than being forced every time.",
    "status": "Approved"
  },
  {
    "normId": "NB-5-pumpkin-doorstep-halloween-signal",
    "category": "Neighbours & community",
    "definition": "A lit, carved pumpkin displayed on a doorstep at Halloween is a widely understood signal that a household welcomes trick-or-treaters; its absence is generally read as a polite signal to skip that house.",
    "surfaceMarkers": "Some houses on a street displaying a lit pumpkin or Halloween decoration, while others have no decoration at all and leave outside lights off.",
    "whatItMeans": "The absence of a pumpkin or decoration is a genuine, understood social signal to not knock, rather than simply an oversight to be knocked on anyway.",
    "example": "A client's family knocked on every door on their street for trick-or-treating, including undecorated houses, and received some visibly uncomfortable reactions, not realizing the lack of a pumpkin was meant as a polite \"no thank you\" signal.",
    "goodResponse": "Only approach houses with a visible pumpkin, decoration, or porch light left on for Halloween, and skip undecorated houses as a matter of course.",
    "status": "Approved"
  },
  {
    "normId": "NB-6-neighbour-christmas-card-exchange-norm",
    "category": "Neighbours & community",
    "definition": "Exchanging a simple card, rather than a gift, with immediate neighbours around Christmas is a common, low-key gesture in many UK neighbourhoods.",
    "surfaceMarkers": "A card posted through the letterbox or handed over briefly, often without an accompanying gift or an expectation of an extended visit.",
    "whatItMeans": "This is intended as a light, low-effort gesture of goodwill rather than a substantial obligation, and a modest card alone is a complete, sufficient gesture.",
    "example": "A client felt they needed to buy a substantial gift for every neighbour who sent a Christmas card, not realizing a simple card in return was the complete and expected gesture.",
    "goodResponse": "A simple card through the letterbox is a sufficient, appropriate response to a neighbour's Christmas card — no gift is expected in return.",
    "status": "Approved"
  },
  {
    "normId": "NB-7-borrowing-small-items-from-neighbours",
    "category": "Neighbours & community",
    "definition": "Briefly borrowing a small item from a neighbour (a tool, an egg, a phone charger) is a normal, low-stakes interaction, but prompt, thoughtful return — sometimes with a small thank-you gesture — is expected without being asked.",
    "surfaceMarkers": "A neighbour lending something small without setting an explicit return date, trusting it will come back promptly and in good condition.",
    "whatItMeans": "The lack of an explicit return date doesn't mean there's no real expectation — a delayed or forgotten return, even of something small, is genuinely noticed.",
    "example": "A client borrowed a tool from a neighbour and kept it for several weeks without returning it, assuming this was fine since no date had been mentioned, and later sensed some quiet awkwardness from the neighbour about it.",
    "goodResponse": "Return a borrowed item within a few days at most, even if no explicit deadline was given, and consider a small thank-you gesture (a card, some baking) for anything beyond a trivial loan.",
    "status": "Approved"
  },
  {
    "normId": "NB-8-parking-outside-someones-house-etiquette",
    "category": "Neighbours & community",
    "definition": "Parking directly outside another resident's house on a public street, even where legally permitted, is a common, quiet source of neighbourly tension in residential UK streets.",
    "surfaceMarkers": "A neighbour making a pointed, indirect comment (\"oh, I see you've found our spot!\") about a car parked outside their house, despite having no formal claim to that specific space.",
    "whatItMeans": "There's no legal entitlement to the space directly outside one's own house, but there's a strong informal social expectation around it that residents generally respect anyway.",
    "example": "A client regularly parked in the space directly outside a neighbour's house, technically legally, and sensed growing coolness from the neighbour without understanding why until a friend explained the informal local etiquette.",
    "goodResponse": "Where possible, avoid consistently parking directly outside a specific neighbour's house, even where legally permitted, to avoid this common source of quiet friction.",
    "status": "Approved"
  },
  {
    "normId": "NB-9-community-bake-sale-fundraiser-participation",
    "category": "Neighbours & community",
    "definition": "School or community bake sales and fundraisers carry a soft social expectation of participation (bringing something, buying something) that goes beyond their officially \"optional\" framing.",
    "surfaceMarkers": "A note home from school describing an event as \"optional\" while also listing what to bring, with most families participating in some way regardless.",
    "whatItMeans": "The stated optionality is technically accurate but socially, near-universal participation is the actual norm, and consistently opting out entirely can be quietly noticed.",
    "example": "A client skipped every school bake sale and fundraiser because they were marked \"optional,\" not realizing that near-universal light participation (even just buying something small) was the actual unstated norm among other parents.",
    "goodResponse": "Participate in some small way (buying an item, even if not baking) at community fundraisers marked as optional, since light participation is the real, if unstated, expectation.",
    "status": "Approved"
  },
  {
    "normId": "NB-10-antisocial-behaviour-council-line-reporting",
    "category": "Neighbours & community",
    "definition": "Reporting an ongoing neighbour issue (persistent noise, nuisance behaviour) through the council's non-emergency reporting line is the standard, expected formal channel, rather than escalating through repeated direct confrontation.",
    "surfaceMarkers": "A council website or non-emergency phone line specifically set up for reporting ongoing antisocial behaviour, distinct from the emergency police line.",
    "whatItMeans": "Using this formal channel is a normal, non-confrontational step that most residents would take, not an unusually aggressive escalation of the issue.",
    "example": "A client hesitated to report ongoing noise from a neighbour to the council, worried it would seem like an extreme step, not realizing this is the standard, expected route most residents use for exactly this kind of ongoing issue.",
    "goodResponse": "After one or two direct, polite attempts to resolve a persistent issue directly with a neighbour, it's normal and appropriate to use the council's non-emergency reporting line if it continues.",
    "status": "Approved"
  },
  {
    "normId": "NB-11-street-party-organizing-norm",
    "category": "Neighbours & community",
    "definition": "Organizing a street party for a national occasion (such as a royal event or public holiday) typically requires notifying the local council in advance and building informal consensus among neighbours, rather than simply proceeding independently.",
    "surfaceMarkers": "A council webpage with a specific process for registering a temporary road closure for a street party, alongside informal door-to-door conversations to gauge neighbourhood interest first.",
    "whatItMeans": "Both the formal council process and the informal neighbourhood consensus-building step are genuinely expected parts of organizing this kind of event, not optional extras.",
    "example": "A client wanted to organize a street party and started planning independently, not realizing a road closure required formal council notification and that skipping the informal neighbourhood check-in first would likely cause friction.",
    "goodResponse": "Check the council's specific process for a temporary road closure well in advance, and informally gauge neighbourhood interest and any objections before finalizing plans.",
    "status": "Approved"
  },
  {
    "normId": "NB-12-dog-mess-cleanup-strict-norm",
    "category": "Neighbours & community",
    "definition": "Picking up after a dog in public parks, pavements, and shared spaces is a strictly enforced social norm (and legal requirement) in the UK, with visible disapproval or fines for failing to do so.",
    "surfaceMarkers": "Public signage in parks stating fines for not cleaning up after a dog, and passersby sometimes directly and pointedly commenting if they witness a lapse.",
    "whatItMeans": "This is treated as a firm expectation with real, financial consequences under the Dogs (Fouling of Land) Act 1996 — typically a £50-100 on-the-spot fixed penalty, rising to a maximum £1,000 fine if it goes to a magistrates' court — not a loosely-followed suggestion dependent on how busy the area is.",
    "example": "A client didn't immediately clean up after their dog in what seemed like a quiet, empty park area, and was directly and firmly approached by another park user about it.",
    "goodResponse": "Always carry bags and clean up immediately after a dog in any public space, regardless of how quiet or empty the area seems at the time.",
    "status": "Approved"
  },
  {
    "normId": "NB-13-recycling-sorting-strictness",
    "category": "Neighbours & community",
    "definition": "UK council recycling collection is often strict about what's accepted (correctly rinsed, sorted into the right bin category), and a contaminated or incorrectly sorted bin may simply be left uncollected with a note rather than collected anyway.",
    "surfaceMarkers": "A sticker or tag left on an uncollected bin citing \"contamination\" or incorrect sorting, with no separate personal explanation or warning beforehand.",
    "whatItMeans": "This reflects standard, uniformly applied council recycling policy rather than a specific complaint or targeted action against that household.",
    "example": "A client's recycling bin was left uncollected with a contamination sticker attached, and they were confused and slightly embarrassed, not realizing this is standard council procedure applied the same way to any incorrectly sorted bin.",
    "goodResponse": "Check the specific council's recycling guidance carefully (rinsing requirements, accepted materials), since rules can vary noticeably between different local councils.",
    "status": "Approved"
  },
  {
    "normId": "NB-14-loud-music-unwritten-curfew-hours",
    "category": "Neighbours & community",
    "definition": "There's a widely shared but unwritten expectation that loud music or noise should stop by a certain hour (commonly around 11pm on weeknights), even without any explicit rule being stated in a tenancy agreement or by a neighbour directly.",
    "surfaceMarkers": "A neighbour texting or knocking politely but pointedly after a certain hour (\"sorry to bother you, just wondering if you could turn the music down a bit\") without referencing any specific stated rule.",
    "whatItMeans": "The absence of a written rule doesn't mean there's no real expectation — this unwritten curfew is genuinely, widely observed and enforced socially.",
    "example": "A client played music at a normal volume past midnight on a weeknight, assuming this was fine since no rule had ever been explicitly stated, and was surprised by a neighbour's polite but clearly displeased knock at the door.",
    "goodResponse": "As a general default, keep noise down by around 11pm on weeknights (a bit later at weekends), even with no explicit rule stated, to avoid this common source of neighbourly friction.",
    "status": "Approved"
  },
  {
    "normId": "NB-15-new-neighbour-welcome-card-norm",
    "category": "Neighbours & community",
    "definition": "A brief handwritten welcome note or card posted through the letterbox is a common, understated way UK neighbours welcome someone new to the street, rather than an in-person visit or gift.",
    "surfaceMarkers": "A short card left in the new resident's letterbox within the first week or two, often including a phone number for questions, without a follow-up in-person visit necessarily happening.",
    "whatItMeans": "This modest gesture is considered a complete, sufficient welcome in itself, not a preliminary step before something more substantial is expected to follow.",
    "example": "A client received a brief welcome card from a neighbour and waited for a more substantial in-person visit or gesture to follow, not realizing the card itself was the complete, standard welcome gesture.",
    "goodResponse": "A short handwritten card through the letterbox is a genuinely sufficient, appreciated way to welcome a new neighbour — an elaborate gift or visit isn't expected.",
    "status": "Approved"
  },
  {
    "normId": "NB-16-communal-garden-shared-space-responsibility",
    "category": "Neighbours & community",
    "definition": "Shared or communal garden areas attached to blocks of flats carry an informal expectation of shared upkeep, usually coordinated loosely between residents rather than through a strict, formally assigned rota.",
    "surfaceMarkers": "General expectations discussed loosely among residents (\"if everyone just does a bit when they can\") rather than a written, formally enforced schedule.",
    "whatItMeans": "The looseness of the arrangement doesn't mean upkeep is optional — residents who are seen to never contribute are genuinely noticed, even without a formal system tracking it.",
    "example": "A client assumed that because there was no formal rota for the communal garden, contributing was entirely optional, and was surprised to sense some quiet frustration from other residents who had noticed they never helped.",
    "goodResponse": "Contribute to communal garden upkeep occasionally even without a formal schedule, and it's reasonable to suggest setting up a simple shared rota directly if the loose informal system isn't working well.",
    "status": "Approved"
  },
  {
    "normId": "CS-1-no-worries-service-staff-filler",
    "category": "Customer service & retail",
    "definition": "\"No worries\" said reflexively by UK service staff in response to almost anything — a thank you, an apology, a request — functions as filler politeness rather than a substantive response to what was actually said.",
    "surfaceMarkers": "\"No worries!\" said automatically after a customer says thank you, sorry, or makes almost any small request, regardless of its content.",
    "whatItMeans": "This phrase is a light social lubricant rather than a considered response, and shouldn't be read as confirming or addressing the specific content of what was said.",
    "example": "A client apologized for a genuine mistake and was told \"no worries,\" and assumed this meant the issue was fully resolved and forgotten, when it was simply a reflexive politeness phrase rather than confirmation the matter was actually settled.",
    "goodResponse": "If a specific issue genuinely needs confirming as resolved, ask directly: \"So just to check, is that all sorted now?\" rather than relying on a reflexive \"no worries\" as confirmation.",
    "status": "Approved"
  },
  {
    "normId": "CS-2-returns-policy-receipt-strictness",
    "category": "Customer service & retail",
    "definition": "Most UK retailers strictly require a receipt or other clear proof of purchase for returns or exchanges, applied as a uniform policy rather than left to individual staff discretion.",
    "surfaceMarkers": "A prominently displayed returns policy stating \"proof of purchase required,\" with staff generally unable to make an exception even if sympathetic to the situation.",
    "whatItMeans": "A staff member declining a return without a receipt reflects fixed company policy they have little personal discretion over, not personal unhelpfulness.",
    "example": "A client tried to return an item without a receipt and felt the staff member was being deliberately unhelpful, not realizing store policy gave that staff member very little discretion to make an exception.",
    "goodResponse": "Always keep receipts for anything that might need to be returned, and check a store's specific returns policy (including the return window) before purchasing if unsure.",
    "status": "Approved"
  },
  {
    "normId": "CS-3-tech-support-script-troubleshooting-steps",
    "category": "Customer service & retail",
    "definition": "Customer support staff working through a fixed troubleshooting script (restart the device, check the cables, clear the cache) before escalating further is standard procedure, not a sign of not being taken seriously.",
    "surfaceMarkers": "A support agent asking the same basic troubleshooting questions regardless of how much detail or technical background the customer has already provided.",
    "whatItMeans": "Following the standard script first is often a required step before the agent is even permitted to escalate to a specialist or a refund, regardless of how experienced the customer clearly is.",
    "example": "A client with significant technical knowledge felt patronized being asked to \"turn it off and on again\" during a support call, not realizing the agent was required to complete these standard steps before being able to escalate the issue further.",
    "goodResponse": "Answer the standard troubleshooting questions patiently even if they seem basic, since completing them is often the quickest route to getting the issue properly escalated.",
    "status": "Approved"
  },
  {
    "normId": "CS-4-formal-written-complaint-better-outcome",
    "category": "Customer service & retail",
    "definition": "A calm, clearly written formal complaint (by letter or email) to a UK company often results in a more substantive, useful response than a heated phone call or an in-person complaint.",
    "surfaceMarkers": "A company's official \"complaints\" email address or postal address listed on its website, distinct from general customer service contact channels.",
    "whatItMeans": "Written complaints typically get logged, tracked, and given a proper written response, whereas a verbal complaint can be more easily minimized or forgotten in the moment.",
    "example": "A client complained forcefully on the phone about a genuine issue and got little real resolution, then wrote a calm, clear formal email restating the same issue and received a proper substantive response and resolution.",
    "goodResponse": "For a genuine complaint that matters, put it in writing via the company's specific complaints channel, staying factual and calm, even if a phone call was tried first.",
    "status": "Approved"
  },
  {
    "normId": "CS-5-take-a-ticket-queue-system-norm",
    "category": "Customer service & retail",
    "definition": "Many UK service points (post offices, pharmacy counters, some council offices) use a ticket or number system rather than a visible physical queue, requiring active awareness that this system is in use.",
    "surfaceMarkers": "A ticket dispenser machine near the entrance and a small screen displaying the current number being served, with no obvious physical line of people to follow.",
    "whatItMeans": "Standing in what looks like an informal cluster near the counter without taking a ticket generally means not actually being in the real queue, regardless of arrival order.",
    "example": "A client stood near a pharmacy counter assuming they were in a physical queue, and was confused and frustrated when people who arrived later were served first, before realizing a ticket needed to be taken from a machine.",
    "goodResponse": "Look specifically for a ticket machine or numbered system when entering any service point that doesn't have an obvious physical queue.",
    "status": "Approved"
  },
  {
    "normId": "CS-6-self-service-kiosk-default-norm",
    "category": "Customer service & retail",
    "definition": "Self-service ordering kiosks or checkouts are increasingly offered as the default option in many UK shops and fast-food outlets, presented upfront rather than staff assistance being the assumed default.",
    "surfaceMarkers": "A prominent bank of self-service screens positioned at the entrance, with staff-assisted counters fewer in number or slightly further back.",
    "whatItMeans": "Being directed toward self-service reflects the venue's standard operating model, not an assumption that the customer prefers to avoid staff interaction.",
    "example": "A client felt slightly brushed off being directed to a self-service kiosk at a fast-food restaurant rather than a staffed counter, not realizing this is simply the default setup for most customers there now.",
    "goodResponse": "Use the self-service kiosk for straightforward orders, and ask a staff member directly and confidently if a specific need (an allergy question, a complex order) is better handled in person.",
    "status": "Approved"
  },
  {
    "normId": "CS-7-out-of-stock-apology-genuine-scarcity",
    "category": "Customer service & retail",
    "definition": "\"Sorry, we don't have that in stock\" from UK retail staff is usually a genuine, factual statement about current inventory, not a polite way of avoiding further help.",
    "surfaceMarkers": "A staff member checking a stock system or shelf directly before giving this answer, sometimes offering to check another branch or order it in.",
    "whatItMeans": "This response typically reflects an accurate, checked inventory status rather than reluctance to help further — most staff will offer an alternative if one genuinely exists.",
    "example": "A client assumed \"sorry, we don't have that in stock\" was a brush-off and left without asking further, when the staff member would have been willing to check other branches or order the item in if asked.",
    "goodResponse": "If a specific item matters, ask a direct follow-up: \"Could you check if another branch has it, or if it can be ordered in?\" rather than assuming the conversation is over.",
    "status": "Approved"
  },
  {
    "normId": "CS-8-boxing-day-seasonal-sale-norm",
    "category": "Customer service & retail",
    "definition": "Major UK retail sales (particularly Boxing Day and the January sales) follow a predictable seasonal calendar, and asking staff about upcoming sales beforehand is a normal, expected question rather than an awkward one.",
    "surfaceMarkers": "Prominent \"Boxing Day Sale\" or \"January Sale\" signage appearing consistently every year around the same dates, well known and anticipated by regular shoppers.",
    "whatItMeans": "Asking about these predictable seasonal sales in advance is treated as a completely normal shopping question, not something staff would find unusual or pushy.",
    "example": "A client wanted to buy an item but felt awkward asking a staff member whether it would be discounted in the upcoming Boxing Day sale, not realizing this is an extremely common, expected question at that time of year.",
    "goodResponse": "It's entirely normal to ask directly: \"Do you know if this will be included in the Boxing Day sale?\" — staff are used to this exact question every year.",
    "status": "Approved"
  },
  {
    "normId": "CS-9-asking-staff-for-help-normal-not-bothersome",
    "category": "Customer service & retail",
    "definition": "Approaching a staff member to ask for help finding an item in a UK shop is a completely normal, expected interaction, not something that risks being seen as an imposition on their time.",
    "surfaceMarkers": "Staff wearing name badges or branded clothing specifically to be easily identifiable and approachable for exactly this kind of question.",
    "whatItMeans": "Staff generally expect and are available for this kind of interaction throughout their shift, rather than viewing it as an unwelcome interruption of other tasks.",
    "example": "A client hesitated for a long time before finally asking a staff member for help finding an item, worried about bothering them, when approaching staff for exactly this reason is a routine, expected part of their role.",
    "goodResponse": "Approach any staff member confidently for help finding an item — this is a completely normal, welcomed interaction, not an imposition.",
    "status": "Approved"
  },
  {
    "normId": "CS-10-walk-in-no-reservation-restaurant-wait-norm",
    "category": "Customer service & retail",
    "definition": "Many casual UK restaurants operate on a walk-in, no-reservation basis with a wait, managed through a wait-list system (a name taken, a buzzer given) rather than a fixed table booking.",
    "surfaceMarkers": "A host taking a name and party size at the entrance and handing over a buzzer or estimated wait time, rather than checking a pre-existing reservation.",
    "whatItMeans": "This walk-in wait system is the venue's standard operating model for busier casual restaurants, not a sign of disorganization or a special inconvenience for that specific visit.",
    "example": "A client assumed a lack of reservation system at a popular restaurant meant it was poorly run, not realizing the walk-in-and-wait model with a buzzer system is the venue's standard, deliberate approach.",
    "goodResponse": "Check in advance whether a specific restaurant takes reservations or operates a walk-in wait-list system, and arrive prepared for a potential wait if it's the latter.",
    "status": "Approved"
  },
  {
    "normId": "CS-11-sending-food-back-polite-low-key",
    "category": "Customer service & retail",
    "definition": "Sending food back at a UK restaurant is generally done quietly and politely, with a calm, specific explanation of the issue, rather than a loud or dramatic complaint.",
    "surfaceMarkers": "A diner quietly flagging down a server and saying something like \"sorry, this seems to be a bit undercooked, would you mind having it redone?\" in a measured, low-key tone.",
    "whatItMeans": "This restrained, polite delivery is the expected way to raise a genuine issue and still get it properly addressed — it isn't read as a lack of seriousness about the complaint.",
    "example": "A client had a genuinely undercooked meal but stayed completely silent rather than raising it, assuming any complaint would need to be loud or dramatic to be taken seriously, and missed the chance to have it fixed.",
    "goodResponse": "Raise a genuine food issue calmly and specifically with a server — a quiet, polite, specific complaint is both normal and effective in getting the issue properly addressed.",
    "status": "Approved"
  },
  {
    "normId": "CS-12-apologising-while-complaining-norm",
    "category": "Customer service & retail",
    "definition": "UK customers commonly soften a genuine complaint with an apologetic opener (\"sorry to make a fuss, but...\"), and this apology doesn't reduce the seriousness or legitimacy of the actual issue being raised.",
    "surfaceMarkers": "\"Sorry to bother you, but I think there might be a mistake on my bill\" said as the opening of an otherwise completely legitimate and specific complaint.",
    "whatItMeans": "The apologetic framing is a social convention for raising the issue politely, not a sign the customer themselves views the complaint as minor or unwarranted.",
    "example": "A client heard a customer open with \"sorry to make a fuss, but...\" and assumed the following complaint must be minor, and gave it less attention than the actual, quite significant issue deserved.",
    "goodResponse": "Take the substance of an apologetically-framed complaint at full face value, regardless of the soft opening — the apology is about tone, not about how serious the underlying issue actually is.",
    "status": "Approved"
  },
  {
    "normId": "CS-13-is-everything-alright-scripted-checkin",
    "category": "Customer service & retail",
    "definition": "A server asking \"is everything alright with your meal?\" partway through a meal is a standard scripted check-in, generally expecting a brief positive response by default, with any genuine issue needing to be actively raised rather than assumed to be obvious from a hesitant tone.",
    "surfaceMarkers": "A server pausing briefly at the table with this exact or similar phrase, then moving on quickly after a brief \"yes, great thanks\" from most tables.",
    "whatItMeans": "The scripted nature of the question means a server won't necessarily probe further even if a diner's tone seems slightly uncertain — a real issue needs to be stated plainly to register.",
    "example": "A client answered \"is everything alright?\" with a hesitant \"yeah, it's... fine,\" hoping the server would pick up on the hesitation and ask more, but the server simply moved on, since the response sounded positive enough on the surface.",
    "goodResponse": "If there's a genuine issue with the meal, state it plainly and specifically when asked (\"actually, this is a bit cold\") rather than hinting at it through tone alone.",
    "status": "Approved"
  },
  {
    "normId": "CS-14-price-match-policy-active-request-needed",
    "category": "Customer service & retail",
    "definition": "Price matching against a competitor's advertised price is often available at UK retailers but usually requires the customer to actively point it out and request it, rather than being applied automatically.",
    "surfaceMarkers": "A \"price match\" policy mentioned in small print on the store website or a sign, with no automatic prompt at the till asking whether a lower price has been seen elsewhere.",
    "whatItMeans": "The policy genuinely exists and is honored, but relies entirely on the customer proactively raising it with evidence, rather than staff checking competitor prices themselves.",
    "example": "A client didn't realize a store offered price matching and paid full price for an item that was cheaper elsewhere, not knowing a simple request with evidence of the lower price would likely have been honored.",
    "goodResponse": "If aware of a lower price elsewhere, ask directly at the till: \"Do you price match? I've seen this cheaper at [competitor]\" — most retailers with the policy will honor it on request.",
    "status": "Approved"
  },
  {
    "normId": "CS-15-click-and-collect-standard-option",
    "category": "Customer service & retail",
    "definition": "Ordering online for in-store collection (\"click and collect\") is a standard, widely expected purchasing option at most UK retailers, not a special or unusual arrangement.",
    "surfaceMarkers": "A \"click and collect\" option clearly listed alongside home delivery at checkout on most major UK retail websites, often with same-day availability.",
    "whatItMeans": "This is a completely mainstream, expected purchasing method that staff handle routinely, not an unusual request requiring special accommodation.",
    "example": "A client felt unsure and slightly apologetic asking about collecting an online order in-store, not realizing click and collect is one of the most standard, routinely handled purchasing methods at most UK retailers.",
    "goodResponse": "Use click and collect confidently as a standard purchasing option — staff handle this routinely and it requires no special explanation or apology.",
    "status": "Approved"
  },
  {
    "normId": "CS-16-chip-and-pin-standard-card-verification",
    "category": "Customer service & retail",
    "definition": "UK card payments standardly require chip-and-PIN entry (for larger amounts) or contactless tap (for smaller amounts under a set limit), rather than a signature, which can surprise those used to signature-based card verification.",
    "surfaceMarkers": "A card reader prompting for a 4-digit PIN entry, with no signature option offered or requested at any point in the transaction.",
    "whatItMeans": "Signature verification is essentially obsolete in standard UK retail transactions — and the picture is shifting further: the FCA scrapped the fixed nationwide £100 contactless cap from 19 March 2026, letting individual banks set their own limits, though most banks kept £100 in practice at first since card terminals also need upgrading.",
    "example": "A client was confused when asked to enter a PIN rather than sign for a purchase, having only used signature-based verification before, and held up the queue trying to figure out the unfamiliar chip-and-PIN process.",
    "goodResponse": "Have a UK debit or credit card's PIN memorized and ready before shopping, since chip-and-PIN (or contactless for smaller amounts) is the standard, essentially universal verification method.",
    "status": "Approved"
  },
  {
    "normId": "CS-17-feedback-survey-email-routine-request",
    "category": "Customer service & retail",
    "definition": "A feedback survey request email sent after a purchase or a customer service interaction is a routine, largely automated business practice, and doesn't imply that something specifically went wrong with that particular transaction.",
    "surfaceMarkers": "An automated email arriving shortly after almost any purchase or support interaction, asking for a star rating or a short survey about the experience.",
    "whatItMeans": "This is sent as standard practice to essentially every customer, regardless of whether their specific experience was positive, negative, or entirely unremarkable.",
    "example": "A client received a feedback survey email after a completely uneventful, satisfactory purchase and worried it meant the company had flagged some kind of problem with their specific order, when it's simply sent automatically to every customer.",
    "goodResponse": "Treat a feedback survey email as routine and optional — it's sent to essentially every customer automatically and doesn't indicate anything specific about that particular transaction.",
    "status": "Approved"
  }
];
