"use client";

import { useEffect, useState } from "react";
import type { SocialCallout } from "@/lib/content/types";

/* ── Share networks ────────────────────────────────────────────────────────
 * Network metadata is locale-independent and lives here. Each `href` builds a
 * standard web share-intent URL — these are plain links that work without any
 * JavaScript, so they are the universal baseline. Icons are inline SVG (single
 * path, `currentColor`) and marked `aria-hidden`; the link's `aria-label`
 * carries the accessible name.
 */
type NetworkKey = "facebook" | "x" | "linkedin" | "whatsapp";

const NETWORKS: {
  key: NetworkKey;
  name: string;
  href: (url: string, text: string) => string;
  path: string;
}[] = [
  {
    key: "facebook",
    name: "Facebook",
    href: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.58v1.87h2.78l-.44 2.9h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94Z",
  },
  {
    key: "x",
    name: "X",
    href: (url, text) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    path: "M18.24 2.25h3.31l-7.23 8.26L22.85 21.75h-6.66l-5.22-6.82-5.97 6.82H1.69l7.73-8.84L1.15 2.25h6.83l4.71 6.23 5.55-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64Z",
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    href: (url) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z",
  },
  {
    key: "whatsapp",
    name: "WhatsApp",
    href: (_url, text) => `https://wa.me/?text=${encodeURIComponent(text)}`,
    path: "M.06 24l1.69-6.16a11.86 11.86 0 0 1-1.6-5.95C.16 5.34 5.5 0 12.07 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24Zm6.6-3.8c1.68.99 3.28 1.59 5.4 1.59 5.45 0 9.89-4.43 9.9-9.88a9.86 9.86 0 0 0-9.88-9.9c-5.46 0-9.9 4.43-9.9 9.88a9.82 9.82 0 0 0 1.51 5.26l.24.38-1 3.65 3.74-.98.39.23Zm11.3-5.39c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.69.25-1.29.17-1.41Z",
  },
];

function NetworkIcon({ path, name }: { path: string; name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <title>{name}</title>
      <path d={path} />
    </svg>
  );
}

/* Round icon button styling, shared by share links and the copy button. */
const iconButton =
  "inline-flex h-12 w-12 items-center justify-center rounded-full border border-text-inverse/40 text-text-inverse transition-colors duration-150 hover:bg-text-inverse hover:text-text-primary focus-visible:bg-text-inverse focus-visible:text-text-primary";

/**
 * The #VoluntariadoUPorto share band (homepage + organization page).
 *
 * Replaces the old dead-link CTA with a working share control. Layered as
 * progressive enhancement:
 *   1. Baseline — real `<a>` share-intent links (Facebook, X, LinkedIn,
 *      WhatsApp) that work with no JavaScript and render on the server.
 *   2. Enhancements (client-only, feature-detected to avoid hydration drift):
 *      the native share sheet (`navigator.share`) and a clipboard "copy link"
 *      button with an `aria-live` confirmation.
 *
 * `url` is the SSR-safe canonical absolute URL; after mount it upgrades to the
 * live `window.location.href` so preview domains and anchors stay accurate.
 */
export function ShareSection({
  content,
  titleId,
  url,
}: {
  content: SocialCallout;
  titleId: string;
  url: string;
}) {
  const [shareUrl, setShareUrl] = useState(url);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Sync from the browser environment, which has no server equivalent: the
    // live URL and Web Share API support are only knowable on the client. The
    // synchronous setState-on-mount is the rule's documented exception for
    // reading from an external system, matching the Countdown component.
    if (typeof window !== "undefined") {
      /* eslint-disable react-hooks/set-state-in-effect */
      setShareUrl(window.location.href);
      setCanNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
      /* eslint-enable react-hooks/set-state-in-effect */
    }
  }, []);

  async function nativeShare() {
    try {
      await navigator.share({ title: content.title, text: content.shareText, url: shareUrl });
    } catch {
      // User dismissed the share sheet, or sharing was blocked — no action.
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard unavailable (insecure context / denied) — the visible share
      // links remain as the fallback path.
    }
  }

  // WhatsApp / X include the URL in their text payload; Facebook / LinkedIn
  // take only the URL parameter.
  const shareTextWithUrl = `${content.shareText} ${shareUrl}`;

  return (
    <section
      aria-labelledby={titleId}
      className="flex items-center justify-center border-t border-divider-dark bg-brown-light px-6 py-[clamp(3rem,6vw,6.25rem)]"
    >
      <div className="mx-auto flex w-full max-w-[36rem] flex-col items-center gap-4 text-center">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-text-inverse">
          {content.eyebrow}
        </p>
        <h2 id={titleId} className="text-callout font-bold leading-tight text-text-inverse">
          {content.title}
        </h2>
        <p className="text-[clamp(0.875rem,0.8rem+0.3vw,0.9375rem)] leading-relaxed text-text-inverse">
          {content.body}
        </p>

        <ul className="my-2 flex flex-wrap items-center justify-center gap-3">
          {NETWORKS.map(({ key, name, href, path }) => (
            <li key={key}>
              <a
                href={href(shareUrl, key === "whatsapp" ? shareTextWithUrl : content.shareText)}
                target="_blank"
                rel="noopener noreferrer"
                className={iconButton}
                aria-label={`${content.shareOn} ${name}`}
              >
                <NetworkIcon path={path} name={name} />
              </a>
            </li>
          ))}
          <li>
            <button type="button" onClick={copyLink} className={iconButton} aria-label={content.copyLabel}>
              {/* Link / chain icon */}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </button>
          </li>
        </ul>

        {canNativeShare && (
          <p className="my-1">
            <button
              type="button"
              onClick={nativeShare}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-pill bg-accent px-8 text-base font-medium leading-none text-accent-text transition-colors duration-150 hover:bg-accent-hover"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
              </svg>
              {content.shareLabel}
            </button>
          </p>
        )}

        {/* Polite live region announces the copy confirmation to assistive tech. */}
        <p aria-live="polite" className="min-h-5 text-xs italic text-text-inverse">
          {copied ? content.copiedLabel : ""}
        </p>
      </div>
    </section>
  );
}
