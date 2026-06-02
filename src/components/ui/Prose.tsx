import { Notice } from "./Notice";

/**
 * Constrained reading column for policy / long-form copy. Each entry is its
 * own labelled `<section>` for clean document structure.
 */
export function Prose({
  title,
  titleId,
  sections,
  notice,
}: {
  title: string;
  titleId: string;
  sections: { heading: string; body: string }[];
  notice?: string;
}) {
  return (
    <div className="mx-auto flex max-w-[40rem] flex-col gap-12">
      <h2
        id={titleId}
        className="text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-bold leading-tight text-text-primary"
      >
        {title}
      </h2>

      {sections.map((section) => (
        <section key={section.heading} className="flex flex-col gap-3">
          <h3 className="text-[1.125rem] font-normal leading-snug text-text-primary md:text-[1.25rem] md:font-bold">
            {section.heading}
          </h3>
          <p className="text-[0.9375rem] leading-[1.7] text-text-secondary">{section.body}</p>
        </section>
      ))}

      {notice && <Notice>{notice}</Notice>}
    </div>
  );
}
