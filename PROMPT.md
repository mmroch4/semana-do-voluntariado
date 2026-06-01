# Pencil UI Prompts for Semana Solidária U.Porto

Prompts to paste directly into Pencil UI.

Usage:
- Run the `Global Foundation Prompt` first for a coherent system.
- Then run one page prompt at a time.
- Each page prompt is self-contained if you skip the foundation.
- All copy in European Portuguese (`pt-PT`).
- Never invent event facts. Use a minimal inline note `Informação em atualização.` for pending data — not a large card, just a quiet line.

Visual media strategy:
- No approved photography exists yet. Use **realistic placeholder images** throughout — warm-toned, human, authentic. Subjects: students volunteering, community engagement, Porto university campuses, health and wellbeing, nature/environment, group activities outdoors.
- Use **video poster blocks** (thumbnail + centered play button overlay) as featured media moments — not autoplay, just a visual anchor for future embedded video.
- Aim for at least **one major image or video block per page section**. The site should feel image-led, not text-led.
- Images should feel candid, warm, and real — not corporate stock. Think documentary style, natural light, warm color grading that matches the cream/brown palette.

---

## Global Foundation Prompt

```text
Create a modern, minimal, image-rich design system for a static university event microsite called "Semana Solidária U.Porto".

THIS IS THE MOST IMPORTANT RULE — FOLLOW IT STRICTLY:
- The design must be spacious, visual, and image-forward. NOT text-heavy.
- Every section must be at least 50% whitespace and visual content (images, video posters, abstract graphics).
- No section should have more than 2 short lines of body text.
- Replace explanation with visuals and typography — images, video blocks, and type scale communicate instead of paragraphs.
- Think modern European cultural institution website with strong photography, not information brochure.

Visual personality:
- Clean, fluid, contemporary, image-led.
- Generous whitespace. Let elements breathe.
- Strong typographic hierarchy — oversized headlines, dramatic scale contrast.
- Rich with photography and video poster blocks throughout.
- Warm but restrained. Confident, not decorative.
- Closer to a gallery exhibition site or Scandinavian civic design than to a newsletter or brochure.

Photography direction:
- Use realistic placeholder photography throughout the design. Every page should feel visually rich.
- Image subjects: students volunteering, people helping each other, community gatherings, Porto university campuses, health screenings, environmental cleanup, walking groups, outdoor events, donation drives.
- Tone: candid, warm, natural light, documentary-style. Not corporate or staged.
- Color grading: warm tones that harmonize with the cream/brown/gold palette.

Video direction:
- Use video poster blocks as featured media moments — a large thumbnail image with a semi-transparent dark overlay and a centered play button circle.
- Video blocks are visual anchors, not functional players. They show a still frame and suggest "watch this" — click-to-play will come later.

Palette:
- Brown: #6B3A2A
- Gold: #D4A843
- Cream: #F5F0E8
- Dark text: #3D1F15
- Muted text: #7A5C50
- Alt surface: #EDE5D8
- Dark surface: #3D1F15
- Inverse text: #FDF9F3

Typography:
- Body: Inter (humanist sans). Keep body text small, short, and secondary.
- Headings: Playfair Display (editorial serif). Use at dramatic scale — make headlines the dominant visual element.
- Strong contrast between heading size and body size.

Layout:
- Desktop: 1440px frame, 1152px container, 1280px wide container.
- Tablet: 834px frame.
- Mobile: 390px frame.
- Long scrolling pages with strong vertical rhythm and generous section padding.

Components to build (keep each visually minimal):
- Sticky header: logo left, horizontal nav right. Height ~72px mobile, ~84px desktop. Clean, thin, light.
- Mobile nav: off-canvas from right, slide transition. Not a modal — no backdrop, no focus trap.
- Homepage hero: large, atmospheric, image-backed. Full-bleed background image with dark overlay, oversized inverse-color title, short subtitle, countdown, 2 CTAs. At least 80svh tall. Should feel cinematic and immersive.
- Compact page hero: shorter variant for inner pages. Background image with overlay, or solid warm surface. Title + 1-line subtitle only.
- Image + text split: a 50/50 or 60/40 layout — large image on one side, short heading + 1-2 lines + optional CTA on the other. Use this to break up vertical rhythm.
- Image card: card with a top image area (roughly 60% of card height) and below it: label chip + title + 1 short line. The image makes the card feel visual, not textual.
- Video poster block: wide rectangle with a placeholder thumbnail image, a dark semi-transparent overlay (rgba(61,31,21,0.45)), and a centered play-button circle (64px, white border, white triangle). Can be full-bleed or contained width.
- Photo strip: a horizontal row of 3-4 images edge-to-edge, no gaps or very tight gaps (4px). Full container width. Used between sections to add visual rhythm.
- Primary button: gold background, dark text, pill shape, 48px height.
- Secondary button: transparent, brown border, pill shape.
- Card (text-only): clean, minimal border, subtle shadow. Small label chip + short title + 1 line of body. Max 3 lines of text total.
- Notice line: a single quiet line in muted text for pending info. NOT a bordered card — just an inline note styled as secondary text. Minimal visual weight.
- Timeline item: time on left rail, short title + 1-line description on right. Optional small square thumbnail image (80x80) next to the content. Generous vertical spacing between items.
- Countdown: 4 units (dias, horas, minutos, segundos) — refined, minimal, monospaced feel. Numbers should be the hero, labels tiny.
- Partner grid: centered items, generous gaps, neutral containers. Text-only until logos arrive.
- Footer: dark surface, 3 columns desktop, 1 column mobile. Compact. Short text, no paragraphs.
- Section header: H2 only, or H2 + 1 short line. Never H2 + a full paragraph.

Density rules (critical):
- Cards: image area + max 3 lines of text total (label + title + 1 body line).
- Section intros: max 1 short sentence under the heading, or nothing.
- Hero: background image + title + subtitle + CTA. No paragraphs.
- Footer blocks: title + 3-5 short links or 2 lines of text. No prose.
- Notice placeholders: 1 line of muted text, not a bordered box.
- Every page should have at least 40% of its total area occupied by images or video poster blocks.

Spacing:
- Section vertical padding: 80px mobile, 120px desktop minimum.
- Between section heading and content: at least 48px.
- Between cards in a grid: at least 24px.
- The page should feel airy, never cramped.

Accessibility:
- WCAG 2.1 AA contrast.
- Focus rings on all interactive elements.
- 48px minimum touch targets.
- Active nav state uses underline + color, not color alone.
- Respect prefers-reduced-motion.
- All images must have descriptive alt text.

Deliver:
- Desktop + mobile versions of: header, image-backed hero (both variants), image+text split, image card, video poster block, photo strip, buttons, text card, notice line, timeline item, countdown, partner grid item, footer.
- A spacious, modern, image-rich visual system.
```

---

## Prompt 1: Root Language Selector

```text
Design the root landing page `/index.html` for "Semana Solidária U.Porto".

CRITICAL DESIGN RULE:
This page is a full-screen visual moment. Almost no text — just one powerful image, large type, and two buttons.

Layout:
- Full viewport height. Centered composition.
- Desktop 1440px, tablet 834px, mobile 390px.

Content (this is ALL the text on the page):
- Title: Semana Solidária U.Porto
- Line: Semana da Cidadania, Voluntariado e Responsabilidade Social
- Line: 21–26 de setembro de 2026
- Button: Português (primary)
- Button: English (secondary)

Visual direction:
- Full-bleed background image: a warm, candid photo of students or people in a community setting, or a wide shot of a Porto university campus with people. Warm natural light, slightly desaturated to blend with the cream/brown palette.
- Dark overlay (rgba(61,31,21,0.55)) over the image so white/cream text reads clearly on top.
- Oversized serif title in inverse text as the dominant element.
- Subtitle and date in small, quiet inverse sans text below.
- Button pair below, centered.
- No header, no footer, no nav. Just the immersive visual moment.

What NOT to do:
- No paragraphs. No explanatory text. No "welcome to" copy.
- No plain background with no image. The image IS the page.
- No small, generic language-selector pattern.

Deliver: desktop, tablet, mobile.
```

---

## Prompt 2: Portuguese Homepage

```text
Design the Portuguese homepage `/pt/index.html` for "Semana Solidária U.Porto".

CRITICAL DESIGN RULE:
This must feel like a modern, image-led event landing page. Lead with photography, scale, and visual impact. Minimize text. Every section should be scannable in under 3 seconds. At least 5 distinct images or video blocks must appear on this page.

Desktop 1440px, tablet 834px, mobile 390px.

Header:
- Sticky. Logo: "Semana Solidária U.Porto". Nav: Início (active), Programa, Localização, Organização, Privacidade, Dia do Voluntariado.

SECTION 1 — Hero (full viewport, image-backed):
- Full-bleed background image: warm candid photo of a group of volunteers or students in action outdoors on a university campus.
- Dark overlay so text reads cleanly.
- Oversized title in inverse text: Semana Solidária U.Porto
- Short subtitle: Semana da Cidadania, Voluntariado e Responsabilidade Social — 21 a 26 de setembro de 2026
- Countdown: dias / horas / minutos / segundos (inverse text, targeting Sep 21, 11:30)
- 2 CTAs: "Ver programa" (primary), "Como participar" (secondary)

SECTION 2 — Intro (image + text split):
- Left side: large image of people helping each other or a community moment.
- Right side: H2 "Sobre a Semana Solidária" + 2 SHORT sentences max about the volunteering week and ReVIReS. That's it.
- The image should take at least 50% of the horizontal space.

SECTION 3 — Highlights (3 image cards):
- H2: A semana em destaque
- 3 cards in a row, each with: top image area (ceremony, volunteer action, walking group) + small label chip + title + 1 line.
  - Cerimónia de Abertura (label: Abertura)
  - Ações de Voluntariado (label: Toda a semana)
  - Caminhada Solidária (label: Encerramento)

SECTION 4 — Video block (full-width):
- A wide video poster block spanning the full container width.
- Thumbnail image: people gathered at a university event or campus.
- Dark overlay + centered play button.
- No caption text needed — the visual speaks for itself. Optionally a small line below: "Descobre a Semana Solidária" as a video title.

SECTION 5 — ODS:
- H2: Objetivos de Desenvolvimento Sustentável
- 1 short sentence about alignment with UN SDGs.
- Muted note: Mapeamento das atividades aos ODS em atualização.
- Keep this section very light and spacious.

SECTION 6 — Photo strip:
- Full-width horizontal strip of 4 images edge-to-edge: volunteering, health screening, outdoor activity, donation boxes.
- No text overlay. Pure visual rhythm between sections.

SECTION 7 — Partners:
- H2: Parceiros
- Grid of 7 text items: Câmara do Porto, Caixa Geral de Depósitos, FAP, Associações de Estudantes, Associações de Voluntariado, CDUP, BAMBUP
- Minimal containers with generous spacing.

SECTION 8 — Social callout:
- Large centered: #VoluntariadoUPorto
- 1 short line inviting participation.
- Muted note: Links para redes sociais em atualização.

Footer: ReVIReS info / Links / Contacto (with muted pending note).

Density cap: No section should have more than 2 lines of body text. Images and whitespace do the work.

Deliver: desktop, tablet, mobile.
```

---

## Prompt 3: Portuguese Program Page

```text
Design the Portuguese Program page `/pt/programa.html` for "Semana Solidária U.Porto".

CRITICAL DESIGN RULE:
This is the most content-rich page but it must NOT feel dense. Use image cards, timeline blocks with thumbnails, and strong visual rhythm. No long paragraphs anywhere. Each activity is a compact visual unit — image + label + title + 1 line. Include at least 4 distinct images or video blocks on this page.

Desktop 1440px, tablet 834px, mobile 390px.

Header: same. Active: Programa.

SECTION 1 — Hero (compact, image-backed):
- Background image: a wide shot of an outdoor university event or campus gathering.
- Dark overlay. Title: Programa. Subtitle: Atividades e iniciativas, 21 a 26 de setembro de 2026.

SECTION 2 — Opening (timeline with image):
- H2: Cerimónia de Abertura
- Single timeline item: 21 set · 11h30 → Sessão Solene de Abertura + 1-line description.
- Small square thumbnail next to the timeline content: a formal event or auditorium setting.

SECTION 3 — Week-long activities (image card grid):
- H2: Atividades ao longo da semana
- 4 image cards, each with: top image area + label chip + title + 1 short line.
  - Feiras e Exposições (image: exhibition/fair stalls) (label: Voluntariado)
  - Recolha de Bens (image: donation boxes) (label: Solidariedade)
  - Recolha de Papel (image: recycling/environment) (label: Ambiente)
  - Mega Dádiva de Sangue (image: blood donation) (label: Saúde)

SECTION 4 — Photo strip:
- Full-width horizontal strip of 3 images: health screening, workshop setting, outdoor cleanup.

SECTION 5 — Daily activities (image card grid):
- H2: Atividades diárias
- Short line: 22 a 26 de setembro, 10h–17h.
- 5 image cards: Ação Lúdico-Pedagógica / Saúde Oral em IPSS / Voluntariado Ambiental / Rastreios de Saúde / Workshops
- Each card: top image area + label chip + title + 1 short line.
- Muted note below: Horários e locais por atividade em atualização.

SECTION 6 — Closing (timeline with images):
- H2: Encerramento — 26 de setembro
- 3 timeline items: Caminhada Solidária / Pilates-Desporto / Entrega de Donativos
- Each: time label + title + 1 line + small square thumbnail.

SECTION 7 — How to participate (image-backed action cards):
- H2: Como participar
- 3 large action cards with background images and text overlay:
  - Doar Bens (background: donation/goods image)
  - Dar Sangue (background: blood donation image)
  - Participar em Atividades (background: group activity image)
- Make these feel bold and inviting — like visual CTAs.
- Muted note: Informação detalhada em atualização.

SECTION 8 — Program note:
- 1 quiet centered line: O programa poderá sofrer alterações.

Footer: same.

What NOT to do:
- No text-only cards. Every card should have an image area.
- No dense paragraph explanations.
- No spreadsheet-like timetable.

Deliver: desktop, tablet, mobile.
```

---

## Prompt 4: Portuguese Location Page

```text
Design the Portuguese Location page `/pt/localizacao.html` for "Semana Solidária U.Porto".

CRITICAL DESIGN RULE:
This page should feel spatial, visual, and place-driven. Each location block gets a strong image. Use campus photography to give each polo a sense of place. Keep text minimal.

Desktop 1440px, tablet 834px, mobile 390px.

Header: same. Active: Localização.

SECTION 1 — Hero (compact, image-backed):
- Background image: aerial or wide shot of Porto or a university campus.
- Dark overlay. Title: Localização. Subtitle: Três polos, diversas faculdades, locais da comunidade.

SECTION 2 — Polos (3 image cards):
- H2: Polos da U.Porto
- 3 large image cards, each with: top image area (photo of each campus area) + title + 1 short line.
  - Polo I (image: central Porto/downtown university buildings)
  - Polo II — Asprela (image: Asprela campus, modern buildings)
  - Polo III — Campo Alegre (image: Campo Alegre campus, green area)
- Make these the visual centerpiece of the page.

SECTION 3 — Photo strip:
- Full-width strip of 3 images: different campus views or faculty buildings.

SECTION 4 — Faculties:
- H2: Faculdades participantes
- Muted note: Lista em atualização.

SECTION 5 — Community:
- H2: Locais da comunidade
- 1 short line about off-campus IPSS and partner venues.
- Muted note: Informação em atualização.

SECTION 6 — Estádio (image + text split):
- Left: large image of a sports stadium or university athletics ground.
- Right: H2 "Estádio Universitário" + 1 line about the solidarity walk destination and closing activities on 26 de setembro.
- Muted note: Morada e acessos em atualização.

SECTION 7 — Transport:
- H2: Como chegar
- Muted note: Informação em atualização.

Footer: same.

What NOT to do:
- No fake map embeds. No travel-app UI.
- No text-only location cards — every polo card needs an image.

Deliver: desktop, tablet, mobile.
```

---

## Prompt 5: Portuguese Organization Page

```text
Design the Portuguese Organization page `/pt/organizacao.html` for "Semana Solidária U.Porto".

CRITICAL DESIGN RULE:
Build trust through strong visual presence — a confident image of the organizers or the university, a clean partner grid, and minimal copy. Use images to convey credibility and warmth.

Desktop 1440px, tablet 834px, mobile 390px.

Header: same. Active: Organização.

SECTION 1 — Hero (compact, image-backed):
- Background image: university building facade or campus with people.
- Dark overlay. Title: Organização. Subtitle: ReVIReS — Rede de Voluntariado, Inclusão e Responsabilidade Social da U.Porto.

SECTION 2 — ReVIReS (image + text split):
- Left: large image — group of people collaborating, or a university institutional setting.
- Right: H2 "Sobre a ReVIReS" + 2 short sentences about the network's mission.
- Muted note: Descrição detalhada em atualização.

SECTION 3 — Video block (full-width):
- Video poster block: thumbnail of a community or university event.
- Dark overlay + centered play button.
- Optional small line below: "Conheça a ReVIReS"

SECTION 4 — Partners:
- H2: Parceiros
- Partner grid: Câmara do Porto, Caixa Geral de Depósitos, FAP, Associações de Estudantes, Associações de Voluntariado, CDUP, BAMBUP
- Clean, generous grid. Text-only items for now.
- Muted note: Logótipos em atualização.

SECTION 5 — Contact:
- H2: Contacto
- Muted note: Informação de contacto em atualização.

SECTION 6 — Social:
- Large centered: #VoluntariadoUPorto
- 1 short line about following and sharing.
- Muted note: Links em atualização.

Footer: same.

Deliver: desktop, tablet, mobile.
```

---

## Prompt 6: Portuguese Privacy Page

```text
Design the Portuguese Privacy page `/pt/privacidade.html` for "Semana Solidária U.Porto".

CRITICAL DESIGN RULE:
Legal/privacy content should feel calm and readable. This is the most text-acceptable page, but still keep each subsection to 2-3 short sentences. Use a narrow reading column and generous spacing. A subtle hero image gives the page visual weight.

Desktop 1440px, tablet 834px, mobile 390px.

Header: same. Active: Privacidade.

SECTION 1 — Hero (compact, subtle image):
- Background image: a quiet, abstract or architectural campus shot, lightly desaturated.
- Gentle overlay. Title: Privacidade. Subtitle: Aviso de privacidade da Semana Solidária U.Porto.

SECTION 2 — Privacy content (narrow reading column, max ~65ch):
- H2: Aviso de privacidade
- H3: Captação de imagem → 2-3 sentences about event photography/video for institutional use.
- H3: Dados pessoais → 1-2 sentences: this site collects no personal data, no forms, no cookies, no analytics.
- H3: Política institucional → 1 sentence + link to U.Porto privacy policy.
- Muted note: Aviso completo em atualização.

Footer: same.

What NOT to do:
- No legal-wall formatting. No dense blocks.
- Keep subsections visually separated with generous spacing.

Deliver: desktop, tablet, mobile.
```

---

## Prompt 7: Portuguese Dia Internacional do Voluntariado

```text
Design the Dia Internacional do Voluntariado page `/pt/dia-voluntariado.html` for "Semana Solidária U.Porto".

CRITICAL DESIGN RULE:
This page should feel visually rich and commemorative — a celebration of volunteering. Photography contest content is inherently visual, so lean into that. Use large image blocks, exhibition-style layouts, and strong visual storytelling.

Desktop 1440px, tablet 834px, mobile 390px.

Header: same. Active: Dia do Voluntariado.

SECTION 1 — Hero (compact, image-backed):
- Background image: a warm photo of volunteers or a community celebration moment.
- Dark overlay. Title: Dia Internacional do Voluntariado. Subtitle: 4 e 5 de dezembro de 2026.

SECTION 2 — Photography contest (image-led layout):
- H2: Concurso de Fotografia
- Short theme line: Ano Internacional dos Voluntários para o Desenvolvimento Sustentável
- 3 image cards:
  - Tema (image: volunteer in nature/community) + label + title + 1 line
  - Exposição (image: gallery/exhibition space) + label: Reitoria, 4 dez + title + 1 line
  - Regulamento (image: abstract/camera) + label + title + muted note: em preparação
- Muted note below: Informação sobre júri e prémios em atualização.

SECTION 3 — Photo strip or image mosaic:
- 3-4 images: examples of the kind of photography the contest might feature — volunteering, sustainability, community.
- Pure visual moment, no text.

SECTION 4 — Volunteer Award (timeline with image):
- H2: Prémio do Dia do Voluntariado
- Timeline item: 4 dez → Cerimónia de Entrega + 1-line about recognizing outstanding volunteers.
- Small thumbnail: award ceremony or handshake moment.
- Muted note: Critérios em atualização.

SECTION 5 — Round table (image + text split):
- Left: image of a panel discussion or round-table setting.
- Right: H2 "Mesa-Redonda" + 1-2 short sentences about the volunteer experience sharing session.
- Muted note: Detalhes em atualização.

SECTION 6 — Back link:
- Centered: 1 line connecting to the main Semana Solidária + secondary CTA to the program page.

Footer: same.

Deliver: desktop, tablet, mobile.
```

---

## Prompt 8: 404 Page

```text
Design the 404 page for "Semana Solidária U.Porto".

CRITICAL DESIGN RULE:
Ultra-minimal but atmospheric. Full viewport, centered content over a subtle background image.

Desktop 1440px, tablet 834px, mobile 390px.

Content (everything on the page):
- Oversized: 404 (make this enormous — the main visual element)
- Title: Página não encontrada
- Subtitle: Page not found
- Button: Página inicial (PT)

Layout:
- Full viewport height, vertically and horizontally centered.
- Subtle background image: a soft, blurred or heavily desaturated campus or landscape shot at very low opacity, so the page feels warm but not busy.
- Light overlay to keep text contrast strong.
- No header, no footer, no nav. Just the core content over the atmospheric background.
- Maximum whitespace. Elegant and unhurried.

What NOT to do:
- No sad illustrations, broken-page metaphors, or jokes.
- No busy recovery options.
- No plain flat background — use the subtle image to give the page warmth.

Deliver: desktop, tablet, mobile.
```
