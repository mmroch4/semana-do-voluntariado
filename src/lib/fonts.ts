import { Inter, Playfair_Display } from "next/font/google";

/**
 * Self-hosted webfonts loaded through `next/font`. Next downloads these at
 * build time, serves them from our own origin (no third-party request), and
 * generates a size-adjusted fallback so swapping to the real face causes no
 * layout shift. The `latin-ext` subset covers European Portuguese diacritics.
 *
 * Each font exposes a CSS custom property (`--font-inter` / `--font-playfair`)
 * via `variable`; `globals.css` feeds these into `--font-body`/`--font-display`.
 */
export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-playfair",
});

/** Combined font CSS-variable classes to apply on `<html>`. */
export const fontVariables = `${inter.variable} ${playfair.variable}`;
