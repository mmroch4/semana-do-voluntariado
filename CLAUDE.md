# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Event website for the **Semana Solidária U.Porto** — the Semana da Cidadania, Voluntariado e Responsabilidade Social, organized by ReVIReS (Rede de Voluntariado, Inclusão e Responsabilidade Social da U.Porto). September 21–26, 2026. Built as a volunteering project. The site is bilingual (PT/EN), accessible (WCAG 2.1 AA), and uses no build tools or frameworks.

## Tech Stack

- **Plain HTML/CSS/JS** -- no npm, no bundler, no frameworks
- CSS custom properties for design tokens (`styles/global.css`)
- Vanilla JS only for: countdown timer, mobile menu, scroll-reveal animations
- Open files directly in a browser to preview; no build step required

## Architecture

- **Bilingual via directory structure**: `/pt/` (Portuguese source of truth) and `/en/` (English mirror after PT copy is stable). Root `index.html` should be a preview-safe landing page that links to both languages.
- **Multi-page**: PT MVP has 5 pages (index, programa/program, localizacao/location, organizacao/organization, privacidade/privacy), plus a Phase 2 page for Dia Internacional do Voluntariado and the EN mirror.
- **Shared assets**: `styles/`, `scripts/`, and `assets/` are referenced from both `/pt/` and `/en/` pages using relative paths (e.g., `../styles/global.css`).
- Header and footer HTML is duplicated across pages (no templating system).

## Key Conventions

- **Language**: All Portuguese content uses European Portuguese (pt-PT), not Brazilian.
- **Accessibility first**: every page must have a skip link, semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), `aria-labelledby` on sections, `aria-current="page"` on active nav links, descriptive `alt` text on all images. Never use generic alt text like `alt="logo1"`.
- **Mobile-first CSS**: base styles target mobile; breakpoints expand upward (`min-width: 640px`, `768px`, `1024px`, `1280px`).
- **Dark mode**: optional. If implemented, `styles/dark-mode.css` should use `prefers-color-scheme: dark` and be verified page by page.
- **Reduced motion**: `styles/animations.css` respects `prefers-reduced-motion: reduce`.
- **Design tokens** are defined as CSS custom properties in `styles/global.css` (colors, typography, spacing). Use these variables; don't hardcode values.
- **U.Porto brand colors (provisional)**: primary brown `#6B3A2A`, accent gold `#D4A843`, warm cream surface `#F5F0E8`. These are inherited defaults; the palette will be updated when ReVIReS branding is finalized. See PLAN.md Design Tokens for the full token set and palette direction.
- **Fonts (provisional)**: Inter (body) + Playfair Display (headings), preferably self-hosted with `font-display: swap`; use sensible fallbacks if self-hosting is not available. Font choices may change with the brand update.

## Reference Files

`references/2017/` (23 files) and `references/2018/` (10 files) contain HTTrack mirrors of the **Grande Festa Alumni U.Porto** websites (a separate event). These are **read-only structural reference material** -- never modify them. Use them for HTML/CSS layout patterns and component structure, not for content or event-specific copy. Current-event content comes from `information.pdf` and organizer confirmation. Key structural patterns:
- `references/2018/program.html` lines 160-197: timeline component layout
- `references/2018/organization.html` lines 195-227: partner grid and footer structure
- `references/2017/programa_index.html`: multi-activity program layout with sub-pages

## Design Plan

Documentation boundary:

- `CLAUDE.md` is the source of truth for repo conventions, constraints, and baseline accessibility expectations.
- `PLAN.md` is the source of truth for implementation sequence, page specifications, design tokens beyond the base brand palette, responsive behavior, asset strategy, and content-gating decisions.
- `information.pdf` contains the event brief from ReVIReS with confirmed and pending event details.
