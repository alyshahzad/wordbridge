import type { Article, Category, Difficulty } from "@/lib/types";

export const articles: Article[] = [
  {
    id: "city-parks",
    title: "The Quiet Return of City Parks",
    description:
      "How neglected urban green space became a practical tool for cooler, healthier neighborhoods.",
    category: "Environment",
    difficulty: "beginner",
    readingTime: 5,
    author: "Maya Chen",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "city-parks-resilient",
        word: "resilient",
        partOfSpeech: "adjective",
        pronunciation: "/rɪˈzɪliənt/",
        definition: "Able to recover or adapt after difficulty.",
        contextualMeaning: "The city was able to recover from environmental challenges.",
        example: "She remained resilient despite several setbacks.",
      },
      {
        id: "city-parks-canopy",
        word: "canopy",
        partOfSpeech: "noun",
        pronunciation: "/ˈkænəpi/",
        definition: "The upper layer of trees that covers an area like a roof.",
        contextualMeaning: "Tree cover that shades streets and lowers heat.",
        example: "A dense canopy kept the playground several degrees cooler.",
      },
      {
        id: "city-parks-restoration",
        word: "restoration",
        partOfSpeech: "noun",
        pronunciation: "/ˌrɛstəˈreɪʃən/",
        definition: "The act of returning something to a healthier or earlier condition.",
        contextualMeaning: "Repairing damaged parks rather than replacing them.",
        example: "The restoration of the riverbank took three summers.",
      },
      {
        id: "city-parks-sanctuary",
        word: "sanctuary",
        partOfSpeech: "noun",
        pronunciation: "/ˈsæŋktʃuˌɛri/",
        definition: "A place of safety, rest, or protection.",
        contextualMeaning: "Parks as quiet places people can recover in a busy city.",
        example: "The courtyard became a sanctuary between classes.",
      },
      {
        id: "city-parks-biodiversity",
        word: "biodiversity",
        partOfSpeech: "noun",
        pronunciation: "/ˌbaɪoʊdaɪˈvɜrsəti/",
        definition: "The variety of living plants and animals in an environment.",
        contextualMeaning: "A wider mix of plants and insects returning to the parks.",
        example: "Planting native species increased local biodiversity.",
      },
      {
        id: "city-parks-steward",
        word: "steward",
        partOfSpeech: "verb",
        pronunciation: "/ˈstuərd/",
        definition: "To take responsible care of something over time.",
        contextualMeaning: "Residents helping to look after parks after they reopen.",
        example: "Volunteers agreed to steward the new community garden.",
      },
    ],
    content: `For years, several downtown parks were treated as leftover space. Grass browned in summer. Benches broke and stayed broken. On the hottest days, people crossed those blocks as quickly as they could.

That began to change after a sequence of record heat waves. City planners noticed a simple pattern: neighborhoods with tree cover stayed cooler, and people used those streets more. The city became more {{resilient}} after years of environmental challenges, not by building one grand park, but by repairing many small ones.

The work was practical. Crews widened soil pits so roots could breathe. They planted a mixed {{canopy}} instead of a single decorative species. Paths were shifted so rain could soak into the ground rather than race toward drains. None of this looked dramatic from a distance. Up close, the parks started to feel like rooms again.

{{Restoration}} also changed who showed up. Parents stayed for longer afternoons. Office workers ate lunch under shade that had not existed two summers earlier. Bird counts rose. So did the number of insects that need native plants. A modest increase in {{biodiversity}} was not the headline, but it was evidence that the land was doing more than decorating the skyline.

The most interesting shift was social. Parks became a {{sanctuary}} in neighborhoods that had little private outdoor space. Local groups offered to {{steward}} the plantings after the contractors left. The city still owns the land, but the care is shared. That may be the quiet lesson: green space lasts when people have a reason to keep returning.`,
    comprehension: [
      {
        id: "city-parks-q1",
        question: "What mainly convinced the city to repair its parks?",
        options: [
          "A desire to host international sports events",
          "Evidence that tree cover reduced heat and drew people outside",
          "A law that banned all new construction downtown",
          "Complaints about too many tourists in existing gardens",
        ],
        correctIndex: 1,
        explanation:
          "The article says planners noticed neighborhoods with tree cover stayed cooler and were used more after heat waves.",
      },
      {
        id: "city-parks-q2",
        question: "According to the passage, what made the restoration last?",
        options: [
          "Hiring a single famous landscape architect",
          "Replacing every park with a shopping plaza",
          "Shared care from residents after the official work ended",
          "Closing the parks at night to protect new plants",
        ],
        correctIndex: 2,
        explanation:
          "The closing argument is that parks last when people keep returning and help steward them.",
      },
    ],
  },
  {
    id: "reliable-software",
    title: "How Small Teams Build Reliable Software",
    description:
      "Reliability is less a heroic all-nighter than a habit of noticing problems early.",
    category: "Technology",
    difficulty: "intermediate",
    readingTime: 6,
    author: "Jonah Ellis",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "reliable-software-incrementally",
        word: "incrementally",
        partOfSpeech: "adverb",
        pronunciation: "/ˌɪnkrəˈmɛntəli/",
        definition: "In small, regular steps rather than all at once.",
        contextualMeaning: "Teams improve products through small, frequent changes.",
        example: "They improved the search results incrementally each week.",
      },
      {
        id: "reliable-software-regression",
        word: "regression",
        partOfSpeech: "noun",
        pronunciation: "/rɪˈɡrɛʃən/",
        definition: "A return to a worse state; in software, a bug that reappears after a change.",
        contextualMeaning: "A new update accidentally breaking something that used to work.",
        example: "The login regression appeared only after the design refresh.",
      },
      {
        id: "reliable-software-observability",
        word: "observability",
        partOfSpeech: "noun",
        pronunciation: "/əbˌzɜrvəˈbɪləti/",
        definition: "The ability to understand a system’s internal state from its outputs.",
        contextualMeaning: "Logs and metrics that show what the product is doing in real use.",
        example: "Better observability helped the team find the slow query.",
      },
      {
        id: "reliable-software-bottleneck",
        word: "bottleneck",
        partOfSpeech: "noun",
        pronunciation: "/ˈbɑtəlˌnɛk/",
        definition: "A point of congestion that slows an entire process.",
        contextualMeaning: "One slow step that delayed every software release.",
        example: "Manual testing became the bottleneck before each launch.",
      },
      {
        id: "reliable-software-tradeoff",
        word: "tradeoff",
        partOfSpeech: "noun",
        pronunciation: "/ˈtreɪdˌɔf/",
        definition: "A balance between two competing benefits.",
        contextualMeaning: "Choosing speed of delivery against extra safety checks.",
        example: "Shipping sooner was a tradeoff against a longer review.",
      },
      {
        id: "reliable-software-deploy",
        word: "deploy",
        partOfSpeech: "verb",
        pronunciation: "/dɪˈplɔɪ/",
        definition: "To release a product or update so that users can use it.",
        contextualMeaning: "Putting a software change into the live product.",
        example: "They waited until evening to deploy the payment fix.",
      },
    ],
    content: `People imagine software reliability as a wall of tests and a brilliant architect. In small teams, it usually looks quieter. Someone notices that checkout failed twice on Tuesday. Someone else writes down what they know before the details evaporate.

The teams that stay calm tend to change {{incrementally}}. A large rewrite can hide ten mistakes. A small change is easier to reverse. That does not mean the work is timid. It means the team prefers a short feedback loop to a dramatic unveiling.

A {{regression}} is the tax on speed. You fix a date picker and, two days later, invoices print with the wrong year. The embarrassment is useful. It teaches the team to protect the paths that customers actually use, not the paths that look impressive in a demo.

This is why {{observability}} matters more than slogans about quality. If you cannot see a slow request, you cannot debate it. Dashboards are not decoration. They are how a five-person team borrows the eyesight of a much larger company.

Every process has a {{bottleneck}}. For some groups it is design review. For others it is waiting on a specialist to {{deploy}}. Removing the bottleneck is a {{tradeoff}}: faster releases can mean fewer manual checks. The mature move is to name the risk out loud, then add an automatic check where a human used to be the only safety net.

Reliability, in this sense, is a social skill. It is the habit of making problems visible while they are still cheap.`,
    comprehension: [
      {
        id: "reliable-software-q1",
        question: "Why does the article prefer incremental change?",
        options: [
          "Because large rewrites are illegal in most companies",
          "Because small changes are easier to understand and reverse",
          "Because customers never notice small updates",
          "Because tests are unnecessary when changes are tiny",
        ],
        correctIndex: 1,
        explanation:
          "The passage argues that small changes hide fewer mistakes and are easier to reverse than large rewrites.",
      },
      {
        id: "reliable-software-q2",
        question: "What role does observability play for a small team?",
        options: [
          "It replaces the need to talk to users",
          "It is mainly used to decorate internal dashboards",
          "It helps the team see real problems that would otherwise stay hidden",
          "It automatically writes all of the team’s code",
        ],
        correctIndex: 2,
        explanation:
          "Observability is described as a way for a small team to see what the product is doing in real use.",
      },
    ],
  },
  {
    id: "sleep-memory",
    title: "The Science of Sleep and Memory",
    description:
      "Sleep is not empty time. It is one of the brain’s most reliable study partners.",
    category: "Science",
    difficulty: "intermediate",
    readingTime: 6,
    author: "Dr. Leila Rahman",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "sleep-memory-consolidate",
        word: "consolidate",
        partOfSpeech: "verb",
        pronunciation: "/kənˈsɑlɪdeɪt/",
        definition: "To make something more stable or secure, often by combining parts.",
        contextualMeaning: "The brain strengthening new memories during sleep.",
        example: "A night of rest helped her consolidate what she had studied.",
      },
      {
        id: "sleep-memory-hippocampus",
        word: "hippocampus",
        partOfSpeech: "noun",
        pronunciation: "/ˌhɪpəˈkæmpəs/",
        definition: "A region of the brain important for forming new memories.",
        contextualMeaning: "The brain area that first holds many new facts and events.",
        example: "Damage to the hippocampus can make new memories hard to keep.",
      },
      {
        id: "sleep-memory-deprivation",
        word: "deprivation",
        partOfSpeech: "noun",
        pronunciation: "/ˌdɛprɪˈveɪʃən/",
        definition: "The state of not having something necessary.",
        contextualMeaning: "Not getting enough sleep, which weakens learning.",
        example: "Sleep deprivation made the exam questions feel heavier than they were.",
      },
      {
        id: "sleep-memory-circadian",
        word: "circadian",
        partOfSpeech: "adjective",
        pronunciation: "/sərˈkeɪdiən/",
        definition: "Related to the body’s roughly 24-hour biological rhythm.",
        contextualMeaning: "The daily body clock that shapes when we feel alert or tired.",
        example: "Late-night screens can disturb circadian timing.",
      },
      {
        id: "sleep-memory-retention",
        word: "retention",
        partOfSpeech: "noun",
        pronunciation: "/rɪˈtɛnʃən/",
        definition: "The ability to keep information in memory over time.",
        contextualMeaning: "How well students remember material after sleeping.",
        example: "Practice plus sleep improved retention more than practice alone.",
      },
      {
        id: "sleep-memory-restore",
        word: "restore",
        partOfSpeech: "verb",
        pronunciation: "/rɪˈstɔr/",
        definition: "To bring something back to a previous or healthier state.",
        contextualMeaning: "Sleep returning the brain to a state ready for new learning.",
        example: "A quiet weekend helped restore his concentration.",
      },
    ],
    content: `Students often treat sleep as optional, a luxury to be spent after the real work is done. The research points in the opposite direction. Much of what we call studying is only half finished until the brain has time to {{consolidate}} it.

During the day, the {{hippocampus}} is busy encoding. It takes in names, formulas, the shape of an argument. Overnight, those traces are replayed and gradually handed to longer-term networks. This is not a metaphor borrowed from computers. It is a physical process, and it is interrupted when nights become short.

{{Deprivation}} does more than make people irritable. It reduces the brain’s ability to select what matters. A tired student can reread a chapter and still fail to notice the structure. Attention slips. So does {{retention}}. The hours gained by staying awake are often spent relearning what sleep would have stored more cheaply.

Timing matters as well. {{Circadian}} rhythms influence when sleep is restorative. A lecture at 9 a.m. after a 3 a.m. study session is not a fair test of intelligence. It is a test of a body clock that has been pushed off its usual slope.

None of this suggests that effort is unimportant. It suggests that effort has a partner. Sleep does not invent knowledge, but it does {{restore}} the conditions under which knowledge can stay. For university work, that may be the least glamorous advantage available — and one of the most reliable.`,
    comprehension: [
      {
        id: "sleep-memory-q1",
        question: "What happens to many new memories during sleep?",
        options: [
          "They are deleted to make room for the next day",
          "They are strengthened and moved toward longer-term storage",
          "They remain exactly as they were at the moment of study",
          "They can only be formed if the person dreams about them",
        ],
        correctIndex: 1,
        explanation:
          "The article describes overnight replay that consolidates traces into longer-term networks.",
      },
      {
        id: "sleep-memory-q2",
        question: "Why can staying awake to study be inefficient?",
        options: [
          "Because libraries close at midnight",
          "Because tired attention leads students to relearn material sleep could have stored",
          "Because caffeine is not allowed during exams",
          "Because morning lectures are always recorded",
        ],
        correctIndex: 1,
        explanation:
          "Deprivation weakens attention and retention, so extra waking hours are often spent relearning.",
      },
    ],
  },
  {
    id: "street-food",
    title: "Street Food as Cultural Archive",
    description:
      "A stall can hold a family’s history more clearly than a museum label.",
    category: "Culture",
    difficulty: "beginner",
    readingTime: 5,
    author: "Rina Sari",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "street-food-heritage",
        word: "heritage",
        partOfSpeech: "noun",
        pronunciation: "/ˈhɛrɪtɪdʒ/",
        definition: "Traditions, practices, or objects passed down from earlier generations.",
        contextualMeaning: "Recipes and food habits that carry family and regional history.",
        example: "The festival was designed to protect local culinary heritage.",
      },
      {
        id: "street-food-vendor",
        word: "vendor",
        partOfSpeech: "noun",
        pronunciation: "/ˈvɛndər/",
        definition: "A person who sells goods, especially in a market or on the street.",
        contextualMeaning: "The cook who sells food from a stall or cart.",
        example: "The vendor remembered every regular customer’s usual order.",
      },
      {
        id: "street-food-ritual",
        word: "ritual",
        partOfSpeech: "noun",
        pronunciation: "/ˈrɪtʃuəl/",
        definition: "A set of actions performed in a regular, meaningful way.",
        contextualMeaning: "Repeated food habits that mark belonging, not only hunger.",
        example: "Sunday dumplings became a family ritual after they moved.",
      },
      {
        id: "street-food-diaspora",
        word: "diaspora",
        partOfSpeech: "noun",
        pronunciation: "/daɪˈæspərə/",
        definition: "People who have spread from an original homeland to other places.",
        contextualMeaning: "Communities cooking home foods far from where those foods began.",
        example: "Diaspora bakeries kept the old recipes nearly unchanged.",
      },
      {
        id: "street-food-authentic",
        word: "authentic",
        partOfSpeech: "adjective",
        pronunciation: "/ɔˈθɛntɪk/",
        definition: "Genuine; true to an original style or origin.",
        contextualMeaning: "Food that still reflects the cook’s own tradition, not a tourist copy.",
        example: "He wanted an authentic broth, not a milder version for visitors.",
      },
      {
        id: "street-food-palate",
        word: "palate",
        partOfSpeech: "noun",
        pronunciation: "/ˈpælət/",
        definition: "A person’s sense of taste, or their food preferences.",
        contextualMeaning: "The flavors a community grows up recognizing as home.",
        example: "Chili and lime shaped the local palate from childhood.",
      },
    ],
    content: `Museums keep objects behind glass. Cities keep other kinds of memory on paper plates. A bowl of noodle soup can tell you who arrived, who stayed, and which spices survived the journey.

Food {{heritage}} is often treated as a performance for visitors. On ordinary Tuesdays, it is more practical. A {{vendor}} stands in the same place because the rent is known and the lunch crowd is loyal. The recipe changes only when a child takes over, or when an ingredient disappears from the market.

Eating can be a {{ritual}}. Office workers return to the same stall not because they lack imagination, but because repetition is a form of rest. The first bite confirms that the day still has one predictable part.

In {{diaspora}} neighborhoods, the stall does extra work. It is a map. People find a flavor that matches a kitchen they can no longer visit. Arguments about what is {{authentic}} miss some of the point. The cook is not reproducing a textbook. The cook is feeding people who share a {{palate}} shaped by a particular home.

If those stalls vanish, a city does not only lose cheap meals. It loses an archive that was never written down. The record lived in muscle memory: how long to fry the shallots, how much lime is enough, which customers still want the old heat.`,
    comprehension: [
      {
        id: "street-food-q1",
        question: "What does the article compare street food to?",
        options: [
          "A museum archive of living memory",
          "A luxury dining trend",
          "A government nutrition program",
          "A replacement for home cooking everywhere",
        ],
        correctIndex: 0,
        explanation:
          "The essay treats stalls as an archive — memory held in recipes and habits rather than behind glass.",
      },
      {
        id: "street-food-q2",
        question: "Why do diaspora food stalls matter beyond selling lunch?",
        options: [
          "They are always cheaper than supermarkets",
          "They help people recognize flavors connected to a home they may have left",
          "They are required by tourism boards",
          "They only serve food invented in the last decade",
        ],
        correctIndex: 1,
        explanation:
          "In diaspora neighborhoods, stalls act as a map back to a palate and kitchen that may no longer be nearby.",
      },
    ],
  },
  {
    id: "public-libraries",
    title: "Why Public Libraries Still Matter",
    description:
      "A library is one of the last indoor places that asks almost nothing of you except curiosity.",
    category: "Education",
    difficulty: "beginner",
    readingTime: 5,
    author: "Helen Park",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "public-libraries-literacy",
        word: "literacy",
        partOfSpeech: "noun",
        pronunciation: "/ˈlɪtərəsi/",
        definition: "The ability to read and write, and more broadly to use information well.",
        contextualMeaning: "Libraries helping people gain reading skills and confidence.",
        example: "The evening class improved adult literacy in the neighborhood.",
      },
      {
        id: "public-libraries-civic",
        word: "civic",
        partOfSpeech: "adjective",
        pronunciation: "/ˈsɪvɪk/",
        definition: "Related to a city, citizenship, or public life.",
        contextualMeaning: "Libraries as part of shared public life, not only private study.",
        example: "Voting information sat on a civic noticeboard by the door.",
      },
      {
        id: "public-libraries-archive",
        word: "archive",
        partOfSpeech: "noun",
        pronunciation: "/ˈɑrkaɪv/",
        definition: "A collection of records, documents, or materials saved for the future.",
        contextualMeaning: "Local history and documents that libraries keep available.",
        example: "The newspaper archive showed how the waterfront used to look.",
      },
      {
        id: "public-libraries-equitable",
        word: "equitable",
        partOfSpeech: "adjective",
        pronunciation: "/ˈɛkwɪtəbəl/",
        definition: "Fair; offering people a just chance to access something.",
        contextualMeaning: "Making books, internet, and quiet space available regardless of income.",
        example: "Free tutoring was an equitable way to support exam students.",
      },
      {
        id: "public-libraries-commons",
        word: "commons",
        partOfSpeech: "noun",
        pronunciation: "/ˈkɑmənz/",
        definition: "A resource shared by a community rather than owned privately.",
        contextualMeaning: "The library as a shared room the public can use together.",
        example: "They treated the reading room as a commons, not a private office.",
      },
      {
        id: "public-libraries-access",
        word: "access",
        partOfSpeech: "noun",
        pronunciation: "/ˈæksɛs/",
        definition: "The ability or right to use or reach something.",
        contextualMeaning: "Being able to use books, computers, and quiet space without paying.",
        example: "Weekend hours improved access for students with weekday jobs.",
      },
    ],
    content: `A public library is easy to underestimate because it does not advertise itself like a shop. There is no urgency in the lighting. Nobody follows you with a basket. You can enter without a purchase and leave without an explanation.

That calm is the point. {{Literacy}} still begins with time and a text that does not vanish when the wifi drops. For children, the library is often the first place where books exist in a pile large enough to feel infinite. For adults returning to study, it is a room that takes their ambition seriously.

Libraries are also {{civic}} buildings. They host language classes, tax help, and job workshops. They keep an {{archive}} of local papers that never made it onto a polished website. In a city that sells almost every interior, they remain a {{commons}}.

The fairness is practical. An {{equitable}} institution is not one that pretends everyone starts equal. It is one that notices who lacks a desk, a printer, or a quiet hour, and then provides those things without a loyalty card. {{Access}} is the product.

People sometimes ask whether libraries are outdated because phones can hold a thousand titles. The better question is whether a city still wants a place where attention is not being sold. If the answer is yes, the library is not a leftover. It is infrastructure for thinking.`,
    comprehension: [
      {
        id: "public-libraries-q1",
        question: "What does the article say is the product a library offers?",
        options: [
          "Discounted textbooks for tourists",
          "Access to space, tools, and knowledge without a purchase",
          "A replacement for universities",
          "Free advertising for local shops",
        ],
        correctIndex: 1,
        explanation:
          "The essay argues that access — books, computers, quiet — is the product, not a purchase.",
      },
      {
        id: "public-libraries-q2",
        question: "Why does the author think phones do not make libraries obsolete?",
        options: [
          "Because phones cannot store any books",
          "Because libraries still provide a public place where attention is not being sold",
          "Because librarians ban all digital devices",
          "Because printed books never go out of date",
        ],
        correctIndex: 1,
        explanation:
          "The closing argument is that cities still need a place where attention is not a product.",
      },
    ],
  },
  {
    id: "economics-attention",
    title: "The Economics of Attention",
    description:
      "If a product is free, the scarce resource being spent may be your focus.",
    category: "Society",
    difficulty: "advanced",
    readingTime: 7,
    author: "Sofia Grant",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "economics-attention-scarce",
        word: "scarce",
        partOfSpeech: "adjective",
        pronunciation: "/skɛrs/",
        definition: "Available only in limited amounts; not plentiful.",
        contextualMeaning: "Human attention as a limited resource companies compete for.",
        example: "Quiet mornings became scarce once meetings filled the calendar.",
      },
      {
        id: "economics-attention-incentive",
        word: "incentive",
        partOfSpeech: "noun",
        pronunciation: "/ɪnˈsɛntɪv/",
        definition: "A reason or reward that encourages a particular action.",
        contextualMeaning: "Business reasons that push apps to keep people scrolling.",
        example: "A bonus created an incentive to finish the report early.",
      },
      {
        id: "economics-attention-friction",
        word: "friction",
        partOfSpeech: "noun",
        pronunciation: "/ˈfrɪkʃən/",
        definition: "Resistance that makes an action slower or more difficult.",
        contextualMeaning: "Small obstacles that make it harder to keep using an app endlessly.",
        example: "Removing checkout friction increased impulse purchases.",
      },
      {
        id: "economics-attention-harvest",
        word: "harvest",
        partOfSpeech: "verb",
        pronunciation: "/ˈhɑrvɪst/",
        definition: "To gather a crop, or more broadly to collect something of value.",
        contextualMeaning: "Companies collecting user attention and data as if they were a crop.",
        example: "The platform learned to harvest clicks from late-night browsing.",
      },
      {
        id: "economics-attention-cognitive",
        word: "cognitive",
        partOfSpeech: "adjective",
        pronunciation: "/ˈkɑɡnətɪv/",
        definition: "Related to thinking, understanding, and mental processes.",
        contextualMeaning: "The mental load of constant switching and interruption.",
        example: "Constant alerts increased her cognitive load during study.",
      },
      {
        id: "economics-attention-default",
        word: "default",
        partOfSpeech: "noun",
        pronunciation: "/dɪˈfɔlt/",
        definition: "The option that is used if no one actively chooses otherwise.",
        contextualMeaning: "Settings that quietly steer people toward more time in an app.",
        example: "Autoplay was the default, so the next video began without a decision.",
      },
    ],
    content: `Classical economics spent a long time on land, labor, and capital. A newer scarcity is quieter. Attention is {{scarce}} because a day still contains only so many unhurried hours, while the number of claims on those hours has exploded.

Once that is obvious, product design becomes easier to read. An {{incentive}} to maximize time-on-screen will not announce itself as greed. It will arrive as a smooth feed, a red badge, a video that begins before you have chosen it. The interface removes {{friction}} from continuing and adds friction to stopping.

In that market, companies {{harvest}} not only data but the conditions of thought. A student who checks messages “just for a second” pays in fragments. The cost is {{cognitive}}: working memory is small, and it does not enjoy being emptied for a notification and then asked to rebuild a paragraph.

The most powerful tool is the {{default}}. Few people dig through settings. If autoplay is on, autoplay is policy. If notifications arrive at full volume, interruption is the design, not an accident. This is why debates about willpower often miss the structure. Individuals can resist, but they are resisting a system that has professionalized persuasion.

None of this requires a moral panic about technology. It requires a more adult accounting. If attention is the resource, then the question is not only what a product costs in money. It is what it costs in the kind of mind you still have at 4 p.m.`,
    comprehension: [
      {
        id: "economics-attention-q1",
        question: "What does the article identify as a newly important scarce resource?",
        options: [
          "Gold used in phone manufacturing",
          "Human attention across a limited day",
          "University classroom seating",
          "Paper used for printed newspapers",
        ],
        correctIndex: 1,
        explanation:
          "The opening argument is that attention is scarce because the day is finite while claims on it have grown.",
      },
      {
        id: "economics-attention-q2",
        question: "Why are default settings so influential?",
        options: [
          "Because most people rarely change them, so the preset becomes the real policy",
          "Because defaults are illegal to change",
          "Because users always prefer whatever is loudest",
          "Because defaults only apply to children",
        ],
        correctIndex: 0,
        explanation:
          "The essay says few people dig through settings, so defaults quietly determine behavior.",
      },
    ],
  },
  {
    id: "coral-reefs",
    title: "Coral Reefs After Heat Waves",
    description:
      "Reefs can recover from heat, but only if the next shock arrives late enough.",
    category: "Environment",
    difficulty: "intermediate",
    readingTime: 6,
    author: "Daniel Okoye",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "coral-reefs-bleaching",
        word: "bleaching",
        partOfSpeech: "noun",
        pronunciation: "/ˈblitʃɪŋ/",
        definition: "The whitening of coral when it loses the algae that give it color and food.",
        contextualMeaning: "Heat causing corals to turn white and become weaker.",
        example: "The reef showed bleaching after weeks of unusually warm water.",
      },
      {
        id: "coral-reefs-symbiotic",
        word: "symbiotic",
        partOfSpeech: "adjective",
        pronunciation: "/ˌsɪmbaɪˈɑtɪk/",
        definition: "Describing a close relationship in which two organisms live together, often with mutual benefit.",
        contextualMeaning: "The partnership between coral and the algae that feed it.",
        example: "The symbiotic algae provide sugars the coral cannot make alone.",
      },
      {
        id: "coral-reefs-refuge",
        word: "refuge",
        partOfSpeech: "noun",
        pronunciation: "/ˈrɛfjudʒ/",
        definition: "A place that offers protection from danger.",
        contextualMeaning: "Cooler pockets of ocean where coral is more likely to survive heat.",
        example: "Deeper water offered a refuge during the hottest weeks.",
      },
      {
        id: "coral-reefs-threshold",
        word: "threshold",
        partOfSpeech: "noun",
        pronunciation: "/ˈθrɛʃhoʊld/",
        definition: "A point at which a condition begins to change sharply.",
        contextualMeaning: "The temperature limit beyond which coral cannot cope.",
        example: "Once the heat crossed a threshold, recovery became much slower.",
      },
      {
        id: "coral-reefs-recover",
        word: "recover",
        partOfSpeech: "verb",
        pronunciation: "/rɪˈkʌvər/",
        definition: "To return to a normal or healthy state after difficulty.",
        contextualMeaning: "Reefs returning to color and life after a heat event.",
        example: "Some colonies did recover when the water cooled in time.",
      },
      {
        id: "coral-reefs-ecosystem",
        word: "ecosystem",
        partOfSpeech: "noun",
        pronunciation: "/ˈikoʊˌsɪstəm/",
        definition: "A community of living things and their physical environment, interacting as a system.",
        contextualMeaning: "The whole reef community of coral, fish, and other life.",
        example: "Losing the coral weakened the entire coastal ecosystem.",
      },
    ],
    content: `Coral looks like stone, which is one reason people underestimate it. It is an animal in a tight {{symbiotic}} partnership with algae. The algae feed the coral. The coral offers shelter. When the water stays too warm, the partnership breaks. The algae leave, the color drains, and the event is called {{bleaching}}.

Bleaching is not always a death sentence. If temperatures fall, some colonies {{recover}}. The danger is repetition. A reef can survive one hard summer and fail the next if it has not had time to rebuild energy. Scientists talk about a {{threshold}}: past a certain combination of heat and duration, the living architecture begins to crumble.

Geography still offers a {{refuge}}. Deeper water, stronger currents, and shaded lagoons can buy time. Those places matter because a reef is not only coral. It is an {{ecosystem}} that feeds fish, protects shorelines, and supports people who have organized their work around the water.

The practical response is unglamorous. Cut the local stresses that a community can actually control: polluted runoff, destructive fishing, careless anchoring. Those cuts do not stop ocean warming. They make recovery more likely when a cooler season finally arrives.

Hope, in this field, is timed. It is the gap between shocks. Policy that lengthens that gap — even slightly — is not optimism as a mood. It is engineering for a living structure that still knows how to heal.`,
    comprehension: [
      {
        id: "coral-reefs-q1",
        question: "What causes coral bleaching in the article’s account?",
        options: [
          "Too much moonlight on shallow water",
          "Heat breaking the partnership between coral and algae",
          "Fish eating all of the reef’s color",
          "Scientists tagging coral with white markers",
        ],
        correctIndex: 1,
        explanation:
          "Warm water breaks the symbiotic relationship; algae leave and the coral turns white.",
      },
      {
        id: "coral-reefs-q2",
        question: "Why can reducing local damage still help reefs?",
        options: [
          "It completely stops global ocean warming",
          "It makes recovery more likely between heat events",
          "It turns coral into stone so heat cannot harm it",
          "It removes the need for fish in the ecosystem",
        ],
        correctIndex: 1,
        explanation:
          "Local stress reduction does not halt warming, but it improves the chance of recovery when water cools.",
      },
    ],
  },
  {
    id: "walkable-cities",
    title: "What Makes a City Walkable",
    description:
      "Walkability is not a lifestyle brand. It is a set of distances, shade, and reasons to stop.",
    category: "Society",
    difficulty: "intermediate",
    readingTime: 6,
    author: "Luis Navarro",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "walkable-cities-density",
        word: "density",
        partOfSpeech: "noun",
        pronunciation: "/ˈdɛnsəti/",
        definition: "The number of people or buildings in a given area.",
        contextualMeaning: "Enough homes and shops close together to make walking useful.",
        example: "Higher density put groceries within a ten-minute walk.",
      },
      {
        id: "walkable-cities-mixed-use",
        word: "mixed-use",
        partOfSpeech: "adjective",
        pronunciation: "/ˈmɪkst jus/",
        definition: "Combining homes, shops, and other functions in the same area.",
        contextualMeaning: "Neighborhoods where you can live, buy food, and work without long travel.",
        example: "The mixed-use street had apartments above bakeries and clinics.",
      },
      {
        id: "walkable-cities-proximity",
        word: "proximity",
        partOfSpeech: "noun",
        pronunciation: "/prɑkˈsɪməti/",
        definition: "Nearness in space or time.",
        contextualMeaning: "Daily needs being close enough to reach on foot.",
        example: "The proximity of the station made car ownership optional.",
      },
      {
        id: "walkable-cities-infrastructure",
        word: "infrastructure",
        partOfSpeech: "noun",
        pronunciation: "/ˈɪnfrəˌstrʌktʃər/",
        definition: "The basic physical systems a place needs, such as roads, water, and energy.",
        contextualMeaning: "Sidewalks, crossings, and shade that make walking safe and realistic.",
        example: "Broken infrastructure made the short walk feel longer than it was.",
      },
      {
        id: "walkable-cities-commute",
        word: "commute",
        partOfSpeech: "noun",
        pronunciation: "/kəˈmjut/",
        definition: "The regular journey between home and work or study.",
        contextualMeaning: "Daily travel that shrinks when more trips can be walked.",
        example: "Her commute fell from fifty minutes to eighteen after she moved.",
      },
      {
        id: "walkable-cities-livable",
        word: "livable",
        partOfSpeech: "adjective",
        pronunciation: "/ˈlɪvəbəl/",
        definition: "Pleasant and practical to live in.",
        contextualMeaning: "A neighborhood that feels comfortable in ordinary daily life.",
        example: "Shade and benches made the block more livable in summer.",
      },
    ],
    content: `A walkable city is often advertised with photographs of smiling people carrying coffee. The underlying design is less romantic. People walk when the walk is shorter than the alternative, and when the path does not treat them as an obstacle.

{{Density}} helps because empty distance is the enemy. If the bakery is two kilometers away, most people will not stroll there in the rain. {{Mixed-use}} streets help for the same reason. Homes, clinics, and shops sharing a block turn a journey into a chain of small errands.

{{Proximity}} is the real luxury. Not marble lobbies — a grocer, a bus stop, a school, and a bit of shade in between. Without that, walking becomes exercise rather than transport, and exercise is easier to skip.

The {{infrastructure}} is easy to ignore until it fails. A missing curb cut. A crossing that lasts four seconds. A sidewalk that ends at a parking entrance. These details decide whether a parent with a stroller attempts the trip. They also decide whether a {{commute}} can include walking at all.

When the parts align, a district becomes more {{livable}} without asking residents to become athletes. The city is simply arranged at the scale of a human stride. That is not nostalgia. It is a practical way to spend less of life waiting for a light to change.`,
    comprehension: [
      {
        id: "walkable-cities-q1",
        question: "According to the article, when do people actually walk?",
        options: [
          "Only when a city posts motivational slogans",
          "When walking is shorter and less hostile than the alternatives",
          "Only in cities with no buses",
          "When coffee shops pay them to be photographed",
        ],
        correctIndex: 1,
        explanation:
          "People walk when the walk is shorter than the alternative and the path does not treat them as an obstacle.",
      },
      {
        id: "walkable-cities-q2",
        question: "What does the author call the real luxury of a walkable place?",
        options: [
          "Marble lobbies",
          "Free taxis",
          "Proximity of daily needs",
          "Wider highways",
        ],
        correctIndex: 2,
        explanation:
          "Proximity — a grocer, stop, school, and shade nearby — is described as the real luxury.",
      },
    ],
  },
  {
    id: "myth-multitasking",
    title: "The Myth of Multitasking",
    description:
      "Doing two demanding things at once is usually just switching — and switching has a cost.",
    category: "Education",
    difficulty: "beginner",
    readingTime: 5,
    author: "Priya Nair",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "myth-multitasking-illusion",
        word: "illusion",
        partOfSpeech: "noun",
        pronunciation: "/ɪˈluʒən/",
        definition: "A false idea or appearance that is taken as real.",
        contextualMeaning: "The feeling of doing many things at once when the mind is only switching.",
        example: "The productivity illusion faded when she measured her actual output.",
      },
      {
        id: "myth-multitasking-interrupt",
        word: "interrupt",
        partOfSpeech: "verb",
        pronunciation: "/ˌɪntəˈrʌpt/",
        definition: "To stop something in the middle, or to break someone’s attention.",
        contextualMeaning: "Messages and tabs breaking a student’s concentration.",
        example: "Notifications interrupt even a short reading session.",
      },
      {
        id: "myth-multitasking-focus",
        word: "focus",
        partOfSpeech: "noun",
        pronunciation: "/ˈfoʊkəs/",
        definition: "The center of attention; concentrated effort on one thing.",
        contextualMeaning: "Sustained attention on a single academic task.",
        example: "Forty quiet minutes of focus beat two distracted hours.",
      },
      {
        id: "myth-multitasking-allocate",
        word: "allocate",
        partOfSpeech: "verb",
        pronunciation: "/ˈæləkeɪt/",
        definition: "To set aside resources for a particular purpose.",
        contextualMeaning: "Choosing how to spend limited attention across tasks.",
        example: "She decided to allocate the morning to one difficult chapter.",
      },
      {
        id: "myth-multitasking-costly",
        word: "costly",
        partOfSpeech: "adjective",
        pronunciation: "/ˈkɔstli/",
        definition: "Expensive, or causing significant loss.",
        contextualMeaning: "Task-switching wasting time and mental energy.",
        example: "Restarting the essay after each message proved costly.",
      },
      {
        id: "myth-multitasking-sustain",
        word: "sustain",
        partOfSpeech: "verb",
        pronunciation: "/səˈsteɪn/",
        definition: "To keep something going over time.",
        contextualMeaning: "Keeping attention on one task long enough to make progress.",
        example: "He could not sustain the argument with the television on.",
      },
    ],
    content: `Multitasking has an attractive reputation. It sounds like a talent, the academic version of being good in a crisis. In practice, for work that needs language and judgment, it is often an {{illusion}}. The mind does not hold two careful tasks at full strength. It switches.

Each switch looks cheap. You answer a message, then return to a paragraph. The paragraph is still on the screen, so it feels as if you never left. You did leave. You have to find the thread again. That restart is {{costly}}, even when it is fast.

Apps {{interrupt}} by design. A badge is a small social emergency. Students who keep a chat open while reading are not combining skills. They are training themselves to abandon a sentence. {{Focus}} is not a moral virtue here. It is a limited resource you either {{allocate}} or leak.

A more honest method is serial. One reading. Then one set of notes. Then a short break that is actually a break, not another feed. The point is not to become a machine. The point is to {{sustain}} attention long enough for an idea to become more than a heading.

University work rewards this kind of patience because the difficult part is rarely typing. It is noticing the structure of someone else’s argument, and then building your own. That noticing needs a quiet corridor in the mind.`,
    comprehension: [
      {
        id: "myth-multitasking-q1",
        question: "What does the article say the mind is usually doing instead of true multitasking?",
        options: [
          "Sleeping with its eyes open",
          "Switching between tasks and paying a restart cost",
          "Storing two essays in short-term memory forever",
          "Working faster without any loss of quality",
        ],
        correctIndex: 1,
        explanation:
          "The passage argues that the mind switches, and each return to a task has a restart cost.",
      },
      {
        id: "myth-multitasking-q2",
        question: "What study method does the author recommend?",
        options: [
          "Keeping every chat open for motivation",
          "Doing as many subjects as possible in the same minute",
          "Working on one demanding task at a time, then taking a real break",
          "Avoiding notes so the mind stays flexible",
        ],
        correctIndex: 2,
        explanation:
          "The honest method described is serial work: one task, then notes, then a genuine break.",
      },
    ],
  },
  {
    id: "shape-memory",
    title: "Materials That Remember Their Shape",
    description:
      "Some metals and polymers can return to a trained form — a quiet kind of intelligence in matter.",
    category: "Science",
    difficulty: "advanced",
    readingTime: 7,
    author: "Kenji Mori",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "shape-memory-alloy",
        word: "alloy",
        partOfSpeech: "noun",
        pronunciation: "/ˈælɔɪ/",
        definition: "A metal made by combining two or more metallic elements.",
        contextualMeaning: "A blended metal that can be trained to return to a shape.",
        example: "Nitinol is an alloy of nickel and titanium.",
      },
      {
        id: "shape-memory-revert",
        word: "revert",
        partOfSpeech: "verb",
        pronunciation: "/rɪˈvɜrt/",
        definition: "To return to a previous state or condition.",
        contextualMeaning: "The material going back to its original trained shape.",
        example: "When heated, the wire began to revert to a coil.",
      },
      {
        id: "shape-memory-stimulus",
        word: "stimulus",
        partOfSpeech: "noun",
        pronunciation: "/ˈstɪmjələs/",
        definition: "Something that causes a response or change.",
        contextualMeaning: "Heat or stress that triggers the material to change shape.",
        example: "A small temperature stimulus was enough to open the valve.",
      },
      {
        id: "shape-memory-implant",
        word: "implant",
        partOfSpeech: "noun",
        pronunciation: "/ˈɪmplænt/",
        definition: "A device or tissue placed inside the body for medical reasons.",
        contextualMeaning: "A medical device that uses shape-memory metal inside the body.",
        example: "The stent is an implant that expands once it is in place.",
      },
      {
        id: "shape-memory-fatigue",
        word: "fatigue",
        partOfSpeech: "noun",
        pronunciation: "/fəˈtiɡ/",
        definition: "Weakness in a material caused by repeated stress; also extreme tiredness.",
        contextualMeaning: "Repeated bending that can eventually make the metal fail.",
        example: "Engineers tested the wire for fatigue after thousands of cycles.",
      },
      {
        id: "shape-memory-engineer",
        word: "engineer",
        partOfSpeech: "verb",
        pronunciation: "/ˌɛndʒəˈnɪr/",
        definition: "To design or build something with a specific function in mind.",
        contextualMeaning: "Deliberately designing a material’s response to heat or force.",
        example: "Researchers tried to engineer a gentler unfolding motion.",
      },
    ],
    content: `Most objects are loyal to the last shape we gave them. A bent spoon stays bent. A small family of materials refuses that rule. A shape-memory {{alloy}} can be deformed and, after the right {{stimulus}}, {{revert}} to a form it was taught to treat as home.

The teaching is physical, not metaphorical. At one temperature the atomic structure prefers one arrangement; at another, it prefers a second. Heat is the most famous trigger. In some polymers, light or moisture can play a similar role. The practical magic is that the change can do work: close a valve, tighten a fastener, unfold a device.

Medicine noticed this early. A collapsed metal tube can travel through a blood vessel and then expand into an {{implant}} that keeps the vessel open. The body supplies the warmth. The material supplies a motion too small and too reliable for a surgeon’s fingers in that space.

Nothing about this is infinite. {{Fatigue}} still exists. Cycle a wire from shape to shape often enough and it will eventually refuse. That limit is why laboratories {{engineer}} not only the first transformation, but the thousandth.

The idea is larger than a clever metal. It suggests that objects can carry a stored instruction. The instruction is not software. It is geometry waiting for a cue. In a world that loves disposable devices, a material that can return — on purpose — feels like a different relationship with stuff.`,
    comprehension: [
      {
        id: "shape-memory-q1",
        question: "What allows a shape-memory alloy to return to a trained form?",
        options: [
          "A software update installed by the manufacturer",
          "A change in atomic arrangement after a stimulus such as heat",
          "Magnets hidden inside every household spoon",
          "The material’s desire to look new",
        ],
        correctIndex: 1,
        explanation:
          "Different temperatures favor different atomic arrangements, so heat can restore a trained shape.",
      },
      {
        id: "shape-memory-q2",
        question: "What medical example does the article use?",
        options: [
          "A metal tube that expands inside a blood vessel as an implant",
          "A spoon used to measure medicine",
          "A helmet that changes color in sunlight",
          "A phone case that never bends",
        ],
        correctIndex: 0,
        explanation:
          "A stent-like implant can travel collapsed and expand with body heat.",
      },
    ],
  },
  {
    id: "code-switching",
    title: "Language, Identity, and Code-Switching",
    description:
      "People often change how they speak to match a room. That shift can be skill, pressure, or both.",
    category: "Culture",
    difficulty: "advanced",
    readingTime: 7,
    author: "Amara Lewis",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "code-switching-register",
        word: "register",
        partOfSpeech: "noun",
        pronunciation: "/ˈrɛdʒɪstər/",
        definition: "A variety of language used in a particular social setting.",
        contextualMeaning: "A more formal or informal way of speaking chosen for the situation.",
        example: "She moved from a casual register to a careful one in the interview.",
      },
      {
        id: "code-switching-identity",
        word: "identity",
        partOfSpeech: "noun",
        pronunciation: "/aɪˈdɛntəti/",
        definition: "The qualities, beliefs, and relations that make a person who they are.",
        contextualMeaning: "How language choices express who someone is — or is expected to be.",
        example: "Language was part of his identity, not only a school subject.",
      },
      {
        id: "code-switching-context",
        word: "context",
        partOfSpeech: "noun",
        pronunciation: "/ˈkɑntɛkst/",
        definition: "The situation surrounding an event, word, or action that helps explain it.",
        contextualMeaning: "The social setting that makes one way of speaking more expected than another.",
        example: "The same joke failed because the context had changed.",
      },
      {
        id: "code-switching-fluency",
        word: "fluency",
        partOfSpeech: "noun",
        pronunciation: "/ˈfluənsi/",
        definition: "The ability to speak or write a language easily and accurately.",
        contextualMeaning: "Ease of movement between languages or styles of speech.",
        example: "Her fluency in both languages made the meeting smoother.",
      },
      {
        id: "code-switching-stigma",
        word: "stigma",
        partOfSpeech: "noun",
        pronunciation: "/ˈstɪɡmə/",
        definition: "Strong social disapproval attached to a person or characteristic.",
        contextualMeaning: "Judgment against a way of speaking that is treated as less legitimate.",
        example: "There was still a stigma attached to the regional accent at work.",
      },
      {
        id: "code-switching-belong",
        word: "belong",
        partOfSpeech: "verb",
        pronunciation: "/bɪˈlɔŋ/",
        definition: "To be accepted as a member of a group or place.",
        contextualMeaning: "Using language to be recognized as part of a community.",
        example: "Sharing the in-group slang helped him belong without a speech.",
      },
    ],
    content: `Almost everyone code-switches, even in a single language. You do not write an email the way you speak at a family table. The shift is a change of {{register}}: more distance, more care, sometimes more performance.

The stakes rise when the switch crosses languages, dialects, or accents that the world ranks unequally. Then the choice is not only stylistic. It touches {{identity}}. A student may keep one voice for campus and another for home, not because either voice is fake, but because each {{context}} rewards a different kind of clarity.

There is skill in this. {{Fluency}} is not merely a pile of words. It is knowing when a joke will travel and when it will drop. It is hearing the room. People who do this well are often described as adaptable, which is a polite way of saying they have been paying attention for years.

There can also be a {{stigma}}. Some ways of speaking are treated as intelligent by default; others must constantly prove themselves. Code-switching then becomes unpaid labor: the extra work of making other people comfortable. The person who can move between worlds is praised, while the worlds themselves stay ranked.

The healthiest reading is double. Switching can help someone {{belong}} without abandoning a first language. It can also signal that institutions still have a narrow idea of what a “professional” voice is allowed to sound like. A serious language education would teach the skill and question the ranking at the same time.`,
    comprehension: [
      {
        id: "code-switching-q1",
        question: "What is code-switching, as described in the article?",
        options: [
          "Forgetting one language forever",
          "Changing language, dialect, or register to fit a situation",
          "Using only slang in academic essays",
          "A medical condition related to speech",
        ],
        correctIndex: 1,
        explanation:
          "The essay describes shifting register, dialect, or language according to context.",
      },
      {
        id: "code-switching-q2",
        question: "What double reading does the author recommend?",
        options: [
          "Treat switching as both a skill and a possible response to unfair rankings of speech",
          "Ban all informal language in universities",
          "Assume every accent is equally rewarded at work",
          "Replace identity with grammar drills",
        ],
        correctIndex: 0,
        explanation:
          "The close argues we should teach the skill of switching and also question why some voices are ranked higher.",
      },
    ],
  },
  {
    id: "design-for-repair",
    title: "Designing for Repair, Not Replacement",
    description:
      "A product that can be opened, diagnosed, and fixed has a different relationship with time.",
    category: "Technology",
    difficulty: "intermediate",
    readingTime: 6,
    author: "Eva Holm",
    source: "WordBridge Essays",
    vocabulary: [
      {
        id: "design-for-repair-modular",
        word: "modular",
        partOfSpeech: "adjective",
        pronunciation: "/ˈmɑdʒələr/",
        definition: "Made of separate parts that can be replaced or rearranged independently.",
        contextualMeaning: "Products designed so a broken piece can be swapped without discarding the whole.",
        example: "The modular keyboard let her replace one switch at a time.",
      },
      {
        id: "design-for-repair-longevity",
        word: "longevity",
        partOfSpeech: "noun",
        pronunciation: "/lɔnˈdʒɛvəti/",
        definition: "Long life or lasting usefulness.",
        contextualMeaning: "How long a device remains usable because it can be maintained.",
        example: "Simple repairs increased the longevity of the bicycle.",
      },
      {
        id: "design-for-repair-waste",
        word: "waste",
        partOfSpeech: "noun",
        pronunciation: "/weɪst/",
        definition: "Material that is discarded because it is unused or unwanted.",
        contextualMeaning: "Electronics thrown away when a small part fails.",
        example: "A cracked battery should not turn the whole laptop into waste.",
      },
      {
        id: "design-for-repair-durable",
        word: "durable",
        partOfSpeech: "adjective",
        pronunciation: "/ˈdʊrəbəl/",
        definition: "Able to last a long time despite use and wear.",
        contextualMeaning: "Objects built to survive years of ordinary handling.",
        example: "A durable hinge is unexciting until it fails.",
      },
      {
        id: "design-for-repair-obsolete",
        word: "obsolete",
        partOfSpeech: "adjective",
        pronunciation: "/ˌɑbsəˈlit/",
        definition: "No longer produced, used, or considered useful.",
        contextualMeaning: "Devices treated as finished even when they could still work.",
        example: "The phone was called obsolete because the software updates had stopped.",
      },
      {
        id: "design-for-repair-repairable",
        word: "repairable",
        partOfSpeech: "adjective",
        pronunciation: "/rɪˈpɛrəbəl/",
        definition: "Able to be fixed rather than thrown away.",
        contextualMeaning: "A design that allows ordinary people or technicians to mend it.",
        example: "Screws instead of glue made the speaker repairable.",
      },
    ],
    content: `Modern products often fail in a small way and die in a large one. A battery swells. A port loosens. The rest of the machine is still intelligent, but the object is treated as finished. Design that anticipates this moment looks different from design that only anticipates a sale.

A {{modular}} device is easier to tell the truth about. One part can be guilty. The rest can stay. That architecture is a bet on {{longevity}}. It assumes the owner will still be there in five years, and that five years is a success rather than a missed upgrade.

The alternative produces {{waste}} at industrial scale. Not only metal and plastic, but the hours of mining, shipping, and assembly embedded in a machine that needed a hinge. A {{durable}} object is not a nostalgic aesthetic. It is a decision about which failures are allowed to be fatal.

Culture plays a role. If software can declare hardware {{obsolete}}, the physical world becomes a costume for a license. Right-to-repair laws try to reopen the object: manuals, parts, screws instead of secret glue. A {{repairable}} product returns some power to the person who already paid for it.

There is a quiet dignity in mending. It is slower than a new box on the doorstep. It also teaches a more accurate story about machines: they are assemblies, not magic, and assemblies can be known.`,
    comprehension: [
      {
        id: "design-for-repair-q1",
        question: "What problem does the article describe in many modern products?",
        options: [
          "They never fail at all",
          "A small failure is treated as the death of the whole object",
          "They can only be used outdoors",
          "They are too easy for anyone to open",
        ],
        correctIndex: 1,
        explanation:
          "The opening says products often fail in a small way and are then treated as finished.",
      },
      {
        id: "design-for-repair-q2",
        question: "What does a modular design make possible?",
        options: [
          "Replacing a guilty part without discarding the rest",
          "Never needing batteries again",
          "Hiding all screws from technicians",
          "Making software updates illegal",
        ],
        correctIndex: 0,
        explanation:
          "Modularity lets one part be replaced so the rest of the device can continue.",
      },
    ],
  },
];

export const topicOptions: Category[] = [
  "Technology",
  "Science",
  "Culture",
  "Environment",
  "Education",
  "Society",
];

export function getArticleById(id: string): Article | undefined {
  return articles.find((article) => article.id === id);
}

export function filterArticles(input: {
  query?: string;
  category?: Category | "all";
  difficulty?: Difficulty | "all";
}): Article[] {
  const query = input.query?.trim().toLowerCase() ?? "";
  return articles.filter((article) => {
    if (input.category && input.category !== "all" && article.category !== input.category) {
      return false;
    }
    if (input.difficulty && input.difficulty !== "all" && article.difficulty !== input.difficulty) {
      return false;
    }
    if (!query) return true;
    const vocab = article.vocabulary.map((item) => item.word).join(" ");
    const haystack = `${article.title} ${article.description} ${article.category} ${vocab}`.toLowerCase();
    return haystack.includes(query);
  });
}

export function relatedArticles(article: Article, limit = 3): Article[] {
  return articles
    .filter((item) => item.id !== article.id)
    .sort((a, b) => {
      const aScore =
        (a.category === article.category ? 2 : 0) + (a.difficulty === article.difficulty ? 1 : 0);
      const bScore =
        (b.category === article.category ? 2 : 0) + (b.difficulty === article.difficulty ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
}
