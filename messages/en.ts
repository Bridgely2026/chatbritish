// English UI strings: the source of the Messages type. messages/fa.json must
// have every key here (lib/i18n.ts type-checks it), so a missing Persian
// string fails the build. Values are the exact text the English pages showed
// before the Persian interface existed; change them only on purpose.
//
// A value of "" means "show nothing in this language": used for notes that
// only the Persian pages need (e.g. "scenarios are in English").
//
// Records keyed by an English value (categories, onboarding options) are
// display labels only. What's stored and scored stays the English key.

const en = {
  meta: {
    title: "Chat British — Speak the language. Understand the culture. Belong.",
    description:
      "Chat British turns the unwritten rules of British communication into something you can actually learn — practise before it happens, diagnosis after.",
    onboardingTitle: "Start your profile",
    practiceTitle: "Practice",
    debriefTitle: "Debrief",
  },

  nav: {
    mainLabel: "Main",
    getStarted: "Get started",
    start: "Start",
    howItWorks: "How it works",
    practice: "Practice",
    debrief: "Debrief",
    contact: "Contact",
    menu: "Menu",
    // The language switcher links to the other language and shows that
    // language's own name and label (LangSwitch reads the target's messages).
    languageName: "English",
    thisPageLabel: "English version of this page",
  },

  footer: {
    tagline: "Speak the language. Understand the culture. Belong.",
    explore: "Explore",
    privacy: "Privacy",
    talkToUs: "Talk to us",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    notAdvice:
      "Chat British explains how people commonly communicate in Britain. It isn't legal, medical or financial advice.",
  },

  categories: {
    Workplace: "Workplace",
    Healthcare: "Healthcare",
    "Housing & landlord": "Housing & landlord",
    "Job search": "Job search",
    Social: "Social",
    "Admin & bureaucracy": "Admin & bureaucracy",
    Education: "Education",
    "Dating & relationships": "Dating & relationships",
    "Money & transactions": "Money & transactions",
    "Transport & commuting": "Transport & commuting",
    "Neighbours & community": "Neighbours & community",
    "Customer service & retail": "Customer service & retail",
  },

  categoryBlurbs: {
    Workplace: "Meetings, managers, colleagues",
    "Housing & landlord": "Repairs, notices, flatmates",
    Healthcare: "GPs, appointments, NHS process",
    "Job search": "Interviews, applications, offers",
    Social: "Invitations, small talk, everyday norms",
    "Admin & bureaucracy": "Councils, HMRC, official letters",
    Education: "Lecturers, exams, school letters",
    "Dating & relationships": "Dates, texting, partners",
    "Money & transactions": "Bills, payments, tipping",
    "Transport & commuting": "Trains, buses, driving",
    "Neighbours & community": "Noise, bins, shared spaces",
    "Customer service & retail": "Shops, returns, complaints",
  },

  home: {
    tagline: "A guide to how Britain really communicates",
    heroLine1: "You understood every word.",
    heroLine2: "You still missed what they meant.",
    heroLead:
      "Chat British teaches the unwritten rules of British communication — the hedges, the understatements, the “let’s see how it goes” that actually means no. Practise before it happens. Get a straight answer after it already has.",
    startProfile: "Start your profile",
    tryDebrief: "Try the debrief tool",
    noAccount: "No account needed. It takes two minutes.",
    proofLabel: "Chat British in numbers",
    proofNorms: "communication norms",
    proofSituations: "everyday situations",
    proofScenarios: "practice scenarios",
    proofReviewedFigure: "Every norm",
    proofReviewedLabel: "reviewed by a working coach",
    founderTitle: "Why a coach built this",
    founderClients: "current coaching clients",
    founderFollowers: "followers on Instagram",
    founderYears: "years coaching cultural communication",
    situationsTitle: "Where it helps",
    // {n} is the number of situations, as a word in English ("Twelve").
    situationsLead: "{n} everyday situations, each with practice scenarios and plain explanations.",
    situations: {
      workplace: { title: "Workplace", blurb: "Meetings, managers, colleagues" },
      housing: { title: "Housing and landlords", blurb: "Repairs, notices, flatmates" },
      healthcare: { title: "Healthcare", blurb: "GPs, appointments, NHS process" },
      social: { title: "Social life", blurb: "Invitations, small talk, everyday norms" },
      money: { title: "Money", blurb: "Bills, payments, tipping" },
      transport: { title: "Transport and commuting", blurb: "Trains, buses, driving" },
    },
    practise: "Practise",
    practiseLabel: "Practise {title}",
    seeAll: "See all {n} situations",
    seeAllNote: "Education, dating, neighbours, shopping and more.",
    howTitle: "How it works",
    howLead: "Two moments, one method. Everything comes from the same library of reviewed norms.",
    practiceTourTitle: "Practise before it happens",
    practiceTourBody:
      "Short, tap-based scenarios built from real British situations. Wrong answers show you the right one, and the ones you miss come back.",
    practiceTourPoints: [
      "Five questions a session, about two minutes",
      "A streak to keep you coming back",
      "New questions first, so it never feels repetitive",
    ],
    practiceTourNote: "",
    practiceTourCta: "Start practising",
    debriefTourTitle: "Debrief after it happens",
    debriefTourBody:
      "Describe a confusing moment in your own words. Chat British finds the closest norm, explains what was really meant, and gives you something you could say next.",
    debriefTourPointNorms: "Matched against {n} reviewed norms",
    debriefTourPointNoGuess: "If nothing fits, it says so instead of guessing",
    debriefTourPointNoAccount: "No account needed",
    debriefTourCta: "Try Debrief",
    samplesNote: "",
    coachTitle: "Built on real coaching, not guesses",
    coachBody1:
      "Every norm in the library is reviewed by a working cultural-communication coach: the same methodology behind years of 1:1 sessions, now built into software instead of replaced by it.",
    coachBody2:
      "Nothing gets published without review. The library grows the same way it always has: one grounded, specific case at a time.",
    ledgerSay: "What they say",
    ledgerMeans: "What it means",
    faqTitle: "Questions",
    faq: [
      { q: "Is Chat British free?", a: "Chat British is free to use while we're in early access." },
      {
        q: "Is Debrief a chatbot?",
        a: "No. Debrief matches what you describe against our library of norms and explains the closest one. If nothing fits, it says so.",
      },
      {
        q: "Where do the explanations come from?",
        a: "Every norm in the library is reviewed by a working cultural-communication coach.",
      },
      {
        q: "Is this advice?",
        a: "No. Chat British explains how people commonly communicate in Britain. It isn't legal, medical or financial advice.",
      },
    ],
    bandTitle: "Stop guessing what people mean.",
    bandWhatsapp: "Message us on WhatsApp",
  },

  onboarding: {
    stepOf: "Step {n} of {total}",
    title: "Tell us where you're starting from",
    intro: "Two minutes. This tags your profile so practice and debriefs stay relevant — nothing here is shared.",
    situationsQ: "What do you deal with day to day?",
    // Chip label and tooltip for each situation, keyed by category code.
    situations: {
      WP: { label: "Work", description: "Colleagues, managers" },
      HC: { label: "Healthcare", description: "GP, NHS, pharmacy" },
      HL: { label: "Housing", description: "Landlord, flatmates, repairs" },
      JS: { label: "Job search", description: "Interviews, applications" },
      SO: { label: "Social life", description: "Friends, small talk, invitations" },
      AB: { label: "Admin & bureaucracy", description: "Councils, HMRC, official letters" },
      ED: { label: "Education", description: "Studying, courses, exams, academic norms" },
      DR: { label: "Dating & relationships", description: "Dating, relationships, romantic communication" },
      MN: { label: "Money", description: "Banking, payments, financial norms" },
      TR: { label: "Transport", description: "Public transport, driving, commuting etiquette" },
      NB: { label: "Neighbours", description: "Neighbours, local community, shared spaces" },
      CS: { label: "Shopping & services", description: "Shopping, returns, service interactions" },
    },
    householdQ: "Who do you live with?",
    household: {
      "Living alone": "Living alone",
      "With a partner": "With a partner",
      "With family or kids": "With family or kids",
      "With flatmates or housemates": "With flatmates or housemates",
    },
    timeInUkQ: "How long have you been in the UK?",
    timeInUk: {
      "Just arrived": "Just arrived",
      "Under 1 year": "Under 1 year",
      "1–3 years": "1–3 years",
      "3+ years": "3+ years",
    },
    roleQ: "Which best describes you right now?",
    roles: {
      Employed: "Employed",
      "Job-seeking": "Job-seeking",
      Student: "Student",
      "Stay-at-home parent": "Stay-at-home parent",
      Retired: "Retired",
      Other: "Other",
    },
    sectorQ: "Which sector do you work in?",
    optional: "(optional)",
    sectors: {
      Tech: "Tech",
      Healthcare: "Healthcare",
      Hospitality: "Hospitality",
      Education: "Education",
      Trades: "Trades",
      Other: "Other",
    },
    cityLabel: "Which city or area are you in?",
    cityPlaceholder: "e.g. Manchester",
    struggleLabel: "What's been the most confusing so far?",
    strugglePlaceholder: "e.g. I never know if my manager is actually saying yes or no",
    struggleLanguageNote: "",
    goalQ: "What’s your main goal right now?",
    // Keyed by the stored goal sentence.
    goals: {
      "Feel more confident in day-to-day conversations": {
        label: "Everyday",
        text: "Feel more confident in day-to-day conversations",
      },
      "Excel in professional & workplace settings": {
        label: "Career Focus",
        text: "Excel in professional & workplace settings",
      },
      "Blend in socially and master British humour": {
        label: "Social Integration",
        text: "Blend in socially and master British humour",
      },
      "Prepare for an upcoming event or relocation": {
        label: "Time-Sensitive",
        text: "Prepare for an upcoming event or relocation",
      },
      "Learn indirect language, etiquette, and polite phrasing": {
        label: "Nuance Focus",
        text: "Learn indirect language, etiquette, and polite phrasing",
      },
      "Switch from American English to British equivalents": {
        label: "Language Transition",
        text: "Switch from American English to British equivalents",
      },
      "Understand something specific that confused me": {
        label: "Problem-Solving",
        text: "Understand something specific that confused me",
      },
    },
    emailLabel: "Want us to reach you about a course that fits?",
    emailError: "That doesn’t look like an email address — fix it or leave it blank.",
    saveFailed: "We couldn’t save your answers just now. Your answers are still here, so you can try again.",
    continueWithoutSaving: "Continue without saving",
    back: "Back",
    next: "Next",
    preparing: "Preparing…",
    saving: "Saving…",
    tryAgain: "Try again",
    seeStartingPoint: "See my starting point",
    resultTitle: "Here’s where we’ll start",
    priority: "Priority {n}",
    notSaved: "Your answers weren’t saved this time, but you can still practice.",
    startPracticing: "Start practicing",
    // The Persian starting-point summary. English uses the summary that
    // computeStartingPoint() builds, so these are unused on English pages.
    summaryJustArrived: "",
    summaryUnderOneYear: "",
    summaryThreePlus: "",
    summaryOther: "",
    listSeparator: ", ",
    listAnd: " and ",
  },

  practice: {
    eyebrow: "Practice",
    streak: "🔥 {n} day streak",
    chooseCategory: "Choose a category",
    scenariosInEnglish: "",
    noScenariosFor: "We don't have practice scenarios for {category} yet — pick another to get started",
    comingSoon: "No scenarios yet — coming soon",
    scenarioCountOne: "{n} scenario",
    scenarioCountOther: "{n} scenarios",
    prioritized: "Prioritized for you: {category}",
    // Shown above the question only when non-empty.
    questionOf: "",
    correct: "That lands well",
    wrong: "Not quite",
    nextQuestion: "Next question",
    seeResults: "See results",
    sessionComplete: "Session complete",
    outOf: "/ {total} correct",
    recapAllCorrect: "All correct — that's exactly the instinct you want here.",
    recapNoneCorrect: "Worth another look — everyone needs a few passes at these.",
    recapSome: "Good start — a couple worth revisiting when you're ready.",
    missedComeBack: "The ones you missed will come back.",
    anotherCategory: "Practise another category",
    backToCategory: "Back to this category",
  },

  debrief: {
    eyebrow: "Debrief",
    title: "What happened?",
    intro:
      "Describe a moment that confused you — in your own words. No need to know what category it falls under.",
    englishNote: "",
    placeholder:
      "e.g. My landlord said he'd 'sort it when he gets a chance' about the broken boiler and it's been three weeks",
    voiceInput: "Voice input (not wired up in this shell)",
    submit: "Explain this",
    thinking: "Thinking…",
    englishOnly: "Please write in English. Debrief only reads English for now.",
    followUpEyebrow: "One quick check",
    followUpPlaceholder: "Your answer",
    send: "Send",
    genericError: "Something went wrong. Please try again.",
    rateLimited: "Too many requests, please wait a moment and try again",
    noMatchTitle: "No close match yet",
    // "" keeps the server's message (English pages).
    noMatchMessage: "",
    tryDifferently: "Try describing it differently",
    surfaceSignal: "Surface signal",
    whatItMeans: "What it actually means",
    suggestedResponse: "Suggested response",
    practiseNorm: "Practise this norm",
    describeAnother: "Describe another moment",
  },
};

export type Messages = typeof en;
export default en;
