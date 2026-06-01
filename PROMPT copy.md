# Pencil UI Prompts for Semana Solidária U.Porto

These prompts are written to be pasted directly into Pencil UI generator.

Recommended usage:
- If you want a coherent multi-page design system, run the `Global Foundation Prompt` first.
- Then run one page prompt at a time.
- If you skip the foundation prompt, each page prompt is still self-contained enough to work on its own.
- Keep all copy in European Portuguese (`pt-PT`) for the Portuguese pages.
- Do not invent missing event facts. Use polished placeholder modules labeled `Informação em atualização.` wherever organizer data is still pending.

## Global Foundation Prompt

```text
Create the site-wide visual foundation and reusable component system for a static, accessibility-first, Portuguese-first event microsite called “Semana Solidária U.Porto”.

Context:
- This is a civic and institutional University of Porto event website.
- The event is “Semana da Cidadania, Voluntariado e Responsabilidade Social”.
- Organizer: ReVIReS, Rede de Voluntariado, Inclusao e Responsabilidade Social da U.Porto.
- Main event dates: 21 a 26 de setembro de 2026.
- Secondary related page: Dia Internacional do Voluntariado, 4 e 5 de dezembro de 2026.
- This is not a startup, dashboard, app landing page, or music festival website.
- The tone must feel warm, human, trustworthy, civic, inclusive, and action-oriented.
- The design must feel high quality even though the final logo, event image, partner logos, and some factual details are still pending.

Design direction:
- Editorial and contemporary.
- Institutional without feeling bureaucratic.
- Warm, calm, optimistic, and well-structured.
- Avoid generic web-template styling.
- Avoid glassmorphism, neon gradients, dark cyber aesthetics, loud gamification, and default startup hero layouts.
- If any visual atmospheric layer is needed, use subtle abstract shapes, grain, paper-like texture, civic illustration cues, or layered warm surfaces instead of stock photos.

Core palette:
- Primary brown: `#6B3A2A`
- Accent gold: `#D4A843`
- Warm cream: `#F5F0E8`
- Main dark text: `#3D1F15`
- Secondary muted text: `#7A5C50`
- Alternate warm surface: `#EDE5D8`
- Dark footer/background surface: `#3D1F15`
- Inverse text: `#FDF9F3`
- Border: `#D4C4B0`
- Subtle border: `#E8DDD0`

Typography:
- Body: Inter or a very close humanist sans.
- Headings: Playfair Display or a very close editorial serif.
- Body text should feel readable and modern.
- Headings should feel dignified but not ceremonial.
- Use strong typographic hierarchy rather than decorative UI tricks.

Layout:
- Create a desktop frame around 1440px wide, a tablet frame around 834px wide, and a mobile frame around 390px wide.
- Design long scrolling pages, not app screens.
- Container width around 1152px.
- Wide container option around 1280px for hero/partner sections.
- Mobile-first behavior.
- Breakpoint thinking around 640 / 768 / 1024 / 1280.

Build a reusable design system with these components:
- Sticky site header.
- Text-based logo/wordmark because no approved logo asset exists yet.
- Desktop navigation.
- Mobile menu toggle and off-canvas navigation panel from the right.
- Skip link.
- Primary CTA button.
- Secondary CTA button.
- Section header block with eyebrow optional, H2, supporting paragraph.
- Homepage hero block.
- Compact internal-page hero block.
- Notice card for pending data with the label and copy `Informação em atualização.`
- Standard content card.
- Activity card with optional category label and future-ready ODS badge area.
- Timeline row item with time rail and content block.
- Partner text-card or neutral logo-card.
- Contact/info card.
- Countdown module with four units: dias, horas, minutos, segundos.
- Footer with three content columns on desktop and one column on mobile.

Accessibility requirements:
- Design for WCAG 2.1 AA.
- Clear focus styles.
- Minimum touch targets 44px, ideally 48px.
- Strong contrast on all text and controls.
- All page structures should clearly support semantic landmarks and heading hierarchy.
- Make active navigation state visible through more than color alone.
- Motion should be subtle and easily removable.

Interaction rules:
- Mobile nav slides in from the right.
- It is navigation, not a modal. No focus trap styling.
- Buttons need hover, focus, and pressed states.
- Cards need hover states only if they are interactive.
- Countdown should look refined, not gimmicky.

Placeholder strategy:
- Because many organizer details are still pending, create a polished notice-card pattern that looks intentional.
- Use that pattern for missing contact details, social links, venue specifics, ODS mappings, participation logistics, and legal text.
- The site must never look broken or empty when content is missing.

Deliverables:
- A reusable visual system.
- Desktop and mobile versions of the shared header.
- Desktop and mobile versions of the footer.
- Button states.
- Card styles.
- Notice-card style.
- Countdown style.
- Partner-grid style.
- Internal page hero style.
- A consistent warm editorial visual language that can scale across all pages.
```

## Prompt 1: Root Language Selector Page

```text
Design the root landing page for the microsite at `/index.html`.

Use the Semana Solidária U.Porto site-wide visual language:
- Warm editorial civic design.
- Brown, gold, and cream palette.
- Strong serif headline + clean sans body.
- Static website feel, not app UI.
- Text-based wordmark because no final logo is available.
- No stock photography.

Page purpose:
- This is the preview-safe entry page.
- It must not auto-redirect.
- It should introduce the event and let users choose the site language.
- Portuguese is primary.
- English is secondary and may be shown as available soon if needed.

Create:
- One desktop long-screen frame around 1440px wide.
- One tablet frame around 834px wide.
- One mobile frame around 390px wide.
- Show how the same page responds cleanly across desktop, tablet, and mobile.

Required content:
- Event title: `Semana Solidária U.Porto`
- Supporting line: `Semana da Cidadania, Voluntariado e Responsabilidade Social`
- Date line: `21-26 de setembro de 2026`
- Primary button: `Português`
- Secondary button: `English`

Layout and hierarchy:
- Build a refined hero-first composition.
- The page should feel like a ceremonial doorway into the microsite, but still practical and contemporary.
- Centered composition is acceptable if it feels deliberate and premium.
- Another good option is a softly asymmetrical layout with centered headline and horizontally aligned language actions below.
- Keep the page relatively minimal, but not barren.

Visual treatment:
- Use a typographic hero on a warm cream background with layered brown and gold accents.
- Add subtle shape work, civic motifs, or abstract solidarity-inspired forms in the background.
- Do not use a photo placeholder.
- The overall mood should suggest participation, care, university culture, and public trust.

Specific design instructions:
- Include a small text logo or wordmark at the top left or top center.
- Make the event title the visual anchor.
- Make the subtitle and date clearly readable but subordinate to the title.
- Create a button group with stronger emphasis on `Português`.
- If you choose to mark English as not yet fully available, do it elegantly with microcopy rather than a disabled, broken-looking control.

Accessibility:
- Strong contrast.
- Clear focus styles.
- Keyboard-friendly button group.
- Clean reading order.

What to avoid:
- Generic “select language” page with no atmosphere.
- Corporate portal blandness.
- Empty white screen with two buttons and nothing else.
- Over-designed splash page with no clarity.

Deliver:
- Desktop, tablet, and mobile variants.
- Final visual styling for the language buttons.
- Optional subtle note below the buttons if English is not live yet.
- A polished entry-point page that clearly belongs to the same microsite as the remaining pages.
```

## Prompt 2: Portuguese Homepage

```text
Design the Portuguese homepage for the static event microsite at `/pt/index.html`.

Use the Semana Solidária U.Porto visual foundation:
- Warm, human, civic, trustworthy.
- Editorial typography.
- Brown `#6B3A2A`, gold `#D4A843`, cream `#F5F0E8`.
- Inter-style sans for body, Playfair-style serif for headings.
- No dependence on photography or final brand assets.
- Institutional, but alive and welcoming.

Create:
- One desktop page around 1440px wide.
- One tablet page around 834px wide.
- One mobile page around 390px wide.
- Long scrolling page with strong section rhythm.

Primary goals of the homepage:
- Explain what the event is.
- Make participation feel meaningful and accessible.
- Help visitors quickly move to the Program page or the “Como participar” area.
- Balance emotional motivation with institutional credibility.

Header:
- Sticky header.
- Text-based logo: `Semana Solidária U.Porto`
- Nav items:
  - `Início`
  - `Programa`
  - `Localização`
  - `Organização`
  - `Privacidade`
  - `Dia do Voluntariado`
- Desktop horizontal nav.
- Mobile hamburger that opens a right-side off-canvas nav.
- Show active state on `Início`.

Hero section:
- Large homepage hero.
- H1: `Semana Solidária U.Porto`
- Subtitle: `Semana da Cidadania, Voluntariado e Responsabilidade Social — 21 a 26 de setembro de 2026`
- Countdown component targeting the opening ceremony on `21 de setembro de 2026, 11h30`
- Countdown labels:
  - `dias`
  - `horas`
  - `minutos`
  - `segundos`
- Primary CTA: `Ver programa`
- Secondary CTA: `Como participar`

Hero visual direction:
- Do not use a stock photo.
- Make the hero typographic and atmospheric.
- Use warm layered surfaces, subtle abstract forms, and a visual rhythm that suggests movement, solidarity, and public engagement.
- The hero should feel energetic but grounded.

Intro section:
- Section title: `Sobre a Semana Solidária`
- Use a long-form editorial block with these ideas:
  - the week mobilizes the academic community and society around social, environmental, and health causes
  - the University opens its doors to volunteering, awareness actions, and shared experiences
  - the event is organized by ReVIReS
  - it contributes to the Sustainable Development Goals
- Make the text area comfortable to read, not overly wide.

“A semana em destaque” section:
- Use a section header with title and short intro.
- Create three high-quality highlight cards:
  - `Cerimónia de Abertura`
  - `Ações de Voluntariado`
  - `Caminhada Solidária`
- Each card should feel calm, editorial, and useful.
- Allow for category labels like `Abertura`, `Toda a semana`, `Encerramento`.

ODS section:
- Title: `Objetivos de Desenvolvimento Sustentável`
- Explain that all activities align with the SDGs.
- Add a polished notice card with copy equivalent to: `Mapeamento das atividades aos ODS em atualizacao.`
- Visually prepare the site for future ODS badges without forcing them into fake content now.

Partners section:
- Title: `Parceiros`
- Subtitle explaining that the event counts on support from several entities.
- Present these confirmed names in a strong text-grid or neutral partner-card grid:
  - `Câmara do Porto`
  - `Caixa Geral de Depósitos`
  - `FAP`
  - `Associações de Estudantes`
  - `Associações de Voluntariado`
  - `CDUP`
  - `BAMBUP`
- Because logos are not approved yet, make text-only partner treatment feel intentional and dignified.

Social/community section:
- Centered or strongly highlighted block.
- Title: `#VoluntariadoUPorto`
- Supporting text inviting visitors to share their experience and join the volunteering community.
- Add a polished notice card stating that social links are still being updated.

Footer:
- Three information zones on desktop:
  - `ReVIReS`
  - `Ligacoes`
  - `Contacto`
- `Contacto` should use a graceful placeholder notice.
- Footer must feel institutional, compact, and readable.

Accessibility and UX requirements:
- Make the page easy to scan in under 10 seconds.
- Clearly separate confirmed information from pending information.
- Strong CTA hierarchy.
- No horizontal scrolling on mobile.
- Focus states must be visible.
- Countdown must feel elegant, not playful or childish.

What to avoid:
- Tech startup hero composition.
- Empty homepage that depends on a future image.
- Generic icon-card landing-page look.
- Sponsor wall aesthetic.

Deliver:
- Desktop, tablet, and mobile homepage.
- Header and footer states.
- Hero with countdown.
- Highlight card system.
- Notice-card style.
- Partner grid.
- Social/community block.
```

## Prompt 3: Portuguese Program Page

```text
Design the Portuguese Program page at `/pt/programa.html` for “Semana Solidária U.Porto”.

Use the established microsite visual system:
- Warm editorial civic design.
- Brown/gold/cream palette.
- Text-first, static-site feel.
- Calm but highly structured information hierarchy.
- No final brand assets required.

Create:
- Desktop frame around 1440px wide.
- Tablet frame around 834px wide.
- Mobile frame around 390px wide.
- Long, scrollable program page.

Purpose:
- This is the most important utility page in the site.
- It should help visitors understand what happens during the week, what is confirmed, and how they can participate.
- It must remain trustworthy even though some details are still pending.

Header:
- Same site header as homepage.
- Active nav item: `Programa`.

Page hero:
- Compact internal-page hero.
- Title: `Programa`
- Subtitle: `Conheça as atividades e iniciativas da Semana Solidária, de 21 a 26 de setembro de 2026.`

Opening ceremony section:
- Section title: `Cerimónia de Abertura`
- Create a timeline block or high-priority event module.
- Include:
  - `21 set · 11h30`
  - `Sessão Solene de Abertura`
  - short supporting explanation
- This item should feel official and prominent.

Week-long activities section:
- Section title: `Atividades ao longo da semana`
- Supporting text: activities across the week.
- Create a clean activity-card grid.
- Include these cards:
  - `Feiras e Exposicoes`
    - label `Voluntariado`
    - fairs and exhibitions across the 3 polos, 21-25 September
  - `Recolha de Bens`
    - label `Solidariedade`
    - collection of essential goods with collection points in each organic unit
  - `Recolha de Papel`
    - label `Ambiente`
    - paper collection for Banco Alimentar
  - `Mega Dádiva de Sangue`
    - label `Saude`
    - campaign in partnership with FAP and IPST across faculties

Daily activities section:
- Section title: `Atividades diarias`
- Supporting line: `22 a 26 de setembro, das 10h as 17h`
- Create another card grid with these cards:
  - `Acao Ludico-Pedagogica`
  - `Saude Oral em IPSS`
  - `Voluntariado Ambiental`
  - `Rastreios de Saude`
  - `Workshops`
- Design the cards so they can later accept:
  - specific time
  - specific venue
  - activity tags
  - ODS badge

Pending-details notice:
- After the daily activities grid, include a polished notice card for missing details.
- Copy equivalent to: `Horários detalhados e locais específicos por atividade em atualização.`

Closing section:
- Section title: `Encerramento — 26 de setembro`
- Use a timeline layout with separate entries for:
  - `Caminhada Solidária`
  - `Sessão de Pilates / Desporto`
  - `Cerimónia de Entrega de Donativos`
- Make the closing feel celebratory but still structured.

“Como participar” section:
- This section is crucial.
- Use strong hierarchy and make it visually prominent.
- Title: `Como participar`
- Intro text: the event is open to the academic community and wider public, with different forms of participation.
- Show at least three participation cards:
  - `Doar Bens`
  - `Dar Sangue`
  - `Participar em Atividades`
- Make this section feel action-oriented, welcoming, and easy to understand.

Participation logistics notice:
- Include a large, refined notice card stating that eligibility, registration details, logistics, collection-point locations, and meeting-point details are being updated.

Program note:
- Include a subtle closing note that the program may change.
- Style it as supporting institutional copy rather than a warning banner.

Advanced Pencil-friendly design instructions:
- Use reusable section-header blocks.
- Reuse one activity-card component with different labels and content.
- Reuse one timeline-item component.
- Reuse one notice-card component.
- Show future-ready but inactive space for ODS references on activity cards.
- If helpful, include a local in-page subnavigation or filter bar for:
  - `Abertura`
  - `Toda a semana`
  - `Diárias`
  - `Encerramento`
  - `Como participar`
  Only include it if it improves clarity and still feels static-site appropriate.

Accessibility and UX:
- This page must answer:
  - What happens?
  - When does it happen?
  - How do I join?
- Make confirmed details feel solid.
- Make pending details feel intentional and transparent.
- Preserve excellent readability on mobile.

What to avoid:
- Dense spreadsheet-like timetable.
- Generic dashboard cards.
- Overly playful volunteer-campaign aesthetics.
- Fake specificity where details are still unconfirmed.

Deliver:
- Desktop, tablet, and mobile program page.
- Timeline system.
- Activity card system.
- Participation section.
- Notice cards.
- Optional in-page quick navigation.
```

## Prompt 4: Portuguese Location Page

```text
Design the Portuguese Location page at `/pt/localizacao.html` for the Semana Solidária U.Porto microsite.

Use the same warm editorial institutional design system:
- Brown, gold, cream palette.
- Serif headings and sans body.
- Calm, clear, practical.
- No embedded maps.
- No stock photos required.

Create:
- One desktop page around 1440px wide.
- One tablet page around 834px wide.
- One mobile page around 390px wide.

Purpose:
- Help visitors understand where the event takes place.
- Communicate clearly that the initiative is distributed across the 3 polos of U.Porto, faculties, and community venues.
- Prepare the design to absorb more precise location data later without redesigning the page.

Header:
- Same site header.
- Active item: `Localização`.

Page hero:
- Compact internal hero.
- Title: `Localização`
- Subtitle explaining that the event takes place across the three U.Porto polos, several faculties, and community locations.

Polos overview section:
- Section title: `Polos da U.Porto`
- Intro line explaining that activities are distributed across the three poles.
- Create three well-structured location cards:
  - `Polo I`
  - `Polo II — Asprela`
  - `Polo III — Campo Alegre`
- Each card should have:
  - title
  - short descriptive copy
  - optional icon or abstract location marker
  - future-ready room for “atividades neste polo” or “ver locais”

Participating faculties section:
- Section title: `Faculdades participantes`
- Since specifics are still pending, present a polished notice-card state instead of blank space.
- Make the layout future-ready for a list or card grid of faculties and their spaces.

Community locations section:
- Section title: `Locais da comunidade`
- Explain that some activities happen off campus, in IPSS and partner venues.
- Include a notice-card for missing exact venue details.
- Prepare a card/list pattern that could later hold:
  - venue name
  - type
  - associated activity
  - external map link

Estádio Universitário section:
- Section title: `Estádio Universitário`
- Explain that it is the arrival point for the solidarity walk and the place for closing activities on 26 September.
- Include a refined placeholder notice for address and access details.
- This section should feel slightly more highlighted than other location blocks because it anchors the closing event.

Transport section:
- Section title: `Como chegar`
- Show a practical information area for public transport and access guidance.
- Since details are pending, include a polished notice-card.
- Prepare a visual framework for later addition of:
  - metro/bus/car notes
  - accessibility and mobility notes
  - one-click external map actions

Design instructions optimized for Pencil:
- Use reusable location-card and notice-card components.
- Consider a page structure like:
  - hero
  - 3-pole overview cards
  - faculties placeholder block
  - community venues block
  - estadio block
  - transport block
- If you include map-link treatments, use elegant text buttons such as `Abrir mapa` rather than a fake embedded map.
- Use subtle location iconography if it stays accessible and clean.

UX goals:
- Reduce uncertainty.
- Make the distributed nature of the event easy to understand.
- Keep the page useful now, even before exact addresses are known.
- Make future detailed venue data easy to add.

What to avoid:
- Fake map embed.
- Sparse page with only placeholder paragraphs.
- Travel-app visual language.
- Overcomplicated wayfinding UI for a mostly static page.

Deliver:
- Desktop, tablet, and mobile location page.
- Pole cards.
- Venue placeholder system.
- Highlighted estadio section.
- Transport information block.
- External map-link UI treatment.
```

## Prompt 5: Portuguese Organization Page

```text
Design the Portuguese Organization page at `/pt/organizacao.html` for “Semana Solidária U.Porto”.

Use the shared site style:
- Warm civic editorial aesthetic.
- Strong institutional trust.
- Brown/gold/cream palette.
- Serif headline style, sans body copy.
- Text-based brand treatment only.

Create:
- Desktop page around 1440px wide.
- Tablet page around 834px wide.
- Mobile page around 390px wide.

Purpose:
- Explain who organizes the event.
- Build legitimacy and trust.
- Present the partner network even before official logos are available.
- Provide a clear place for contact and social/community presence.

Header:
- Same site header.
- Active item: `Organização`.

Page hero:
- Compact hero.
- Title: `Organização`
- Subtitle: the event is organized by ReVIReS, the volunteering, inclusion, and social responsibility network of U.Porto.

ReVIReS section:
- Title: `Sobre a ReVIReS`
- Use a strong editorial text block describing ReVIReS as the University structure dedicated to volunteering, inclusion, and social responsibility.
- Because the full institutional description is still pending, include a polished notice card beneath or alongside the editorial block.
- This area should feel authoritative, warm, and stable.

Partners section:
- Title: `Parceiros`
- Supporting sentence that the event is developed in collaboration with multiple partner entities.
- Show a refined text-based partner grid or neutral partner cards for:
  - `Câmara do Porto`
  - `Caixa Geral de Depósitos`
  - `FAP`
  - `Associações de Estudantes`
  - `Associações de Voluntariado`
  - `CDUP`
  - `BAMBUP`
- Add a notice that official partner logos are being updated.
- The grid should look intentional without logos.

Contact section:
- Title: `Contacto`
- Create a strong future-ready contact card layout that could later hold email, phone, address, and institutional links.
- For now, show a polished notice-card placeholder.
- Make the section visually complete rather than empty.

Social/community section:
- Strong block centered or semi-centered.
- Title: `#VoluntariadoUPorto`
- Supporting text inviting visitors to follow and share the volunteering experience.
- Include a notice that social links are being updated.
- This section should reinforce community energy without becoming a social-media feed.

Footer:
- Same footer structure as the rest of the site.

Pencil-optimized design instructions:
- Build reusable components:
  - organization intro block
  - partner text-card
  - contact info card
  - notice card
- Consider a strong two-column desktop layout in the ReVIReS section:
  - editorial copy on one side
  - supporting mission/placeholder module on the other
- Keep the partner area structured and compact.
- Use typography and spacing to make the page feel rich even with few assets.

UX goals:
- Answer:
  - Who is behind this initiative?
  - Who supports it?
  - How will I eventually contact them?
- Build confidence even with partial information.

What to avoid:
- Empty institution page with long text and no structure.
- Sponsor-board look.
- Overly corporate CSR aesthetic.

Deliver:
- Desktop, tablet, and mobile organization page.
- ReVIReS intro block.
- Partner grid.
- Contact placeholder system.
- Social/community block.
```

## Prompt 6: Portuguese Privacy Page

```text
Design the Portuguese Privacy page at `/pt/privacidade.html` for the Semana Solidária U.Porto microsite.

Use the same site-wide visual system:
- Warm, calm, readable, institutional.
- Brown/gold/cream palette.
- Editorial long-form typography.
- Static website style.

Create:
- One desktop page around 1440px wide.
- One tablet page around 834px wide.
- One mobile page around 390px wide.

Purpose:
- Communicate privacy and image-capture information clearly.
- Reassure visitors.
- Make legal and institutional information readable instead of intimidating.

Header:
- Same site header.
- Active item: `Privacidade`.

Page hero:
- Compact hero.
- Title: `Privacidade`
- Subtitle: `Aviso de privacidade da Semana da Cidadania, Voluntariado e Responsabilidade Social da U.Porto.`

Main content approach:
- Use a narrow editorial reading column with excellent readability.
- Do not make the text stretch too wide.
- Use clear subsections with spacing and mild dividers.

Required content sections:
- `Aviso de privacidade`
- `Captação de imagem`
- `Dados pessoais`
- `Política de privacidade institucional`

Key facts to express in the UI:
- During the event, photography and video may be captured for institutional communication and social media.
- This static website does not collect personal data.
- There are no registration forms, tracking cookies, or traffic analytics in the MVP website.
- Visitors can consult the official institutional U.Porto privacy policy.
- A fuller event-specific privacy notice will be published when available.

Design instructions:
- Treat this as a calm editorial page, not a legal PDF.
- Use typographic hierarchy, side spacing, and clear subsection blocks.
- You may use very subtle iconography for image/data/privacy concepts if it stays dignified and accessible.
- Add a polished notice card near the end for the still-pending full event-specific privacy notice.
- Style the external institutional privacy link clearly.

Pencil-specific component instructions:
- Reuse the compact page hero.
- Reuse the notice-card component.
- Reuse the section-header styling if helpful.
- Use one main prose block component for long-form content.

UX goals:
- Make the essential information understandable at a glance.
- Let users concerned about photos and data find answers quickly.
- Preserve an easy, comfortable mobile reading experience.

What to avoid:
- Dense legal-wall formatting.
- Tiny text.
- Heavy tables or compliance-dashboard visuals.
- Alarmist warning-banner tone.

Deliver:
- Desktop, tablet, and mobile privacy page.
- Editorial text layout.
- Subsection styling.
- Notice-card placement.
- External-link treatment.
```

## Prompt 7: Portuguese Dia Internacional do Voluntariado Page

```text
Design the Portuguese companion page `/pt/dia-voluntariado.html` for the “Dia Internacional do Voluntariado” portion of the microsite.

Use the same overall site design system:
- Warm, editorial, civic, human.
- Brown/gold/cream palette.
- No stock photo dependency.
- Same typography and component language as the main site.

Create:
- Desktop page around 1440px wide.
- Tablet page around 834px wide.
- Mobile page around 390px wide.

Purpose:
- Present the December 4-5, 2026 volunteering-related initiatives connected to the main September event.
- Make the page feel related to the main microsite but with a slightly more commemorative tone.

Header:
- Same site header.
- Active nav item: `Dia do Voluntariado`.

Page hero:
- Compact hero.
- Title: `Dia Internacional do Voluntariado`
- Subtitle: `4 e 5 de dezembro de 2026 — Celebracao do voluntariado na U.Porto.`
- Consider a subtle visual variation from the main program page so it feels like a special extension, while preserving the same design family.

Photography contest section:
- Section title: `Concurso de Fotografia`
- Supporting theme line: `Ano Internacional dos Voluntários para o Desenvolvimento Sustentável`
- Create a three-card grid or modular layout with:
  - theme card
  - exhibition card
  - participation/regulation card
- Exhibition detail:
  - `Reitoria da U.Porto`
  - exhibition on `4 de dezembro de 2026`
- Participation card should include a polished inline notice that the regulation is in preparation.
- Add a larger notice below the grid for missing details about jury, prizes, and submission process.

Volunteer Award section:
- Section title: `Prémio do Dia do Voluntariado`
- Use a timeline row or feature block for the award ceremony on `4 dez`.
- Explain that the prize recognizes an outstanding volunteer contribution.
- Add a polished notice card for pending eligibility and nomination criteria.

Round-table section:
- Section title: `Mesa-Redonda`
- Use an editorial text block describing a sharing session of volunteering experiences involving volunteers, organizations, and the academic community.
- Add a notice card for speaker, place, and time details still pending.

Back-link / relationship section:
- Create a strong but simple block clarifying that this initiative belongs to the broader `Semana Solidária U.Porto`.
- Include:
  - text link back to the homepage
  - secondary CTA linking to the main program page
- This section should feel like a bridge back to the main event, not an afterthought.

Design instructions optimized for Pencil:
- Reuse card components from the Program page, but adapt them for a slightly more commemorative tone.
- Reuse the notice-card system.
- Reuse timeline-item styling for the award section.
- Preserve a consistent site feel while letting the page have a slight special-event accent through layout emphasis or background treatment.

UX goals:
- Make it immediately clear that this is related to, but distinct from, the September week.
- Keep pending contest details transparent and well-contained.
- Avoid confusion between the September event and the December volunteer day.

What to avoid:
- Making this look like a separate unrelated microsite.
- Contest-page visual clichés.
- A page that depends on final sponsor data to feel complete.

Deliver:
- Desktop, tablet, and mobile Dia do Voluntariado page.
- Contest cards.
- Award section.
- Round-table section.
- Strong cross-link back to the main event pages.
```

## Prompt 8: 404 Page

```text
Design the `404.html` page for the Semana Solidária U.Porto microsite.

Use the same visual language as the site:
- Warm editorial institutional tone.
- Brown, gold, cream palette.
- Typographic and calm.
- No illustration cliché, no mascot, no dramatic error styling.

Create:
- One desktop frame around 1440px wide.
- One tablet frame around 834px wide.
- One mobile frame around 390px wide.

Purpose:
- Help users recover immediately from a broken or unknown URL.
- Preserve trust and brand consistency.

Required content:
- Large `404`
- Main Portuguese title: `Página não encontrada`
- Secondary English line: `Page not found`
- Primary CTA: `Página inicial (PT)`
- Optional secondary CTA for English homepage if you want to future-proof the layout, but keep Portuguese primary

Layout:
- Simple hero-centered or softly asymmetrical composition.
- Use a shortened variant of the main hero language.
- Keep the page focused, elegant, and easy to understand instantly.

Visual direction:
- Use the warm site palette and typographic system.
- Let the oversized `404` work as the main visual device.
- Add subtle background texture or shapes if needed, but stay restrained.
- The page should feel helpful, not theatrical.

Accessibility:
- Strong contrast.
- Clear CTA focus state.
- Straightforward reading order.

What to avoid:
- Sad robot / broken page illustration.
- Harsh red error aesthetic.
- Joke-heavy copy.
- Overcomplicated recovery options.

Deliver:
- Desktop, tablet, and mobile 404 page.
- Large type treatment for `404`.
- Recovery CTA styling.
- A polished, brand-consistent not-found experience.
```

## Prompt 9: Visual Refresh for Existing Pages

```text
Modify the already-designed pages of the “Semana Solidária U.Porto” microsite to make the experience much more visual, fluid, and editorial, with less text density and stronger visual storytelling.

Important context:
- The pages already exist. Do not redesign the information architecture from scratch.
- Keep the same overall page set and core structure:
  - root language page
  - homepage
  - program page
  - location page
  - organization page
  - privacy page
  - Dia Internacional do Voluntariado page
  - 404 page
- Preserve the institutional, civic, and trustworthy tone.
- Keep the site static-site friendly.
- Do not invent missing event facts.
- Preserve accessibility and strong usability.

Main objective:
- Reduce the feeling that the site is “too textual”.
- Rework the pages so they feel lighter, more visual, more modern, and more immersive.
- Replace long text blocks with visual rhythm, image-led layouts, short copy, stronger section hierarchy, and more dynamic composition.
- The site should feel like a contemporary editorial event microsite, not a text-heavy institutional brochure.

Responsive requirement:
- For every updated page, show:
  - desktop version
  - tablet version
  - mobile version
- The visual language must remain coherent across all breakpoints.

Visual direction:
- Warm, human, civic, inclusive, optimistic.
- Use the existing brown / gold / cream palette:
  - `#6B3A2A`
  - `#D4A843`
  - `#F5F0E8`
- Preserve serif headings + sans body typography.
- Keep the site elegant and institutional, but make it feel more alive and less document-like.
- Avoid startup aesthetics, dashboard UI, glassmorphism, neon gradients, dark tech style, or generic template hero sections.

Key design change to apply across all pages:
- Much less paragraph-heavy layout.
- Much more visual hierarchy and flow.
- Use larger images, media blocks, editorial collage sections, image cards, video-thumbnail blocks, pull quotes, stat highlights, timeline visuals, icon-backed cards, and alternating text/media compositions.
- Use short, high-impact text instead of dense paragraphs.
- Break information into cards, labels, chips, highlights, mini-sections, and visual modules.

Media strategy:
- Introduce visual elements across the site:
  - large hero image or abstract visual composition
  - photo strips
  - image cards
  - video poster blocks with play button treatment
  - editorial image mosaics
  - visual quote or impact banners
  - illustrated icons for categories if helpful
- If real approved assets do not exist, use realistic placeholder photography or abstract volunteering-themed image treatment that fits the event:
  - students volunteering
  - community engagement
  - donation and solidarity
  - health and wellbeing
  - sustainability and environment
  - university life
- The visuals should feel human and authentic, not overly corporate.
- Use video elements as visual poster modules or featured media blocks, not as distracting autoplay-heavy hero clutter.

Content compression rules:
- Shorten long introductory text into:
  - 1 short headline
  - 1 short support paragraph
  - 2 to 4 compact highlight points
- Turn dense explanatory content into:
  - cards
  - timeline snippets
  - badges
  - quick facts
  - visual statistics
  - small quote blocks
- Every section should be scannable in seconds.

Important constraints:
- Keep all existing pages recognizable.
- Do not remove important event information.
- Do not remove the “Informação em atualização” pattern for pending details.
- Instead, redesign those pending states so they are more elegant, lighter, and visually integrated.
- Preserve accessibility:
  - WCAG 2.1 AA
  - clear focus states
  - strong contrast
  - readable text
  - good mobile layout
- Preserve the sticky header and clear navigation.

Apply these page-specific modifications:

Homepage:
- Make the hero much more visual.
- Add a strong visual centerpiece:
  - hero image
  - layered collage
  - abstract solidarity artwork
  - or video-poster block
- Keep the countdown, but integrate it into a more designed media-rich hero.
- Replace dense intro reading with a cleaner editorial composition:
  - short intro
  - highlight cards
  - image-supported story blocks
- Add visual rhythm to the ODS and partners areas.
- Introduce at least one image-led section and one banner-style callout for `#VoluntariadoUPorto`.

Program page:
- Move away from long textual section stacking.
- Make activities more visual and easier to scan.
- Use category cards with image areas or illustrated headers.
- Add richer timeline visuals for opening and closing.
- Create a more visual “Como participar” section with big action cards and icon/image support.
- Use section dividers, color shifts, and media modules so the page feels dynamic rather than list-heavy.

Location page:
- Turn it into a more visual wayfinding page.
- Add map-preview cards or illustrated location cards.
- Use the 3 polos as strong visual blocks with image/background treatments.
- Introduce travel/access cards, visual route hints, or location chips.
- Keep it elegant and not map-app-like.

Organization page:
- Replace the text-heavy institutional feel with a more visual trust-building layout.
- Add a ReVIReS spotlight block with image or abstract portrait/mission visual.
- Show partners in a more designed grid.
- Add a stronger community/social visual section.
- Use less plain text and more editorial blocks.

Privacy page:
- Keep it simpler and cleaner.
- Preserve readability, but reduce the sensation of legal heaviness.
- Use compact information cards, icon-supported subsections, and a strong reading column.
- This page should still be restrained, but better designed and less plain.

Dia Internacional do Voluntariado page:
- Make it feel more special and commemorative.
- Add visual storytelling around the photography contest and volunteer award.
- Use large image modules, exhibition-style cards, and stronger event-block composition.
- Make it visually richer than the current text-card approach.

404 page:
- Keep it minimal, but make it more visually intentional.
- Use stronger typography, atmosphere, and composition.
- Make the recovery CTA more prominent.

Layout behavior:
- Desktop: richer compositions, more image/text interplay, asymmetric editorial layouts.
- Tablet: preserve hierarchy while simplifying grids and media.
- Mobile: stack gracefully, keep visuals impactful, avoid overlong text.

Design references in spirit:
- editorial event microsite
- university cultural program page
- nonprofit campaign landing page
- modern magazine-style storytelling
But keep the final result grounded, accessible, and implementable as a static site.

Do not:
- turn the site into a startup landing page
- overload it with text
- rely on giant walls of copy
- use fake data
- make it feel like a corporate annual report
- add noisy motion or decorative clutter

Deliver:
- A refreshed, more visual design direction for all existing pages
- Desktop, tablet, and mobile responsive versions
- Clear before/after improvement in visual richness
- Less text density
- Stronger media presence
- Better section flow
- Better emotional engagement while preserving trust and clarity
```
