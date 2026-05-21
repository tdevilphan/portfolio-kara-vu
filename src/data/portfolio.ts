export type SkillGroup = {
  title: string;
  color: "violet" | "cyan" | "yellow" | "green" | "orange" | "blue";
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type WorkItem = {
  slug: string;
  title: string;
  status: "Case study in progress";
  objective: string;
  role: string;
  channels: string[];
  summary: string;
  detail: string[];
};

export const profile = {
  name: "Vu Thi Bich Ngoc",
  role: "Marketing Specialist",
  location: "Ha Dong, Hanoi, Vietnam",
  headline: "Vu Thi Bich Ngoc - Marketing Specialist",
  subheadline:
    "I connect brand, content, performance marketing, CRM/email, and strategy into clear marketing systems.",
  bio:
    "Marketing Specialist with experience across brand planning, content development, campaign coordination, CRM/email, and performance monitoring. I focus on clear strategy, consistent brand execution, and practical collaboration across teams.",
  email: "ngocvu.211299@gmail.com",
  phone: "0962605693",
  cvPath: "/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf",
  facebookUrl: "https://www.facebook.com/ngocvu.1299/",
  linkedinUrl: "",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Strategy",
    color: "violet",
    skills: [
      "Marketing strategy",
      "Integrated planning",
      "Positioning",
      "KPI monitoring",
    ],
  },
  {
    title: "Brand & Content",
    color: "yellow",
    skills: [
      "Brand marketing",
      "Content marketing",
      "Visual storytelling",
      "Social content",
    ],
  },
  {
    title: "Performance",
    color: "cyan",
    skills: [
      "Performance tracking",
      "Campaign optimization",
      "Reporting",
      "Insight synthesis",
    ],
  },
  {
    title: "CRM & Email",
    color: "green",
    skills: [
      "CRM planning",
      "Email journeys",
      "Retention thinking",
      "Audience segments",
    ],
  },
  {
    title: "Collaboration",
    color: "orange",
    skills: [
      "Cross-team coordination",
      "Product alignment",
      "External partners",
      "Board reporting",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "BCC IT Innovation",
    role: "MARKETING SPECIALIST",
    period: "Sep 2025 - Present",
    summary:
      "Led integrated marketing strategies aligned with business objectives across brand, digital, and on-ground channels.",
    highlights: [
      "Developed brand positioning frameworks, company profiles, and brand decks to strengthen brand identity.",
      "Ensured consistent brand experience across websites, social media, and digital platforms.",
      "Collaborated with product, sales, leadership teams, and external partners to support business growth and market fit.",
      "Monitored campaign performance, tracked key KPIs, and delivered strategic insights and recommendations to the BOD.",
    ],
    tags: [
      "Strategy",
      "Brand positioning",
      "Integrated planning",
      "Performance monitoring",
    ],
  },
  {
    company: "SConnect Group",
    role: "BRAND MARKETING SPECIALIST",
    period: "Sep 2023 - Sep 2025",
    summary:
      "Developed and maintained brand identity assets, including company profiles, brand guidelines, brochures, and marketing materials.",
    highlights: [
      "Enhanced brand visibility through industry awards, trade fairs, exhibitions, and community engagement activities.",
      "Managed brand communication across social media, website, email marketing, and event channels to strengthen audience engagement.",
      "Ensured consistent brand visuals and messaging across all platforms and marketing touchpoints.",
      "Led brand campaigns and activation activities, including School Tours, Cinetour, and in-cinema promotional programs.",
      "Created pitch decks and promotional materials to support business development and partnership opportunities.",
      "Coordinated project execution, budget tracking, and collaborator management to ensure operational efficiency and campaign effectiveness.",
    ],
    tags: ["Brand development", "Awards presence", "Visibility", "Communication"],
  },
  {
    company: "5BIT Agency",
    role: "MARKETING PLANNER",
    period: "Feb 2023 - Sep 2023",
    summary:
      "Received client briefs and developed strategic marketing plans aligned with campaign objectives and brand direction.",
    highlights: [
      "Conducted market, audience, and competitor research to identify insights, positioning, and communication opportunities.",
      "Planned and coordinated integrated campaigns across digital and social media channels.",
      "Worked closely with creative, content, and performance teams to ensure effective campaign execution and consistency.",
      "Managed project timelines, KPIs, budgets, and campaign performance reporting for clients.",
      "Collaborated with clients, KOLs, and partners throughout planning and execution processes.",
    ],
    tags: ["Planning", "Research", "Campaigns", "Client coordination"],
  },
  {
    company: "AHT Tech",
    role: "DIGITAL MARKETING EXECUTIVE",
    period: "Mar 2021 - Feb 2023",
    summary:
      "Specialized in SEO content development and website optimization across WordPress, Magento, and Webflow platforms.",
    highlights: [
      "Experienced in keyword research, content planning, and producing SEO-focused blogs and landing pages to enhance organic visibility.",
      "Managed owned media channels, including websites, social media, and email marketing platforms.",
      "Monitored channel performance and optimized content effectiveness through data-driven reporting and analysis.",
    ],
    tags: ["SEO", "Content", "Owned media", "Analytics"],
  },
];

export const works: WorkItem[] = [
  {
    slug: "bcc-marketing-strategy-brand-positioning",
    title: "Marketing Strategy & Brand Positioning",
    status: "Case study in progress",
    objective:
      "Build a clearer marketing direction across brand, digital, social, and on-ground channels.",
    role: "Marketing strategy, integrated planning, brand deck, positioning, and performance monitoring.",
    channels: ["Brand", "Digital", "Social", "On-ground", "Reporting"],
    summary:
      "A structured work sample for BCC IT Innovation. Detailed outcomes and visuals will be added when available.",
    detail: [
      "Defined marketing strategy aligned with business goals.",
      "Built integrated plans across key communication channels.",
      "Created brand profile and positioning materials.",
      "Monitored campaign performance and synthesized recommendations.",
    ],
  },
  {
    slug: "sconnect-brand-visibility-awards",
    title: "Brand Visibility & Awards Presence",
    status: "Case study in progress",
    objective:
      "Increase brand credibility through visibility initiatives and award participation.",
    role: "Brand marketing support, content coordination, and communication consistency.",
    channels: ["Brand", "Awards", "Content", "Communications"],
    summary:
      "A structured placeholder for SConnect Group brand visibility work. Detailed assets will be added later.",
    detail: [
      "Supported participation in domestic and international awards.",
      "Contributed to brand visibility and credibility-building activities.",
      "Helped maintain consistency across selected communication materials.",
    ],
  },
  {
    slug: "performance-crm-email-growth-system",
    title: "Performance & CRM/Email Growth System",
    status: "Case study in progress",
    objective:
      "Connect content, audience segments, CRM/email, and performance learning into a practical growth system.",
    role: "Framework planning for performance tracking, CRM/email journeys, and optimization loops.",
    channels: ["Performance", "CRM", "Email", "Content", "Analytics"],
    summary:
      "A future work sample reserved for performance and CRM/email examples once concrete data is available.",
    detail: [
      "Map content and audience segments into measurable journeys.",
      "Define tracking signals for campaign and CRM/email performance.",
      "Use insights to improve future content, audience, and channel decisions.",
    ],
  },
];
