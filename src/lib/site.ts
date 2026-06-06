/**
 * Site-wide constants for absolute URLs (canonical links, hreflang, sitemap,
 * Open Graph). The production origin is read from `NEXT_PUBLIC_SITE_URL` so the
 * real domain is a one-line env change; the placeholder keeps local/preview
 * builds working. Any trailing slash is stripped for clean URL joining.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://semanasolidaria.up.pt"
).replace(/\/$/, "");

export const SITE_NAME = "Semana #SerCidadão";
