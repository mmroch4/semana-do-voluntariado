# Semana Solidária U.Porto — Next.js app

Bilingual (PT/EN), accessible event site for the **Semana da Cidadania,
Voluntariado e Responsabilidade Social** (U.Porto, 21–26 September 2026),
organised by ReVIReS.

Migrated from the original plain HTML/CSS/JS site (kept for reference under
`src/`) to **Next.js (App Router) + TypeScript + Tailwind CSS v4**.

## Commands

```bash
npm run dev     # local dev server (http://localhost:3000)
npm run build   # production build (all pages prerendered as static)
npm start       # serve the production build
```

## Architecture

### Rendering
Every page is a **React Server Component** and prerenders to static HTML. Only
two pieces ship client JS: the mobile menu (`components/layout/Header.tsx`) and
the hero countdown (`components/ui/Countdown.tsx`).

### Internationalisation (PT default, EN under `/en`)
Two **root layouts** via route groups let each locale set its own `<html lang>`
while keeping Portuguese prefix-free:

| Portuguese (default)      | English                       |
| ------------------------- | ----------------------------- |
| `app/(pt)/…` → `/`, `/programa`, … | `app/(en)/en/…` → `/en`, `/en/program`, … |

- `lib/i18n/config.ts` — locales + `<html lang>` values.
- `lib/i18n/routes.ts` — page keys → localized URLs, nav order, locale switch.
- `lib/content/dictionaries/{pt,en}.ts` — all copy, typed by
  `lib/content/types.ts` so both locales stay structurally in sync.
- `lib/content/images.ts` — shared image paths (alt text lives in the dicts).

### Components
- `components/ui/*` — design-system primitives (Button, Card, Hero, Timeline,
  Countdown, …) built with Tailwind utilities over the tokens in
  `app/globals.css` (`@theme`).
- `components/layout/*` — `Header`, `Footer`, `SkipLink`, `SiteFrame`.
- `components/pages/*` — one composition per page, locale-driven; the route
  files in `app/` are thin wrappers that pass `locale` and export metadata.

### Design tokens
The original CSS custom properties (brown/gold/cream palette, fluid type scale)
live in the Tailwind v4 `@theme` block in `app/globals.css`, so they generate
utilities (`bg-cream`, `text-accent`, `text-hero`, …). The palette is
provisional pending ReVIReS branding — see `PLAN.md`.

## Not part of the app
`src/` (legacy static site), `references/` (HTTrack mirrors — read-only),
`old/`, `images/` (source images; the referenced subset is copied to
`public/images`).
