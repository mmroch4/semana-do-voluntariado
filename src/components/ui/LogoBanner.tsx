import Image from "next/image";

/**
 * White-background homepage banner that showcases the event logo lockup.
 *
 * Replaces the photographic hero on the homepage. The logo PNG already
 * carries the event name, dates and organiser marks, so it is treated as
 * decorative (`alt=""`) and the accessible page heading is provided by a
 * visually-hidden `<h1>`. The white surface sits on the page's cream body,
 * reading as a self-contained banner; CTAs render below an accent rule.
 */
export function LogoBanner({
  image,
  title,
  subtitle,
  titleId = "hero-title",
  children,
}: {
  image: string;
  title: string;
  subtitle: string;
  titleId?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={titleId}
      className="border-b border-border-subtle bg-surface px-4 py-[clamp(2.5rem,6vw,5rem)] md:px-6"
    >
      <h1 id={titleId} className="sr-only">
        {title} — {subtitle}
      </h1>

      <div className="mx-auto flex max-w-[48rem] flex-col items-center gap-8 text-center md:gap-10">
        <Image
          src={image}
          alt=""
          width={1901}
          height={797}
          priority
          sizes="(min-width: 768px) 44rem, 100vw"
          className="h-auto w-full max-w-[44rem]"
        />

        {children && (
          <>
            <hr className="m-0 h-[1.5px] w-10 border-0 bg-accent" aria-hidden="true" />
            <div className="flex flex-col items-center gap-3 sm:flex-row">{children}</div>
          </>
        )}
      </div>
    </section>
  );
}
