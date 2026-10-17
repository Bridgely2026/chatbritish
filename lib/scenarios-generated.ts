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
  },
  {
    "id": "SC-WP-1-b",
    "normId": "WP-1-indirect-refusal-workplace",
    "category": "Workplace",
    "setup": "In a chat message you ask a peer in another team to share their data for your project. They reply, “I'll keep it in mind,” then change the subject.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask a specific either-or: “Should I look elsewhere for it, or wait for yours?”",
        "correct": true,
        "feedback": "“I'll keep it in mind” plus a change of subject usually means a soft no. A clear choice question gets a straight answer."
      },
      {
        "text": "Take it as a yes and start building on their data.",
        "correct": false,
        "feedback": "Hedged wording is rarely a yes. You could end up with a project that depends on data you never get."
      },
      {
        "text": "Say nothing and wait quietly in case they come back.",
        "correct": false,
        "feedback": "Waiting leaves the soft no unspoken while your project stalls. One short question settles it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-1-c",
    "normId": "WP-1-indirect-refusal-workplace",
    "category": "Workplace",
    "setup": "You suggest a new process to a senior colleague in the lift. She says, “Interesting, I'll give it some thought,” then asks about your weekend.",
    "prompt": "What does that mean?",
    "options": [
      {
        "text": "Probably a soft no. Ask a direct either-or question before investing more time.",
        "correct": true,
        "feedback": "Hedged wording plus a change of subject usually means “not convinced yet”. A clear choice gets a straight answer."
      },
      {
        "text": "She's weighing it up seriously and will come back to you with a proper decision.",
        "correct": false,
        "feedback": "“I'll give it some thought” with a change of subject is rarely active consideration. It's usually a gentle no."
      },
      {
        "text": "She likes it but is distracted, so you should send a longer proposal to win her over.",
        "correct": false,
        "feedback": "More detail before you know where she stands risks wasted effort. Check first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-1-d",
    "normId": "WP-1-indirect-refusal-workplace",
    "category": "Workplace",
    "setup": "You ask your team lead if you can run the next client call. He says, “Let me get back to you on that,” and heads into another meeting.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Follow up with a choice: “Should I prepare for it, or leave it with you?”",
        "correct": true,
        "feedback": "Deferral with no date is often a soft no. A specific choice makes it easy for him to answer honestly."
      },
      {
        "text": "Start preparing the call, since he didn't actually say no to you.",
        "correct": false,
        "feedback": "Preparing on a guess could waste your time. Hedged phrases often mean “not convinced yet”."
      },
      {
        "text": "Wait for him to come back, however long that takes.",
        "correct": false,
        "feedback": "Waiting leaves the soft no unspoken. He may never return to it unless you ask."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-2-b",
    "normId": "WP-2-promotion-discussion-indirectness",
    "category": "Workplace",
    "setup": "Your manager replies to your email about promotion: “Let's revisit this at your next review.” That is about nine months away.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Reply asking for a date to talk sooner and what you should show before then.",
        "correct": true,
        "feedback": "Warm language isn't a promise. A real commitment comes with a date or a written next step."
      },
      {
        "text": "Take it as good news that a promotion is on its way.",
        "correct": false,
        "feedback": "It's a deferral, not a promise. Nothing is scheduled, and months can pass before anything happens."
      },
      {
        "text": "Read it as a polite refusal and start job-hunting.",
        "correct": false,
        "feedback": "It isn't a no either. It's a deferral, and a request for a date will show you where you stand."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-2-c",
    "normId": "WP-2-promotion-discussion-indirectness",
    "category": "Workplace",
    "setup": "In your appraisal you ask about moving into a team-lead role. She says, “That's certainly something we can look at,” then turns to the next item.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Ask what she'd want to see from you, and agree when to review it.",
        "correct": true,
        "feedback": "Warm language isn't a promise. A real commitment comes with a date or a documented next step."
      },
      {
        "text": "Thank her and assume the role is yours when the next vacancy comes up.",
        "correct": false,
        "feedback": "“Something we can look at” is a deferral. Without a date, nothing is actually in motion."
      },
      {
        "text": "Say nothing more, since pressing again would look ungrateful.",
        "correct": false,
        "feedback": "Asking for a next step is normal. Silence leaves a vague deferral vague."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-2-d",
    "normId": "WP-2-promotion-discussion-indirectness",
    "category": "Workplace",
    "setup": "A colleague tells you excitedly that her manager said a promotion is “definitely something we can look at.” Nothing has been scheduled. She asks what you think.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "It's encouraging, but ask whether a date or next step was agreed.",
        "correct": true,
        "feedback": "Warm words aren't a commitment. A date or documented next step is what makes a promise real."
      },
      {
        "text": "Congratulate her, since it sounds as if a promotion is on its way.",
        "correct": false,
        "feedback": "Without a date or next step it's a deferral, not a promise, so congratulations may be early."
      },
      {
        "text": "Tell her it's clearly a polite no and she should look elsewhere.",
        "correct": false,
        "feedback": "It isn't a no either. It's open-ended, which is why a date matters."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-3-a",
    "normId": "WP-3-formal-warning-procedural-tone",
    "category": "Workplace",
    "setup": "You receive a written warning about timekeeping, in stiff language such as “in accordance with company policy.” You get on well with your manager.",
    "prompt": "What do you do first?",
    "options": [
      {
        "text": "Set the tone aside, read what it actually says, and ask what the next steps are.",
        "correct": true,
        "feedback": "The coldness is procedure, not hostility. What matters is the facts stated and the practical next steps."
      },
      {
        "text": "Assume your manager is furious with you personally.",
        "correct": false,
        "feedback": "The stiff wording is standard for formal notices. It reflects process, not personal anger."
      },
      {
        "text": "Treat it as a formality and take no action.",
        "correct": false,
        "feedback": "Formal doesn't mean empty. It states real facts and next steps, so read it and ask what happens next."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-4-b",
    "normId": "WP-4-deadline-reminder-escalation",
    "category": "Workplace",
    "setup": "A client chases you: “Just checking in on the invoice.” Four days later: “Circling back on this.”",
    "prompt": "What does the second message tell you?",
    "options": [
      {
        "text": "Urgency is rising. Reply today with a date.",
        "correct": true,
        "feedback": "Each polite chase signals rising urgency. Treat the repetition as the real message."
      },
      {
        "text": "Nothing new. It's a routine nudge that can wait until your next batch of invoices.",
        "correct": false,
        "feedback": "Polite wording hides the escalation. A second chase makes it a priority."
      },
      {
        "text": "That they're annoyed with you personally and the relationship is damaged.",
        "correct": false,
        "feedback": "It's about urgency, not personal feelings. A quick reply with a date will settle it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-4-c",
    "normId": "WP-4-deadline-reminder-escalation",
    "category": "Workplace",
    "setup": "On Monday your manager writes, “No rush on the slides.” On Wednesday she asks, “Any update on those slides when you get a chance?”",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Send them today, or tell her exactly when she'll have them.",
        "correct": true,
        "feedback": "The second mention is the signal. “When you get a chance” now means soon."
      },
      {
        "text": "Finish them by Friday as planned, since she said there was no rush.",
        "correct": false,
        "feedback": "“No rush” was the first message. Her follow-up means the deadline has moved closer."
      },
      {
        "text": "Reply that you'll get to them once your other work is done.",
        "correct": false,
        "feedback": "That treats a repeat request as optional. Give her a date, not a maybe."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-4-d",
    "normId": "WP-4-deadline-reminder-escalation",
    "category": "Workplace",
    "setup": "A colleague messages you about a shared document: “whenever you have a moment”, then “just bumping this”, then “quick nudge on this one”.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Treat it as urgent. Finish it or say exactly when you will.",
        "correct": true,
        "feedback": "By the third nudge the wording is still mild, but the repetition is the real signal."
      },
      {
        "text": "Reply that you've seen it and will get to it when you're ready.",
        "correct": false,
        "feedback": "A bare acknowledgement doesn't answer the urgency repeated nudges are showing."
      },
      {
        "text": "Ask them to stop messaging and send a formal request instead.",
        "correct": false,
        "feedback": "That escalates a polite chase into a row. A quick reply with a date is what they need."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-5-a",
    "normId": "WP-5-team-ritual-participation",
    "category": "Workplace",
    "setup": "You often can't make Friday team drinks. Colleagues have stopped asking you, and some casual decisions now happen without you.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Join when you can, and explain the reason once so it reads as a boundary.",
        "correct": true,
        "feedback": "Declining once is neutral, but a pattern can quietly affect how included you're seen to be. A brief reason shows it isn't disinterest."
      },
      {
        "text": "Keep declining. Socialising has nothing to do with doing your job well.",
        "correct": false,
        "feedback": "Skipping every time can quietly shape how trusted and included you seem, separate from the quality of your work."
      },
      {
        "text": "Go to every social event, whatever it costs you.",
        "correct": false,
        "feedback": "You don't need to go to everything. Joining selectively and explaining once is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-5-b",
    "normId": "WP-5-team-ritual-participation",
    "category": "Workplace",
    "setup": "You never join the office tea round or add to the birthday cards. A colleague jokes, “You're never around for these, are you?”",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As a gentle signal about belonging. Join in sometimes, or say why you can't.",
        "correct": true,
        "feedback": "Small rituals signal belonging. Joining selectively, or explaining once, stops it reading as disinterest."
      },
      {
        "text": "As a harmless joke with nothing behind it, so nothing needs to change.",
        "correct": false,
        "feedback": "Repeatedly opting out can quietly affect how included you seem, even if nobody says so."
      },
      {
        "text": "As rude criticism, so you reply sharply that those things are optional.",
        "correct": false,
        "feedback": "Technically true, but it reinforces the impression of disengagement. A light reply works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-6-b",
    "normId": "WP-6-agreement-in-meetings-silence",
    "category": "Workplace",
    "setup": "You propose a new deadline in a meeting and everyone says, “Fine by me.” Next day a colleague emails: “One quick thought on the deadline…” with several concerns.",
    "prompt": "How do you read the email?",
    "options": [
      {
        "text": "As real objections saved for private. Take them seriously and reply.",
        "correct": true,
        "feedback": "Agreement in the room can be provisional. Real concerns often arrive one-to-one afterwards."
      },
      {
        "text": "As an odd change of heart you can ignore, since they agreed in the room.",
        "correct": false,
        "feedback": "Quiet agreement in a meeting often isn't final. Ignoring the email leaves the problem in place."
      },
      {
        "text": "As proof the meeting was pointless, so you reopen it with the whole team.",
        "correct": false,
        "feedback": "Reopening it publicly may make people less honest next time. Reply to the email instead."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-6-c",
    "normId": "WP-6-agreement-in-meetings-silence",
    "category": "Workplace",
    "setup": "After a project kickoff where everyone nodded, a stakeholder catches you in the corridor: “Just between us, I'm not sure about the budget.”",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Listen, ask what would need to change, then check with others too.",
        "correct": true,
        "feedback": "Private objections are common after a quiet meeting. Others may be thinking the same."
      },
      {
        "text": "Remind them that they raised no objection when everyone agreed in the meeting.",
        "correct": false,
        "feedback": "That shuts down the honest feedback you need. Real concerns are often saved for private."
      },
      {
        "text": "Treat it as a one-off concern from one person and carry on as planned.",
        "correct": false,
        "feedback": "If one person has concerns, others may too. Quiet nods weren't full agreement."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-6-d",
    "normId": "WP-6-agreement-in-meetings-silence",
    "category": "Workplace",
    "setup": "You've led a decision meeting with no objections. You want to avoid surprises later.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Message two or three key people privately to ask if they have concerns.",
        "correct": true,
        "feedback": "Agreement in the room can be provisional. A private invitation brings out real concerns while you can still adjust."
      },
      {
        "text": "Send the decision round in writing, since everyone agreed.",
        "correct": false,
        "feedback": "Silence in the room isn't the same as agreement. A written notice won't surface hidden concerns."
      },
      {
        "text": "Ask for objections at the next meeting, in front of everyone.",
        "correct": false,
        "feedback": "People rarely voice real objections publicly. Private asks work better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-7-b",
    "normId": "WP-7-cc-escalation-email",
    "category": "Workplace",
    "setup": "You email a client a routine update. Their reply copies in their line manager, with no comment.",
    "prompt": "What does the CC mean?",
    "options": [
      {
        "text": "They want it on record. Ask plainly if there's a concern.",
        "correct": true,
        "feedback": "A sudden CC often marks the point an issue is being tracked, even if the tone stays friendly."
      },
      {
        "text": "Nothing much. The manager is just being kept informed.",
        "correct": false,
        "feedback": "An unexplained CC is rarely casual. It usually means someone wants a formal record."
      },
      {
        "text": "That they're angry, so you should reply to everyone defending your position.",
        "correct": false,
        "feedback": "A public defence escalates it. Ask directly if something needs addressing."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-7-c",
    "normId": "WP-7-cc-escalation-email",
    "category": "Workplace",
    "setup": "A colleague's reply to your message is copied to HR. The wording is friendly: “Thanks, as discussed.”",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Take the CC seriously and ask directly if there's an issue to address.",
        "correct": true,
        "feedback": "Friendly tone with a new CC often means the matter is now being formally tracked."
      },
      {
        "text": "Ignore the CC, since the friendly wording shows everything is fine.",
        "correct": false,
        "feedback": "The tone can stay warm while the issue is formally escalated. The CC is the signal."
      },
      {
        "text": "Add your own manager to the thread to even things up.",
        "correct": false,
        "feedback": "That raises the stakes without learning what the concern is. Ask first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-7-d",
    "normId": "WP-7-cc-escalation-email",
    "category": "Workplace",
    "setup": "In a long email thread about a missed deadline, replies now always copy a director. No one has said why.",
    "prompt": "What should you assume?",
    "options": [
      {
        "text": "The matter is being tracked. Check privately if there's something to fix.",
        "correct": true,
        "feedback": "Sudden senior CCs usually mark formal tracking, whatever the tone of the messages."
      },
      {
        "text": "The director is just curious, so nothing changes for you.",
        "correct": false,
        "feedback": "Added seniority is a signal. Assuming nothing changed could leave you unprepared."
      },
      {
        "text": "Someone is building a case against you, so you start collecting evidence.",
        "correct": false,
        "feedback": "That's jumping to the worst. A plain question is the proportionate response."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-8-b",
    "normId": "WP-8-sorry-to-bother-request",
    "category": "Workplace",
    "setup": "A colleague messages: “Sorry to bother you, it's probably nothing, just a quick one: could you check the whole spreadsheet for errors?”",
    "prompt": "How big is this request?",
    "options": [
      {
        "text": "Treat it as a real request. Ask when they need it.",
        "correct": true,
        "feedback": "The apology softens the tone, not the size. A full check is a full check."
      },
      {
        "text": "Small, since they apologised and called it quick.",
        "correct": false,
        "feedback": "The softening language doesn't reflect the actual work involved."
      },
      {
        "text": "Optional, since they said it's probably nothing.",
        "correct": false,
        "feedback": "“Probably nothing” is politeness. Look at what's actually being asked."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-8-c",
    "normId": "WP-8-sorry-to-bother-request",
    "category": "Workplace",
    "setup": "Your boss pops by: “Sorry to bother you, quick one: could you cover the client call at nine tomorrow?”",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Take it as a real request: check your diary and confirm today.",
        "correct": true,
        "feedback": "The apology softens the tone but not the urgency. It still needs a firm answer."
      },
      {
        "text": "Fit it in around other work, since it's only a quick one.",
        "correct": false,
        "feedback": "Her “quick one” is politeness. A client call tomorrow is a real commitment."
      },
      {
        "text": "Say you'll see, assuming she'll ask again if it matters.",
        "correct": false,
        "feedback": "She may not ask again. A vague reply leaves her without cover."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-8-d",
    "normId": "WP-8-sorry-to-bother-request",
    "category": "Workplace",
    "setup": "An email from the finance team opens: “Apologies for the bother, just a tiny thing.” It asks you to resubmit three months of expenses by Friday.",
    "prompt": "How do you treat it?",
    "options": [
      {
        "text": "As a real deadline. Resubmit by Friday.",
        "correct": true,
        "feedback": "The apology cushions the request, but the ask is big and the date is firm."
      },
      {
        "text": "As optional, given the apology and “tiny thing”.",
        "correct": false,
        "feedback": "The softening is polite wording. The task is still substantial and dated."
      },
      {
        "text": "As low priority until they chase you.",
        "correct": false,
        "feedback": "Waiting for a chase turns a polite request into an overdue one."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-9-a",
    "normId": "WP-9-open-door-policy-literal",
    "category": "Workplace",
    "setup": "In your first week your manager says, “My door's always open.” You have a long question about your project plan.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Message first: “Have ten minutes today to talk through my project plan?”",
        "correct": true,
        "feedback": "The offer is sincere, but anything beyond a quick question should be signalled first."
      },
      {
        "text": "Walk straight in, since she said her door is always open.",
        "correct": false,
        "feedback": "Taking it literally can seem inconsiderate of her time and may make her less receptive."
      },
      {
        "text": "Save it for the weekly meeting, since you shouldn't interrupt her.",
        "correct": false,
        "feedback": "That's overcautious. A short message to book time is normal and welcomed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-9-b",
    "normId": "WP-9-open-door-policy-literal",
    "category": "Workplace",
    "setup": "A colleague says, “Pop over any time.” You'd like an hour of her help preparing a presentation.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Send a short message to book a time.",
        "correct": true,
        "feedback": "Anything beyond a quick question needs a heads-up, however open the invitation."
      },
      {
        "text": "Turn up at her desk and ask for the hour.",
        "correct": false,
        "feedback": "“Any time” is warm but not literal. An hour unannounced is a big ask."
      },
      {
        "text": "Wait until she suggests a specific time to help you.",
        "correct": false,
        "feedback": "She may never suggest one. Booking time yourself is the normal move."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-10-b",
    "normId": "WP-10-feedback-sandwich",
    "category": "Workplace",
    "setup": "Feedback on your report: “Lovely clear writing. The conclusion needs more evidence, but the layout is excellent.”",
    "prompt": "What's the main point?",
    "options": [
      {
        "text": "The conclusion needs more evidence. Repeat it back to confirm.",
        "correct": true,
        "feedback": "The criticism sits in the middle of the praise. Small wording doesn't mean small importance."
      },
      {
        "text": "That it was excellent overall, with nothing important to fix.",
        "correct": false,
        "feedback": "The middle comment is often the real message, sandwiched between praise."
      },
      {
        "text": "That the layout is the key thing to remember for next time.",
        "correct": false,
        "feedback": "That's the compliment at the end. The conclusion is where the work is needed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-10-c",
    "normId": "WP-10-feedback-sandwich",
    "category": "Workplace",
    "setup": "After your talk a senior colleague says, “Great energy! Perhaps slow down a bit in the middle. Everyone loved the slides.”",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Take pacing as the key point and ask how to improve it.",
        "correct": true,
        "feedback": "The critical point is tucked between praise. It's usually the one that matters most."
      },
      {
        "text": "Enjoy the praise, since the pacing remark was a throwaway.",
        "correct": false,
        "feedback": "A brief comment in the middle isn't a throwaway. It's probably the real feedback."
      },
      {
        "text": "Ask only about the slides, since they were praised most.",
        "correct": false,
        "feedback": "That focuses on what already works. The pacing note is the useful part."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-11-a",
    "normId": "WP-11-per-my-last-email",
    "category": "Workplace",
    "setup": "You ask your manager when a report is due. She replies: “Per my last email, the deadline is Friday.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Apologise briefly and act now: “Sorry, I missed that. On it now.”",
        "correct": true,
        "feedback": "“Per my last email” sounds polite but signals real frustration that a point is being ignored. Own the miss briefly and act."
      },
      {
        "text": "Treat it as a neutral reminder and carry on at your own pace.",
        "correct": false,
        "feedback": "It isn't neutral. The polite wording masks irritation, so carrying on as before makes things worse."
      },
      {
        "text": "Reply explaining why her earlier email was easy to miss.",
        "correct": false,
        "feedback": "Defending yourself misses the signal. She's already frustrated, so a short apology and quick action will settle it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-11-b",
    "normId": "WP-11-per-my-last-email",
    "category": "Workplace",
    "setup": "A colleague writes: “As I mentioned previously, I need the figures by Thursday.” You hadn't acted on his first message.",
    "prompt": "How do you reply?",
    "options": [
      {
        "text": "“Sorry, I missed that. I'll send them today.”",
        "correct": true,
        "feedback": "The polite wording hides real irritation. Own the miss and act quickly."
      },
      {
        "text": "Ask him to resend the details as if for the first time.",
        "correct": false,
        "feedback": "That ignores the signal that he's already frustrated and adds more work for him."
      },
      {
        "text": "Treat it as a harmless reminder and send them on Thursday.",
        "correct": false,
        "feedback": "It signals mounting frustration, not a neutral repeat. Waiting until the deadline is risky."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-11-c",
    "normId": "WP-11-per-my-last-email",
    "category": "Workplace",
    "setup": "A client writes: “Just circling back to my earlier message about the contract.” You haven't replied for a week.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As visible irritation behind polite words. Apologise and act now.",
        "correct": true,
        "feedback": "Phrases like this are polite on the surface but signal frustration at being ignored."
      },
      {
        "text": "As a neutral reminder, so you can reply when it suits you next week.",
        "correct": false,
        "feedback": "It isn't neutral. The politeness masks irritation that a point is being ignored."
      },
      {
        "text": "As a veiled threat, so you escalate it to your own manager straight away.",
        "correct": false,
        "feedback": "That overreacts. A quick, brief apology and response is what's needed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-12-b",
    "normId": "WP-12-calendar-invite-formality",
    "category": "Workplace",
    "setup": "A colleague you only chat with on Slack sends a calendar invite titled “Discussion: project handover” with an agenda line.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Read the agenda and prepare as for a formal meeting.",
        "correct": true,
        "feedback": "A switch from chat to a scheduled invite signals the topic is being taken more formally."
      },
      {
        "text": "Treat it as a casual chat and turn up without preparing.",
        "correct": false,
        "feedback": "The shift to an invite with an agenda is itself the signal. It's more than routine."
      },
      {
        "text": "Decline it and ask them to discuss it on Slack as usual.",
        "correct": false,
        "feedback": "That ignores the shift they've made. Attend and prepare."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-12-c",
    "normId": "WP-12-calendar-invite-formality",
    "category": "Workplace",
    "setup": "Your manager books a thirty-minute invite called “Quick catch-up” with no agenda, after weeks of casual Slack messages.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask what it's about, and prepare for something more formal.",
        "correct": true,
        "feedback": "A scheduled invite after informal chat often signals the topic is more serious than the title."
      },
      {
        "text": "Assume it's routine and prepare nothing.",
        "correct": false,
        "feedback": "A title like “quick” can hide a serious conversation. Don't assume it's routine."
      },
      {
        "text": "Assume you're in trouble and send a long apology in advance.",
        "correct": false,
        "feedback": "That reads too much into it. Ask about the purpose, then prepare calmly."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-13-b",
    "normId": "WP-13-not-the-right-forum",
    "category": "Workplace",
    "setup": "You reply-all on a project email thread to question the timeline. The project lead answers only: “This might not be the right thread for that.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Message her directly with two possible times to go through your timeline point.",
        "correct": true,
        "feedback": "It usually means she'd rather not address it in front of everyone. Asking for the separate conversation yourself makes it happen."
      },
      {
        "text": "Reply-all again, restating your point so everyone sees it.",
        "correct": false,
        "feedback": "She's signalled she doesn't want to answer publicly. Pressing the point there creates tension, not an answer."
      },
      {
        "text": "Apologise to the whole thread and stay quiet from now on.",
        "correct": false,
        "feedback": "It's not a rebuke, and your concern may still be valid. Take it to her privately instead of dropping it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-13-c",
    "normId": "WP-13-not-the-right-forum",
    "category": "Workplace",
    "setup": "During a training session you ask about a policy change. The trainer says, “That might not be the right forum, I'm afraid.”",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Catch the trainer afterwards or email to ask for the answer.",
        "correct": true,
        "feedback": "It usually means they'd rather not answer in front of a group. You'll need to follow up yourself."
      },
      {
        "text": "Take it to mean the policy question is closed.",
        "correct": false,
        "feedback": "It's a polite closing of discussion, not an answer. Without a follow-up you get none."
      },
      {
        "text": "Ask the rest of the group if anyone else knows the answer.",
        "correct": false,
        "feedback": "That works against the signal. Raise it privately afterwards."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-14-a",
    "normId": "WP-14-team-offsite-attendance",
    "category": "Workplace",
    "setup": "Your manager says, “It's not compulsory, but it'd be great to see everyone at the team away day.” You can't make it.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Tell her in advance and ask for a summary: “Can't make it, but please send me anything decided.”",
        "correct": true,
        "feedback": "“Not compulsory” still carries weight, and absences are noticed. A brief explanation and a request to be looped in shows you're engaged."
      },
      {
        "text": "Skip it quietly, since it's genuinely optional.",
        "correct": false,
        "feedback": "Optional doesn't mean unnoticed. Missing it without a word can leave you out of decisions made informally."
      },
      {
        "text": "Cancel your other commitments, since it's really compulsory.",
        "correct": false,
        "feedback": "It isn't an order. If you genuinely can't attend, a short explanation and a request for the summary is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-14-b",
    "normId": "WP-14-team-offsite-attendance",
    "category": "Workplace",
    "setup": "Your manager says twice, “It's entirely optional, but we'd love to see you at the summer team day.” You could attend but would rather not.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As a gentle expectation: go if you can, or explain and ask for notes.",
        "correct": true,
        "feedback": "“Optional” often still carries weight. Absence is usually noticed even when called fine."
      },
      {
        "text": "As a genuinely free choice, with no consequences whichever way you go.",
        "correct": false,
        "feedback": "Repeated encouragement suggests more than a casual invite. Non-attendance is noticed."
      },
      {
        "text": "As a strict order, so you cancel everything else and attend regardless.",
        "correct": false,
        "feedback": "It's not an order, but it's more than a suggestion. A brief reply handles it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-15-b",
    "normId": "WP-15-meeting-jargon-deferral",
    "category": "Workplace",
    "setup": "You're chairing a team meeting. A colleague raises a point you don't have time for, so you say, “Let's park that for now.”",
    "prompt": "What do you do so it isn't lost?",
    "options": [
      {
        "text": "Name an owner and a rough date: “Sam, could you bring this back next Tuesday?”",
        "correct": true,
        "feedback": "A parked topic with no owner or date often quietly drops. Naming both is what turns “later” into a real next step."
      },
      {
        "text": "Nothing more. Everyone will remember it was parked.",
        "correct": false,
        "feedback": "Without a named owner and date, parked topics tend to fade. Hoping people remember isn't a plan."
      },
      {
        "text": "Say you'll “put a pin in it” instead, which sounds more committed.",
        "correct": false,
        "feedback": "“Put a pin in it” is just another way of deferring. Without an owner or a date it drops quietly too."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-15-c",
    "normId": "WP-15-meeting-jargon-deferral",
    "category": "Workplace",
    "setup": "In a team email thread your suggestion gets the reply, “Good point, let's put a pin in it.” No one says who will pick it up.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Reply asking who should own it and roughly when.",
        "correct": true,
        "feedback": "A parked topic with no owner or date often quietly drops. Ask for a concrete next step."
      },
      {
        "text": "Wait, since the thread will surely resurface it.",
        "correct": false,
        "feedback": "Without an owner or date, parked topics tend to fade. Waiting isn't a plan."
      },
      {
        "text": "Resend your suggestion in full next week in case someone missed it.",
        "correct": false,
        "feedback": "Repeating it doesn't create a next step. Ask who owns it and when."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-16-a",
    "normId": "WP-16-redundancy-consultation-script",
    "category": "Workplace",
    "setup": "Your usually friendly manager reads from prepared notes in a meeting with HR present: “This is a formal meeting about changes to the team.” Her tone is stiff.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Separate format from relationship. Ask practical questions about process and timing.",
        "correct": true,
        "feedback": "The formality is process, not her personal opinion. Practical questions about next steps are fair."
      },
      {
        "text": "Take the stiffness as proof that she has formed a poor personal view of you.",
        "correct": false,
        "feedback": "The cold style is the format, not a verdict on you. Her warmth outside it hasn't changed."
      },
      {
        "text": "Stay silent and wait for HR to explain everything to you at a later stage.",
        "correct": false,
        "feedback": "Asking about process and timing is fine. You can also follow up with HR directly."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-17-a",
    "normId": "WP-17-lets-take-this-offline",
    "category": "Workplace",
    "setup": "In a video meeting you disagree with part of a plan. The lead says, “Let's take that offline,” and the call moves on.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Follow up promptly: “Do you have a few minutes today to pick up my point?”",
        "correct": true,
        "feedback": "It often protects a sensitive point from being aired in front of everyone, but you're expected to follow up yourself."
      },
      {
        "text": "Assume the topic is closed, since it wasn't picked up again in the meeting.",
        "correct": false,
        "feedback": "“Offline” means deferred, not dropped. If you don't follow up, nothing happens and your point is lost."
      },
      {
        "text": "Take it as a telling-off and stop raising concerns in meetings after that.",
        "correct": false,
        "feedback": "It isn't necessarily dismissive. Often the lead wants to discuss a sensitive point properly in private."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-17-b",
    "normId": "WP-17-lets-take-this-offline",
    "category": "Workplace",
    "setup": "You say “Let's take that offline” to a colleague who raised a concern in a meeting. You'd like to deal with it properly.",
    "prompt": "What do you do afterwards?",
    "options": [
      {
        "text": "Contact them the same day to arrange the conversation.",
        "correct": true,
        "feedback": "Taking it offline means deferring, not dropping. The follow-up has to happen."
      },
      {
        "text": "Wait for them to chase, since they raised the issue.",
        "correct": false,
        "feedback": "If neither of you follows up, the point drops. Deferral still needs an owner."
      },
      {
        "text": "Assume it's settled now that it's no longer discussed.",
        "correct": false,
        "feedback": "Moving it out of the room doesn't resolve it. They may feel dismissed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-WP-17-c",
    "normId": "WP-17-lets-take-this-offline",
    "category": "Workplace",
    "setup": "In a client call your colleague asks a tricky question. The client says, “Happy to chat about that separately.”",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Follow up promptly by email to arrange the separate conversation.",
        "correct": true,
        "feedback": "It's a polite way to avoid airing a point in public, but it needs active follow-up."
      },
      {
        "text": "Take it as closing the issue and say nothing more.",
        "correct": false,
        "feedback": "It's a deferral, not closure. Without a follow-up nothing happens."
      },
      {
        "text": "Take it as a refusal and raise it with the client's boss.",
        "correct": false,
        "feedback": "That escalates something that wasn't a refusal. A simple email is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-1-b",
    "normId": "HC-1-gp-appointment-brevity",
    "category": "Healthcare",
    "setup": "Your GP asks two questions, gives a short answer and stands up after a few minutes. You still have a concern.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Say so directly and ask for a longer appointment to cover it.",
        "correct": true,
        "feedback": "Short slots are about time, not dismissal. Asking for more time directly is normal."
      },
      {
        "text": "Take it as a sign she doesn't care and leave without raising it.",
        "correct": false,
        "feedback": "Brisk appointments are driven by time limits, not by how seriously she takes you."
      },
      {
        "text": "Stay seated and keep talking until she stops you.",
        "correct": false,
        "feedback": "That fights the clock. Asking for a longer slot works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-1-c",
    "normId": "HC-1-gp-appointment-brevity",
    "category": "Healthcare",
    "setup": "You have a GP appointment tomorrow about three different problems. Last time it felt over in a flash.",
    "prompt": "How do you prepare?",
    "options": [
      {
        "text": "Pick your top two or three points and say them early.",
        "correct": true,
        "feedback": "Short slots reward clear, prioritised points raised at the start."
      },
      {
        "text": "Plan to start with the full background so she sees the whole picture.",
        "correct": false,
        "feedback": "Long backgrounds eat the short slot before you reach what matters."
      },
      {
        "text": "Wait for her questions and answer them as they come.",
        "correct": false,
        "feedback": "She has little time to draw things out. Lead with your main points."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-1-d",
    "normId": "HC-1-gp-appointment-brevity",
    "category": "Healthcare",
    "setup": "A GP says “Right, that should do it” after a very short chat about your sleep problems. You feel dismissed.",
    "prompt": "How do you read the short appointment?",
    "options": [
      {
        "text": "As time pressure, not dismissal. Ask for a follow-up if you need more time.",
        "correct": true,
        "feedback": "Brevity reflects the system's time limits, not the doctor's view of your concern."
      },
      {
        "text": "As proof that she thinks your problem is trivial and not worth the time.",
        "correct": false,
        "feedback": "A short appointment is routine. It says little about how she views your problem."
      },
      {
        "text": "As a sign you should change to a different surgery straight away.",
        "correct": false,
        "feedback": "Most surgeries run to tight slots. Switching is unlikely to change that."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-1-e",
    "normId": "HC-1-gp-appointment-brevity",
    "category": "Healthcare",
    "setup": "On a telephone appointment the GP gives brief answers and says, “Is that everything?” after only a couple of minutes.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“Actually, I'd like a longer slot for the rest. Could we book one?”",
        "correct": true,
        "feedback": "Brevity is time pressure, not a brush-off. Asking for more time is accepted."
      },
      {
        "text": "“Yes, that's everything,” though it isn't, to avoid taking her time.",
        "correct": false,
        "feedback": "Staying quiet is read as nothing more to say. Your other concern goes unaddressed."
      },
      {
        "text": "“You haven't listened to me at all,” and ask for another doctor.",
        "correct": false,
        "feedback": "That mistakes speed for dismissal. A calm request for more time works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-2-b",
    "normId": "HC-2-referral-wait-silence",
    "category": "Healthcare",
    "setup": "Your GP referred you to a specialist five weeks ago. The only letter said, “We'll be in touch when your referral has been reviewed.”",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Phone the referral line to check where it is. Asking is normal.",
        "correct": true,
        "feedback": "Silence usually means a queue, not a lost referral. Checking status is expected."
      },
      {
        "text": "Assume it's lost and ask your GP to refer you somewhere else.",
        "correct": false,
        "feedback": "A long silence is typically backlog, not loss. A second referral restarts the wait."
      },
      {
        "text": "Wait quietly, since chasing would seem pushy.",
        "correct": false,
        "feedback": "Checking isn't rude. It's routine, and it can catch a genuine problem."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-2-c",
    "normId": "HC-2-referral-wait-silence",
    "category": "Healthcare",
    "setup": "A hospital letter says your scan request is “awaiting review.” Two months later there's no further contact.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Call the hospital's booking line and ask for the status.",
        "correct": true,
        "feedback": "No news is usually waiting time. A status call is normal and welcome."
      },
      {
        "text": "Take the silence as a sign your case is low priority and drop it.",
        "correct": false,
        "feedback": "Silence reflects the backlog, not a judgement of your case. Dropping it helps no one."
      },
      {
        "text": "Write a formal complaint about the delay straight away.",
        "correct": false,
        "feedback": "A complaint is out of proportion at this stage. A simple status call comes first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-2-d",
    "normId": "HC-2-referral-wait-silence",
    "category": "Healthcare",
    "setup": "Eight weeks after a referral you've heard nothing, and you worry you'd seem rude to chase it up.",
    "prompt": "How is chasing seen?",
    "options": [
      {
        "text": "As normal and expected. Call the surgery or the referral line.",
        "correct": true,
        "feedback": "Calling to check a referral's status is routine, not impolite."
      },
      {
        "text": "As rude, so it's better to wait to be contacted.",
        "correct": false,
        "feedback": "Waiting out of politeness is how referrals sit unnoticed."
      },
      {
        "text": "As acceptable only after a letter confirms the wait time.",
        "correct": false,
        "feedback": "You don't need a letter first. A status call is fine at any point."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-2-e",
    "normId": "HC-2-referral-wait-silence",
    "category": "Healthcare",
    "setup": "A friend heard nothing for weeks after her referral and says it must have been lost. She hasn't called anyone.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "Silence usually means waiting, not lost. Ring the surgery or referral line.",
        "correct": true,
        "feedback": "Long gaps are normal in the process. A phone check is quick and settles it."
      },
      {
        "text": "Agree it's lost and tell her to book a fresh GP appointment right away.",
        "correct": false,
        "feedback": "A new appointment is rarely the first step. First find out whether the referral exists."
      },
      {
        "text": "Tell her to wait a few more months before doing anything about it at all.",
        "correct": false,
        "feedback": "Waiting indefinitely helps nobody. A status call is easy and normal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-3-b",
    "normId": "HC-3-nhs-111-triage-language",
    "category": "Healthcare",
    "setup": "After an online symptom check about a mild rash, the result is calm, but it ends: “Call 999 if you develop chest pain, confusion or…”",
    "prompt": "How do you read the list?",
    "options": [
      {
        "text": "As standard safety wording given to everyone, not about your case.",
        "correct": true,
        "feedback": "It's defensive, standardised language. Ask how urgent your case actually is."
      },
      {
        "text": "As a warning that your rash is serious.",
        "correct": false,
        "feedback": "The list is given to nearly everyone. It doesn't signal extra concern about you."
      },
      {
        "text": "As irrelevant, so you ignore the rest of the advice too.",
        "correct": false,
        "feedback": "The wording is generic, but the rest of the advice still applies to you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-4-b",
    "normId": "HC-4-pharmacist-first-point-of-contact",
    "category": "Healthcare",
    "setup": "Your child has an earache. The surgery says, “The pharmacy can help with that first.” You wanted a doctor.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Go to the pharmacist. If it doesn't settle, ask for a GP appointment.",
        "correct": true,
        "feedback": "A pharmacist is the normal first step for minor problems, not a deflection."
      },
      {
        "text": "Insist on a GP, since a pharmacist isn't a proper clinician.",
        "correct": false,
        "feedback": "Pharmacists are trained for this and it's the standard first route for minor issues."
      },
      {
        "text": "Refuse both and wait it out at home.",
        "correct": false,
        "feedback": "Dropping help altogether skips the step that could solve it or confirm a GP is needed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-5-b",
    "normId": "HC-5-patient-advocating-for-self",
    "category": "Healthcare",
    "setup": "You have a short GP slot and two things to discuss, but the doctor starts by asking about your first.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "At the start: “There are two things I want to cover today.”",
        "correct": true,
        "feedback": "The system expects you to speak up early. Naming both up front lets her plan the time."
      },
      {
        "text": "Cover the first and hope she asks about anything else.",
        "correct": false,
        "feedback": "She'll usually assume there's nothing more unless you say so."
      },
      {
        "text": "Mention the second only if she seems to have time.",
        "correct": false,
        "feedback": "She may never seem to have time. Say it early."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-5-c",
    "normId": "HC-5-patient-advocating-for-self",
    "category": "Healthcare",
    "setup": "At the end of a routine jab the nurse says, “All done, anything else?” You'd meant to ask about recurring headaches.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Ask now: “Yes, one quick thing…”",
        "correct": true,
        "feedback": "“Anything else?” is your cue. Staying quiet is read as nothing more to raise."
      },
      {
        "text": "Stay quiet, since she's busy and you wouldn't want to bother her.",
        "correct": false,
        "feedback": "Politeness here reads as “nothing else”, so your concern goes unheard."
      },
      {
        "text": "Book a separate appointment later without mentioning it now.",
        "correct": false,
        "feedback": "You might save time by asking now. A quick question is welcome."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-5-d",
    "normId": "HC-5-patient-advocating-for-self",
    "category": "Healthcare",
    "setup": "You have a list of worries to raise before your GP appointment, and you're nervous about taking up time.",
    "prompt": "How do you prepare?",
    "options": [
      {
        "text": "Pick your main one or two and state them early and directly.",
        "correct": true,
        "feedback": "Focused, early points work in a short slot. You can book more time for the rest."
      },
      {
        "text": "Bring every worry and read the whole list aloud.",
        "correct": false,
        "feedback": "A long list can overrun the slot, and your main concern may be lost in it."
      },
      {
        "text": "Leave the list at home so you don't seem demanding.",
        "correct": false,
        "feedback": "Preparing isn't demanding. Being clear helps both of you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-6-a",
    "normId": "HC-6-cancellation-text-formality",
    "category": "Healthcare",
    "setup": "You get a text: “Your appointment on Tuesday has been cancelled. Please call to rebook.” No reason or apology is given.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Call to rebook, and ask plainly if there's a reason or a likely new date.",
        "correct": true,
        "feedback": "Blunt automated texts are standard admin, not a judgement of your case. Cancellations happen routinely for capacity reasons."
      },
      {
        "text": "Assume your case has been pushed down the list and give up.",
        "correct": false,
        "feedback": "A terse text doesn't mean you've been deprioritised. It's how the system routinely handles rescheduling."
      },
      {
        "text": "Wait for the surgery to send you a new appointment.",
        "correct": false,
        "feedback": "The text says to call. Waiting could leave you with no appointment at all."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-6-b",
    "normId": "HC-6-cancellation-text-formality",
    "category": "Healthcare",
    "setup": "A letter says your clinic appointment has been rescheduled, with no explanation, and offers a new date a few weeks later.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As routine admin. Call if you want a reason or an earlier slot.",
        "correct": true,
        "feedback": "Short, impersonal notices are standard and aren't a judgement of your case."
      },
      {
        "text": "As a sign that your case has been quietly downgraded in priority.",
        "correct": false,
        "feedback": "A blunt letter doesn't mean you've been deprioritised. Rescheduling is routine."
      },
      {
        "text": "As a reason to make a formal complaint to the clinic straight away.",
        "correct": false,
        "feedback": "A call to ask is a gentler first step than a complaint."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-7-a",
    "normId": "HC-7-mental-health-checkin-brevity",
    "category": "Healthcare",
    "setup": "Your GP reads a list of standard questions from the screen about your mood and doesn't ask much else.",
    "prompt": "What do you do at the end?",
    "options": [
      {
        "text": "Ask: “Can we talk a bit more about what's actually going on?”",
        "correct": true,
        "feedback": "The questions are a structured tool, not the whole assessment. More time can be requested."
      },
      {
        "text": "Assume that the questions were all the assessment that was needed.",
        "correct": false,
        "feedback": "The questionnaire is only a starting point. Your own account matters too."
      },
      {
        "text": "Conclude that she wasn't really listening and don't go back again.",
        "correct": false,
        "feedback": "It's a standard format. Asking for a fuller conversation is accepted."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-7-b",
    "normId": "HC-7-mental-health-checkin-brevity",
    "category": "Healthcare",
    "setup": "You feel the GP only ticked boxes during a check about your stress levels.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a structured tool, not the whole assessment. You can ask for more time.",
        "correct": true,
        "feedback": "Standard questionnaires frame the check, but a fuller conversation can follow."
      },
      {
        "text": "As proof that your problem isn't being taken seriously by the doctor.",
        "correct": false,
        "feedback": "The format is routine for everyone. It doesn't reflect how seriously she takes you."
      },
      {
        "text": "As a sign that the answers you gave didn't matter much to her at all.",
        "correct": false,
        "feedback": "Your answers are the point of the tool. They shape what happens next."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-8-b",
    "normId": "HC-8-watchful-waiting-approach",
    "category": "Healthcare",
    "setup": "On a phone appointment about your child's mild cough, the GP says, “Let's see how it settles. Come back if it hasn't improved by next Friday.” No tests are offered.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask what to watch for and when to ring back, then put the date in your diary.",
        "correct": true,
        "feedback": "Waiting is a deliberate plan for minor problems, not neglect. The date and what to watch for are what you need."
      },
      {
        "text": "Press for a test or referral before the call ends.",
        "correct": false,
        "feedback": "Waiting is standard practice for minor issues, not neglect. Pressing for tests misses what the plan is."
      },
      {
        "text": "Treat it as a brush-off and book with a different GP.",
        "correct": false,
        "feedback": "A wait-and-see plan isn't a brush-off. Another GP would likely suggest the same, so you'd gain little."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-8-c",
    "normId": "HC-8-watchful-waiting-approach",
    "category": "Healthcare",
    "setup": "For a sore knee after a run the GP says, “Let's give it a couple of weeks and see how it settles,” and sends you home with no scan.",
    "prompt": "What does that mean?",
    "options": [
      {
        "text": "A deliberate plan for a minor problem. Ask what would mean returning sooner.",
        "correct": true,
        "feedback": "Waiting is evidence-based for minor, self-limiting issues, not a sign she doubts you."
      },
      {
        "text": "That she thinks your pain is exaggerated and not worth investigating.",
        "correct": false,
        "feedback": "Waiting is standard for minor problems. It isn't doubt about your pain."
      },
      {
        "text": "That a scan has been booked for you and will arrive in the post.",
        "correct": false,
        "feedback": "No test was offered, so nothing has been booked. Ask what to watch for."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-8-d",
    "normId": "HC-8-watchful-waiting-approach",
    "category": "Healthcare",
    "setup": "A practice nurse tells you to “watch it and come back if it hasn't improved by the end of the month.”",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Follow the plan, note any changes and ask what to watch for.",
        "correct": true,
        "feedback": "It's a deliberate wait-and-see plan. Knowing what to watch for makes it work."
      },
      {
        "text": "Insist on seeing a doctor today instead of following the plan.",
        "correct": false,
        "feedback": "Pressing for escalation misses that waiting is the standard plan for minor issues."
      },
      {
        "text": "Ignore the plan completely, since nobody will mind either way.",
        "correct": false,
        "feedback": "The plan has a checkpoint. Following it is how you get follow-up in time."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-8-e",
    "normId": "HC-8-watchful-waiting-approach",
    "category": "Healthcare",
    "setup": "A friend says her GP “did nothing” because he said to wait and see for a minor rash. She's thinking of complaining.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "Waiting is a deliberate approach, not neglect. Ask what signs to watch for.",
        "correct": true,
        "feedback": "Wait-and-see is standard for many minor conditions. It's a plan, not a dismissal."
      },
      {
        "text": "Agree with her, and tell her to switch to a different surgery.",
        "correct": false,
        "feedback": "A deliberate wait isn't doing nothing, and a new surgery is likely to say the same."
      },
      {
        "text": "Tell her to wait quietly and say nothing at all to anyone about it.",
        "correct": false,
        "feedback": "She should still ask what to watch for and when to return."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-9-b",
    "normId": "HC-9-econsult-online-triage-form",
    "category": "Healthcare",
    "setup": "A surgery's recorded message says, “To book a non-urgent appointment, please complete the online form on our website.” You'd prefer to phone.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Use the form and describe the problem specifically and completely.",
        "correct": true,
        "feedback": "The form is the surgery's standard triage route, often faster than expected."
      },
      {
        "text": "Keep calling until a person agrees to book you in.",
        "correct": false,
        "feedback": "Phone lines are not the main route now. Calling repeatedly won't change that."
      },
      {
        "text": "Fill it in very briefly, since they'll phone for details.",
        "correct": false,
        "feedback": "A thin form can slow triage. Be specific and complete."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-10-b",
    "normId": "HC-10-same-day-urgent-only-gatekeeping",
    "category": "Healthcare",
    "setup": "At eight in the morning you ring for a same-day slot. The receptionist says, “Same-day slots are for urgent issues. Can I ask what it's regarding?”",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Explain what's wrong and how long it's lasted so she can route you.",
        "correct": true,
        "feedback": "It's a routine triage question asked of everyone, not doubt about your concern."
      },
      {
        "text": "Just say it's urgent and refuse to give any more detail than that.",
        "correct": false,
        "feedback": "Without detail she can't route you to the right slot."
      },
      {
        "text": "Take it as her doubting your honesty and make a complaint about it.",
        "correct": false,
        "feedback": "She asks everyone this. A clear answer gets you routed faster."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-11-b",
    "normId": "HC-11-ae-triage-wait-times",
    "category": "Healthcare",
    "setup": "After a brief check at A&E you've waited hours with no news. Someone who arrived after you is called through.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Remember triage ranks by urgency. Ask the desk for a rough update.",
        "correct": true,
        "feedback": "A long wait after triage usually means others were more urgent. Asking for an update is fine."
      },
      {
        "text": "Assume you were forgotten by the staff and leave the department.",
        "correct": false,
        "feedback": "You were assessed on arrival. Leaving means losing your place."
      },
      {
        "text": "Insist loudly to the staff at the desk that you should be seen next.",
        "correct": false,
        "feedback": "Order is by urgency, not arrival. A calm query to the desk works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-12-a",
    "normId": "HC-12-two-week-review-standard",
    "category": "Healthcare",
    "setup": "Your GP says, “If it's not settled in two weeks, book back in.” Months ago, for an unrelated problem, they said exactly the same.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As a genuine checkpoint. If you're still unwell at two weeks, book the follow-up yourself.",
        "correct": true,
        "feedback": "It's a standard rule of thumb, not a verdict on you. Treat it as a real checkpoint and book the follow-up yourself if symptoms persist."
      },
      {
        "text": "As a generic brush-off, so there's no point going back.",
        "correct": false,
        "feedback": "The same wording is used for many complaints because the timeframe is a general clinical checkpoint, not a dismissal of your concern."
      },
      {
        "text": "As a promise that the surgery will contact you at two weeks.",
        "correct": false,
        "feedback": "Nobody is likely to prompt you. If symptoms persist, booking the follow-up is down to you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-12-b",
    "normId": "HC-12-two-week-review-standard",
    "category": "Healthcare",
    "setup": "A nurse says about a persistent cough, “If it hasn't cleared in two weeks, give us a ring.”",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Note the date and call yourself if it hasn't cleared.",
        "correct": true,
        "feedback": "The two-week mark is a general checkpoint. Following up is up to you."
      },
      {
        "text": "Expect the surgery to call you at two weeks.",
        "correct": false,
        "feedback": "Surgeries rarely chase. The follow-up is yours to book."
      },
      {
        "text": "Ignore the advice since it's what they tell everyone.",
        "correct": false,
        "feedback": "It's common advice because it works as a checkpoint, not because it's meaningless."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-12-c",
    "normId": "HC-12-two-week-review-standard",
    "category": "Healthcare",
    "setup": "A GP said, “Book back in if it's not settled in two weeks.” It's now two weeks and you still have symptoms, but you feel you'd be bothering her.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Book the follow-up. That's exactly what the checkpoint is for.",
        "correct": true,
        "feedback": "She told you to come back at this point. It's not a bother."
      },
      {
        "text": "Wait a few more weeks, since she must think it's only minor.",
        "correct": false,
        "feedback": "She named a checkpoint for a reason. Waiting longer ignores her advice."
      },
      {
        "text": "Wait for the surgery to get in touch with you about a follow-up.",
        "correct": false,
        "feedback": "Nobody will chase you. Booking is your move."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-12-d",
    "normId": "HC-12-two-week-review-standard",
    "category": "Healthcare",
    "setup": "A friend got the same “see how it goes in two weeks” advice for an ankle and for a rash. She wonders if doctors just say it by habit.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "It's a general rule of thumb, still worth treating as a real checkpoint.",
        "correct": true,
        "feedback": "It's applied broadly because it's a useful clinical timeframe, not because her case is ignored."
      },
      {
        "text": "Yes, it's just a way of brushing patients off without checking.",
        "correct": false,
        "feedback": "A widely used rule of thumb isn't a brush-off. It's a checkpoint."
      },
      {
        "text": "It means two weeks is exactly how long hers will take to clear up.",
        "correct": false,
        "feedback": "It's general, not a prediction for her own case."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-12-e",
    "normId": "HC-12-two-week-review-standard",
    "category": "Healthcare",
    "setup": "After a phone consultation your GP texts: “If it's not settled in two weeks, book back in.”",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As a useful checkpoint. Book a GP slot if symptoms persist.",
        "correct": true,
        "feedback": "A standard marker, not a verdict on you. Booking proactively is the point."
      },
      {
        "text": "As a polite way for the GP to get rid of you for a fortnight.",
        "correct": false,
        "feedback": "It's a routine safety net, not a closing line."
      },
      {
        "text": "As a diagnosis that the problem will definitely clear by then.",
        "correct": false,
        "feedback": "It's a checkpoint, not a prediction about how your case will go."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-13-a",
    "normId": "HC-13-health-visitor-checklist-visits",
    "category": "Healthcare",
    "setup": "A health visitor ticks through a printed list asking about your baby's feeding and sleep. You feel judged.",
    "prompt": "How do you read the questions?",
    "options": [
      {
        "text": "As a standard checklist for all families. Answer honestly and raise any worries.",
        "correct": true,
        "feedback": "These are routine screening questions, not a targeted evaluation of you."
      },
      {
        "text": "As a sign that she suspects you of doing something wrong with your baby.",
        "correct": false,
        "feedback": "Every new parent gets the same set. It doesn't point at you in particular."
      },
      {
        "text": "As an optional chat, so you answer only the questions you feel like.",
        "correct": false,
        "feedback": "Honest answers help her screen properly. Raising worries is welcome."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-13-b",
    "normId": "HC-13-health-visitor-checklist-visits",
    "category": "Healthcare",
    "setup": "During a health visit you want to ask about your baby's rash, but the visitor is moving through her form.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Raise it directly. The form doesn't stop you asking questions.",
        "correct": true,
        "feedback": "The format is structured, but follow-up questions are welcome."
      },
      {
        "text": "Wait until she finishes and hope she asks about it.",
        "correct": false,
        "feedback": "She may not ask. Speak up when it's relevant."
      },
      {
        "text": "Skip it, since the visit isn't for that.",
        "correct": false,
        "feedback": "The visit is a chance to raise real worries as well as the checklist."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-14-a",
    "normId": "HC-14-appointment-letter-postal-delay",
    "category": "Healthcare",
    "setup": "At a GP referral you're told, “You'll receive a letter with your appointment details.” Three weeks pass without one.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Call to confirm an appointment exists.",
        "correct": true,
        "feedback": "Postal delay is normal, but the timeframe is a cue to check. Calling is not rude."
      },
      {
        "text": "Assume the referral was lost and ask for another.",
        "correct": false,
        "feedback": "Silence isn't loss. First confirm whether an appointment is booked."
      },
      {
        "text": "Wait indefinitely, since they said they would write.",
        "correct": false,
        "feedback": "Letters can be delayed or missed. A short call settles it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-14-b",
    "normId": "HC-14-appointment-letter-postal-delay",
    "category": "Healthcare",
    "setup": "A friend's letter about her referral hasn't arrived after the stated time. She worries it means she's low priority.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "Postal delay isn't a priority signal. Call to check an appointment exists.",
        "correct": true,
        "feedback": "Letters take time and say nothing about priority. A call confirms what's booked."
      },
      {
        "text": "Yes, no letter by now means her case has been given low priority.",
        "correct": false,
        "feedback": "It's an admin process, not a ranking of her case."
      },
      {
        "text": "Wait quietly until her GP rings her to say what is happening.",
        "correct": false,
        "feedback": "Her GP probably won't. She can check herself."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-15-b",
    "normId": "HC-15-second-opinion-request-phrasing",
    "category": "Healthcare",
    "setup": "You tell your GP, “I just want to make sure I've explored everything.” She says, “That's fine,” and moves on.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "State it plainly: “I'd like a second opinion. How do I arrange that?”",
        "correct": true,
        "feedback": "Hedged phrasing may not be picked up. A plain request is accepted."
      },
      {
        "text": "Leave it there, since she has clearly heard what you meant.",
        "correct": false,
        "feedback": "She may not have realised it was a request. Be plain."
      },
      {
        "text": "Switch surgeries without telling her, to avoid an awkward talk.",
        "correct": false,
        "feedback": "That bypasses an easy conversation. A plain request is accepted."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-15-c",
    "normId": "HC-15-second-opinion-request-phrasing",
    "category": "Healthcare",
    "setup": "You hesitate to ask your GP for a second opinion because it might sound as if you doubt her.",
    "prompt": "How do you see the request?",
    "options": [
      {
        "text": "As normal and accepted. State it plainly and politely.",
        "correct": true,
        "feedback": "Doctors expect it. Gentle hedging is politeness, not a sign you shouldn't ask."
      },
      {
        "text": "As an insult to avoid unless you're sure she's wrong.",
        "correct": false,
        "feedback": "A second opinion isn't an insult. It's an ordinary request."
      },
      {
        "text": "As a formal complaint to be made in writing.",
        "correct": false,
        "feedback": "It's not a complaint. A short polite request is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-15-d",
    "normId": "HC-15-second-opinion-request-phrasing",
    "category": "Healthcare",
    "setup": "A friend delayed asking for a second opinion for weeks by hinting. Her GP never picked up on it.",
    "prompt": "What do you advise?",
    "options": [
      {
        "text": "Ask plainly: “I'd like a second opinion. Could you point me to how?”",
        "correct": true,
        "feedback": "Hints get missed. A plain, polite request is normal."
      },
      {
        "text": "Keep hinting, since a good doctor will always pick up on hints.",
        "correct": false,
        "feedback": "Hints are easy to miss, and she's already lost weeks."
      },
      {
        "text": "Write straight to the hospital instead of going through the GP.",
        "correct": false,
        "feedback": "Skipping the GP won't help. A plain ask will."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-16-a",
    "normId": "HC-16-nhs-vs-private-dental-referral",
    "category": "Healthcare",
    "setup": "A dentist says, “We can do this on the NHS, or there's a private option with a tooth-coloured finish.” She uses the same neutral tone for both.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask what you'd actually get with each.",
        "correct": true,
        "feedback": "Both are valid options with different trade-offs. Mentioning private isn't a push."
      },
      {
        "text": "Assume she's pressing you to pay and refuse both.",
        "correct": false,
        "feedback": "A neutral mention isn't pressure. Refusing both could leave you without treatment."
      },
      {
        "text": "Take the private one, since it must be better.",
        "correct": false,
        "feedback": "Private isn't automatically better for you. Compare before choosing."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-16-b",
    "normId": "HC-16-nhs-vs-private-dental-referral",
    "category": "Healthcare",
    "setup": "At a dental check-up you're offered an NHS filling or a private one with different materials.",
    "prompt": "How do you decide?",
    "options": [
      {
        "text": "Ask about the practical differences before choosing.",
        "correct": true,
        "feedback": "Each route has trade-offs. A direct question lets you choose with facts."
      },
      {
        "text": "Pick NHS only, since mentioning private means you're being pressured.",
        "correct": false,
        "feedback": "Mentioning private isn't pressure. It's part of describing your options."
      },
      {
        "text": "Ask which is cheapest and decide on cost alone.",
        "correct": false,
        "feedback": "Cost matters, but so do materials and finish. Ask what you'd actually get."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-17-a",
    "normId": "HC-17-duty-doctor-any-available-gp",
    "category": "Healthcare",
    "setup": "You ring for an appointment. Reception says, “You'll speak to the duty doctor today.” Your usual GP knows your history.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "If continuity matters, ask whether it can be booked with your usual GP.",
        "correct": true,
        "feedback": "The duty system is routine capacity management, not a downgrade. You can ask for your own GP."
      },
      {
        "text": "Assume it will be a lesser, rushed appointment and decline it.",
        "correct": false,
        "feedback": "A duty doctor is a full doctor. Declining wastes the slot."
      },
      {
        "text": "Accept without asking, even though continuity matters a lot here.",
        "correct": false,
        "feedback": "You're allowed to ask. A short question may get you your usual GP."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HC-17-b",
    "normId": "HC-17-duty-doctor-any-available-gp",
    "category": "Healthcare",
    "setup": "The surgery says, “The duty doctor will call you this afternoon.” You have an ongoing issue.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Take the call and ask if a follow-up can be with your usual GP.",
        "correct": true,
        "feedback": "It's routine capacity management. Continuity can still be requested."
      },
      {
        "text": "Decline, since a stranger can't help you.",
        "correct": false,
        "feedback": "The duty doctor can assess you, and the surgery will have your notes."
      },
      {
        "text": "Assume your usual GP is unavailable to you specifically.",
        "correct": false,
        "feedback": "It's about capacity that day, not your access to her."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-1-b",
    "normId": "HL-1-landlord-vague-commitment",
    "category": "Housing & landlord",
    "setup": "A week ago you reported a broken window latch to your letting agent. They replied, “I'll look into it.” You've heard nothing since.",
    "prompt": "How do you chase it?",
    "options": [
      {
        "text": "Email asking for a date: “Could you confirm when someone can come to fix it?”",
        "correct": true,
        "feedback": "“I'll look into it” isn't a commitment and often means low priority until you follow up. A written ask for a date helps."
      },
      {
        "text": "Message “No rush at all, whenever suits.”",
        "correct": false,
        "feedback": "That tells them it's low priority. A polite message can still ask for a date."
      },
      {
        "text": "Wait another month, since they said they're looking into it.",
        "correct": false,
        "feedback": "“Looking into it” has no deadline attached. Without a follow-up, repairs often sit at the bottom of the list."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-1-c",
    "normId": "HL-1-landlord-vague-commitment",
    "category": "Housing & landlord",
    "setup": "You text your landlord about mould in the bathroom. He replies, “Will see what I can do.” That was ten days ago.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Follow up in writing and ask for a rough date.",
        "correct": true,
        "feedback": "“See what I can do” isn't a commitment. A specific, written ask moves it along."
      },
      {
        "text": "Reply “No problem, thanks!” and let it sit.",
        "correct": false,
        "feedback": "Warm replies let a vague promise stay vague. Ten days is long enough to chase."
      },
      {
        "text": "Take it as a refusal and arrange your own repair.",
        "correct": false,
        "feedback": "It isn't a refusal, and arranging it yourself could cause problems. Ask first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-1-d",
    "normId": "HL-1-landlord-vague-commitment",
    "category": "Housing & landlord",
    "setup": "Your letting agent says, “I'll chase the landlord and let you know” about a broken boiler. Three days later you've heard nothing.",
    "prompt": "How do you read the silence?",
    "options": [
      {
        "text": "As low priority unless you follow up. Email asking for a date.",
        "correct": true,
        "feedback": "Vague promises with no timeframe often mean low priority until chased."
      },
      {
        "text": "As a polite way of saying no without actually saying it.",
        "correct": false,
        "feedback": "It isn't necessarily a refusal, but it isn't a commitment either."
      },
      {
        "text": "As solid proof that the boiler will be repaired within the next few days.",
        "correct": false,
        "feedback": "Without a date, nothing is actually in motion. Follow up."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-1-e",
    "normId": "HL-1-landlord-vague-commitment",
    "category": "Housing & landlord",
    "setup": "You need your landlord to repair a leaking tap and want to chase politely after he said, “I'll look into it.”",
    "prompt": "How do you word your follow-up?",
    "options": [
      {
        "text": "“Could you give me a rough date for the repair?”",
        "correct": true,
        "feedback": "A specific, polite ask is what turns a vague promise into a plan."
      },
      {
        "text": "“No rush at all, whenever suits you best, thanks again!”",
        "correct": false,
        "feedback": "That tells him it's low priority, which is how repairs get delayed."
      },
      {
        "text": "“Fix it immediately or I'll be complaining to someone else.”",
        "correct": false,
        "feedback": "That escalates before he's had a chance to give a date. A calm ask works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-2-b",
    "normId": "HL-2-passive-aggressive-written-notice",
    "category": "Housing & landlord",
    "setup": "Your landlord emails: “Just a friendly reminder that the garden should be kept tidy, hope you don't mind me mentioning it.” It's the third such message.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a firm request. Tidy the garden and reply briefly.",
        "correct": true,
        "feedback": "Soft wording on a repeated issue is a polite buffer around a real complaint."
      },
      {
        "text": "As a casual suggestion to handle when it suits you.",
        "correct": false,
        "feedback": "A third reminder means it's a firm issue, however friendly the wording."
      },
      {
        "text": "As hostility, so you reply sharply.",
        "correct": false,
        "feedback": "It's polite on the surface and still serious. Respond to the practical issue."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-2-c",
    "normId": "HL-2-passive-aggressive-written-notice",
    "category": "Housing & landlord",
    "setup": "A flatmate leaves a note on your door: “Hope you don't mind me asking, but could the music be a bit quieter after ten?” This is the second note.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Treat it as a firm complaint. Turn it down and say sorry in person.",
        "correct": true,
        "feedback": "Politeness is a social buffer. Repeated notes mean the issue really bothers them."
      },
      {
        "text": "Keep it as it is unless they ask again, since they said they don't mind asking.",
        "correct": false,
        "feedback": "“Hope you don't mind me asking” is cushioning. A second note is a real complaint."
      },
      {
        "text": "Reply with a joking note to lighten the mood.",
        "correct": false,
        "feedback": "A joke can read as dismissing a genuine complaint. Fix the issue and apologise."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-2-d",
    "normId": "HL-2-passive-aggressive-written-notice",
    "category": "Housing & landlord",
    "setup": "A letter from the agent starts, “Just a friendly reminder that rent is due on the first.” It's the third reminder.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As a serious chase. Pay or get in touch today.",
        "correct": true,
        "feedback": "Friendly wording repeated three times is a firm message. Respond to the practical issue."
      },
      {
        "text": "As a friendly nudge that can wait a few days.",
        "correct": false,
        "feedback": "Repetition signals urgency, even if the tone stays pleasant."
      },
      {
        "text": "As an admin error, so ignore it.",
        "correct": false,
        "feedback": "If it's wrong, say so. Ignoring a third reminder risks making it worse."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-2-e",
    "normId": "HL-2-passive-aggressive-written-notice",
    "category": "Housing & landlord",
    "setup": "A neighbour texts: “Hope you don't mind me asking, could you move your bike from the shared hallway?” It's the second time.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Treat it as a firm complaint. Move it and acknowledge the message.",
        "correct": true,
        "feedback": "A polite repeat is a real request wrapped in courtesy."
      },
      {
        "text": "Answer when you next see them, since it was only a casual question.",
        "correct": false,
        "feedback": "A repeated request isn't casual. It's a firm complaint in soft wording."
      },
      {
        "text": "Ask them to be more direct next time.",
        "correct": false,
        "feedback": "That shifts blame. Deal with the bike first, then have a friendly chat."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-3-b",
    "normId": "HL-3-inventory-check-in-formality",
    "category": "Housing & landlord",
    "setup": "At check-in the agent says, “Just sign here, it's all standard,” and hurries you through the room-by-room list.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Take your time, check each item and add notes and photos before signing.",
        "correct": true,
        "feedback": "The inventory is your main protection later. A quick sign-off works against you."
      },
      {
        "text": "Sign quickly and without comment, to seem agreeable and easygoing.",
        "correct": false,
        "feedback": "Rushing to be polite can leave you unable to dispute marks that were already there."
      },
      {
        "text": "Sign now and plan to go through it properly later in your own time.",
        "correct": false,
        "feedback": "Once signed it's hard to add corrections. Check first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-4-a",
    "normId": "HL-4-section-21-notice-tone",
    "category": "Housing & landlord",
    "setup": "Your landlord has always been friendly. Now you get a formal notice in stiff, official wording, giving a reason for ending your tenancy.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Read the reason carefully, then ask an independent housing adviser what it means for you.",
        "correct": true,
        "feedback": "The formal tone is just how such notices are written, not personal anger. What matters is the reason given, so check it with an adviser."
      },
      {
        "text": "Assume the landlord has turned hostile and confront them.",
        "correct": false,
        "feedback": "The stiff wording is just the formal style of these notices, not a sign the relationship has broken down."
      },
      {
        "text": "Ignore it as a formality until they raise it in person.",
        "correct": false,
        "feedback": "A formal notice isn't a formality you can ignore. It gives a real reason, so read it properly and get advice."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-4-b",
    "normId": "HL-4-section-21-notice-tone",
    "category": "Housing & landlord",
    "setup": "The letting agent who has always been helpful emails a formal notice in cold, official language, stating the reason the landlord wants you to leave.",
    "prompt": "How do you read the tone?",
    "options": [
      {
        "text": "As standard formal language. Read the reason closely and get advice.",
        "correct": true,
        "feedback": "The stiff style is how such notices are written. The reason given is what matters."
      },
      {
        "text": "As proof that the agent has now come to dislike you personally.",
        "correct": false,
        "feedback": "The coldness is the formal style, not a verdict on you."
      },
      {
        "text": "As a template you can skim quickly, since it won't change anything.",
        "correct": false,
        "feedback": "A formal notice states a real reason. Read it properly and check what it means."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-5-a",
    "normId": "HL-5-deposit-protection-scheme-silence",
    "category": "Housing & landlord",
    "setup": "Three weeks after moving in you've had no confirmation that your deposit is protected, and you worry that asking would sound distrustful.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Ask in writing: “Could you send me the deposit protection reference?”",
        "correct": true,
        "feedback": "It's a standard, expected request, not an accusation. It's better asked early."
      },
      {
        "text": "Assume it's all fine and wait for them to mention it themselves.",
        "correct": false,
        "feedback": "Nobody necessarily volunteers it. Without asking you can't confirm anything."
      },
      {
        "text": "Ask in an accusing tone whether they've actually protected it at all.",
        "correct": false,
        "feedback": "A neutral request is all that's needed. An accusing tone isn't."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-5-b",
    "normId": "HL-5-deposit-protection-scheme-silence",
    "category": "Housing & landlord",
    "setup": "Your tenancy agreement mentions the deposit in a single line. The agent never explained where it is held.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Email asking for the scheme reference. It's a normal request.",
        "correct": true,
        "feedback": "A brief line isn't confirmation. A polite written request is standard."
      },
      {
        "text": "Wait, since they'd have said if there was a problem.",
        "correct": false,
        "feedback": "Silence isn't confirmation. It's up to you to check."
      },
      {
        "text": "Wait until you move out and raise it then.",
        "correct": false,
        "feedback": "That leaves it too late to sort anything out. Ask early."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-6-b",
    "normId": "HL-6-shared-house-kitchen-etiquette-notes",
    "category": "Housing & landlord",
    "setup": "A note appears on the bathroom door: “Friendly reminder to clean up after yourselves ” You often leave hair in the sink.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As built-up frustration. Clean up and acknowledge it in person.",
        "correct": true,
        "feedback": "By the time a cheerful note appears, the issue has usually been building for a while."
      },
      {
        "text": "As a general note aimed at the other housemates and not really at you.",
        "correct": false,
        "feedback": "A smiley note usually has a specific cause. Don't assume it's not you."
      },
      {
        "text": "As a light-hearted joke that you can safely ignore without any reply.",
        "correct": false,
        "feedback": "It's friendly phrasing around a real irritation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-6-c",
    "normId": "HL-6-shared-house-kitchen-etiquette-notes",
    "category": "Housing & landlord",
    "setup": "A flatmate writes on the whiteboard: “Whoever keeps finishing the milk, no worries!”",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As irritation that has built up. Replace it and say sorry in person.",
        "correct": true,
        "feedback": "“No worries” in a note often masks real annoyance after repeated incidents."
      },
      {
        "text": "As genuinely meaning no worries, so you carry on exactly as before.",
        "correct": false,
        "feedback": "The cheerful tone hides repeated frustration. It's probably not a one-off."
      },
      {
        "text": "As a challenge to you, so you write a sharper note back in reply.",
        "correct": false,
        "feedback": "A note war makes things worse. A quick apology works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-6-d",
    "normId": "HL-6-shared-house-kitchen-etiquette-notes",
    "category": "Housing & landlord",
    "setup": "A group chat message says, “Just a gentle thought, maybe we could all be quieter at night?” You came home late twice this week.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Assume it's partly aimed at you. Apologise briefly and adjust.",
        "correct": true,
        "feedback": "Gentle wording in a shared-space message often covers a real complaint."
      },
      {
        "text": "Assume it's a general message and not really about you at all.",
        "correct": false,
        "feedback": "It's rarely random. Likely someone is bothered."
      },
      {
        "text": "Reply to the group asking who exactly it was that complained.",
        "correct": false,
        "feedback": "That creates conflict. An easy apology resolves it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-6-e",
    "normId": "HL-6-shared-house-kitchen-etiquette-notes",
    "category": "Housing & landlord",
    "setup": "A flatmate leaves a smiley note about shoes in the hallway. Nobody has mentioned it before.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "Probably the end of a build-up. Respond promptly and ask if it's an issue.",
        "correct": true,
        "feedback": "A first note usually isn't the first irritation. Responding fast shows good faith."
      },
      {
        "text": "As the first time anyone has said anything, so it can't be a big deal.",
        "correct": false,
        "feedback": "Notes appear after frustration has grown, not before."
      },
      {
        "text": "As petty behaviour from a flatmate, so you just ignore it completely.",
        "correct": false,
        "feedback": "Ignoring it risks the build-up turning into a row."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-7-b",
    "normId": "HL-7-viewing-feedback-silence",
    "category": "Housing & landlord",
    "setup": "After viewing a room in a shared house, the landlord says, “We'll let you know by Friday.” Friday passes with no message.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Treat it as a likely no, keep viewing, and send one polite follow-up.",
        "correct": true,
        "feedback": "Silence past the stated date functions as the rejection."
      },
      {
        "text": "Hold off viewing any other places until they have replied to you.",
        "correct": false,
        "feedback": "You could lose other options while waiting for a probable no."
      },
      {
        "text": "Message the landlord every day until they finally respond to you.",
        "correct": false,
        "feedback": "Chasing repeatedly won't help and may put them off."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-7-c",
    "normId": "HL-7-viewing-feedback-silence",
    "category": "Housing & landlord",
    "setup": "You loved a flat and the agent said, “We'll let you know either way.” Ten days pass, and you have another viewing booked tomorrow.",
    "prompt": "Do you keep the other viewing?",
    "options": [
      {
        "text": "Yes. Silence usually means no, and you can still chase once.",
        "correct": true,
        "feedback": "Silence past the timeframe is the usual rejection, so don't pause your search."
      },
      {
        "text": "No, cancel it, since it would be disloyal while they decide.",
        "correct": false,
        "feedback": "Waiting loyally costs you real chances when silence usually means no."
      },
      {
        "text": "Yes, but only once they confirm they've rejected you.",
        "correct": false,
        "feedback": "A formal rejection often never comes. Don't wait for one."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-7-d",
    "normId": "HL-7-viewing-feedback-silence",
    "category": "Housing & landlord",
    "setup": "A friend has waited three weeks for a rental answer after a viewing, turning down other viewings in the meantime.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "Silence past the date is the rejection. Resume viewing and chase once.",
        "correct": true,
        "feedback": "In UK rentals a clear no is uncommon. Silence is the answer."
      },
      {
        "text": "Keep waiting, since agents are known to be very slow in her area.",
        "correct": false,
        "feedback": "Slowness doesn't explain three weeks of silence. She's likely lost time already."
      },
      {
        "text": "Phone the agent every single day until they finally say it's a no.",
        "correct": false,
        "feedback": "Repeated calls rarely help. One polite chase is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-7-e",
    "normId": "HL-7-viewing-feedback-silence",
    "category": "Housing & landlord",
    "setup": "After your viewing the agent writes, “We'll revert shortly.” A fortnight passes.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Take “shortly” as passed. Keep looking, and ask once for a final answer.",
        "correct": true,
        "feedback": "Silence beyond the implied time is the rejection. One polite chase is enough."
      },
      {
        "text": "Treat “shortly” as meaning that they will reply to you any day now.",
        "correct": false,
        "feedback": "A fortnight is long past shortly. Waiting costs you options."
      },
      {
        "text": "Assume you got the flat and the confirmation email was simply lost.",
        "correct": false,
        "feedback": "That's wishful thinking. One quick message will settle it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-8-b",
    "normId": "HL-8-referencing-in-progress-delay",
    "category": "Housing & landlord",
    "setup": "Your agent says referencing is “with the provider.” You suspect your employer's reference may be holding it up.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask your employer's HR whether they've received the request.",
        "correct": true,
        "feedback": "Referencing often stalls on outside parties. Helping chase can unblock it."
      },
      {
        "text": "Assume that you have been rejected and look at other flats.",
        "correct": false,
        "feedback": "Delays usually come from slow third parties, not rejection."
      },
      {
        "text": "Ask the agent for a progress update on it every single day.",
        "correct": false,
        "feedback": "The agent can't speed up an outside reply. Chase the source."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-8-c",
    "normId": "HL-8-referencing-in-progress-delay",
    "category": "Housing & landlord",
    "setup": "After two weeks an agent replies, “Referencing is taking a little longer than expected.” You wonder if you've failed.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "Not a rejection. Ask which part is outstanding.",
        "correct": true,
        "feedback": "Delays are usually an outside provider being slow, not a problem with you."
      },
      {
        "text": "As a polite way of rejecting your application.",
        "correct": false,
        "feedback": "A rejection would more likely be silence or a firm no. This is a delay."
      },
      {
        "text": "As a sign that the agent is lazy and not doing the job.",
        "correct": false,
        "feedback": "The bottleneck is often external. Ask what's outstanding."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-8-d",
    "normId": "HL-8-referencing-in-progress-delay",
    "category": "Housing & landlord",
    "setup": "Your agent says your previous landlord hasn't replied to the reference request.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Contact your old landlord yourself and ask them to reply.",
        "correct": true,
        "feedback": "A nudge from you can speed up the missing reference."
      },
      {
        "text": "Wait for the agent to sort it out.",
        "correct": false,
        "feedback": "They may be waiting too. Your nudge can unblock it."
      },
      {
        "text": "Tell the agent to use someone else without asking.",
        "correct": false,
        "feedback": "They may not accept that. Try your old landlord first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-8-e",
    "normId": "HL-8-referencing-in-progress-delay",
    "category": "Housing & landlord",
    "setup": "Referencing is “still with the credit agency,” and your move-in date is a few days away.",
    "prompt": "What do you ask?",
    "options": [
      {
        "text": "Which part is outstanding, and whether you can help chase it.",
        "correct": true,
        "feedback": "A specific question helps more than pressure and shows you're proactive."
      },
      {
        "text": "Demand that they give you a firm yes by tomorrow morning.",
        "correct": false,
        "feedback": "They can't control the provider's speed. Pressure doesn't help."
      },
      {
        "text": "Ask them to skip the referencing process for you altogether.",
        "correct": false,
        "feedback": "They won't skip it. Ask what's outstanding."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-9-a",
    "normId": "HL-9-fair-wear-and-tear-phrase",
    "category": "Housing & landlord",
    "setup": "The landlord's deposit breakdown lists several charges, with “fair wear and tear” mentioned in the notes. You think a carpet mark is just age.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Reply item by item, saying why the carpet mark is ordinary ageing.",
        "correct": true,
        "feedback": "The phrase isn't an automatic waiver. Tenants usually need to argue each item specifically."
      },
      {
        "text": "Assume that the phrase on its own means all the charges are waived.",
        "correct": false,
        "feedback": "Citing the phrase doesn't mean the landlord agrees about any item."
      },
      {
        "text": "Accept all of the charges without comment to avoid any conflict.",
        "correct": false,
        "feedback": "Silence means paying for things that may be normal ageing. State your case."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-9-b",
    "normId": "HL-9-fair-wear-and-tear-phrase",
    "category": "Housing & landlord",
    "setup": "You assumed that because “fair wear and tear” is in your contract, nothing would be deducted. The breakdown still lists charges.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Challenge specific items, explaining the property's age and use.",
        "correct": true,
        "feedback": "The phrase doesn't act automatically. A specific, reasoned reply is expected."
      },
      {
        "text": "Expect the charges to simply disappear on their own in time.",
        "correct": false,
        "feedback": "They won't. The landlord won't remove them without being asked."
      },
      {
        "text": "Argue in very general terms that the whole breakdown is unfair.",
        "correct": false,
        "feedback": "Vague complaints are easy to dismiss. Name the items and reasons."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-10-a",
    "normId": "HL-10-right-to-rent-document-check",
    "category": "Housing & landlord",
    "setup": "A letting agent asks for copies of your passport and visa as part of your rental application.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As a standard step for every applicant. Send the copies promptly.",
        "correct": true,
        "feedback": "It's a routine check asked of everyone, not aimed at you."
      },
      {
        "text": "As unfair targeting aimed at you specifically because of where you're from.",
        "correct": false,
        "feedback": "The same request goes to every applicant, whatever their background."
      },
      {
        "text": "As an optional extra, so you ask politely to skip that step.",
        "correct": false,
        "feedback": "Skipping it will probably just delay your application."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-10-b",
    "normId": "HL-10-right-to-rent-document-check",
    "category": "Housing & landlord",
    "setup": "At a flat viewing the landlord asks every applicant to bring photo ID and immigration documents.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Bring them without taking offence. It's asked of everyone.",
        "correct": true,
        "feedback": "A uniform request shows it isn't personal."
      },
      {
        "text": "Refuse to bring them, saying that it's discriminatory.",
        "correct": false,
        "feedback": "It's routine for all applicants. Refusing mostly costs you the flat."
      },
      {
        "text": "Show only the photo ID and hope that's going to be enough.",
        "correct": false,
        "feedback": "Partial documents will likely slow things down. Bring what's asked."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-11-a",
    "normId": "HL-11-guarantor-requirement-no-uk-credit-history",
    "category": "Housing & landlord",
    "setup": "An agency says, “We'll need a UK-based guarantor,” because you've just arrived in the UK. You don't know anyone who could do it.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Ask early if there's an alternative, such as extra rent upfront.",
        "correct": true,
        "feedback": "It's standard policy for people without UK financial history. Some agencies offer alternatives."
      },
      {
        "text": "Take it as an insult and walk out.",
        "correct": false,
        "feedback": "It's not personal. It's policy for all recent arrivals."
      },
      {
        "text": "Insist your income is high enough to cancel the rule.",
        "correct": false,
        "feedback": "The policy usually isn't about income. Ask about alternatives."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-11-b",
    "normId": "HL-11-guarantor-requirement-no-uk-credit-history",
    "category": "Housing & landlord",
    "setup": "A lettings agent says every applicant without a UK credit history needs a guarantor. You earn well.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask whether paying extra months upfront could replace it.",
        "correct": true,
        "feedback": "It's a standard risk policy, not a judgement of you. Alternatives may exist if asked."
      },
      {
        "text": "Argue it's unfair, since you earn well.",
        "correct": false,
        "feedback": "Income often doesn't change the policy. Asking about options works better."
      },
      {
        "text": "Drop the flat, since a guarantor means they don't trust you.",
        "correct": false,
        "feedback": "It's not about trust. It's their standard risk rule."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-12-b",
    "normId": "HL-12-income-affordability-multiplier",
    "category": "Housing & landlord",
    "setup": "An agent says you need an income of a set multiple of the rent. Your partner's income would cover it, but you applied alone.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Ask if applying jointly or offering extra rent upfront could work.",
        "correct": true,
        "feedback": "It's a formula, not a judgement. Asking about alternatives is normal."
      },
      {
        "text": "Treat it as a judgement on you personally and give up on the flat.",
        "correct": false,
        "feedback": "It's a standard formula applied to everyone."
      },
      {
        "text": "Argue that the agent has completely misjudged your overall finances.",
        "correct": false,
        "feedback": "Arguing rarely changes a fixed formula. Ask about alternatives."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-13-a",
    "normId": "HL-13-hmo-licensing-silence",
    "category": "Housing & landlord",
    "setup": "You're moving into a shared house with several unrelated tenants. Nobody mentions licensing at the viewing.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask in writing for the property's licence details.",
        "correct": true,
        "feedback": "Silence isn't confirmation either way. Checking is something tenants are expected to do."
      },
      {
        "text": "Assume it's fine because nobody mentioned a problem.",
        "correct": false,
        "feedback": "Absence of mention confirms nothing."
      },
      {
        "text": "Raise it only if a problem comes up later.",
        "correct": false,
        "feedback": "By then it's harder to sort out. Ask now."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-13-b",
    "normId": "HL-13-hmo-licensing-silence",
    "category": "Housing & landlord",
    "setup": "A new housemate says, “Landlords always sort the paperwork, no need to ask.” You're unsure about the house's licence.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Ask the landlord directly and in writing.",
        "correct": true,
        "feedback": "A polite written question is the normal way to confirm. It isn't an accusation."
      },
      {
        "text": "Take your housemate's word for it.",
        "correct": false,
        "feedback": "She may not know either. Checking yourself is sensible."
      },
      {
        "text": "Ask the other housemates to vote on whether to check.",
        "correct": false,
        "feedback": "It's a simple question to the landlord. No vote needed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-14-b",
    "normId": "HL-14-permitted-occupiers-clause",
    "category": "Housing & landlord",
    "setup": "Your adult son plans to live with you for a couple of months while he finds a flat. The tenancy lists named occupiers only. Your landlord's text says, “Yeah, no problem.”",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Ask the landlord to confirm in writing and update the agreement.",
        "correct": true,
        "feedback": "A friendly text isn't a change to the written agreement. A written update is safer."
      },
      {
        "text": "Treat his relaxed text as being enough and just let your son move in.",
        "correct": false,
        "feedback": "A relaxed reply doesn't override the clause. It could still cause trouble later."
      },
      {
        "text": "Tell your son to say that he is only visiting if anyone should ask.",
        "correct": false,
        "feedback": "That hides the situation instead of sorting it. Raise it formally."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-15-b",
    "normId": "HL-15-break-clause-deferral",
    "category": "Housing & landlord",
    "setup": "You ask to end your tenancy early. The agent says, “Let me check with the landlord and come back to you.” A fortnight passes.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Follow up and ask for an answer by a set date.",
        "correct": true,
        "feedback": "This may be a genuine process step or a way of buying time. A date helps either way."
      },
      {
        "text": "Assume the answer is yes and start packing.",
        "correct": false,
        "feedback": "Without a reply you don't know. Packing could leave you stuck."
      },
      {
        "text": "Wait without asking.",
        "correct": false,
        "feedback": "Waiting leaves it open-ended. Ask for a date."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-15-c",
    "normId": "HL-15-break-clause-deferral",
    "category": "Housing & landlord",
    "setup": "Your landlord responds to your request to end early with, “I'll have a think about it.” It's been three weeks.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Email asking him to say by a specific date, either way.",
        "correct": true,
        "feedback": "A deferral can be a polite delay. A date gives you something to plan around."
      },
      {
        "text": "Take “a think” as him agreeing to your request in principle.",
        "correct": false,
        "feedback": "It isn't agreement. It's a deferral."
      },
      {
        "text": "Take it as a polite rejection and simply stay put in the tenancy.",
        "correct": false,
        "feedback": "It may not be a rejection. Ask for a date and get a clear answer."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-15-d",
    "normId": "HL-15-break-clause-deferral",
    "category": "Housing & landlord",
    "setup": "You need to know soon because your new job starts. The agent has said only, “I'll look into it,” about ending your tenancy early.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“Could you let me know by Friday either way? I need to plan.”",
        "correct": true,
        "feedback": "A specific date and a reason make it easy to get a straight answer."
      },
      {
        "text": "“No rush at all, whenever suits you best.”",
        "correct": false,
        "feedback": "That signals low urgency, which lets it drift."
      },
      {
        "text": "“I'm leaving next month regardless of what you say.”",
        "correct": false,
        "feedback": "That may cause conflict and doesn't ask for an answer."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-15-e",
    "normId": "HL-15-break-clause-deferral",
    "category": "Housing & landlord",
    "setup": "After you ask about ending early, the landlord says he'll “check the contract” and gives no date.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Politely ask for a reply by a given date.",
        "correct": true,
        "feedback": "This may be a genuine step or a delay. A date either way keeps you informed."
      },
      {
        "text": "Wait, since he's being thorough.",
        "correct": false,
        "feedback": "Waiting leaves you unable to plan."
      },
      {
        "text": "Check the contract yourself and treat it as agreed.",
        "correct": false,
        "feedback": "It's not agreed until he confirms. Ask for his answer."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-HL-17-a",
    "normId": "HL-17-section-13-rent-increase-tone",
    "category": "Housing & landlord",
    "setup": "A formal letter from your agent states a new rent and a start date in stiff, official wording, with no explanation. Your landlord is usually relaxed.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Focus on the new figure and the date, and reply to those directly.",
        "correct": true,
        "feedback": "The formal style is just the format. The substance is what you need to respond to."
      },
      {
        "text": "Assume that the relationship with your landlord has now soured.",
        "correct": false,
        "feedback": "The format is formal for everyone. It doesn't mean his view of you changed."
      },
      {
        "text": "Ignore the whole letter as just a formality that won't affect you.",
        "correct": false,
        "feedback": "A formal letter has real consequences. Read the figure and date."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-1-b",
    "normId": "JS-1-vague-interview-feedback",
    "category": "Job search",
    "setup": "After a first interview they say, “We'll let you know by Friday.” It's now the following Wednesday and you've heard nothing.",
    "prompt": "How do you read the silence?",
    "options": [
      {
        "text": "Most likely a no. One polite chase is fine, but keep your search going.",
        "correct": true,
        "feedback": "Silence after the stated date usually means the application was unsuccessful. Don't put the rest of your search on hold."
      },
      {
        "text": "As good news: they'd have said so quickly if it was a no.",
        "correct": false,
        "feedback": "UK employers rarely give a direct rejection. Silence past the stated date is the usual way a no arrives."
      },
      {
        "text": "As a sign they're still deciding, so pause your other applications.",
        "correct": false,
        "feedback": "Pausing your search for a decision that is probably no costs you real chances."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-1-c",
    "normId": "JS-1-vague-interview-feedback",
    "category": "Job search",
    "setup": "A week after your interview you chased once. The reply said, “We'll be in touch if we need anything further.”",
    "prompt": "How do you read that?",
    "options": [
      {
        "text": "Most likely a no. Move on and keep applying.",
        "correct": true,
        "feedback": "Vague, open-ended closings after the date has passed usually mean unsuccessful."
      },
      {
        "text": "As a promise of another round soon.",
        "correct": false,
        "feedback": "It's the polite end of the conversation. There's no date and no next step."
      },
      {
        "text": "As a request to send them more information.",
        "correct": false,
        "feedback": "They'd say so directly if they wanted more. This is a closing line."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-1-d",
    "normId": "JS-1-vague-interview-feedback",
    "category": "Job search",
    "setup": "You emailed once after the stated decision date and got no reply. A month on, you've still had nothing.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Treat it as a likely no and keep applying elsewhere.",
        "correct": true,
        "feedback": "Continued silence is usually the answer. One polite chase was enough."
      },
      {
        "text": "Email again every week until they answer.",
        "correct": false,
        "feedback": "Repeated chasing rarely changes the outcome and can leave a poor impression."
      },
      {
        "text": "Wait, since they haven't actually said no.",
        "correct": false,
        "feedback": "UK employers rarely give a direct no. Waiting costs you other chances."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-2-b",
    "normId": "JS-2-salary-negotiation-indirectness",
    "category": "Job search",
    "setup": "You'll be asked about salary at your first call with a recruiter. You haven't looked into what the role pays.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Research the market range and prepare a confident range to state.",
        "correct": true,
        "feedback": "Being asked first is a negotiation norm. A researched range reads as prepared."
      },
      {
        "text": "Plan to say “I'm flexible” so you don't seem pushy.",
        "correct": false,
        "feedback": "A vague answer reads as unprepared, not polite."
      },
      {
        "text": "Ask them to name their budget and decline to give a number.",
        "correct": false,
        "feedback": "Deflecting looks evasive. Give a range, then discuss."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-2-c",
    "normId": "JS-2-salary-negotiation-indirectness",
    "category": "Job search",
    "setup": "A hiring manager asks, “What are you hoping to earn?” You feel awkward naming a figure.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Give your researched range plainly.",
        "correct": true,
        "feedback": "Naming a range is expected and normal, not pushy."
      },
      {
        "text": "“Whatever you think is fair.”",
        "correct": false,
        "feedback": "That hands over the negotiation and can sound unprepared."
      },
      {
        "text": "Name a low figure to seem modest.",
        "correct": false,
        "feedback": "A low figure could cost you. State a range you've researched."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-2-d",
    "normId": "JS-2-salary-negotiation-indirectness",
    "category": "Job search",
    "setup": "An application form asks for “expected salary” in a free-text box.",
    "prompt": "What do you enter?",
    "options": [
      {
        "text": "A researched range.",
        "correct": true,
        "feedback": "A confident range shows preparation and keeps the conversation open."
      },
      {
        "text": "Leave it blank to seem easygoing.",
        "correct": false,
        "feedback": "A blank can look evasive or unprepared."
      },
      {
        "text": "Write “negotiable”.",
        "correct": false,
        "feedback": "It sounds like a deflection. A range is expected."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-3-b",
    "normId": "JS-3-cv-personal-statement-understatement",
    "category": "Job search",
    "setup": "A recruiter says your personal statement “reads a bit like an advert.” It says, “I am a visionary leader who always delivers world-class results.”",
    "prompt": "What do you change?",
    "options": [
      {
        "text": "Replace the claims with specific, factual results.",
        "correct": true,
        "feedback": "Understated, evidence-led writing is more credible in many UK sectors."
      },
      {
        "text": "Add more superlatives to sound more confident.",
        "correct": false,
        "feedback": "More adjectives make it sound less credible, not more."
      },
      {
        "text": "Remove every achievement so it sounds modest.",
        "correct": false,
        "feedback": "Understatement isn't silence. Facts and numbers carry the weight."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-3-c",
    "normId": "JS-3-cv-personal-statement-understatement",
    "category": "Job search",
    "setup": "A friend from a more self-promotional culture asks if she should describe herself as “the best” in her CV profile.",
    "prompt": "What do you advise?",
    "options": [
      {
        "text": "Lead with facts and let her outcomes speak.",
        "correct": true,
        "feedback": "Concrete results carry more weight than superlatives with UK recruiters."
      },
      {
        "text": "Yes, since confidence is rewarded everywhere.",
        "correct": false,
        "feedback": "In many UK sectors, strong self-promotion reads as less credible."
      },
      {
        "text": "Say nothing about results, since boasting looks bad.",
        "correct": false,
        "feedback": "Facts aren't boasting. Specific outcomes are what recruiters look for."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-4-b",
    "normId": "JS-4-recruiter-warm-language-non-commitment",
    "category": "Job search",
    "setup": "After your final interview a recruiter says, “The client absolutely loved you, I'd be surprised if they didn't offer.” Nothing is in writing.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Ask for the next formal step and when to expect it.",
        "correct": true,
        "feedback": "Warm language is standard relationship management, not a commitment."
      },
      {
        "text": "Turn down your other interviews.",
        "correct": false,
        "feedback": "No offer exists yet. Closing off options on warmth alone is risky."
      },
      {
        "text": "Assume it's meaningless and stop preparing.",
        "correct": false,
        "feedback": "It's friendly encouragement, but not nothing. Just don't treat it as an offer."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-4-c",
    "normId": "JS-4-recruiter-warm-language-non-commitment",
    "category": "Job search",
    "setup": "A recruiter keeps saying you're “the client's favourite.” Two weeks later, she's gone quiet.",
    "prompt": "How do you read the warmth?",
    "options": [
      {
        "text": "As standard relationship-management language, not a reliable signal.",
        "correct": true,
        "feedback": "Recruiters use warm language with most candidates to keep them engaged."
      },
      {
        "text": "As a near-certain offer that's simply being delayed on their side.",
        "correct": false,
        "feedback": "Warmth isn't a commitment. Without a next step, nothing is confirmed."
      },
      {
        "text": "As a deliberate lie that you should call the recruiter out on.",
        "correct": false,
        "feedback": "It's a normal habit of the job, not necessarily dishonest. Ask for next steps."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-4-d",
    "normId": "JS-4-recruiter-warm-language-non-commitment",
    "category": "Job search",
    "setup": "A recruiter phones: “You're a really strong candidate.” You ask what happens next and she says, “I'll come back to you.”",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Politely ask for the next step and a date.",
        "correct": true,
        "feedback": "A specific question turns warm language into something you can plan around."
      },
      {
        "text": "Take “strong candidate” as the offer.",
        "correct": false,
        "feedback": "It's encouragement, not an offer. Without a next step, you don't know."
      },
      {
        "text": "Say thank you and wait.",
        "correct": false,
        "feedback": "Waiting leaves you in the dark. Ask when to expect an answer."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-5-b",
    "normId": "JS-5-competency-question-structure-expectation",
    "category": "Job search",
    "setup": "An interviewer asks, “Tell me about a time you worked under pressure.” You begin with, “I work well under pressure.”",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Move to a specific example: situation, task, action, result.",
        "correct": true,
        "feedback": "A general claim reads as unprepared. A specific, structured story is what's assessed."
      },
      {
        "text": "Keep explaining your general approach to pressure.",
        "correct": false,
        "feedback": "More general statements won't help. They want an actual example."
      },
      {
        "text": "Ask her to rephrase, since the question was too vague.",
        "correct": false,
        "feedback": "It's a standard format. Give an example."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-5-c",
    "normId": "JS-5-competency-question-structure-expectation",
    "category": "Job search",
    "setup": "You're preparing for a competency-based interview next week.",
    "prompt": "How do you prepare?",
    "options": [
      {
        "text": "Prepare four or five specific stories in a clear structure.",
        "correct": true,
        "feedback": "A bank of structured examples can be adapted to different questions."
      },
      {
        "text": "Prepare general statements about your strengths.",
        "correct": false,
        "feedback": "General statements read as unprepared. They want specific examples."
      },
      {
        "text": "Memorise one story to use for every question.",
        "correct": false,
        "feedback": "One story won't fit most questions. Prepare several."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-6-b",
    "normId": "JS-6-notice-period-negotiation-norm",
    "category": "Job search",
    "setup": "A recruiter asks, “When could you start?” You have two months' notice and worry about sounding uncommitted.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Say plainly how long your notice is, and that you're keen to join then.",
        "correct": true,
        "feedback": "Employers plan around notice periods. Honesty is the norm."
      },
      {
        "text": "Say you could start “immediately”, to seem as keen as you possibly can.",
        "correct": false,
        "feedback": "That promises something you can't deliver and can backfire."
      },
      {
        "text": "Say that you're very flexible about it and decide the date later.",
        "correct": false,
        "feedback": "Vague answers delay planning. Be plain."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-6-c",
    "normId": "JS-6-notice-period-negotiation-norm",
    "category": "Job search",
    "setup": "On the phone an employer asks about your start date. Your contract has a long notice period.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Be plain about it and mention your enthusiasm.",
        "correct": true,
        "feedback": "A real date with a note of keenness is expected and professionally safe."
      },
      {
        "text": "Offer to leave without working your notice.",
        "correct": false,
        "feedback": "That could damage your current role and isn't expected."
      },
      {
        "text": "Pretend it's shorter and sort it out later.",
        "correct": false,
        "feedback": "That risks the offer. Honesty is expected here."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-7-b",
    "normId": "JS-7-networking-coffee-informality",
    "category": "Job search",
    "setup": "A contact at a company writes, “Would you fancy a coffee sometime to chat about what you're looking for?”",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Treat it as a real opportunity. Prepare questions and points.",
        "correct": true,
        "feedback": "An informal coffee is a standard, serious way to explore roles."
      },
      {
        "text": "Treat it as a purely social catch-up and turn up quite unprepared.",
        "correct": false,
        "feedback": "It's informal in tone, but often assessed as seriously as a meeting."
      },
      {
        "text": "Reply asking for a formal interview rather than an informal coffee.",
        "correct": false,
        "feedback": "That misreads the format. Say yes to coffee and prepare."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-7-c",
    "normId": "JS-7-networking-coffee-informality",
    "category": "Job search",
    "setup": "At a conference a director says, “Let's grab a coffee and chat about the role sometime.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Follow up with a date, and prepare as for a meeting.",
        "correct": true,
        "feedback": "A coffee invitation from a senior person is a genuine chance. Follow up promptly."
      },
      {
        "text": "Wait for her to get in touch and arrange it herself.",
        "correct": false,
        "feedback": "She may never arrange it. Acting on the invitation is up to you."
      },
      {
        "text": "Take it as friendly small talk with no real intent.",
        "correct": false,
        "feedback": "It's friendly, but it's also a real offer to talk."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-7-d",
    "normId": "JS-7-networking-coffee-informality",
    "category": "Job search",
    "setup": "You meet a senior contact for coffee. She opens with, “So, tell me what you're looking for.”",
    "prompt": "How do you respond?",
    "options": [
      {
        "text": "Give a clear, prepared answer. It's a real conversation.",
        "correct": true,
        "feedback": "These chats are taken seriously, and preparation shows."
      },
      {
        "text": "Say you're really just there for a casual chat with her.",
        "correct": false,
        "feedback": "That wastes the opportunity. She asked a real question."
      },
      {
        "text": "Ask her to tell you what she thinks you should be doing.",
        "correct": false,
        "feedback": "She wants to hear your plan first. Come with ideas."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-8-b",
    "normId": "JS-8-keep-cv-on-file-soft-rejection",
    "category": "Job search",
    "setup": "A recruiter phones to say you weren't shortlisted and ends, “We'll keep your details on file for future roles.”",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Treat that process as over. If you still want the company, get in touch in a few months.",
        "correct": true,
        "feedback": "It's a polite way to end the call, not a commitment to revisit. Reach out yourself later if you're still interested."
      },
      {
        "text": "Wait for them to call when a suitable role comes up.",
        "correct": false,
        "feedback": "It rarely leads to contact. If you want a future role, it's up to you to follow up."
      },
      {
        "text": "Pause applying elsewhere until they get in touch.",
        "correct": false,
        "feedback": "That stalls your search for a promise that usually isn't kept. Keep applying."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-8-c",
    "normId": "JS-8-keep-cv-on-file-soft-rejection",
    "category": "Job search",
    "setup": "A hiring email says, “You weren't successful this time, but we'll keep your CV on file.” You liked the company.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Treat it as closed. Reapply or reach out in a few months.",
        "correct": true,
        "feedback": "It's a polite way to end the process, not a promise of contact."
      },
      {
        "text": "Wait, since they'll contact you with openings.",
        "correct": false,
        "feedback": "It's rare for that to happen. Waiting passively is the problem."
      },
      {
        "text": "Reply asking exactly when they'll be in touch.",
        "correct": false,
        "feedback": "There is no date. It's a closing line, so don't expect one."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-8-d",
    "normId": "JS-8-keep-cv-on-file-soft-rejection",
    "category": "Job search",
    "setup": "A hiring manager messages on LinkedIn: “Sorry it wasn't to be. We'll keep you in mind for the future!”",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "A polite ending. If you're interested, follow up in a few months.",
        "correct": true,
        "feedback": "It softens a no and rarely leads to contact."
      },
      {
        "text": "A promise that they'll contact you soon.",
        "correct": false,
        "feedback": "It's friendly, but it isn't a commitment."
      },
      {
        "text": "A hint the door is open now, so ask for another interview.",
        "correct": false,
        "feedback": "The process has ended. Wait before getting in touch."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-9-a",
    "normId": "JS-9-assessment-centre-group-exercise-scoring",
    "category": "Job search",
    "setup": "In an assessment-centre group task you have strong ideas, and a quiet teammate hasn't spoken.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Invite them in: “What do you think about that, Sam?”",
        "correct": true,
        "feedback": "Including others is scored positively, and is read as leadership in itself."
      },
      {
        "text": "Present your ideas confidently to show leadership.",
        "correct": false,
        "feedback": "Dominating the discussion can be scored negatively, even if your ideas are good."
      },
      {
        "text": "Wait for them to speak up themselves.",
        "correct": false,
        "feedback": "Quieter people often won't, and you miss a chance to show collaboration."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-9-b",
    "normId": "JS-9-assessment-centre-group-exercise-scoring",
    "category": "Job search",
    "setup": "In a group exercise an assessor is taking notes. You've made most of the points so far.",
    "prompt": "How is this likely to be scored?",
    "options": [
      {
        "text": "Poorly, if you dominate. Listening and including others scores well.",
        "correct": true,
        "feedback": "The collaborative process is being assessed, not only your ideas."
      },
      {
        "text": "Well, since talking the most clearly shows plenty of leadership.",
        "correct": false,
        "feedback": "Leadership in this setting means bringing others in."
      },
      {
        "text": "Neutral, because only the quality of your ideas actually counts.",
        "correct": false,
        "feedback": "Process counts too. Listening and building on points are scored."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-9-c",
    "normId": "JS-9-assessment-centre-group-exercise-scoring",
    "category": "Job search",
    "setup": "In a group case study another candidate keeps interrupting. You want to stand out positively.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Build on others' points and bring quieter people in.",
        "correct": true,
        "feedback": "Collaboration is scored. Visible listening and inclusion stand out."
      },
      {
        "text": "Match their volume and speed to stay visible to the assessors.",
        "correct": false,
        "feedback": "Talking over others tends to be scored negatively."
      },
      {
        "text": "Stay silent for most of it so nobody can criticise you.",
        "correct": false,
        "feedback": "Silence scores poorly. You need to contribute and include others."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-10-a",
    "normId": "JS-10-right-to-work-check-timing",
    "category": "Job search",
    "setup": "After a verbal job offer, HR asks for a copy of your passport and visa as part of onboarding.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As a routine step for every new hire. Send them promptly.",
        "correct": true,
        "feedback": "It's a standard onboarding step asked of everyone, not specific to you."
      },
      {
        "text": "As a sign that the employer has begun to have doubts about you.",
        "correct": false,
        "feedback": "It's asked of all new hires, whatever their background."
      },
      {
        "text": "As optional, so you can leave it until well after you've signed.",
        "correct": false,
        "feedback": "Delaying only holds up your start. Send them promptly."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-10-b",
    "normId": "JS-10-right-to-work-check-timing",
    "category": "Job search",
    "setup": "An employer's onboarding form asks all new hires for ID and work documents. You feel uneasy.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Provide them promptly, as everyone does.",
        "correct": true,
        "feedback": "It's a routine step. Doing it promptly smooths your start."
      },
      {
        "text": "Query whether it's needed for your nationality.",
        "correct": false,
        "feedback": "It's asked of every new hire. Querying it may create needless friction."
      },
      {
        "text": "Delay until after your first week.",
        "correct": false,
        "feedback": "That holds up your onboarding. Just send them."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-11-a",
    "normId": "JS-11-one-way-video-interview-norm",
    "category": "Job search",
    "setup": "You receive a link to record timed video answers to set questions. There's no live person.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Prepare as you would for a live interview.",
        "correct": true,
        "feedback": "It's a standard screening step scored the same way as a live one."
      },
      {
        "text": "Assume it's a lesser process and wing it.",
        "correct": false,
        "feedback": "It's the usual first step for many applicants, not a lesser one."
      },
      {
        "text": "Reply asking for a live call instead.",
        "correct": false,
        "feedback": "That could look uncooperative. Treat it as the real thing."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-12-b",
    "normId": "JS-12-finalizing-internally-offer-delay",
    "category": "Job search",
    "setup": "After a verbal offer the manager says, “Just finalising a few things on our side.” Two days later nothing.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Ask roughly when the formal offer will arrive.",
        "correct": true,
        "feedback": "Delays like this are usually administrative. A polite question gets a timeframe."
      },
      {
        "text": "Assume that the offer is about to be withdrawn altogether.",
        "correct": false,
        "feedback": "Withdrawal is rare. It's usually paperwork and approvals."
      },
      {
        "text": "Hand in your notice straight away.",
        "correct": false,
        "feedback": "Don't resign until the formal offer arrives."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-12-c",
    "normId": "JS-12-finalizing-internally-offer-delay",
    "category": "Job search",
    "setup": "A recruiter says, “We're waiting on internal sign-off from finance.” It's been ten days.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask for an expected timeframe.",
        "correct": true,
        "feedback": "Internal approvals are common. A question shows interest without pressure."
      },
      {
        "text": "Assume the answer is no.",
        "correct": false,
        "feedback": "A delay doesn't mean a change of mind. It's usually process."
      },
      {
        "text": "Say nothing, since pestering would look desperate.",
        "correct": false,
        "feedback": "A polite question isn't pestering. It's reasonable."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-12-d",
    "normId": "JS-12-finalizing-internally-offer-delay",
    "category": "Job search",
    "setup": "After a verbal offer you're told, “Finalising details on our end.” A friend says that means they've changed their minds.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "It's most likely admin. Ask for a rough timeframe.",
        "correct": true,
        "feedback": "These phrases usually mean approvals, not doubt. Asking for timing is fine."
      },
      {
        "text": "Agree and start applying elsewhere in a panic.",
        "correct": false,
        "feedback": "Panicking is premature. Most such delays are just paperwork."
      },
      {
        "text": "Ignore it and wait for weeks.",
        "correct": false,
        "feedback": "Waiting silently leaves anxiety unresolved. Ask roughly when."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-13-a",
    "normId": "JS-13-cover-letter-generic-greeting",
    "category": "Job search",
    "setup": "A job advert lists no contact name. You're about to write “Dear Hiring Manager” and worry it looks lazy.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Check the advert and site for a name. If there's none, a generic greeting is fine.",
        "correct": true,
        "feedback": "A generic greeting is standard when no name is easy to find."
      },
      {
        "text": "Guess at a likely hiring manager's name from LinkedIn, to look more personal.",
        "correct": false,
        "feedback": "A wrong guess looks worse than a generic greeting."
      },
      {
        "text": "Phone the main company switchboard and ask who exactly you should address it to.",
        "correct": false,
        "feedback": "That's unnecessary effort for a standard situation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-13-b",
    "normId": "JS-13-cover-letter-generic-greeting",
    "category": "Job search",
    "setup": "You find no named contact on an online application portal. A friend says a generic opening always loses points.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Check briefly, then use a standard greeting without worry.",
        "correct": true,
        "feedback": "Without a name, a generic greeting isn't read as lack of effort."
      },
      {
        "text": "Leave out the greeting entirely and start straight in with your pitch.",
        "correct": false,
        "feedback": "That looks abrupt. A standard greeting is fine."
      },
      {
        "text": "Address it directly to the CEO instead, to be sure that it gets seen.",
        "correct": false,
        "feedback": "That's inappropriate for a standard application."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-13-c",
    "normId": "JS-13-cover-letter-generic-greeting",
    "category": "Job search",
    "setup": "A listing names a recruiter on the page, but you've written “Dear Sir or Madam.”",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Use the named contact. Only a missed name would be noticed.",
        "correct": true,
        "feedback": "A generic greeting is fine only when no name was easy to find."
      },
      {
        "text": "Keep it as it is, since a generic greeting is always the safe choice.",
        "correct": false,
        "feedback": "It's safe only when no name exists. Here a name was available."
      },
      {
        "text": "Use only their first name, to seem warmer and a lot more friendly.",
        "correct": false,
        "feedback": "A formal greeting with their name is the safer choice."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-14-a",
    "normId": "JS-14-linkedin-open-to-work-banner",
    "category": "Job search",
    "setup": "You'd like recruiters to find you, but worry your boss will see a green “Open to Work” frame.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Use the recruiters-only visibility setting.",
        "correct": true,
        "feedback": "It lets recruiters find you without making the signal public."
      },
      {
        "text": "Don't use it at all and wait for recruiters to find you.",
        "correct": false,
        "feedback": "You'd miss messages. The setting is a simple fix."
      },
      {
        "text": "Switch it on publicly and hope your boss doesn't notice.",
        "correct": false,
        "feedback": "That risks the exact worry you have."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-14-b",
    "normId": "JS-14-linkedin-open-to-work-banner",
    "category": "Job search",
    "setup": "A friend says an Open to Work banner makes a candidate look desperate.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "Recruiters treat it as normal. It's a practical signal.",
        "correct": true,
        "feedback": "It isn't read as a negative signal about the candidate's situation."
      },
      {
        "text": "She's right, so she should avoid using the banner altogether.",
        "correct": false,
        "feedback": "That's a common worry, but recruiters generally see it as normal."
      },
      {
        "text": "It's compulsory for any candidate who is serious about job-hunting.",
        "correct": false,
        "feedback": "It isn't compulsory. It's optional and practical."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-14-c",
    "normId": "JS-14-linkedin-open-to-work-banner",
    "category": "Job search",
    "setup": "You see a colleague's profile with the green “Open to Work” frame. You wonder if they're in trouble.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As ordinary job-seeking, not a sign of trouble.",
        "correct": true,
        "feedback": "It's a standard, practical way to be found by recruiters."
      },
      {
        "text": "As a sign they're about to be made redundant.",
        "correct": false,
        "feedback": "It says nothing about their situation. It's just a signal to recruiters."
      },
      {
        "text": "As a sign they're unhappy in the team.",
        "correct": false,
        "feedback": "Many people use it for all kinds of reasons."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-15-b",
    "normId": "JS-15-meet-the-team-informal-framing",
    "category": "Job search",
    "setup": "You're invited to “a relaxed lunch with the team, no pressure” as the last step of your application.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Prepare as for a formal interview. The team gives feedback.",
        "correct": true,
        "feedback": "Casual framing doesn't mean it isn't assessed."
      },
      {
        "text": "Relax and treat it as a social lunch.",
        "correct": false,
        "feedback": "Feedback from this session feeds into the decision, however relaxed it feels."
      },
      {
        "text": "Decline politely since it isn't a formal interview.",
        "correct": false,
        "feedback": "That could cost you the job. Go and prepare."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-15-c",
    "normId": "JS-15-meet-the-team-informal-framing",
    "category": "Job search",
    "setup": "After your interview they say, “The final step is just an informal coffee with the team.”",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Have questions and examples ready.",
        "correct": true,
        "feedback": "An informal stage is still assessed. Preparation shows."
      },
      {
        "text": "Skip preparation, since it's informal.",
        "correct": false,
        "feedback": "Informal tone isn't informal scoring."
      },
      {
        "text": "Ask for it to be rescheduled as a formal interview.",
        "correct": false,
        "feedback": "That misreads the stage. Just prepare."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-15-d",
    "normId": "JS-15-meet-the-team-informal-framing",
    "category": "Job search",
    "setup": "In an “informal chat” with the team you talk about weekends and the commute. Later, the recruiter says they felt you weren't prepared.",
    "prompt": "Why did that happen?",
    "options": [
      {
        "text": "The “informal” session was assessed. Prepare as for a formal interview.",
        "correct": true,
        "feedback": "The team gives feedback afterwards, however casual the framing."
      },
      {
        "text": "Teams only ever give feedback to the recruiter after formal interview rounds.",
        "correct": false,
        "feedback": "They give feedback on informal sessions too."
      },
      {
        "text": "They were being unfair to judge what was only meant to be a social chat.",
        "correct": false,
        "feedback": "It wasn't unfair. The chat counted as an assessment."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-JS-16-a",
    "normId": "JS-16-reference-request-late-timing",
    "category": "Job search",
    "setup": "After a verbal offer, the employer says, “Could you send over two references?” You haven't mentioned any referees yet.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Have two referees ready and reply promptly.",
        "correct": true,
        "feedback": "Late-stage reference requests are standard sequencing, not new doubts."
      },
      {
        "text": "Take the request as a sign they have doubts and ask why.",
        "correct": false,
        "feedback": "It's standard timing. Questioning it could create needless worry."
      },
      {
        "text": "Ask them to wait until after you've started.",
        "correct": false,
        "feedback": "That may delay or jeopardise the offer."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-1-a",
    "normId": "SO-1-self-deprecating-humor-not-literal",
    "category": "Social",
    "setup": "A colleague fumbles the projector before a meeting, grins and says, “I'm hopeless with technology, honestly.”",
    "prompt": "How do you respond?",
    "options": [
      {
        "text": "Keep it light and match their tone: “Ha, we've all been there.”",
        "correct": true,
        "feedback": "It's a light, joking habit, not a real statement of low self-worth. An easy, matching reply fits best."
      },
      {
        "text": "Reassure them seriously: “You're not hopeless. You're very capable.”",
        "correct": false,
        "feedback": "It's a joke, not a request for reassurance. A serious reply can feel oddly formal and make a small moment awkward."
      },
      {
        "text": "Offer to take over the presentation for them.",
        "correct": false,
        "feedback": "They aren't asking for help. Taking the joke literally turns a light remark into a problem they never mentioned."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-1-b",
    "normId": "SO-1-self-deprecating-humor-not-literal",
    "category": "Social",
    "setup": "Over lunch a colleague spills coffee on her notes and says, with a smile, “Typical me, I can't do anything right.”",
    "prompt": "How do you reply?",
    "options": [
      {
        "text": "Something light: “Ha, I've done that too.”",
        "correct": true,
        "feedback": "It's a bonding joke, not a plea for reassurance. A light reply matches it."
      },
      {
        "text": "“Don't say that. You're brilliant at your job.”",
        "correct": false,
        "feedback": "A serious pep talk makes a light moment oddly heavy. She's just joking."
      },
      {
        "text": "“Yes, you do seem clumsy today.”",
        "correct": false,
        "feedback": "It's a self-joke, not an invitation to agree. Keep it kind and light."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-1-c",
    "normId": "SO-1-self-deprecating-humor-not-literal",
    "category": "Social",
    "setup": "A friend arrives late and jokes, “I'm so useless, I'd lose my head if it wasn't attached.”",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Match the joke lightly and move on.",
        "correct": true,
        "feedback": "It's a humility joke, not a literal statement. A light, easy reply works best."
      },
      {
        "text": "Reassure her that she's actually very organised.",
        "correct": false,
        "feedback": "She isn't asking for reassurance. It would sound oddly serious."
      },
      {
        "text": "Ask if something is worrying her.",
        "correct": false,
        "feedback": "It's not a signal of distress, just a joking habit."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-1-d",
    "normId": "SO-1-self-deprecating-humor-not-literal",
    "category": "Social",
    "setup": "You make a small mistake in a meeting, and want to fit in with the room's tone.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“Ha, classic me!” and carry on.",
        "correct": true,
        "feedback": "A light, self-deprecating remark is a normal, bonding way to handle a small slip."
      },
      {
        "text": "A long, serious apology for the error.",
        "correct": false,
        "feedback": "That makes a small slip feel much bigger than it is."
      },
      {
        "text": "Say nothing and look embarrassed.",
        "correct": false,
        "feedback": "A short joke eases the moment better than silence."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-2-b",
    "normId": "SO-2-declining-invitation-vague-excuse",
    "category": "Social",
    "setup": "You invite a neighbour to a barbecue. She says, “Oh, I've got a bit of a thing that weekend, sorry!”",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Say it's fine and you hope to catch her another time.",
        "correct": true,
        "feedback": "The vagueness is deliberate and polite. Taking it at face value is the expected reply."
      },
      {
        "text": "“What kind of thing?” so you can see if it can be moved.",
        "correct": false,
        "feedback": "Probing makes an easy decline uncomfortable."
      },
      {
        "text": "“Which day exactly? I'll move the barbecue.”",
        "correct": false,
        "feedback": "That pressures her. A vague decline isn't an opening to negotiate."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-2-c",
    "normId": "SO-2-declining-invitation-vague-excuse",
    "category": "Social",
    "setup": "A colleague turns down Friday drinks with, “I've got a thing on, sorry!” You're curious what it is.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Accept it: “No worries, next time!”",
        "correct": true,
        "feedback": "A vague excuse is a polite decline. It's not a question to dig into."
      },
      {
        "text": "Ask what the thing is.",
        "correct": false,
        "feedback": "Pressing for detail makes people uncomfortable."
      },
      {
        "text": "Tell others she's avoiding you.",
        "correct": false,
        "feedback": "That reads too much into a normal polite decline."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-2-d",
    "normId": "SO-2-declining-invitation-vague-excuse",
    "category": "Social",
    "setup": "A friend declines your birthday party with, “Got a bit of a thing that night, so sorry!” You feel hurt.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a polite, vague decline. Accept it and don't probe.",
        "correct": true,
        "feedback": "Vagueness is socially acceptable and not a comment on you."
      },
      {
        "text": "As a sign that she doesn't actually like you all that much.",
        "correct": false,
        "feedback": "It's a standard way to decline without detail, not a verdict."
      },
      {
        "text": "As a puzzle you can solve by asking around among other people.",
        "correct": false,
        "feedback": "Digging for the real reason would likely make things worse."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-3-b",
    "normId": "SO-3-queueing-norm-enforcement",
    "category": "Social",
    "setup": "On a station platform a group stands near a ticket machine with no clear line. You want to use it.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask: “Sorry, is this the queue?”",
        "correct": true,
        "feedback": "A direct question is completely normal and avoids annoying people."
      },
      {
        "text": "Go to the front, since there's no line.",
        "correct": false,
        "feedback": "Queue order matters, and people will notice and react."
      },
      {
        "text": "Wait at the side until someone waves you forward.",
        "correct": false,
        "feedback": "Nobody will. Asking is the normal move."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-4-b",
    "normId": "SO-4-small-talk-weather-function",
    "category": "Social",
    "setup": "You're standing at a bus stop next to a stranger and you'd like to be friendly.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Something light about the weather: “Bit grey today, isn't it?”",
        "correct": true,
        "feedback": "A light weather remark isn't about the weather. It's a low-stakes way to open a conversation and signal friendliness."
      },
      {
        "text": "Ask where they're from and what they do for a living.",
        "correct": false,
        "feedback": "Personal questions are too much for an opener with a stranger. A light weather remark eases you into conversation first."
      },
      {
        "text": "Nothing, since speaking to a stranger would be intrusive.",
        "correct": false,
        "feedback": "A light remark is a low-stakes way to be friendly, and most people welcome it. Staying silent signals nothing."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-4-c",
    "normId": "SO-4-small-talk-weather-function",
    "category": "Social",
    "setup": "In the lift a colleague says, “Bit chilly out there, isn't it?” You're in a rush.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "A quick friendly agreement: “Freezing!”",
        "correct": true,
        "feedback": "It's a greeting, not a question. A brief agreement is expected."
      },
      {
        "text": "Explain your commute and what you wore today.",
        "correct": false,
        "feedback": "A long answer turns a light greeting into an odd monologue."
      },
      {
        "text": "Say nothing, since it isn't a real question.",
        "correct": false,
        "feedback": "Silence can seem cold. A short reply is the norm."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-4-d",
    "normId": "SO-4-small-talk-weather-function",
    "category": "Social",
    "setup": "You pass a neighbour at her gate and want to say hello without it feeling awkward.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“Lovely day, isn't it?”",
        "correct": true,
        "feedback": "A light comment about the weather signals friendliness at low stakes."
      },
      {
        "text": "“What do you do for a living?”",
        "correct": false,
        "feedback": "Personal questions can feel too much as an opener."
      },
      {
        "text": "“What do you think about the local council?”",
        "correct": false,
        "feedback": "That's a heavier topic than a friendly hello needs."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-5-b",
    "normId": "SO-5-punctuality-for-social-events",
    "category": "Social",
    "setup": "You've been invited to a client dinner at a restaurant for half past seven.",
    "prompt": "When do you arrive?",
    "options": [
      {
        "text": "Exactly on time. Formal events aren't approximate.",
        "correct": true,
        "feedback": "The flexible-time norm is for casual social events, not formal or work-related ones."
      },
      {
        "text": "Fifteen minutes late, as you would for a casual party.",
        "correct": false,
        "feedback": "For work events, lateness is noticed. Casual flexibility doesn't apply."
      },
      {
        "text": "An hour early, to be safe.",
        "correct": false,
        "feedback": "That's awkward too. Arriving on time is the norm."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-6-b",
    "normId": "SO-6-lets-do-this-again-closing-phrase",
    "category": "Social",
    "setup": "You've had a great evening with a new colleague and want to see them again. You're about to say goodbye.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Suggest something specific: “Fancy lunch on Thursday?”",
        "correct": true,
        "feedback": "Without a date, a warm goodbye line is only a sentiment. A specific suggestion shows you mean it."
      },
      {
        "text": "“We should absolutely do this again sometime!”",
        "correct": false,
        "feedback": "That's the usual warm closing phrase, and without a date it'll be heard as one."
      },
      {
        "text": "Say nothing about it, since suggesting a date would seem pushy.",
        "correct": false,
        "feedback": "Suggesting a time isn't pushy. It's how a warm feeling turns into an actual plan."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-6-c",
    "normId": "SO-6-lets-do-this-again-closing-phrase",
    "category": "Social",
    "setup": "A neighbour you've just chatted with for an hour says, “We should do this again, let's not leave it so long.” You'd like to.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Suggest a specific time: “Shall we do Saturday?”",
        "correct": true,
        "feedback": "Without a date, it's a warm sentiment but not a plan. A concrete suggestion makes it real."
      },
      {
        "text": "Wait for her to invite you.",
        "correct": false,
        "feedback": "She may mean it, but nothing will happen unless someone proposes a date."
      },
      {
        "text": "Reply “definitely” and leave it there.",
        "correct": false,
        "feedback": "That leaves it as a sentiment. It will probably fade."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-6-d",
    "normId": "SO-6-lets-do-this-again-closing-phrase",
    "category": "Social",
    "setup": "Someone you've just met says, “We should do this again sometime.” You aren't especially keen.",
    "prompt": "How do you reply?",
    "options": [
      {
        "text": "A warm “Yes, that was lovely!” without making a plan.",
        "correct": true,
        "feedback": "It's a warm closing phrase and answering in kind is normal."
      },
      {
        "text": "Say honestly that you don't want to meet again.",
        "correct": false,
        "feedback": "That's far blunter than the phrase calls for."
      },
      {
        "text": "Agree to a firm date to be polite.",
        "correct": false,
        "feedback": "That commits you to something you don't want."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-7-b",
    "normId": "SO-7-round-buying-pub-culture",
    "category": "Social",
    "setup": "A friend buys the first two rounds at the pub. You've bought none, and you don't drink alcohol.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Offer to get the next round, whatever the drinks.",
        "correct": true,
        "feedback": "Rounds are reciprocal. Taking a turn matters even if you're not drinking alcohol."
      },
      {
        "text": "Wait, since he hasn't asked you to buy one.",
        "correct": false,
        "feedback": "Nobody asks, but it gets quietly noticed if you never do."
      },
      {
        "text": "Pay him back quietly in cash at the end of the night.",
        "correct": false,
        "feedback": "That misses the point. A round is a shared gesture, not a debt."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-8-a",
    "normId": "SO-8-reflexive-sorry-no-fault-apology",
    "category": "Social",
    "setup": "In a busy supermarket aisle a stranger bumps your trolley and says “Sorry!” straight away.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "A quick “No worries,” or “Sorry” back, then carry on.",
        "correct": true,
        "feedback": "It's a reflex, not an admission of fault. A quick “no worries” or “sorry” back is the expected, easy reply."
      },
      {
        "text": "Work out who was really at fault before replying.",
        "correct": false,
        "feedback": "The “sorry” is a verbal cushion, not a confession. There's no need to decide who was to blame."
      },
      {
        "text": "Say nothing and walk on, since an apology needs no answer.",
        "correct": false,
        "feedback": "A quick reply is expected. Silence can come across as cold when a simple “no worries” would do."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-8-b",
    "normId": "SO-8-reflexive-sorry-no-fault-apology",
    "category": "Social",
    "setup": "You squeeze past someone on the stairs. They say, “Sorry!” though you were in the way.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“No worries” or “sorry” back, then move on.",
        "correct": true,
        "feedback": "“Sorry” is a verbal cushion here. There's no need to decide who was at fault."
      },
      {
        "text": "Correct them: “You didn't need to say sorry.”",
        "correct": false,
        "feedback": "That turns a reflex into a debate."
      },
      {
        "text": "Say it was your fault and explain why.",
        "correct": false,
        "feedback": "That's far more than the moment needs."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-8-c",
    "normId": "SO-8-reflexive-sorry-no-fault-apology",
    "category": "Social",
    "setup": "A stranger asks, “Sorry, do you know where the post office is?” You wonder what they're apologising for.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Answer helpfully, nothing more.",
        "correct": true,
        "feedback": "“Sorry” before a question is an attention-getter, not an apology."
      },
      {
        "text": "Tell them they don't need to apologise.",
        "correct": false,
        "feedback": "It's a habit, and correcting it can feel odd."
      },
      {
        "text": "Apologise for not knowing the way.",
        "correct": false,
        "feedback": "You've done nothing wrong. Just reply."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-9-b",
    "normId": "SO-9-emotional-understatement-not-too-bad",
    "category": "Social",
    "setup": "You ask a friend how his job interview went. He says, “Could be worse.”",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Ask a specific follow-up: “What went best?”",
        "correct": true,
        "feedback": "Understatement doesn't reveal how it went. A specific question does."
      },
      {
        "text": "Take it as having gone badly and say sorry.",
        "correct": false,
        "feedback": "“Could be worse” is also said when things go very well."
      },
      {
        "text": "Take it as fine and change the subject.",
        "correct": false,
        "feedback": "You'd miss the chance to find out how it really went."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-9-c",
    "normId": "SO-9-emotional-understatement-not-too-bad",
    "category": "Social",
    "setup": "A colleague back from holiday says, “Not too bad, thanks.” You later learn it was wonderful.",
    "prompt": "What would have been better?",
    "options": [
      {
        "text": "Asking what the best part was.",
        "correct": true,
        "feedback": "These phrases can describe anything. A specific question draws out the real story."
      },
      {
        "text": "Taking it at face value and moving on.",
        "correct": false,
        "feedback": "You'd get the wrong idea. Understatement hides the real view."
      },
      {
        "text": "Insisting she tell you honestly.",
        "correct": false,
        "feedback": "That feels like an interrogation. A gentle specific question works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-10-a",
    "normId": "SO-10-on-my-way-white-lie",
    "category": "Social",
    "setup": "You're waiting outside the cinema and the film starts in fifteen minutes. A friend texts, “On my way!”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask lightly: “How many minutes away are you actually?”",
        "correct": true,
        "feedback": "“On my way” usually means “leaving soon”, with a few minutes' buffer. If timing matters, a direct question gets a real answer."
      },
      {
        "text": "Take it literally and wait, expecting them in a minute or two.",
        "correct": false,
        "feedback": "It's an approximate signal, not a live location. Taking it literally is how people end up waiting and getting frustrated."
      },
      {
        "text": "Tell them off for lying when they arrive.",
        "correct": false,
        "feedback": "It's a small, widely understood convention rather than a lie, so scolding them would be an over-reaction."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-10-b",
    "normId": "SO-10-on-my-way-white-lie",
    "category": "Social",
    "setup": "A friend messages “just leaving now!” while you're already seated at the restaurant.",
    "prompt": "What do you expect?",
    "options": [
      {
        "text": "Several minutes yet. If it matters, ask how long.",
        "correct": true,
        "feedback": "It's an approximate signal that departure is imminent, not a literal timestamp."
      },
      {
        "text": "That she'll be through the door in a couple of minutes.",
        "correct": false,
        "feedback": "The phrase often carries a buffer. Taking it literally leads to frustration."
      },
      {
        "text": "That she's lying about leaving.",
        "correct": false,
        "feedback": "It's a widely understood convention, not an outright lie."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-10-c",
    "normId": "SO-10-on-my-way-white-lie",
    "category": "Social",
    "setup": "You're meeting a friend to catch a train and timing is tight. They text “omw!”",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Ask exactly how many minutes away she is.",
        "correct": true,
        "feedback": "“On my way” has a built-in buffer. When timing is tight, ask for a real number."
      },
      {
        "text": "Trust that she's already travelling.",
        "correct": false,
        "feedback": "She may not have left yet. You could miss the train."
      },
      {
        "text": "Reply telling her she's lying.",
        "correct": false,
        "feedback": "It's a convention, not a lie. A direct question is better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-11-b",
    "normId": "SO-11-dinner-party-gift-bringing-norm",
    "category": "Social",
    "setup": "A colleague invites you to a birthday supper at her home. The invitation says only, “Come round at eight.”",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Bring a small item, such as wine, flowers or dessert.",
        "correct": true,
        "feedback": "Bringing something is assumed, even when the invitation doesn't say so."
      },
      {
        "text": "Bring nothing at all, since she didn't ask you to bring anything.",
        "correct": false,
        "feedback": "The expectation is unspoken. Arriving empty-handed is noticed."
      },
      {
        "text": "Bring an expensive gift, to try to impress her and her guests.",
        "correct": false,
        "feedback": "A modest item is the norm. A lavish one can feel awkward."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-12-a",
    "normId": "SO-12-i-wont-keep-you-closing-signal",
    "category": "Social",
    "setup": "You're chatting with a friend on the phone. They say, “Anyway, I won't keep you.” You've nothing planned for the evening.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Wrap up warmly: “No worries, great to catch up. Speak soon!”",
        "correct": true,
        "feedback": "It's usually the speaker's polite way of saying they're ready to finish, framed as concern for your time."
      },
      {
        "text": "Say you've got all evening and carry on chatting.",
        "correct": false,
        "feedback": "They're not asking about your diary. It's a closing cue, so carrying on pushes past it."
      },
      {
        "text": "Apologise for taking up so much of their time.",
        "correct": false,
        "feedback": "It's a routine, polite goodbye, not a hint that you've done anything wrong. An apology makes it heavier than it is."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-12-b",
    "normId": "SO-12-i-wont-keep-you-closing-signal",
    "category": "Social",
    "setup": "At the end of a chat in the office kitchen, a colleague says, “Right, I'll let you get on.” You had wanted to ask one more thing.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Wrap up naturally: “Sure, catch you later!” and ask later.",
        "correct": true,
        "feedback": "It's the speaker's polite way of finishing, framed as concern for your time."
      },
      {
        "text": "Ask your question anyway and at length, before she goes off.",
        "correct": false,
        "feedback": "That ignores the cue to finish. Save it for later."
      },
      {
        "text": "Say “No hurry at all, I've got loads of time to chat with you.”",
        "correct": false,
        "feedback": "That overrides her signal. She's ready to go."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-12-c",
    "normId": "SO-12-i-wont-keep-you-closing-signal",
    "category": "Social",
    "setup": "You want to end a long chat with a friend politely.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“Anyway, I won't keep you!”",
        "correct": true,
        "feedback": "It's a standard, polite way to close a conversation."
      },
      {
        "text": "Say you're getting bored.",
        "correct": false,
        "feedback": "That's blunt. The polite phrase does the job without offence."
      },
      {
        "text": "Disappear without a word.",
        "correct": false,
        "feedback": "That's rude. A closing phrase is normal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-13-b",
    "normId": "SO-13-deadpan-irony-unflagged",
    "category": "Social",
    "setup": "Rain pours down on your team picnic. A colleague says, without a smile, “Perfect weather for it.”",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As dry humour. Reply with something like “Ha, ideal!”",
        "correct": true,
        "feedback": "The lack of a tone cue is part of the humour. A light reply works either way."
      },
      {
        "text": "As a genuine opinion that the weather is perfect.",
        "correct": false,
        "feedback": "The obvious facts contradict it. It's irony."
      },
      {
        "text": "As rude, so ask her what she means.",
        "correct": false,
        "feedback": "It's a joke, not a jab. Asking would kill it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-13-c",
    "normId": "SO-13-deadpan-irony-unflagged",
    "category": "Social",
    "setup": "A manager looks at a broken printer and says, deadpan, “Well, this is going great.”",
    "prompt": "How do you react?",
    "options": [
      {
        "text": "As dry humour. Respond lightly.",
        "correct": true,
        "feedback": "An obviously contradicting statement is a classic deadpan joke."
      },
      {
        "text": "Worry about the project and offer a rescue plan.",
        "correct": false,
        "feedback": "She's joking. A rescue plan treats it as literal."
      },
      {
        "text": "Argue it's going fine.",
        "correct": false,
        "feedback": "That misses the joke and puts you at odds with her."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-14-a",
    "normId": "SO-14-whatsapp-seen-no-reply-norm",
    "category": "Social",
    "setup": "You message a friend about weekend plans. It shows as read, but you've had no reply by the end of the day.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Wait a day or two, then nudge lightly: “No worries if you're busy!”",
        "correct": true,
        "feedback": "Read-but-unanswered usually means a busy life, not a snub. A short wait and a light follow-up is the normal approach."
      },
      {
        "text": "Assume they're ignoring you and stop messaging them.",
        "correct": false,
        "feedback": "A read message with no reply is rarely a deliberate snub. Cutting contact over a normal delay is a big reaction."
      },
      {
        "text": "Message again tonight to ask why they haven't replied.",
        "correct": false,
        "feedback": "Chasing within hours feels like pressure. Replies to non-urgent messages often take a day or more."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-14-b",
    "normId": "SO-14-whatsapp-seen-no-reply-norm",
    "category": "Social",
    "setup": "You send a friend photos of your new flat. It shows “read” for six hours with no reply.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Wait. She's probably busy.",
        "correct": true,
        "feedback": "A delayed reply usually reflects a busy day, not a snub."
      },
      {
        "text": "Assume she doesn't like it.",
        "correct": false,
        "feedback": "Read-but-unanswered is rarely about the content."
      },
      {
        "text": "Send another message asking why she isn't replying.",
        "correct": false,
        "feedback": "Chasing within hours feels like pressure."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-14-c",
    "normId": "SO-14-whatsapp-seen-no-reply-norm",
    "category": "Social",
    "setup": "A colleague leaves your Teams message on “seen” overnight.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Give it a day, then nudge lightly.",
        "correct": true,
        "feedback": "A short delay is normal. A light nudge later is fine."
      },
      {
        "text": "Take it as a snub.",
        "correct": false,
        "feedback": "Non-urgent messages often wait a day."
      },
      {
        "text": "Message her manager about the delay.",
        "correct": false,
        "feedback": "That's out of proportion. A light nudge will do."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-15-b",
    "normId": "SO-15-compliment-deflection-response",
    "category": "Social",
    "setup": "You say, “That's a lovely jacket.” She replies, “Oh, this old thing? Got it in a sale.”",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "A warm restatement: “Well, it looks great on you.”",
        "correct": true,
        "feedback": "Deflecting a compliment is a politeness habit. A kind restatement lands well."
      },
      {
        "text": "Agree with her that the jacket does look rather old now.",
        "correct": false,
        "feedback": "That takes the deflection literally and would sound odd."
      },
      {
        "text": "Argue at some length that the jacket isn't old at all.",
        "correct": false,
        "feedback": "No need to press. A brief restatement is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-15-c",
    "normId": "SO-15-compliment-deflection-response",
    "category": "Social",
    "setup": "A friend says “It was nothing, really” after cooking you a three-course dinner.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“Well, it was delicious.”",
        "correct": true,
        "feedback": "A short, warm restatement is the right response to a modest deflection."
      },
      {
        "text": "Insist at length that it wasn't nothing.",
        "correct": false,
        "feedback": "Pressing makes her more embarrassed."
      },
      {
        "text": "Offer to pay her for the meal.",
        "correct": false,
        "feedback": "That treats a kind gesture like a transaction."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-16-a",
    "normId": "SO-16-stay-in-touch-closing-ritual",
    "category": "Social",
    "setup": "On the last day of a month-long course, a classmate you get on with says, “We must stay in touch!” No plans are made.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Suggest something concrete before you part: “Shall we grab a coffee once a month?”",
        "correct": true,
        "feedback": "The warmth is usually real, but it's a parting ritual, not a promise of regular contact. A concrete plan makes it real."
      },
      {
        "text": "Wait for them to get in touch, since they said they would.",
        "correct": false,
        "feedback": "It's a closing ritual, not a commitment to stay in contact. Waiting passively is how most of these friendships fade."
      },
      {
        "text": "Decide they were being insincere and let the friendship go.",
        "correct": false,
        "feedback": "The sentiment is usually sincere. It just isn't a plan, so dropping it wastes a chance to suggest one."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-16-b",
    "normId": "SO-16-stay-in-touch-closing-ritual",
    "category": "Social",
    "setup": "A colleague who is leaving the company says, “Let's definitely stay in touch!” You'd like to.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Suggest a concrete plan: “Lunch next month?”",
        "correct": true,
        "feedback": "The sentiment is sincere, but a plan makes it real."
      },
      {
        "text": "Wait for her to be in touch.",
        "correct": false,
        "feedback": "Most of these fade without a plan."
      },
      {
        "text": "Take it as a commitment and message her weekly.",
        "correct": false,
        "feedback": "That's more than was meant. A single concrete plan is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-16-c",
    "normId": "SO-16-stay-in-touch-closing-ritual",
    "category": "Social",
    "setup": "You exchanged “let's stay in touch” with five people at a conference. Three never replied, and you feel hurt.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a normal parting ritual, not a broken promise.",
        "correct": true,
        "feedback": "It's warm in the moment but not a commitment."
      },
      {
        "text": "As a promise that three people broke once they went home.",
        "correct": false,
        "feedback": "Nothing was promised. It was a closing ritual."
      },
      {
        "text": "As a sign that you were secretly disliked by those people.",
        "correct": false,
        "feedback": "It's not a verdict on you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-17-a",
    "normId": "SO-17-tea-offering-hospitality-ritual",
    "category": "Social",
    "setup": "You arrive at a colleague's home for the first time. Within a minute they ask, “Cup of tea?” You aren't thirsty.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Accept something small: “Just a glass of water, thanks.”",
        "correct": true,
        "feedback": "It's a scripted welcome, not a check on your thirst. Accepting something small makes the host feel the gesture landed."
      },
      {
        "text": "“No thanks, I'm fine,” and leave it there.",
        "correct": false,
        "feedback": "Declining outright can leave a host feeling awkward at having nothing to offer."
      },
      {
        "text": "Explain that you've already had a drink on the way.",
        "correct": false,
        "feedback": "It isn't a real question about thirst. A literal answer misses what's being offered, which is a welcome."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-SO-17-b",
    "normId": "SO-17-tea-offering-hospitality-ritual",
    "category": "Social",
    "setup": "At a client's office the receptionist offers, “Tea or coffee?” You've just had one.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Accept something small, such as water.",
        "correct": true,
        "feedback": "It's a welcome ritual, and accepting something small is smoother than declining."
      },
      {
        "text": "Decline firmly.",
        "correct": false,
        "feedback": "Outright refusal can leave the host awkward."
      },
      {
        "text": "Refuse but explain at length why you don't need one.",
        "correct": false,
        "feedback": "That's too much explanation for a simple gesture."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-1-b",
    "normId": "AB-1-council-tax-band-query-formality",
    "category": "Admin & bureaucracy",
    "setup": "You spot a pothole and want to report it to the council. The site offers only a long, multi-page form, and there's no email address anywhere.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Fill in the form, and flag it as urgent only if it genuinely is.",
        "correct": true,
        "feedback": "It's the council's standard structure, not a sign they don't care. The form is the expected channel."
      },
      {
        "text": "Email the chief executive directly to skip the process.",
        "correct": false,
        "feedback": "That bypasses the system and is unlikely to be faster. Use the official channel."
      },
      {
        "text": "Assume they don't care and give up on asking.",
        "correct": false,
        "feedback": "It's just how councils are set up. The form will reach the right team."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-1-c",
    "normId": "AB-1-council-tax-band-query-formality",
    "category": "Admin & bureaucracy",
    "setup": "A council form asks you to enter your address, reference and issue across several pages, for a tiny question. You'd rather send an email.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Complete the form. It's the expected channel.",
        "correct": true,
        "feedback": "Multi-step forms are standard for council queries, not a deliberate obstacle."
      },
      {
        "text": "Keep searching for an email address and ignore the form.",
        "correct": false,
        "feedback": "There usually isn't one. Searching only wastes time."
      },
      {
        "text": "Call repeatedly until they offer a faster route.",
        "correct": false,
        "feedback": "There rarely is one. The form or the phone line is the route."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-2-b",
    "normId": "AB-2-bank-letter-formal-tone-routine",
    "category": "Admin & bureaucracy",
    "setup": "A letter from your bank says, “Failure to respond may result in restrictions on your account.” It asks for a recent proof of address.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Send the document by the deadline, or ring the number on your statement.",
        "correct": true,
        "feedback": "Formal wording is template language for routine checks, not a sign of suspicion."
      },
      {
        "text": "Assume your account is under investigation and quickly move your money.",
        "correct": false,
        "feedback": "Moving money overreacts. The tone is standard, not an accusation."
      },
      {
        "text": "Ignore it completely, since letters like this are usually just junk.",
        "correct": false,
        "feedback": "It may be genuine. Ignoring it risks restrictions. Check via the official number."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-2-c",
    "normId": "AB-2-bank-letter-formal-tone-routine",
    "category": "Admin & bureaucracy",
    "setup": "Your bank sends a formal reminder to update your details, in legal-sounding wording. You fear you've done something wrong.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a routine periodic check. Respond to the specific request.",
        "correct": true,
        "feedback": "Banks verify details periodically, and the tone is standard."
      },
      {
        "text": "As a sign the bank suspects you.",
        "correct": false,
        "feedback": "The tone is a template. It's not about you in particular."
      },
      {
        "text": "As a message you can safely delete without checking.",
        "correct": false,
        "feedback": "Don't dismiss it. Confirm it's genuine through the official app or number."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-3-b",
    "normId": "AB-3-gp-registration-proof-of-address-strictness",
    "category": "Admin & bureaucracy",
    "setup": "At a registration desk the clerk says, “I'm afraid that isn't acceptable. It has to be a recent bank statement.”",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As a rule applied to everyone. Check in advance what's accepted next time.",
        "correct": true,
        "feedback": "It's applied uniformly, not a judgement about you."
      },
      {
        "text": "As a sign of suspicion aimed specifically at you personally by the clerk.",
        "correct": false,
        "feedback": "The same rule is applied to every applicant."
      },
      {
        "text": "As a mistake on her part, so argue until she accepts your document.",
        "correct": false,
        "feedback": "Rules are fixed at the desk. Arguing won't change them."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-3-c",
    "normId": "AB-3-gp-registration-proof-of-address-strictness",
    "category": "Admin & bureaucracy",
    "setup": "You plan to register at a new surgery next week and want to avoid a wasted trip.",
    "prompt": "How do you prepare?",
    "options": [
      {
        "text": "Ring or check online which documents are accepted first.",
        "correct": true,
        "feedback": "Rules are fixed and applied to everyone. Checking in advance avoids rejection on the spot."
      },
      {
        "text": "Bring everything you own and hope something works.",
        "correct": false,
        "feedback": "A pile of random papers may still not meet the rule. Check what's accepted."
      },
      {
        "text": "Bring only your tenancy agreement, since it's official.",
        "correct": false,
        "feedback": "It may be rejected. Many places want a specific kind of document."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-4-b",
    "normId": "AB-4-hmrc-letter-response-urgency-mismatch",
    "category": "Admin & bureaucracy",
    "setup": "An HMRC letter about a small tax-code issue says, “Failure to respond may result in a penalty.” It looks frightening.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Focus on what's actually asked, then phone to check urgency.",
        "correct": true,
        "feedback": "The legal-sounding tone is standard. The facts and the deadline matter."
      },
      {
        "text": "Panic and pay whatever the letter mentions straight away.",
        "correct": false,
        "feedback": "Acting on the tone rather than the facts can cause unnecessary cost."
      },
      {
        "text": "Ignore it completely, assuming that it must be a scam.",
        "correct": false,
        "feedback": "It may be genuine. Check by phoning the official number."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-4-c",
    "normId": "AB-4-hmrc-letter-response-urgency-mismatch",
    "category": "Admin & bureaucracy",
    "setup": "A letter in legal-sounding wording asks you to confirm a small detail on your tax record.",
    "prompt": "How do you judge how urgent it is?",
    "options": [
      {
        "text": "By the facts requested, not the tone. Call to clarify if unsure.",
        "correct": true,
        "feedback": "Standardised wording is used for serious and trivial matters alike."
      },
      {
        "text": "Treat the frightening tone as proof of a really serious problem.",
        "correct": false,
        "feedback": "Tone alone doesn't show urgency here."
      },
      {
        "text": "Treat the formal tone as proof that it's probably unimportant.",
        "correct": false,
        "feedback": "Don't assume either. Read the facts and the deadline."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-5-b",
    "normId": "AB-5-visa-immigration-advisor-directness-expectation",
    "category": "Admin & bureaucracy",
    "setup": "You ask a visa adviser, “Is everything fine with my application?” She replies, “Generally speaking, it should be okay.”",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Ask specific questions, such as exactly which documents or dates.",
        "correct": true,
        "feedback": "A specific question usually gets a specific, more useful answer."
      },
      {
        "text": "Take the general reassurance at face value and stop asking questions.",
        "correct": false,
        "feedback": "A vague reply to a vague question isn't confirmation."
      },
      {
        "text": "Ask the same vague question again, only this time more urgently.",
        "correct": false,
        "feedback": "The same question will get the same answer. Be specific instead."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-5-c",
    "normId": "AB-5-visa-immigration-advisor-directness-expectation",
    "category": "Admin & bureaucracy",
    "setup": "Before a meeting with an immigration adviser you plan your questions.",
    "prompt": "What kind of questions get the most useful answers?",
    "options": [
      {
        "text": "Specific, direct ones: “What's the minimum I need to show, and by when?”",
        "correct": true,
        "feedback": "Advisers tend to answer in kind. Precision gets precision."
      },
      {
        "text": "Broad, open ones about the whole case, so she can cover everything.",
        "correct": false,
        "feedback": "Broad questions get general answers."
      },
      {
        "text": "Polite hints rather than direct questions, so she doesn't feel pressured.",
        "correct": false,
        "feedback": "Hints are easily missed. A clear question is normal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-5-d",
    "normId": "AB-5-visa-immigration-advisor-directness-expectation",
    "category": "Admin & bureaucracy",
    "setup": "When you ask an adviser whether your plan is allowed, she says, “It depends.”",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Re-ask with a specific scenario.",
        "correct": true,
        "feedback": "“It depends” is a response to a general question. A specific scenario gets a firm answer."
      },
      {
        "text": "Take it as a no and give up.",
        "correct": false,
        "feedback": "It isn't a no. It's a request for detail."
      },
      {
        "text": "Take it as a yes and go ahead.",
        "correct": false,
        "feedback": "It isn't a yes either. Get something specific."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-5-e",
    "normId": "AB-5-visa-immigration-advisor-directness-expectation",
    "category": "Admin & bureaucracy",
    "setup": "You get a general reply to a vague question you emailed an adviser.",
    "prompt": "How do you get a clearer answer?",
    "options": [
      {
        "text": "Send a short follow-up with a specific question and the figures.",
        "correct": true,
        "feedback": "Specific questions with details usually get specific replies."
      },
      {
        "text": "Send the same email again, with the key words in capitals.",
        "correct": false,
        "feedback": "Repeating a vague question won't change the reply."
      },
      {
        "text": "Phone and ask again whether it's okay.",
        "correct": false,
        "feedback": "Another general question gets another general answer."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-6-a",
    "normId": "AB-6-dvla-postal-address-update-delay",
    "category": "Admin & bureaucracy",
    "setup": "Three weeks ago you posted a change-of-address form to the DVLA for your driving licence. You've had no confirmation of any kind.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Allow the full processing time, and use the online status checker before phoning.",
        "correct": true,
        "feedback": "No updates in between is normal for the postal route. The new licence simply arrives, so allow the stated time before assuming a problem."
      },
      {
        "text": "Assume it's lost and send a second form straight away.",
        "correct": false,
        "feedback": "Silence in the meantime is how the process works, not proof it's lost. A second form adds confusion."
      },
      {
        "text": "Phone every few days until someone confirms it.",
        "correct": false,
        "feedback": "Chasing early won't speed it up. Allow the stated time first, then check online before calling."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-6-b",
    "normId": "AB-6-dvla-postal-address-update-delay",
    "category": "Admin & bureaucracy",
    "setup": "A friend's driving-licence address change has had no updates for several weeks, and she thinks it's lost.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "Postal updates are minimal. Check the online status and allow the stated time.",
        "correct": true,
        "feedback": "No interim updates is normal. Allow the stated processing time first."
      },
      {
        "text": "Tell her to scrap the first application and send in a new one straight away.",
        "correct": false,
        "feedback": "A second application adds confusion and doesn't speed it up."
      },
      {
        "text": "Tell her to phone the DVLA every single day until it's confirmed to her.",
        "correct": false,
        "feedback": "Daily calls won't help. Wait out the stated window."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-6-c",
    "normId": "AB-6-dvla-postal-address-update-delay",
    "category": "Admin & bureaucracy",
    "setup": "You posted a change-of-address form to the DVLA two weeks ago. There's been no acknowledgement of any kind.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Allow the stated time, and use the online status checker if concerned.",
        "correct": true,
        "feedback": "No acknowledgement is part of the process, not a sign it's lost."
      },
      {
        "text": "Send in another copy of the form, just to be on the safe side.",
        "correct": false,
        "feedback": "A duplicate may cause confusion. Wait the stated time."
      },
      {
        "text": "Phone them on day three to check whether the form has actually arrived.",
        "correct": false,
        "feedback": "It's too early to chase. Allow the full window."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-7-a",
    "normId": "AB-7-ni-number-application-wait",
    "category": "Admin & bureaucracy",
    "setup": "After your National Insurance number interview you've heard nothing for a month.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Keep your reference. Chase only if the wait runs well past the stated time.",
        "correct": true,
        "feedback": "The waiting period is standard system time, not a sign of a problem."
      },
      {
        "text": "Assume that something has gone wrong with it, and reapply from scratch.",
        "correct": false,
        "feedback": "Reapplying could cause duplication. The wait is normal."
      },
      {
        "text": "Call the helpline every single week for a progress update on your case.",
        "correct": false,
        "feedback": "Frequent calls won't speed it up."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-7-b",
    "normId": "AB-7-ni-number-application-wait",
    "category": "Admin & bureaucracy",
    "setup": "A friend's National Insurance letter arrived six weeks after his interview. He'd assumed it was lost and reapplied.",
    "prompt": "What does that show?",
    "options": [
      {
        "text": "The wait is normal. Note the reference and be patient.",
        "correct": true,
        "feedback": "No interim confirmation is standard. Only the final letter is the first real update."
      },
      {
        "text": "That the first application had actually been rejected.",
        "correct": false,
        "feedback": "It wasn't rejected. It was simply still processing."
      },
      {
        "text": "That reapplying is a good way of speeding things up.",
        "correct": false,
        "feedback": "It doesn't. It can create confusion."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-7-c",
    "normId": "AB-7-ni-number-application-wait",
    "category": "Admin & bureaucracy",
    "setup": "You applied for a National Insurance number and got no confirmation after submission, only a reference.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Keep the reference, and check only if it runs well past the stated time.",
        "correct": true,
        "feedback": "It's a normal wait. Chasing too early doesn't help."
      },
      {
        "text": "Email the office every single day to ask how your case is progressing.",
        "correct": false,
        "feedback": "Frequent emails won't speed it up."
      },
      {
        "text": "Assume that it has been declined, since nothing has arrived by now.",
        "correct": false,
        "feedback": "Silence isn't a decline. It's standard processing time."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-8-b",
    "normId": "AB-8-please-allow-28-days-boilerplate",
    "category": "Admin & bureaucracy",
    "setup": "A council email replies, “Please allow up to a month for a response.” You phone after five days.",
    "prompt": "What should you have done?",
    "options": [
      {
        "text": "Waited, as the figure is an upper limit, and chased only after the full window.",
        "correct": true,
        "feedback": "Stated windows are safety margins, not averages."
      },
      {
        "text": "Called them every single day, since waiting a whole month is far too long.",
        "correct": false,
        "feedback": "Early chasing doesn't speed things up."
      },
      {
        "text": "Planned everything around it taking the whole month, and nothing less.",
        "correct": false,
        "feedback": "It's often faster. Treat it as a maximum."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-8-c",
    "normId": "AB-8-please-allow-28-days-boilerplate",
    "category": "Admin & bureaucracy",
    "setup": "A certificate arrives within a week, though the form said to allow a month. You're surprised.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As normal. The stated time is a safety margin, not an average.",
        "correct": true,
        "feedback": "Processing often beats the stated maximum."
      },
      {
        "text": "As a mistake on their part, since it must have been rushed through.",
        "correct": false,
        "feedback": "Quick processing isn't an error."
      },
      {
        "text": "As a sign that your application was somehow prioritised over others.",
        "correct": false,
        "feedback": "It's routine. Most are faster than the stated maximum."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-9-b",
    "normId": "AB-9-energy-switch-retention-script",
    "category": "Admin & bureaucracy",
    "setup": "You call to cancel your energy supplier. The agent says, “Before you go, can I offer you our best rate?” It's lower than before.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Compare it with the new supplier's deal and choose the better.",
        "correct": true,
        "feedback": "It's a routine retention step, not a special favour. Decide on merit."
      },
      {
        "text": "Accept at once, since they clearly value you.",
        "correct": false,
        "feedback": "It's a scripted step for everyone, not a mark of special value."
      },
      {
        "text": "Refuse on principle because they should have offered it before.",
        "correct": false,
        "feedback": "Principle costs you if it's the better deal. Compare first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-9-c",
    "normId": "AB-9-energy-switch-retention-script",
    "category": "Admin & bureaucracy",
    "setup": "A mobile provider offers a cheaper tariff only when you try to leave. You wonder why not earlier.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a routine retention step. Compare and decide on merit.",
        "correct": true,
        "feedback": "It's a standard sales script used on most customers."
      },
      {
        "text": "As a sales trick, so you should simply ignore it and carry on leaving.",
        "correct": false,
        "feedback": "It may still be a good deal. Judge it on merit."
      },
      {
        "text": "As a special effort that they are only making because they value you.",
        "correct": false,
        "feedback": "It's applied to nearly everyone who tries to leave."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-9-d",
    "normId": "AB-9-energy-switch-retention-script",
    "category": "Admin & bureaucracy",
    "setup": "You're switching broadband and the agent keeps offering new deals as you try to cancel.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“Thanks, I'll compare it, but I'm happy with the new deal.”",
        "correct": true,
        "feedback": "It's a scripted offer. A polite decline is fine if your new deal is better."
      },
      {
        "text": "“You should have offered me that rate years ago, you know. Shame on you!”",
        "correct": false,
        "feedback": "That's likely to get you nowhere. It's a standard script."
      },
      {
        "text": "Agree to stay with them just so that you can end the call quickly.",
        "correct": false,
        "feedback": "That locks you into a deal you didn't choose."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-9-e",
    "normId": "AB-9-energy-switch-retention-script",
    "category": "Admin & bureaucracy",
    "setup": "An agent says, “I can offer you our best available rate.” You haven't compared it to anything yet.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Check the new supplier's offer against it before deciding.",
        "correct": true,
        "feedback": "Retention offers are routine. Comparing on merit is fine."
      },
      {
        "text": "Accept the offer immediately, to avoid any further hassle.",
        "correct": false,
        "feedback": "You may miss a better deal. Compare first."
      },
      {
        "text": "Assume that it's a trap and refuse it without even looking.",
        "correct": false,
        "feedback": "It might be competitive. Judge it fairly."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-10-b",
    "normId": "AB-10-tv-licence-enforcement-letter-tone",
    "category": "Admin & bureaucracy",
    "setup": "A second TV licence letter arrives a month after the first, in an envelope marked “Important.” You still don't watch live TV.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Treat it as routine mail and complete the online declaration.",
        "correct": true,
        "feedback": "These letters are sent widely, not as a sign of investigation."
      },
      {
        "text": "Assume you're being investigated and hire a solicitor.",
        "correct": false,
        "feedback": "That's far out of proportion. The letter is routine."
      },
      {
        "text": "Ignore every letter from now on.",
        "correct": false,
        "feedback": "A simple online declaration avoids further letters."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-10-c",
    "normId": "AB-10-tv-licence-enforcement-letter-tone",
    "category": "Admin & bureaucracy",
    "setup": "A friend who rents a room gets a licence letter and thinks her landlord reported her.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "It's a widely sent letter. Check if a licence is needed and reply online.",
        "correct": true,
        "feedback": "These letters go out widely and aren't evidence of a specific investigation."
      },
      {
        "text": "That her landlord must have reported her, so he's to blame for it.",
        "correct": false,
        "feedback": "There's no sign anyone reported her."
      },
      {
        "text": "That she should ignore it as junk mail and throw it straight in the bin.",
        "correct": false,
        "feedback": "It's best to reply once, so the letters stop."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-11-a",
    "normId": "AB-11-universal-credit-journal-formality",
    "category": "Admin & bureaucracy",
    "setup": "Your online journal shows a message: “You are required to provide evidence of your address.” It sounds severe.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Read exactly what's asked and send it by the stated date.",
        "correct": true,
        "feedback": "The formal wording is standard for minor and major requests. Respond to the specific action."
      },
      {
        "text": "Assume your claim is in serious trouble.",
        "correct": false,
        "feedback": "The tone doesn't tell you how serious it is."
      },
      {
        "text": "Ignore it, since the wording is just boilerplate.",
        "correct": false,
        "feedback": "It may have a deadline. Respond to what's asked."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-11-b",
    "normId": "AB-11-universal-credit-journal-formality",
    "category": "Admin & bureaucracy",
    "setup": "Two journal messages use the same stern wording. One asks for a photo of a bill, the other asks you to attend an appointment.",
    "prompt": "How do you treat them?",
    "options": [
      {
        "text": "By what each asks and its deadline, not by the tone.",
        "correct": true,
        "feedback": "Same wording doesn't mean same importance. Read the action and the date."
      },
      {
        "text": "Treat both of them as equally urgent, because of the stern tone.",
        "correct": false,
        "feedback": "Urgency depends on the request and the date, not the tone."
      },
      {
        "text": "Treat both of them as unimportant, because of the routine tone.",
        "correct": false,
        "feedback": "Both need action. Check the specifics."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-11-c",
    "normId": "AB-11-universal-credit-journal-formality",
    "category": "Admin & bureaucracy",
    "setup": "A journal message says, “You are required to provide…” You assume you've done something wrong.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a standard formal style. Respond to the exact request.",
        "correct": true,
        "feedback": "The formal tone is the system's normal style, not an accusation."
      },
      {
        "text": "As an accusation, so you write a long defence.",
        "correct": false,
        "feedback": "A long defence answers a charge that isn't being made."
      },
      {
        "text": "As optional, so you leave it for now.",
        "correct": false,
        "feedback": "If it asks for something, it needs doing by the stated date."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-12-b",
    "normId": "AB-12-school-waiting-list-ack-letter",
    "category": "Admin & bureaucracy",
    "setup": "A letter says, “Your application for a school place has been received and added to our records.”",
    "prompt": "What does it tell you?",
    "options": [
      {
        "text": "Only that it was logged. Ask separately about timing.",
        "correct": true,
        "feedback": "It's procedural confirmation, with no signal about your chances."
      },
      {
        "text": "That a place is likely to be secured soon.",
        "correct": false,
        "feedback": "It confirms receipt only, not an outcome."
      },
      {
        "text": "That you're at the top of the list.",
        "correct": false,
        "feedback": "It says nothing about your position."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-12-c",
    "normId": "AB-12-school-waiting-list-ack-letter",
    "category": "Admin & bureaucracy",
    "setup": "A nursery sends a formal acknowledgement after your application, with no mention of timing.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask separately where you are on the list and when you'd hear.",
        "correct": true,
        "feedback": "The letter confirms receipt. A direct question gets the actual information."
      },
      {
        "text": "Wait quietly at home for the nursery to send you an offer.",
        "correct": false,
        "feedback": "Waiting won't tell you where you stand."
      },
      {
        "text": "Assume that you have been rejected and look for another nursery.",
        "correct": false,
        "feedback": "The letter doesn't say so. Ask for an update."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-13-a",
    "normId": "AB-13-passport-check-and-send-service",
    "category": "Admin & bureaucracy",
    "setup": "At the post office the clerk says, “We recommend our check and send service for an extra fee.” You've already checked your form carefully.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Decline politely. It's optional.",
        "correct": true,
        "feedback": "It mainly speeds things up and catches simple errors. Declining doesn't raise the risk if you've checked."
      },
      {
        "text": "Pay, since otherwise your application will probably fail.",
        "correct": false,
        "feedback": "It's an optional convenience, not a requirement."
      },
      {
        "text": "Argue that the offer is a scam.",
        "correct": false,
        "feedback": "It's a genuine optional service, so there's no need to argue."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-13-b",
    "normId": "AB-13-passport-check-and-send-service",
    "category": "Admin & bureaucracy",
    "setup": "A friend says you must use the check and send service or your passport application will be rejected.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "It's optional. It mostly speeds things up and catches small errors.",
        "correct": true,
        "feedback": "Declining doesn't mean the application is more likely to fail."
      },
      {
        "text": "Tell her to pay for it anyway, just to be on the safe side of things.",
        "correct": false,
        "feedback": "She doesn't need to if she's checked carefully."
      },
      {
        "text": "Tell her it's a scam designed to take extra money from customers.",
        "correct": false,
        "feedback": "It's genuine. It's just optional."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-13-c",
    "normId": "AB-13-passport-check-and-send-service",
    "category": "Admin & bureaucracy",
    "setup": "You've double-checked every detail on your form, but the clerk repeats the check and send offer.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Decline again, politely and firmly.",
        "correct": true,
        "feedback": "It's reasonable to submit directly when you've checked carefully."
      },
      {
        "text": "Give in to avoid awkwardness.",
        "correct": false,
        "feedback": "You'd pay for something you don't need."
      },
      {
        "text": "Ask her to confirm your form is correct before refusing.",
        "correct": false,
        "feedback": "She may not be able to. Trust your own check."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-14-b",
    "normId": "AB-14-ombudsman-escalation-language",
    "category": "Admin & bureaucracy",
    "setup": "A complaint response ends with a line about the ombudsman. You're not satisfied, but hesitate to mention it in reply.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Mention the ombudsman calmly, as your next step if it isn't resolved.",
        "correct": true,
        "feedback": "It's a normal, non-confrontational step that companies mention themselves."
      },
      {
        "text": "Don't mention it at all, since it would sound rather aggressive.",
        "correct": false,
        "feedback": "It's routine. Mentioning it isn't aggressive."
      },
      {
        "text": "Threaten legal action instead, since it sounds more serious than that.",
        "correct": false,
        "feedback": "That's a bigger step than needed and may prolong things."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-14-c",
    "normId": "AB-14-ombudsman-escalation-language",
    "category": "Admin & bureaucracy",
    "setup": "A utility company's final response says you can refer the matter to the ombudsman. You're not happy with the answer.",
    "prompt": "How do you treat that line?",
    "options": [
      {
        "text": "As a normal next step you can use.",
        "correct": true,
        "feedback": "It's standard wording on final responses and a legitimate route."
      },
      {
        "text": "As a threat against you.",
        "correct": false,
        "feedback": "It's not a threat. It's standard information."
      },
      {
        "text": "As a sign your complaint is over.",
        "correct": false,
        "feedback": "It's the opposite. It tells you what comes next."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-15-a",
    "normId": "AB-15-call-recording-disclosure-boilerplate",
    "category": "Admin & bureaucracy",
    "setup": "You phone your bank and hear, “This call may be recorded for security and training purposes.” You feel nervous.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Treat it as routine and carry on with the call.",
        "correct": true,
        "feedback": "It's said at the start of nearly every call and doesn't signal anything unusual."
      },
      {
        "text": "Assume something is wrong with your account.",
        "correct": false,
        "feedback": "It's said to everyone. It says nothing about your account."
      },
      {
        "text": "Hang up and call again.",
        "correct": false,
        "feedback": "Calling again will give you the same message."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-15-b",
    "normId": "AB-15-call-recording-disclosure-boilerplate",
    "category": "Admin & bureaucracy",
    "setup": "A friend says the recording notice on a customer service call means the company is already collecting evidence against him.",
    "prompt": "What do you tell him?",
    "options": [
      {
        "text": "It's said on nearly every call and has no bearing on his query.",
        "correct": true,
        "feedback": "The disclosure is standard and applied to all calls."
      },
      {
        "text": "That he should be very careful about everything he says on the call.",
        "correct": false,
        "feedback": "It's a routine message, so he can speak normally."
      },
      {
        "text": "That he should insist on them stopping the recording before he goes on.",
        "correct": false,
        "feedback": "It's routine. Asking changes nothing."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-16-a",
    "normId": "AB-16-foi-request-standard-format",
    "category": "Admin & bureaucracy",
    "setup": "A council replies to your simple information request in dense formal wording with lots of references. The answer itself seems short.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Read the actual answer and ask a plain follow-up if anything is unclear.",
        "correct": true,
        "feedback": "The formal format is standard for these replies, not a sign your request caused difficulty."
      },
      {
        "text": "Assume that your simple request has somehow caused them a real problem.",
        "correct": false,
        "feedback": "The same format is used for every request."
      },
      {
        "text": "Ignore the whole letter because it's far too formal to bother reading.",
        "correct": false,
        "feedback": "The answer you asked for is in there. Read it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-AB-16-b",
    "normId": "AB-16-foi-request-standard-format",
    "category": "Admin & bureaucracy",
    "setup": "A public body answers your factual question in a stiff, official format.",
    "prompt": "How do you read the formality?",
    "options": [
      {
        "text": "As standard format. Focus on the answer given.",
        "correct": true,
        "feedback": "The style is a required template. It doesn't show how your request was treated."
      },
      {
        "text": "As evidence they're hiding something.",
        "correct": false,
        "feedback": "The format is the same for everyone. It isn't evasion."
      },
      {
        "text": "As a rejection.",
        "correct": false,
        "feedback": "A formal wrapper doesn't mean a refusal. Read the content."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-1-b",
    "normId": "ED-1-seminar-participation-expectation",
    "category": "Education",
    "setup": "In a seminar the tutor asks, “Any thoughts on the reading?” and waits. You did the reading but feel shy.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Offer a short prepared point early.",
        "correct": true,
        "feedback": "Silence is read as not having engaged. Even a brief contribution counts."
      },
      {
        "text": "Stay quiet. She'll call on you if she wants you to speak.",
        "correct": false,
        "feedback": "She may, but silence is read as disengagement. Don't wait to be invited."
      },
      {
        "text": "Wait until a friend speaks, then agree with her.",
        "correct": false,
        "feedback": "Echoing others shows less than a point of your own."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-1-c",
    "normId": "ED-1-seminar-participation-expectation",
    "category": "Education",
    "setup": "A tutor cold-calls you by name after nobody volunteers. You're caught off guard.",
    "prompt": "How do you handle seminars from now on?",
    "options": [
      {
        "text": "Have a point or two ready and offer it before others do.",
        "correct": true,
        "feedback": "Preparing a specific point makes speaking up easier and reads well."
      },
      {
        "text": "Prepare nothing and hope the tutor skips you.",
        "correct": false,
        "feedback": "That risks another cold call. Silence reads as not having done the reading."
      },
      {
        "text": "Sit at the back so she doesn't notice you.",
        "correct": false,
        "feedback": "Hiding reads as disengagement. A short early point is better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-1-d",
    "normId": "ED-1-seminar-participation-expectation",
    "category": "Education",
    "setup": "Your participation grade is low, though you did all the reading and attended every week.",
    "prompt": "What does that suggest?",
    "options": [
      {
        "text": "Silence reads as not engaging. Contribute briefly in future.",
        "correct": true,
        "feedback": "Quiet politeness isn't read as respect. Contributing is what's graded."
      },
      {
        "text": "That the participation grading was unfair and should be challenged.",
        "correct": false,
        "feedback": "It's a standard expectation. Consistent silence is read as not engaging."
      },
      {
        "text": "That you need to talk a lot more than anyone else in the room.",
        "correct": false,
        "feedback": "No, brief, relevant points are enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-2-b",
    "normId": "ED-2-dissertation-supervisor-email-formality",
    "category": "Education",
    "setup": "You send your supervisor a long, careful email. Her reply: “Fine. Send me chapter three by Friday.” There's no greeting.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As time pressure, not disapproval. Do what it asks.",
        "correct": true,
        "feedback": "Brevity reflects a heavy workload, not a verdict on your work."
      },
      {
        "text": "As quiet anger about the sheer length of your long email.",
        "correct": false,
        "feedback": "Short replies are routine. They aren't about your email."
      },
      {
        "text": "As a dismissal of your whole project and its direction.",
        "correct": false,
        "feedback": "It actually asks for more work, so it's engaged."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-2-c",
    "normId": "ED-2-dissertation-supervisor-email-formality",
    "category": "Education",
    "setup": "A supervisor's one-line reply, sent from her phone, answers only half of your detailed question.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Read it as brief, not cold. Follow up on the unanswered half.",
        "correct": true,
        "feedback": "Short replies are about time. A specific follow-up works."
      },
      {
        "text": "Assume that she simply isn't interested in your project any more.",
        "correct": false,
        "feedback": "Brevity isn't disinterest. It's pressure of time."
      },
      {
        "text": "Send the original long email again in full, just in case she missed it.",
        "correct": false,
        "feedback": "Repeating it won't help. A narrow follow-up will."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-2-d",
    "normId": "ED-2-dissertation-supervisor-email-formality",
    "category": "Education",
    "setup": "You receive “Yes, go ahead.” in response to a detailed plan for your dissertation.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Go ahead. Brevity isn't doubt.",
        "correct": true,
        "feedback": "A short yes is a yes. Time pressure explains the brevity."
      },
      {
        "text": "Ask whether she really read it.",
        "correct": false,
        "feedback": "That could annoy her. Take her at her word."
      },
      {
        "text": "Assume she's cross with you.",
        "correct": false,
        "feedback": "Nothing suggests that. It's just brief."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-2-e",
    "normId": "ED-2-dissertation-supervisor-email-formality",
    "category": "Education",
    "setup": "Your lecturer replies to your long email with “See you Tues.” You wonder if you've annoyed her.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Take it at face value and raise anything else on Tuesday.",
        "correct": true,
        "feedback": "Short replies are normal for busy staff. They aren't a verdict."
      },
      {
        "text": "Apologise at some length for having sent such a long email.",
        "correct": false,
        "feedback": "An apology makes a routine exchange awkward."
      },
      {
        "text": "Reply straight away asking whether she is upset or annoyed with you.",
        "correct": false,
        "feedback": "That's reading disapproval into brevity. Wait for Tuesday."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-3-b",
    "normId": "ED-3-extension-request-norm",
    "category": "Education",
    "setup": "A family emergency has left you far behind on coursework due in three days. You feel embarrassed to ask for more time.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Submit the formal request now, with the evidence asked for.",
        "correct": true,
        "feedback": "Using the process is routine administration, not a failure. Earlier is better."
      },
      {
        "text": "Push through alone to avoid looking weak.",
        "correct": false,
        "feedback": "That risks poorer work. The process exists for this."
      },
      {
        "text": "Email the lecturer privately and rely on a verbal yes.",
        "correct": false,
        "feedback": "A formal request is what counts. Informal yes can fall through."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-3-c",
    "normId": "ED-3-extension-request-norm",
    "category": "Education",
    "setup": "A friend says using the extenuating circumstances form means you've failed. She's struggling with a deadline.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "It's routine administration. Use it early, with evidence.",
        "correct": true,
        "feedback": "It isn't treated as failure. Using the process is expected."
      },
      {
        "text": "She's right, so she should avoid the process altogether.",
        "correct": false,
        "feedback": "That's a common worry, but the form exists for good reason."
      },
      {
        "text": "Use it only if she actually ends up missing the deadline.",
        "correct": false,
        "feedback": "Early is better. Waiting until after can weaken the request."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-3-d",
    "normId": "ED-3-extension-request-norm",
    "category": "Education",
    "setup": "The portal has a form for mitigating circumstances. You missed a week of classes through a personal issue.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Submit the form as early as possible.",
        "correct": true,
        "feedback": "Early requests with evidence are routine and welcomed."
      },
      {
        "text": "Wait until after the deadline to see how you do.",
        "correct": false,
        "feedback": "That can weaken a request. Early is better."
      },
      {
        "text": "Ask classmates to share notes instead and say nothing.",
        "correct": false,
        "feedback": "Notes help, but they don't replace the formal process."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-4-b",
    "normId": "ED-4-plagiarism-citation-strictness",
    "category": "Education",
    "setup": "You paraphrased a journal article closely without citing it, thinking changing the words was enough. A similarity report flags it.",
    "prompt": "What should you have done?",
    "options": [
      {
        "text": "Cited the source, even though you paraphrased.",
        "correct": true,
        "feedback": "Paraphrased ideas still need citing. The automated check doesn't judge intent."
      },
      {
        "text": "Changed a lot more of the original words in each sentence.",
        "correct": false,
        "feedback": "More rewording doesn't remove the need to cite."
      },
      {
        "text": "Cited only the direct quotes you took from the article.",
        "correct": false,
        "feedback": "Paraphrases need citing too, not just direct quotes."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-5-b",
    "normId": "ED-5-personal-tutor-checkin-brevity",
    "category": "Education",
    "setup": "In your personal tutor check-in you didn't mention a worry. The slot felt too short. The meeting has finished.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Email to ask for a short meeting. Tutors expect this.",
        "correct": true,
        "feedback": "A brief check-in doesn't mean she isn't available for specific concerns."
      },
      {
        "text": "Leave it, since the moment to raise it has already passed.",
        "correct": false,
        "feedback": "Unraised concerns tend to stay unaddressed. Follow up."
      },
      {
        "text": "Wait until the next scheduled check-in comes round in a few weeks.",
        "correct": false,
        "feedback": "That could be weeks away. A short email is fine."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-6-a",
    "normId": "ED-6-parents-evening-five-minute-slots",
    "category": "Education",
    "setup": "At your child's parents' evening you get a five-minute slot with the maths teacher. Other parents are already waiting behind you.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask one or two key questions, then email later for a longer meeting if you need one.",
        "correct": true,
        "feedback": "The slots are short because many families are seen in one evening, not because the teacher doesn't care. Email is the route to more time."
      },
      {
        "text": "Take the rush as a sign the teacher doesn't care about your child.",
        "correct": false,
        "feedback": "Every parent gets the same short slot. Brevity is about scheduling, not interest in your child."
      },
      {
        "text": "Keep going until every one of your questions is answered.",
        "correct": false,
        "feedback": "Overrunning holds up the next parents. An email to the teacher is the proper way to ask for more time."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-6-b",
    "normId": "ED-6-parents-evening-five-minute-slots",
    "category": "Education",
    "setup": "You're a parent preparing for a parents' evening where each teacher slot is short.",
    "prompt": "How do you prepare?",
    "options": [
      {
        "text": "Pick one or two specific questions for each teacher.",
        "correct": true,
        "feedback": "Short slots reward focus. You can email for a longer meeting afterwards."
      },
      {
        "text": "Plan to cover everything about your child's year.",
        "correct": false,
        "feedback": "A long agenda won't fit a short slot."
      },
      {
        "text": "Skip preparing. Teachers will lead.",
        "correct": false,
        "feedback": "They'll use the time quickly. Prepare to make the most of it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-7-a",
    "normId": "ED-7-school-uniform-rule-strictness",
    "category": "Education",
    "setup": "A letter from school says your daughter's socks are the wrong colour, and she must wear the correct ones tomorrow.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Check the written uniform policy on the website and comply.",
        "correct": true,
        "feedback": "Strict enforcement of small details is policy applied to every student."
      },
      {
        "text": "Assume that the school is deliberately singling out your family.",
        "correct": false,
        "feedback": "The same rule is applied to everyone."
      },
      {
        "text": "Ignore the letter completely, since socks are really quite trivial.",
        "correct": false,
        "feedback": "Small details matter to schools. Follow the policy."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-7-b",
    "normId": "ED-7-school-uniform-rule-strictness",
    "category": "Education",
    "setup": "A teacher pulls up your son for a minor tie issue, again.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As uniformly enforced policy. Check the written rules.",
        "correct": true,
        "feedback": "UK schools tend to be precise about small details, for every student."
      },
      {
        "text": "As a personal criticism of your family.",
        "correct": false,
        "feedback": "The rule applies to all pupils."
      },
      {
        "text": "As a mistake you should dispute immediately.",
        "correct": false,
        "feedback": "Check the policy before disputing."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-8-a",
    "normId": "ED-8-exam-results-day-protocol",
    "category": "Education",
    "setup": "Your exam results appear in a cold, formal portal message with a link about appeals deadlines. You fear something has gone wrong.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Read your results. The tone is standard.",
        "correct": true,
        "feedback": "The formal tone is the same for everyone and doesn't signal a problem."
      },
      {
        "text": "Assume something has gone wrong with your case.",
        "correct": false,
        "feedback": "It's the standard format. Nothing suggests an issue."
      },
      {
        "text": "Email your teacher to complain informally.",
        "correct": false,
        "feedback": "Informal contact isn't the process. The portal is."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-8-b",
    "normId": "ED-8-exam-results-day-protocol",
    "category": "Education",
    "setup": "A result seems far lower than expected. The portal notes a remark deadline.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Use the formal remark process before the deadline.",
        "correct": true,
        "feedback": "The formal route is the expected one, with a firm deadline."
      },
      {
        "text": "Wait until term starts and ask your teacher informally.",
        "correct": false,
        "feedback": "That may miss the deadline. Use the formal process."
      },
      {
        "text": "Ignore it and accept the result.",
        "correct": false,
        "feedback": "If it seems wrong, the process exists for that."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-9-a",
    "normId": "ED-9-teacher-email-signoff-formality",
    "category": "Education",
    "setup": "You email your lecturer a question about a deadline. The reply is two lines long and ends only “Thanks, R.”",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As normal brevity from a busy person. Reply in the same short style.",
        "correct": true,
        "feedback": "Short, businesslike replies are how many teachers handle a high email volume. It isn't a comment on you."
      },
      {
        "text": "As a sign the lecturer is annoyed with you.",
        "correct": false,
        "feedback": "That brevity is how they answer everyone, so there's no problem with you to fix."
      },
      {
        "text": "As a cue to send a long email explaining yourself.",
        "correct": false,
        "feedback": "A long explanation for a problem that doesn't exist makes a routine exchange heavier. A short reply is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-9-b",
    "normId": "ED-9-teacher-email-signoff-formality",
    "category": "Education",
    "setup": "A teacher replies to your note about your child's absence with “Noted. Thanks, K.”",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As normal brevity. Reply briefly if needed.",
        "correct": true,
        "feedback": "Short, businesslike emails are normal for busy teachers."
      },
      {
        "text": "As a sign that she's displeased with you.",
        "correct": false,
        "feedback": "It's how she writes to everyone."
      },
      {
        "text": "As a subtle rebuke about your child's absence.",
        "correct": false,
        "feedback": "No criticism is implied. It's just brief."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-9-c",
    "normId": "ED-9-teacher-email-signoff-formality",
    "category": "Education",
    "setup": "A lecturer's reply to your question is three words and signed “JB”. You worry you upset him.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Match the brevity and don't read tone into it.",
        "correct": true,
        "feedback": "Brevity is professional norm for high email volume."
      },
      {
        "text": "Apologise to him for bothering him with the question.",
        "correct": false,
        "feedback": "That's an over-reaction. He's just brief."
      },
      {
        "text": "Ask a friend whether she thinks he might be annoyed.",
        "correct": false,
        "feedback": "It's not about you. Take it at face value."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-9-d",
    "normId": "ED-9-teacher-email-signoff-formality",
    "category": "Education",
    "setup": "Every email from your child's teacher is brief. You need to discuss something more sensitive.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Ask for a quick call or a chat in person.",
        "correct": true,
        "feedback": "Nuanced topics suit conversation better than brief email."
      },
      {
        "text": "Send a very long email to explain everything.",
        "correct": false,
        "feedback": "A long email may not get the nuance you need."
      },
      {
        "text": "Wait for her to ask what's wrong.",
        "correct": false,
        "feedback": "She won't know unless you tell her. Ask for a chat."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-9-e",
    "normId": "ED-9-teacher-email-signoff-formality",
    "category": "Education",
    "setup": "A professor replies: “Yes. Friday. Thanks, R.” You'd expected more warmth.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Reply with a brief thanks. It's a professional norm.",
        "correct": true,
        "feedback": "Brevity is about volume, not attitude."
      },
      {
        "text": "Send a warm and rather long reply, to try and soften him up.",
        "correct": false,
        "feedback": "It isn't needed. Match his style."
      },
      {
        "text": "Ask him directly whether he is cross or annoyed with you.",
        "correct": false,
        "feedback": "Nothing suggests he is."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-10-a",
    "normId": "ED-10-school-trip-permission-form-strictness",
    "category": "Education",
    "setup": "A teacher said in the corridor, “Yes, of course your daughter can come on the trip.” A consent form is still due on Friday.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Return the written form by Friday regardless.",
        "correct": true,
        "feedback": "Written forms are required. Verbal consent isn't accepted as a substitute."
      },
      {
        "text": "Rely on the teacher's yes.",
        "correct": false,
        "feedback": "Your daughter could be excluded without the form."
      },
      {
        "text": "Send an email confirmation instead of the form.",
        "correct": false,
        "feedback": "The form itself is what's needed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-10-b",
    "normId": "ED-10-school-trip-permission-form-strictness",
    "category": "Education",
    "setup": "A multi-page consent form for a school trip has a strict deadline. You find it excessive.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Complete and return it exactly as required, by the date.",
        "correct": true,
        "feedback": "The strictness applies to every pupil. It isn't about your family."
      },
      {
        "text": "Return it about a week late, together with a polite apology.",
        "correct": false,
        "feedback": "A late form can mean exclusion."
      },
      {
        "text": "Return a partly completed form, and fill in the rest later.",
        "correct": false,
        "feedback": "An incomplete form is likely to be rejected."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-11-b",
    "normId": "ED-11-sen-support-request-process",
    "category": "Education",
    "setup": "You tell your university you struggle to take notes in lectures. They reply, “You'll need a formal assessment first.”",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Start the assessment now and ask what support is available meanwhile.",
        "correct": true,
        "feedback": "It's the standard route. Starting early and asking about interim support helps."
      },
      {
        "text": "Take it as a refusal.",
        "correct": false,
        "feedback": "It's not a refusal. It's the usual route."
      },
      {
        "text": "Wait until the assessment finishes before asking anything.",
        "correct": false,
        "feedback": "That wastes time. Ask about interim help now."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-12-b",
    "normId": "ED-12-headteacher-escalation-formality",
    "category": "Education",
    "setup": "Your child's teacher hasn't resolved a recurring issue about lunch seating. You want to go straight to the headteacher.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Follow the published complaints stages, in writing and in order.",
        "correct": true,
        "feedback": "Skipping stages usually means being redirected back to the start."
      },
      {
        "text": "Email the headteacher directly, to save yourself a lot of time.",
        "correct": false,
        "feedback": "You'll likely be redirected to the first stage."
      },
      {
        "text": "Go to the school governors first, since they are in charge of it.",
        "correct": false,
        "feedback": "That's the last stage, not the first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-13-b",
    "normId": "ED-13-freshers-week-social-pressure",
    "category": "Education",
    "setup": "A flatmate says, “Everyone's going to the club night, you'd be the only one missing.” You'd rather rest.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Skip it without worry. Groups form over the following weeks.",
        "correct": true,
        "feedback": "“Everyone's going” is enthusiastic marketing, not real social pressure."
      },
      {
        "text": "Go along anyway, to avoid being left out of the group later.",
        "correct": false,
        "feedback": "Missing one event rarely has social consequences."
      },
      {
        "text": "Go along and complain to everyone there about how tired you are.",
        "correct": false,
        "feedback": "That's unfair to yourself and the group. Pick events you like."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-13-c",
    "normId": "ED-13-freshers-week-social-pressure",
    "category": "Education",
    "setup": "In week one your course-mates plan events every night. You're exhausted and settling into a new city.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Choose a couple you really fancy and give the rest a miss.",
        "correct": true,
        "feedback": "Most students do the same, and friendships form over weeks."
      },
      {
        "text": "Attend every single one of them, whatever it costs you.",
        "correct": false,
        "feedback": "That's exhausting and unnecessary."
      },
      {
        "text": "Avoid every one of them and stay in your room all week.",
        "correct": false,
        "feedback": "A few events help you meet people. Choose some."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-14-b",
    "normId": "ED-14-group-project-unequal-contribution-norm",
    "category": "Education",
    "setup": "In your group project one member has contributed almost nothing for weeks. You've stayed quiet to avoid seeming difficult.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Raise it with the tutor, factually, with notes or messages.",
        "correct": true,
        "feedback": "Universities expect this. Documentation before the deadline helps."
      },
      {
        "text": "Quietly do their share of the work yourself, without telling anyone.",
        "correct": false,
        "feedback": "That leaves a shared grade that doesn't reflect the work."
      },
      {
        "text": "Tell the whole group that the missing member should be ashamed.",
        "correct": false,
        "feedback": "That turns it personal. A factual approach to the tutor works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-14-c",
    "normId": "ED-14-group-project-unequal-contribution-norm",
    "category": "Education",
    "setup": "A peer-assessment form mentions unequal contribution. The deadline is two weeks away, and one member has not been responding.",
    "prompt": "When do you raise it?",
    "options": [
      {
        "text": "Now, with documentation.",
        "correct": true,
        "feedback": "Early flags give the tutor time to act."
      },
      {
        "text": "Wait until grading.",
        "correct": false,
        "feedback": "Too late for it to help."
      },
      {
        "text": "Complain after results.",
        "correct": false,
        "feedback": "Afterwards is too late to change anything."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-15-a",
    "normId": "ED-15-lecture-recording-policy-formality",
    "category": "Education",
    "setup": "You assume your lecturer will record the session, as most do. A classmate says this module isn't recorded.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Check the module's policy and take notes yourself.",
        "correct": true,
        "feedback": "Policies differ by module. Notes are the backup."
      },
      {
        "text": "Complain to the university.",
        "correct": false,
        "feedback": "It's the lecturer's stated policy, not a mistake."
      },
      {
        "text": "Ask her to record it privately for you.",
        "correct": false,
        "feedback": "That isn't how the policy works."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-15-b",
    "normId": "ED-15-lecture-recording-policy-formality",
    "category": "Education",
    "setup": "At the start of term each module page states a different lecture-recording policy.",
    "prompt": "How do you plan?",
    "options": [
      {
        "text": "Check each module's policy and take notes as backup.",
        "correct": true,
        "feedback": "Policies vary, so don't assume a university-wide standard."
      },
      {
        "text": "Assume the whole university records everything.",
        "correct": false,
        "feedback": "That's not guaranteed."
      },
      {
        "text": "Skip lectures and rely on recordings.",
        "correct": false,
        "feedback": "You may miss content permanently."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-16-b",
    "normId": "ED-16-feedback-on-essay-terse-comments",
    "category": "Education",
    "setup": "Your essay has marginal comments such as “unclear” and “develop?” and a two-line summary. You feel the marker didn't read it.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Ask about the specific unclear comments.",
        "correct": true,
        "feedback": "Brief comments reflect a large marking load, not lack of care."
      },
      {
        "text": "Assume it wasn't read carefully.",
        "correct": false,
        "feedback": "Brevity is standard. It doesn't mean it wasn't read."
      },
      {
        "text": "Ask for the essay to be remarked.",
        "correct": false,
        "feedback": "That is a big step for brief comments."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-16-c",
    "normId": "ED-16-feedback-on-essay-terse-comments",
    "category": "Education",
    "setup": "A short comment reads “Strengthen this section.” You aren't sure how.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Ask: “Could you expand on what you meant in the third paragraph?”",
        "correct": true,
        "feedback": "A specific question is welcome and gets a specific answer."
      },
      {
        "text": "Rewrite the whole essay from scratch, just to be on the safe side.",
        "correct": false,
        "feedback": "That may not address the point."
      },
      {
        "text": "Ignore the comment and hope that it wasn't all that important.",
        "correct": false,
        "feedback": "You'd lose useful feedback."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-16-d",
    "normId": "ED-16-feedback-on-essay-terse-comments",
    "category": "Education",
    "setup": "Your friend got longer comments from a different tutor and wonders if hers were marked more kindly.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "Brevity is a marking practice, not a judgement. Ask for clarification.",
        "correct": true,
        "feedback": "Terse comments are standard and aren't a sign of harsher marking."
      },
      {
        "text": "Yes, the marker who wrote the briefer comments is probably the harsher one.",
        "correct": false,
        "feedback": "Brevity says nothing about the mark."
      },
      {
        "text": "Ask the other tutor who writes longer comments to mark it instead.",
        "correct": false,
        "feedback": "That isn't how marking works."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-16-e",
    "normId": "ED-16-feedback-on-essay-terse-comments",
    "category": "Education",
    "setup": "Feedback on your dissertation draft is a single paragraph with ticks in the margin.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As brief standard feedback. Ask specific questions.",
        "correct": true,
        "feedback": "Brief feedback is typical and doesn't mean the draft wasn't read."
      },
      {
        "text": "As ticks that are meaningless and tell you nothing.",
        "correct": false,
        "feedback": "Ticks usually mean something. Ask what."
      },
      {
        "text": "As a sign that the draft is perfect and needs no changes.",
        "correct": false,
        "feedback": "It may not be. Ask what to improve."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-17-a",
    "normId": "ED-17-office-hours-drop-in-norm",
    "category": "Education",
    "setup": "Your lecturer's door says “Office hours: Thursday, two to four.” You have a small question about a reading.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Go. Small questions are a normal use.",
        "correct": true,
        "feedback": "Office hours are for any student and any minor point."
      },
      {
        "text": "Skip it, since office hours are for struggling students.",
        "correct": false,
        "feedback": "That's a common misconception. They're for general use."
      },
      {
        "text": "Email a long list of questions instead.",
        "correct": false,
        "feedback": "It's quicker to ask in person."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-17-b",
    "normId": "ED-17-office-hours-drop-in-norm",
    "category": "Education",
    "setup": "You think using office hours would make you look weak.",
    "prompt": "How is it seen?",
    "options": [
      {
        "text": "As normal. Any student can come with a small question.",
        "correct": true,
        "feedback": "Turning up with a small, specific question is expected."
      },
      {
        "text": "As a last resort for students who are really struggling.",
        "correct": false,
        "feedback": "It isn't. They're for general use."
      },
      {
        "text": "As a way for students to ask the lecturer for better grades.",
        "correct": false,
        "feedback": "It's about clarifying, not asking for marks."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-ED-17-c",
    "normId": "ED-17-office-hours-drop-in-norm",
    "category": "Education",
    "setup": "You avoided office hours all term. A friend says one visit would have taken five minutes.",
    "prompt": "What do you do next time?",
    "options": [
      {
        "text": "Turn up with a small, specific question.",
        "correct": true,
        "feedback": "Office hours are for exactly that kind of query."
      },
      {
        "text": "Wait until you're really stuck.",
        "correct": false,
        "feedback": "Early, small visits are the normal use."
      },
      {
        "text": "Only go if the lecturer invites you.",
        "correct": false,
        "feedback": "Invitations aren't needed. Office hours are open."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-1-b",
    "normId": "DR-1-texting-pace-not-urgency",
    "category": "Dating & relationships",
    "setup": "A date replies to your good-morning text at six in the evening: “Hey! Crazy day, how are you?” This is how they usually text.",
    "prompt": "How do you read the delay?",
    "options": [
      {
        "text": "As a relaxed pace, not lost interest. Judge by content over time.",
        "correct": true,
        "feedback": "Reply speed isn't a strong signal of interest here. Busyness is normal."
      },
      {
        "text": "As a clear sign that they're gradually losing interest in you.",
        "correct": false,
        "feedback": "A slow reply often just means a busy day, not a change of heart."
      },
      {
        "text": "As a cue to reply just as slowly yourself to keep the balance.",
        "correct": false,
        "feedback": "Playing games isn't needed. Respond naturally."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-1-c",
    "normId": "DR-1-texting-pace-not-urgency",
    "category": "Dating & relationships",
    "setup": "After a great weekend together your partner takes a day to reply to your messages. You feel anxious.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Don't read interest into speed. Ask lightly if you're unsure.",
        "correct": true,
        "feedback": "Pace isn't a measure of interest. A light check-in settles it."
      },
      {
        "text": "Send several messages to check they're still keen.",
        "correct": false,
        "feedback": "Multiple messages can feel like pressure and won't answer the question."
      },
      {
        "text": "Stop messaging until they message first.",
        "correct": false,
        "feedback": "That turns a normal pace into a standoff."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-1-d",
    "normId": "DR-1-texting-pace-not-urgency",
    "category": "Dating & relationships",
    "setup": "You reply within minutes to a date who usually takes hours. You start to wonder who's keener.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Don't match their speed. Judge by what the messages say.",
        "correct": true,
        "feedback": "Interest shows in content and consistency, not in reply time."
      },
      {
        "text": "Slow down your replies on purpose, so that you seem a bit less keen.",
        "correct": false,
        "feedback": "That adds game-playing to a relaxed pace that was already normal."
      },
      {
        "text": "Message again after an hour to see whether they've seen it.",
        "correct": false,
        "feedback": "That ramps up pressure. Give it time."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-2-b",
    "normId": "DR-2-lets-see-where-this-goes-ambiguity",
    "category": "Dating & relationships",
    "setup": "A few weeks in, you text asking whether they see this going somewhere. They reply, “No pressure, let's take it slow.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Take it at face value. If you want clarity later, ask: “How are you feeling about where things are at?”",
        "correct": true,
        "feedback": "It's usually a genuine wish not to over-define things early, not a hidden reluctance about you. Ask more specifically later."
      },
      {
        "text": "Assume they're seeing other people as well.",
        "correct": false,
        "feedback": "“Take it slow” is about not rushing labels. It says nothing about anyone else, so don't build a story from it."
      },
      {
        "text": "Message again tonight asking what they really mean.",
        "correct": false,
        "feedback": "Pressing the same night repeats the pressure they just asked to avoid. Give it time first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-2-c",
    "normId": "DR-2-lets-see-where-this-goes-ambiguity",
    "category": "Dating & relationships",
    "setup": "At dinner, a month in, you ask if they think about the future. They say, “Let's just keep enjoying it and see where it goes.”",
    "prompt": "How do you read that?",
    "options": [
      {
        "text": "As a preference not to define things yet. Ask something specific later.",
        "correct": true,
        "feedback": "It usually reflects wanting to avoid over-defining things early, not reluctance about you."
      },
      {
        "text": "As a polite rejection, a way of letting you down without actually saying so.",
        "correct": false,
        "feedback": "It's about not labelling things, not about you."
      },
      {
        "text": "As a clear promise that they can see a long future together with you.",
        "correct": false,
        "feedback": "It's open-ended, not a promise."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-2-d",
    "normId": "DR-2-lets-see-where-this-goes-ambiguity",
    "category": "Dating & relationships",
    "setup": "Your date asks where this is heading. You like them but don't want to define it yet.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“I'm really enjoying this. Let's see where it goes.”",
        "correct": true,
        "feedback": "It's a normal, warm way to say you're open without labelling things."
      },
      {
        "text": "“I can't say anything about it yet.”",
        "correct": false,
        "feedback": "That sounds cold. A light, warm reply is better."
      },
      {
        "text": "“I need to think about whether I even like you.”",
        "correct": false,
        "feedback": "Far too blunt and not what you mean."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-3-a",
    "normId": "DR-3-splitting-the-bill-default-norm",
    "category": "Dating & relationships",
    "setup": "On a first date the bill arrives. Your date says, “Shall we just split this?”",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As normal. Agree, or say “Let me get this one” if you'd rather pay.",
        "correct": true,
        "feedback": "Splitting is a common default that signals independence and practicality, not stinginess or disinterest."
      },
      {
        "text": "As an insult, or a sign they aren't interested in you.",
        "correct": false,
        "feedback": "It's an unremarkable default in UK dating, not a comment on how the date went."
      },
      {
        "text": "As a cue to insist on paying the whole bill so you don't seem mean.",
        "correct": false,
        "feedback": "Insisting is a personal choice, not the expected norm, and pressing it can make the moment awkward."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-3-b",
    "normId": "DR-3-splitting-the-bill-default-norm",
    "category": "Dating & relationships",
    "setup": "You'd like to pay the whole bill on a first date.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "State it plainly: “Let me get this one.”",
        "correct": true,
        "feedback": "Paying in full is a personal choice. Saying it directly avoids confusion."
      },
      {
        "text": "Insist loudly and refuse any contribution from them.",
        "correct": false,
        "feedback": "Pressing can make the moment uncomfortable. Say it once, kindly."
      },
      {
        "text": "Say nothing and assume they'll understand.",
        "correct": false,
        "feedback": "They may reach for their wallet. A clear sentence avoids it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-4-a",
    "normId": "DR-4-public-affection-reserve",
    "category": "Dating & relationships",
    "setup": "Your British partner holds your hand but pulls back from kissing in front of her family.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As general reserve. If it matters, say so calmly.",
        "correct": true,
        "feedback": "Public reserve is a broad pattern, not a verdict on the relationship."
      },
      {
        "text": "As a sign that she lacks pride in you in front of her family.",
        "correct": false,
        "feedback": "Her reserve is about the setting, not you."
      },
      {
        "text": "As a sign that she's actually embarrassed to be seen with you.",
        "correct": false,
        "feedback": "It's a general habit. Don't assume that."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-4-b",
    "normId": "DR-4-public-affection-reserve",
    "category": "Dating & relationships",
    "setup": "At a party your partner only gives you a brief hug when you arrive. You feel hurt.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Don't take it as a verdict. Raise your preference calmly later.",
        "correct": true,
        "feedback": "A low-key public style is common. Say what you'd like in private."
      },
      {
        "text": "Confront her about it there and then in front of the guests.",
        "correct": false,
        "feedback": "That would embarrass her. Discuss it privately instead."
      },
      {
        "text": "Withdraw your own affection in return, to show how you feel.",
        "correct": false,
        "feedback": "That adds distance without explaining anything."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-5-a",
    "normId": "DR-5-meeting-parents-timing-expectation",
    "category": "Dating & relationships",
    "setup": "You've been together for a few months and it's going well, but your partner hasn't suggested meeting their parents.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Don't read it as doubt. If it matters, raise it gently and without pressure.",
        "correct": true,
        "feedback": "Meeting the parents is often treated as a bigger, later milestone. Its timing doesn't measure how serious things are."
      },
      {
        "text": "Conclude they aren't serious and start pulling away from the relationship.",
        "correct": false,
        "feedback": "The delay is usually about the milestone itself, not about how serious the relationship is."
      },
      {
        "text": "Invite yourself along to their next visit to the family home.",
        "correct": false,
        "feedback": "Inviting yourself rushes a step many see as significant. Raise it gently instead."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-5-b",
    "normId": "DR-5-meeting-parents-timing-expectation",
    "category": "Dating & relationships",
    "setup": "Your partner suggests meeting her parents after nine months, saying, “It's a big step, I wanted to wait.” You'd have liked it earlier.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a separately timed milestone, not doubt about you.",
        "correct": true,
        "feedback": "It's often treated as a bigger, later step. Timing doesn't measure seriousness."
      },
      {
        "text": "As proof she wasn't serious about you before.",
        "correct": false,
        "feedback": "She was. She's treating this step as significant."
      },
      {
        "text": "As pressure to move in together next.",
        "correct": false,
        "feedback": "That's reading more than she said."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-6-b",
    "normId": "DR-6-exclusivity-conversation-directness-expected",
    "category": "Dating & relationships",
    "setup": "You've been together two months and never discussed seeing other people. Her friend mentions a recent date of hers.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Start it yourself: “Can we talk about whether we're exclusive?”",
        "correct": true,
        "feedback": "Exclusivity isn't safely assumed without a conversation. Ask directly."
      },
      {
        "text": "Assume that you're already exclusive, since it feels so serious.",
        "correct": false,
        "feedback": "Without discussion, neither of you can safely assume it."
      },
      {
        "text": "Say nothing for now and just watch her behaviour closely for clues.",
        "correct": false,
        "feedback": "That won't answer it. Ask directly."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-7-b",
    "normId": "DR-7-ghosting-normalized-explanation",
    "category": "Dating & relationships",
    "setup": "A date who messaged daily has gone quiet for ten days, with no explanation.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Accept that it's over and move on without chasing.",
        "correct": true,
        "feedback": "Ghosting is common, and more about avoiding a hard conversation than about you."
      },
      {
        "text": "Send a long message asking what you did wrong.",
        "correct": false,
        "feedback": "That seeks an explanation they're unlikely to give."
      },
      {
        "text": "Keep calling every day until they finally pick up.",
        "correct": false,
        "feedback": "That adds pressure and won't change anything."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-7-c",
    "normId": "DR-7-ghosting-normalized-explanation",
    "category": "Dating & relationships",
    "setup": "A friend has been ghosted after several dates and keeps replaying everything she said.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "It's common and more about avoidance than about her. Move on.",
        "correct": true,
        "feedback": "Ghosting says more about the other person's avoidance than her behaviour."
      },
      {
        "text": "Help her to analyse every message and work out the mistake she made.",
        "correct": false,
        "feedback": "There probably isn't one. It's a general pattern."
      },
      {
        "text": "Ask mutual friends what he might have been saying about her lately.",
        "correct": false,
        "feedback": "That prolongs the pain without giving closure."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-7-d",
    "normId": "DR-7-ghosting-normalized-explanation",
    "category": "Dating & relationships",
    "setup": "After a nice date they stop replying. A mutual friend says, “He's probably just busy.” A week has passed.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Treat it as over and move on.",
        "correct": true,
        "feedback": "After a reasonable window, silence is the answer."
      },
      {
        "text": "Wait another month in case he gets back to you.",
        "correct": false,
        "feedback": "That keeps you stuck. A week is enough."
      },
      {
        "text": "Send a daily message until he replies.",
        "correct": false,
        "feedback": "That's pressure and rarely works."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-8-b",
    "normId": "DR-8-breakup-softening-language",
    "category": "Dating & relationships",
    "setup": "They end it with: “You're amazing, I'm just not in the right place.” You'd like a fuller reason.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Accept it and ask only practical questions.",
        "correct": true,
        "feedback": "These phrases soften endings. Pressing for more usually isn't productive."
      },
      {
        "text": "Ask for the exact reasons.",
        "correct": false,
        "feedback": "A softened ending usually won't be followed by a detailed one."
      },
      {
        "text": "Argue that they are in the right place.",
        "correct": false,
        "feedback": "That won't change anything and makes it harder."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-8-c",
    "normId": "DR-8-breakup-softening-language",
    "category": "Dating & relationships",
    "setup": "A partner says, “It's not you, it's me.” You want a full explanation.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Accept the softened line and stick to practical matters.",
        "correct": true,
        "feedback": "It's a social convention for ending things with minimal conflict."
      },
      {
        "text": "Keep pushing until they finally give you a literal reason for it.",
        "correct": false,
        "feedback": "That prolongs a hard conversation they're trying to close."
      },
      {
        "text": "Ask their mutual friends what's really going on behind the scenes.",
        "correct": false,
        "feedback": "That's intrusive and won't help you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-8-d",
    "normId": "DR-8-breakup-softening-language",
    "category": "Dating & relationships",
    "setup": "A date ends things with a warm, vague text: “I've really enjoyed this, but I don't think it's right.” You want details.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Reply kindly. There's no need for more detail.",
        "correct": true,
        "feedback": "A vague, kind ending is the convention. Accepting it is the gracious response."
      },
      {
        "text": "Reply with a long message asking for specifics.",
        "correct": false,
        "feedback": "That prolongs it and rarely brings a clearer answer."
      },
      {
        "text": "Call them to discuss it.",
        "correct": false,
        "feedback": "That may feel like pressure. Accept the text as is."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-9-a",
    "normId": "DR-9-moving-in-together-pace-expectation",
    "category": "Dating & relationships",
    "setup": "You've been together a year but live in separate flatshares. You worry it means he isn't serious.",
    "prompt": "How do you see it?",
    "options": [
      {
        "text": "As a practical decision shaped by housing costs. Discuss logistics.",
        "correct": true,
        "feedback": "Moving-in timelines depend on leases and costs, not only commitment."
      },
      {
        "text": "As proof that he isn't truly serious about the relationship at all.",
        "correct": false,
        "feedback": "Housing factors often decide timing, not feeling."
      },
      {
        "text": "As a good reason to give him an ultimatum about moving in together.",
        "correct": false,
        "feedback": "That adds pressure to a practical question."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-9-b",
    "normId": "DR-9-moving-in-together-pace-expectation",
    "category": "Dating & relationships",
    "setup": "Your partner says they'd like to wait until their lease ends before moving in together.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As practical, not emotional. Discuss timing and costs together.",
        "correct": true,
        "feedback": "Housing logistics are separate from emotional commitment."
      },
      {
        "text": "As a polite form of rejection of you and of the relationship.",
        "correct": false,
        "feedback": "It's about the lease, not about you."
      },
      {
        "text": "As a convenient excuse he is using to avoid making the commitment.",
        "correct": false,
        "feedback": "A lease is a real constraint. Talk it through."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-10-b",
    "normId": "DR-10-dating-app-messaging-norm",
    "category": "Dating & relationships",
    "setup": "On a dating app you send a long, detailed first message. Your match replies, “Haha, thanks! ” and nothing else.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "Brevity isn't disinterest. See how the chat develops.",
        "correct": true,
        "feedback": "Message length on first contact doesn't predict genuine interest."
      },
      {
        "text": "As rejection.",
        "correct": false,
        "feedback": "A short reply isn't a no. Give it time."
      },
      {
        "text": "As a sign you should write even longer messages.",
        "correct": false,
        "feedback": "That could overwhelm them. Match their pace."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-11-b",
    "normId": "DR-11-declining-a-second-date-vague-language",
    "category": "Dating & relationships",
    "setup": "Two days after a dinner date you get a text: “Had a lovely time, let's stay in touch!” Nothing else.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "Probably a gentle decline. If you'd like to meet again, suggest something specific.",
        "correct": true,
        "feedback": "With no specific plan proposed, this usually works as a kind, gentle decline. A concrete suggestion gets you a clear answer."
      },
      {
        "text": "As a clear invitation to arrange a second date whenever you like.",
        "correct": false,
        "feedback": "With no date proposed by either side, it's rarely an open invitation. Waiting for it to become a plan seldom works."
      },
      {
        "text": "As proof they didn't enjoy the evening at all.",
        "correct": false,
        "feedback": "They probably did enjoy it. The phrase is a polite way of declining, not a verdict on how the evening went."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-11-c",
    "normId": "DR-11-declining-a-second-date-vague-language",
    "category": "Dating & relationships",
    "setup": "A date says as you part, “Let's do this again some time!” and later texts, “Lovely evening, speak soon!” No plan is made.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Propose a specific plan.",
        "correct": true,
        "feedback": "Without a concrete date, these are warm closers. A specific suggestion shows intent."
      },
      {
        "text": "Wait for them to suggest one.",
        "correct": false,
        "feedback": "They may be waiting for you, or they may not intend to."
      },
      {
        "text": "Take it as a promise to meet soon.",
        "correct": false,
        "feedback": "It's a sentiment, not a plan."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-11-d",
    "normId": "DR-11-declining-a-second-date-vague-language",
    "category": "Dating & relationships",
    "setup": "You liked someone but they sent, “Had a lovely time, let's stay in touch!” It's been a week.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Send one specific invitation. If there's no reply, move on.",
        "correct": true,
        "feedback": "A concrete suggestion gets a clear answer."
      },
      {
        "text": "Send several messages in a row until they finally reply to you.",
        "correct": false,
        "feedback": "Repeated nudges feel like pressure."
      },
      {
        "text": "Keep waiting patiently for them to suggest something themselves.",
        "correct": false,
        "feedback": "That likely means nothing happens."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-12-b",
    "normId": "DR-12-house-party-flirting-norm",
    "category": "Dating & relationships",
    "setup": "At a party someone teases you about your drink order and keeps standing near you.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Notice it as possible interest. Ask lightly: “Should we swap numbers?”",
        "correct": true,
        "feedback": "Sustained attention and teasing are interest signals in themselves."
      },
      {
        "text": "Treat it as simple friendliness and nothing more than that, so do nothing.",
        "correct": false,
        "feedback": "It may be, but sustained attention suggests more."
      },
      {
        "text": "Tell them straight away, in front of everyone else, that you like them.",
        "correct": false,
        "feedback": "That's more direct than needed. A light question suffices."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-12-c",
    "normId": "DR-12-house-party-flirting-norm",
    "category": "Dating & relationships",
    "setup": "At a friend's barbecue someone spends an hour teasing you and asking questions about your life.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As possible interest. If you're unsure, test lightly.",
        "correct": true,
        "feedback": "Banter and attention can be flirting without anything being said outright."
      },
      {
        "text": "As nothing more than ordinary politeness from a stranger.",
        "correct": false,
        "feedback": "An hour of focused attention is more than politeness."
      },
      {
        "text": "As a cue to leave the barbecue quickly, to avoid any awkwardness.",
        "correct": false,
        "feedback": "You'd miss a possible opening."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-12-d",
    "normId": "DR-12-house-party-flirting-norm",
    "category": "Dating & relationships",
    "setup": "Someone keeps ending up in your conversation circle, joking with you, but hasn't said anything direct.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As likely interest, shown through sustained attention.",
        "correct": true,
        "feedback": "Interest is often signalled by attention and banter, not statements."
      },
      {
        "text": "As nothing at all unless somebody actually says it aloud.",
        "correct": false,
        "feedback": "Many interests are never stated. They're shown."
      },
      {
        "text": "As rudeness, because they keep inviting themselves in.",
        "correct": false,
        "feedback": "Teasing is a friendly signal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-13-a",
    "normId": "DR-13-anniversary-milestone-low-key-marking",
    "category": "Dating & relationships",
    "setup": "For your anniversary your partner books a quiet dinner and gives you a card. You'd expected a surprise party.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As understated style, not low regard. State your preferences next time.",
        "correct": true,
        "feedback": "Low-key marking is a cultural approach. Say what you'd like in advance."
      },
      {
        "text": "As a clear sign that he doesn't really care about you or the day.",
        "correct": false,
        "feedback": "It's a style, not a verdict."
      },
      {
        "text": "As a sign that he's secretly planning something much bigger for later.",
        "correct": false,
        "feedback": "Don't assume. Tell him what you'd like."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-13-b",
    "normId": "DR-13-anniversary-milestone-low-key-marking",
    "category": "Dating & relationships",
    "setup": "You'd like a bigger celebration for your first anniversary, and your partner hasn't mentioned it.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Say what you'd like, in advance.",
        "correct": true,
        "feedback": "Preferences are rarely inferred. Saying it directly works."
      },
      {
        "text": "Wait and hope he works it out.",
        "correct": false,
        "feedback": "He may plan something understated, as is common."
      },
      {
        "text": "Plan it without telling him.",
        "correct": false,
        "feedback": "That may not match his expectations."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-14-b",
    "normId": "DR-14-partners-friends-approval-indirectness",
    "category": "Dating & relationships",
    "setup": "Your partner's friends are polite but don't include you in their plans. Nobody says anything negative.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Ask one of his close friends privately for an honest impression.",
        "correct": true,
        "feedback": "Unstated coolness can be real. A private, honest chat is the way to find out."
      },
      {
        "text": "Assume that they like you, since nobody has said a word against you.",
        "correct": false,
        "feedback": "Politeness isn't approval. A lack of complaint doesn't mean support."
      },
      {
        "text": "Confront the whole group about how they treat you at the next dinner.",
        "correct": false,
        "feedback": "That puts everyone on the defensive."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-14-c",
    "normId": "DR-14-partners-friends-approval-indirectness",
    "category": "Dating & relationships",
    "setup": "At dinner his friends are welcoming but quieter with you than with each other.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As possible reservations. Ask a trusted friend privately.",
        "correct": true,
        "feedback": "Subtle coolness is an indirect signal, even without negative comments."
      },
      {
        "text": "As nothing, since they're just shy.",
        "correct": false,
        "feedback": "Maybe, but it's worth checking quietly."
      },
      {
        "text": "As hostility, so tell your partner to cut them off.",
        "correct": false,
        "feedback": "That's disproportionate. Find out first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-15-a",
    "normId": "DR-15-long-distance-relationship-texting-expectation-mismatch",
    "category": "Dating & relationships",
    "setup": "You're in a long-distance relationship. Your UK partner replies to your daily check-ins only now and then and says constant texting feels like “a lot.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Talk openly and agree a rhythm of contact you're both comfortable with.",
        "correct": true,
        "feedback": "Expectations about contact differ between people and cultures. Agreeing a pace beats guessing what less texting means."
      },
      {
        "text": "Take it as a sign they care less and start pulling back.",
        "correct": false,
        "feedback": "Less frequent texting usually reflects a communication style, not less care. Pulling away creates a problem that isn't there."
      },
      {
        "text": "Keep texting throughout the day so they know you care.",
        "correct": false,
        "feedback": "That ignores what they told you. Constant contact is exactly what they find overwhelming."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-15-b",
    "normId": "DR-15-long-distance-relationship-texting-expectation-mismatch",
    "category": "Dating & relationships",
    "setup": "You're excited to video-call your long-distance partner daily. She prefers twice a week.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Discuss and agree a rhythm that works for both of you.",
        "correct": true,
        "feedback": "Contact expectations vary by culture and person. Agree one directly."
      },
      {
        "text": "Take it as a sign of less commitment to you on her side.",
        "correct": false,
        "feedback": "It's a style difference, not reduced care."
      },
      {
        "text": "Call daily anyway, since that's what you prefer and it works for you.",
        "correct": false,
        "feedback": "That ignores what she told you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-15-c",
    "normId": "DR-15-long-distance-relationship-texting-expectation-mismatch",
    "category": "Dating & relationships",
    "setup": "Your partner says, “Constant contact feels like a lot.” You feel under-prioritised.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Recognise a different style, not less care. Agree a rhythm together.",
        "correct": true,
        "feedback": "Preferences differ. A shared plan beats guessing."
      },
      {
        "text": "Accept it silently and gradually feel more resentful about it all.",
        "correct": false,
        "feedback": "Resentment grows when it isn't discussed."
      },
      {
        "text": "Match her pace quietly, without ever telling her why you're doing it.",
        "correct": false,
        "feedback": "That hides your feelings and builds distance."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-16-b",
    "normId": "DR-16-meeting-the-family-formal-occasion",
    "category": "Dating & relationships",
    "setup": "Your partner's mother invites you to “just come for Sunday lunch and meet everyone.” You plan to turn up in jeans.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Take it as significant. Dress well and bring a small gift.",
        "correct": true,
        "feedback": "A Sunday family lunch is a meaningful occasion, even if it sounds casual."
      },
      {
        "text": "Treat it as just an ordinary Sunday lunch and dress very casually.",
        "correct": false,
        "feedback": "It's likely chosen deliberately as the occasion."
      },
      {
        "text": "Bring a really expensive gift, to try and impress her whole family.",
        "correct": false,
        "feedback": "A small gift is right. Lavish can feel awkward."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-16-c",
    "normId": "DR-16-meeting-the-family-formal-occasion",
    "category": "Dating & relationships",
    "setup": "A text from your partner says, “Come to Sunday lunch at my parents'. Nothing fancy!” You wonder whether to prepare.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Prepare: a small gift and smart casual dress.",
        "correct": true,
        "feedback": "The invitation sounds casual, but the occasion carries weight."
      },
      {
        "text": "Come empty-handed since it's nothing fancy.",
        "correct": false,
        "feedback": "It's an important occasion. A small gift matters."
      },
      {
        "text": "Decline politely to avoid the pressure.",
        "correct": false,
        "feedback": "That could harm the relationship. Prepare and go."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-17-a",
    "normId": "DR-17-relationship-label-avoidance-early-stage",
    "category": "Dating & relationships",
    "setup": "You've been on several dates. At a party they introduce you by name only, and later call you “the person I've been seeing.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Treat it as early caution about labels, not doubt about you. Raise it later if it matters.",
        "correct": true,
        "feedback": "Avoiding the label is often about its commitment, not the person. If it matters, ask directly once enough time has passed."
      },
      {
        "text": "Conclude they have doubts about you in particular and pull back.",
        "correct": false,
        "feedback": "The caution is usually about the label itself, not about you. Pulling back reacts to something that isn't there."
      },
      {
        "text": "Start introducing them as your boyfriend or girlfriend to move things along.",
        "correct": false,
        "feedback": "Pushing a label on early adds the very pressure they're avoiding. Raise it directly once it feels right."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-17-b",
    "normId": "DR-17-relationship-label-avoidance-early-stage",
    "category": "Dating & relationships",
    "setup": "After two months of dating, they introduce you to a colleague only by name.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As early caution about labels. Raise it later if it matters.",
        "correct": true,
        "feedback": "Label avoidance is usually about the label's weight, not about you."
      },
      {
        "text": "As a sign that they are trying to hide you from their colleagues.",
        "correct": false,
        "feedback": "It's a general caution, not concealment."
      },
      {
        "text": "As a hint that you should be the one to propose to them soon.",
        "correct": false,
        "feedback": "That's a leap. It's just caution about labels."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-DR-17-c",
    "normId": "DR-17-relationship-label-avoidance-early-stage",
    "category": "Dating & relationships",
    "setup": "You've been seeing someone for four weeks. They call you “the person I've been seeing” to a friend. You'd like to be exclusive.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask directly once enough time has passed: “How would you describe us?”",
        "correct": true,
        "feedback": "A direct question is fine when it feels right. The absence of a label isn't a verdict."
      },
      {
        "text": "Assume that it means no, and quietly give up on the idea of exclusivity.",
        "correct": false,
        "feedback": "The phrase doesn't mean no. It's often just early caution."
      },
      {
        "text": "Start introducing yourself to their friends as their partner from now on.",
        "correct": false,
        "feedback": "That jumps ahead of what you've agreed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-1-b",
    "normId": "MN-1-tipping-optional-modest-norm",
    "category": "Money & transactions",
    "setup": "You pay by card at a takeaway counter. The machine doesn't prompt for a tip, but you feel you should add something.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "No need. Tipping isn't expected at takeaways.",
        "correct": true,
        "feedback": "Not tipping at counters is normal and isn't read as rude."
      },
      {
        "text": "Add a tip anyway, since leaving nothing would seem mean.",
        "correct": false,
        "feedback": "It isn't expected, so you won't be thought mean."
      },
      {
        "text": "Ask the staff how much they'd expect.",
        "correct": false,
        "feedback": "It would puzzle them. The answer is none."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-1-c",
    "normId": "MN-1-tipping-optional-modest-norm",
    "category": "Money & transactions",
    "setup": "After a short taxi ride the driver says “thanks” and doesn't wait for a tip.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Say thanks. No tip is normal.",
        "correct": true,
        "feedback": "Tipping isn't generally expected for taxis."
      },
      {
        "text": "Insist on adding a large tip.",
        "correct": false,
        "feedback": "That's more than expected and can feel awkward."
      },
      {
        "text": "Apologise for not tipping.",
        "correct": false,
        "feedback": "No apology is needed. It's normal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-1-d",
    "normId": "MN-1-tipping-optional-modest-norm",
    "category": "Money & transactions",
    "setup": "At a sit-down restaurant no service charge appears on your bill. The service was good.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Leave a modest tip of around a tenth.",
        "correct": true,
        "feedback": "It's customary at sit-down restaurants when service isn't already included."
      },
      {
        "text": "Leave nothing, since tipping is never expected here.",
        "correct": false,
        "feedback": "It's discretionary but customary in restaurants."
      },
      {
        "text": "Tip a quarter, as in some other countries.",
        "correct": false,
        "feedback": "That's far more than the norm."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-2-b",
    "normId": "MN-2-service-charge-auto-added-notice",
    "category": "Money & transactions",
    "setup": "A bill for a table of eight has a “discretionary service charge” added. The service was poor.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Politely ask for it to be removed or reduced.",
        "correct": true,
        "feedback": "It's discretionary. Politely asking is acceptable."
      },
      {
        "text": "Pay it anyway, since it's compulsory.",
        "correct": false,
        "feedback": "It's called discretionary. It's fine to ask."
      },
      {
        "text": "Refuse loudly and walk out.",
        "correct": false,
        "feedback": "That's confrontational. A polite request works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-3-b",
    "normId": "MN-3-splitting-bill-evenly-default",
    "category": "Money & transactions",
    "setup": "At a pub meal for six, one friend says, “Shall we just split it evenly?” You had a salad and water while others ordered steaks and wine.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Say lightly that you had less and ask to pay a bit less.",
        "correct": true,
        "feedback": "It's normal and unremarkable to raise. Saying it lightly keeps things easy."
      },
      {
        "text": "Accept silently and feel resentful.",
        "correct": false,
        "feedback": "Staying quiet leaves you paying for others' wine."
      },
      {
        "text": "Ask for an itemised bill and use a calculator.",
        "correct": false,
        "feedback": "That turns a casual meal into an audit."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-3-c",
    "normId": "MN-3-splitting-bill-evenly-default",
    "category": "Money & transactions",
    "setup": "A friend suggests an even split after a coffee morning, and you only had a tea.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“I only had a tea. Shall I pay a bit less?”",
        "correct": true,
        "feedback": "It's a normal, light thing to raise, and no one will mind."
      },
      {
        "text": "Pay the full split so you don't seem petty.",
        "correct": false,
        "feedback": "Raising it isn't petty. It's a normal thing to do."
      },
      {
        "text": "Insist on paying exactly to the penny.",
        "correct": false,
        "feedback": "That's more rigid than the situation needs."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-3-d",
    "normId": "MN-3-splitting-bill-evenly-default",
    "category": "Money & transactions",
    "setup": "On a group night out, someone says, “Easier to split it evenly.” You didn't drink.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Say plainly and lightly that you didn't drink and ask to pay less.",
        "correct": true,
        "feedback": "An even split is a convenience, but speaking up is normal and unremarkable."
      },
      {
        "text": "Stay quiet about it all, since raising the subject seems rather petty.",
        "correct": false,
        "feedback": "It isn't petty. Many would do the same."
      },
      {
        "text": "Announce loudly that the even split is unfair, in front of the whole group.",
        "correct": false,
        "feedback": "A light mention is enough. Don't make it a complaint."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-4-b",
    "normId": "MN-4-salary-discussion-taboo",
    "category": "Money & transactions",
    "setup": "At a leaving do you ask a colleague how much her new job pays. She laughs and says, “Enough to get by!”",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a polite deflection. Ask about typical ranges for the role instead.",
        "correct": true,
        "feedback": "Pay is private. Market-rate questions are acceptable."
      },
      {
        "text": "As evasion, which suggests that she must be hiding something about her pay.",
        "correct": false,
        "feedback": "It's a general norm, not evasiveness about you."
      },
      {
        "text": "As an invitation to ask her again, only this time a bit more directly.",
        "correct": false,
        "feedback": "Asking again would add to the awkwardness."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-4-c",
    "normId": "MN-4-salary-discussion-taboo",
    "category": "Money & transactions",
    "setup": "You're curious about a friend's salary after he mentions a promotion.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Don't ask directly. If it's relevant, ask about market range.",
        "correct": true,
        "feedback": "Direct questions about pay land as a misstep."
      },
      {
        "text": "Ask him directly, since close friends tell each other everything.",
        "correct": false,
        "feedback": "In the UK, pay remains private even among friends."
      },
      {
        "text": "Ask a few of his colleagues instead, rather than asking him.",
        "correct": false,
        "feedback": "That's worse. It's invasive and spreads gossip."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-4-d",
    "normId": "MN-4-salary-discussion-taboo",
    "category": "Money & transactions",
    "setup": "You're preparing to negotiate a role and want a benchmark. A friend says, “Can't complain.” when you ask about his pay.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Take it as a deflection and use market-rate resources.",
        "correct": true,
        "feedback": "The reticence is cultural. Market sources are the way to benchmark."
      },
      {
        "text": "Push him harder until he finally gives you an actual number.",
        "correct": false,
        "feedback": "Pressing makes it uncomfortable."
      },
      {
        "text": "Assume that he must be earning very little, so is embarrassed.",
        "correct": false,
        "feedback": "The phrase tells you nothing about the amount."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-5-b",
    "normId": "MN-5-borrowing-money-awkwardness-indirect-language",
    "category": "Money & transactions",
    "setup": "A friend writes, “I feel bad even asking, but could you lend me twenty pounds until Friday?”",
    "prompt": "How do you read the hedging?",
    "options": [
      {
        "text": "As normal discomfort about money. Answer plainly, yes or no.",
        "correct": true,
        "feedback": "The awkward framing is customary. It doesn't mean the amount is large."
      },
      {
        "text": "As a sign of crisis, so you ask about her finances.",
        "correct": false,
        "feedback": "Hedging is normal, so it isn't necessarily a crisis."
      },
      {
        "text": "As a warning the amount will be large.",
        "correct": false,
        "feedback": "It's twenty pounds. Take it at face value."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-5-c",
    "normId": "MN-5-borrowing-money-awkwardness-indirect-language",
    "category": "Money & transactions",
    "setup": "A colleague says, “This is really awkward, but could I borrow ten pounds for lunch?”",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Respond to the request. Agree or decline plainly.",
        "correct": true,
        "feedback": "The awkwardness is the usual way to ask. It's fine to say yes or no."
      },
      {
        "text": "Worry that something is seriously wrong.",
        "correct": false,
        "feedback": "It's a small request framed politely."
      },
      {
        "text": "Refuse because she seemed awkward.",
        "correct": false,
        "feedback": "The awkwardness isn't a reason to refuse."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-5-d",
    "normId": "MN-5-borrowing-money-awkwardness-indirect-language",
    "category": "Money & transactions",
    "setup": "A flatmate prefaces a request to borrow thirty pounds with a long apology.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Reply plainly. The apology is usual.",
        "correct": true,
        "feedback": "Heavy hedging is the normal way to ask. The request itself is modest."
      },
      {
        "text": "Ask what the money is really for.",
        "correct": false,
        "feedback": "That adds pressure to a modest request."
      },
      {
        "text": "Say yes automatically to ease the embarrassment.",
        "correct": false,
        "feedback": "Say what you actually want. Declining is fine too."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-5-e",
    "normId": "MN-5-borrowing-money-awkwardness-indirect-language",
    "category": "Money & transactions",
    "setup": "A friend asks, “I hate asking, but could you spot me for the train?”",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Say yes or no simply.",
        "correct": true,
        "feedback": "Hating to ask is the standard preface. No need to read more into it."
      },
      {
        "text": "Assume she's in financial trouble.",
        "correct": false,
        "feedback": "Nothing suggests that. It's the usual wording."
      },
      {
        "text": "Give her a lecture about budgeting.",
        "correct": false,
        "feedback": "That's unkind and unrequested."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-6-b",
    "normId": "MN-6-whos-paying-ambiguity-group-meal",
    "category": "Money & transactions",
    "setup": "At a team lunch the bill arrives. Two colleagues reach for their wallets and everyone glances round.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Suggest: “Shall we just split it?”",
        "correct": true,
        "feedback": "A short pause is normal. Naming a plan is well received."
      },
      {
        "text": "Wait silently for someone to decide.",
        "correct": false,
        "feedback": "It usually resolves, but taking the lead helps."
      },
      {
        "text": "Offer to pay for everyone.",
        "correct": false,
        "feedback": "That could be awkward or costly. Splitting is simpler."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-6-c",
    "normId": "MN-6-whos-paying-ambiguity-group-meal",
    "category": "Money & transactions",
    "setup": "You and a friend both reach for the bill at the same moment.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Settle it lightly: “Shall we split it, or you get this and I'll get the next?”",
        "correct": true,
        "feedback": "A light suggestion resolves it quickly."
      },
      {
        "text": "Insist on paying the whole bill yourself and refuse his offer completely.",
        "correct": false,
        "feedback": "It turns a normal pause into a standoff."
      },
      {
        "text": "Let him pay for the whole meal and say nothing about it afterwards.",
        "correct": false,
        "feedback": "That could leave him feeling out of pocket."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-6-d",
    "normId": "MN-6-whos-paying-ambiguity-group-meal",
    "category": "Money & transactions",
    "setup": "After dinner with new friends, the bill arrives and nobody speaks.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Name it lightly: “Shall we just split it?”",
        "correct": true,
        "feedback": "A brief hesitation is normal. Taking initiative is welcomed."
      },
      {
        "text": "Say you've no cash to avoid it.",
        "correct": false,
        "feedback": "That avoids the issue and may cause awkwardness."
      },
      {
        "text": "Go to the toilet until it's sorted.",
        "correct": false,
        "feedback": "It leaves it to others and isn't helpful."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-6-e",
    "normId": "MN-6-whos-paying-ambiguity-group-meal",
    "category": "Money & transactions",
    "setup": "At a meal with your partner's family the bill arrives and nobody says who pays. The pause drags.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Check lightly: “Shall we split it?” Naming it is well received.",
        "correct": true,
        "feedback": "The pause is normal and usually quickly resolved."
      },
      {
        "text": "Grab the bill and pay for everyone without any discussion at all.",
        "correct": false,
        "feedback": "That may offend or cause an awkward argument."
      },
      {
        "text": "Wait quietly until somebody at the table starts to look offended.",
        "correct": false,
        "feedback": "It's better to resolve it than let it drift."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-7-a",
    "normId": "MN-7-buy-now-pay-later-framing",
    "category": "Money & transactions",
    "setup": "At an online checkout there's a “Buy now, pay later” button beside the card option. You'd like to spread the cost, but worry it looks like you're struggling.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Use it if it suits your budget, and read the terms carefully because it's still credit.",
        "correct": true,
        "feedback": "It's a mainstream option offered to everyone, not a sign of difficulty. It's still a form of credit, so the terms are worth reading."
      },
      {
        "text": "Avoid it, because it signals that you're in financial trouble.",
        "correct": false,
        "feedback": "It's offered to every customer, whatever the order. Retailers don't read it as a sign of trouble."
      },
      {
        "text": "Use it without reading the terms, since it's so common.",
        "correct": false,
        "feedback": "Common doesn't mean risk-free. It's still credit, so read the terms before you agree."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-7-b",
    "normId": "MN-7-buy-now-pay-later-framing",
    "category": "Money & transactions",
    "setup": "A friend says he never uses buy now, pay later because it makes you look broke.",
    "prompt": "What do you tell him?",
    "options": [
      {
        "text": "It's mainstream. Use it if it suits, and read the terms.",
        "correct": true,
        "feedback": "It's widely used and doesn't signal distress. It's still credit, though."
      },
      {
        "text": "He's right, so it signals financial trouble.",
        "correct": false,
        "feedback": "It's offered to virtually every customer and is widely used."
      },
      {
        "text": "It's free money, so there's no need to read terms.",
        "correct": false,
        "feedback": "It's still credit with terms worth reading."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-8-a",
    "normId": "MN-8-direct-debit-default-payment-method",
    "category": "Money & transactions",
    "setup": "A new energy account sign-up lists direct debit as the recommended option, with a small discount. You feel uneasy.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Set it up if you're comfortable, or ask about alternatives.",
        "correct": true,
        "feedback": "It's the standard default and usually the easiest and cheapest option."
      },
      {
        "text": "Assume that declining the direct debit would look suspicious to them.",
        "correct": false,
        "feedback": "It's offered to every customer. Declining isn't suspicious."
      },
      {
        "text": "Refuse on principle, even though that costs you the small discount.",
        "correct": false,
        "feedback": "Principle may cost you the discount. Weigh it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-8-b",
    "normId": "MN-8-direct-debit-default-payment-method",
    "category": "Money & transactions",
    "setup": "A utility offers a cheaper rate if you pay by direct debit.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Take it if you're comfortable. It's usually easiest and cheapest.",
        "correct": true,
        "feedback": "It's a standard, convenient option, not a judgement about you."
      },
      {
        "text": "Avoid it, since the offer suggests that they don't really trust you.",
        "correct": false,
        "feedback": "It's about their convenience, not your reliability."
      },
      {
        "text": "Set it up straight away without even checking the amount or the date.",
        "correct": false,
        "feedback": "Check the amount and date first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-9-b",
    "normId": "MN-9-fixed-price-no-haggling-norm",
    "category": "Money & transactions",
    "setup": "At a clothes shop you ask, “Is there any room on the price?” The assistant looks confused.",
    "prompt": "What did you misread?",
    "options": [
      {
        "text": "Marked prices are fixed in most shops.",
        "correct": true,
        "feedback": "Negotiating is unusual in standard retail and can feel awkward."
      },
      {
        "text": "Nothing. Asking is always fine.",
        "correct": false,
        "feedback": "In standard shops, it isn't expected."
      },
      {
        "text": "That you should have asked a manager.",
        "correct": false,
        "feedback": "The manager would say the same."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-9-c",
    "normId": "MN-9-fixed-price-no-haggling-norm",
    "category": "Money & transactions",
    "setup": "You see a second-hand bike advertised by an individual for a set price.",
    "prompt": "How do you approach it?",
    "options": [
      {
        "text": "Offer politely a little less. Secondhand from a person is negotiable.",
        "correct": true,
        "feedback": "Haggling is accepted in private sales and some markets."
      },
      {
        "text": "Pay exactly the price that the seller has asked for, without a word.",
        "correct": false,
        "feedback": "You can often negotiate here."
      },
      {
        "text": "Refuse to negotiate at all, since haggling is never done anywhere in the UK.",
        "correct": false,
        "feedback": "It's fine here. It's retail where it's unusual."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-9-d",
    "normId": "MN-9-fixed-price-no-haggling-norm",
    "category": "Money & transactions",
    "setup": "At a Sunday market a stallholder names a price for a rug.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Politely offer a little less.",
        "correct": true,
        "feedback": "Markets are among the places where some flexibility exists."
      },
      {
        "text": "Never haggle, since it's rude in the UK.",
        "correct": false,
        "feedback": "Markets are an exception to the fixed-price rule."
      },
      {
        "text": "Offer half in an irritated tone.",
        "correct": false,
        "feedback": "That would seem rude. Be polite and modest."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-10-b",
    "normId": "MN-10-treating-someone-no-expectation-of-repayment",
    "category": "Money & transactions",
    "setup": "At the pub a friend says, “Don't worry about it, I've got this,” as he pays. You offer to transfer him the money.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Thank him, and get one another time.",
        "correct": true,
        "feedback": "It's a closed gesture, not a tab to be settled."
      },
      {
        "text": "Insist on transferring the money now.",
        "correct": false,
        "feedback": "Insisting makes it awkward and misreads the gesture."
      },
      {
        "text": "Keep a list of what you owe him.",
        "correct": false,
        "feedback": "That treats a gift as a debt."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-10-c",
    "normId": "MN-10-treating-someone-no-expectation-of-repayment",
    "category": "Money & transactions",
    "setup": "A colleague pays for your coffee: “Don't worry, I've got this.” You feel in her debt.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "A simple thank-you, and reciprocate later.",
        "correct": true,
        "feedback": "A graceful acceptance is all that's needed."
      },
      {
        "text": "Hand her cash on the spot.",
        "correct": false,
        "feedback": "That cancels the gesture and may offend."
      },
      {
        "text": "Ask what you owe by the end of the day.",
        "correct": false,
        "feedback": "She hasn't made it a debt. Accept it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-10-d",
    "normId": "MN-10-treating-someone-no-expectation-of-repayment",
    "category": "Money & transactions",
    "setup": "You've been treated to drinks twice by the same friend, and you wonder whether to repay exactly.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Treat them naturally another time.",
        "correct": true,
        "feedback": "Gestures like this aren't tracked. Reciprocating naturally is the norm."
      },
      {
        "text": "Send them the exact sum.",
        "correct": false,
        "feedback": "It misreads the gesture and could feel formal."
      },
      {
        "text": "Avoid them until things are even.",
        "correct": false,
        "feedback": "That harms the friendship over nothing."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-10-e",
    "normId": "MN-10-treating-someone-no-expectation-of-repayment",
    "category": "Money & transactions",
    "setup": "A friend refuses your cash after paying for dinner: “Honestly, my treat.”",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Accept graciously.",
        "correct": true,
        "feedback": "Accepting simply is the right response. You can return the favour another day."
      },
      {
        "text": "Push until they accept the money.",
        "correct": false,
        "feedback": "Pressing makes it uncomfortable."
      },
      {
        "text": "Leave the cash secretly in their coat.",
        "correct": false,
        "feedback": "That ignores what they said and may annoy them."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-11-b",
    "normId": "MN-11-charity-doorstep-direct-debit-solicitation",
    "category": "Money & transactions",
    "setup": "On the high street a fundraiser steps into your path: “Got two minutes for the children's charity?” You're in a hurry.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Smile, say “Sorry, not today,” and carry on walking.",
        "correct": true,
        "feedback": "A brief, polite decline is normal and sufficient."
      },
      {
        "text": "Stop and explain at length why you can't.",
        "correct": false,
        "feedback": "No explanation is needed. It adds pressure."
      },
      {
        "text": "Pretend not to hear and look away.",
        "correct": false,
        "feedback": "That's unnecessary. A brief reply is easier."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-11-c",
    "normId": "MN-11-charity-doorstep-direct-debit-solicitation",
    "category": "Money & transactions",
    "setup": "Outside the station a charity worker says she only needs two minutes to sign you up for a monthly donation.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "A brief, polite no is expected.",
        "correct": true,
        "feedback": "This is a standard approach and a brief decline is normal."
      },
      {
        "text": "Feel obliged to listen so you don't seem rude.",
        "correct": false,
        "feedback": "You don't need to stop. It's a routine approach."
      },
      {
        "text": "Give your details to end the encounter.",
        "correct": false,
        "feedback": "That commits you to payments you don't want."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-12-b",
    "normId": "MN-12-arranged-vs-unarranged-overdraft-terminology",
    "category": "Money & transactions",
    "setup": "A bank letter explains the difference between arranged and unarranged overdrafts. You expect to dip into overdraft next month.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Ask the bank to set up an arranged limit in advance.",
        "correct": true,
        "feedback": "It's standard terminology, and arranging in advance generally costs less."
      },
      {
        "text": "Take the terms as a warning about your behaviour.",
        "correct": false,
        "feedback": "It's precise banking language, not a personal judgement."
      },
      {
        "text": "Do nothing and see what happens.",
        "correct": false,
        "feedback": "Planning ahead is usually cheaper than an unexpected one."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-13-a",
    "normId": "MN-13-self-checkout-default-expectation",
    "category": "Money & transactions",
    "setup": "In a supermarket a member of staff directs you to the self-checkout with a basket of three items.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As standard. Use it for a small shop.",
        "correct": true,
        "feedback": "Self-checkout is the usual default for small baskets, not a judgement of you."
      },
      {
        "text": "As a sign you've been dismissed.",
        "correct": false,
        "feedback": "It's store policy, not personal."
      },
      {
        "text": "As a reason to insist on a staffed till for everything.",
        "correct": false,
        "feedback": "For a small basket it isn't needed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-13-b",
    "normId": "MN-13-self-checkout-default-expectation",
    "category": "Money & transactions",
    "setup": "You have a trolley full of shopping and only self-checkout tills are free.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask a staff member for a staffed till.",
        "correct": true,
        "feedback": "It's fine to ask for a staffed till for a large or complicated shop."
      },
      {
        "text": "Struggle through it silently.",
        "correct": false,
        "feedback": "You don't need to. Asking is normal."
      },
      {
        "text": "Leave the shopping and go elsewhere.",
        "correct": false,
        "feedback": "That's unnecessary. A short request works."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-14-a",
    "normId": "MN-14-student-loan-automatic-deduction-payslip",
    "category": "Money & transactions",
    "setup": "A new line on your payslip says “Student loan” for the first time. You think it's an error.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Check it against your earnings, and ask the loan company if unsure.",
        "correct": true,
        "feedback": "It's an automatic system. Specific questions about the loan account go to the loan company."
      },
      {
        "text": "Assume that payroll has made a mistake, and complain to them straight away.",
        "correct": false,
        "feedback": "It's usually an automatic step, not a payroll error."
      },
      {
        "text": "Ignore the new line on the payslip for months and see what happens.",
        "correct": false,
        "feedback": "Check it now. It's easy to confirm."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-14-b",
    "normId": "MN-14-student-loan-automatic-deduction-payslip",
    "category": "Money & transactions",
    "setup": "A friend finds a new “Student loan” line on her payslip and wants to question it with her employer.",
    "prompt": "Where should she go with questions about the loan itself?",
    "options": [
      {
        "text": "To the loan company, not payroll.",
        "correct": true,
        "feedback": "Payroll applies the deduction. The loan company explains the account."
      },
      {
        "text": "To the payroll team at her employer.",
        "correct": false,
        "feedback": "Payroll only applies the rule. It can't explain the account."
      },
      {
        "text": "To the local council office in her area.",
        "correct": false,
        "feedback": "The council doesn't handle this."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-15-a",
    "normId": "MN-15-contactless-tap-default-payment-norm",
    "category": "Money & transactions",
    "setup": "At a small café a sign says “Card only”. You only brought cash.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Take it as policy and pay by card or phone if you can.",
        "correct": true,
        "feedback": "It's an operational policy, not a judgement about you."
      },
      {
        "text": "Feel that the policy is aimed at you personally as a customer.",
        "correct": false,
        "feedback": "It's applied to every customer."
      },
      {
        "text": "Argue with the staff until you are allowed to pay with cash.",
        "correct": false,
        "feedback": "The policy is fixed. Arguing won't help."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-15-b",
    "normId": "MN-15-contactless-tap-default-payment-norm",
    "category": "Money & transactions",
    "setup": "You're visiting a new restaurant and unsure whether it takes cash.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Carry a contactless card and check in advance if it matters.",
        "correct": true,
        "feedback": "Contactless is the reliable default, with cash-only or card-only varying by place."
      },
      {
        "text": "Bring only cash, since it is accepted everywhere you go.",
        "correct": false,
        "feedback": "Many places don't take it now."
      },
      {
        "text": "Bring no money at all and ask whether it's accepted afterwards.",
        "correct": false,
        "feedback": "That may leave you unable to pay."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-16-a",
    "normId": "MN-16-council-tax-direct-debit-discount-incentive",
    "category": "Money & transactions",
    "setup": "Your council tax bill offers a small discount for paying by direct debit. You suspect a catch.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Treat it as a standard incentive. It's usually safe to take.",
        "correct": true,
        "feedback": "It's offered to every resident and reduces the council's costs."
      },
      {
        "text": "Assume it's a trick with a catch buried in the small print.",
        "correct": false,
        "feedback": "It's a standard offer, not a trap."
      },
      {
        "text": "Ask the council for a bigger discount than the one offered.",
        "correct": false,
        "feedback": "The discount is fixed for everyone."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-MN-16-b",
    "normId": "MN-16-council-tax-direct-debit-discount-incentive",
    "category": "Money & transactions",
    "setup": "A friend says the council tax discount means the council will take money from her account unfairly.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "It's offered to everyone to cut admin costs, and is a standard choice.",
        "correct": true,
        "feedback": "It's uniform and low-risk, not a personalised offer."
      },
      {
        "text": "She's right, so she should avoid the direct debit discount altogether.",
        "correct": false,
        "feedback": "It's a routine arrangement that's standard."
      },
      {
        "text": "She should pay her council tax in cash only, to stay in control.",
        "correct": false,
        "feedback": "That isn't usually offered and loses the discount."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-1-b",
    "normId": "TR-1-delay-repay-compensation-claim-norm",
    "category": "Transport & commuting",
    "setup": "Your train is cancelled and the next one gets you in an hour late. Staff say nothing about compensation.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Check the operator's Delay Repay page and submit a claim.",
        "correct": true,
        "feedback": "Compensation isn't automatic. A claim with your ticket details is up to you."
      },
      {
        "text": "Assume that nothing at all can really be done after such a delay.",
        "correct": false,
        "feedback": "There is a scheme, but you have to claim."
      },
      {
        "text": "Wait for an automatic refund to appear in your bank account.",
        "correct": false,
        "feedback": "It won't. The system relies on you to submit a claim."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-2-b",
    "normId": "TR-2-quiet-coach-etiquette",
    "category": "Transport & commuting",
    "setup": "You take a friend's call in a carriage with a small “Quiet coach” sign. Several passengers stare at you.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Say sorry quietly, end the call, and take it in the vestibule.",
        "correct": true,
        "feedback": "Quiet coach rules are taken seriously, even with no staff present."
      },
      {
        "text": "Finish the call quickly, but in a much lower voice than before.",
        "correct": false,
        "feedback": "A lowered voice still breaks the expectation."
      },
      {
        "text": "Tell them off for staring at you and say it's a free country.",
        "correct": false,
        "feedback": "Their reaction is the norm being enforced."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-2-c",
    "normId": "TR-2-quiet-coach-etiquette",
    "category": "Transport & commuting",
    "setup": "On a morning train someone plays a video without headphones in the Quiet Coach.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Politely ask them to use headphones. The expectation is firm.",
        "correct": true,
        "feedback": "Quiet coach etiquette is strongly shared. A polite request is acceptable."
      },
      {
        "text": "Say nothing at all, since it really isn't worth causing a fuss.",
        "correct": false,
        "feedback": "Others would likely say something, and the norm is taken seriously."
      },
      {
        "text": "Shout at them across the carriage and tell them to be quiet at once.",
        "correct": false,
        "feedback": "That escalates. A polite ask works better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-3-b",
    "normId": "TR-3-give-up-seat-norm",
    "category": "Transport & commuting",
    "setup": "A passenger leaning on a stick boards your crowded train. You're seated, wearing headphones.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Take off your headphones and offer your seat at once.",
        "correct": true,
        "feedback": "Offering seats to those with a clear need is a firm expectation."
      },
      {
        "text": "Wait for him to ask you for your seat before you give it up.",
        "correct": false,
        "feedback": "Waiting is noticed and reflects badly."
      },
      {
        "text": "Pretend not to notice him and keep looking at your phone.",
        "correct": false,
        "feedback": "Other passengers will notice."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-3-c",
    "normId": "TR-3-give-up-seat-norm",
    "category": "Transport & commuting",
    "setup": "A woman who looks heavily pregnant stands nearby, with no badge visible. Others are looking away.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Offer your seat without waiting for her to ask.",
        "correct": true,
        "feedback": "Proactively offering is the expectation, badge or not."
      },
      {
        "text": "Ask politely whether she is pregnant before you offer.",
        "correct": false,
        "feedback": "That's awkward. Just offer."
      },
      {
        "text": "Wait until a member of staff makes an announcement.",
        "correct": false,
        "feedback": "Staff won't. It's up to passengers."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-4-b",
    "normId": "TR-4-escalator-standing-side-norm",
    "category": "Transport & commuting",
    "setup": "In a busy station you stop on the left of an escalator to check your phone. Commuters brush past.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Move to the right so they can pass.",
        "correct": true,
        "feedback": "The left is kept clear for walkers, especially at busy times."
      },
      {
        "text": "Stay, since you're entitled to stand anywhere.",
        "correct": false,
        "feedback": "The convention is near-firm in practice. People will be frustrated."
      },
      {
        "text": "Walk up the right side instead.",
        "correct": false,
        "feedback": "That puts you in the standing lane. Walk on the left."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-4-c",
    "normId": "TR-4-escalator-standing-side-norm",
    "category": "Transport & commuting",
    "setup": "Visiting a station for the first time, you see everyone standing on the right of the escalator and walking on the left.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Follow the pattern. Stand on the right and keep the left clear.",
        "correct": true,
        "feedback": "It's a widely observed convention, especially at busy times."
      },
      {
        "text": "Stand wherever there happens to be a bit of room on the escalator.",
        "correct": false,
        "feedback": "That could block people and cause irritation."
      },
      {
        "text": "Walk up on the right-hand side, since there seems to be more space.",
        "correct": false,
        "feedback": "That blocks the standing lane."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-5-b",
    "normId": "TR-5-staff-apology-on-behalf-of-delay",
    "category": "Transport & commuting",
    "setup": "A guard says, “So sorry about the delay.” You thank him warmly, assuming he'll get things moving.",
    "prompt": "What did you misread?",
    "options": [
      {
        "text": "It's standard courtesy, not personal responsibility.",
        "correct": true,
        "feedback": "The apology is scripted and doesn't mean he'll fix anything."
      },
      {
        "text": "That he personally caused the delay in the first place.",
        "correct": false,
        "feedback": "Usually the cause lies elsewhere. The apology is a script."
      },
      {
        "text": "That he can personally end the delay himself right now.",
        "correct": false,
        "feedback": "He usually can't. Ask for practical information."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-5-c",
    "normId": "TR-5-staff-apology-on-behalf-of-delay",
    "category": "Transport & commuting",
    "setup": "Station staff say, “Apologies for the delay.” You need to know whether you'll make a connection.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Accept the apology and ask for practical information.",
        "correct": true,
        "feedback": "A direct question gets the facts the apology doesn't give."
      },
      {
        "text": "Demand that he fixes it.",
        "correct": false,
        "feedback": "It's beyond his control and won't help."
      },
      {
        "text": "Take the apology as a promise that it'll be short.",
        "correct": false,
        "feedback": "The apology says nothing about length."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-5-d",
    "normId": "TR-5-staff-apology-on-behalf-of-delay",
    "category": "Transport & commuting",
    "setup": "On the platform a staff member in hi-vis apologises personally for a delay caused by a signal fault. You're annoyed and about to say something sharp.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Hold back. It's standard courtesy. Ask if she has any update.",
        "correct": true,
        "feedback": "The apology is scripted, not personal responsibility. A practical question gets you something useful."
      },
      {
        "text": "Tell her the delay is her company's fault.",
        "correct": false,
        "feedback": "She didn't cause it and can't fix it. Sharp words won't help."
      },
      {
        "text": "Thank her warmly and expect things to be fixed shortly.",
        "correct": false,
        "feedback": "A scripted apology says nothing about how soon it will be sorted."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-5-e",
    "normId": "TR-5-staff-apology-on-behalf-of-delay",
    "category": "Transport & commuting",
    "setup": "A voice on the platform apologises for a delay. A friend says it must mean it'll be a quick fix.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "It's standard wording. Check the practical update.",
        "correct": true,
        "feedback": "Scripted apologies don't signal how long the delay will be."
      },
      {
        "text": "Agree, since an apology means they're on it.",
        "correct": false,
        "feedback": "The apology is standard, whether short or long."
      },
      {
        "text": "It means a long delay.",
        "correct": false,
        "feedback": "It doesn't mean that either. Check the details."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-6-b",
    "normId": "TR-6-bus-request-stop-hand-signal",
    "category": "Transport & commuting",
    "setup": "You're at a rural bus stop and a bus approaches. You're checking your phone.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Signal with a clear raised hand as it comes into view.",
        "correct": true,
        "feedback": "It may be a request stop. The bus won't stop automatically."
      },
      {
        "text": "Just stand by the sign and wait. It will stop anyway.",
        "correct": false,
        "feedback": "Not at a request stop without a signal."
      },
      {
        "text": "Step into the road so that the driver is sure to see you.",
        "correct": false,
        "feedback": "That's dangerous. A clear hand is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-6-c",
    "normId": "TR-6-bus-request-stop-hand-signal",
    "category": "Transport & commuting",
    "setup": "A friend says buses sometimes drive past if you don't wave. You think that's absurd.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Raise a hand at any stop that might be request-only.",
        "correct": true,
        "feedback": "It's standard at request stops. The bus won't stop if nobody signals."
      },
      {
        "text": "Wave only at night, when the driver can't see you well.",
        "correct": false,
        "feedback": "It applies in daylight too."
      },
      {
        "text": "Wait for the driver to notice you standing at the stop.",
        "correct": false,
        "feedback": "Drivers don't stop unless signalled."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-7-b",
    "normId": "TR-7-tap-in-tap-out-contactless-fare-norm",
    "category": "Transport & commuting",
    "setup": "You tapped in with your contactless card on a bus, then walked out of a station through an open gate without tapping out.",
    "prompt": "What do you do now?",
    "options": [
      {
        "text": "Check your fare online and submit a correction request.",
        "correct": true,
        "feedback": "A maximum fare is automatic. It can usually be disputed with journey details."
      },
      {
        "text": "Ignore it, since the extra charge will simply vanish by itself.",
        "correct": false,
        "feedback": "It won't vanish without a request."
      },
      {
        "text": "Complain to the staff at the barrier about the extra charge.",
        "correct": false,
        "feedback": "A correction request online is the usual route."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-8-b",
    "normId": "TR-8-excuse-me-this-is-my-stop-navigating-crowd",
    "category": "Transport & commuting",
    "setup": "The train is packed, with standing passengers between you and the door. You plan to push through once the doors open.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Say “excuse me, this is my stop” a stop early.",
        "correct": true,
        "feedback": "A verbal request is expected and gives people time to move."
      },
      {
        "text": "Push gently without a word.",
        "correct": false,
        "feedback": "Silent pushing is likely to be read as rude."
      },
      {
        "text": "Wait and shout when the doors open.",
        "correct": false,
        "feedback": "That's too late. Speak earlier."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-8-c",
    "normId": "TR-8-excuse-me-this-is-my-stop-navigating-crowd",
    "category": "Transport & commuting",
    "setup": "You're at the back of a crowded bus and your stop is a minute away.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Say “sorry, excuse me” and gesture toward the door, early.",
        "correct": true,
        "feedback": "People usually move aside promptly when asked."
      },
      {
        "text": "Squeeze past everyone silently when the bus finally comes to a stop.",
        "correct": false,
        "feedback": "Silent pushing draws irritation."
      },
      {
        "text": "Ring the bell and just hope that people move out of the way.",
        "correct": false,
        "feedback": "They need to be asked. The bell isn't enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-9-a",
    "normId": "TR-9-taxi-uber-tipping-modest-optional",
    "category": "Transport & commuting",
    "setup": "At the end of a ride the app shows no tip prompt. The driver says, “Cheers, mate.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Tipping isn't expected. Round up if you wish.",
        "correct": true,
        "feedback": "Not tipping is acceptable, and a small round-up is seen as generous."
      },
      {
        "text": "Add a fifth of the fare on top as a tip for the driver.",
        "correct": false,
        "feedback": "That's far more than expected."
      },
      {
        "text": "Apologise to the driver for not leaving a tip at the end.",
        "correct": false,
        "feedback": "No apology needed. It's normal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-9-b",
    "normId": "TR-9-taxi-uber-tipping-modest-optional",
    "category": "Transport & commuting",
    "setup": "A black-cab driver hands you your change. You're unsure about tipping.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Round up if you like, or give nothing. Both are fine.",
        "correct": true,
        "feedback": "A simple round-up is a sufficient gesture."
      },
      {
        "text": "Calculate ten percent of the fare exactly, to the nearest penny.",
        "correct": false,
        "feedback": "No calculation is needed."
      },
      {
        "text": "Tip nothing and apologise to the driver for not giving more.",
        "correct": false,
        "feedback": "No apology is needed."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-9-c",
    "normId": "TR-9-taxi-uber-tipping-modest-optional",
    "category": "Transport & commuting",
    "setup": "A friend says you must tip taxi drivers a fifth of the fare.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "It isn't needed. Round up or nothing.",
        "correct": true,
        "feedback": "Tipping at all is broadly optional and a modest gesture is enough."
      },
      {
        "text": "She's right.",
        "correct": false,
        "feedback": "That's not the norm here."
      },
      {
        "text": "Tip a quarter, to be safe.",
        "correct": false,
        "feedback": "Even more than needed. A round-up is plenty."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-10-a",
    "normId": "TR-10-parking-permit-zone-strict-enforcement",
    "category": "Transport & commuting",
    "setup": "You park on a residential street near the station for a few hours. The signs are small and you didn't read them.",
    "prompt": "What's the risk?",
    "options": [
      {
        "text": "Cameras can fine you with no warning. Check signs or an app.",
        "correct": true,
        "feedback": "Enforcement is automated and doesn't depend on whether you understood."
      },
      {
        "text": "A traffic warden will warn you first before anything happens.",
        "correct": false,
        "feedback": "Cameras don't give warnings."
      },
      {
        "text": "None at all, since residential streets are free to park on.",
        "correct": false,
        "feedback": "Many have permit hours."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-10-b",
    "normId": "TR-10-parking-permit-zone-strict-enforcement",
    "category": "Transport & commuting",
    "setup": "You're parking somewhere unfamiliar for a meeting. A friend says to use a parking app.",
    "prompt": "Why?",
    "options": [
      {
        "text": "Permit zones are enforced automatically, and signs are easy to miss.",
        "correct": true,
        "feedback": "An app confirms restrictions before you leave the car."
      },
      {
        "text": "To claim a small discount on the cost of parking in that zone.",
        "correct": false,
        "feedback": "That isn't the point."
      },
      {
        "text": "Because wardens always come and ask you to move before they fine you.",
        "correct": false,
        "feedback": "They often don't. Cameras fine you after the fact."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-11-a",
    "normId": "TR-11-driving-test-indicating-precision",
    "category": "Transport & commuting",
    "setup": "Your driving instructor insists on a precise mirror, signal, manoeuvre order. Your cousin drives far more casually.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "Practise the exact sequence. The examiner checks it.",
        "correct": true,
        "feedback": "Test precision is a formal standard, separate from everyday habits."
      },
      {
        "text": "Copy your cousin's more relaxed style of driving on the road.",
        "correct": false,
        "feedback": "That might cost you faults on the test."
      },
      {
        "text": "Argue with the instructor that all that precision is unnecessary.",
        "correct": false,
        "feedback": "It's required for the test. Argue after you pass."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-12-b",
    "normId": "TR-12-road-rage-passive-restrained-norm",
    "category": "Transport & commuting",
    "setup": "A driver behind you taps the horn briefly when you hesitate at a green light.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As mild frustration. Move off and give a small wave.",
        "correct": true,
        "feedback": "A brief tap is a contained signal, not a challenge."
      },
      {
        "text": "As an aggressive challenge, so you honk back repeatedly.",
        "correct": false,
        "feedback": "It's not a challenge. Escalating makes it worse."
      },
      {
        "text": "As a threat, so you follow him.",
        "correct": false,
        "feedback": "That's an over-reaction."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-12-c",
    "normId": "TR-12-road-rage-passive-restrained-norm",
    "category": "Transport & commuting",
    "setup": "Someone pulls out in front of you and you're irritated.",
    "prompt": "How do you show it in the usual way?",
    "options": [
      {
        "text": "A brief horn tap, then move on.",
        "correct": true,
        "feedback": "A short tap shows frustration without escalating."
      },
      {
        "text": "Lean on the horn.",
        "correct": false,
        "feedback": "Sustained horn use is more aggressive than the norm."
      },
      {
        "text": "Get out and confront the driver.",
        "correct": false,
        "feedback": "That's an escalation, not the norm."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-12-d",
    "normId": "TR-12-road-rage-passive-restrained-norm",
    "category": "Transport & commuting",
    "setup": "Another driver flashes at you as you cross a junction. Your passenger says, “He's furious.”",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Take it as mild and give a small nod.",
        "correct": true,
        "feedback": "A flash is a contained, passing signal."
      },
      {
        "text": "Agree and stop to apologise.",
        "correct": false,
        "feedback": "No need. It's a mild signal."
      },
      {
        "text": "Flash back at him.",
        "correct": false,
        "feedback": "That could escalate."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-12-e",
    "normId": "TR-12-road-rage-passive-restrained-norm",
    "category": "Transport & commuting",
    "setup": "A car behind you toots once when the lights turn green.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Take it as mild frustration and move off.",
        "correct": true,
        "feedback": "A single toot is a brief signal, not a confrontation."
      },
      {
        "text": "Get out to ask what's wrong.",
        "correct": false,
        "feedback": "That's an escalation."
      },
      {
        "text": "Hold your position to teach them a lesson.",
        "correct": false,
        "feedback": "That's provocative and unnecessary."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-13-a",
    "normId": "TR-13-ulez-congestion-charge-unfamiliarity",
    "category": "Transport & commuting",
    "setup": "You plan to drive into an unfamiliar city centre. There's no booth or barrier on the way in.",
    "prompt": "What do you do before setting off?",
    "options": [
      {
        "text": "Check online for charge-zone boundaries and rules.",
        "correct": true,
        "feedback": "There's no in-the-moment warning. Charges arrive afterwards by post."
      },
      {
        "text": "Assume you'll be stopped if a charge applies.",
        "correct": false,
        "feedback": "There's no stop. The first you know is the bill."
      },
      {
        "text": "Pay later if a letter comes.",
        "correct": false,
        "feedback": "That can mean a fine instead of a charge."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-14-a",
    "normId": "TR-14-luggage-rack-space-etiquette",
    "category": "Transport & commuting",
    "setup": "On a busy train your large case is spread across two luggage slots. A passenger asks, “Would you mind moving that up a bit, so I can fit mine in too?”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Move it up straight away with a “Sorry, of course”, and don't take it personally.",
        "correct": true,
        "feedback": "It's blunt but reasonable. The ask is about shared space, not about you personally."
      },
      {
        "text": "Ignore the request, since the rack is first come, first served.",
        "correct": false,
        "feedback": "There's an unwritten expectation to keep luggage compact. A direct request to make room is normal and fair."
      },
      {
        "text": "Move it, but tell them they were rude to ask so bluntly.",
        "correct": false,
        "feedback": "Direct asks about shared space are normal. Treating it as rudeness misreads a practical request."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-14-b",
    "normId": "TR-14-luggage-rack-space-etiquette",
    "category": "Transport & commuting",
    "setup": "You need space for your case on a crowded train. Another passenger's large bag takes two slots.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Ask directly and politely: “Would you mind moving that up a bit?”",
        "correct": true,
        "feedback": "A direct, polite ask about shared space is normal."
      },
      {
        "text": "Put yours on top of the other bag without saying anything to them.",
        "correct": false,
        "feedback": "That may annoy them and cause a scene."
      },
      {
        "text": "Wait quietly until they decide to move their bag up themselves.",
        "correct": false,
        "feedback": "They may not. A direct ask works."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-14-c",
    "normId": "TR-14-luggage-rack-space-etiquette",
    "category": "Transport & commuting",
    "setup": "A passenger tells you directly, “Your suitcase is blocking the whole rack.” You feel insulted.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Move it. It's a practical ask, not an insult.",
        "correct": true,
        "feedback": "A blunt request about shared space is normal."
      },
      {
        "text": "Retort that he's being rude to ask like that.",
        "correct": false,
        "feedback": "That escalates something practical."
      },
      {
        "text": "Move it, then complain to the staff about his tone.",
        "correct": false,
        "feedback": "That's disproportionate. It was a normal ask."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-15-a",
    "normId": "TR-15-station-announcement-apology-language",
    "category": "Transport & commuting",
    "setup": "A calm announcement says your train is delayed and ends, “We are sorry for any inconvenience caused.” No new time is given.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ignore the tone; check the board or app for the new time and alternatives.",
        "correct": true,
        "feedback": "The same scripted apology is used for small delays and big cancellations. Only the practical details tell you how serious it is."
      },
      {
        "text": "Relax, since the calm tone suggests it's only a short delay.",
        "correct": false,
        "feedback": "Tone says nothing about severity. The same calm wording covers a short delay and a long cancellation."
      },
      {
        "text": "Assume the worst, since they've gone to the trouble of apologising.",
        "correct": false,
        "feedback": "The apology is standard wording, not a sign of how bad things are. The practical details carry the real information."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-15-b",
    "normId": "TR-15-station-announcement-apology-language",
    "category": "Transport & commuting",
    "setup": "On a bus the driver announces, “We apologise for any inconvenience caused by the delay.” No reason or time is given.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Ignore the tone and check the app for the real information.",
        "correct": true,
        "feedback": "The apology is formulaic. The practical details carry the real information."
      },
      {
        "text": "Relax, since the calm tone suggests it's only a short wait.",
        "correct": false,
        "feedback": "Tone says nothing about severity."
      },
      {
        "text": "Get off and walk, since an apology sounds serious.",
        "correct": false,
        "feedback": "You'd lose information. Check the details first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-15-c",
    "normId": "TR-15-station-announcement-apology-language",
    "category": "Transport & commuting",
    "setup": "The same announcement is made for a two-minute delay and for a cancellation. A friend relies on the tone to judge.",
    "prompt": "What do you tell her?",
    "options": [
      {
        "text": "Rely on the practical details, not the tone.",
        "correct": true,
        "feedback": "The formula is the same for trivial and serious disruption."
      },
      {
        "text": "Rely on the calm tone of the announcement.",
        "correct": false,
        "feedback": "The tone doesn't vary."
      },
      {
        "text": "Ignore all of the announcements from now on.",
        "correct": false,
        "feedback": "They give useful details. Just don't read severity from the apology."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-15-d",
    "normId": "TR-15-station-announcement-apology-language",
    "category": "Transport & commuting",
    "setup": "A voice says, “Sorry for any inconvenience,” and your friend starts to panic. You've heard it often.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Look for practical details. The apology says nothing about severity.",
        "correct": true,
        "feedback": "A formulaic apology doesn't show how serious things are."
      },
      {
        "text": "Join in with the panicking and start looking for a taxi instead.",
        "correct": false,
        "feedback": "No reason to. The wording is standard."
      },
      {
        "text": "Take the apology as a good sign that things are being brought under control.",
        "correct": false,
        "feedback": "It's not a sign either way."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-15-e",
    "normId": "TR-15-station-announcement-apology-language",
    "category": "Transport & commuting",
    "setup": "On the train the guard uses the standard apology and adds, “We'll update you when we can.”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Check the app for details yourself.",
        "correct": true,
        "feedback": "Standard apologies carry no information. Real updates do."
      },
      {
        "text": "Wait for the guard's update.",
        "correct": false,
        "feedback": "It may be slow. Check the app for practical details."
      },
      {
        "text": "Demand that he gives you an exact arrival time.",
        "correct": false,
        "feedback": "He may not have one. The board or app carries the real detail."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-16-a",
    "normId": "TR-16-cycling-helmet-social-expectation",
    "category": "Transport & commuting",
    "setup": "You cycle without a helmet. A friend says, “Where's your helmet?”",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As friendly concern. Wearing one avoids the friction.",
        "correct": true,
        "feedback": "It's an informal, safety-based expectation."
      },
      {
        "text": "As rude interference.",
        "correct": false,
        "feedback": "It's well-meant, not an attack."
      },
      {
        "text": "As a cue to argue that you don't need one.",
        "correct": false,
        "feedback": "Arguing won't remove the friction. It's the social norm."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-16-b",
    "normId": "TR-16-cycling-helmet-social-expectation",
    "category": "Transport & commuting",
    "setup": "Your sister keeps asking why you cycle without a helmet, and you're irritated.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Treat it as informal concern. Wearing one avoids the friction.",
        "correct": true,
        "feedback": "It's a recurring social expectation, even if not a formal one."
      },
      {
        "text": "Ignore her comments until she eventually gets bored of asking.",
        "correct": false,
        "feedback": "It likely won't stop. Wearing one solves it."
      },
      {
        "text": "Quote safety figures at her until she finally gives in and stops.",
        "correct": false,
        "feedback": "It won't win the argument."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-16-c",
    "normId": "TR-16-cycling-helmet-social-expectation",
    "category": "Transport & commuting",
    "setup": "At a cycle shop the assistant says most people buy a helmet along with a bike.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Consider buying one. It's a common expectation.",
        "correct": true,
        "feedback": "Wearing one is broadly recommended and avoids social friction."
      },
      {
        "text": "Skip it, since nobody actually requires you to wear one.",
        "correct": false,
        "feedback": "Others will comment and it's still widely recommended."
      },
      {
        "text": "Buy the most expensive one in the shop to be safe.",
        "correct": false,
        "feedback": "Any suitable helmet will do."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-17-b",
    "normId": "TR-17-first-class-carriage-informal-enforcement",
    "category": "Transport & commuting",
    "setup": "The train is crowded, there's no seat in standard, and first class is half empty. You have a standard ticket.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Stay in standard, or upgrade if you want to sit in first.",
        "correct": true,
        "feedback": "The rule is consistently enforced, however empty first looks."
      },
      {
        "text": "Sit in first class. It's empty anyway, so who will mind?",
        "correct": false,
        "feedback": "A conductor will probably ask you to move or pay."
      },
      {
        "text": "Sit in first and pretend not to hear the conductor if he asks.",
        "correct": false,
        "feedback": "That makes it worse."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-TR-17-c",
    "normId": "TR-17-first-class-carriage-informal-enforcement",
    "category": "Transport & commuting",
    "setup": "A conductor in first class asks politely, “Would you like to upgrade or move?” You're there with a standard ticket.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Move promptly. It's consistently enforced.",
        "correct": true,
        "feedback": "Politely but firmly applied, however empty the carriage is."
      },
      {
        "text": "Argue that the carriage is empty.",
        "correct": false,
        "feedback": "The rule doesn't depend on how empty it is."
      },
      {
        "text": "Say you'll move later.",
        "correct": false,
        "feedback": "He'll expect you to move now."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-1-b",
    "normId": "NB-1-bin-collection-day-strictness",
    "category": "Neighbours & community",
    "setup": "You put your recycling out in a bank holiday week and it isn't collected. There's no note.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Check the council calendar for your address, as holidays can shift days.",
        "correct": true,
        "feedback": "Collections follow a published calendar and can change around holidays."
      },
      {
        "text": "Assume that the council is deliberately targeting your household for it.",
        "correct": false,
        "feedback": "It's a standard process, not a personal one."
      },
      {
        "text": "Phone the council straight away to complain about the missed collection.",
        "correct": false,
        "feedback": "Check the calendar first. It likely explains it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-2-b",
    "normId": "NB-2-garden-hedge-boundary-etiquette",
    "category": "Neighbours & community",
    "setup": "Your neighbour says over the fence, “That fence panel's looking a bit wobbly on my side, whenever you get a chance.”",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a genuine request. Sort the panel soon.",
        "correct": true,
        "feedback": "A light mention is the expected first step. It's a real request."
      },
      {
        "text": "As a casual remark that needs no action.",
        "correct": false,
        "feedback": "“Whenever you get a chance” is polite. It still expects action."
      },
      {
        "text": "As a formal complaint to answer in writing.",
        "correct": false,
        "feedback": "It's informal. A friendly word back is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-2-c",
    "normId": "NB-2-garden-hedge-boundary-etiquette",
    "category": "Neighbours & community",
    "setup": "A neighbour says lightly, “Your tree's casting a bit of shade on our patio, no rush!”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Treat it as a real request. Talk it through and act.",
        "correct": true,
        "feedback": "A light mention is how issues are raised first. “No rush” is politeness."
      },
      {
        "text": "Take “no rush” literally and ignore it.",
        "correct": false,
        "feedback": "It's a polite request, so do something about it."
      },
      {
        "text": "Take it as a threat and prepare for a dispute.",
        "correct": false,
        "feedback": "It's friendly. A conversation can solve it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-2-d",
    "normId": "NB-2-garden-hedge-boundary-etiquette",
    "category": "Neighbours & community",
    "setup": "Your neighbour's hedge is blocking your light. You want to raise it.",
    "prompt": "How do you start?",
    "options": [
      {
        "text": "Casually and lightly in person.",
        "correct": true,
        "feedback": "A casual approach comes first. Formality is a later step."
      },
      {
        "text": "Send a formal letter right away.",
        "correct": false,
        "feedback": "That can come across as confrontational."
      },
      {
        "text": "Trim it yourself without telling anyone.",
        "correct": false,
        "feedback": "That risks a row. Talk first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-2-e",
    "normId": "NB-2-garden-hedge-boundary-etiquette",
    "category": "Neighbours & community",
    "setup": "A neighbour hands you a formal letter about your hedge without ever mentioning it before. You feel hurt.",
    "prompt": "What does it show?",
    "options": [
      {
        "text": "Skipping the casual chat feels confrontational. Reply calmly and talk to her.",
        "correct": true,
        "feedback": "The informal approach is expected first. A formal letter feels abrupt."
      },
      {
        "text": "That she has become hostile towards you and is looking for a fight.",
        "correct": false,
        "feedback": "She may simply not know the norm. Try a friendly conversation."
      },
      {
        "text": "That it can't be very serious, since nobody ever mentioned it to you earlier.",
        "correct": false,
        "feedback": "It may be serious to her. Talk."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-3-b",
    "normId": "NB-3-neighbourhood-facebook-group-norms",
    "category": "Neighbours & community",
    "setup": "You post in the neighbourhood group asking if anyone has seen a lost cat.",
    "prompt": "Does the post fit?",
    "options": [
      {
        "text": "Yes. Practical, local topics fit the group.",
        "correct": true,
        "feedback": "Lost pets and recommendations are typical for these groups."
      },
      {
        "text": "No, since people hate lost pet posts.",
        "correct": false,
        "feedback": "They're the type of post that fits."
      },
      {
        "text": "Only if you add your views on the council.",
        "correct": false,
        "feedback": "Opinion posts draw cool responses."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-3-c",
    "normId": "NB-3-neighbourhood-facebook-group-norms",
    "category": "Neighbours & community",
    "setup": "You want to complain strongly about the council's bin policy in the neighbourhood group.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Observe the tone first, and keep to practical topics.",
        "correct": true,
        "feedback": "Opinionated posts can draw pushback or removal."
      },
      {
        "text": "Post it anyway, since these groups are for sharing opinions.",
        "correct": false,
        "feedback": "They often aren't. Norms are unwritten but enforced."
      },
      {
        "text": "Post it late at night, so that fewer people will see it.",
        "correct": false,
        "feedback": "It won't help. Admins still see it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-4-b",
    "normId": "NB-4-brief-hello-not-deep-conversation-norm",
    "category": "Neighbours & community",
    "setup": "Your neighbour says “Morning!” as you pass each day and keeps walking. You'd like to be friendlier.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Keep a brief, warm greeting. Longer chats come now and then.",
        "correct": true,
        "feedback": "Brief greetings are the comfortable default."
      },
      {
        "text": "Stop her for a chat each time you pass.",
        "correct": false,
        "feedback": "That can make her increasingly brief with you."
      },
      {
        "text": "Take her brevity as coldness and stop saying hello.",
        "correct": false,
        "feedback": "That removes the friendly contact that exists."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-4-c",
    "normId": "NB-4-brief-hello-not-deep-conversation-norm",
    "category": "Neighbours & community",
    "setup": "A neighbour walks past with a quick “Alright?” You've never had a long chat.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a comfortable default, not coldness.",
        "correct": true,
        "feedback": "Brief hellos reflect general reserve."
      },
      {
        "text": "As unfriendly.",
        "correct": false,
        "feedback": "It's friendly in the usual way."
      },
      {
        "text": "As an invitation for a long chat.",
        "correct": false,
        "feedback": "He didn't stop. He's passing."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-4-d",
    "normId": "NB-4-brief-hello-not-deep-conversation-norm",
    "category": "Neighbours & community",
    "setup": "You stop a neighbour at the shops for a ten-minute chat. She keeps glancing at her watch.",
    "prompt": "What does that suggest?",
    "options": [
      {
        "text": "She prefers brief hellos. Keep it short next time.",
        "correct": true,
        "feedback": "Brevity is the comfortable norm. Longer talks happen naturally."
      },
      {
        "text": "That she's rather rude and doesn't want to be friendly.",
        "correct": false,
        "feedback": "She's showing a norm, not rudeness."
      },
      {
        "text": "That she would really like a lot more conversation.",
        "correct": false,
        "feedback": "Glancing at the watch suggests the opposite."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-4-e",
    "normId": "NB-4-brief-hello-not-deep-conversation-norm",
    "category": "Neighbours & community",
    "setup": "After your long chats, your neighbour's replies have become shorter each time.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Return to a brief, warm greeting.",
        "correct": true,
        "feedback": "Forcing long talks can push people away."
      },
      {
        "text": "Chat more to win her over.",
        "correct": false,
        "feedback": "That makes her more reserved."
      },
      {
        "text": "Ignore her from now on.",
        "correct": false,
        "feedback": "That removes the friendly contact."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-5-a",
    "normId": "NB-5-pumpkin-doorstep-halloween-signal",
    "category": "Neighbours & community",
    "setup": "It's Halloween evening and you're out trick-or-treating with your child. Some houses have lit pumpkins. Others are dark, with no decorations.",
    "prompt": "Which houses do you knock at?",
    "options": [
      {
        "text": "Only those with a pumpkin, decorations or the porch light on.",
        "correct": true,
        "feedback": "A pumpkin or decoration means “knock”. Its absence is a polite “no thank you”, and skipping those houses is expected."
      },
      {
        "text": "Every house, since you can't be sure about the dark ones.",
        "correct": false,
        "feedback": "Undecorated houses are politely saying no. Knocking anyway can make people uncomfortable."
      },
      {
        "text": "Dark houses too, if you can see lights on inside.",
        "correct": false,
        "feedback": "A light inside isn't an invitation. The signal is outside: a pumpkin, decoration or porch light."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-5-b",
    "normId": "NB-5-pumpkin-doorstep-halloween-signal",
    "category": "Neighbours & community",
    "setup": "Your street has two houses with pumpkins and the rest are dark. Your children ask why you're skipping the others.",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“Dark houses are politely saying no.”",
        "correct": true,
        "feedback": "The absence of decoration is an understood signal not to knock."
      },
      {
        "text": "“They may just not have had time. Let's knock.”",
        "correct": false,
        "feedback": "It's a deliberate signal, not an oversight."
      },
      {
        "text": "“We'll knock and leave a note.”",
        "correct": false,
        "feedback": "That ignores the signal. Skip them."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-5-c",
    "normId": "NB-5-pumpkin-doorstep-halloween-signal",
    "category": "Neighbours & community",
    "setup": "A neighbour's porch light is on and there's a pumpkin at the door.",
    "prompt": "What does it mean?",
    "options": [
      {
        "text": "They welcome trick-or-treaters. Knock.",
        "correct": true,
        "feedback": "A lit pumpkin or light is an understood invitation."
      },
      {
        "text": "It's just decoration, so skip it.",
        "correct": false,
        "feedback": "It's the signal that visitors are welcome."
      },
      {
        "text": "They want you to leave sweets on the step.",
        "correct": false,
        "feedback": "No. They'll have sweets ready for visitors."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-5-d",
    "normId": "NB-5-pumpkin-doorstep-halloween-signal",
    "category": "Neighbours & community",
    "setup": "A house has no decorations, but there's a car outside and lights on in the front room.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Skip it. Lights inside aren't an invitation.",
        "correct": true,
        "feedback": "The signal is outside: a pumpkin, decoration or porch light."
      },
      {
        "text": "Knock, since someone's clearly home.",
        "correct": false,
        "feedback": "Being home isn't consent. They've signalled no."
      },
      {
        "text": "Peek through the window to check.",
        "correct": false,
        "feedback": "That's intrusive and unnecessary."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-5-e",
    "normId": "NB-5-pumpkin-doorstep-halloween-signal",
    "category": "Neighbours & community",
    "setup": "You've moved to a new street and it's Halloween. You want to join in.",
    "prompt": "How do you decide whom to visit?",
    "options": [
      {
        "text": "Visit houses with pumpkins or decorations. Skip the rest.",
        "correct": true,
        "feedback": "Skipping undecorated houses is the expected default."
      },
      {
        "text": "Visit every house on the street, just in case they're happy to open.",
        "correct": false,
        "feedback": "That can cause awkward moments for people who've said no."
      },
      {
        "text": "Text each of your neighbours beforehand to ask if they're taking part.",
        "correct": false,
        "feedback": "It's not needed. The signals are visible."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-6-a",
    "normId": "NB-6-neighbour-christmas-card-exchange-norm",
    "category": "Neighbours & community",
    "setup": "A neighbour you barely know posts a Christmas card through your door. You've nothing to give them.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Post a simple card back. A modest card is the whole gesture.",
        "correct": true,
        "feedback": "It's a light goodwill gesture, not an obligation. A simple card in return is complete."
      },
      {
        "text": "Buy them a gift to match their kindness.",
        "correct": false,
        "feedback": "A gift would outweigh the card and could make them uncomfortable. No gift is expected."
      },
      {
        "text": "Do nothing, since a card needs no reply.",
        "correct": false,
        "feedback": "A card back is the usual response, and ignoring it can read as cold. It needn't cost you much."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-6-b",
    "normId": "NB-6-neighbour-christmas-card-exchange-norm",
    "category": "Neighbours & community",
    "setup": "A neighbour hands you a Christmas card at the door and goes straight back in.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Post a card back later. That's enough.",
        "correct": true,
        "feedback": "It's a light gesture and a card in return is a complete reply."
      },
      {
        "text": "Invite her in for dinner to repay it.",
        "correct": false,
        "feedback": "That's far beyond a card. It might make her uncomfortable."
      },
      {
        "text": "Buy her a hamper.",
        "correct": false,
        "feedback": "A gift is more than expected."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-6-c",
    "normId": "NB-6-neighbour-christmas-card-exchange-norm",
    "category": "Neighbours & community",
    "setup": "The neighbours across the road send you a card each year. You've never replied.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Send a simple card in return.",
        "correct": true,
        "feedback": "A modest card is the complete expected gesture."
      },
      {
        "text": "It isn't needed, since it's only a card.",
        "correct": false,
        "feedback": "A return card is the usual response."
      },
      {
        "text": "Give each of them a gift.",
        "correct": false,
        "feedback": "A gift outweighs the card. Keep it simple."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-7-b",
    "normId": "NB-7-borrowing-small-items-from-neighbours",
    "category": "Neighbours & community",
    "setup": "A neighbour lent you a ladder last weekend, with no return date. You still have it.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Return it within a few days, with thanks.",
        "correct": true,
        "feedback": "Even without a date, a late return is noticed."
      },
      {
        "text": "Keep the ladder until they ask you for it back.",
        "correct": false,
        "feedback": "That risks quiet awkwardness."
      },
      {
        "text": "Buy them a brand new ladder to say thank you.",
        "correct": false,
        "feedback": "That's more than needed. Return it with thanks."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-7-c",
    "normId": "NB-7-borrowing-small-items-from-neighbours",
    "category": "Neighbours & community",
    "setup": "You borrowed a drill and used it for a job. No return date was mentioned.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Return it promptly with a thank-you, such as a card.",
        "correct": true,
        "feedback": "Small loans are expected back quickly, with a gesture of thanks."
      },
      {
        "text": "Wait for your neighbour to ask you for the drill back.",
        "correct": false,
        "feedback": "That can seem careless."
      },
      {
        "text": "Keep it for as long as you like, since no date was said.",
        "correct": false,
        "feedback": "A missing date doesn't mean no expectation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-8-b",
    "normId": "NB-8-parking-outside-someones-house-etiquette",
    "category": "Neighbours & community",
    "setup": "A neighbour smiles as you park outside her house: “Oh, you've taken our spot again!”",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a hint with a point. Park elsewhere most days.",
        "correct": true,
        "feedback": "There's no formal right, but there's a strong social expectation."
      },
      {
        "text": "As a friendly joke that you can safely ignore.",
        "correct": false,
        "feedback": "It's a polite hint with a real point."
      },
      {
        "text": "As a reason to park there more, to show it's public.",
        "correct": false,
        "feedback": "That worsens the friction."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-8-c",
    "normId": "NB-8-parking-outside-someones-house-etiquette",
    "category": "Neighbours & community",
    "setup": "You always park outside the same house because it's closest to your door. The owner's smile has cooled.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Park elsewhere when you can.",
        "correct": true,
        "feedback": "Avoiding a specific neighbour's frontage prevents quiet friction."
      },
      {
        "text": "Keep parking, since it's a public road.",
        "correct": false,
        "feedback": "That may be true, but it breeds resentment."
      },
      {
        "text": "Ask her to move her car.",
        "correct": false,
        "feedback": "That worsens things."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-8-d",
    "normId": "NB-8-parking-outside-someones-house-etiquette",
    "category": "Neighbours & community",
    "setup": "A neighbour sighs, “Oh, you're parked outside ours again.”",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Take it as a hint and vary where you park.",
        "correct": true,
        "feedback": "A light, pointed comment is a real signal."
      },
      {
        "text": "Tell her that it's a public road and that anyone can park there.",
        "correct": false,
        "feedback": "That escalates a minor, friendly hint."
      },
      {
        "text": "Ignore the comment completely and keep parking there.",
        "correct": false,
        "feedback": "She'll probably feel unheard."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-8-e",
    "normId": "NB-8-parking-outside-someones-house-etiquette",
    "category": "Neighbours & community",
    "setup": "A new neighbour asks politely if you could “leave a bit of room” outside her house.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Treat it as a request and avoid parking there.",
        "correct": true,
        "feedback": "It's a polite way of asking you to avoid it."
      },
      {
        "text": "Ignore it, since there's no formal rule.",
        "correct": false,
        "feedback": "The social expectation is real, though."
      },
      {
        "text": "Park there to test her reaction.",
        "correct": false,
        "feedback": "That's needlessly provocative."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-9-b",
    "normId": "NB-9-community-bake-sale-fundraiser-participation",
    "category": "Neighbours & community",
    "setup": "A school note calls the fundraiser “optional” but lists what to bring. You're busy.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Join in a small way, such as buying a cake.",
        "correct": true,
        "feedback": "Light participation is the real expectation, even when called optional."
      },
      {
        "text": "Skip it, since it's optional.",
        "correct": false,
        "feedback": "Skipping every time is quietly noticed."
      },
      {
        "text": "Bake three cakes to make up for past absences.",
        "correct": false,
        "feedback": "You don't need to overdo it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-9-c",
    "normId": "NB-9-community-bake-sale-fundraiser-participation",
    "category": "Neighbours & community",
    "setup": "You skip every optional school event. A parent comments, “We never see you at these.”",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Take part lightly next time, such as buying something.",
        "correct": true,
        "feedback": "A small contribution shows you're involved."
      },
      {
        "text": "Take it as rude and avoid her from now on at the school gate.",
        "correct": false,
        "feedback": "It's a mild nudge, not an attack."
      },
      {
        "text": "Explain to her that the events are only optional anyway.",
        "correct": false,
        "feedback": "That doesn't address the unspoken expectation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-10-b",
    "normId": "NB-10-antisocial-behaviour-council-line-reporting",
    "category": "Neighbours & community",
    "setup": "A neighbour's loud parties continue after two polite chats. A friend says reporting it to the council is too extreme.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Report it to the council's non-emergency line. That's normal.",
        "correct": true,
        "feedback": "After polite attempts, formal reporting is normal and proportionate."
      },
      {
        "text": "Call the emergency line and ask for the police to come round.",
        "correct": false,
        "feedback": "That's for emergencies, not noise."
      },
      {
        "text": "Go and confront them angrily at their front door at midnight.",
        "correct": false,
        "feedback": "That's likely to escalate."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-11-a",
    "normId": "NB-11-street-party-organizing-norm",
    "category": "Neighbours & community",
    "setup": "You want to organise a street party and you're ready to book a band.",
    "prompt": "What do you do first?",
    "options": [
      {
        "text": "Check the council's road-closure process and sound out neighbours.",
        "correct": true,
        "feedback": "Both the formal process and the informal check-in are expected."
      },
      {
        "text": "Book the band first, and tell the neighbours about it later on.",
        "correct": false,
        "feedback": "That skips the neighbourhood buy-in."
      },
      {
        "text": "Print posters, then put out some cones to close the road yourself.",
        "correct": false,
        "feedback": "A road closure needs the council process."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-12-a",
    "normId": "NB-12-dog-mess-cleanup-strict-norm",
    "category": "Neighbours & community",
    "setup": "In a quiet, empty park your dog does his business. Nobody's around.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Clean it up immediately.",
        "correct": true,
        "feedback": "It's a firm expectation, however empty the park looks."
      },
      {
        "text": "Leave it, since nobody is watching.",
        "correct": false,
        "feedback": "The expectation doesn't depend on being seen."
      },
      {
        "text": "Kick it into the bushes.",
        "correct": false,
        "feedback": "That isn't cleaning up. Use a bag."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-12-b",
    "normId": "NB-12-dog-mess-cleanup-strict-norm",
    "category": "Neighbours & community",
    "setup": "A passer-by says sharply, “You've forgotten the bag, haven't you?”",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Apologise and pick it up.",
        "correct": true,
        "feedback": "A direct comment reflects a firm shared expectation."
      },
      {
        "text": "Say it's natural and leave it.",
        "correct": false,
        "feedback": "That doesn't fit the norm."
      },
      {
        "text": "Walk away.",
        "correct": false,
        "feedback": "That makes it worse."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-12-c",
    "normId": "NB-12-dog-mess-cleanup-strict-norm",
    "category": "Neighbours & community",
    "setup": "You walk a friend's dog and have no bags in your pocket.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Always carry bags before you leave.",
        "correct": true,
        "feedback": "Picking up is a firm expectation, so be prepared."
      },
      {
        "text": "Use leaves or hope for the best.",
        "correct": false,
        "feedback": "That doesn't meet the expectation."
      },
      {
        "text": "Hope nobody sees.",
        "correct": false,
        "feedback": "It's not about being seen. It's about cleaning up."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-14-b",
    "normId": "NB-14-loud-music-unwritten-curfew-hours",
    "category": "Neighbours & community",
    "setup": "It's nearly midnight on a Tuesday. You have friends over, and a text arrives from next door: “Sorry to bother you, could you turn it down a bit?”",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Turn it down at once and apologise.",
        "correct": true,
        "feedback": "The unwritten curfew is widely observed. A polite text is a real request."
      },
      {
        "text": "Ask what rule allows them to complain.",
        "correct": false,
        "feedback": "There's no written rule, but the norm is strong."
      },
      {
        "text": "Turn it down only slightly.",
        "correct": false,
        "feedback": "It doesn't meet the request."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-14-c",
    "normId": "NB-14-loud-music-unwritten-curfew-hours",
    "category": "Neighbours & community",
    "setup": "At eleven-fifteen on a weeknight you play music at a normal volume. You've never heard a rule.",
    "prompt": "What's the norm?",
    "options": [
      {
        "text": "Keep noise down by around eleven on weeknights.",
        "correct": true,
        "feedback": "The unwritten curfew is widely observed."
      },
      {
        "text": "Until midnight unless someone complains.",
        "correct": false,
        "feedback": "Complaints often come before you hear them."
      },
      {
        "text": "Any time, so long as you aren't shouting.",
        "correct": false,
        "feedback": "Late-night noise causes friction even without a rule."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-15-a",
    "normId": "NB-15-new-neighbour-welcome-card-norm",
    "category": "Neighbours & community",
    "setup": "A card in your letterbox says, “Welcome to the street! Call me if you need anything.” Nobody has visited.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As a complete, friendly welcome. A thank-you card in return is nice.",
        "correct": true,
        "feedback": "A modest card is a sufficient welcome by itself."
      },
      {
        "text": "As a prelude to a visit that you should now wait for at home.",
        "correct": false,
        "feedback": "The card is the whole gesture."
      },
      {
        "text": "As a cue to knock on her door straight away and chat for an hour.",
        "correct": false,
        "feedback": "That's more than expected."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-15-b",
    "normId": "NB-15-new-neighbour-welcome-card-norm",
    "category": "Neighbours & community",
    "setup": "You've just moved in. A neighbour leaves a card with a phone number. You're unsure whether to call.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As a friendly, sufficient welcome.",
        "correct": true,
        "feedback": "The card is a complete gesture, with no obligation to follow up."
      },
      {
        "text": "As a request to invite her in.",
        "correct": false,
        "feedback": "It doesn't ask for a visit."
      },
      {
        "text": "As a formal rule of the street.",
        "correct": false,
        "feedback": "It's just a friendly note."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-15-c",
    "normId": "NB-15-new-neighbour-welcome-card-norm",
    "category": "Neighbours & community",
    "setup": "A new family moves in next door. You'd like to welcome them.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Post a short handwritten card.",
        "correct": true,
        "feedback": "A short card is sufficient and appreciated."
      },
      {
        "text": "Bring them a three-course dinner.",
        "correct": false,
        "feedback": "That's far more than expected and may feel overwhelming."
      },
      {
        "text": "Wait to see if they say hello first.",
        "correct": false,
        "feedback": "A card makes it easy for them."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-16-a",
    "normId": "NB-16-communal-garden-shared-space-responsibility",
    "category": "Neighbours & community",
    "setup": "Your block has a communal garden with no rota. Others weed it now and then.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Pitch in occasionally.",
        "correct": true,
        "feedback": "The loose system still expects some contribution."
      },
      {
        "text": "Skip it, since there's no rota.",
        "correct": false,
        "feedback": "People notice who never helps."
      },
      {
        "text": "Do all of it yourself.",
        "correct": false,
        "feedback": "That's not needed. Occasional help is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-16-b",
    "normId": "NB-16-communal-garden-shared-space-responsibility",
    "category": "Neighbours & community",
    "setup": "Residents quietly grumble that one flat never helps with the communal garden.",
    "prompt": "How is that seen?",
    "options": [
      {
        "text": "Noticed, even without a formal rota.",
        "correct": true,
        "feedback": "Never contributing is noticed in loose arrangements."
      },
      {
        "text": "Nobody cares.",
        "correct": false,
        "feedback": "They do, even if it's unspoken."
      },
      {
        "text": "As a breach of a formal rule.",
        "correct": false,
        "feedback": "There's no rule. It's a social expectation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-NB-16-c",
    "normId": "NB-16-communal-garden-shared-space-responsibility",
    "category": "Neighbours & community",
    "setup": "The informal communal-garden system isn't working, and the garden is untidy.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Suggest a simple shared rota directly.",
        "correct": true,
        "feedback": "A shared rota is a reasonable next step for a loose system."
      },
      {
        "text": "Complain to the landlord.",
        "correct": false,
        "feedback": "A direct suggestion between residents works better."
      },
      {
        "text": "Do nothing and wait for it to improve.",
        "correct": false,
        "feedback": "It's unlikely to improve by itself."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-1-b",
    "normId": "CS-1-no-worries-service-staff-filler",
    "category": "Customer service & retail",
    "setup": "You accidentally break a glass in a café and apologise. The assistant says, “No worries!” and walks off.",
    "prompt": "What does “no worries” tell you?",
    "options": [
      {
        "text": "Nothing specific. It's a reflex. Check directly if it's sorted.",
        "correct": true,
        "feedback": "It's a light social filler, not a confirmation that anything is resolved."
      },
      {
        "text": "That the glass will be written off and doesn't need to be paid for.",
        "correct": false,
        "feedback": "The phrase doesn't address the issue itself."
      },
      {
        "text": "That she's actually quite annoyed with you but is hiding it.",
        "correct": false,
        "feedback": "It's a polite default, not a mood signal."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-1-c",
    "normId": "CS-1-no-worries-service-staff-filler",
    "category": "Customer service & retail",
    "setup": "You ask a shop to hold an item for you until Friday. The assistant says, “No worries!” On Friday it's gone.",
    "prompt": "What should you have done?",
    "options": [
      {
        "text": "Checked: “So just to confirm, you'll hold it until Friday?”",
        "correct": true,
        "feedback": "“No worries” is reflexive, not a promise. A direct check settles it."
      },
      {
        "text": "Trusted the “no worries” as if it were a firm promise to hold it.",
        "correct": false,
        "feedback": "It's a filler phrase. It doesn't confirm anything specific."
      },
      {
        "text": "Paid for the item in full on the spot, to be completely sure of it.",
        "correct": false,
        "feedback": "That would work, but you can simply ask for confirmation."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-1-d",
    "normId": "CS-1-no-worries-service-staff-filler",
    "category": "Customer service & retail",
    "setup": "You hand a cashier the wrong coupon and say sorry. She says, “No worries.” At the till, the discount isn't applied.",
    "prompt": "How do you read the phrase?",
    "options": [
      {
        "text": "As filler, not confirmation that it's sorted.",
        "correct": true,
        "feedback": "It's a reflexive politeness phrase, not an answer to your specific issue."
      },
      {
        "text": "As a clear promise that the coupon would be sorted at the till.",
        "correct": false,
        "feedback": "She wasn't promising anything, just being polite."
      },
      {
        "text": "As a sign that she is secretly irritated with you.",
        "correct": false,
        "feedback": "It's a courtesy, not a mood."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-1-e",
    "normId": "CS-1-no-worries-service-staff-filler",
    "category": "Customer service & retail",
    "setup": "You ask a call-centre agent to cancel a subscription. He says, “No worries!” and ends the call.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask directly: “Just to check, is it cancelled?”",
        "correct": true,
        "feedback": "A reflexive “no worries” isn't confirmation. A direct question gets one."
      },
      {
        "text": "Assume it's cancelled.",
        "correct": false,
        "feedback": "It may not be. “No worries” doesn't confirm actions."
      },
      {
        "text": "Cancel again the next day just in case.",
        "correct": false,
        "feedback": "That can create confusion. Ask for confirmation first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-2-b",
    "normId": "CS-2-returns-policy-receipt-strictness",
    "category": "Customer service & retail",
    "setup": "You bought a gift that doesn't fit, and the giver kept the receipt. The assistant says she needs proof of purchase, and seems sympathetic but can't make an exception.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Ask the giver for the receipt, and check the returns policy before buying next time.",
        "correct": true,
        "feedback": "Staff have little discretion, even when sympathetic. The receipt is what counts."
      },
      {
        "text": "Ask for the manager to waive the rule, since she was sympathetic about it.",
        "correct": false,
        "feedback": "Sympathy isn't discretion. A manager would apply the same policy."
      },
      {
        "text": "Argue until she gives in and takes it back anyway.",
        "correct": false,
        "feedback": "She can't change it, so arguing only adds friction."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-3-b",
    "normId": "CS-3-tech-support-script-troubleshooting-steps",
    "category": "Customer service & retail",
    "setup": "A mobile support agent asks you to check the SIM tray and update your software. You work in IT.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Answer patiently. It's the route to escalation.",
        "correct": true,
        "feedback": "Standard steps often have to be completed before escalating."
      },
      {
        "text": "Insist on speaking to a specialist straight away.",
        "correct": false,
        "feedback": "The script usually has to be completed first."
      },
      {
        "text": "Hang up and call again for a different agent.",
        "correct": false,
        "feedback": "You'd likely face the same script again."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-4-b",
    "normId": "CS-4-formal-written-complaint-better-outcome",
    "category": "Customer service & retail",
    "setup": "A shop manager apologised on the phone for a faulty product, but nothing happened. The website lists a complaints email.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Email the complaints address with what happened and what you want.",
        "correct": true,
        "feedback": "Written complaints get logged and answered properly."
      },
      {
        "text": "Phone the shop again and make your point a good deal more loudly.",
        "correct": false,
        "feedback": "A forceful call is easier to minimise than a written complaint."
      },
      {
        "text": "Post a long rant about the shop and its manager on social media.",
        "correct": false,
        "feedback": "That rarely brings a proper reply."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-4-c",
    "normId": "CS-4-formal-written-complaint-better-outcome",
    "category": "Customer service & retail",
    "setup": "You're deciding how to complain about a faulty product that matters to you.",
    "prompt": "What works better?",
    "options": [
      {
        "text": "A calm, written complaint to the complaints address.",
        "correct": true,
        "feedback": "Written complaints are tracked and tend to get a substantive reply."
      },
      {
        "text": "A forceful phone call to the main customer service line.",
        "correct": false,
        "feedback": "Phone complaints are easier to minimise."
      },
      {
        "text": "A short, angry tweet tagging the company's account and manager.",
        "correct": false,
        "feedback": "It may get attention, but isn't a proper complaint."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-5-a",
    "normId": "CS-5-take-a-ticket-queue-system-norm",
    "category": "Customer service & retail",
    "setup": "In a pharmacy there's no line, just a cluster of people near the counter. By the door are a small ticket machine and a screen showing numbers.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Take a ticket from the machine and wait for your number.",
        "correct": true,
        "feedback": "With a ticket system, standing near the counter doesn't put you in the real queue. Look for the machine when there's no obvious line."
      },
      {
        "text": "Ask who was last and stand behind them.",
        "correct": false,
        "feedback": "The cluster isn't the queue. People who arrive later with a ticket will be served before you."
      },
      {
        "text": "Wait near the counter until a member of staff calls you.",
        "correct": false,
        "feedback": "Staff serve by number, not by who they've noticed. Without a ticket you could wait a long time."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-5-b",
    "normId": "CS-5-take-a-ticket-queue-system-norm",
    "category": "Customer service & retail",
    "setup": "At a council office there's no line. You stood near a desk for ten minutes while others were called. A ticket machine sits by the door.",
    "prompt": "What went wrong?",
    "options": [
      {
        "text": "You needed a ticket. Look for the machine on entry.",
        "correct": true,
        "feedback": "Without a ticket you aren't in the real queue."
      },
      {
        "text": "The staff ignored you on purpose.",
        "correct": false,
        "feedback": "It's a system, not a snub."
      },
      {
        "text": "You should have shouted to get attention.",
        "correct": false,
        "feedback": "That wouldn't help. Take a ticket."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-6-a",
    "normId": "CS-6-self-service-kiosk-default-norm",
    "category": "Customer service & retail",
    "setup": "At a fast-food restaurant an employee waves you toward a row of self-service screens.",
    "prompt": "How do you take it?",
    "options": [
      {
        "text": "As standard. Use it for a simple order.",
        "correct": true,
        "feedback": "It's the usual setup, not an assumption about you."
      },
      {
        "text": "As being brushed off.",
        "correct": false,
        "feedback": "It's the default for most customers."
      },
      {
        "text": "As a cue to refuse and leave.",
        "correct": false,
        "feedback": "That's unnecessary. It's the normal system."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-6-b",
    "normId": "CS-6-self-service-kiosk-default-norm",
    "category": "Customer service & retail",
    "setup": "You have an allergy and a complicated order. The only way to order is a self-service kiosk by the door.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Ask a staff member directly and confidently.",
        "correct": true,
        "feedback": "Complex or sensitive needs are better handled in person. Asking is normal."
      },
      {
        "text": "Guess your way through the screen.",
        "correct": false,
        "feedback": "It could cause a mistake. Ask staff."
      },
      {
        "text": "Leave without ordering.",
        "correct": false,
        "feedback": "Staff will help if you ask."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-7-b",
    "normId": "CS-7-out-of-stock-apology-genuine-scarcity",
    "category": "Customer service & retail",
    "setup": "A shop assistant checks her screen: “Sorry, we're out of that size.”",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "Ask if another branch has it or it can be ordered in.",
        "correct": true,
        "feedback": "A checked stock answer isn't a brush-off. Staff will usually offer options."
      },
      {
        "text": "Say thanks and leave to try another shop on the high street.",
        "correct": false,
        "feedback": "You'd miss the chance to get it another way."
      },
      {
        "text": "Insist that she checks the stock system again, just to be sure.",
        "correct": false,
        "feedback": "She already checked. Ask about alternatives instead."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-7-c",
    "normId": "CS-7-out-of-stock-apology-genuine-scarcity",
    "category": "Customer service & retail",
    "setup": "A bookshop clerk checks and says, “Sorry, not in stock.”",
    "prompt": "What do you say?",
    "options": [
      {
        "text": "“Could you order it in?”",
        "correct": true,
        "feedback": "The stock answer is accurate, but ordering is often possible."
      },
      {
        "text": "Assume the answer is final.",
        "correct": false,
        "feedback": "You may be able to order it."
      },
      {
        "text": "Ask whether she's sure she looked properly.",
        "correct": false,
        "feedback": "She did. A better question is about ordering."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-7-d",
    "normId": "CS-7-out-of-stock-apology-genuine-scarcity",
    "category": "Customer service & retail",
    "setup": "In a DIY store the shelf is empty. The assistant checks a handheld device and apologises.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Ask about other branches or ordering.",
        "correct": true,
        "feedback": "It's an accurate stock check. Alternatives are usually available."
      },
      {
        "text": "Walk out.",
        "correct": false,
        "feedback": "You could miss another route to getting it."
      },
      {
        "text": "Ask to speak to the manager.",
        "correct": false,
        "feedback": "The manager can't create stock. Ask about options."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-7-e",
    "normId": "CS-7-out-of-stock-apology-genuine-scarcity",
    "category": "Customer service & retail",
    "setup": "A pharmacy assistant says an item is out of stock. You need it by Friday.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask if another branch has it, or when it's due.",
        "correct": true,
        "feedback": "A specific question may find an alternative."
      },
      {
        "text": "Give up and go to a different pharmacy instead.",
        "correct": false,
        "feedback": "She may be able to help."
      },
      {
        "text": "Complain to the assistant about the stock levels.",
        "correct": false,
        "feedback": "That won't help you get it by Friday."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-8-a",
    "normId": "CS-8-boxing-day-seasonal-sale-norm",
    "category": "Customer service & retail",
    "setup": "A scarf you want costs full price now. Boxing Day is two weeks away.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Ask: “Will this be in the Boxing Day sale?”",
        "correct": true,
        "feedback": "It's a routine question staff hear every year."
      },
      {
        "text": "Buy it now, since asking would be pushy.",
        "correct": false,
        "feedback": "It isn't pushy. It's expected."
      },
      {
        "text": "Wait without asking.",
        "correct": false,
        "feedback": "You could just ask and decide."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-8-b",
    "normId": "CS-8-boxing-day-seasonal-sale-norm",
    "category": "Customer service & retail",
    "setup": "You see a “January Sale” sign each year but feel awkward asking staff about this year's dates.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Ask. It's a routine question.",
        "correct": true,
        "feedback": "Staff are used to this exact question."
      },
      {
        "text": "Check by email only.",
        "correct": false,
        "feedback": "Asking in store is quicker and normal."
      },
      {
        "text": "Never ask, and guess.",
        "correct": false,
        "feedback": "Guessing risks missing it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-9-a",
    "normId": "CS-9-asking-staff-for-help-normal-not-bothersome",
    "category": "Customer service & retail",
    "setup": "You can't find rice in a big supermarket. A staff member in a branded T-shirt is restocking.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Ask her confidently.",
        "correct": true,
        "feedback": "Staff are there for exactly this kind of question."
      },
      {
        "text": "Search for twenty minutes rather than interrupt.",
        "correct": false,
        "feedback": "That wastes your time. She's available for this."
      },
      {
        "text": "Wait for her to look at you.",
        "correct": false,
        "feedback": "She may not. Just ask."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-9-b",
    "normId": "CS-9-asking-staff-for-help-normal-not-bothersome",
    "category": "Customer service & retail",
    "setup": "You hesitate to ask a shop assistant for help, worried about bothering him.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Approach him. It's expected.",
        "correct": true,
        "feedback": "Helping customers is routine and welcome."
      },
      {
        "text": "Leave without asking.",
        "correct": false,
        "feedback": "You'd miss what you came for."
      },
      {
        "text": "Wait for him to be free for a long time.",
        "correct": false,
        "feedback": "He's available. Just ask."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-9-c",
    "normId": "CS-9-asking-staff-for-help-normal-not-bothersome",
    "category": "Customer service & retail",
    "setup": "A DIY store assistant with a name badge is chatting to a colleague. You need a part.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "Politely ask. Staff are there for it.",
        "correct": true,
        "feedback": "It's a normal, welcomed interaction."
      },
      {
        "text": "Wait until they finish a long chat.",
        "correct": false,
        "feedback": "No need. A polite interruption is fine."
      },
      {
        "text": "Ask another customer instead.",
        "correct": false,
        "feedback": "Staff will know better."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-10-b",
    "normId": "CS-10-walk-in-no-reservation-restaurant-wait-norm",
    "category": "Customer service & retail",
    "setup": "You turn up at a popular restaurant on a Saturday with no booking. The host puts your name down and quotes a wait.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As the venue's walk-in system. Check beforehand next time.",
        "correct": true,
        "feedback": "It's a deliberate model, not disorganisation."
      },
      {
        "text": "As a sign that the whole restaurant is badly disorganised.",
        "correct": false,
        "feedback": "It's the standard approach for busy venues."
      },
      {
        "text": "As a polite way of telling you they won't seat your party.",
        "correct": false,
        "feedback": "They'll call you when a table is ready."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-11-b",
    "normId": "CS-11-sending-food-back-polite-low-key",
    "category": "Customer service & retail",
    "setup": "Your steak arrives more overcooked than you asked for. You dislike making a fuss.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Quietly ask the server: “Sorry, this is overdone. Could it be redone?”",
        "correct": true,
        "feedback": "A quiet, specific, polite request is normal and effective."
      },
      {
        "text": "Say nothing about it and just eat the steak as it comes, to avoid a scene.",
        "correct": false,
        "feedback": "A calm complaint isn't a fuss, and gets it fixed."
      },
      {
        "text": "Complain loudly across the room so that everyone knows about it.",
        "correct": false,
        "feedback": "You don't need drama. A quiet request works."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-11-c",
    "normId": "CS-11-sending-food-back-polite-low-key",
    "category": "Customer service & retail",
    "setup": "Your soup arrives lukewarm.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Make a quiet, specific request to the server.",
        "correct": true,
        "feedback": "A polite, specific complaint is normal and gets results."
      },
      {
        "text": "Eat it as it is and leave no tip as a protest.",
        "correct": false,
        "feedback": "The restaurant never learns what went wrong."
      },
      {
        "text": "Write a harsh online review about the restaurant.",
        "correct": false,
        "feedback": "That skips the simplest step. Ask first."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-12-b",
    "normId": "CS-12-apologising-while-complaining-norm",
    "category": "Customer service & retail",
    "setup": "A customer says, “Sorry to bother you, but I think there might be a small mistake on my bill.” The bill is fifty pounds too high.",
    "prompt": "How seriously do you take it?",
    "options": [
      {
        "text": "Fully. The apology is only tone.",
        "correct": true,
        "feedback": "Apologetic framing is a politeness convention, not a sign it's minor."
      },
      {
        "text": "Lightly, since she apologised.",
        "correct": false,
        "feedback": "The size of the problem doesn't match the tone."
      },
      {
        "text": "As a joke.",
        "correct": false,
        "feedback": "It's a real complaint."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-12-c",
    "normId": "CS-12-apologising-while-complaining-norm",
    "category": "Customer service & retail",
    "setup": "A diner says, “Sorry to be a pain, but my food seems to be missing something.” It's his whole main course.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Take it at face value and sort it quickly.",
        "correct": true,
        "feedback": "The apology is about tone. The problem is real."
      },
      {
        "text": "Treat it as minor, since he was so apologetic.",
        "correct": false,
        "feedback": "It's not minor, however polite the wording."
      },
      {
        "text": "Ask him whether he is sure that something is missing.",
        "correct": false,
        "feedback": "That questions a polite complaint. Act on it."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-12-d",
    "normId": "CS-12-apologising-while-complaining-norm",
    "category": "Customer service & retail",
    "setup": "An email begins, “Apologies for the fuss, but...” and reports a safety problem with a product.",
    "prompt": "How do you treat it?",
    "options": [
      {
        "text": "As serious. The apology is only tone.",
        "correct": true,
        "feedback": "Soft wording doesn't reduce the seriousness."
      },
      {
        "text": "Reply with a routine message.",
        "correct": false,
        "feedback": "It deserves a proper, prompt response."
      },
      {
        "text": "Ignore it as a minor note.",
        "correct": false,
        "feedback": "The opening apology doesn't make it minor."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-12-e",
    "normId": "CS-12-apologising-while-complaining-norm",
    "category": "Customer service & retail",
    "setup": "A customer says, “Sorry to make a fuss, but I think I've been charged twice.”",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Check the charges at once.",
        "correct": true,
        "feedback": "It's a polite way to raise a legitimate issue."
      },
      {
        "text": "Reassure her it's probably fine.",
        "correct": false,
        "feedback": "That dismisses a possible genuine problem."
      },
      {
        "text": "Tell her not to worry about it.",
        "correct": false,
        "feedback": "Her apology doesn't mean she's unconcerned."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-13-b",
    "normId": "CS-13-is-everything-alright-scripted-checkin",
    "category": "Customer service & retail",
    "setup": "A waiter asks, “Is everything alright?” Your soup is cold, but you reply, “Yeah, it's fine...” hesitantly.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "State it clearly: “Sorry, my soup has gone cold.”",
        "correct": true,
        "feedback": "It's a scripted question. A real issue has to be stated plainly."
      },
      {
        "text": "Say “fine” and hope he picks up on the hesitation.",
        "correct": false,
        "feedback": "He'll move on. The script doesn't probe."
      },
      {
        "text": "Pause for a long time and sigh.",
        "correct": false,
        "feedback": "Tone alone won't register."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-13-c",
    "normId": "CS-13-is-everything-alright-scripted-checkin",
    "category": "Customer service & retail",
    "setup": "A server asks, “Everything alright?” as she passes. Your steak is overdone.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Say it plainly and specifically.",
        "correct": true,
        "feedback": "She moves on quickly unless the problem is stated."
      },
      {
        "text": "Hint with a sigh.",
        "correct": false,
        "feedback": "Hints are missed."
      },
      {
        "text": "Wait for her to ask again.",
        "correct": false,
        "feedback": "She probably won't."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-13-d",
    "normId": "CS-13-is-everything-alright-scripted-checkin",
    "category": "Customer service & retail",
    "setup": "Halfway through a meal the server asks the usual question. Your drink never arrived.",
    "prompt": "What should you do?",
    "options": [
      {
        "text": "State it: “Actually, I'm still waiting for my drink.”",
        "correct": true,
        "feedback": "A plain statement registers. A hint doesn't."
      },
      {
        "text": "Say “it's fine, thanks” to avoid causing any fuss.",
        "correct": false,
        "feedback": "Then nothing will happen."
      },
      {
        "text": "Beckon him loudly from across the room to complain.",
        "correct": false,
        "feedback": "No need. A plain reply when asked is enough."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-13-e",
    "normId": "CS-13-is-everything-alright-scripted-checkin",
    "category": "Customer service & retail",
    "setup": "The server asks the usual question and you say, “It's okay, I suppose.” He nods and moves on.",
    "prompt": "What does that show?",
    "options": [
      {
        "text": "It's a scripted question. Hints don't register.",
        "correct": true,
        "feedback": "Real issues need to be stated plainly to be addressed."
      },
      {
        "text": "That he is rude and doesn't care about his customers.",
        "correct": false,
        "feedback": "It's the script, not rudeness."
      },
      {
        "text": "That he'll come back to check on you again a bit later.",
        "correct": false,
        "feedback": "He likely won't."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-14-b",
    "normId": "CS-14-price-match-policy-active-request-needed",
    "category": "Customer service & retail",
    "setup": "You're buying headphones. On your phone another retailer has them cheaper. The shop has a price-match line in small print.",
    "prompt": "How do you handle it?",
    "options": [
      {
        "text": "Ask: “Do you price match? I've seen it cheaper elsewhere,” and show proof.",
        "correct": true,
        "feedback": "Price matching depends on you raising it with evidence."
      },
      {
        "text": "Pay full price, as staff would have mentioned it if matching was available.",
        "correct": false,
        "feedback": "Staff don't prompt for it. You have to ask."
      },
      {
        "text": "Demand a discount straight away without showing any proof of the price.",
        "correct": false,
        "feedback": "Evidence is what makes it work."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-14-c",
    "normId": "CS-14-price-match-policy-active-request-needed",
    "category": "Customer service & retail",
    "setup": "A shop's website mentions price matching, but the till doesn't prompt about it.",
    "prompt": "What's the sensible next step?",
    "options": [
      {
        "text": "Raise it yourself, with evidence.",
        "correct": true,
        "feedback": "The policy exists but isn't offered automatically."
      },
      {
        "text": "Wait for the cashier to check competitors.",
        "correct": false,
        "feedback": "They don't."
      },
      {
        "text": "Assume the policy isn't real.",
        "correct": false,
        "feedback": "It's genuine. You just need to ask."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-15-a",
    "normId": "CS-15-click-and-collect-standard-option",
    "category": "Customer service & retail",
    "setup": "You ordered online and want to collect in-store, but you worry it's an odd request.",
    "prompt": "What do you do?",
    "options": [
      {
        "text": "Use it confidently. It's routine.",
        "correct": true,
        "feedback": "Click and collect is mainstream and handled routinely."
      },
      {
        "text": "Apologise and explain why you want to collect.",
        "correct": false,
        "feedback": "No explanation is needed."
      },
      {
        "text": "Pay for delivery instead.",
        "correct": false,
        "feedback": "That costs you for no reason."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-15-b",
    "normId": "CS-15-click-and-collect-standard-option",
    "category": "Customer service & retail",
    "setup": "At checkout you see click and collect alongside delivery. You'd rather collect.",
    "prompt": "What do you do next?",
    "options": [
      {
        "text": "Choose it. Staff handle it routinely.",
        "correct": true,
        "feedback": "It's a standard purchasing option."
      },
      {
        "text": "Phone the shop first to ask permission.",
        "correct": false,
        "feedback": "Not needed. It's offered to everyone."
      },
      {
        "text": "Avoid it, as it's for regular customers.",
        "correct": false,
        "feedback": "It's for everyone."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-16-a",
    "normId": "CS-16-chip-and-pin-standard-card-verification",
    "category": "Customer service & retail",
    "setup": "At a shop the card reader asks you for a four-digit PIN. You've always signed before.",
    "prompt": "What's your best move?",
    "options": [
      {
        "text": "Enter your PIN. Learn it in advance.",
        "correct": true,
        "feedback": "Chip and PIN is the universal standard. Signatures are essentially obsolete."
      },
      {
        "text": "Ask to sign instead.",
        "correct": false,
        "feedback": "Signing isn't offered in standard retail."
      },
      {
        "text": "Hand your card to the cashier to enter it.",
        "correct": false,
        "feedback": "Never share your PIN."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-16-b",
    "normId": "CS-16-chip-and-pin-standard-card-verification",
    "category": "Customer service & retail",
    "setup": "A queue builds behind you while you fumble for your PIN.",
    "prompt": "What should you have done?",
    "options": [
      {
        "text": "Memorised the PIN and had it ready.",
        "correct": true,
        "feedback": "PIN is the standard verification. Being prepared avoids delay."
      },
      {
        "text": "Asked the cashier if you could sign instead.",
        "correct": false,
        "feedback": "It isn't offered."
      },
      {
        "text": "Let the cashier help by pressing the buttons.",
        "correct": false,
        "feedback": "Staff shouldn't enter it for you."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-17-a",
    "normId": "CS-17-feedback-survey-email-routine-request",
    "category": "Customer service & retail",
    "setup": "An email after a routine purchase asks you to rate your experience. You worry something has gone wrong.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As routine and optional.",
        "correct": true,
        "feedback": "These are sent to essentially every customer."
      },
      {
        "text": "As a sign there's a problem with your order.",
        "correct": false,
        "feedback": "It doesn't indicate anything about your order."
      },
      {
        "text": "As a required step.",
        "correct": false,
        "feedback": "It's optional."
      }
    ],
    "status": "Approved"
  },
  {
    "id": "SC-CS-17-b",
    "normId": "CS-17-feedback-survey-email-routine-request",
    "category": "Customer service & retail",
    "setup": "A support chat ends, and a survey arrives. You wonder whether your complaint has been flagged.",
    "prompt": "How do you read it?",
    "options": [
      {
        "text": "As automatic. It goes to everyone.",
        "correct": true,
        "feedback": "Surveys are standard and say nothing about your specific case."
      },
      {
        "text": "As a sign you've been flagged.",
        "correct": false,
        "feedback": "It doesn't mean that."
      },
      {
        "text": "As something you must reply to.",
        "correct": false,
        "feedback": "It's optional and routine."
      }
    ],
    "status": "Approved"
  }
];
