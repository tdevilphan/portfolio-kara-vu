# Vu Thi Bich Ngoc Portfolio

Animated marketing portfolio built with Next.js, Tailwind CSS, Framer Motion, GSAP, Lenis, and React Three Fiber.

## Development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3030`.

## Build

```bash
npm run build
```

Run the end-to-end smoke tests:

```bash
npm run test:e2e
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

The project is linked to Vercel through `.vercel/project.json`.

### Deploy From Local

1. Install dependencies:

```bash
npm install
```

2. Verify the production build:

```bash
npm run build
```

3. Deploy a preview:

```bash
vercel deploy
```

4. Deploy to production:

```bash
vercel deploy --prod
```

If the Vercel CLI asks for confirmation, choose the existing
`portfolio-bich-ngoc` project.

### Deploy With Git Integration

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Keep the default Next.js settings:
   - Build command: `npm run build`
   - Output directory: `.next`
   - Install command: `npm install`
4. Set `NEXT_PUBLIC_CLARITY_PROJECT_ID` in Vercel only if Microsoft Clarity should load in production.
5. Push to the production branch to trigger a production deployment.

### Current Production URL

`https://portfolio-bich-ngoc.vercel.app`
