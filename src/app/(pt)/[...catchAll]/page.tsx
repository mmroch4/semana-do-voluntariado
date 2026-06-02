import { notFound } from "next/navigation";

/**
 * Catches every unmatched URL at the site root and renders the styled
 * Portuguese 404 (via `app/(pt)/not-found.tsx`) with a real 404 status.
 * Static `/en` routes take precedence over this dynamic catch-all.
 */
export default function CatchAll() {
  notFound();
}
