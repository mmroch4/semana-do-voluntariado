# Semana Solidária U.Porto — Next.js app

Bilingual (PT/EN), accessible event site for the **Semana da Cidadania,
Voluntariado e Responsabilidade Social** (U.Porto, 21–26 September 2026),
organised by ReVIReS.

Migrated from the original plain HTML/CSS/JS site (kept for reference under
`legacy/`) to **Next.js (App Router) + TypeScript + Tailwind CSS v4**. All
application code lives under `src/` (Next.js `src` directory).

## Commands

```bash
npm run dev     # local dev server (http://localhost:3000)
npm run build   # production build (all pages prerendered as static)
npm start       # serve the production build
```

## Architecture

### Rendering
Every page is a **React Server Component** and prerenders to static HTML. Only
two pieces ship client JS: the mobile menu (`src/components/layout/Header.tsx`)
and the hero countdown (`src/components/ui/Countdown.tsx`).

### Internationalisation (PT default, EN under `/en`)
Two **root layouts** via route groups let each locale set its own `<html lang>`
while keeping Portuguese prefix-free:

| Portuguese (default)      | English                       |
| ------------------------- | ----------------------------- |
| `src/app/(pt)/…` → `/`, `/programa`, … | `src/app/(en)/en/…` → `/en`, `/en/program`, … |

- `src/lib/i18n/config.ts` — locales + `<html lang>` values.
- `src/lib/i18n/routes.ts` — page keys → localized URLs, nav order, locale switch.
- `src/lib/content/dictionaries/{pt,en}.ts` — all copy, typed by
  `src/lib/content/types.ts` so both locales stay structurally in sync.
- `src/lib/content/images.ts` — shared image paths (alt text lives in the dicts).

### Components
- `src/components/ui/*` — design-system primitives (Button, Card, Hero, Timeline,
  Countdown, …) built with Tailwind utilities over the tokens in
  `src/app/globals.css` (`@theme`).
- `src/components/layout/*` — `Header`, `Footer`, `SkipLink`, `SiteFrame`.
- `src/components/pages/*` — one composition per page, locale-driven; the route
  files in `src/app/` are thin wrappers that pass `locale` and export metadata.

### Design tokens
The original CSS custom properties (brown/gold/cream palette, fluid type scale)
live in the Tailwind v4 `@theme` block in `src/app/globals.css`, so they generate
utilities (`bg-cream`, `text-accent`, `text-hero`, …). The palette is
provisional pending ReVIReS branding — see `PLAN.md`.

## Not part of the app
`legacy/` (legacy static site), `references/` (HTTrack mirrors — read-only),
`old/`, `images/` (source images; the referenced subset is copied to
`public/images`).
