# Rashaun Heaston — Personal Website

Personal portfolio and consulting site for **Rashaun Heaston** — Detroit-based brand strategist, civil servant, and founder of [Royal Roots Organics](https://www.royalrootsorganics.com/).

Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Narrative

Rashaun's work is rooted in service to his community: serving Detroit through civic communications at the Mayor's Office, serving residents through wellness via Royal Roots Organics, and serving clients through strategic consulting. The site weaves these three together into one coherent story.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS with custom theme
- **Type system:** TypeScript
- **Motion:** Framer Motion
- **Typography:** Fraunces (display) + Geist (sans)
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
rashaun-heaston/
├── app/
│   ├── api/contact/route.ts    # Contact form endpoint
│   ├── globals.css             # Global styles & theme
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page (composes all sections)
├── components/
│   ├── Nav.tsx                 # Navigation bar
│   ├── Hero.tsx                # Landing hero
│   ├── Marquee.tsx             # Keyword marquee
│   ├── About.tsx               # About / bio section
│   ├── Services.tsx            # Consulting services
│   ├── Portfolio.tsx           # Portfolio placeholder grid
│   ├── Stats.tsx               # Experience highlights
│   ├── RoyalRoots.tsx          # Royal Roots feature
│   ├── Contact.tsx             # Contact form
│   └── Footer.tsx              # Footer
├── public/                     # Static assets
├── tailwind.config.js          # Custom theme (colors, fonts, animations)
└── next.config.js
```

## Deploying to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2 — Vercel Dashboard (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel will auto-detect Next.js — no config needed
5. Click **Deploy**

### Custom Domain

Once deployed, add the custom domain in Vercel: **Project Settings → Domains**.

## Customization Checklist

Before going live, swap these placeholders:

- [ ] Update the contact email in `components/Contact.tsx` and `components/Footer.tsx`
- [ ] Replace social links (LinkedIn, Instagram) in `components/Contact.tsx`
- [ ] Add Rashaun's headshot to `/public/` and reference it in `components/About.tsx`
- [ ] Wire up the contact form in `app/api/contact/route.ts` (Resend, SendGrid, etc.)
- [ ] Add `RESEND_API_KEY` (or equivalent) to Vercel environment variables
- [ ] Replace product placeholders in `components/RoyalRoots.tsx` with real product images
- [ ] Update Open Graph image in `app/layout.tsx` once a hero image exists
- [ ] Populate the Portfolio section in a future iteration

## Design System

The aesthetic is editorial-meets-organic: bone-white background, deep ink text, moss-green accents, with clay and gold as secondary tones. Fraunces serif handles headlines; Geist handles body. Asymmetric layouts, generous whitespace, subtle grain overlay.

Theme tokens live in `tailwind.config.js` and `app/globals.css`.

## License

© Rashaun Heaston. All rights reserved.
