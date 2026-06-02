import { ButtonLink } from "./ButtonLink";

/** Compact centered "see also" / "back to main" callout. */
export function CtaBlock({
  eyebrow,
  title,
  titleId,
  body,
  button,
  href,
}: {
  eyebrow: string;
  title: string;
  titleId: string;
  body: string;
  button: string;
  href: string;
}) {
  return (
    <div className="mx-auto flex max-w-[36rem] flex-col items-center gap-3 text-center">
      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className="text-[clamp(1.375rem,1rem+1.5vw,2rem)] font-bold leading-tight text-text-primary"
      >
        {title}
      </h2>
      <p className="text-[clamp(0.875rem,0.8rem+0.3vw,0.9375rem)] leading-relaxed text-text-secondary">
        {body}
      </p>
      <p className="mt-3">
        <ButtonLink href={href} variant="primary">
          {button}
        </ButtonLink>
      </p>
    </div>
  );
}
