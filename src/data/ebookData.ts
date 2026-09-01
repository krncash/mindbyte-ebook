import {
  EbookBenefit,
  EbookChapter,
  EbookPagePreview,
  AudienceCard,
  FaqItem,
  PaymentStep
} from '../types';

export const BENEFITS: EbookBenefit[] = [
  {
    id: 'learn-faster',
    title: 'Learn Faster',
    description: 'Use AI to understand difficult topics, summarize information, create study plans and learn more efficiently.',
    iconName: 'Sparkles'
  },
  {
    id: 'work-smarter',
    title: 'Work Smarter',
    description: 'Use AI for writing, brainstorming, research, planning and repetitive tasks.',
    iconName: 'Briefcase'
  },
  {
    id: 'save-time',
    title: 'Save Time',
    description: 'Turn time-consuming everyday tasks into simple AI-assisted workflows.',
    iconName: 'Clock'
  },
  {
    id: 'write-better-prompts',
    title: 'Write Better Prompts',
    description: 'Learn how to communicate with AI properly instead of randomly asking questions.',
    iconName: 'MessageSquareText'
  },
  {
    id: 'everyday-ai',
    title: 'Everyday AI',
    description: 'Use AI for emails, ideas, planning, productivity, learning and daily problem-solving.',
    iconName: 'Layers'
  },
  {
    id: 'become-ai-confident',
    title: 'Become AI Confident',
    description: 'Understand how to use AI without needing technical knowledge.',
    iconName: 'ShieldCheck'
  }
];

export const CHAPTERS: EbookChapter[] = [
  {
    number: '01',
    title: 'Understanding AI Without the Technical Jargon',
    summary: 'Demystifying large language models into simple everyday analogies so you grasp what AI is and isn’t.',
    highlights: ['The real mental model of modern AI', 'What AI models can vs. cannot do reliably', 'Zero math or coding required']
  },
  {
    number: '02',
    title: 'How to Talk to AI Properly',
    summary: 'Mastering conversational context and guiding the AI step-by-step toward the exact format you need.',
    highlights: ['Avoiding the empty query trap', 'Setting persona, role, and tone constraints', 'Iterative refining techniques']
  },
  {
    number: '03',
    title: "The Beginner's Prompting System",
    summary: 'A simple 4-part framework (Goal, Context, Constraint, Format) that delivers accurate results on the first attempt.',
    highlights: ['The 4-part prompt formula', 'Template vault for daily requests', 'Transforming vague thoughts into crisp instructions']
  },
  {
    number: '04',
    title: 'AI for Students & Learning',
    summary: 'Turning AI into a 24/7 personal tutor for exam prep, concept breakdown, flashcards, and language practice.',
    highlights: ['Feynman technique prompting for tough subjects', 'Custom quiz generation', 'Extracting core insights from lengthy PDFs']
  },
  {
    number: '05',
    title: 'AI for Work & Productivity',
    summary: 'Streamlining daily office routines, meeting summaries, spreadsheet formulas, and task prioritization.',
    highlights: ['Rapid email drafting and polish', 'Formula generation for Excel/Sheets', 'Structuring chaotic project notes']
  },
  {
    number: '06',
    title: 'AI for Writing & Communication',
    summary: 'Enhancing essays, blog posts, professional messages, and social content while preserving your unique voice.',
    highlights: ['Tone calibration without sounding robotic', 'Structuring arguments and outlines', 'Polishing grammar and clarity']
  },
  {
    number: '07',
    title: 'AI for Research & Information',
    summary: 'Synthesizing dense articles, contrasting viewpoints, fact-checking principles, and organizing knowledge.',
    highlights: ['Rapid document synthesis', 'Cross-referencing claims safely', 'Overcoming hallucination blind spots']
  },
  {
    number: '08',
    title: 'AI for Everyday Life',
    summary: 'Practical household utility: meal planning with what’s in your fridge, budgeting, travel itineraries, and gift ideas.',
    highlights: ['Dynamic pantry-based meal planners', '7-day balanced travel itineraries', 'Personal habit & routine builders']
  },
  {
    number: '09',
    title: 'AI Tools You Should Know',
    summary: 'A clear, unbiased landscape of free and accessible AI tools across chat, audio, documents, and search.',
    highlights: ['Chatbots vs. specialized tools', 'Best free utilities for beginners', 'When to use web-grounded models']
  },
  {
    number: '10',
    title: 'Building Your Personal AI Workflow',
    summary: 'Creating a tailored daily checklist and saved prompt library that slots directly into your real routine.',
    highlights: ['Morning briefing prompt systems', 'Creating your private prompt library', 'Automating weekly review rituals']
  },
  {
    number: '11',
    title: 'Common AI Mistakes',
    summary: 'Critical pitfalls to avoid: blind trust, poor formatting, security hygiene, and prompt bloat.',
    highlights: ['Privacy and sensitive data rules', 'Why generic prompts produce generic fluff', 'Spotting subtle errors in AI output']
  },
  {
    number: '12',
    title: 'The Practical AI Action Plan',
    summary: 'A structured 7-day checklist to put your new AI skills to work and see measurable time savings immediately.',
    highlights: ['Day-by-day implementation exercises', 'Measuring weekly hours saved', 'Long-term AI adaptability']
  }
];

export const PAGE_PREVIEWS: EbookPagePreview[] = [
  {
    id: 'page-1',
    pageNumber: 18,
    chapterTitle: 'Chapter 03: The Beginner’s Prompting System',
    title: 'The 4-Part Prompt Architecture',
    content: [
      'Most people type a 5-word sentence into an AI chat and wonder why the answer is generic. Think of AI not as a magic mind-reader, but as a brilliant assistant who has just walked into the room.',
      'To get pristine output on your first try, structure every prompt with four clear pillars: Role, Context, Task, and Constraint.',
      'For example: "Act as a senior editor (Role). I am writing an email to reschedule a client meeting without losing their goodwill (Context). Draft 2 polite options under 80 words each (Task & Constraint)."'
    ],
    takeaway: 'Key Takeaway: Clear constraints save more time than long, rambling queries.'
  },
  {
    id: 'page-2',
    pageNumber: 34,
    chapterTitle: 'Chapter 05: AI for Work & Productivity',
    title: 'Transforming 45-Minute Tasks into 3 Minutes',
    content: [
      'Repetitive writing and formatting consume nearly 35% of an average knowledge worker’s day. AI handles formatting and initial drafting effortlessly.',
      'Instead of starting with a blank screen, paste your raw, unorganized bullet points and ask the AI: "Organize these notes into a 3-point executive summary with action items and owners assigned."',
      'You instantly skip the hardest cognitive hurdle: moving from zero to a solid first draft.'
    ],
    takeaway: 'Key Takeaway: Use AI as a drafting engine, not an unverified final publisher.'
  },
  {
    id: 'page-3',
    pageNumber: 52,
    chapterTitle: 'Chapter 08: AI for Everyday Life',
    title: 'The "Pantry-to-Plate" Everyday Assistant',
    content: [
      'AI isn’t just for corporate spreadsheets or academic papers—it solves daily decision fatigue.',
      'Open your refrigerator, list 5 random ingredients you have on hand, and prompt: "Suggest 2 high-protein dinners using only these ingredients in under 25 minutes, with step-by-step cooking instructions."',
      'Within seconds, your weeknight meal dilemma is resolved with zero grocery waste.'
    ],
    takeaway: 'Key Takeaway: AI shines brightest when removing mundane everyday decision fatigue.'
  }
];

export const AUDIENCE_LIST: AudienceCard[] = [
  {
    id: 'students',
    role: 'Students',
    useCase: 'Break down complex concepts, build study schedules, and master exam prep without getting overwhelmed.',
    iconName: 'GraduationCap'
  },
  {
    id: 'beginners',
    role: 'Beginners',
    useCase: 'Start using AI from day one with simple English and zero technical background or coding required.',
    iconName: 'Compass'
  },
  {
    id: 'freelancers',
    role: 'Freelancers',
    useCase: 'Write proposals faster, draft client emails, and brainstorm creative projects in a fraction of the time.',
    iconName: 'Laptop'
  },
  {
    id: 'creators',
    role: 'Creators',
    useCase: 'Generate content outlines, research topics, refine video scripts, and organize creative ideas smoothly.',
    iconName: 'PenTool'
  },
  {
    id: 'professionals',
    role: 'Professionals',
    useCase: 'Speed up reports, streamline communication, polish spreadsheets, and eliminate repetitive daily work.',
    iconName: 'TrendingUp'
  },
  {
    id: 'everyone',
    role: 'Anyone Curious',
    useCase: 'Anyone who wants to practically benefit from the AI revolution without getting lost in theoretical hype.',
    iconName: 'Users'
  }
];

export const PAYMENT_STEPS: PaymentStep[] = [
  {
    step: 1,
    title: 'Click "Buy the Ebook"',
    description: 'Click any order button across the page to start the purchase process.'
  },
  {
    step: 2,
    title: 'Redirect to WhatsApp',
    description: 'You’ll be redirected to WhatsApp with the order details pre-filled and ready to send.'
  },
  {
    step: 3,
    title: 'Receive Official QR Code',
    description: 'The MindByte seller will provide the official UPI payment QR code inside the chat.'
  },
  {
    step: 4,
    title: 'Complete ₹79 Payment',
    description: 'Scan the official QR code via any UPI app (GPay, PhonePe, Paytm, BHIM) to pay ₹79.'
  },
  {
    step: 5,
    title: 'Share Payment UTR / Ref',
    description: 'Send the transaction reference / UTR screenshot in the WhatsApp conversation.'
  },
  {
    step: 6,
    title: 'Ebook Delivered',
    description: 'After manual payment verification, your digital ebook is delivered directly on WhatsApp.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How much does the ebook cost?',
    answer: 'The ebook is priced at exactly ₹79 (one-time payment, no hidden recurring fees).'
  },
  {
    id: 'faq-2',
    question: 'How do I buy it?',
    answer: 'Click the Buy button on this page. It will automatically open WhatsApp with a pre-formatted order message. Simply send the message to initiate your order with the seller.'
  },
  {
    id: 'faq-3',
    question: 'How do I pay?',
    answer: 'The seller will provide the official payment QR code and UPI instructions directly inside the verified WhatsApp conversation.'
  },
  {
    id: 'faq-4',
    question: 'How will I receive the ebook?',
    answer: 'After you complete the ₹79 payment and share your UTR/reference number, the seller will verify the transaction and send the digital ebook file (PDF) directly to your WhatsApp or via a secure download link.'
  },
  {
    id: 'faq-5',
    question: 'Is this a physical book?',
    answer: 'No. This is a 100% digital ebook (PDF format) optimized for reading on smartphones, tablets, laptops, and e-readers.'
  },
  {
    id: 'faq-6',
    question: 'Can I get a refund?',
    answer: 'Digital products are generally non-returnable once delivered since instant access to the digital file is provided. If you encounter any technical issues receiving your file, our team will gladly assist you immediately via WhatsApp or email.'
  },
  {
    id: 'faq-7',
    question: 'Do I need technical knowledge?',
    answer: 'No! The ebook is written in straightforward, jargon-free English specifically for beginners, students, and professionals who have never used AI before.'
  }
];
