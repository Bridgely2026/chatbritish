// AUTO-GENERATED from data/chat_british_scenarios.xlsx by scripts/import-scenarios.mjs
// Do not edit by hand — edit the spreadsheet and re-run: npm run scenarios:import
import type { Scenario } from "./scenarios";

// true only after `npm run scenarios:import -- --include-draft` (local dev).
export const generatedIncludesDraft = false;

export const generatedScenarios: Scenario[] = [
  {
    "id": "SC-WP-2-a",
    "normId": "WP-2-promotion-discussion-indirectness",
    "category": "Workplace",
    "setup": "You ask your manager about a promotion. She says, “It's definitely something we can look at.” No date is mentioned.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask to set a date to revisit it, and what she'd want to see from you before then.",
        "correct": true,
        "feedback": "Warm language isn't a promise. A real commitment usually comes with a date or a documented next step."
      },
      {
        "text": "Take it as a near-term commitment and wait.",
        "correct": false,
        "feedback": "It's a deferral, not a promise. With no date attached, nothing is actually in motion."
      },
      {
        "text": "Drop the subject so you don't seem pushy.",
        "correct": false,
        "feedback": "Asking for a concrete next step is normal. Dropping it leaves a vague deferral vague."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-4-a",
    "normId": "WP-4-deadline-reminder-escalation",
    "category": "Workplace",
    "setup": "Your manager emails: “Just a gentle reminder about the report.” Three days later: “Following up again on this.” You haven't sent it yet.",
    "prompt": "How do you read the second email?",
    "options": [
      {
        "text": "As rising urgency. Treat the task as a priority now.",
        "correct": true,
        "feedback": "Repetition is the real signal. Each “gentle” reminder means urgency is rising, however mild it sounds."
      },
      {
        "text": "As routine politeness. There's still no rush.",
        "correct": false,
        "feedback": "The wording stays polite, but a second follow-up on the same task is a priority signal."
      },
      {
        "text": "Wait for a third reminder before acting.",
        "correct": false,
        "feedback": "The third is usually direct, such as “I need this by end of day”. Don't wait for it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-6-a",
    "normId": "WP-6-agreement-in-meetings-silence",
    "category": "Workplace",
    "setup": "You present a plan in a team meeting. Everyone nods and says it could work. Nobody pushes back.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Check with key people one by one: “Any concerns before I move ahead?”",
        "correct": true,
        "feedback": "Real objections are often saved for a private conversation, so agreement in the room can be provisional."
      },
      {
        "text": "Treat it as settled and go ahead.",
        "correct": false,
        "feedback": "Agreement in the room can be provisional. Concerns often arrive later, in private."
      },
      {
        "text": "Ask the whole group again if anyone disagrees.",
        "correct": false,
        "feedback": "People rarely voice objections in front of the group. A private follow-up invites them."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-7-a",
    "normId": "WP-7-cc-escalation-email",
    "category": "Workplace",
    "setup": "In a routine email chain about a project, a colleague suddenly CCs your manager. There's no explanation and the tone stays friendly.",
    "prompt": "What does the CC most likely mean?",
    "options": [
      {
        "text": "The issue is being put on record. Ask plainly if there's a concern to address.",
        "correct": true,
        "feedback": "A sudden CC often marks the point an issue is formally tracked, even when the tone stays friendly."
      },
      {
        "text": "Nothing. It's just keeping people in the loop.",
        "correct": false,
        "feedback": "With no explanation, a new CC usually means the sender wants it on record."
      },
      {
        "text": "A friendly gesture to share credit.",
        "correct": false,
        "feedback": "The friendly tone can mislead. A new CC with no explanation more often signals escalation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-8-a",
    "normId": "WP-8-sorry-to-bother-request",
    "category": "Workplace",
    "setup": "Your manager says: “Sorry to bother you, this is probably nothing, but could you rewrite the report by end of day?”",
    "prompt": "How big is the ask?",
    "options": [
      {
        "text": "As big as it sounds: a full rewrite, due today.",
        "correct": true,
        "feedback": "The apology softens the tone, not the size or urgency. Take the request itself at face value."
      },
      {
        "text": "Small. They said it's probably nothing.",
        "correct": false,
        "feedback": "The “probably nothing” is politeness. A same-day rewrite is a substantial request."
      },
      {
        "text": "Fine to do later in the week.",
        "correct": false,
        "feedback": "The deadline in the request is real, whatever the soft opening says."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-10-a",
    "normId": "WP-10-feedback-sandwich",
    "category": "Workplace",
    "setup": "Your manager says: “Great presentation. Maybe tighten the data section next time, but overall really well done.”",
    "prompt": "What's the main thing to take from this?",
    "options": [
      {
        "text": "The data section needs work. Repeat it back to confirm.",
        "correct": true,
        "feedback": "The critical point often sits in the middle: short in words, but not small in importance."
      },
      {
        "text": "That it went really well and nothing needs changing.",
        "correct": false,
        "feedback": "That misses the middle comment, which is often the real point of the feedback."
      },
      {
        "text": "That your manager thought the whole presentation was weak.",
        "correct": false,
        "feedback": "That's an overreaction. The specific point is the data section, not the whole presentation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-12-a",
    "normId": "WP-12-calendar-invite-formality",
    "category": "Workplace",
    "setup": "After weeks of casual chat messages, your manager sends a calendar invite with a specific title and agenda for the same topic.",
    "prompt": "How do you approach the meeting?",
    "options": [
      {
        "text": "Prepare as for a formal conversation.",
        "correct": true,
        "feedback": "Moving from chat to a scheduled invite is itself a signal the matter is being taken more seriously."
      },
      {
        "text": "Treat it as routine and go in unprepared.",
        "correct": false,
        "feedback": "An invite for a topic normally handled informally is a shift. Assuming it's routine misses it."
      },
      {
        "text": "Ask to keep it as an informal chat instead.",
        "correct": false,
        "feedback": "The formal invite was a deliberate choice. Preparing for it is the safer reading."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-13-a",
    "normId": "WP-13-not-the-right-forum",
    "category": "Workplace",
    "setup": "In a team meeting you raise a budget concern. The lead replies, “This might not be the right forum for that.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Follow up directly afterwards: “Could we find 15 minutes to go through the budget point?”",
        "correct": true,
        "feedback": "It usually means they don't want to address it in front of the group, not that the point is wrong."
      },
      {
        "text": "Wait for them to bring it up again.",
        "correct": false,
        "feedback": "Without a follow-up from you, it usually never comes back."
      },
      {
        "text": "Assume the budget concern doesn't matter.",
        "correct": false,
        "feedback": "It's the venue they're avoiding, not the issue. A direct follow-up gets it heard."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-15-a",
    "normId": "WP-15-meeting-jargon-deferral",
    "category": "Workplace",
    "setup": "A colleague loves your idea in a meeting. The lead says, “Let's park that for now.” No date or owner is mentioned.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask for a next step on the spot: “Who should bring this back, and roughly when?”",
        "correct": true,
        "feedback": "Without a concrete next step, a parked topic often quietly drops."
      },
      {
        "text": "Assume it will be revisited soon.",
        "correct": false,
        "feedback": "It usually isn't, unless someone owns it and a date is set."
      },
      {
        "text": "Take it as a polite no and forget it.",
        "correct": false,
        "feedback": "It may not be a no. Asking for an owner and a date finds out."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-2-a",
    "normId": "HC-2-referral-wait-silence",
    "category": "Healthcare",
    "setup": "Six weeks after a GP referral you've heard nothing. The letter said, “We'll be in touch once it's been reviewed.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Call the surgery or referral line to check the status.",
        "correct": true,
        "feedback": "Long waits reflect NHS process and backlog, not a dropped case. Asking is normal and expected."
      },
      {
        "text": "Assume the request was lost, and give up.",
        "correct": false,
        "feedback": "Silence is common and doesn't mean your case was dropped. Checking is how you find out."
      },
      {
        "text": "Wait quietly, since calling would be rude.",
        "correct": false,
        "feedback": "It isn't rude. Calling to check status is normal and expected."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-3-a",
    "normId": "HC-3-nhs-111-triage-language",
    "category": "Healthcare",
    "setup": "You phone 111 about a minor problem. The call ends with a long list: “If you get any of these symptoms, go to A&E immediately.”",
    "prompt": "How do you read the list?",
    "options": [
      {
        "text": "As standard safety wording. Ask how urgent your case is specifically.",
        "correct": true,
        "feedback": "It's standard safety wording given to nearly everyone, not a specific escalation of your case."
      },
      {
        "text": "As a sign your case is more serious than they said.",
        "correct": false,
        "feedback": "That's the common panic. The list is given to almost everyone."
      },
      {
        "text": "As something to ignore completely.",
        "correct": false,
        "feedback": "Better to ask: “How urgent is this specifically?” That tells you what it means for you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-4-a",
    "normId": "HC-4-pharmacist-first-point-of-contact",
    "category": "Healthcare",
    "setup": "You ring the surgery about a sore throat. The receptionist says, “Try the pharmacy first.”",
    "prompt": "What does that mean?",
    "options": [
      {
        "text": "A standard route for minor issues. If symptoms persist, ask for a GP appointment.",
        "correct": true,
        "feedback": "For minor issues it's an expected referral, not the surgery deflecting or downgrading your concern."
      },
      {
        "text": "That the surgery is brushing you off.",
        "correct": false,
        "feedback": "It's a standard route for minor conditions, not a dismissal."
      },
      {
        "text": "That you should never see a GP for this.",
        "correct": false,
        "feedback": "Not never. If symptoms persist after the pharmacy, that's the natural point to ask for a GP."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-5-a",
    "normId": "HC-5-patient-advocating-for-self",
    "category": "Healthcare",
    "setup": "Your GP appointment is nearly over. The doctor says briefly, “Anything else?” You have a second, worrying symptom you haven't mentioned.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Say it directly: “Yes, there's one more thing I want to cover.”",
        "correct": true,
        "feedback": "The system expects you to raise what matters. Staying quiet out of politeness reads as “nothing else”."
      },
      {
        "text": "Say “No, that's all” so you don't take up their time.",
        "correct": false,
        "feedback": "That's read as nothing else, and the appointment ends without your main concern."
      },
      {
        "text": "Hint at it and hope the doctor picks up on it.",
        "correct": false,
        "feedback": "A hint usually isn't picked up. State what matters directly and early."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-8-a",
    "normId": "HC-8-watchful-waiting-approach",
    "category": "Healthcare",
    "setup": "For a minor symptom the GP says, “Let's give it two weeks and see how it settles.” No tests or referral are offered.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask what signs would mean coming back sooner than two weeks.",
        "correct": true,
        "feedback": "It's a deliberate strategy for conditions that often settle on their own, not a sign your concern is unimportant."
      },
      {
        "text": "Conclude the GP isn't taking you seriously.",
        "correct": false,
        "feedback": "Waiting and reviewing is standard practice for many minor conditions."
      },
      {
        "text": "Don't go back at all unless it gets much worse.",
        "correct": false,
        "feedback": "The plan depends on you returning if it hasn't improved, so ask what to watch for."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-9-a",
    "normId": "HC-9-econsult-online-triage-form",
    "category": "Healthcare",
    "setup": "You ring your surgery and are told, “Please fill in the online form instead.”",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As the standard route. Use the form, and be specific and complete.",
        "correct": true,
        "feedback": "It's the surgery's standard way of managing demand, not a barrier set against your request."
      },
      {
        "text": "As a brush-off. Keep ringing until someone answers.",
        "correct": false,
        "feedback": "The form is how requests are normally triaged, often faster than expected."
      },
      {
        "text": "Fill it in with just a few words to save time.",
        "correct": false,
        "feedback": "Be specific and complete. A detailed form is easier to triage properly."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-10-a",
    "normId": "HC-10-same-day-urgent-only-gatekeeping",
    "category": "Healthcare",
    "setup": "You call for an appointment and the receptionist asks, “Can I ask what it's regarding, so I can see who's best to help?” You feel embarrassed.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Answer factually and specifically, including how long you've had it.",
        "correct": true,
        "feedback": "It's a standard triage question asked of everyone, not a test of whether your concern is valid."
      },
      {
        "text": "Refuse to say, since it's private.",
        "correct": false,
        "feedback": "The question is routine. Answering helps route you to the right type of appointment."
      },
      {
        "text": "Stay vague so you don't seem to be fussing.",
        "correct": false,
        "feedback": "Specifics get you routed faster. A vague answer makes the right appointment harder to pick."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-11-a",
    "normId": "HC-11-ae-triage-wait-times",
    "category": "Healthcare",
    "setup": "At A&E a nurse sees you briefly, then you wait in the main waiting area for hours with no update.",
    "prompt": "What does the long wait most likely mean?",
    "options": [
      {
        "text": "You've been assessed as less urgent than others. It's fine to ask for a rough update.",
        "correct": true,
        "feedback": "A long wait after triage usually means lower urgency compared with others, not that you were overlooked."
      },
      {
        "text": "That you've been forgotten.",
        "correct": false,
        "feedback": "You've been assessed. Asking the desk for a rough update is acceptable."
      },
      {
        "text": "That something is seriously wrong and nobody is telling you.",
        "correct": false,
        "feedback": "The opposite is more likely. More urgent cases are seen first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-15-a",
    "normId": "HC-15-second-opinion-request-phrasing",
    "category": "Healthcare",
    "setup": "You want a second opinion on a diagnosis, but it feels rude to say so to your GP.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“I'd like a second opinion. Could you point me toward how to arrange that?”",
        "correct": true,
        "feedback": "A plain request is acceptable. Softening is a politeness habit, not a sign you shouldn't ask."
      },
      {
        "text": "“Is there anyone else I could possibly speak to?” and leave it there.",
        "correct": false,
        "feedback": "The hedged version can go unnoticed. Say plainly that you want a second opinion."
      },
      {
        "text": "Wait a few weeks, then try again.",
        "correct": false,
        "feedback": "Delay doesn't help. It's a normal, accepted request, so make it plainly now."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-2-a",
    "normId": "HL-2-passive-aggressive-written-notice",
    "category": "Housing & landlord",
    "setup": "Your neighbour leaves a note: “Just a friendly reminder about bin day, hope you don't mind me asking.” It's the third note.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a firm complaint. Respond to the practical issue directly.",
        "correct": true,
        "feedback": "The politeness is a buffer. The underlying message is a firm complaint, not a casual suggestion."
      },
      {
        "text": "As a casual suggestion you can leave for now.",
        "correct": false,
        "feedback": "A repeated “friendly” note means the issue isn't casual."
      },
      {
        "text": "As a joke between neighbours.",
        "correct": false,
        "feedback": "Nothing playful. The soft wording hides a real complaint, so deal with the practical issue."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-3-a",
    "normId": "HL-3-inventory-check-in-formality",
    "category": "Housing & landlord",
    "setup": "When you move in, the landlord hands you a long inventory listing every mark and scuff, and seems keen to have it signed quickly.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Check it thoroughly, and add notes and photos for anything inaccurate before signing.",
        "correct": true,
        "feedback": "The inventory is your main protection against unfair deposit deductions later."
      },
      {
        "text": "Sign quickly to seem agreeable.",
        "correct": false,
        "feedback": "Rushing is how people end up unable to dispute a deduction for a mark that was already there."
      },
      {
        "text": "Skip it, since a long list is excessive.",
        "correct": false,
        "feedback": "It isn't excessive. Skipping a careful read works against your own interest."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-6-a",
    "normId": "HL-6-shared-house-kitchen-etiquette-notes",
    "category": "Housing & landlord",
    "setup": "A note appears on the fridge: “Can everyone please remember to wash up their own dishes :)” You've left a few plates.",
    "prompt": "How do you read the note?",
    "options": [
      {
        "text": "As the end of a build-up. Respond promptly, in person if you can.",
        "correct": true,
        "feedback": "By the time a note appears, the issue has usually been building for a while."
      },
      {
        "text": "As a light, general reminder.",
        "correct": false,
        "feedback": "The smiley is friendly, but it's rarely the first time it has bothered someone."
      },
      {
        "text": "As aimed at someone else, so ignore it.",
        "correct": false,
        "feedback": "Notes like this rarely come from nowhere. A prompt, direct response beats hoping it's about someone else."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-7-a",
    "normId": "HL-7-viewing-feedback-silence",
    "category": "Housing & landlord",
    "setup": "After a flat viewing the agent says, “We'll let you know.” Two weeks pass with no contact.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Treat it as a likely no, keep viewing other flats, and follow up once politely.",
        "correct": true,
        "feedback": "Silence past the expected time functions as the rejection. An explicit “no” is uncommon."
      },
      {
        "text": "Keep waiting. They said they'd let you know.",
        "correct": false,
        "feedback": "That's how people miss other options. Silence past the timeframe is usually the answer."
      },
      {
        "text": "Phone every day until you get a clear answer.",
        "correct": false,
        "feedback": "One polite follow-up is enough. Meanwhile keep looking at other properties."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-8-a",
    "normId": "HL-8-referencing-in-progress-delay",
    "category": "Housing & landlord",
    "setup": "You've applied for a flat. For over a week the agent keeps saying, “Referencing is still being processed, we'll update you as soon as we hear.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask which reference is outstanding, and offer to help chase it.",
        "correct": true,
        "feedback": "Referencing depends on outside providers replying, which is often the real bottleneck."
      },
      {
        "text": "Assume you've been rejected.",
        "correct": false,
        "feedback": "A slow previous landlord or employer can hold things up without any rejection."
      },
      {
        "text": "Keep waiting without asking.",
        "correct": false,
        "feedback": "A specific question gets further: which reference is outstanding, and can you help?"
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-12-a",
    "normId": "HL-12-income-affordability-multiplier",
    "category": "Housing & landlord",
    "setup": "A letting agent says your income must be at least a set multiple of the rent. Yours is just below, but you have strong savings.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask whether savings or a larger upfront payment could be offered instead.",
        "correct": true,
        "feedback": "The multiplier is a standard formula, not a judgement of you. Alternatives are worth asking about."
      },
      {
        "text": "Take it as a rejection and stop pursuing this flat.",
        "correct": false,
        "feedback": "It's a uniform formula, not a verdict on you. Asking about alternatives costs nothing."
      },
      {
        "text": "Argue that the rule is unfair.",
        "correct": false,
        "feedback": "The formula is applied to everyone. Offering a concrete alternative is the better route."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-14-a",
    "normId": "HL-14-permitted-occupiers-clause",
    "category": "Housing & landlord",
    "setup": "Your partner has been staying with you for a few months. The tenancy lists named occupiers only. The landlord seemed relaxed when you mentioned it casually.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask for a written update to the agreement.",
        "correct": true,
        "feedback": "A relaxed landlord doesn't override the written clause. A long-term guest needs formal agreement."
      },
      {
        "text": "Rely on the landlord's friendly reaction.",
        "correct": false,
        "feedback": "A casual OK isn't a written change, and a long stay can still breach the clause."
      },
      {
        "text": "Say nothing, since nobody has complained.",
        "correct": false,
        "feedback": "Silence leaves the clause breached. Beyond a couple of weeks, ask for it in writing."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-15-a",
    "normId": "HL-15-break-clause-deferral",
    "category": "Housing & landlord",
    "setup": "You ask your landlord to let you leave a few months early. He says, “Let me check with the agency and get back to you.” Nothing follows.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask for an answer by a specific date, since you need to plan.",
        "correct": true,
        "feedback": "It may be a genuine step, but it can also buy time. A deadline moves things forward."
      },
      {
        "text": "Wait for them to come back to you.",
        "correct": false,
        "feedback": "Waiting leaves it open-ended. A date makes a reply, or a refusal, harder to avoid."
      },
      {
        "text": "Take the silence as permission to leave.",
        "correct": false,
        "feedback": "Silence isn't agreement. Ask for a clear answer by a date you name."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-16-a",
    "normId": "HL-16-end-of-tenancy-cleaning-checklist",
    "category": "Housing & landlord",
    "setup": "Before moving out you clean the whole flat thoroughly yourself. The inventory mentions a “professional clean” standard.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Check the exact cleaning clause, and book a professional clean with a receipt if it asks for one.",
        "correct": true,
        "feedback": "Your own cleaning may not meet the contract's standard, however clean the flat looks."
      },
      {
        "text": "Rely on your own deep clean.",
        "correct": false,
        "feedback": "Without the professional service and receipt, the cleaning standard may still not be met."
      },
      {
        "text": "Ask the landlord to judge it by eye.",
        "correct": false,
        "feedback": "The contract sets the standard, not how the flat looks. Check the exact clause first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-2-a",
    "normId": "JS-2-salary-negotiation-indirectness",
    "category": "Job search",
    "setup": "In a first interview they ask, “What's your expected salary range?” before mentioning any number.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Give a confident, well-researched range.",
        "correct": true,
        "feedback": "It's a negotiation norm. Stating a researched range is expected, not pushy."
      },
      {
        "text": "Say “I'm flexible, whatever you think is fair.”",
        "correct": false,
        "feedback": "A vague answer leaves you without a position and can read as unprepared."
      },
      {
        "text": "Say you'd rather not talk about money yet.",
        "correct": false,
        "feedback": "It's a routine question here. Deflecting it reads as unprepared."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-3-a",
    "normId": "JS-3-cv-personal-statement-understatement",
    "category": "Job search",
    "setup": "Your CV is full of words like “exceptional” and “outstanding”. UK recruiters give polite but cool feedback.",
    "prompt": "What do you change?",
    "options": [
      {
        "text": "Lead with specific, factual results: numbers and concrete outcomes.",
        "correct": true,
        "feedback": "Understated, evidence-led writing reads as credible. Heavy self-promotion can read as less so."
      },
      {
        "text": "Make the claims even stronger to stand out.",
        "correct": false,
        "feedback": "In some UK sectors, extreme self-promotion can read as less credible."
      },
      {
        "text": "Remove your achievements to look modest.",
        "correct": false,
        "feedback": "Modesty doesn't mean hiding results. Let the numbers carry the weight, not the adjectives."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-4-a",
    "normId": "JS-4-recruiter-warm-language-non-commitment",
    "category": "Job search",
    "setup": "A recruiter tells you, “You're a really strong candidate, the client loved you.” No next step or date is mentioned.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As friendly encouragement. Ask for the next formal step and when you'll hear.",
        "correct": true,
        "feedback": "It's standard relationship-management language, not a reliable signal of where you stand."
      },
      {
        "text": "As a near-certain offer.",
        "correct": false,
        "feedback": "Warmth isn't commitment. Many candidates hear this and don't get an offer."
      },
      {
        "text": "As a lie to ignore.",
        "correct": false,
        "feedback": "It isn't a lie, just routine warmth. Ask what the next formal step is and by when."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-5-a",
    "normId": "JS-5-competency-question-structure-expectation",
    "category": "Job search",
    "setup": "In an interview you're asked, “Tell me about a time you had to deal with a difficult colleague.” The interviewer waits.",
    "prompt": "How do you answer?",
    "options": [
      {
        "text": "Give a specific example: the situation, your task, what you did and the result.",
        "correct": true,
        "feedback": "A structured, specific past example is what's being assessed."
      },
      {
        "text": "Explain your general approach: “I always try to communicate well.”",
        "correct": false,
        "feedback": "A general philosophy reads as unprepared."
      },
      {
        "text": "Say you've never had a difficult colleague.",
        "correct": false,
        "feedback": "That doesn't answer the question. Prepare real examples in advance."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-6-a",
    "normId": "JS-6-notice-period-negotiation-norm",
    "category": "Job search",
    "setup": "In an interview they ask, “When could you start?” You have a month's notice at your current job.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "State your real notice period, and add that you're keen to start as soon as it allows.",
        "correct": true,
        "feedback": "Employers plan around standard notice periods. Honesty here is the norm, not a risk."
      },
      {
        "text": "Say you can start immediately, to seem keen.",
        "correct": false,
        "feedback": "A shorter-than-normal answer isn't needed to show keenness."
      },
      {
        "text": "Avoid answering until you have an offer.",
        "correct": false,
        "feedback": "It's a routine question. A plain answer with some enthusiasm works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-7-a",
    "normId": "JS-7-networking-coffee-informality",
    "category": "Job search",
    "setup": "A senior contact in your field says, “Would you fancy a coffee sometime to chat about the sector?”",
    "prompt": "How do you treat it?",
    "options": [
      {
        "text": "As a real opportunity. Prepare a few relevant points or questions.",
        "correct": true,
        "feedback": "It's a standard, taken-seriously way to build a professional relationship."
      },
      {
        "text": "As purely social, so go without preparing.",
        "correct": false,
        "feedback": "It's informal in tone but not in purpose. Prepare as you would for a formal meeting."
      },
      {
        "text": "As vague politeness that probably won't happen.",
        "correct": false,
        "feedback": "It's a genuine invitation. Treat it as a real conversation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-8-a",
    "normId": "JS-8-keep-cv-on-file-soft-rejection",
    "category": "Job search",
    "setup": "After an unsuccessful interview the email ends: “We'll keep your CV on file for future opportunities.”",
    "prompt": "What does that mean?",
    "options": [
      {
        "text": "The process has ended. If you're interested later, follow up in a few months.",
        "correct": true,
        "feedback": "It's a polite way to close without an explicit “no”, not a commitment to revisit you."
      },
      {
        "text": "That they'll contact you when a role comes up.",
        "correct": false,
        "feedback": "Don't wait to be contacted. The phrase usually ends that process."
      },
      {
        "text": "That the decision is still open.",
        "correct": false,
        "feedback": "It isn't. Treat this process as over, and follow up yourself if you want future roles."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-12-a",
    "normId": "JS-12-finalizing-internally-offer-delay",
    "category": "Job search",
    "setup": "After a verbal job offer, the employer says, “We're just waiting on some internal sign-off.” No date is given.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask roughly when to expect the formal offer.",
        "correct": true,
        "feedback": "Such delays are usually administrative, not a sign the decision is still undecided."
      },
      {
        "text": "Assume the offer is being withdrawn.",
        "correct": false,
        "feedback": "It's most often approvals and paperwork. Anxious guessing doesn't help."
      },
      {
        "text": "Wait quietly and say nothing.",
        "correct": false,
        "feedback": "Asking for a timeframe is fine, and it gets you something concrete."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-15-a",
    "normId": "JS-15-meet-the-team-informal-framing",
    "category": "Job search",
    "setup": "Before a final stage you're told, “It's just an informal chat to meet the team, no pressure.”",
    "prompt": "How do you approach it?",
    "options": [
      {
        "text": "Prepare as for a formal interview, with questions and examples ready.",
        "correct": true,
        "feedback": "Team members are usually asked for feedback afterwards, so the chat is genuinely assessed."
      },
      {
        "text": "Relax completely and go without preparing.",
        "correct": false,
        "feedback": "The casual framing is real, but the feedback it produces counts."
      },
      {
        "text": "Treat it as a pure social event and avoid talking about work.",
        "correct": false,
        "feedback": "It's assessed even if it doesn't feel like an interview, so have questions and examples ready."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-3-a",
    "normId": "SO-3-queueing-norm-enforcement",
    "category": "Social",
    "setup": "In a bakery, a loose group of people stands near the counter. You can't tell whether it's a queue.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask, “Sorry, is this the end of the queue?”",
        "correct": true,
        "feedback": "It's a completely normal question. Queue order is taken seriously as a matter of fairness."
      },
      {
        "text": "Walk to the front of the group.",
        "correct": false,
        "feedback": "That prompts visible disapproval. Queueing is taken seriously."
      },
      {
        "text": "Stand nearby and watch to work out who's next.",
        "correct": false,
        "feedback": "Asking directly is normal and expected. Guessing risks stepping out of order."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-4-a",
    "normId": "SO-4-small-talk-weather-function",
    "category": "Social",
    "setup": "A shopkeeper says, “Terrible weather we're having, isn't it?”",
    "prompt": "How do you answer?",
    "options": [
      {
        "text": "Briefly agree: “I know, awful, isn't it!”",
        "correct": true,
        "feedback": "It's a greeting ritual to set a friendly tone, not a real question about the weather."
      },
      {
        "text": "Give your detailed view of the forecast.",
        "correct": false,
        "feedback": "A long answer to a ritual remark comes across as oddly serious."
      },
      {
        "text": "Say nothing, since it isn't really a question.",
        "correct": false,
        "feedback": "The reply is part of the greeting. A brief agreement keeps the tone friendly."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-5-a",
    "normId": "SO-5-punctuality-for-social-events",
    "category": "Social",
    "setup": "You're invited to a friend's casual dinner for 7pm. You arrive at exactly 7pm and the host is still cooking.",
    "prompt": "What would have been better?",
    "options": [
      {
        "text": "Arriving 10 to 15 minutes after the stated time.",
        "correct": true,
        "feedback": "For casual home events the time is treated as approximate. Formal and work events are different."
      },
      {
        "text": "Arriving even earlier, to help.",
        "correct": false,
        "feedback": "Earlier makes it worse. Hosts often aren't ready on the dot."
      },
      {
        "text": "Arriving an hour late, to be safe.",
        "correct": false,
        "feedback": "Too far. About 10 to 15 minutes after is the usual margin for a casual invitation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-6-a",
    "normId": "SO-6-lets-do-this-again-closing-phrase",
    "category": "Social",
    "setup": "As you part, a new friend says, “We should totally do this again, let's not leave it so long next time.” No date is mentioned.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Suggest a specific time: “Would you be free sometime in the next couple of weeks?”",
        "correct": true,
        "feedback": "The feeling is usually genuine, but with no date it isn't a firm plan."
      },
      {
        "text": "Wait for them to send an invitation.",
        "correct": false,
        "feedback": "It may not happen without a specific date. If you're keen, suggest one."
      },
      {
        "text": "Take it as a polite lie and drop it.",
        "correct": false,
        "feedback": "It's usually sincere, just not a plan. A concrete suggestion turns it into one."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-7-a",
    "normId": "SO-7-round-buying-pub-culture",
    "category": "Social",
    "setup": "At the pub a colleague says, “I'll get this round.” Later, as the evening goes on, he looks around the group expectantly.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Offer to buy the next round, even a non-alcoholic one if you prefer.",
        "correct": true,
        "feedback": "Rounds are reciprocal. Consistently not taking a turn can be quietly noticed."
      },
      {
        "text": "Say thanks and let others keep buying.",
        "correct": false,
        "feedback": "Letting others buy all evening is noticed, even if nobody says so."
      },
      {
        "text": "Pay him back for your own drink at the end.",
        "correct": false,
        "feedback": "That settles the cost but misses the norm: taking a turn is how you take part."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-9-a",
    "normId": "SO-9-emotional-understatement-not-too-bad",
    "category": "Social",
    "setup": "You ask a colleague how a big presentation went. They answer, “Not too bad, thanks.”",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "It could mean anything. Ask what part felt strongest.",
        "correct": true,
        "feedback": "These phrases are used for very good and for difficult outcomes alike."
      },
      {
        "text": "As lukewarm, so it probably went badly.",
        "correct": false,
        "feedback": "The same words are often used for something that went very well."
      },
      {
        "text": "As proof it went perfectly.",
        "correct": false,
        "feedback": "It might have, or it might have been hard. Ask a specific question to find out."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-11-a",
    "normId": "SO-11-dinner-party-gift-bringing-norm",
    "category": "Social",
    "setup": "A friend invites you with: “Come round for dinner on Friday.” Nothing is said about bringing anything.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Bring a small item, such as wine, dessert or flowers.",
        "correct": true,
        "feedback": "The expectation is assumed as common knowledge, so it doesn't need to be stated."
      },
      {
        "text": "Go empty-handed, since nothing was asked.",
        "correct": false,
        "feedback": "Most other guests will bring something. Not being asked doesn't mean not expected."
      },
      {
        "text": "Offer to pay towards the food.",
        "correct": false,
        "feedback": "That's more than is expected. A small gift such as wine or flowers is the usual gesture."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-13-a",
    "normId": "SO-13-deadpan-irony-unflagged",
    "category": "Social",
    "setup": "Looking at a chaotic project plan, a colleague says, without a smile, “Oh, that's going well, then.”",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As dry humour. A light “ha, fair enough” works.",
        "correct": true,
        "feedback": "Deadpan sarcasm intentionally has no tonal cue. It isn't meant literally."
      },
      {
        "text": "Literally, and ask what they're worried about.",
        "correct": false,
        "feedback": "A remark that contradicts the obvious facts is often dry humour, not information."
      },
      {
        "text": "As an insult, and take offence.",
        "correct": false,
        "feedback": "A straight face is part of the style. A light reply works safely either way."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-15-a",
    "normId": "SO-15-compliment-deflection-response",
    "category": "Social",
    "setup": "You tell a colleague, “That presentation was brilliant.” She replies, “Oh, it was nothing, really.”",
    "prompt": "What do you say next?",
    "options": [
      {
        "text": "A warm restatement: “Well, I thought it was great.”",
        "correct": true,
        "feedback": "It's a politeness habit, not a real denial. A brief warm restatement lands well."
      },
      {
        "text": "Insist on proving it with examples until she agrees.",
        "correct": false,
        "feedback": "No need to press. Take the deflection lightly."
      },
      {
        "text": "Agree that it was nothing special.",
        "correct": false,
        "feedback": "She doesn't mean it literally. Taking it literally misses the point."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-1-a",
    "normId": "AB-1-council-tax-band-query-formality",
    "category": "Admin & bureaucracy",
    "setup": "You want to ask the council a quick question. The website offers only a multi-step form or a phone line with a long wait.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Use the form or phone line, and say clearly at the start if it's urgent.",
        "correct": true,
        "feedback": "It's the standard way UK councils handle queries, not a sign they don't care."
      },
      {
        "text": "Keep looking for a direct email address to a person.",
        "correct": false,
        "feedback": "A faster informal route usually doesn't exist. The official channel is the expected one."
      },
      {
        "text": "Give up on the question.",
        "correct": false,
        "feedback": "The form works, even for small queries. Note any urgency at the start of the request."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-3-a",
    "normId": "AB-3-gp-registration-proof-of-address-strictness",
    "category": "Admin & bureaucracy",
    "setup": "At a GP registration desk the clerk says, “We can't accept that. It needs to be a utility bill or bank statement from the last three months.” You offered your tenancy agreement.",
    "prompt": "How do you read this?",
    "options": [
      {
        "text": "As a fixed rule for everyone. Next time, ask in advance which documents are accepted.",
        "correct": true,
        "feedback": "It's an institutional rule applied uniformly, not a judgement about you or your case."
      },
      {
        "text": "As the clerk singling you out.",
        "correct": false,
        "feedback": "It's the same for everyone. Asking in advance saves a wasted trip."
      },
      {
        "text": "As her choice, so ask her to make an exception.",
        "correct": false,
        "feedback": "Fixed rules leave staff little discretion. Check the requirements before you go."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-4-a",
    "normId": "AB-4-hmrc-letter-response-urgency-mismatch",
    "category": "Admin & bureaucracy",
    "setup": "An HMRC letter about a small discrepancy says, “You may be liable for a penalty.” The tone is intimidating.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Read what's actually being asked, and call HMRC to check how urgent it is.",
        "correct": true,
        "feedback": "Formal legal wording is used across all HMRC letters, serious or trivial, so tone doesn't show urgency."
      },
      {
        "text": "Treat it as a serious problem and panic.",
        "correct": false,
        "feedback": "The tone alone isn't a guide. Read the actual content and check."
      },
      {
        "text": "Ignore it, since the wording is just boilerplate.",
        "correct": false,
        "feedback": "Don't ignore it either. Read it and call to clarify the real urgency."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-5-a",
    "normId": "AB-5-visa-immigration-advisor-directness-expectation",
    "category": "Admin & bureaucracy",
    "setup": "You ask an immigration advisor, “Is my situation okay?” and get a general, hedged answer: “It depends, generally speaking.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask specific, direct questions, such as exactly which figures or dates are required.",
        "correct": true,
        "feedback": "Advisors tend to answer in kind: a specific question gets a specific, more useful answer."
      },
      {
        "text": "Take the answer as reassurance.",
        "correct": false,
        "feedback": "It's a general reply to a general question, not confirmation of your case."
      },
      {
        "text": "Ask the same broad question again, more firmly.",
        "correct": false,
        "feedback": "A narrower question is what gets a specific answer."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-8-a",
    "normId": "AB-8-please-allow-28-days-boilerplate",
    "category": "Admin & bureaucracy",
    "setup": "An official form says, “Please allow up to 28 days for a response.” You're worried it'll take the full month.",
    "prompt": "How do you treat the figure?",
    "options": [
      {
        "text": "As an upper limit. Follow up only after the full window has passed.",
        "correct": true,
        "feedback": "It's a safety margin covering worst cases, not an average, and replies are often faster."
      },
      {
        "text": "As the expected wait, so plan around 28 days.",
        "correct": false,
        "feedback": "Responses often arrive sooner. It's a maximum."
      },
      {
        "text": "As a cue to chase after a week.",
        "correct": false,
        "feedback": "Chasing before the stated window ends is premature. Wait until it has passed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-9-a",
    "normId": "AB-9-energy-switch-retention-script",
    "category": "Admin & bureaucracy",
    "setup": "You try to cancel a broadband contract. The agent says, “Before you go, can I offer you our best available rate?”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Compare it with the new deal, and decline if the new one is better.",
        "correct": true,
        "feedback": "It's a standard retention step used broadly, not a special effort because you're valued."
      },
      {
        "text": "Accept at once, since it must be a special offer.",
        "correct": false,
        "feedback": "It's offered routinely. Judge it against your alternative on its own merits."
      },
      {
        "text": "Feel you have to take it, to be polite.",
        "correct": false,
        "feedback": "Declining is fine. A polite “no thanks” works if your other offer is better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-10-a",
    "normId": "AB-10-tv-licence-enforcement-letter-tone",
    "category": "Admin & bureaucracy",
    "setup": "You don't own a television. A letter arrives: “Our records show no licence is held at this address.” It sounds threatening.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Complete the “no licence needed” declaration on their website.",
        "correct": true,
        "feedback": "These letters go to many households and aren't evidence of an investigation into you."
      },
      {
        "text": "Panic, since they must be investigating you.",
        "correct": false,
        "feedback": "They're sent widely, even to people who don't watch broadcast TV."
      },
      {
        "text": "Ignore it completely.",
        "correct": false,
        "feedback": "A short online declaration settles it, so there's no need to worry, and it's easy to do."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-12-a",
    "normId": "AB-12-school-waiting-list-ack-letter",
    "category": "Admin & bureaucracy",
    "setup": "You apply for a nursery place and receive a letter: “Your application has been received and added to our records.”",
    "prompt": "What does the letter tell you?",
    "options": [
      {
        "text": "Only that it was received. Ask separately where you are on the waiting list.",
        "correct": true,
        "feedback": "It's procedural confirmation. Its formal tone says nothing about how soon a place might be offered."
      },
      {
        "text": "That a place is likely soon.",
        "correct": false,
        "feedback": "It doesn't say that. It carries no signal about timing."
      },
      {
        "text": "That your application has been refused.",
        "correct": false,
        "feedback": "It's neutral confirmation. If timing matters, ask directly."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-14-a",
    "normId": "AB-14-ombudsman-escalation-language",
    "category": "Admin & bureaucracy",
    "setup": "A company's final complaint reply ends: “If you're not satisfied, you can refer this to the Ombudsman.” You're still unhappy.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Say plainly: “If this isn't resolved, I'll take it to the ombudsman next.”",
        "correct": true,
        "feedback": "Mentioning the ombudsman is a normal, non-confrontational step in the process."
      },
      {
        "text": "Avoid mentioning it, since that would seem aggressive.",
        "correct": false,
        "feedback": "It isn't aggressive. The phrase appears on final replies as standard wording."
      },
      {
        "text": "Treat the line as a sign your complaint was especially serious.",
        "correct": false,
        "feedback": "It's boilerplate on final replies, whatever the complaint. Treat it as an option, not a signal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-2-a",
    "normId": "ED-2-dissertation-supervisor-email-formality",
    "category": "Education",
    "setup": "You sent your dissertation supervisor a detailed question. Two days later you get a reply: two short lines, no greeting, no sign-off.",
    "prompt": "How do you read the reply?",
    "options": [
      {
        "text": "Take it at face value, and send a specific follow-up if you need more detail.",
        "correct": true,
        "feedback": "Brevity reflects time pressure across many students, not a verdict on your question or your work."
      },
      {
        "text": "Decide your supervisor isn't taking your project seriously.",
        "correct": false,
        "feedback": "Short, fast replies usually mean a supervisor with many students, not disinterest in you or your project."
      },
      {
        "text": "Reply apologising for taking their time, and drop the question.",
        "correct": false,
        "feedback": "There's no need to withdraw it. If you need more, ask a specific follow-up or request a short meeting."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-3-a",
    "normId": "ED-3-extension-request-norm",
    "category": "Education",
    "setup": "A coursework deadline is three days away and a difficult month has left you far behind. Your university portal has a clearly signposted “extenuating circumstances” form.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Submit the form as early as you can, with the evidence it asks for.",
        "correct": true,
        "feedback": "Using the formal process is routine administration, not an admission of failure."
      },
      {
        "text": "Push through alone and hand in weaker work rather than ask.",
        "correct": false,
        "feedback": "Embarrassment is the usual reason people skip it, but the process exists for exactly this and is treated as normal."
      },
      {
        "text": "Wait until the deadline has passed, then explain what happened.",
        "correct": false,
        "feedback": "The process works best used early, with the required evidence, not after the deadline."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-14-a",
    "normId": "ED-14-group-project-unequal-contribution-norm",
    "category": "Education",
    "setup": "In your group project, one member has done almost nothing. The module handbook mentions a peer-assessment form and says to raise concerns with the tutor if informal resolution fails. The deadline is three weeks away.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Raise it with the tutor, factually and with evidence, well before the deadline.",
        "correct": true,
        "feedback": "Universities expect this to happen and plan for it. Raising it factually isn't seen as complaining."
      },
      {
        "text": "Say nothing so you don't seem difficult, and accept the shared grade.",
        "correct": false,
        "feedback": "Staying silent is how a shared grade ends up not reflecting your own effort."
      },
      {
        "text": "Wait until the work is graded, then complain about the unequal effort.",
        "correct": false,
        "feedback": "Too late by then. Raise it well before the final deadline, not after grading."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-1-a",
    "normId": "ED-1-seminar-participation-expectation",
    "category": "Education",
    "setup": "In a seminar the tutor asks the room an open question and waits. Nobody speaks, and you're waiting politely to be invited.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Prepare one or two points beforehand, and volunteer them early.",
        "correct": true,
        "feedback": "Consistent silence reads as not having done the reading, not as politeness."
      },
      {
        "text": "Keep waiting to be invited to speak.",
        "correct": false,
        "feedback": "In seminars, contributing is expected, and silence is read very differently here."
      },
      {
        "text": "Speak only if the tutor calls on you by name.",
        "correct": false,
        "feedback": "By then it's been noticed that you didn't volunteer. Contributing early, even briefly, reads better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-4-a",
    "normId": "ED-4-plagiarism-citation-strictness",
    "category": "Education",
    "setup": "Your essay comes back with a high similarity score, and a letter invites you to an academic misconduct meeting. You paraphrased sources without citing them.",
    "prompt": "What's the lesson?",
    "options": [
      {
        "text": "Learn the required citation style early, and cite paraphrased ideas as well as quotes.",
        "correct": true,
        "feedback": "Automated checks don't distinguish intent. Unintentional poor citation can start the same process."
      },
      {
        "text": "Only direct quotes need citing.",
        "correct": false,
        "feedback": "Paraphrased ideas need citing too, or they can still trigger the checks."
      },
      {
        "text": "Rely on explaining your intentions if it comes up.",
        "correct": false,
        "feedback": "Intent isn't distinguished at the automated stage, so the safe route is to cite properly from the start."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-5-a",
    "normId": "ED-5-personal-tutor-checkin-brevity",
    "category": "Education",
    "setup": "Your personal tutor has a scheduled 15-minute check-in with standard questions: “How's the course going, any concerns?” You do have a real concern.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Say so directly: “There's actually something I wanted to flag.”",
        "correct": true,
        "feedback": "Tutors expect this, and the meeting will extend if needed."
      },
      {
        "text": "Keep to the standard answers because the slot is short.",
        "correct": false,
        "feedback": "The brevity is structural, not a sign the tutor can't help with something specific."
      },
      {
        "text": "Say nothing now and hope to book a separate meeting later.",
        "correct": false,
        "feedback": "A brief check-in doesn't mean there's no time for a concern. Raise it now."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-11-a",
    "normId": "ED-11-sen-support-request-process",
    "category": "Education",
    "setup": "You raise a concern about your child's reading difficulties. The school replies with information about a formal assessment pathway, not immediate help.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Start the formal request early, and ask what interim support is available meanwhile.",
        "correct": true,
        "feedback": "The formal route is expected and can take time, so starting early and asking about interim support helps."
      },
      {
        "text": "Take it as a refusal to help.",
        "correct": false,
        "feedback": "It's the standard route, not a refusal. Ask about interim support."
      },
      {
        "text": "Wait to see if things improve before starting it.",
        "correct": false,
        "feedback": "The assessment can take time, so starting early matters."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-12-a",
    "normId": "ED-12-headteacher-escalation-formality",
    "category": "Education",
    "setup": "You have an unresolved concern at your child's school. The website lists a complaints procedure: class teacher, head of year, headteacher, governors, each stage in writing.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Follow the stages in order, in writing at each stage.",
        "correct": true,
        "feedback": "It's the school's standard escalation process, not a confrontation."
      },
      {
        "text": "Go straight to the headteacher.",
        "correct": false,
        "feedback": "Skipping stages typically gets you sent back to the start."
      },
      {
        "text": "Raise it only verbally, to keep things friendly.",
        "correct": false,
        "feedback": "The procedure expects a written record at each stage."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-13-a",
    "normId": "ED-13-freshers-week-social-pressure",
    "category": "Education",
    "setup": "Your flatmates keep saying, “Everyone's going” about every freshers' week event. You're tired and unsure.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Pick a few events you like, and skip the rest.",
        "correct": true,
        "feedback": "“Everyone's going” is enthusiastic marketing, not a real obligation. Friend groups form over the following weeks."
      },
      {
        "text": "Go to every event, so you aren't left out.",
        "correct": false,
        "feedback": "Nobody expects it. Most students pick and choose."
      },
      {
        "text": "Skip all of them, since the groups are decided in week one.",
        "correct": false,
        "feedback": "A few you enjoy are still worth it, and groups form over the following weeks, not just in week one."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-16-a",
    "normId": "ED-16-feedback-on-essay-terse-comments",
    "category": "Education",
    "setup": "Your essay comes back with a few brief marginal comments and a short summary. You'd expected paragraphs of feedback.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask about a specific unclear comment: “Could you expand on what you meant by this?”",
        "correct": true,
        "feedback": "Brevity reflects marking volume, not that your work wasn't read or valued."
      },
      {
        "text": "Conclude the marker didn't read it properly.",
        "correct": false,
        "feedback": "Short comments are standard when a lot of work needs marking."
      },
      {
        "text": "Ignore the comments, since they're so short.",
        "correct": false,
        "feedback": "They're brief but useful, and a specific follow-up question gets you more."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-1-a",
    "normId": "DR-1-texting-pace-not-urgency",
    "category": "Dating & relationships",
    "setup": "You had a good first date. You text the next morning and they reply that evening, with no apology and no fuss. It keeps happening.",
    "prompt": "How do you read the slow replies?",
    "options": [
      {
        "text": "Judge interest by what the messages say and how consistent they are, and ask lightly if you're unsure.",
        "correct": true,
        "feedback": "Reply speed isn't treated as a strong signal of interest here. A relaxed pace is normal."
      },
      {
        "text": "Assume they've lost interest, and stop replying yourself.",
        "correct": false,
        "feedback": "That's the common mistake: the other person is often just not in the habit of texting quickly."
      },
      {
        "text": "Time every reply and read the gaps as signals.",
        "correct": false,
        "feedback": "Busyness and a relaxed pace are both normal, so the gaps alone tell you very little."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-2-a",
    "normId": "DR-2-lets-see-where-this-goes-ambiguity",
    "category": "Dating & relationships",
    "setup": "A few dates in, you ask where things stand. They smile and say: “Let's just see where this goes.”",
    "prompt": "What do you do with that?",
    "options": [
      {
        "text": "Take it as genuine openness, and if you want clarity, ask a more specific question later.",
        "correct": true,
        "feedback": "It usually reflects a real preference for not over-defining things early, not hidden reluctance about you."
      },
      {
        "text": "Treat it as a soft rejection and back away.",
        "correct": false,
        "feedback": "That's the misreading. In this context it's meant literally, as openness without a label yet."
      },
      {
        "text": "Push for a definite answer on the spot.",
        "correct": false,
        "feedback": "The phrase asks for room. If clarity matters, ask something more specific later, such as how they feel about where things are."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-11-a",
    "normId": "DR-11-declining-a-second-date-vague-language",
    "category": "Dating & relationships",
    "setup": "After a first date they message: “Really enjoyed meeting you, let's stay in touch!” Neither of you has suggested a second date.",
    "prompt": "You'd like to see them again. What do you do?",
    "options": [
      {
        "text": "Propose something specific: “I'd love to see you again. Are you free next week sometime?”",
        "correct": true,
        "feedback": "With no specific plan proposed, this phrase usually works as a gentle decline, so a concrete invitation is how you show interest."
      },
      {
        "text": "Reply “Sounds good, let's stay in touch!” and leave it open.",
        "correct": false,
        "feedback": "Echoing it leaves nothing arranged. The phrase is usually a polite way of ending things, not an invitation."
      },
      {
        "text": "Wait a few weeks for them to suggest a second date.",
        "correct": false,
        "feedback": "Waiting is the common mistake. The phrase is usually a gentle decline, not a promise to arrange something later."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-6-a",
    "normId": "DR-6-exclusivity-conversation-directness-expected",
    "category": "Dating & relationships",
    "setup": "You've been on several good dates. Nobody has talked about seeing other people.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Raise it directly: “I'd like to talk about whether we're seeing other people.”",
        "correct": true,
        "feedback": "Without an explicit conversation, exclusivity can't safely be assumed, however it feels."
      },
      {
        "text": "Assume you're exclusive, since it feels that way.",
        "correct": false,
        "feedback": "Neither person can safely assume it until it's discussed."
      },
      {
        "text": "Wait for them to bring it up.",
        "correct": false,
        "feedback": "It may not come up. Raising it directly once it feels relevant is the usual way."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-7-a",
    "normId": "DR-7-ghosting-normalized-explanation",
    "category": "Dating & relationships",
    "setup": "After a few good dates their messages stop. There's no explanation, and a week goes by.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Treat it as closed, and move on without chasing an explanation.",
        "correct": true,
        "feedback": "It's usually more about avoiding a difficult conversation than a verdict on you."
      },
      {
        "text": "Keep messaging until they explain.",
        "correct": false,
        "feedback": "After about a week with no reply, chasing for closure rarely helps. It's fine to move on."
      },
      {
        "text": "Decide you must have done something wrong.",
        "correct": false,
        "feedback": "It's frequently about the other person's avoidance, not a specific judgement about you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-8-a",
    "normId": "DR-8-breakup-softening-language",
    "category": "Dating & relationships",
    "setup": "They end things with: “It's not you, it's me. I just need to focus on myself.” You'd like more detail.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Accept it, and ask only practical questions, such as logistics or mutual friends.",
        "correct": true,
        "feedback": "It's a convention for ending things with minimal conflict. Pressing for more usually doesn't help."
      },
      {
        "text": "Press for a fuller, more literal explanation.",
        "correct": false,
        "feedback": "Pushing for a complete emotional account usually isn't productive."
      },
      {
        "text": "Take the words literally and ask how you can help them.",
        "correct": false,
        "feedback": "The phrase isn't meant literally. It's a softened way to end things."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-10-a",
    "normId": "DR-10-dating-app-messaging-norm",
    "category": "Dating & relationships",
    "setup": "On a dating app a match opens with a short message: “Loved the photo from Cornwall!” You'd expected something longer.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "Judge by how the conversation develops, not by the first message's length.",
        "correct": true,
        "feedback": "Length and effort of a first message aren't strongly linked to genuine interest."
      },
      {
        "text": "As low interest, so don't reply.",
        "correct": false,
        "feedback": "A short opener referencing your profile is normal."
      },
      {
        "text": "As proof they're keener than someone who writes more.",
        "correct": false,
        "feedback": "Length says little about interest either way. Let the conversation show it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-12-a",
    "normId": "DR-12-house-party-flirting-norm",
    "category": "Dating & relationships",
    "setup": "At a house party someone spends the evening chatting and teasing you, and keeps ending up near you. Nothing is said about interest.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As possible interest. If you're unsure, ask lightly: “Should we swap numbers?”",
        "correct": true,
        "feedback": "Sustained attention and banter are often how interest is signalled, without a direct statement."
      },
      {
        "text": "As nothing, since nobody said they like you.",
        "correct": false,
        "feedback": "No explicit statement doesn't mean no interest."
      },
      {
        "text": "As clear proof, so declare how you feel straight away.",
        "correct": false,
        "feedback": "It isn't proof either. A light, low-pressure question is the safe way to find out."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-14-a",
    "normId": "DR-14-partners-friends-approval-indirectness",
    "category": "Dating & relationships",
    "setup": "Your friends are polite to your new partner but a little less warm than usual. Nobody says anything negative.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a possible signal. Ask a close friend privately for their honest impression.",
        "correct": true,
        "feedback": "No negative comment doesn't necessarily mean full approval. Unstated coolness can be a real signal."
      },
      {
        "text": "As approval, since nobody objected.",
        "correct": false,
        "feedback": "Politeness isn't the same as approval."
      },
      {
        "text": "As all in your head, so ignore it.",
        "correct": false,
        "feedback": "It may be a real signal. A private question to a trusted friend settles it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-16-a",
    "normId": "DR-16-meeting-the-family-formal-occasion",
    "category": "Dating & relationships",
    "setup": "Your partner says, “Come for Sunday lunch and meet everyone.” It sounds casual.",
    "prompt": "How do you treat the invitation?",
    "options": [
      {
        "text": "As a meaningful occasion. Prepare, with a small gift and suitable dress.",
        "correct": true,
        "feedback": "Sunday lunch is often chosen deliberately for this milestone, whatever the tone of the invitation."
      },
      {
        "text": "As a casual meal, so turn up as you are.",
        "correct": false,
        "feedback": "It carries more weight than a casual visit."
      },
      {
        "text": "As too much, too soon, so decline politely.",
        "correct": false,
        "feedback": "Declining isn't needed. It's an invitation into their family life, worth preparing for."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-3-a",
    "normId": "MN-3-splitting-bill-evenly-default",
    "category": "Money & transactions",
    "setup": "At a casual group dinner someone says, “Shall we just split it evenly?” You only had a starter. The others had three courses.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Say lightly: “I only had a starter, would you mind if I paid a bit less?”",
        "correct": true,
        "feedback": "That's a normal, unremarkable thing to say when it's said plainly and lightly."
      },
      {
        "text": "Stay quiet so you don't seem petty, and pay an even share.",
        "correct": false,
        "feedback": "Raising it isn't petty. Staying quiet leaves you paying for food you didn't order."
      },
      {
        "text": "Insist that everyone itemises the bill line by line.",
        "correct": false,
        "feedback": "The even split is a casual convenience default. A light word is enough, with no formal itemising."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-4-a",
    "normId": "MN-4-salary-discussion-taboo",
    "category": "Money & transactions",
    "setup": "Over coffee you ask a new colleague, “So what do you earn?” They smile and say, “Oh, I do alright.”",
    "prompt": "What's going on?",
    "options": [
      {
        "text": "Pay is private, so it's a polite deflection. For a benchmark, talk about ranges or market rates instead.",
        "correct": true,
        "feedback": "It's a strong general norm, not evasiveness aimed at you. Asking directly was the misstep."
      },
      {
        "text": "They don't trust you personally.",
        "correct": false,
        "feedback": "It isn't aimed at you. Reticence about salary is shared even among close colleagues and friends."
      },
      {
        "text": "They're being modest, so ask again for the real figure.",
        "correct": false,
        "feedback": "Asking again would deepen the misstep. Frame pay around a range or market rate, not a personal question."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-10-a",
    "normId": "MN-10-treating-someone-no-expectation-of-repayment",
    "category": "Money & transactions",
    "setup": "A friend pays for your drinks and says, “Don't worry about it, I've got this.” You feel uncomfortable owing them.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Say a simple thank you, and treat them back naturally another time.",
        "correct": true,
        "feedback": "“I've got this” is a closed gesture, not the start of a tally to be evened out."
      },
      {
        "text": "Insist on paying them back on the spot.",
        "correct": false,
        "feedback": "That tends to feel slightly awkward to the friend, who didn't mean it to be repaid."
      },
      {
        "text": "Keep track of it as a debt to settle soon.",
        "correct": false,
        "feedback": "It isn't an informal debt. Thank them, and reciprocate naturally another time."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-1-a",
    "normId": "MN-1-tipping-optional-modest-norm",
    "category": "Money & transactions",
    "setup": "You've paid for a coffee at a café counter. Nobody prompts you to tip.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Don't tip. It isn't expected at counters.",
        "correct": true,
        "feedback": "Not tipping in everyday settings like cafés and takeaways is genuinely normal, not rude."
      },
      {
        "text": "Tip a large amount to be safe.",
        "correct": false,
        "feedback": "Not needed. Tipping isn't expected at counters, cafés or most takeaways."
      },
      {
        "text": "Feel embarrassed and apologise for not tipping.",
        "correct": false,
        "feedback": "There's nothing to apologise for. Not tipping here is normal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-2-a",
    "normId": "MN-2-service-charge-auto-added-notice",
    "category": "Money & transactions",
    "setup": "At a restaurant your bill includes a “discretionary service charge” added automatically. The service was fine.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Pay it. If service was poor, you can politely ask for it to be reduced.",
        "correct": true,
        "feedback": "In most cases it's fine to pay the standard charge. A polite request is acceptable if service was poor."
      },
      {
        "text": "Refuse to pay it, since it says discretionary.",
        "correct": false,
        "feedback": "“Discretionary” doesn't mean you should refuse. Paying is normal when service was fine."
      },
      {
        "text": "Pay it and add a large tip on top.",
        "correct": false,
        "feedback": "The charge is already for service, so a further tip isn't needed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-5-a",
    "normId": "MN-5-borrowing-money-awkwardness-indirect-language",
    "category": "Money & transactions",
    "setup": "A friend messages: “This is really awkward to ask, but could you lend me £50?” They hedge heavily.",
    "prompt": "How do you read the hedging?",
    "options": [
      {
        "text": "As shared discomfort about money, not a crisis. Answer the request plainly.",
        "correct": true,
        "feedback": "The hedging is a social convention. It doesn't mean the request is unusual."
      },
      {
        "text": "As a sign something is seriously wrong.",
        "correct": false,
        "feedback": "Awkward framing is common and doesn't signal a bigger problem."
      },
      {
        "text": "As a sign you must say yes.",
        "correct": false,
        "feedback": "You can agree or decline plainly. The awkward framing doesn't oblige you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-6-a",
    "normId": "MN-6-whos-paying-ambiguity-group-meal",
    "category": "Money & transactions",
    "setup": "When the bill arrives at a group meal, someone reaches for it slightly first and people exchange glances. Nobody says anything.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Suggest resolving it: “Shall we just split it?”",
        "correct": true,
        "feedback": "It's a normal, low-stakes pause. Naming it is well received."
      },
      {
        "text": "Wait silently until someone gives in.",
        "correct": false,
        "feedback": "It usually gets resolved quickly, but taking the initiative is welcome."
      },
      {
        "text": "Grab the bill and pay for everyone.",
        "correct": false,
        "feedback": "That isn't needed. A simple suggestion to split resolves it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-9-a",
    "normId": "MN-9-fixed-price-no-haggling-norm",
    "category": "Money & transactions",
    "setup": "In a high-street shop you like a jacket with a clear price tag.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Treat the price as fixed: pay it, or leave it.",
        "correct": true,
        "feedback": "Haggling in standard UK shops is unusual. Flexibility is mainly found at markets or secondhand sales."
      },
      {
        "text": "Offer a lower price.",
        "correct": false,
        "feedback": "Staff generally don't expect it, and it can make the exchange awkward."
      },
      {
        "text": "Ask for a discount because you're a new customer.",
        "correct": false,
        "feedback": "Marked prices are generally fixed. Negotiating mainly belongs to markets or private sales."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-11-a",
    "normId": "MN-11-charity-doorstep-direct-debit-solicitation",
    "category": "Money & transactions",
    "setup": "A street fundraiser in branded clothing says, “Have you got two minutes?” and holds up a tablet.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Say “not today, thanks” and keep walking.",
        "correct": true,
        "feedback": "A brief, polite no is completely normal and enough."
      },
      {
        "text": "Stop and explain in detail why you can't donate.",
        "correct": false,
        "feedback": "No explanation is needed. It's a standard approach, not a personal ask."
      },
      {
        "text": "Feel you have to listen for two minutes.",
        "correct": false,
        "feedback": "You don't. A short polite refusal while walking is normal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-12-a",
    "normId": "MN-12-arranged-vs-unarranged-overdraft-terminology",
    "category": "Money & transactions",
    "setup": "Your bank app says you've gone into an “unarranged overdraft”. You worry it means you've done something wrong.",
    "prompt": "What does it mean, and what do you do?",
    "options": [
      {
        "text": "It's standard terminology. If you'll need an overdraft, ask for an arranged limit in advance.",
        "correct": true,
        "feedback": "It's precise banking terminology, not a warning about your behaviour."
      },
      {
        "text": "That you're being accused of wrongdoing.",
        "correct": false,
        "feedback": "It's just a term for borrowing beyond an agreed limit."
      },
      {
        "text": "That it's the same as arranged, so there's nothing to do.",
        "correct": false,
        "feedback": "Not quite. Asking for an arranged limit in advance generally means lower fees."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-1-a",
    "normId": "TR-1-delay-repay-compensation-claim-norm",
    "category": "Transport & commuting",
    "setup": "Your train arrives 40 minutes late. No refund appears and nobody mentions compensation.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Check your operator's Delay Repay process online and submit a claim with your ticket details.",
        "correct": true,
        "feedback": "The scheme is real, but it relies on you claiming. For most tickets, nothing is issued automatically."
      },
      {
        "text": "Assume nothing can be done and move on.",
        "correct": false,
        "feedback": "Many passengers don't realise they're entitled to compensation. After a long delay, check your operator's rules."
      },
      {
        "text": "Wait for the money to arrive automatically.",
        "correct": false,
        "feedback": "It won't. The system relies entirely on the passenger noticing and submitting a claim."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-2-a",
    "normId": "TR-2-quiet-coach-etiquette",
    "category": "Transport & commuting",
    "setup": "You're on a phone call on a train when a passenger gives you a long, pointed look. Then you notice the “Quiet Coach” sign above the seats.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "End the call, and take any call in the vestibule or another carriage.",
        "correct": true,
        "feedback": "The quiet coach is enforced by fellow passengers as much as by staff, and it's meant seriously."
      },
      {
        "text": "Lower your voice and carry on, since no staff have said anything.",
        "correct": false,
        "feedback": "Staff aren't needed. Passengers enforce this carriage themselves, and the expectation is strong."
      },
      {
        "text": "Ignore the look. It's just one unfriendly person.",
        "correct": false,
        "feedback": "The look is the signal. Visible disapproval, even without a word, reflects a shared expectation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-8-a",
    "normId": "TR-8-excuse-me-this-is-my-stop-navigating-crowd",
    "category": "Transport & commuting",
    "setup": "The bus is packed and your stop is next. Standing passengers are between you and the door.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Say “excuse me, this is my stop” clearly a stop or two ahead, so people can move.",
        "correct": true,
        "feedback": "A spoken request, made early, is the expected way, and people usually move aside promptly."
      },
      {
        "text": "Squeeze through without saying anything.",
        "correct": false,
        "feedback": "Pushing past without speaking first is more likely to be read as rude."
      },
      {
        "text": "Wait until the doors are about to open, then ask.",
        "correct": false,
        "feedback": "That leaves people no time to move. Ask a stop or two ahead."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-3-a",
    "normId": "TR-3-give-up-seat-norm",
    "category": "Transport & commuting",
    "setup": "You're seated on a crowded train when someone with a “Baby on board” badge gets on. Other passengers are already glancing around.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Offer your seat straight away, without waiting to be asked.",
        "correct": true,
        "feedback": "It's a firm, widely shared expectation, and passengers nearby notice if it isn't met."
      },
      {
        "text": "Wait to be asked, so you don't presume.",
        "correct": false,
        "feedback": "People rarely ask. Offering proactively is expected."
      },
      {
        "text": "Assume someone else will offer.",
        "correct": false,
        "feedback": "Others are watching. If you're closest, the expectation falls on you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-4-a",
    "normId": "TR-4-escalator-standing-side-norm",
    "category": "Transport & commuting",
    "setup": "You step onto a busy station escalator and stand on the left. People behind you sigh and say “excuse me”.",
    "prompt": "What was the mistake?",
    "options": [
      {
        "text": "On busy escalators, stand on the right and keep the left clear for walkers.",
        "correct": true,
        "feedback": "In busy commuting periods it's treated as a near-firm rule, not a loose suggestion."
      },
      {
        "text": "Nothing. Everyone should be able to stand where they like.",
        "correct": false,
        "feedback": "The sighs are the signal. The convention is stronger than it looks."
      },
      {
        "text": "You should have been walking up too.",
        "correct": false,
        "feedback": "No, standing is fine. Just on the right, leaving the left clear for walkers."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-5-a",
    "normId": "TR-5-staff-apology-on-behalf-of-delay",
    "category": "Transport & commuting",
    "setup": "A conductor says, “I'm so sorry about the delay.” It was caused by a signal failure elsewhere.",
    "prompt": "How do you take that?",
    "options": [
      {
        "text": "As a standard courtesy. Ask for an update if you need practical information.",
        "correct": true,
        "feedback": "It's a scripted courtesy, not the staff member taking personal responsibility."
      },
      {
        "text": "As proof the conductor caused it personally.",
        "correct": false,
        "feedback": "It's a standard courtesy for delays from any cause."
      },
      {
        "text": "As a promise the delay will be short.",
        "correct": false,
        "feedback": "It says nothing about length. Ask: “Do you have any update on how long it might be?”"
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-6-a",
    "normId": "TR-6-bus-request-stop-hand-signal",
    "category": "Transport & commuting",
    "setup": "You wait at a bus stop without raising your hand. The bus drives straight past.",
    "prompt": "What should you have done?",
    "options": [
      {
        "text": "Raised a hand clearly as it approached.",
        "correct": true,
        "feedback": "At request stops, buses may not stop unless someone signals."
      },
      {
        "text": "Waited closer to the road.",
        "correct": false,
        "feedback": "Position isn't the signal. A raised hand is."
      },
      {
        "text": "Assumed the driver missed you, and complained.",
        "correct": false,
        "feedback": "It wasn't an error. Not stopping automatically is standard at request stops."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-7-a",
    "normId": "TR-7-tap-in-tap-out-contactless-fare-norm",
    "category": "Transport & commuting",
    "setup": "You've been charged the maximum fare for a journey because you forgot to tap out with your contactless card.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Submit a fare correction request online with the journey details.",
        "correct": true,
        "feedback": "A missed tap-out gets the maximum fare automatically, and it isn't necessarily refunded without a request."
      },
      {
        "text": "Assume it's an error that will fix itself.",
        "correct": false,
        "feedback": "It's an automatic rule, and a refund needs a specific request."
      },
      {
        "text": "Accept the charge as a penalty.",
        "correct": false,
        "feedback": "It can be corrected. Submit the request, and tap out on every journey from now on."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-12-a",
    "normId": "TR-12-road-rage-passive-restrained-norm",
    "category": "Transport & commuting",
    "setup": "On the road another driver gives a brief flash of headlights after you pull out. They don't honk or follow you.",
    "prompt": "How do you respond?",
    "options": [
      {
        "text": "Take it as mild, passing frustration. Give a small wave or nod.",
        "correct": true,
        "feedback": "It's a clear but contained signal, not an invitation to escalate."
      },
      {
        "text": "As an aggressive challenge, and confront them.",
        "correct": false,
        "feedback": "That's the common misreading. Responding calmly lets it end there."
      },
      {
        "text": "As a friendly greeting.",
        "correct": false,
        "feedback": "It's mild frustration, not a greeting. A small wave or nod acknowledges it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-17-a",
    "normId": "TR-17-first-class-carriage-informal-enforcement",
    "category": "Transport & commuting",
    "setup": "The train is quiet and first class is empty, so you sit there with a standard ticket. The conductor says politely, “This is a first-class carriage. Would you like to upgrade or move to standard?”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Move promptly. It's consistently enforced, however empty it looks.",
        "correct": true,
        "feedback": "It's a genuine rule, enforced regardless of how empty first class appears."
      },
      {
        "text": "Explain that nobody else is using it.",
        "correct": false,
        "feedback": "The empty seats don't change the rule. It's enforced regardless."
      },
      {
        "text": "Stay put, since the request was polite.",
        "correct": false,
        "feedback": "Polite doesn't mean optional. Move to the correct carriage when asked."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-2-a",
    "normId": "NB-2-garden-hedge-boundary-etiquette",
    "category": "Neighbours & community",
    "setup": "Your neighbour catches you in the garden and says lightly, “The hedge is getting a bit tall on our side, whenever you get a chance.”",
    "prompt": "How do you take that?",
    "options": [
      {
        "text": "As a genuine request. Deal with the hedge soon.",
        "correct": true,
        "feedback": "This casual approach is the expected first step. It's polite, but it is a request."
      },
      {
        "text": "As small talk that needs no action.",
        "correct": false,
        "feedback": "The light wording is how the request is made. Ignoring it can lead to something more formal."
      },
      {
        "text": "Wait for a formal letter before doing anything.",
        "correct": false,
        "feedback": "Formal steps only come if the casual approach changes nothing, so waiting for one means missing the actual request."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-8-a",
    "normId": "NB-8-parking-outside-someones-house-etiquette",
    "category": "Neighbours & community",
    "setup": "You've parked outside the same house most days. The neighbour smiles as you walk past and says: “Oh, I see you've found our spot!”",
    "prompt": "What does that mean?",
    "options": [
      {
        "text": "A pointed, indirect hint. Avoid parking there regularly.",
        "correct": true,
        "feedback": "There's no legal claim to the space, but a strong informal expectation that residents respect."
      },
      {
        "text": "A friendly welcome to the street.",
        "correct": false,
        "feedback": "The smile is polite, but the comment is a quiet complaint."
      },
      {
        "text": "A warning that you're breaking the law.",
        "correct": false,
        "feedback": "No law is broken. It's an informal expectation, which is why it comes as a hint."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-14-a",
    "normId": "NB-14-loud-music-unwritten-curfew-hours",
    "category": "Neighbours & community",
    "setup": "It's gone 11:30 on a weeknight and your music is at a normal volume. There's a polite knock: “Sorry to bother you, just wondering if you could turn the music down a bit.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Turn it down now, and keep noise down by around 11pm on weeknights from then on.",
        "correct": true,
        "feedback": "The curfew is unwritten but widely observed, and enforced socially."
      },
      {
        "text": "Point out that no rule says you have to.",
        "correct": false,
        "feedback": "No written rule doesn't mean no expectation. This one is genuinely widely observed."
      },
      {
        "text": "Turn it down a little and carry on.",
        "correct": false,
        "feedback": "A polite knock like this is pointed. The expectation is real, even if nobody states a rule."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-1-a",
    "normId": "NB-1-bin-collection-day-strictness",
    "category": "Neighbours & community",
    "setup": "You put your bin out on the wrong day. It's left uncollected with a small sticker and no personal note.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As the standard council process. Check the collection calendar for your exact address.",
        "correct": true,
        "feedback": "The lack of a personal warning reflects scale and standard process, not you being targeted."
      },
      {
        "text": "As a neighbour complaining about you.",
        "correct": false,
        "feedback": "It's the council's process, not a personal complaint."
      },
      {
        "text": "As a mistake to ignore, since bins get collected eventually.",
        "correct": false,
        "feedback": "Collection days vary by street and change with holidays. Check your own calendar."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-3-a",
    "normId": "NB-3-neighbourhood-facebook-group-norms",
    "category": "Neighbours & community",
    "setup": "In the neighbourhood Facebook group you post a strongly worded opinion on a local political issue. Cool comments appear, and an admin removes the post.",
    "prompt": "What does that tell you?",
    "options": [
      {
        "text": "The group has unwritten norms. Observe its tone before posting opinions.",
        "correct": true,
        "feedback": "These norms are informal but really enforced, and off-topic posts draw a cool response."
      },
      {
        "text": "The admin is being unfair, so repost it.",
        "correct": false,
        "feedback": "The norms are informal but real. Reposting would likely draw the same reaction."
      },
      {
        "text": "Nobody in the group cares about local issues.",
        "correct": false,
        "feedback": "More likely it's the wrong place. Such groups tend to stick to practical, local topics."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-4-a",
    "normId": "NB-4-brief-hello-not-deep-conversation-norm",
    "category": "Neighbours & community",
    "setup": "You see your neighbour most mornings. To be friendly, you stop for a long chat every time.",
    "prompt": "What would they expect?",
    "options": [
      {
        "text": "A brief, warm greeting each time, with longer chats now and then.",
        "correct": true,
        "feedback": "Brevity is a comfortable default that reflects reserve, not coldness."
      },
      {
        "text": "Even longer chats, to show you care.",
        "correct": false,
        "feedback": "Forcing long conversations each time tends to feel less comfortable."
      },
      {
        "text": "Silence, to respect their privacy.",
        "correct": false,
        "feedback": "A brief, warm greeting is the expected minimum."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-7-a",
    "normId": "NB-7-borrowing-small-items-from-neighbours",
    "category": "Neighbours & community",
    "setup": "A neighbour lends you a small tool with no return date. You keep it for several weeks.",
    "prompt": "What would have been better?",
    "options": [
      {
        "text": "Return it within a few days, perhaps with a small thank-you.",
        "correct": true,
        "feedback": "No return date doesn't mean no expectation. A delayed return is noticed."
      },
      {
        "text": "Keep it until they ask for it back.",
        "correct": false,
        "feedback": "They may not ask, but a long delay is noticed all the same."
      },
      {
        "text": "Hold on until you've used it for everything you need.",
        "correct": false,
        "feedback": "Within a few days is the usual expectation, even without a stated deadline."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-9-a",
    "normId": "NB-9-community-bake-sale-fundraiser-participation",
    "category": "Neighbours & community",
    "setup": "A note from school calls the bake sale “optional” and lists what to bring. You skip every one.",
    "prompt": "What's the unstated expectation?",
    "options": [
      {
        "text": "Take part in a small way, such as buying something.",
        "correct": true,
        "feedback": "It's technically optional, but near-universal participation is the real norm."
      },
      {
        "text": "None. Optional means optional.",
        "correct": false,
        "feedback": "Consistently opting out can be quietly noticed, even though it's allowed."
      },
      {
        "text": "Bake something elaborate, to make up for it.",
        "correct": false,
        "feedback": "Light participation is enough. Buying an item counts."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-10-a",
    "normId": "NB-10-antisocial-behaviour-council-line-reporting",
    "category": "Neighbours & community",
    "setup": "A neighbour's noise continues after you've asked politely twice. You hesitate to report it to the council.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Use the council's non-emergency line. It's a normal, proportionate step.",
        "correct": true,
        "feedback": "After one or two direct attempts, using the formal channel is what most residents would do."
      },
      {
        "text": "Keep asking politely, since reporting would be aggressive.",
        "correct": false,
        "feedback": "It isn't aggressive. This channel exists for ongoing problems."
      },
      {
        "text": "Call the emergency police line.",
        "correct": false,
        "feedback": "That's for emergencies. The council has a separate non-emergency channel for this."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-13-a",
    "normId": "NB-13-recycling-sorting-strictness",
    "category": "Neighbours & community",
    "setup": "Your recycling bin is left uncollected with a “contamination” sticker. There was no personal warning.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As council policy. Check your council's recycling guidance carefully.",
        "correct": true,
        "feedback": "It's uniformly applied policy, not a complaint about your household."
      },
      {
        "text": "As a neighbour reporting you.",
        "correct": false,
        "feedback": "It's the collection crew following a standard rule."
      },
      {
        "text": "As a one-off, so put the bin out again unchanged.",
        "correct": false,
        "feedback": "Rules vary between councils. Check what yours accepts, including rinsing requirements."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-12-a",
    "normId": "CS-12-apologising-while-complaining-norm",
    "category": "Customer service & retail",
    "setup": "You're on your first shift in a café. A customer says: “Sorry to make a fuss, but I think there might be a mistake on my bill.”",
    "prompt": "How seriously do you take it?",
    "options": [
      {
        "text": "At full face value. The apology is about tone, not about how serious the issue is.",
        "correct": true,
        "feedback": "The soft opening is a social convention for raising a problem politely."
      },
      {
        "text": "Assume it's minor, because they sound so apologetic.",
        "correct": false,
        "feedback": "That's the common misreading. A soft opening says nothing about how big the problem is."
      },
      {
        "text": "Ask whether they're sure, since they seem unsure.",
        "correct": false,
        "feedback": "The softness is politeness, not doubt, so check the bill properly."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-13-a",
    "normId": "CS-13-is-everything-alright-scripted-checkin",
    "category": "Customer service & retail",
    "setup": "Halfway through your meal the server asks, “Is everything alright with your meal?” Your pasta is cold.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Say it plainly: “Actually, this is a bit cold.”",
        "correct": true,
        "feedback": "A real issue has to be stated plainly and specifically to register."
      },
      {
        "text": "Say “Yeah, it's... fine” and hope they notice your hesitation.",
        "correct": false,
        "feedback": "The server hears a positive-sounding answer and moves on. Tone alone won't register."
      },
      {
        "text": "Say “great, thanks” and leave the plate half-eaten, expecting them to notice.",
        "correct": false,
        "feedback": "The check-in is routine, and a brief positive reply ends it. The server won't probe further."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-14-a",
    "normId": "CS-14-price-match-policy-active-request-needed",
    "category": "Customer service & retail",
    "setup": "You're at the till, about to pay full price for a TV. On your phone another shop has it cheaper. This store's website mentions a “price match” policy in small print, but nobody at the till has mentioned it.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask directly: “Do you price match? I've seen this cheaper elsewhere,” and show the price.",
        "correct": true,
        "feedback": "The policy is real and usually honoured, but it relies on you raising it with evidence."
      },
      {
        "text": "Pay full price. If the policy applied, they'd have mentioned it.",
        "correct": false,
        "feedback": "Staff don't offer it. The policy relies entirely on the customer asking."
      },
      {
        "text": "Wait for the cashier to check other shops' prices.",
        "correct": false,
        "feedback": "Staff don't check competitor prices themselves. It's up to you to raise it, with proof."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-1-a",
    "normId": "CS-1-no-worries-service-staff-filler",
    "category": "Customer service & retail",
    "setup": "You apologise to a shop assistant for a genuine mistake and she says, “No worries!” You're not sure the issue is actually sorted.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Check directly: “So just to check, is that all sorted now?”",
        "correct": true,
        "feedback": "“No worries” is a reflex, not confirmation that the specific issue is resolved."
      },
      {
        "text": "Take it as confirmation and leave.",
        "correct": false,
        "feedback": "It's a light social phrase said after almost anything."
      },
      {
        "text": "Take it as a sign she's annoyed.",
        "correct": false,
        "feedback": "It's automatic, not a signal either way. Ask if you need certainty."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-2-a",
    "normId": "CS-2-returns-policy-receipt-strictness",
    "category": "Customer service & retail",
    "setup": "You try to return an item without a receipt. The sign says “proof of purchase required” and the staff member, who seems sympathetic, says no.",
    "prompt": "How do you read this?",
    "options": [
      {
        "text": "As fixed policy she can't change. Keep receipts in future.",
        "correct": true,
        "feedback": "She has little personal discretion over the policy, so it isn't personal unhelpfulness."
      },
      {
        "text": "As her being deliberately unhelpful.",
        "correct": false,
        "feedback": "It's company policy, and most staff can't make exceptions."
      },
      {
        "text": "As an opening to argue for an exception.",
        "correct": false,
        "feedback": "Staff generally can't override it. Check the returns policy before you buy."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-3-a",
    "normId": "CS-3-tech-support-script-troubleshooting-steps",
    "category": "Customer service & retail",
    "setup": "A support agent asks you to restart your router, though you've already said you tried that and know your way around.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Answer the standard questions patiently. It's often the quickest route to escalation.",
        "correct": true,
        "feedback": "The script is often a required step before an agent can escalate to a specialist."
      },
      {
        "text": "Refuse, since you've already done it.",
        "correct": false,
        "feedback": "That usually slows things down. Completing the script is the quickest route."
      },
      {
        "text": "Take it as the agent doubting you.",
        "correct": false,
        "feedback": "It's the standard script, not a judgement of you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-4-a",
    "normId": "CS-4-formal-written-complaint-better-outcome",
    "category": "Customer service & retail",
    "setup": "You complained by phone about a genuine problem and got little resolution. The company's website lists a separate complaints email.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Write to the complaints address, factually and calmly.",
        "correct": true,
        "feedback": "Written complaints are logged, tracked and answered in writing. Verbal ones are easier to forget."
      },
      {
        "text": "Phone again, more forcefully.",
        "correct": false,
        "feedback": "A forceful call is easier to minimise than a written, logged complaint."
      },
      {
        "text": "Accept it, since you've already complained once.",
        "correct": false,
        "feedback": "A written complaint is a stronger route for something that matters."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-7-a",
    "normId": "CS-7-out-of-stock-apology-genuine-scarcity",
    "category": "Customer service & retail",
    "setup": "In a shop you ask for a particular item. The assistant checks and says, “Sorry, we don't have that in stock.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask, “Could you check another branch, or order it in?”",
        "correct": true,
        "feedback": "Most staff will offer an alternative if there is one. The answer isn't necessarily the end."
      },
      {
        "text": "Leave, since it was a brush-off.",
        "correct": false,
        "feedback": "They checked first, so it's likely accurate. An alternative may still exist."
      },
      {
        "text": "Ask them to check the shelf again.",
        "correct": false,
        "feedback": "They've already checked. A follow-up about other branches or ordering gets further."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-10-a",
    "normId": "CS-10-walk-in-no-reservation-restaurant-wait-norm",
    "category": "Customer service & retail",
    "setup": "At a popular restaurant a host takes your name and party size and hands you a buzzer, with an estimated wait. There's no reservation list.",
    "prompt": "How do you read the system?",
    "options": [
      {
        "text": "As the venue's normal walk-in system. Check beforehand next time and be ready to wait.",
        "correct": true,
        "feedback": "It's a standard model for busy casual restaurants, not disorganisation."
      },
      {
        "text": "As a badly run restaurant.",
        "correct": false,
        "feedback": "It's a deliberate, standard model, not a sign of chaos."
      },
      {
        "text": "As a reason to complain about the wait.",
        "correct": false,
        "feedback": "The wait is how the system works. Checking in advance whether they take bookings avoids surprises."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-11-a",
    "normId": "CS-11-sending-food-back-polite-low-key",
    "category": "Customer service & retail",
    "setup": "Your main course arrives undercooked. You want to raise it without making a scene.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Quietly flag the server: “Sorry, this seems a bit undercooked. Would you mind having it redone?”",
        "correct": true,
        "feedback": "A quiet, polite, specific complaint is the normal way, and it still gets the problem addressed."
      },
      {
        "text": "Say nothing and leave it.",
        "correct": false,
        "feedback": "Staying silent leaves the problem unfixed. A calm complaint is normal."
      },
      {
        "text": "Complain loudly so others hear.",
        "correct": false,
        "feedback": "No need. A measured tone is the expected, and effective, way."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-1-a",
    "normId": "WP-1-indirect-refusal-workplace",
    "category": "Workplace",
    "setup": "You've asked your manager if you can leave early on Fridays for a class. He replies:",
    "prompt": "“It's not ideal, but let's see how it goes.” — What do you say next?",
    "options": [
      {
        "text": "“Just so I plan properly — is that a yes for this Friday, or should I check back in a few weeks?”",
        "correct": true,
        "feedback": "This gets you a real answer without sounding pushy — it turns a vague hedge into a concrete commitment."
      },
      {
        "text": "“Great, thank you!” — and leave early this Friday",
        "correct": false,
        "feedback": "This wasn't a yes. In British workplace speech, 'let's see how it goes' is a hedge, not approval — treating it as a green light is the exact mismatch this norm describes."
      },
      {
        "text": "“Okay.” — and drop the subject entirely",
        "correct": false,
        "feedback": "Understandable instinct, but this leaves you with no answer at all — you'll be back to guessing next Friday."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-1-a",
    "normId": "HL-1-landlord-vague-commitment",
    "category": "Housing & landlord",
    "setup": "You've asked your landlord to fix the heating. They reply:",
    "prompt": "“I'll see what I can do about it.” — What do you say next?",
    "options": [
      {
        "text": "“Could you give me a rough date for the repair? It's been two weeks.”",
        "correct": true,
        "feedback": "This turns a vague deferral into a concrete ask — requesting a specific date is what usually gets a repair actually scheduled."
      },
      {
        "text": "“Thanks, appreciate it!” — and wait to hear back",
        "correct": false,
        "feedback": "This is a non-committal response, not a plan — without a follow-up, 'I'll see what I can do' often means the request quietly sits at the bottom of the list."
      },
      {
        "text": "“Okay, I'll just wait then.” — and drop the subject entirely",
        "correct": false,
        "feedback": "Understandable instinct, but passive waiting is exactly how vague landlord replies turn into months of no action."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-1-a",
    "normId": "HC-1-gp-appointment-brevity",
    "category": "Healthcare",
    "setup": "Your GP appointment is 8 minutes long, and it's wrapping up with a follow-up question you haven't asked yet.",
    "prompt": "The appointment is about to end. What's the right move?",
    "options": [
      {
        "text": "“Could we book a longer appointment to go through this properly?”",
        "correct": true,
        "feedback": "This works with the system's time-slot structure instead of against it — asking directly for more time is the expected way to get a fuller conversation."
      },
      {
        "text": "Stay silent and assume it's over",
        "correct": false,
        "feedback": "The brevity is about the time slot, not a signal that your concern is minor — staying quiet just means the follow-up question goes unasked."
      },
      {
        "text": "Apologize for taking up time and leave",
        "correct": false,
        "feedback": "No apology is needed — the short slot is standard practice, not a sign that you're imposing on the GP."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-1-a",
    "normId": "JS-1-vague-interview-feedback",
    "category": "Job search",
    "setup": "You were told “we'll let you know either way” after a final-round interview. It's been three weeks of silence.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Send one polite follow-up, then treat continued silence as a likely no and move on",
        "correct": true,
        "feedback": "This is the right balance — not pushy, not passive, and it gets you a clear signal either way."
      },
      {
        "text": "Keep waiting indefinitely",
        "correct": false,
        "feedback": "Silence past the stated timeline usually is the answer — waiting indefinitely just delays accepting that and moving on."
      },
      {
        "text": "Call the office repeatedly to demand an explanation",
        "correct": false,
        "feedback": "This reads as pressure, not diligence — it's unlikely to speed up an answer and may leave a worse impression."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-2-a",
    "normId": "SO-2-declining-invitation-vague-excuse",
    "category": "Social",
    "setup": "You invited a colleague to a work social. They said, “I've got a bit of a thing that day, sorry!” and offered no more detail.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“No worries, another time!”",
        "correct": true,
        "feedback": "This accepts the vague decline at face value — exactly what's expected, and it keeps things easy for both of you."
      },
      {
        "text": "“What thing? Is everything okay?” — press for the real reason",
        "correct": false,
        "feedback": "Vague declines are socially complete on their own — pressing for more detail tends to make people uncomfortable rather than getting you a real answer."
      },
      {
        "text": "Quietly write them off as uninterested going forward",
        "correct": false,
        "feedback": "One vague decline isn't a signal of disinterest — it's a normal, polite way to say no without giving a specific reason."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-2-a",
    "normId": "AB-2-bank-letter-formal-tone-routine",
    "category": "Admin & bureaucracy",
    "setup": "A letter arrives from your bank in serious, legal-sounding language, asking you to confirm your address with updated proof documents.",
    "prompt": "What's the right response?",
    "options": [
      {
        "text": "Respond to the specific document request within the deadline, calling the number on an official statement if unsure",
        "correct": true,
        "feedback": "This treats the content, not the tone, as the real signal — exactly the right way to handle a routine but time-bound request."
      },
      {
        "text": "Panic and assume there's a problem with the account",
        "correct": false,
        "feedback": "This is standard template language for a routine compliance check — the tone doesn't indicate any actual suspicion about your account."
      },
      {
        "text": "Ignore it as generic bank confusion",
        "correct": false,
        "feedback": "It's a real, time-bound request even though the tone is alarmist — ignoring it risks missing the actual deadline."
      }
    ],
    "status": "Approved"
  }
];
