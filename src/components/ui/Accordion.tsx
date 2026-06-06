import { cn } from "@/lib/cn";
import type { FaqItem } from "@/lib/content/types";

/**
 * Accessible accordion built on native `<details>/<summary>`.
 *
 * Chosen over the ARIA button pattern to match the site's progressive-
 * enhancement baseline (see `ShareSection`): it ships zero client JS, works
 * with JavaScript disabled, and the browser provides keyboard support and
 * "expanded/collapsed" announcements for free. Questions are plain summary
 * text — not headings — because `<summary>` has an implicit `button` role and
 * some screen readers strip heading semantics from a button's children; the
 * page's section heading anchors the document outline instead.
 *
 * Items collapse independently (no `name` attribute), so visitors can keep
 * several answers open to compare. The chevron rotation is suppressed for
 * `prefers-reduced-motion` users via `motion-reduce`.
 */
export function Accordion({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-md border border-border-subtle bg-surface shadow-card",
        className,
      )}
    >
      {items.map((item, index) => (
        <details key={item.question} className={cn("group", index > 0 && "border-t border-border-subtle")}>
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[0.9375rem] font-medium leading-snug text-text-primary transition-colors duration-150 hover:bg-surface-warm group-open:bg-surface-warm md:px-6 md:py-5 md:text-[1rem] [&::-webkit-details-marker]:hidden"
          >
            {item.question}
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="px-5 py-5 md:px-6 md:py-6">
            <p className="m-0 text-[0.9375rem] leading-[1.7] text-text-secondary">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
