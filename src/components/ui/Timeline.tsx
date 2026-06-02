import Image from "next/image";
import type { TimelineEntry } from "@/lib/content/types";

/**
 * Vertical timeline of dated entries. Stacks on mobile; from 768px the time
 * label moves to a left rail and the thumbnail becomes a small square.
 */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="flex flex-col gap-6 md:gap-8">
      {entries.map((entry) => (
        <li key={entry.datetime} className="flex flex-col gap-1 md:flex-row md:items-start md:gap-4">
          <div className="flex items-center gap-2 md:flex-shrink-0">
            <span className="inline-flex items-center justify-center md:h-6 md:w-5">
              <span className="block h-2 w-2 shrink-0 rounded-full bg-text-accent" aria-hidden="true" />
            </span>
            <time
              dateTime={entry.datetime}
              className="text-sm font-bold leading-tight tabular-nums text-text-primary md:order-first md:w-16 md:text-right md:text-base"
            >
              {entry.time}
            </time>
          </div>

          <div className="flex flex-col gap-0.5 md:flex-1">
            <h3 className="text-[1.125rem] font-medium leading-tight text-text-primary md:text-[1.25rem]">
              {entry.title}
            </h3>
            <p className="text-[0.8125rem] text-text-secondary md:text-sm">{entry.description}</p>
          </div>

          <Image
            src={entry.thumb}
            alt=""
            width={320}
            height={160}
            className="mt-3 h-40 w-full rounded-sm object-cover md:mt-0 md:h-20 md:w-20 md:shrink-0"
          />
        </li>
      ))}
    </ol>
  );
}
