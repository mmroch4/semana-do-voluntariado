import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Image + text side-by-side block (stacks on mobile). Children render below
 * the body copy — typically a CTA button.
 */
export function Split({
  image,
  imageAlt,
  heading,
  headingId,
  body,
  reverse = false,
  children,
}: {
  image: string;
  imageAlt: string;
  heading: string;
  headingId: string;
  body: string;
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:items-center md:gap-12",
        reverse ? "md:flex-row-reverse" : "md:flex-row",
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        width={800}
        height={600}
        className="aspect-[4/3] w-full rounded-md object-cover md:min-w-0 md:flex-1"
      />
      <div className="flex flex-col items-start gap-4 md:min-w-0 md:flex-1 md:gap-6">
        <h2
          id={headingId}
          className="text-heading font-normal leading-tight text-text-primary"
        >
          {heading}
        </h2>
        <p className="text-[0.9375rem] leading-normal text-text-secondary">{body}</p>
        {children}
      </div>
    </div>
  );
}
