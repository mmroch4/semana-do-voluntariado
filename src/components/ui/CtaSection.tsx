import { ButtonLink } from "./ButtonLink";

/**
 * Standardized call-to-action band shared by the homepage, organization and
 * volunteering-day pages.
 *
 * A full-bleed light-brown band (`brown-light`) with light (inverse) eyebrow +
 * headline and an optional muted `notice` line; the gold primary button is the
 * single accent. A `divider-dark` hairline top border seats it against the
 * cream sections that usually precede it. Foreground colors are inverse tokens
 * so text clears WCAG AA against the brown. Pass an in-app route or `#`/`mailto:`
 * to `href` — `ButtonLink` picks the right element.
 */
export function CtaSection({
  eyebrow,
  title,
  titleId,
  body,
  button,
  href,
  notice,
}: {
  eyebrow: string;
  title: string;
  titleId: string;
  body: string;
  button: string;
  href: string;
  notice?: string;
}) {
  return (
    <section
      aria-labelledby={titleId}
      className="flex items-center justify-center border-t border-divider-dark bg-brown-light px-6 py-[clamp(3rem,6vw,6.25rem)]"
    >
      <div className="mx-auto flex w-full max-w-[36rem] flex-col items-center gap-4 text-center">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-text-inverse">
          {eyebrow}
        </p>
        <h2 id={titleId} className="text-callout font-bold leading-tight text-text-inverse">
          {title}
        </h2>
        <p className="text-[clamp(0.875rem,0.8rem+0.3vw,0.9375rem)] leading-relaxed text-text-inverse">
          {body}
        </p>
        <p className="my-2">
          <ButtonLink href={href} variant="primary">
            {button}
          </ButtonLink>
        </p>
        {notice && <p className="text-xs italic text-text-inverse">{notice}</p>}
      </div>
    </section>
  );
}
