# Marketing Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vercel-ready Next.js portfolio for Vu Thi Bich Ngoc with colorful Behance-like visuals, smooth animation, desktop 3D/WebGL enhancement, CV download, contact links, case-study placeholders, and Microsoft Clarity readiness.

**Architecture:** Use a static-first Next.js App Router app. Content lives in typed data files, UI is split into focused section components, animation is isolated in client components/hooks, and WebGL is dynamically loaded with mobile/reduced-motion fallbacks.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, Lenis, Three.js, React Three Fiber, Drei, Lucide React, Playwright, Microsoft Clarity script integration.

---

## File Structure

Create or modify these files:

- `package.json`: scripts and dependencies.
- `tsconfig.json`: TypeScript config.
- `next.config.ts`: Next.js config.
- `postcss.config.mjs`: Tailwind PostCSS config.
- `tailwind.config.ts`: Tailwind theme, colors, animation tokens.
- `eslint.config.mjs`: Next lint config.
- `.gitignore`: ignore dependencies, build output, local env, and `.superpowers/`.
- `.env.example`: Clarity env placeholder.
- `README.md`: setup, development, Vercel, content replacement notes.
- `public/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf`: downloadable CV asset.
- `public/assets/images/.gitkeep`: future portrait/images directory.
- `src/app/layout.tsx`: root metadata, fonts, global shell, Clarity script.
- `src/app/page.tsx`: homepage composition.
- `src/app/work/[slug]/page.tsx`: case detail route.
- `src/app/not-found.tsx`: fallback page.
- `src/app/globals.css`: Tailwind base, CSS variables, background/grid helpers.
- `src/data/portfolio.ts`: typed profile, skills, experience, work, social data.
- `src/lib/analytics.ts`: Clarity event helper.
- `src/lib/links.ts`: contact URL helpers.
- `src/lib/motion.ts`: shared animation constants and reduced-motion utilities.
- `src/components/clarity-script.tsx`: production-only Microsoft Clarity script.
- `src/components/smooth-scroll.tsx`: Lenis provider/client initializer.
- `src/components/site-nav.tsx`: nav and CTA links.
- `src/components/hero.tsx`: hero content and CTA.
- `src/components/hero-scene.tsx`: dynamically loaded WebGL desktop hero.
- `src/components/hero-fallback.tsx`: lightweight non-WebGL hero visual.
- `src/components/profile-snapshot.tsx`: summary and capability chips.
- `src/components/skills-board.tsx`: grouped skills.
- `src/components/experience-timeline.tsx`: experience panels.
- `src/components/selected-work.tsx`: case-study cards.
- `src/components/work-card.tsx`: reusable work card.
- `src/components/contact-section.tsx`: Zalo/email/Facebook/LinkedIn links.
- `src/components/section-heading.tsx`: heading with kinetic reveal.
- `src/components/floating-badge.tsx`: shared colorful badge.
- `src/components/motion-reveal.tsx`: reusable Framer reveal wrapper.
- `tests/home.spec.ts`: Playwright homepage, CTA, responsive, console checks.
- `tests/work.spec.ts`: Playwright case detail route checks.
- `playwright.config.ts`: Playwright webServer config.

No contact API route is needed.

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `eslint.config.mjs`
- Create: `.gitignore`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

- [ ] **Step 1: Initialize package metadata**

Create `package.json` with these scripts and dependencies:

```json
{
  "name": "portfolio-bich-ngoc",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "@react-three/drei": "latest",
    "@react-three/fiber": "latest",
    "framer-motion": "latest",
    "gsap": "latest",
    "@gsap/react": "latest",
    "lenis": "latest",
    "lucide-react": "latest",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "three": "latest"
  },
  "devDependencies": {
    "@playwright/test": "latest",
    "@tailwindcss/postcss": "latest",
    "@types/node": "latest",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "tailwindcss": "latest",
    "typescript": "latest"
  }
}
```

- [ ] **Step 2: Add TypeScript and Next config**

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

Create `next.config.ts`:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 3: Add Tailwind and ESLint config**

Create `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

Create `tailwind.config.ts`:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171717",
        paper: "#fffaf0",
        grid: "#ded7c9",
        violetPop: "#ba3ff5",
        cyanPop: "#21c7f4",
        yellowPop: "#ffd84d",
        greenPop: "#00a878",
        orangePop: "#ff7a3d",
        bluePop: "#1f67ff"
      },
      boxShadow: {
        deck: "0 24px 80px rgba(20, 20, 20, 0.12)",
        sticker: "0 12px 30px rgba(20, 20, 20, 0.16)"
      },
      borderRadius: {
        deck: "28px"
      }
    }
  },
  plugins: []
};

export default config;
```

Create `eslint.config.mjs`:

```js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
```

- [ ] **Step 4: Add ignore rules**

Create `.gitignore`:

```gitignore
node_modules
.next
out
.env
.env*.local
.vercel
.DS_Store
.superpowers/
playwright-report/
test-results/
```

- [ ] **Step 5: Add minimal app shell**

Create `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vu Thi Bich Ngoc - Marketing Specialist",
  description:
    "Marketing Specialist portfolio for brand, content, performance, CRM/email, and strategy work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Create `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return <main id="main">Vu Thi Bich Ngoc - Marketing Specialist</main>;
}
```

Create `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  --background: #fffaf0;
  --foreground: #171717;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

- [ ] **Step 6: Install dependencies**

Run:

```bash
npm install
```

Expected: `package-lock.json` is created and dependencies install successfully.

- [ ] **Step 7: Verify scaffold**

Run:

```bash
npm run build
```

Expected: production build succeeds.

- [ ] **Step 8: Commit checkpoint if git is initialized**

Run:

```bash
git rev-parse --is-inside-work-tree
```

Expected in current project: command fails because the project is not a git repo. If it returns `true`, run:

```bash
git add package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs tailwind.config.ts eslint.config.mjs .gitignore src/app
git commit -m "chore: scaffold next portfolio app"
```

---

### Task 2: Add Assets, Environment, and Documentation

**Files:**
- Create: `.env.example`
- Create: `README.md`
- Create: `public/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf`
- Create: `public/assets/images/.gitkeep`
- Modify: `.gitignore`

- [ ] **Step 1: Add environment example**

Create `.env.example`:

```env
NEXT_PUBLIC_CLARITY_PROJECT_ID=
```

- [ ] **Step 2: Create asset directories**

Run:

```bash
mkdir -p public/assets/cv public/assets/images
cp "CV - Vũ Thị Bích Ngọc.pdf" public/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf
touch public/assets/images/.gitkeep
```

Expected: CV exists at `public/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf`.

- [ ] **Step 3: Write README**

Create `README.md`:

```md
# Vu Thi Bich Ngoc Portfolio

Animated marketing portfolio built with Next.js, Tailwind CSS, Framer Motion, GSAP, Lenis, and React Three Fiber.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Microsoft Clarity

Set this variable in Vercel to enable Clarity in production:

```env
NEXT_PUBLIC_CLARITY_PROJECT_ID=your_project_id
```

Clarity does not load when the variable is empty.

## Replace Content

Main content lives in `src/data/portfolio.ts`.

Replace these later:

- Portrait images in `public/assets/images/`
- LinkedIn URL in `src/data/portfolio.ts`
- Detailed case-study content in `src/data/portfolio.ts`
- Updated CV PDF at `public/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf`

## Vercel

Import the repository into Vercel, set `NEXT_PUBLIC_CLARITY_PROJECT_ID` if needed, and use the default Next.js build settings.
```

- [ ] **Step 4: Verify asset path**

Run:

```bash
test -f public/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf
```

Expected: command exits with status 0.

---

### Task 3: Define Typed Portfolio Content

**Files:**
- Create: `src/data/portfolio.ts`
- Create: `src/lib/links.ts`

- [ ] **Step 1: Create contact URL helpers**

Create `src/lib/links.ts`:

```ts
export function createMailto(email: string, subject: string) {
  const encodedSubject = encodeURIComponent(subject);
  return `mailto:${email}?subject=${encodedSubject}`;
}

export function createZaloUrl(phone: string) {
  const normalized = phone.replace(/\D/g, "");
  return `https://zalo.me/${normalized}`;
}
```

- [ ] **Step 2: Create typed content data**

Create `src/data/portfolio.ts`:

```ts
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
    skills: ["Marketing strategy", "Integrated planning", "Positioning", "KPI monitoring"]
  },
  {
    title: "Brand & Content",
    color: "yellow",
    skills: ["Brand marketing", "Content marketing", "Visual storytelling", "Social content"]
  },
  {
    title: "Performance",
    color: "cyan",
    skills: ["Performance tracking", "Campaign optimization", "Reporting", "Insight synthesis"]
  },
  {
    title: "CRM & Email",
    color: "green",
    skills: ["CRM planning", "Email journeys", "Retention thinking", "Audience segments"]
  },
  {
    title: "Collaboration",
    color: "orange",
    skills: ["Cross-team coordination", "Product alignment", "External partners", "Board reporting"]
  }
];

export const experiences: ExperienceItem[] = [
  {
    company: "BCC IT Innovation",
    role: "Marketing Specialist",
    period: "Sep 2025 - Present",
    summary:
      "Owns marketing strategy and planning across brand, digital, social, and on-ground channels.",
    highlights: [
      "Led end-to-end marketing strategy aligned with business goals.",
      "Built integrated plans across brand, digital, social, and on-ground channels.",
      "Developed company profile, brand deck, and brand positioning frameworks.",
      "Coordinated marketing activities across internal teams and external partners.",
      "Monitored campaign performance and reported insights to leadership."
    ],
    tags: ["Strategy", "Brand positioning", "Integrated planning", "Performance monitoring"]
  },
  {
    company: "SConnect Group",
    role: "Brand Marketing Specialist",
    period: "Sep 2023 - Sep 2025",
    summary:
      "Supported brand development and visibility across domestic and international recognition efforts.",
    highlights: [
      "Enhanced brand visibility through participation in domestic and international awards.",
      "Supported brand development initiatives across content and communication touchpoints.",
      "Contributed to consistent brand presentation across selected campaigns and materials."
    ],
    tags: ["Brand development", "Awards presence", "Visibility", "Communication"]
  }
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
      "Monitored campaign performance and synthesized recommendations."
    ]
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
      "Helped maintain consistency across selected communication materials."
    ]
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
      "Use insights to improve future content, audience, and channel decisions."
    ]
  }
];
```

- [ ] **Step 3: Type-check data**

Run:

```bash
npm run build
```

Expected: build succeeds without TypeScript errors.

---

### Task 4: Add Analytics and Smooth Scroll Infrastructure

**Files:**
- Create: `src/lib/analytics.ts`
- Create: `src/components/clarity-script.tsx`
- Create: `src/components/smooth-scroll.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add analytics helper**

Create `src/lib/analytics.ts`:

```ts
type ClarityWindow = Window & {
  clarity?: (command: "event", name: string) => void;
};

export function trackEvent(name: string) {
  if (typeof window === "undefined") {
    return;
  }

  const clarity = (window as ClarityWindow).clarity;
  if (typeof clarity === "function") {
    clarity("event", name);
  }
}
```

- [ ] **Step 2: Add Clarity script component**

Create `src/components/clarity-script.tsx`:

```tsx
import Script from "next/script";

export function ClarityScript() {
  const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  if (process.env.NODE_ENV !== "production" || !projectId) {
    return null;
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${projectId}");
      `}
    </Script>
  );
}
```

- [ ] **Step 3: Add Lenis smooth scroll component**

Create `src/components/smooth-scroll.tsx`:

```tsx
"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
```

- [ ] **Step 4: Wire infrastructure into layout**

Modify `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { ClarityScript } from "@/components/clarity-script";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vu Thi Bich Ngoc - Marketing Specialist",
  description:
    "Marketing Specialist portfolio for brand, content, performance, CRM/email, and strategy work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
        <ClarityScript />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Verify Clarity is gated**

Run:

```bash
npm run build
```

Expected: build succeeds. Clarity script does not render during development unless production env var is set.

---

### Task 5: Build Shared UI Primitives and Global Styling

**Files:**
- Create: `src/lib/motion.ts`
- Create: `src/components/motion-reveal.tsx`
- Create: `src/components/section-heading.tsx`
- Create: `src/components/floating-badge.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Add shared motion constants**

Create `src/lib/motion.ts`:

```ts
export const revealUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
```

- [ ] **Step 2: Add reveal wrapper**

Create `src/components/motion-reveal.tsx`:

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { revealUp } from "@/lib/motion";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
};

export function MotionReveal({ children, className }: MotionRevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 3: Add section heading component**

Create `src/components/section-heading.tsx`:

```tsx
import { MotionReveal } from "@/components/motion-reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <MotionReveal className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-violetPop">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-black leading-tight text-ink md:text-6xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-lg leading-8 text-neutral-700">{copy}</p> : null}
    </MotionReveal>
  );
}
```

- [ ] **Step 4: Add floating badge component**

Create `src/components/floating-badge.tsx`:

```tsx
const colorClass = {
  violet: "bg-violetPop text-white",
  cyan: "bg-cyanPop text-ink",
  yellow: "bg-yellowPop text-ink",
  green: "bg-greenPop text-white",
  orange: "bg-orangePop text-white",
  blue: "bg-bluePop text-white",
};

type FloatingBadgeProps = {
  label: string;
  color: keyof typeof colorClass;
  className?: string;
};

export function FloatingBadge({ label, color, className = "" }: FloatingBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-4 py-2 text-sm font-black shadow-sticker ${colorClass[color]} ${className}`}
    >
      {label}
    </span>
  );
}
```

- [ ] **Step 5: Expand global CSS**

Modify `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  --background: #fffaf0;
  --foreground: #171717;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

::selection {
  background: #ffd84d;
  color: #171717;
}

.deck-grid {
  background-image:
    radial-gradient(circle, rgba(23, 23, 23, 0.14) 1px, transparent 1px);
  background-size: 22px 22px;
}

.text-balance {
  text-wrap: balance;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.001ms !important;
  }
}
```

- [ ] **Step 6: Verify primitives build**

Run:

```bash
npm run build
```

Expected: build succeeds.

---

### Task 6: Build Hero with WebGL Enhancement and Fallback

**Files:**
- Create: `src/components/hero-fallback.tsx`
- Create: `src/components/hero-scene.tsx`
- Create: `src/components/hero.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add hero fallback**

Create `src/components/hero-fallback.tsx`:

```tsx
import { FloatingBadge } from "@/components/floating-badge";

export function HeroFallback() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-deck border border-ink/10 bg-white p-6 shadow-deck deck-grid">
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-yellowPop" />
      <div className="absolute right-10 top-16 h-28 w-28 rounded-full bg-cyanPop" />
      <div className="absolute bottom-8 left-20 h-20 w-44 rotate-[-8deg] rounded-3xl bg-violetPop" />
      <div className="absolute bottom-14 right-12 h-24 w-24 rotate-[12deg] rounded-2xl bg-orangePop" />
      <FloatingBadge label="Brand" color="violet" className="absolute right-8 top-8" />
      <FloatingBadge label="Content" color="yellow" className="absolute left-8 bottom-10" />
      <FloatingBadge label="CRM / Email" color="green" className="absolute right-16 bottom-20" />
      <div className="absolute inset-x-10 top-1/2 h-28 -translate-y-1/2 rounded-[32px] border-2 border-ink bg-paper/90 shadow-sticker" />
    </div>
  );
}
```

- [ ] **Step 2: Add desktop R3F scene**

Create `src/components/hero-scene.tsx`:

```tsx
"use client";

import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Shape() {
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh rotation={[0.6, 0.4, 0.2]}>
        <torusKnotGeometry args={[1.05, 0.32, 160, 24]} />
        <MeshDistortMaterial
          color="#ba3ff5"
          distort={0.35}
          speed={2}
          roughness={0.24}
          metalness={0.08}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 hidden md:block">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} />
        <Shape />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
      </Canvas>
    </div>
  );
}
```

- [ ] **Step 3: Add hero component**

Create `src/components/hero.tsx`:

```tsx
"use client";

import dynamic from "next/dynamic";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { FloatingBadge } from "@/components/floating-badge";
import { HeroFallback } from "@/components/hero-fallback";
import { trackEvent } from "@/lib/analytics";

const HeroScene = dynamic(
  () => import("@/components/hero-scene").then((module) => module.HeroScene),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-5 py-8 md:px-8 md:py-10"
      data-clarity-label="hero"
    >
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[36px] border border-ink/10 bg-paper p-5 shadow-deck deck-grid md:grid-cols-[1.05fr_0.95fr] md:p-8">
        <div className="relative z-10 flex min-h-[560px] flex-col justify-between rounded-deck bg-white/85 p-6 shadow-sticker md:p-10">
          <nav className="flex flex-wrap items-center gap-3 text-sm font-bold">
            <a href="#work" className="rounded-full bg-ink px-4 py-2 text-white">
              Work
            </a>
            <a href="#experience" className="rounded-full bg-yellowPop px-4 py-2 text-ink">
              Experience
            </a>
            <a href="#contact" className="rounded-full bg-cyanPop px-4 py-2 text-ink">
              Contact
            </a>
          </nav>

          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <FloatingBadge label="Brand" color="violet" />
              <FloatingBadge label="Content" color="yellow" />
              <FloatingBadge label="Performance" color="cyan" />
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.95] text-ink md:text-7xl">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-700">
              {profile.subheadline}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-black text-white"
              data-clarity-label="download_cv"
              onClick={() => trackEvent("download_cv")}
            >
              <Download size={20} />
              Download CV
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-4 font-black text-ink"
              data-clarity-label="view_selected_work"
              onClick={() => trackEvent("view_selected_work")}
            >
              <ArrowDown size={20} />
              View Selected Work
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-deck bg-white shadow-sticker">
          <HeroFallback />
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Render hero on homepage**

Modify `src/app/page.tsx`:

```tsx
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
    </main>
  );
}
```

- [ ] **Step 5: Verify hero build**

Run:

```bash
npm run build
```

Expected: build succeeds, and R3F is not server-rendered.

---

### Task 7: Build Main Portfolio Sections

**Files:**
- Create: `src/components/profile-snapshot.tsx`
- Create: `src/components/skills-board.tsx`
- Create: `src/components/experience-timeline.tsx`
- Create: `src/components/work-card.tsx`
- Create: `src/components/selected-work.tsx`
- Create: `src/components/contact-section.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add profile snapshot**

Create `src/components/profile-snapshot.tsx`:

```tsx
import { profile, skillGroups } from "@/data/portfolio";
import { FloatingBadge } from "@/components/floating-badge";
import { MotionReveal } from "@/components/motion-reveal";

export function ProfileSnapshot() {
  return (
    <section id="profile" className="px-5 py-20 md:px-8">
      <MotionReveal className="mx-auto grid max-w-7xl gap-8 rounded-deck bg-white p-6 shadow-deck md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-violetPop">
            Profile Snapshot
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Strategy-minded marketing specialist.
          </h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-neutral-700">{profile.bio}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skillGroups.map((group) => (
              <FloatingBadge key={group.title} label={group.title} color={group.color} />
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
```

- [ ] **Step 2: Add skills board**

Create `src/components/skills-board.tsx`:

```tsx
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/portfolio";

const colorClass = {
  violet: "border-violetPop bg-violetPop/10",
  cyan: "border-cyanPop bg-cyanPop/10",
  yellow: "border-yellowPop bg-yellowPop/20",
  green: "border-greenPop bg-greenPop/10",
  orange: "border-orangePop bg-orangePop/10",
  blue: "border-bluePop bg-bluePop/10",
};

export function SkillsBoard() {
  return (
    <section id="skills" className="px-5 py-20 md:px-8">
      <SectionHeading
        eyebrow="Capability Board"
        title="A practical mix of brand, content, performance, CRM, and strategy."
      />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-5">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className={`rounded-deck border-2 p-5 shadow-sticker ${colorClass[group.color]}`}
          >
            <h3 className="text-xl font-black">{group.title}</h3>
            <ul className="mt-5 space-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add experience timeline**

Create `src/components/experience-timeline.tsx`:

```tsx
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { MotionReveal } from "@/components/motion-reveal";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="px-5 py-20 md:px-8" data-clarity-label="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Marketing ownership across strategy, brand, and execution."
        copy="A recruiter-friendly view of recent roles and responsibilities."
      />
      <div className="mx-auto grid max-w-6xl gap-6">
        {experiences.map((item) => (
          <MotionReveal
            key={`${item.company}-${item.role}`}
            className="rounded-deck border border-ink/10 bg-white p-6 shadow-deck md:p-8"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-bluePop">
                  {item.company}
                </p>
                <h3 className="mt-2 text-3xl font-black">{item.role}</h3>
              </div>
              <p className="rounded-full bg-yellowPop px-4 py-2 text-sm font-black">{item.period}</p>
            </div>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">{item.summary}</p>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl bg-paper px-4 py-3 font-semibold">
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-ink px-3 py-1 text-xs font-black text-white">
                  {tag}
                </span>
              ))}
            </div>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Add work card and selected work**

Create `src/components/work-card.tsx`:

```tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/data/portfolio";

type WorkCardProps = {
  work: WorkItem;
  index: number;
};

const accent = ["bg-violetPop", "bg-greenPop", "bg-orangePop"];

export function WorkCard({ work, index }: WorkCardProps) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group block rounded-deck border border-ink/10 bg-white p-5 shadow-deck transition-transform hover:-translate-y-1"
      data-clarity-label="open_case_detail"
    >
      <div className={`mb-6 h-56 rounded-[24px] ${accent[index % accent.length]} p-5 deck-grid`}>
        <div className="flex h-full flex-col justify-between rounded-[22px] bg-paper/90 p-5">
          <span className="w-fit rounded-full bg-ink px-3 py-1 text-xs font-black text-white">
            {work.status}
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-neutral-600">
              Selected Work
            </p>
            <h3 className="mt-2 text-3xl font-black leading-tight">{work.title}</h3>
          </div>
        </div>
      </div>
      <p className="text-base leading-7 text-neutral-700">{work.summary}</p>
      <div className="mt-5 flex items-center justify-between font-black">
        <span>Open structure</span>
        <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  );
}
```

Create `src/components/selected-work.tsx`:

```tsx
import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";
import { works } from "@/data/portfolio";

export function SelectedWork() {
  return (
    <section id="work" className="px-5 py-20 md:px-8" data-clarity-label="selected_work">
      <SectionHeading
        eyebrow="Selected Work"
        title="Structured case placeholders ready for real project proof."
        copy="Detailed metrics, visuals, and campaign assets can be added when available."
      />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {works.map((work, index) => (
          <WorkCard key={work.slug} work={work} index={index} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Add contact section**

Create `src/components/contact-section.tsx`:

```tsx
"use client";

import { Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";
import { trackEvent } from "@/lib/analytics";
import { createMailto, createZaloUrl } from "@/lib/links";

export function ContactSection() {
  const contacts = [
    {
      label: "Zalo",
      href: createZaloUrl(profile.phone),
      icon: MessageCircle,
      event: "contact_zalo",
    },
    {
      label: "Email",
      href: createMailto(profile.email, "Portfolio inquiry"),
      icon: Mail,
      event: "contact_email",
    },
    {
      label: "Facebook",
      href: profile.facebookUrl,
      icon: Facebook,
      event: "contact_facebook",
    },
    {
      label: "LinkedIn",
      href: profile.linkedinUrl || "#contact",
      icon: Linkedin,
      event: "contact_linkedin",
    },
  ];

  return (
    <section id="contact" className="px-5 py-20 md:px-8" data-clarity-label="contact">
      <div className="mx-auto max-w-6xl rounded-[36px] bg-ink p-6 text-white shadow-deck md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-yellowPop">Contact</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
          Open to marketing roles, collaborations, and selected freelance work.
        </h2>
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const disabled = contact.href === "#contact";
            return (
              <a
                key={contact.label}
                href={contact.href}
                aria-disabled={disabled}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 font-black text-ink opacity-100 transition-opacity aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
                data-clarity-label={contact.event}
                onClick={() => trackEvent(contact.event)}
              >
                <Icon size={20} />
                {contact.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Compose homepage**

Modify `src/app/page.tsx`:

```tsx
import { ContactSection } from "@/components/contact-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { ProfileSnapshot } from "@/components/profile-snapshot";
import { SelectedWork } from "@/components/selected-work";
import { SkillsBoard } from "@/components/skills-board";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ProfileSnapshot />
      <SkillsBoard />
      <ExperienceTimeline />
      <SelectedWork />
      <ContactSection />
    </main>
  );
}
```

- [ ] **Step 7: Verify homepage sections build**

Run:

```bash
npm run build
```

Expected: build succeeds and all homepage section imports resolve.

---

### Task 8: Build Case Detail Route and Not Found Page

**Files:**
- Create: `src/app/work/[slug]/page.tsx`
- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Add case detail route**

Create `src/app/work/[slug]/page.tsx`:

```tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { works } from "@/data/portfolio";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  return {
    title: work ? `${work.title} - Vu Thi Bich Ngoc` : "Work - Vu Thi Bich Ngoc",
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-paper px-5 py-8 md:px-8">
      <article className="mx-auto max-w-5xl rounded-[36px] bg-white p-6 shadow-deck md:p-10">
        <Link href="/#work" className="inline-flex items-center gap-2 font-black text-bluePop">
          <ArrowLeft size={20} />
          Back to selected work
        </Link>
        <p className="mt-10 text-sm font-black uppercase tracking-[0.16em] text-violetPop">
          {work.status}
        </p>
        <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">{work.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-neutral-700">{work.summary}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <section className="rounded-deck bg-paper p-5">
            <h2 className="font-black">Objective</h2>
            <p className="mt-3 leading-7 text-neutral-700">{work.objective}</p>
          </section>
          <section className="rounded-deck bg-paper p-5">
            <h2 className="font-black">Role</h2>
            <p className="mt-3 leading-7 text-neutral-700">{work.role}</p>
          </section>
          <section className="rounded-deck bg-paper p-5">
            <h2 className="font-black">Channels</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {work.channels.map((channel) => (
                <span key={channel} className="rounded-full bg-ink px-3 py-1 text-xs font-black text-white">
                  {channel}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-deck border border-ink/10 p-5">
          <h2 className="text-2xl font-black">Work structure</h2>
          <ul className="mt-5 grid gap-3">
            {work.detail.map((item) => (
              <li key={item} className="rounded-2xl bg-yellowPop/25 px-4 py-3 font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}
```

- [ ] **Step 2: Add not found page**

Create `src/app/not-found.tsx`:

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-5">
      <section className="max-w-xl rounded-[36px] bg-white p-8 text-center shadow-deck">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-violetPop">Not found</p>
        <h1 className="mt-4 text-4xl font-black">This page is not available.</h1>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-ink px-6 py-4 font-black text-white">
          Back home
        </Link>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Verify static route build**

Run:

```bash
npm run build
```

Expected: build succeeds and `/work/[slug]` static params are generated.

---

### Task 9: Add GSAP Scroll Accents

**Files:**
- Create: `src/components/scroll-accents.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create GSAP scroll accents**

Create `src/components/scroll-accents.tsx`:

```tsx
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ScrollAccents() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        return;
      }

      gsap.to("[data-float='slow']", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: "#work",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope }
  );

  return <div ref={scope} aria-hidden="true" />;
}
```

- [ ] **Step 2: Add missing dependency for GSAP React hook**

Verify `@gsap/react` already exists in `package.json` dependencies from Task 1:

```json
"@gsap/react": "latest"
```

Expected: no additional install command is needed.

- [ ] **Step 3: Mark work cards with scroll accent data**

Modify `src/components/work-card.tsx` outer `Link` class:

```tsx
    <Link
      href={`/work/${work.slug}`}
      className="group block rounded-deck border border-ink/10 bg-white p-5 shadow-deck transition-transform hover:-translate-y-1"
      data-clarity-label="open_case_detail"
      data-float="slow"
    >
```

- [ ] **Step 4: Mount scroll accents**

Modify `src/app/page.tsx`:

```tsx
import { ContactSection } from "@/components/contact-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { ProfileSnapshot } from "@/components/profile-snapshot";
import { ScrollAccents } from "@/components/scroll-accents";
import { SelectedWork } from "@/components/selected-work";
import { SkillsBoard } from "@/components/skills-board";

export default function HomePage() {
  return (
    <main id="main">
      <ScrollAccents />
      <Hero />
      <ProfileSnapshot />
      <SkillsBoard />
      <ExperienceTimeline />
      <SelectedWork />
      <ContactSection />
    </main>
  );
}
```

- [ ] **Step 5: Verify GSAP integration**

Run:

```bash
npm run build
```

Expected: build succeeds and no `window is not defined` error occurs.

---

### Task 10: Add Playwright Tests

**Files:**
- Create: `playwright.config.ts`
- Create: `tests/home.spec.ts`
- Create: `tests/work.spec.ts`

- [ ] **Step 1: Add Playwright config**

Create `playwright.config.ts`:

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "html",
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 5"] },
    },
  ],
});
```

- [ ] **Step 2: Add homepage test**

Create `tests/home.spec.ts`:

```ts
import { expect, test } from "@playwright/test";

test("homepage renders recruiter-critical content and CTAs", async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });

  await page.goto("/");

  await expect(page.getByRole("heading", { name: /Vu Thi Bich Ngoc - Marketing Specialist/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Download CV/i })).toHaveAttribute(
    "href",
    "/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf"
  );
  await expect(page.getByRole("link", { name: /View Selected Work/i })).toBeVisible();
  await expect(page.locator("#experience")).toBeVisible();
  await expect(page.locator("#work")).toBeVisible();
  await expect(page.locator("#contact")).toBeVisible();
  await expect(page.getByRole("link", { name: /Zalo/i })).toHaveAttribute("href", /zalo\.me\/0962605693/);
  await expect(page.getByRole("link", { name: /Email/i })).toHaveAttribute("href", /mailto:ngocvu\.211299@gmail\.com/);

  expect(consoleErrors).toEqual([]);
});

test("selected work CTA scroll target exists", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /View Selected Work/i }).click();
  await expect(page.locator("#work")).toBeInViewport();
});
```

- [ ] **Step 3: Add work detail route test**

Create `tests/work.spec.ts`:

```ts
import { expect, test } from "@playwright/test";

test("work detail route renders structured placeholder", async ({ page }) => {
  await page.goto("/work/bcc-marketing-strategy-brand-positioning");

  await expect(page.getByRole("heading", { name: /Marketing Strategy & Brand Positioning/i })).toBeVisible();
  await expect(page.getByText(/Case study in progress/i)).toBeVisible();
  await expect(page.getByText(/Objective/i)).toBeVisible();
  await expect(page.getByText(/Role/i)).toBeVisible();
  await expect(page.getByText(/Channels/i)).toBeVisible();
  await expect(page.getByRole("link", { name: /Back to selected work/i })).toHaveAttribute("href", "/#work");
});
```

- [ ] **Step 4: Install Playwright browsers if needed**

Run:

```bash
npx playwright install chromium
```

Expected: Chromium browser installs or is already available.

- [ ] **Step 5: Verify Playwright tests**

Run:

```bash
npm run test:e2e
```

Expected: desktop and mobile tests pass without console errors.

---

### Task 11: Final Polish, Accessibility, and Vercel Readiness

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/components/*.tsx`
- Modify: `README.md`

- [ ] **Step 1: Add richer metadata**

Modify metadata in `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Vu Thi Bich Ngoc - Marketing Specialist",
  description:
    "Portfolio of Vu Thi Bich Ngoc, a Marketing Specialist focused on brand, content, performance marketing, CRM/email, and strategy.",
  openGraph: {
    title: "Vu Thi Bich Ngoc - Marketing Specialist",
    description:
      "A colorful marketing portfolio covering brand, content, performance, CRM/email, and strategy.",
    type: "website",
  },
};
```

- [ ] **Step 2: Add focus visibility styles**

Append to `src/app/globals.css`:

```css
a:focus-visible,
button:focus-visible {
  outline: 3px solid #1f67ff;
  outline-offset: 4px;
}
```

- [ ] **Step 3: Review links and labels**

Check these elements exist in the rendered DOM:

```text
data-clarity-label="download_cv"
data-clarity-label="view_selected_work"
data-clarity-label="contact_zalo"
data-clarity-label="contact_email"
data-clarity-label="open_case_detail"
```

If any label is missing, add it to the relevant link.

- [ ] **Step 4: Run full verification**

Run:

```bash
npm run lint
npm run build
npm run test:e2e
```

Expected: all commands pass.

- [ ] **Step 5: Manual browser verification with Playwright output**

Run:

```bash
npm run dev
```

Open or inspect with Playwright at:

```text
http://127.0.0.1:3000
```

Verify:

- Desktop hero shows either WebGL scene or fallback, never blank.
- Mobile layout does not overlap text.
- `Download CV` points to `/assets/cv/CV-Vu-Thi-Bich-Ngoc.pdf`.
- Work route opens.
- Contact links are visible and tappable.

- [ ] **Step 6: Stop dev server**

Stop the running `npm run dev` process before final response.

---

### Task 12: Completion Summary

**Files:**
- Read: `git status --short` if git exists.
- Read: command outputs from lint, build, and Playwright.

- [ ] **Step 1: Capture repository status**

Run:

```bash
git rev-parse --is-inside-work-tree
```

If it returns `true`, run:

```bash
git status --short
```

If it fails, state that the project is not a git repository.

- [ ] **Step 2: Prepare final handoff**

Final response must include:

- What was built.
- Verification commands run and whether they passed.
- Any commands that could not run and why.
- Local dev URL if the dev server is intentionally left running.
- Note that Vercel deployment was prepared but not executed.

Do not claim deployment occurred.
