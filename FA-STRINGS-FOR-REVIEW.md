# Persian interface: strings for review

For Kianoush to read before `feature/farsi-ui` is merged. Generated from `messages/en.ts` (English, unchanged) and `messages/fa.json` (all Persian strings); 250 strings.

**How to review:** read the Persian column. Mark anything to change in the Note column, or send the key with the new wording. Persian is written in a formal register (شما). Numbers use Latin digits on purpose. The zero-width non-joiner (as in می‌کند) is included where Persian needs it.

**Stays English on Persian pages (not in this file):** all Practice scenarios, answer options and feedback; taxonomy phrases on the home page (stamp card, coach ledger rows); the "i.e. probably not." margin note; the Chat British wordmark; Debrief answers and its follow-up questions; the privacy notice and the privacy lines under the forms (they link to the English /privacy); the Help assistant; the sample phone and browser pictures on the home page.

## 1. Public claims to confirm first (13)

These say something public about the product, its review process, pricing or data. Each one must hold for the Persian reader exactly as it does in English.

| Key | English | Persian | Why it's flagged |
|---|---|---|---|
| `meta.description` | Chat British turns the unwritten rules of British communication into something you can actually learn — practise before it happens, diagnosis after. | Chat British قواعد نانوشتهٔ ارتباط در بریتانیا را به چیزی تبدیل می‌کند که واقعاً می‌شود یاد گرفت: تمرین پیش از موقعیت، و تحلیل پس از آن. | Describes what the product does |
| `footer.notAdvice` | Chat British explains how people commonly communicate in Britain. It isn't legal, medical or financial advice. | Chat British توضیح می‌دهد که مردم در بریتانیا معمولاً چگونه با هم ارتباط برقرار می‌کنند. این توضیحات مشاورهٔ حقوقی، پزشکی یا مالی نیست. | Not-advice statement |
| `home.proofReviewedFigure` | Every norm | تک‌تک هنجارها | CLAIM: every norm reviewed |
| `home.proofReviewedLabel` | reviewed by a working coach | بازبینی‌شده توسط یک مربی فعال | CLAIM: reviewed by a working coach |
| `home.howLead` | Two moments, one method. Everything comes from the same library of reviewed norms. | دو لحظه، یک روش. همه‌چیز از همان کتابخانهٔ هنجارهای بازبینی‌شده می‌آید. | CLAIM: library of reviewed norms |
| `home.debriefTourPointNorms` | Matched against {n} reviewed norms | مقایسه با {n} هنجار بازبینی‌شده | CLAIM: count of reviewed norms |
| `home.coachBody1` | Every norm in the library is reviewed by a working cultural-communication coach: the same methodology behind years of 1:1 sessions, now built into software instead of replaced by it. | تک‌تک هنجارهای این کتابخانه را یک مربی فعال ارتباطات بین‌فرهنگی بازبینی کرده است: همان روشی که پشت سال‌ها جلسهٔ آموزش خصوصی بوده، حالا در نرم‌افزار به کار رفته است، نه اینکه نرم‌افزار جای آن را گرفته باشد. | CLAIM: every norm reviewed by a working coach |
| `home.coachBody2` | Nothing gets published without review. The library grows the same way it always has: one grounded, specific case at a time. | هیچ چیزی بدون بازبینی منتشر نمی‌شود. این کتابخانه همان‌طور رشد می‌کند که همیشه رشد کرده است: هر بار با یک مورد مشخص و مستند. | CLAIM: nothing published without review |
| `home.faq[0].a` | Chat British is free to use while we're in early access. | استفاده از Chat British در دورهٔ دسترسی اولیه رایگان است. | CLAIM: pricing (free during early access) |
| `home.faq[2].a` | Every norm in the library is reviewed by a working cultural-communication coach. | تک‌تک هنجارهای این کتابخانه را یک مربی فعال ارتباطات بین‌فرهنگی بازبینی کرده است. | CLAIM: every norm reviewed by a working coach |
| `home.faq[3].a` | No. Chat British explains how people commonly communicate in Britain. It isn't legal, medical or financial advice. | خیر. Chat British توضیح می‌دهد که مردم در بریتانیا معمولاً چگونه با هم ارتباط برقرار می‌کنند. این توضیحات مشاورهٔ حقوقی، پزشکی یا مالی نیست. | Not-advice statement |
| `onboarding.intro` | Two minutes. This tags your profile so practice and debriefs stay relevant — nothing here is shared. | دو دقیقه وقت می‌گیرد. این پاسخ‌ها پروفایل شما را مشخص می‌کنند تا تمرین‌ها و تحلیل‌ها به کارتان بیایند. هیچ‌کدام با دیگران به اشتراک گذاشته نمی‌شود. | CLAIM: "nothing here is shared" (as in the English) |
| `onboarding.emailLabel` | Want us to reach you about a course that fits? | مایلید دربارهٔ دوره‌ای مناسب با شما تماس بگیریم؟ | Contact consent wording |

## 2. New text that exists only on Persian pages (11)

The English pages show nothing here (or, for the onboarding summaries, build their own English sentence). Written for Persian readers, mostly to say what stays in English.

| Key | Persian | Page | Note |
|---|---|---|---|
| `home.practiceTourNote` | سناریوها و پاسخ‌ها به زبان انگلیسی هستند، چون همین جمله‌ها را در بریتانیا خواهید شنید. | Home (/fa) |  |
| `home.samplesNote` | نمونه‌های زیر به انگلیسی هستند، همان‌طور که در خود برنامه می‌بینید. | Home (/fa) |  |
| `onboarding.struggleLanguageNote` | می‌توانید به هر زبانی بنویسید. اگر به انگلیسی بنویسید، نقطهٔ شروع شما دقیق‌تر انتخاب می‌شود. | Onboarding (/fa/onboarding) |  |
| `onboarding.summaryJustArrived` | از آنجا که تازه رسیده‌اید و از همین حالا با {situations} سروکار دارید، با هنجارهایی شروع می‌کنیم که در چند هفتهٔ اول بیشترین اهمیت را دارند: {categories}. | Onboarding (/fa/onboarding) |  |
| `onboarding.summaryUnderOneYear` | چون هنوز در حال جا افتادن هستید و با {situations} سروکار دارید، با {categories} شروع می‌کنیم؛ هنجارهایی که در ابتدا بیشتر باعث سردرگمی می‌شوند. | Onboarding (/fa/onboarding) |  |
| `onboarding.summaryThreePlus` | مدتی است اینجا هستید، پس موضوع دیگر گذران روزهای اول نیست، بلکه نکته‌های ظریف‌تری است که هنوز هم از چشم خیلی‌ها می‌افتد. با توجه به اینکه بخش زیادی از وقتتان صرف {situations} می‌شود، با {categories} شروع می‌کنیم. | Onboarding (/fa/onboarding) |  |
| `onboarding.summaryOther` | چون چند سالی است اینجا هستید و با {situations} سروکار دارید، با {categories} شروع می‌کنیم. | Onboarding (/fa/onboarding) |  |
| `practice.scenariosInEnglish` | سناریوها و پاسخ‌ها به زبان انگلیسی هستند، چون همین جمله‌ها را در بریتانیا خواهید شنید. | Practice (/fa/practice) |  |
| `practice.questionOf` | پرسش {n} از {total} | Practice (/fa/practice) |  |
| `debrief.englishNote` | لطفاً موقعیت را به انگلیسی بنویسید. پاسخ هم به انگلیسی خواهد بود. | Debrief (/fa/debrief) |  |
| `debrief.noMatchMessage` | برای این مورد هنوز تطابق نزدیکی پیدا نکردیم. ممکن است خارج از موضوعاتی باشد که Chat British تا امروز پوشش می‌دهد، اما از اینکه آن را با ما در میان گذاشتید سپاسگزاریم. | Debrief (/fa/debrief) |  |

## 3. Every string

| Key | English | Persian | Page | Note |
|---|---|---|---|---|
| `meta.title` | Chat British — Speak the language. Understand the culture. Belong. | Chat British \| به زبانش حرف بزنید. فرهنگش را بفهمید. بخشی از آن باشید. | Page titles and search/share descriptions (/fa pages) |  |
| `meta.description` | Chat British turns the unwritten rules of British communication into something you can actually learn — practise before it happens, diagnosis after. | Chat British قواعد نانوشتهٔ ارتباط در بریتانیا را به چیزی تبدیل می‌کند که واقعاً می‌شود یاد گرفت: تمرین پیش از موقعیت، و تحلیل پس از آن. | Page titles and search/share descriptions (/fa pages) | Describes what the product does |
| `meta.onboardingTitle` | Start your profile | پروفایل خود را بسازید | Page titles and search/share descriptions (/fa pages) |  |
| `meta.practiceTitle` | Practice | تمرین | Page titles and search/share descriptions (/fa pages) |  |
| `meta.debriefTitle` | Debrief | تحلیل موقعیت | Page titles and search/share descriptions (/fa pages) |  |
| `nav.mainLabel` | Main | اصلی | Header, every /fa page |  |
| `nav.getStarted` | Get started | شروع کنید | Header, every /fa page |  |
| `nav.start` | Start | شروع | Header, every /fa page |  |
| `nav.howItWorks` | How it works | چطور کار می‌کند | Header, every /fa page |  |
| `nav.practice` | Practice | تمرین | Header, every /fa page |  |
| `nav.debrief` | Debrief | تحلیل | Header, every /fa page |  |
| `nav.contact` | Contact | تماس با ما | Header, every /fa page |  |
| `nav.menu` | Menu | منو | Header, every /fa page |  |
| `nav.languageName` | English | فارسی | Header, every /fa page |  |
| `nav.thisPageLabel` | English version of this page | نسخهٔ فارسی این صفحه | Header, every /fa page |  |
| `footer.tagline` | Speak the language. Understand the culture. Belong. | به زبانش حرف بزنید. فرهنگش را بفهمید. بخشی از آن باشید. | Footer, every /fa page |  |
| `footer.explore` | Explore | بخش‌ها | Footer, every /fa page |  |
| `footer.privacy` | Privacy | حریم خصوصی (به انگلیسی) | Footer, every /fa page |  |
| `footer.talkToUs` | Talk to us | با ما در ارتباط باشید | Footer, every /fa page |  |
| `footer.whatsapp` | WhatsApp | واتس‌اپ | Footer, every /fa page |  |
| `footer.linkedin` | LinkedIn | لینکدین | Footer, every /fa page |  |
| `footer.notAdvice` | Chat British explains how people commonly communicate in Britain. It isn't legal, medical or financial advice. | Chat British توضیح می‌دهد که مردم در بریتانیا معمولاً چگونه با هم ارتباط برقرار می‌کنند. این توضیحات مشاورهٔ حقوقی، پزشکی یا مالی نیست. | Footer, every /fa page | Not-advice statement |
| `categories.Workplace` | Workplace | محیط کار | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Healthcare` | Healthcare | بهداشت و درمان | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Housing & landlord` | Housing & landlord | مسکن و صاحب‌خانه | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Job search` | Job search | کاریابی | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Social` | Social | زندگی اجتماعی | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Admin & bureaucracy` | Admin & bureaucracy | امور اداری | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Education` | Education | تحصیل و آموزش | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Dating & relationships` | Dating & relationships | قرار و رابطه | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Money & transactions` | Money & transactions | پول و پرداخت | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Transport & commuting` | Transport & commuting | حمل‌ونقل و رفت‌وآمد | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Neighbours & community` | Neighbours & community | همسایه‌ها و محله | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categories.Customer service & retail` | Customer service & retail | خرید و خدمات مشتری | Practice picker and question heading, onboarding result, Debrief answer card |  |
| `categoryBlurbs.Workplace` | Meetings, managers, colleagues | جلسه‌ها، مدیران، همکاران | Practice picker |  |
| `categoryBlurbs.Housing & landlord` | Repairs, notices, flatmates | تعمیرات، اخطارها، هم‌خانه‌ها | Practice picker |  |
| `categoryBlurbs.Healthcare` | GPs, appointments, NHS process | پزشک عمومی (GP)، نوبت‌ها، روال NHS | Practice picker |  |
| `categoryBlurbs.Job search` | Interviews, applications, offers | مصاحبه، درخواست کار، پیشنهاد شغلی | Practice picker |  |
| `categoryBlurbs.Social` | Invitations, small talk, everyday norms | دعوت‌ها، گپ‌وگفت کوتاه، هنجارهای روزمره | Practice picker |  |
| `categoryBlurbs.Admin & bureaucracy` | Councils, HMRC, official letters | شورای محلی، HMRC، نامه‌های رسمی | Practice picker |  |
| `categoryBlurbs.Education` | Lecturers, exams, school letters | استادان، امتحان‌ها، نامه‌های مدرسه | Practice picker |  |
| `categoryBlurbs.Dating & relationships` | Dates, texting, partners | قرارها، پیام‌دادن، شریک زندگی | Practice picker |  |
| `categoryBlurbs.Money & transactions` | Bills, payments, tipping | قبض‌ها، پرداخت‌ها، انعام | Practice picker |  |
| `categoryBlurbs.Transport & commuting` | Trains, buses, driving | قطار، اتوبوس، رانندگی | Practice picker |  |
| `categoryBlurbs.Neighbours & community` | Noise, bins, shared spaces | سروصدا، سطل زباله، فضاهای مشترک | Practice picker |  |
| `categoryBlurbs.Customer service & retail` | Shops, returns, complaints | فروشگاه، مرجوعی، شکایت | Practice picker |  |
| `home.tagline` | A guide to how Britain really communicates | راهنمایی برای اینکه بریتانیایی‌ها واقعاً چطور حرف می‌زنند | Home (/fa) |  |
| `home.heroLine1` | You understood every word. | تک‌تک کلمه‌ها را فهمیدید. | Home (/fa) |  |
| `home.heroLine2` | You still missed what they meant. | ولی منظورشان را متوجه نشدید. | Home (/fa) |  |
| `home.heroLead` | Chat British teaches the unwritten rules of British communication — the hedges, the understatements, the “let’s see how it goes” that actually means no. Practise before it happens. Get a straight answer after it already has. | Chat British قواعد نانوشتهٔ ارتباط در بریتانیا را آموزش می‌دهد: احتیاط‌های زبانی، کم‌گویی‌ها، و آن «let’s see how it goes» که در واقع یعنی «نه». پیش از اینکه اتفاق بیفتد تمرین کنید. بعد از اینکه اتفاق افتاد، جوابی روشن بگیرید. | Home (/fa) |  |
| `home.startProfile` | Start your profile | پروفایل خود را بسازید | Home (/fa) |  |
| `home.tryDebrief` | Try the debrief tool | ابزار تحلیل موقعیت را امتحان کنید | Home (/fa) |  |
| `home.noAccount` | No account needed. It takes two minutes. | نیازی به ساخت حساب نیست. دو دقیقه وقت می‌گیرد. | Home (/fa) |  |
| `home.proofLabel` | Chat British in numbers | Chat British به زبان اعداد | Home (/fa) |  |
| `home.proofNorms` | communication norms | هنجار ارتباطی | Home (/fa) |  |
| `home.proofSituations` | everyday situations | موقعیت روزمره | Home (/fa) |  |
| `home.proofScenarios` | practice scenarios | سناریوی تمرینی | Home (/fa) |  |
| `home.proofReviewedFigure` | Every norm | تک‌تک هنجارها | Home (/fa) | CLAIM: every norm reviewed |
| `home.proofReviewedLabel` | reviewed by a working coach | بازبینی‌شده توسط یک مربی فعال | Home (/fa) | CLAIM: reviewed by a working coach |
| `home.founderTitle` | Why a coach built this | چرا یک مربی این را ساخت | Home (/fa) |  |
| `home.founderClients` | current coaching clients | مراجع فعلی مربی‌گری | Home (/fa) |  |
| `home.founderFollowers` | followers on Instagram | دنبال‌کننده در اینستاگرام | Home (/fa) |  |
| `home.founderYears` | years coaching cultural communication | سال مربی‌گری ارتباطات بین‌فرهنگی | Home (/fa) |  |
| `home.situationsTitle` | Where it helps | کجا به کارتان می‌آید | Home (/fa) |  |
| `home.situationsLead` | {n} everyday situations, each with practice scenarios and plain explanations. | {n} موقعیت روزمره، هر کدام با سناریوهای تمرینی و توضیحاتی ساده. | Home (/fa) |  |
| `home.situations.workplace.title` | Workplace | محیط کار | Home (/fa) |  |
| `home.situations.workplace.blurb` | Meetings, managers, colleagues | جلسه‌ها، مدیران، همکاران | Home (/fa) |  |
| `home.situations.housing.title` | Housing and landlords | مسکن و صاحب‌خانه | Home (/fa) |  |
| `home.situations.housing.blurb` | Repairs, notices, flatmates | تعمیرات، اخطارها، هم‌خانه‌ها | Home (/fa) |  |
| `home.situations.healthcare.title` | Healthcare | بهداشت و درمان | Home (/fa) |  |
| `home.situations.healthcare.blurb` | GPs, appointments, NHS process | پزشک عمومی (GP)، نوبت‌ها، روال NHS | Home (/fa) |  |
| `home.situations.social.title` | Social life | زندگی اجتماعی | Home (/fa) |  |
| `home.situations.social.blurb` | Invitations, small talk, everyday norms | دعوت‌ها، گپ‌وگفت کوتاه، هنجارهای روزمره | Home (/fa) |  |
| `home.situations.money.title` | Money | پول | Home (/fa) |  |
| `home.situations.money.blurb` | Bills, payments, tipping | قبض‌ها، پرداخت‌ها، انعام | Home (/fa) |  |
| `home.situations.transport.title` | Transport and commuting | حمل‌ونقل و رفت‌وآمد | Home (/fa) |  |
| `home.situations.transport.blurb` | Trains, buses, driving | قطار، اتوبوس، رانندگی | Home (/fa) |  |
| `home.practise` | Practise | تمرین کنید | Home (/fa) |  |
| `home.practiseLabel` | Practise {title} | تمرین در بخش {title} | Home (/fa) |  |
| `home.seeAll` | See all {n} situations | دیدن هر {n} موقعیت | Home (/fa) |  |
| `home.seeAllNote` | Education, dating, neighbours, shopping and more. | تحصیل، قرار و رابطه، همسایه‌ها، خرید و موارد دیگر. | Home (/fa) |  |
| `home.howTitle` | How it works | چطور کار می‌کند | Home (/fa) |  |
| `home.howLead` | Two moments, one method. Everything comes from the same library of reviewed norms. | دو لحظه، یک روش. همه‌چیز از همان کتابخانهٔ هنجارهای بازبینی‌شده می‌آید. | Home (/fa) | CLAIM: library of reviewed norms |
| `home.practiceTourTitle` | Practise before it happens | پیش از اینکه اتفاق بیفتد، تمرین کنید | Home (/fa) |  |
| `home.practiceTourBody` | Short, tap-based scenarios built from real British situations. Wrong answers show you the right one, and the ones you miss come back. | سناریوهای کوتاه با چند گزینه، ساخته‌شده از موقعیت‌های واقعی در بریتانیا. اگر اشتباه جواب دهید، پاسخ درست را می‌بینید و سؤال‌هایی که اشتباه زده‌اید دوباره برمی‌گردند. | Home (/fa) |  |
| `home.practiceTourPoints[0]` | Five questions a session, about two minutes | پنج سؤال در هر جلسه، حدود دو دقیقه | Home (/fa) |  |
| `home.practiceTourPoints[1]` | A streak to keep you coming back | شمارش روزهای پیاپی تا انگیزه‌تان بماند | Home (/fa) |  |
| `home.practiceTourPoints[2]` | New questions first, so it never feels repetitive | اول سؤال‌های تازه، تا هیچ‌وقت تکراری نشود | Home (/fa) |  |
| `home.practiceTourNote` | *(not shown in English)* | سناریوها و پاسخ‌ها به زبان انگلیسی هستند، چون همین جمله‌ها را در بریتانیا خواهید شنید. | Home (/fa) | NEW: Persian pages only (no English text) |
| `home.practiceTourCta` | Start practising | تمرین را شروع کنید | Home (/fa) |  |
| `home.debriefTourTitle` | Debrief after it happens | بعد از اینکه اتفاق افتاد، تحلیلش کنید | Home (/fa) |  |
| `home.debriefTourBody` | Describe a confusing moment in your own words. Chat British finds the closest norm, explains what was really meant, and gives you something you could say next. | یک لحظهٔ گیج‌کننده را با کلمات خودتان و به انگلیسی شرح دهید. Chat British نزدیک‌ترین هنجار را پیدا می‌کند، توضیح می‌دهد منظور واقعی چه بوده و جمله‌ای پیشنهاد می‌دهد که می‌توانید در ادامه بگویید. | Home (/fa) |  |
| `home.debriefTourPointNorms` | Matched against {n} reviewed norms | مقایسه با {n} هنجار بازبینی‌شده | Home (/fa) | CLAIM: count of reviewed norms |
| `home.debriefTourPointNoGuess` | If nothing fits, it says so instead of guessing | اگر موردی مطابقت نداشته باشد، به‌جای حدس زدن همین را می‌گوید | Home (/fa) |  |
| `home.debriefTourPointNoAccount` | No account needed | نیازی به حساب کاربری نیست | Home (/fa) |  |
| `home.debriefTourCta` | Try Debrief | تحلیل موقعیت را امتحان کنید | Home (/fa) |  |
| `home.samplesNote` | *(not shown in English)* | نمونه‌های زیر به انگلیسی هستند، همان‌طور که در خود برنامه می‌بینید. | Home (/fa) | NEW: Persian pages only (no English text) |
| `home.coachTitle` | Built on real coaching, not guesses | ساخته‌شده بر پایهٔ مربی‌گری واقعی، نه حدس و گمان | Home (/fa) |  |
| `home.coachBody1` | Every norm in the library is reviewed by a working cultural-communication coach: the same methodology behind years of 1:1 sessions, now built into software instead of replaced by it. | تک‌تک هنجارهای این کتابخانه را یک مربی فعال ارتباطات بین‌فرهنگی بازبینی کرده است: همان روشی که پشت سال‌ها جلسهٔ آموزش خصوصی بوده، حالا در نرم‌افزار به کار رفته است، نه اینکه نرم‌افزار جای آن را گرفته باشد. | Home (/fa) | CLAIM: every norm reviewed by a working coach |
| `home.coachBody2` | Nothing gets published without review. The library grows the same way it always has: one grounded, specific case at a time. | هیچ چیزی بدون بازبینی منتشر نمی‌شود. این کتابخانه همان‌طور رشد می‌کند که همیشه رشد کرده است: هر بار با یک مورد مشخص و مستند. | Home (/fa) | CLAIM: nothing published without review |
| `home.ledgerSay` | What they say | چه می‌گویند | Home (/fa) |  |
| `home.ledgerMeans` | What it means | منظورشان چیست | Home (/fa) |  |
| `home.faqTitle` | Questions | پرسش‌ها | Home (/fa) |  |
| `home.faq[0].q` | Is Chat British free? | آیا Chat British رایگان است؟ | Home (/fa) |  |
| `home.faq[0].a` | Chat British is free to use while we're in early access. | استفاده از Chat British در دورهٔ دسترسی اولیه رایگان است. | Home (/fa) | CLAIM: pricing (free during early access) |
| `home.faq[1].q` | Is Debrief a chatbot? | آیا تحلیل موقعیت یک چت‌بات است؟ | Home (/fa) |  |
| `home.faq[1].a` | No. Debrief matches what you describe against our library of norms and explains the closest one. If nothing fits, it says so. | خیر. تحلیل موقعیت آنچه را شرح می‌دهید با کتابخانهٔ هنجارهای ما مقایسه می‌کند و نزدیک‌ترین مورد را توضیح می‌دهد. اگر موردی مطابقت نداشته باشد، همین را می‌گوید. | Home (/fa) |  |
| `home.faq[2].q` | Where do the explanations come from? | توضیحات از کجا می‌آیند؟ | Home (/fa) |  |
| `home.faq[2].a` | Every norm in the library is reviewed by a working cultural-communication coach. | تک‌تک هنجارهای این کتابخانه را یک مربی فعال ارتباطات بین‌فرهنگی بازبینی کرده است. | Home (/fa) | CLAIM: every norm reviewed by a working coach |
| `home.faq[3].q` | Is this advice? | آیا این مشاوره است؟ | Home (/fa) |  |
| `home.faq[3].a` | No. Chat British explains how people commonly communicate in Britain. It isn't legal, medical or financial advice. | خیر. Chat British توضیح می‌دهد که مردم در بریتانیا معمولاً چگونه با هم ارتباط برقرار می‌کنند. این توضیحات مشاورهٔ حقوقی، پزشکی یا مالی نیست. | Home (/fa) | Not-advice statement |
| `home.bandTitle` | Stop guessing what people mean. | دیگر لازم نیست منظور دیگران را حدس بزنید. | Home (/fa) |  |
| `home.bandWhatsapp` | Message us on WhatsApp | در واتس‌اپ به ما پیام دهید | Home (/fa) |  |
| `onboarding.stepOf` | Step {n} of {total} | مرحلهٔ {n} از {total} | Onboarding (/fa/onboarding) |  |
| `onboarding.title` | Tell us where you're starting from | بگویید از کجا شروع می‌کنید | Onboarding (/fa/onboarding) |  |
| `onboarding.intro` | Two minutes. This tags your profile so practice and debriefs stay relevant — nothing here is shared. | دو دقیقه وقت می‌گیرد. این پاسخ‌ها پروفایل شما را مشخص می‌کنند تا تمرین‌ها و تحلیل‌ها به کارتان بیایند. هیچ‌کدام با دیگران به اشتراک گذاشته نمی‌شود. | Onboarding (/fa/onboarding) | CLAIM: "nothing here is shared" (as in the English) |
| `onboarding.situationsQ` | What do you deal with day to day? | هر روز با چه موقعیت‌هایی سروکار دارید؟ | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.WP.label` | Work | کار | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.WP.description` | Colleagues, managers | همکاران، مدیران | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.HC.label` | Healthcare | بهداشت و درمان | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.HC.description` | GP, NHS, pharmacy | پزشک عمومی، NHS، داروخانه | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.HL.label` | Housing | مسکن | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.HL.description` | Landlord, flatmates, repairs | صاحب‌خانه، هم‌خانه‌ها، تعمیرات | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.JS.label` | Job search | کاریابی | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.JS.description` | Interviews, applications | مصاحبه، درخواست کار | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.SO.label` | Social life | زندگی اجتماعی | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.SO.description` | Friends, small talk, invitations | دوستان، گپ‌وگفت کوتاه، دعوت‌ها | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.AB.label` | Admin & bureaucracy | امور اداری | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.AB.description` | Councils, HMRC, official letters | شورای محلی، HMRC، نامه‌های رسمی | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.ED.label` | Education | تحصیل | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.ED.description` | Studying, courses, exams, academic norms | درس، دوره‌ها، امتحان‌ها، هنجارهای دانشگاهی | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.DR.label` | Dating & relationships | قرار و رابطه | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.DR.description` | Dating, relationships, romantic communication | قرار گذاشتن، رابطه، ارتباط عاطفی | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.MN.label` | Money | پول | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.MN.description` | Banking, payments, financial norms | بانک، پرداخت‌ها، هنجارهای مالی | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.TR.label` | Transport | حمل‌ونقل | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.TR.description` | Public transport, driving, commuting etiquette | حمل‌ونقل عمومی، رانندگی، آداب رفت‌وآمد | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.NB.label` | Neighbours | همسایه‌ها | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.NB.description` | Neighbours, local community, shared spaces | همسایه‌ها، محله، فضاهای مشترک | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.CS.label` | Shopping & services | خرید و خدمات | Onboarding (/fa/onboarding) |  |
| `onboarding.situations.CS.description` | Shopping, returns, service interactions | خرید، مرجوعی، برخورد با فروشنده و خدمات | Onboarding (/fa/onboarding) |  |
| `onboarding.householdQ` | Who do you live with? | با چه کسی زندگی می‌کنید؟ | Onboarding (/fa/onboarding) |  |
| `onboarding.household.Living alone` | Living alone | تنها | Onboarding (/fa/onboarding) |  |
| `onboarding.household.With a partner` | With a partner | با همسر یا شریک زندگی | Onboarding (/fa/onboarding) |  |
| `onboarding.household.With family or kids` | With family or kids | با خانواده یا فرزندان | Onboarding (/fa/onboarding) |  |
| `onboarding.household.With flatmates or housemates` | With flatmates or housemates | با هم‌خانه‌ها | Onboarding (/fa/onboarding) |  |
| `onboarding.timeInUkQ` | How long have you been in the UK? | چه مدت است در بریتانیا هستید؟ | Onboarding (/fa/onboarding) |  |
| `onboarding.timeInUk.Just arrived` | Just arrived | تازه رسیده‌ام | Onboarding (/fa/onboarding) |  |
| `onboarding.timeInUk.Under 1 year` | Under 1 year | کمتر از 1 سال | Onboarding (/fa/onboarding) |  |
| `onboarding.timeInUk.1–3 years` | 1–3 years | 1 تا 3 سال | Onboarding (/fa/onboarding) |  |
| `onboarding.timeInUk.3+ years` | 3+ years | بیش از 3 سال | Onboarding (/fa/onboarding) |  |
| `onboarding.roleQ` | Which best describes you right now? | کدام گزینه وضعیت فعلی شما را بهتر توصیف می‌کند؟ | Onboarding (/fa/onboarding) |  |
| `onboarding.roles.Employed` | Employed | شاغل | Onboarding (/fa/onboarding) |  |
| `onboarding.roles.Job-seeking` | Job-seeking | در جست‌وجوی کار | Onboarding (/fa/onboarding) |  |
| `onboarding.roles.Student` | Student | دانشجو | Onboarding (/fa/onboarding) |  |
| `onboarding.roles.Stay-at-home parent` | Stay-at-home parent | والد خانه‌دار | Onboarding (/fa/onboarding) |  |
| `onboarding.roles.Retired` | Retired | بازنشسته | Onboarding (/fa/onboarding) |  |
| `onboarding.roles.Other` | Other | سایر | Onboarding (/fa/onboarding) |  |
| `onboarding.sectorQ` | Which sector do you work in? | در چه حوزه‌ای کار می‌کنید؟ | Onboarding (/fa/onboarding) |  |
| `onboarding.optional` | (optional) | (اختیاری) | Onboarding (/fa/onboarding) |  |
| `onboarding.sectors.Tech` | Tech | فناوری | Onboarding (/fa/onboarding) |  |
| `onboarding.sectors.Healthcare` | Healthcare | بهداشت و درمان | Onboarding (/fa/onboarding) |  |
| `onboarding.sectors.Hospitality` | Hospitality | هتلداری و پذیرایی | Onboarding (/fa/onboarding) |  |
| `onboarding.sectors.Education` | Education | آموزش | Onboarding (/fa/onboarding) |  |
| `onboarding.sectors.Trades` | Trades | مشاغل فنی | Onboarding (/fa/onboarding) |  |
| `onboarding.sectors.Other` | Other | سایر | Onboarding (/fa/onboarding) |  |
| `onboarding.cityLabel` | Which city or area are you in? | در کدام شهر یا منطقه هستید؟ | Onboarding (/fa/onboarding) |  |
| `onboarding.cityPlaceholder` | e.g. Manchester | مثلاً منچستر | Onboarding (/fa/onboarding) |  |
| `onboarding.struggleLabel` | What's been the most confusing so far? | تا اینجا چه چیزی بیش از همه گیجتان کرده است؟ | Onboarding (/fa/onboarding) |  |
| `onboarding.strugglePlaceholder` | e.g. I never know if my manager is actually saying yes or no | مثلاً هیچ‌وقت نمی‌دانم مدیرم واقعاً «بله» می‌گوید یا «نه» | Onboarding (/fa/onboarding) |  |
| `onboarding.struggleLanguageNote` | *(not shown in English)* | می‌توانید به هر زبانی بنویسید. اگر به انگلیسی بنویسید، نقطهٔ شروع شما دقیق‌تر انتخاب می‌شود. | Onboarding (/fa/onboarding) | NEW: Persian pages only (no English text) |
| `onboarding.goalQ` | What’s your main goal right now? | هدف اصلی شما در حال حاضر چیست؟ | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Feel more confident in day-to-day conversations.label` | Everyday | روزمره | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Feel more confident in day-to-day conversations.text` | Feel more confident in day-to-day conversations | در گفت‌وگوهای روزمره اعتمادبه‌نفس بیشتری داشته باشم | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Excel in professional & workplace settings.label` | Career Focus | تمرکز بر کار | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Excel in professional & workplace settings.text` | Excel in professional & workplace settings | در محیط‌های حرفه‌ای و کاری موفق‌تر باشم | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Blend in socially and master British humour.label` | Social Integration | همراهی اجتماعی | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Blend in socially and master British humour.text` | Blend in socially and master British humour | در جمع‌ها جا بیفتم و طنز بریتانیایی را بفهمم | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Prepare for an upcoming event or relocation.label` | Time-Sensitive | فوری | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Prepare for an upcoming event or relocation.text` | Prepare for an upcoming event or relocation | برای یک رویداد یا نقل‌مکان پیش رو آماده شوم | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Learn indirect language, etiquette, and polite phrasing.label` | Nuance Focus | ظرافت‌های زبان | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Learn indirect language, etiquette, and polite phrasing.text` | Learn indirect language, etiquette, and polite phrasing | زبان غیرمستقیم، آداب معاشرت و عبارت‌های مؤدبانه را یاد بگیرم | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Switch from American English to British equivalents.label` | Language Transition | گذار زبانی | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Switch from American English to British equivalents.text` | Switch from American English to British equivalents | از انگلیسی آمریکایی به معادل‌های بریتانیایی برسم | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Understand something specific that confused me.label` | Problem-Solving | حل مسئله | Onboarding (/fa/onboarding) |  |
| `onboarding.goals.Understand something specific that confused me.text` | Understand something specific that confused me | چیز مشخصی را که گیجم کرده است بفهمم | Onboarding (/fa/onboarding) |  |
| `onboarding.emailLabel` | Want us to reach you about a course that fits? | مایلید دربارهٔ دوره‌ای مناسب با شما تماس بگیریم؟ | Onboarding (/fa/onboarding) | Contact consent wording |
| `onboarding.emailError` | That doesn’t look like an email address — fix it or leave it blank. | این شبیه نشانی ایمیل نیست. آن را اصلاح کنید یا خالی بگذارید. | Onboarding (/fa/onboarding) |  |
| `onboarding.saveFailed` | We couldn’t save your answers just now. Your answers are still here, so you can try again. | همین حالا نتوانستیم پاسخ‌هایتان را ذخیره کنیم. پاسخ‌هایتان هنوز اینجاست و می‌توانید دوباره امتحان کنید. | Onboarding (/fa/onboarding) |  |
| `onboarding.continueWithoutSaving` | Continue without saving | ادامه بدون ذخیره | Onboarding (/fa/onboarding) |  |
| `onboarding.back` | Back | قبلی | Onboarding (/fa/onboarding) |  |
| `onboarding.next` | Next | بعدی | Onboarding (/fa/onboarding) |  |
| `onboarding.preparing` | Preparing… | در حال آماده‌سازی… | Onboarding (/fa/onboarding) |  |
| `onboarding.saving` | Saving… | در حال ذخیره… | Onboarding (/fa/onboarding) |  |
| `onboarding.tryAgain` | Try again | دوباره امتحان کنید | Onboarding (/fa/onboarding) |  |
| `onboarding.seeStartingPoint` | See my starting point | نقطهٔ شروعم را ببینم | Onboarding (/fa/onboarding) |  |
| `onboarding.resultTitle` | Here’s where we’ll start | از اینجا شروع می‌کنیم | Onboarding (/fa/onboarding) |  |
| `onboarding.priority` | Priority {n} | اولویت {n} | Onboarding (/fa/onboarding) |  |
| `onboarding.notSaved` | Your answers weren’t saved this time, but you can still practice. | این بار پاسخ‌هایتان ذخیره نشد، اما همچنان می‌توانید تمرین کنید. | Onboarding (/fa/onboarding) |  |
| `onboarding.startPracticing` | Start practicing | تمرین را شروع کنید | Onboarding (/fa/onboarding) |  |
| `onboarding.summaryJustArrived` | *(not shown in English)* | از آنجا که تازه رسیده‌اید و از همین حالا با {situations} سروکار دارید، با هنجارهایی شروع می‌کنیم که در چند هفتهٔ اول بیشترین اهمیت را دارند: {categories}. | Onboarding (/fa/onboarding) | NEW: Persian pages only (no English text) |
| `onboarding.summaryUnderOneYear` | *(not shown in English)* | چون هنوز در حال جا افتادن هستید و با {situations} سروکار دارید، با {categories} شروع می‌کنیم؛ هنجارهایی که در ابتدا بیشتر باعث سردرگمی می‌شوند. | Onboarding (/fa/onboarding) | NEW: Persian pages only (no English text) |
| `onboarding.summaryThreePlus` | *(not shown in English)* | مدتی است اینجا هستید، پس موضوع دیگر گذران روزهای اول نیست، بلکه نکته‌های ظریف‌تری است که هنوز هم از چشم خیلی‌ها می‌افتد. با توجه به اینکه بخش زیادی از وقتتان صرف {situations} می‌شود، با {categories} شروع می‌کنیم. | Onboarding (/fa/onboarding) | NEW: Persian pages only (no English text) |
| `onboarding.summaryOther` | *(not shown in English)* | چون چند سالی است اینجا هستید و با {situations} سروکار دارید، با {categories} شروع می‌کنیم. | Onboarding (/fa/onboarding) | NEW: Persian pages only (no English text) |
| `onboarding.listSeparator` | ,  | ،  | Onboarding (/fa/onboarding) |  |
| `onboarding.listAnd` |  and  |  و  | Onboarding (/fa/onboarding) |  |
| `practice.eyebrow` | Practice | تمرین | Practice (/fa/practice) |  |
| `practice.streak` | 🔥 {n} day streak | 🔥 {n} روز پیاپی | Practice (/fa/practice) |  |
| `practice.chooseCategory` | Choose a category | یک دسته را انتخاب کنید | Practice (/fa/practice) |  |
| `practice.scenariosInEnglish` | *(not shown in English)* | سناریوها و پاسخ‌ها به زبان انگلیسی هستند، چون همین جمله‌ها را در بریتانیا خواهید شنید. | Practice (/fa/practice) | NEW: Persian pages only (no English text) |
| `practice.noScenariosFor` | We don't have practice scenarios for {category} yet — pick another to get started | هنوز برای {category} سناریوی تمرینی نداریم. برای شروع، دستهٔ دیگری را انتخاب کنید. | Practice (/fa/practice) |  |
| `practice.comingSoon` | No scenarios yet — coming soon | هنوز سناریویی نیست. به‌زودی | Practice (/fa/practice) |  |
| `practice.scenarioCountOne` | {n} scenario | {n} سناریو | Practice (/fa/practice) |  |
| `practice.scenarioCountOther` | {n} scenarios | {n} سناریو | Practice (/fa/practice) |  |
| `practice.prioritized` | Prioritized for you: {category} | اولویت شما: {category} | Practice (/fa/practice) |  |
| `practice.questionOf` | *(not shown in English)* | پرسش {n} از {total} | Practice (/fa/practice) | NEW: Persian pages only (no English text) |
| `practice.correct` | That lands well | این پاسخ مناسب است | Practice (/fa/practice) |  |
| `practice.wrong` | Not quite | نه کاملاً | Practice (/fa/practice) |  |
| `practice.nextQuestion` | Next question | پرسش بعدی | Practice (/fa/practice) |  |
| `practice.seeResults` | See results | دیدن نتیجه | Practice (/fa/practice) |  |
| `practice.sessionComplete` | Session complete | این جلسه تمام شد | Practice (/fa/practice) |  |
| `practice.outOf` | / {total} correct | از {total} درست | Practice (/fa/practice) |  |
| `practice.recapAllCorrect` | All correct — that's exactly the instinct you want here. | همه درست بود. دقیقاً همان حسی که اینجا لازم است. | Practice (/fa/practice) |  |
| `practice.recapNoneCorrect` | Worth another look — everyone needs a few passes at these. | ارزش دارد دوباره نگاهی بیندازید. همه برای این‌ها به چند بار تمرین نیاز دارند. | Practice (/fa/practice) |  |
| `practice.recapSome` | Good start — a couple worth revisiting when you're ready. | شروع خوبی بود. هر وقت آماده بودید، چند مورد ارزش مرور دارد. | Practice (/fa/practice) |  |
| `practice.missedComeBack` | The ones you missed will come back. | سؤال‌هایی که اشتباه جواب دادید دوباره برمی‌گردند. | Practice (/fa/practice) |  |
| `practice.anotherCategory` | Practise another category | تمرین در دستهٔ دیگر | Practice (/fa/practice) |  |
| `practice.backToCategory` | Back to this category | بازگشت به همین دسته | Practice (/fa/practice) |  |
| `debrief.eyebrow` | Debrief | تحلیل موقعیت | Debrief (/fa/debrief) |  |
| `debrief.title` | What happened? | چه اتفاقی افتاد؟ | Debrief (/fa/debrief) |  |
| `debrief.intro` | Describe a moment that confused you — in your own words. No need to know what category it falls under. | لحظه‌ای را که گیجتان کرد با کلمات خودتان شرح دهید. لازم نیست بدانید در چه دسته‌ای قرار می‌گیرد. | Debrief (/fa/debrief) |  |
| `debrief.englishNote` | *(not shown in English)* | لطفاً موقعیت را به انگلیسی بنویسید. پاسخ هم به انگلیسی خواهد بود. | Debrief (/fa/debrief) | NEW: Persian pages only (no English text) |
| `debrief.placeholder` | e.g. My landlord said he'd 'sort it when he gets a chance' about the broken boiler and it's been three weeks | e.g. My landlord said he'd 'sort it when he gets a chance' about the broken boiler and it's been three weeks | Debrief (/fa/debrief) | Same text in both (English on purpose) |
| `debrief.voiceInput` | Voice input (not wired up in this shell) | ورودی صوتی (هنوز فعال نیست) | Debrief (/fa/debrief) |  |
| `debrief.submit` | Explain this | دریافت توضیح | Debrief (/fa/debrief) |  |
| `debrief.thinking` | Thinking… | در حال بررسی… | Debrief (/fa/debrief) |  |
| `debrief.englishOnly` | Please write in English. Debrief only reads English for now. | لطفاً به انگلیسی بنویسید. تحلیل موقعیت فعلاً فقط متن انگلیسی را بررسی می‌کند. | Debrief (/fa/debrief) |  |
| `debrief.followUpEyebrow` | One quick check | یک پرسش کوتاه | Debrief (/fa/debrief) |  |
| `debrief.followUpPlaceholder` | Your answer | پاسخ شما (به انگلیسی) | Debrief (/fa/debrief) |  |
| `debrief.send` | Send | ارسال | Debrief (/fa/debrief) |  |
| `debrief.genericError` | Something went wrong. Please try again. | مشکلی پیش آمد. لطفاً دوباره امتحان کنید. | Debrief (/fa/debrief) |  |
| `debrief.rateLimited` | Too many requests, please wait a moment and try again | تعداد درخواست‌ها زیاد بوده است. لطفاً کمی صبر کنید و دوباره امتحان کنید. | Debrief (/fa/debrief) |  |
| `debrief.noMatchTitle` | No close match yet | هنوز مورد نزدیکی پیدا نشد | Debrief (/fa/debrief) |  |
| `debrief.noMatchMessage` | *(not shown in English)* | برای این مورد هنوز تطابق نزدیکی پیدا نکردیم. ممکن است خارج از موضوعاتی باشد که Chat British تا امروز پوشش می‌دهد، اما از اینکه آن را با ما در میان گذاشتید سپاسگزاریم. | Debrief (/fa/debrief) | NEW: Persian pages only (no English text) |
| `debrief.tryDifferently` | Try describing it differently | آن را طور دیگری شرح دهید | Debrief (/fa/debrief) |  |
| `debrief.surfaceSignal` | Surface signal | نشانهٔ ظاهری | Debrief (/fa/debrief) |  |
| `debrief.whatItMeans` | What it actually means | منظور واقعی | Debrief (/fa/debrief) |  |
| `debrief.suggestedResponse` | Suggested response | پاسخ پیشنهادی | Debrief (/fa/debrief) |  |
| `debrief.practiseNorm` | Practise this norm | تمرین همین هنجار | Debrief (/fa/debrief) |  |
| `debrief.describeAnother` | Describe another moment | شرح لحظه‌ای دیگر | Debrief (/fa/debrief) |  |

## Choices worth a second look

- **Debrief is named "تحلیل موقعیت"** ("situation analysis"); the header shortens it to **"تحلیل"** so the phone header fits on one line.
- **Practice and Debrief text the user can't control is English by design**, and the Persian pages say so (`practice.scenariosInEnglish`, `home.practiceTourNote`, `debrief.englishNote`).
- **Debrief only accepts English.** Text that is mostly Persian (30% or more Arabic-script letters) is stopped in the browser before anything is sent, with `debrief.englishOnly`. On the English /debrief page the same message appears in English and Persian.
- **Onboarding accepts any language** for "what's been confusing". Persian text is saved as written but not classified; `onboarding.struggleLanguageNote` tells people English gives a more accurate starting point. Stored answers (situations, household, time in the UK, role, sector, goal) stay the canonical English values whatever language the page is in.
- **The no-match message** (`debrief.noMatchMessage`) translates the fixed English text the server sends ("I couldn't find a close match for this one yet…").
- **"Privacy" in the footer** reads "حریم خصوصی (به انگلیسی)", because it opens the English notice.
