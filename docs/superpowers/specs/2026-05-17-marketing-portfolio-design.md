# Marketing Portfolio Website Design

Date: 2026-05-17
Project: `portfolio-bich-ngoc`
Audience: recruiters first, with secondary appeal for founders/clients and agency/creative leads

## Goal

Build a modern, animated portfolio website for Vu Thi Bich Ngoc, a Marketing Specialist positioned between specialist and senior/lead level. The site must help recruiters quickly understand her profile, experience, and contact paths while presenting a colorful, cinematic, Behance-like portfolio experience.

The website will be entirely in English. The copy tone is professional and direct. It must avoid invented metrics or exaggerated case-study claims until real project proof is provided.

## Primary Direction

Use the Balanced Cinematic Portfolio approach:

- One-page portfolio as the main experience.
- Case detail routes prepared for future case studies.
- Colorful Behance-like visual system with smooth, premium motion.
- Desktop WebGL/3D hero enhancement with mobile and reduced-motion fallbacks.
- Recruiter-first information hierarchy: name, role, CV, experience, work, contact.

## Technical Architecture

Use Next.js App Router with Tailwind CSS.

Routes:

- `/`: main one-page portfolio.
- `/work/[slug]`: detail route for case studies, initially supporting structured placeholder content.

No backend API is required in the first version because the site will not include a contact form.

Core libraries:

- `framer-motion` for component transitions, section reveal, hover states, and reduced-motion-friendly UI motion.
- `gsap` and `ScrollTrigger` for scroll-driven hero layers, selected work parallax, and kinetic text moments.
- `lenis` for smooth scrolling.
- `three`, `@react-three/fiber`, and `@react-three/drei` for desktop hero WebGL/3D.
- Tailwind CSS for styling.

Progressive enhancement:

- Desktop: WebGL hero, scroll parallax, floating portfolio elements.
- Mobile: lightweight HTML/CSS/Framer fallback without heavy WebGL.
- Reduced motion: disable or simplify Lenis, GSAP-heavy effects, and 3D motion.

## Visual System

The site must feel colorful and Behance-like, inspired by the provided screen recording:

- Canvas/editor feel with off-white background, dotted grid, and deck-like panels.
- Colorful badges and labels for skills, channels, and capabilities.
- Large campaign-card sections with floating assets.
- Rounded canvas panels and light shadows.
- Playful color palette, but with clear typography and recruiter-friendly structure.

Hero:

- Primary headline: `Vu Thi Bich Ngoc - Marketing Specialist`.
- Subheadline must mention brand, content, performance, CRM/email, and strategy.
- Primary CTA: `Download CV`.
- Secondary CTA: `View Selected Work`.
- Desktop hero includes WebGL/3D abstract object or shader/particle accent.
- Portrait slot exists as a future asset but does not depend on the current CV photo.

Main sections:

- Profile Snapshot.
- Skills grouped by capability.
- Experience.
- Selected Work.
- Contact.

## Content Model

Content must live in static data files in the repo. A CMS is out of scope for the first version.

Data groups:

- `profile`: name, role, headline, bio, CV path, contact information.
- `skills`: grouped chips for Strategy, Brand/Content, Performance, CRM/Email, and Collaboration.
- `experience`: company, role, period, bullets, and capability categories.
- `work`: slug, title, status, objective, role, channels, summary, and placeholder state.
- `socialLinks`: Zalo, email, Facebook, LinkedIn.

Known source content:

- Name: Vu Thi Bich Ngoc.
- Role: Marketing Specialist.
- Location: Ha Dong, Hanoi, Vietnam.
- Email: `ngocvu.211299@gmail.com`.
- Phone/Zalo: `0962605693`.
- Facebook: existing URL from the CV.
- LinkedIn: placeholder until the real URL is provided.
- Experience includes BCC IT Innovation and SConnect Group.
- Skills include Content Marketing, Brand Marketing, Performance Marketing, CRM/Email, and Strategy.

Selected work must use honest placeholders because detailed case studies are not ready yet. Avoid fake KPIs. Suggested initial work structure:

- BCC IT Innovation: Marketing Strategy and Brand Positioning.
- SConnect Group: Brand Visibility and Awards Presence.
- Performance and CRM/Email Growth System.

Case cards and detail pages must support future fields such as objective, role, approach, channels, outputs, metrics, and visuals.

## Animation and Interaction

Motion direction:

- Smooth and premium base.
- Colorful Behance deck feel.
- Kinetic typography in hero and section headings.
- Floating tags/cards and scroll-responsive parallax layers.
- Strong visual motion in hero and selected work, lighter motion in experience/contact.

Implementation rules:

- Use Lenis for smooth scroll.
- Use Framer Motion for standard reveal and interactions.
- Use GSAP ScrollTrigger only where scroll-linked behavior adds clear value.
- Use text splitting only for headline-level text, not body content.
- Lazy load the WebGL hero scene and provide fallback UI.
- Respect `prefers-reduced-motion`.
- Avoid excessive pinned sections that make recruiting information hard to scan.

## Contact and CTAs

No contact form in the first version.

Primary contact methods:

- Zalo using `0962605693`.
- Email.
- Facebook.
- LinkedIn placeholder until provided.

CTA behavior:

- `Download CV` downloads the PDF from `public/assets/cv/`.
- `View Selected Work` scrolls to the selected work section.
- Contact buttons open the correct external links or `mailto:` links.

## Microsoft Clarity

Use Microsoft Clarity for heatmap and session recording readiness.

Requirements:

- Add `.env.example` with `NEXT_PUBLIC_CLARITY_PROJECT_ID=`.
- Inject Clarity only when `NEXT_PUBLIC_CLARITY_PROJECT_ID` exists and the app runs in production.
- Give major sections stable IDs.
- Add clear labels or tracking metadata for key actions:
  - `download_cv`
  - `view_selected_work`
  - `contact_zalo`
  - `contact_email`
  - `open_case_detail`

The implementation must make heatmap interpretation easy by keeping CTA areas visually distinct and consistently named.

## Assets

Use the existing CV PDF as the initial downloadable CV asset.

Asset plan:

- Move or copy CV PDF into `public/assets/cv/`.
- Create placeholder structure for future portrait images under `public/assets/images/`.
- Do not rely on the portrait inside the PDF for the first version.

## Vercel Readiness

Prepare the project for Vercel but do not deploy it in the first implementation pass.

Include:

- Clean production build.
- `.env.example`.
- README with install, dev, build, Vercel environment setup, and content replacement notes.
- No automatic deployment.

## Verification

Use Playwright when browser testing is needed.

Required checks before completion:

- Run lint.
- Run production build.
- Run local dev server.
- Use Playwright to check desktop and mobile layouts.
- Check for browser console errors.
- Verify the hero does not render blank if WebGL is unavailable.
- Verify mobile fallback works.
- Verify `prefers-reduced-motion` does not break layout.
- Verify `Download CV` points to the correct PDF.
- Verify `View Selected Work` scrolls to the correct section.
- Verify Zalo, email, Facebook, and LinkedIn contact behavior.
- Verify Clarity does not run without the environment variable.

## Out of Scope

- CMS or admin editing.
- Contact form and submission backend.
- Blog or thought leadership pages.
- Real case-study metrics before the user provides evidence.
- Multi-language support.
- Full WebGL-heavy mobile experience.
- Automatic Vercel deployment.

## Open Inputs For Later

The implementation must be built so these can be swapped in later without structural changes:

- Real portrait image.
- LinkedIn URL.
- Detailed case studies, screenshots, assets, and metrics.
- Microsoft Clarity Project ID.
