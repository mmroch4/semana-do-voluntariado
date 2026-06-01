# Semana Solidária U.Porto — Implementation Plan

## Scope

This document is the build specification for the event website.

- `CLAUDE.md` is the source of truth for repo conventions, stack constraints, baseline accessibility expectations, and general working rules.
- `PLAN.md` is the source of truth for implementation order, page scope, design specs, responsive behavior, asset rules, and content gates.
- `information.pdf` is the event brief from ReVIReS with confirmed and pending event details.

The project goal is a static, maintainable event microsite for the **Semana da Cidadania, Voluntariado e Responsabilidade Social** (September 21–26, 2026), organized by ReVIReS — Rede de Voluntariado, Inclusão e Responsabilidade Social da U.Porto.

The design and technical approach reuse the foundation designed for the Grande Festa Alumni U.Porto project. The 2017 and 2018 archive sites serve as structural and component references only — they document a different event and their content must not be reused as current fact.

---

## Archive Use Policy

The archive sites (`references/2017/`, `references/2018/`) document previous editions of the Grande Festa Alumni U.Porto, **a separate event** from the Semana Solidária. Use them strictly as a pattern library.

Safe to reuse:

- HTML/CSS layout patterns;
- component structures (hero, timeline, card grid, footer);
- navigation hierarchy;
- responsive behavior patterns.

Not safe to reuse:

- any event-specific content (names, dates, venues, pricing, copy);
- sponsor/partner lists;
- registration flows;
- privacy wording;
- media assets.

All current-event content comes from `information.pdf` and direct confirmation from the organizers (ReVIReS).

---

## Delivery Model

### Product Shape

- Static HTML/CSS/JS.
- Multi-page.
- Portuguese first.
- English mirror after Portuguese content freeze.
- No build step.
- Pages must open directly in the browser during development.

### Parallel Tracks

Two tracks run in parallel:

1. Structural build track — starts immediately:
   - folders and page files;
   - CSS tokens and base styles;
   - shared header and footer;
   - navigation;
   - 404 page;
   - component styling;
   - mobile menu behavior.

2. Content confirmation track — gates only fact-dependent sections:
   - final event title;
   - confirmed daily schedule per activity;
   - specific venue details;
   - partner logo assets;
   - photography contest rules;
   - privacy policy text;
   - ReVIReS branding (logo and event image).

Structural work should not wait for every event input to be resolved.

---

## Content Gates

| Input | Needed for | Status (from information.pdf) |
| --- | --- | --- |
| Event title | hero, page titles, metadata | ⏳ Pending — two options: "U.Porto \| #Ser Cidadão" or "U.Porto \| #Cidadania & Solidariedade" |
| Dates | hero subtitle, countdown | ✅ Confirmed: Sep 21–26, 2026 |
| Opening ceremony | program page | ✅ Confirmed: Sep 21, 11h30 |
| Daily schedule | program page | Partial: Sep 22–26, 10h–17h; per-activity timing TBD |
| Venues | location page, program | Partial: 3 poles, various faculties, and external community locations (IPSS, partner venues); specifics TBD |
| Activity details | program page sections | Partial: categories confirmed, specifics TBD |
| Participation logistics | programa.html "Como participar" section | ⏳ Pending: eligibility rules, drop-in vs. sign-up per activity, donation guidelines, collection-point locations, blood donation requirements (FAP + IPST), walk meeting point and logistics — confirm with ReVIReS |
| ODS mappings | program page, activity cards | ⏳ Pending: each activity must reference specific ODS per brief; mapping to be confirmed by ReVIReS — do not invent mappings during implementation |
| Partners | partner grid | Partial: Câmara do Porto, CGD, FAP, AE's, Associações de Voluntariado, CDUP, BAMBUP listed; logos TBD |
| ReVIReS logo | header, footer, hero | ⏳ Under development |
| Event image/branding | hero, OG image | ⏳ Under development |
| Photography contest rules | Dia do Voluntariado page | ⏳ Pending |
| Privacy policy text | privacy page | ⏳ Pending — minimum baseline fallback defined (see privacidade.html spec); full text requires organizer approval |
| Contact details | footer, organization page | ⏳ Pending: ReVIReS contact info needed |
| Social media links | homepage callout, footer, organization page | ⏳ Pending: confirmed profiles and hashtag ready |
| Canonical production URL | canonical, OG URL, hreflang | ⏳ Pending |

Working rule:

- build empty or placeholder-ready sections first;
- populate fact-dependent content only after confirmation;
- each page spec below shows its content readiness.

---

## Draft-Page Policy

In a no-build static repo, every HTML file that exists can be reached by direct URL. "Unpublished" must have an explicit meaning.

Rules:

1. **Pages in active development**: the file exists and is linked in the navigation. Content sections that lack confirmed data use a visible placeholder block:

   ```html
   <div class="notice" role="status">
     <p>Informação em atualização.</p>
   </div>
   ```

2. **Pages not ready for any audience**: the file does not exist yet. Do not create empty shells for pages that have no confirmed content and no structural value. Add the file when either the structure or the content is ready to develop.

3. **Navigation consistency**: the nav only links to pages that exist. When a new page is created, add it to the nav. When a page is deferred, remove it from the nav.

---

## Site Map

### PT MVP

- `index.html` — preview-safe language landing page.
- `404.html` — language-neutral not-found page.
- `pt/index.html` — homepage.
- `pt/programa.html` — program and initiatives.
- `pt/localizacao.html` — venues and locations.
- `pt/organizacao.html` — ReVIReS, partners, and contact.
- `pt/privacidade.html` — privacy notice.

### Phase 2

- `pt/dia-voluntariado.html` — photography contest, volunteer award, and Dia Internacional do Voluntariado (Dec 4–5).
- `en/index.html` — English homepage.
- `en/program.html`
- `en/location.html`
- `en/organization.html`
- `en/privacy.html`
- `en/volunteering-day.html`

### Pages dropped from the previous plan

- `inscricao.html` (registration) — the Semana Solidária has no unified registration form; participation details are covered in the program page and individual activity descriptions.
- `edicoes.html` (previous editions) — this is the first edition of the Semana Solidária.

---

## Shared Page Shell

Every public page must include:

- `<!doctype html>`;
- `<html lang="pt-PT">` or `<html lang="en">`;
- `<meta charset="utf-8">`;
- `<meta name="viewport" content="width=device-width, initial-scale=1">`;
- page-specific `<title>`;
- page-specific `<meta name="description">`;
- skip link;
- semantic landmarks;
- shared header;
- shared footer;
- relative asset paths that work in direct browser preview.

Add only when deployment data exists:

- canonical URL;
- `hreflang`;
- Open Graph URL/image;
- event schema.

### Shared Markup

Header and footer HTML is duplicated across pages. There is no templating system or snippet sync workflow. When the header or footer changes, update every page manually.

For the PT MVP (~5 pages plus root and 404), manual duplication is manageable. If the site grows past ~10 pages, revisit with a local sync script.

### Root Entry

`/index.html` should not force a redirect during local preview.

It should:

- present the event name;
- offer links to `/pt/` and `/en/` equivalents when they exist;
- fall back gracefully if only PT is available.

### 404

`/404.html` should include:

- short "Página não encontrada / Page not found" message;
- links to PT homepage and EN homepage (or just PT if EN is not yet live).

---

## CSS Structure and Methodology

### File Strategy

- `styles/global.css`
  Reset (including `box-sizing: border-box` on all elements), tokens, font-face declarations, base element styles, utilities.

- `styles/components.css`
  Component blocks and their co-located responsive rules.

- `styles/dark-mode.css`
  Optional. Only add if dark mode actually ships.

- `styles/animations.css`
  Optional. Only add if motion actually ships.

Avoid a separate `responsive.css` unless a real cross-page need appears. Media queries should live next to the component they affect.

### Naming

Use a flat, BEM-like approach:

- block: `.hero`
- element: `.hero__content`
- modifier: `.hero--compact`
- state: `.is-open`

Rules:

- keep specificity low;
- avoid tag-plus-class selectors unless necessary;
- prefer component classes over page-specific one-off selectors;
- allow utility classes only for spacing or visually-hidden helpers.

---

## JavaScript Structure

### File Strategy

- `scripts/menu.js`
  Mobile hamburger menu: toggle, aria-expanded, Escape key close.

- `scripts/countdown.js`
  Countdown timer for the homepage hero. Only loaded on pages that display the countdown. Uses a confirmed event datetime injected via a `data-event-date` attribute on the countdown element (target: `2026-09-21T11:30:00+01:00`, i.e., September 21, 2026 at 11:30 Europe/Lisbon — the opening ceremony). Falls back to a static date string if JS is disabled.

- `scripts/scroll-reveal.js`
  Post-MVP. Lightweight `IntersectionObserver`-based reveal for section entrances. Adds a `.is-visible` class when elements enter the viewport. The actual animation is defined in `styles/animations.css` and is disabled under `prefers-reduced-motion: reduce`.

### Loading

- All scripts use the `defer` attribute in `<head>` so they execute after parsing without blocking render.
- Scripts are loaded individually per page — only include what the page needs. Do not create a combined bundle.
- No script has external dependencies.

### Conventions

- No global variables. Each script uses an IIFE or module pattern.
- Event listeners use `addEventListener`, never inline `onclick`.
- DOM queries use `document.querySelector` / `querySelectorAll`.

---

## Design Tokens

The token set below reuses the warm palette from the previous project. When ReVIReS branding is finalized (logo and event image are under development per the event brief), update the base palette and semantic tokens to match. The token structure itself stays the same.

Note: the current warm/ceremonial palette was inherited from a different event type (alumni celebration). When ReVIReS branding arrives, evaluate whether a more civic/action-oriented visual direction better suits a volunteering week. The token structure supports a full palette swap without layout changes.

```css
:root {
  /* color — base palette */
  --color-brown: #6B3A2A;
  --color-gold: #D4A843;
  --color-cream: #F5F0E8;

  /* color — semantic tokens */
  --color-text-primary: #3D1F15;       /* brown-900, high contrast on cream */
  --color-text-secondary: #7A5C50;     /* brown-500, secondary/meta text */
  --color-text-inverse: #FDF9F3;       /* near-white, text on dark surfaces */
  --color-text-accent: #6B3A2A;        /* brand brown for links and emphasis */

  --color-surface: #FFFFFF;            /* page background */
  --color-surface-warm: #F5F0E8;       /* cream, section backgrounds */
  --color-surface-alt: #EDE5D8;        /* darker cream, alternating sections */
  --color-surface-dark: #3D1F15;       /* footer, dark hero overlay base */

  --color-border: #D4C4B0;            /* warm neutral, card/section borders */
  --color-border-subtle: #E8DDD0;     /* lighter, decorative separators */

  --color-accent: #D4A843;            /* gold, primary CTA background */
  --color-accent-hover: #C19A38;      /* gold darkened ~8%, hover state */
  --color-accent-text: #3D1F15;       /* text on gold background */

  --color-focus-ring: #D4A843;        /* gold, 3px outline for focus-visible */
  --color-overlay-hero: rgba(61, 31, 21, 0.55); /* dark brown at 55% over hero imagery */

  /* spacing */
  --space-2xs: 0.25rem; /* 4 */
  --space-xs: 0.5rem;   /* 8 */
  --space-sm: 0.75rem;  /* 12 */
  --space-md: 1rem;     /* 16 */
  --space-lg: 1.5rem;   /* 24 */
  --space-xl: 2rem;     /* 32 */
  --space-2xl: 3rem;    /* 48 */
  --space-3xl: 4rem;    /* 64 */
  --space-4xl: 6rem;    /* 96 */

  /* type */
  --text-xs: 0.875rem;
  --text-sm: 1rem;
  --text-base: 1.125rem;
  --text-lg: 1.25rem;
  --text-xl: clamp(1.5rem, 1.2rem + 1vw, 1.875rem);
  --text-2xl: clamp(2rem, 1.5rem + 1.8vw, 2.75rem);
  --text-hero: clamp(2.75rem, 2rem + 4vw, 5rem);

  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-body: 1.6;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* layout */
  --container-max: 72rem;   /* 1152 */
  --container-wide: 80rem;  /* 1280 */
  --measure: 72ch;
  --gutter: 1rem;
  --section-py: 3.5rem;

  /* shape */
  --radius-sm: 0.5rem;
  --radius-md: 0.875rem;
  --radius-lg: 1.25rem;
  --border-width: 1px;
  --shadow-card: 0 14px 40px rgba(61, 31, 21, 0.08);
}

@media (min-width: 768px) {
  :root {
    --gutter: 1.5rem;
    --section-py: 4.5rem;
  }
}

@media (min-width: 1024px) {
  :root {
    --gutter: 2rem;
    --section-py: 6rem;
  }
}
```

### Element Defaults

- body text: `var(--text-sm)` on small screens, `var(--text-base)` from `768px` up.
- body line-height: `var(--leading-body)`.
- headings use the display font from `CLAUDE.md`.
- `h1` on non-hero pages: `var(--text-2xl)`.
- hero title: `var(--text-hero)`.
- `h2`: `var(--text-xl)`.
- `h3`: `var(--text-lg)`.
- small/meta text: `var(--text-xs)`.

---

## Layout and Component Specs

### Container

- standard container width: `min(calc(100% - 2 * var(--gutter)), var(--container-max))`;
- wide container for hero and partner areas: `min(calc(100% - 2 * var(--gutter)), var(--container-wide))`;
- long-form text measure: `max-width: var(--measure)`.

### Header and Navigation

- header height target: 72px mobile, 84px desktop;
- logo left, nav/actions right;
- below `768px`, use hamburger + drawer/panel;
- from `768px` up, show horizontal nav;
- active link uses underline or color accent, not color alone.

### Mobile Menu Behavior

The hamburger menu uses an off-canvas nav pattern:

- **ARIA**: use `aria-expanded` on the toggle button and `aria-controls` pointing to the nav panel. The panel is a `<nav>` landmark.
- **Open/close**: slide from the right using `transform: translateX()`, under 300ms. Respect `prefers-reduced-motion` with instant show/hide.
- **Escape key**: pressing Escape closes the menu.
- **Close triggers**: Escape key, toggle button, or selecting a nav link.
- **Focus**: on open, move focus to the first nav link. On close, return focus to the toggle button.

No focus trap, no backdrop overlay, no body scroll lock. This is a nav landmark, not a modal dialog.

### Hero

- min-height: `50svh` mobile, `60svh` desktop (reduced from 70/80svh to move away from the ceremonial/gala feel toward a more compact, action-oriented layout);
- content aligned to bottom-left within a container;
- maximum text width: 16em for title (allows natural line breaks without excessive narrowing), 42rem for supporting copy;
- use a dark overlay over imagery strong enough to keep text contrast compliant;
- CTA group stacks on mobile and sits inline from `640px` up;
- if no approved hero image exists, use a typographic hero on a cream surface with an accent divider rather than a weak placeholder photo.

### Buttons

- minimum touch size: 44px, target 48px height;
- padding: `0.875rem 1.25rem`;
- font-weight: `var(--weight-semibold)`;
- border-radius: 999px for CTAs;
- primary button: accent background, dark text;
- secondary button: transparent or cream background with primary border and text;
- always include hover, focus-visible, and disabled states.

### Cards

- default padding: `var(--space-lg)` mobile, `var(--space-xl)` desktop;
- border radius: `var(--radius-lg)`;
- border: `1px solid`;
- shadow: `var(--shadow-card)`;
- use cards for activity summaries, partner blocks, contact info, and notices;
- do not rely on equal-height cards if the content can vary dramatically.

### Activity Grid

For the program page, activities grouped by category:

- card-based layout;
- category label (e.g., "Saúde", "Ambiente", "Voluntariado", "Inclusão");
- ODS badge or reference per activity (required — the brief mandates ODS references on all activities; specific ODS mapping pending confirmation);
- responsive: single-column mobile, 2-column from `768px`, 3-column from `1024px`.

### Timeline

- single-column stack by default;
- time label above content on mobile;
- time label shifts to a left rail from `1024px` up;
- use clear separators and generous spacing rather than decorative connectors.

### Partner Grid

- logo cards should center content vertically and horizontally;
- card min-height: 96px;
- use SVG logos where possible;
- if assets are missing, replace the grid with a text list or an "em atualização" note.

### Footer

- three logical blocks when content exists: ReVIReS info / contact, partners, privacy / legal;
- collapse to a single column on mobile;
- keep footer copy short and scannable;
- include privacy link in every language shipped;
- include `#VoluntariadoUPorto` and social media links when available.

---

## Responsive Behavior

Use the breakpoints defined in `CLAUDE.md` and apply them like this:

| Breakpoint | Layout behavior |
| --- | --- |
| base to `639px` | Hamburger nav, single-column layout, stacked CTAs, partner grid 2 columns, timeline 1 column, footer 1 column |
| `640px` to `767px` | CTA group can sit inline, partner grid 3 columns, simple 2-column stat or info grids |
| `768px` to `1023px` | Horizontal nav, two-column content sections where appropriate, activity cards 2 columns, footer 2 columns |
| `1024px` to `1279px` | Hero gains more vertical space, timeline moves to left-rail layout, activity cards 3 columns, partner grid 4 columns, footer 3 columns |
| `1280px` and up | Wider container usage, partner grid can grow to 5 columns if logos support it, longer editorial text remains capped by `--measure` |

Do not create breakpoint-specific redesigns. The layout should evolve, not jump.

---

## Asset Strategy

### Photography

- use approved photos only;
- prefer `WebP` with JPEG fallback;
- for editorial images, export widths around `640`, `1280`, and `1920` where needed;
- use `<picture>` and `srcset` for large content images;
- target compressed sizes:
  - hero image variant: ideally under 350 KB;
  - standard editorial image: ideally under 220 KB.

### Logos

- preferred format: SVG;
- fallback: transparent PNG;
- keep logos visually consistent inside partner cards;
- never distort aspect ratio;
- ReVIReS logo is under development — use a text placeholder until the asset is delivered.

### Icons

- use SVG icons only;
- keep stroke widths and corner treatment consistent.

### Favicons (Tier 2)

Provide when branding is finalized:

- `favicon.svg`;
- `favicon.ico`;
- `apple-touch-icon.png` at `180x180`;
- `icon-192.png`;
- `icon-512.png`.

### Fonts

- preferred: self-hosted `woff2` files in `assets/fonts/`;
- acceptable fallback: system stack if self-hosting is not ready;
- avoid remote font dependencies in the MVP.

Weights to include:

- **Inter**: 400 (regular), 500 (medium), 600 (semibold) — covers body, meta, and button text.
- **Playfair Display**: 700 (bold) — covers all headings.

Declare `@font-face` rules at the top of `global.css` with `font-display: swap`.

System fallback stack if self-hosting is deferred:

- body: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`;
- headings: `Georgia, "Times New Roman", serif`.

---

## Performance Guidelines

Since there is no build step, keep performance in check with these rules:

- **Page weight target**: under 500 KB total per page on first load (HTML + CSS + JS + above-fold images). Hero image variants are the main budget item.
- **Image lazy loading**: use `loading="lazy"` on all images below the fold. The hero image and logo should load eagerly.
- **Font loading**: `font-display: swap` avoids invisible text during font load. If self-hosting, subset fonts to Latin + Latin Extended to reduce file size.
- **CSS loading**: link all stylesheets in `<head>` with no `@import` chains. For the MVP, the combined CSS should be small enough (under 30 KB) that inlining is unnecessary.
- **JS loading**: `defer` attribute on all scripts. No render-blocking JS.
- **No third-party dependencies**: no CDN fonts, no analytics, no external scripts in the MVP. Add only when needed and approved.

---

## Metadata Baseline

Every page shell should ship with:

- `charset`;
- `viewport`;
- `lang`;
- page title;
- meta description;
- meaningful heading structure.

Add after deployment details are known:

- canonical;
- `hreflang`;
- Open Graph;
- Twitter cards.

Add only after all event facts are confirmed:

- `application/ld+json` event schema on the homepage.

Suggested title pattern:

- PT: `Nome da Página | Semana Solidária U.Porto`
- EN: `Page Name | Semana Solidária U.Porto`

Suggested description length:

- aim for 140 to 160 characters.

---

## Page Specifications

### `pt/index.html`

Required sections:

- hero with event name, dates (21–26 de setembro), and intro hook;
- introductory text (confirmed — from information.pdf section 2);
- week-at-a-glance highlights (opening ceremony, key activity categories, closing event);
- primary CTA linking to program page;
- secondary CTA linking to the "Como participar" anchored section in programa.html (elevates participation guidance to the homepage);
- ODS (Objetivos de Desenvolvimento Sustentável) callout;
- partner section (text list until logos are approved);
- social/campaign callout: a small section with the `#VoluntariadoUPorto` hashtag, links to U.Porto social media profiles, and a "Partilha a tua experiência" prompt encouraging visitors to share on social media. Keep lightweight — no embedded feeds or dynamic content;
- footer.

If the event title is not finalized, use "Semana Solidária U.Porto" as a working title.

Content status:

- ✅ Intro text confirmed (information.pdf section 2)
- ✅ Dates confirmed (Sep 21–26)
- ⏳ Final event title pending (two options)
- ⏳ Hero image/branding pending
- ⏳ Partner logos pending

### `pt/programa.html`

Required sections:

- page intro with week overview;
- opening ceremony block (21 de setembro, 11h30);
- week-long activities:
  - feiras/exposições dedicadas ao voluntariado (3 polos, 21–25 set);
  - campanha de recolha de bens de primeira necessidade (toda a semana, pontos de recolha em cada UO);
  - recolha de papel para o Banco Alimentar (toda a semana);
  - campanha "Mega Dávida de Sangue" (parceria FAP + IPST, todas as faculdades, toda a semana);
- daily activities (22–26 set, 10h–17h):
  - ação lúdico-pedagógica;
  - ação de sensibilização na área da saúde oral (FMDUP em IPSS);
  - ações de voluntariado ambiental;
  - ações de sensibilização ligadas à sustentabilidade;
  - rastreios na área da saúde (e.g., IST, tensão arterial, glicemia, visão, audição, risco cardiovascular — illustrative per brief, final list TBD);
  - workshops (e.g., saúde mental, desporto, nutrição, inclusão, voluntariado — illustrative per brief);
- closing event (26 de setembro):
  - caminhada solidária (3,5–4 km → Estádio Universitário);
  - sessão de pilates/desporto (CDUP);
  - cerimónia de entrega dos bens doados;
- "Como participar" section:
  - general participation info (who can join — academic community, public, or both);
  - donation drive guidance (what qualifies as bens de primeira necessidade, collection point locations per UO);
  - blood donation campaign participation (FAP + IPST logistics, any requirements);
  - solidarity walk participation (meeting point, distance 3.5–4 km, what to expect);
  - any activities requiring prior sign-up vs. open drop-in;
- ODS reference per activity (required per brief; specific mappings TBD);
- note that the program may be subject to change.

Content status:

- ✅ Activity categories confirmed (information.pdf section 3)
- ✅ Opening and closing events confirmed
- ⏳ Day-by-day schedule per activity TBD
- ⏳ Specific venues per activity TBD
- ⏳ Workshop details and facilitators TBD
- ⏳ Participation rules and logistics TBD

### `pt/localizacao.html`

Required sections:

- overview of the 3 U.Porto poles;
- list of participating faculties (when confirmed);
- community/external locations (comunidade externa — IPSS and partner venues where off-campus activities take place, e.g., oral health actions);
- Estádio Universitário info (closing event);
- external map links per venue;
- transport guidance if confirmed.

Use external map links rather than embedded maps.

Content status:

- ✅ 3 poles confirmed as general event locations
- ✅ Estádio Universitário confirmed for closing
- ⏳ Specific faculties and rooms TBD
- ⏳ External community venue details TBD
- ⏳ Address and transport details TBD

### `pt/organizacao.html`

Required sections:

- ReVIReS description and mission;
- current-edition partners (Câmara do Porto, Caixa Geral de Depósitos, FAP, Associações de Estudantes, Associações de Voluntariado, CDUP, BAMBUP);
- contact details;
- links to U.Porto social media and `#VoluntariadoUPorto` (prominent placement — these support the broader communication campaign, not just the footer).

Content status:

- Partial: core partners confirmed (Câmara do Porto, CGD, FAP, AE's, Associações de Voluntariado, CDUP, BAMBUP); additional partners may be added (brief includes open "Outras" slot)
- ⏳ ReVIReS description text TBD
- ⏳ Contact details TBD
- ⏳ Partner logos TBD

### `pt/privacidade.html`

Required sections:

- event-specific privacy summary;
- image/video notice (event photography and social media use);
- data processing explanation if any sign-up forms are used;
- official privacy policy links.

Minimum baseline fallback (can ship without full organizer approval):

- statement that the event may involve photography and video recording for institutional communication and social media;
- statement that no personal data is collected through the website (true for the static MVP with no forms);
- link to the U.Porto institutional privacy policy;
- note that the full event-specific privacy notice will be published when available.

This fallback ships if the full approved text has not been received by launch. It is replaced in full once organizer-approved copy is available.

Content status:

- ✅ Minimum baseline fallback defined (see above)
- ⏳ Full event-specific privacy text — requires organizer input and approval

### `pt/dia-voluntariado.html` (Phase 2)

This page covers the Dia Internacional do Voluntariado (December 4–5, 2026) activities:

Required sections:

- concurso de fotografia:
  - theme: Ano Internacional dos Voluntários para o Desenvolvimento Sustentável;
  - rules and eligibility;
  - submission process;
  - prizes (if sponsorship is confirmed);
  - jury;
  - exhibition (4 de dezembro, Reitoria);
- Prémio do Dia do Voluntariado:
  - description and eligibility;
  - award ceremony (4 de dezembro);
- mesa-redonda de partilha de experiências de voluntariado;
- link back to the main Semana Solidária pages.

Content status:

- ✅ Photography contest theme confirmed (Ano Internacional dos Voluntários para o Desenvolvimento Sustentável)
- ✅ Exhibition at Reitoria on Dec 4 confirmed
- ✅ Award ceremony on Dec 4 confirmed (Dec 5 is Saturday)
- ✅ Mesa-redonda (round table) of volunteer experiences confirmed
- ⏳ Contest rules, jury, prizes, submission process TBD
- ⏳ Volunteer Award criteria and eligibility TBD
- ⏳ Sponsorship for prizes TBD

### English Pages (Phase 2)

Build after PT copy freeze.

Rules:

- keep URL structure mirrored;
- translate whole pages, not fragments;
- do not ship mixed PT/EN content.

---

## Archive Reference Map

These files are from the Grande Festa Alumni (a different event). Use them for **structural HTML/CSS patterns only**.

| File | Structural pattern to reuse |
| --- | --- |
| `references/2018/program.html` | Timeline component layout |
| `references/2018/organization.html` | Partner grid and footer structure |
| `references/2018/location.html` | Location page hierarchy |
| `references/2018/privacy-policy.html` | Privacy page section structure |
| `references/2017/programa_index.html` | Multi-activity program with category grouping |
| `references/2017/organizacao_index.html` | Organization page framing |
| `references/2017/contacto_index.html` | Contact block layout (folded into organization page) |
| `references/2017/localizacao_index.html` | Multi-section location page |
| `references/2018/atividades-desportivas-e-culturais.html` | Activity detail page pattern |

Do not reuse any event-specific content, copy, dates, names, or assets from these files.

---

## Scope Tiers

### Tier 1 — Launch Blockers

- Folder structure and page files.
- CSS tokens, reset, base typography.
- Component styles (nav, hero, cards, activity grid, timeline, footer, buttons).
- Shared header and footer on all pages.
- Mobile menu (off-canvas nav with `aria-expanded`, Escape key).
- Responsive layout at all breakpoints.
- Semantic HTML, skip links, visible focus states.
- Correct event content on all PT MVP pages.
- `index.html` root entry and `404.html`.
- Meta titles and descriptions on all pages.

### Tier 2 — Ship Soon After

- Countdown timer (date is confirmed — can ship with Tier 1 if ready).
- Partner logos (once assets are approved).
- OG and Twitter metadata.
- Self-hosted fonts (use system stack until ready).
- Favicon set (once branding is finalized).

### Tier 3 — Nice to Have

- Scroll-reveal animations (`scripts/scroll-reveal.js` + `styles/animations.css`).
- Print stylesheet (`@media print` rules).
- Dark mode (`styles/dark-mode.css`).
- `pt/dia-voluntariado.html` (Phase 2 page).
- EN pages.
- Event schema (`application/ld+json`).

---

## Implementation Sequence

### Track A: Structural Build

1. Create folders (`pt/`, `en/`, `styles/`, `scripts/`, `assets/`).
2. Create page files for PT MVP (shells with shared structure).
3. Create `global.css` with reset, tokens, base typography, and utilities.
4. Create `components.css` with nav, hero, buttons, cards, activity grid, timeline, partner grid, and footer.
5. Create preview-safe `index.html`.
6. Create `404.html`.
7. Add shared header/footer to all PT page shells.
8. Add `scripts/menu.js`.
9. Add page-level metadata placeholders to every shell.

### Track B: Content Confirmation

10. Confirm final event title.
11. Confirm day-by-day schedule and venue details per activity.
12. Confirm ReVIReS contact info and description text.
13. Confirm partner logo assets.
14. Confirm privacy policy text.
15. Receive ReVIReS branding (logo, event image).
16. Confirm participation logistics: eligibility, drop-in vs. sign-up rules, donation guidelines, collection-point locations, blood donation requirements, walk meeting point.
17. Confirm activity-to-ODS mappings (required per brief — every activity must reference specific ODS).

### Track C: PT MVP Population

18. Populate homepage with intro text (from information.pdf section 2), highlights, CTA, and "Como participar" CTA.
19. Populate program page with activity categories, schedule, and "Como participar" section.
20. Populate location page with venue info.
21. Populate organization page with ReVIReS info and partners.
22. Populate privacy page (minimum baseline fallback if full text not yet approved).
23. Add approved imagery and partner assets.
24. Add countdown timer.
25. Run accessibility and mobile QA.

### Track D: Phase 2

26. Build `pt/dia-voluntariado.html` when contest details are confirmed.
27. Add EN pages once PT copy is frozen.
28. Add `hreflang` and canonical tags after deployment URL exists.
29. Add OG and Twitter metadata.
30. Add event schema once all facts are final.

### Track E: Optional Enhancements (Tier 3)

31. Add scroll-reveal animations.
32. Add print stylesheet.
33. Add dark mode (tested page by page).

---

## Accessibility Testing Methodology

Step 23 ("Run accessibility and mobile QA") should follow this process:

### Automated

- Run Lighthouse accessibility audit on every page.
- Run axe DevTools browser extension on every page; resolve all critical and serious violations.

### Manual — Keyboard

- Tab through every page from top to bottom. Verify: all interactive elements receive focus, focus order is logical, focus indicator is always visible, skip link works.
- Open and close the mobile menu using only keyboard (Tab to toggle, Enter to open, Escape to close).

### Manual — Screen Reader

- Spot-check homepage and program page with NVDA (Windows) or Orca (Linux) or VoiceOver (macOS).
- Verify: page title is announced, landmarks are identified, headings structure makes sense, images have meaningful alt text, CTA buttons are clearly labeled.

### Color Contrast

- Verify all text meets WCAG AA contrast ratios: 4.5:1 for normal text, 3:1 for large text (18px+ bold or 24px+ regular).
- Use browser DevTools color picker or the WebAIM Contrast Checker.
- Specifically check: gold text on cream, brown text on cream, inverse text on dark surfaces, and button text on accent background.

### Responsive

- Test every page at 320px width — no horizontal scrolling, no clipped content.
- Test at each breakpoint boundary (639px, 640px, 767px, 768px, 1023px, 1024px, 1279px, 1280px).

---

## Verification Checklist

- [ ] Structural build started before all content gates were resolved.
- [ ] No archived Alumni festa content was published as current Semana Solidária fact.
- [ ] Every page has `doctype`, `lang`, `charset`, `viewport`, `title`, and meta description.
- [ ] `index.html` works as a preview-safe entry page.
- [ ] `404.html` exists.
- [ ] Shared header/footer is consistent across all pages.
- [ ] Navigation only links to pages that exist.
- [ ] Navigation works with keyboard only.
- [ ] Skip link works on every page.
- [ ] Focus states are visible.
- [ ] Layout works at `320px` with no horizontal scrolling.
- [ ] Breakpoint behavior matches the responsive table above.
- [ ] Images are optimized and use appropriate formats.
- [ ] No meaningful image uses generic alt text.
- [ ] Sponsor/media assets are approved before publication.
- [ ] Privacy page ships with at least the minimum baseline fallback; full approved text replaces it when available.
- [ ] ODS references are included on every activity, using confirmed mappings from ReVIReS (not implementer guesses).
- [ ] "Como participar" section exists in programa.html with confirmed participation logistics.
- [ ] Homepage includes a CTA linking to "Como participar".
- [ ] If EN ships, page pairs are complete and correctly linked.
- [ ] If countdown ships, it targets 2026-09-21T11:30:00+01:00 (opening ceremony, Europe/Lisbon).
- [ ] If dark mode ships, it is fully verified page by page.
- [ ] If motion ships, it respects `prefers-reduced-motion`.

---

## Summary

The correct implementation strategy is:

- start structural work immediately using the design foundation from the previous project;
- confirm event facts from ReVIReS in parallel;
- ship a Portuguese MVP first (5 pages);
- use the 2017/2018 archives as HTML/CSS structural references only — never as content;
- use `information.pdf` and organizer confirmation as the only source of current-event content;
- define concrete tokens, components, breakpoints, metadata, and asset rules up front;
- add the Dia do Voluntariado page, bilingual support, and optional polish after the PT MVP is stable.
