import { notFound } from "next/navigation";

/**
 * Catches unmatched URLs under `/en` and renders the styled English 404
 * (via `app/(en)/not-found.tsx`) with a real 404 status.
 */
export default function CatchAll() {
  notFound();
}
