# Norvan Facade — Vitrine Website

A modern, scroll-driven showcase website for **Norvan**, a building facade & siding specialist.
Inspired by Apple-style scroll storytelling, the centerpiece is a pinned **spray-on-building**
animation that reveals a renovated facade as you scroll.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tooling)
- **Tailwind CSS** (styling)
- **Framer Motion** (scroll & entrance animations)
- **Lucide React** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default `http://localhost:5173`).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build

## Highlights

- **Scroll-driven spray reveal** (`src/components/SprayReveal.tsx`): a sticky section where a
  spray gun travels across a building while a clip-path wipe reveals the renovated result,
  complete with animated spray particles.
- **Parallax hero** with layered gradients and an animated building skyline.
- **Responsive** across mobile, tablet, and desktop.
- **Accessible**: respects `prefers-reduced-motion`.

## Customization

All copy, services, projects, stats, and contact details live in `src/lib/content.ts`.
Update the `COMPANY` object there to change brand name, email, phone, and the TikTok link
(`@facadenorvan`).
