import Image from "next/image";
import type { Partner } from "@/lib/content/types";

/**
 * Wrapping row of partner logo cards: 2 per row → 4 (≥640px) → fixed-width
 * (≥1024px). Images currently fill the card; when real logos arrive, switch
 * `object-cover` to `object-contain` and add padding (see legacy note).
 */
export function PartnerRow({ items }: { items: Partner[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {items.map((partner) => (
        <li
          key={partner.src}
          className="flex w-[calc((100%-0.75rem)/2)] sm:w-[calc((100%-3rem)/4)] lg:w-44"
        >
          <div className="flex h-20 w-full overflow-hidden rounded-sm bg-surface-alt">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={176}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
