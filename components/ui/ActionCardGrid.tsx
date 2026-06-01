import Image from "next/image";
import type { ActionCard } from "@/lib/content/types";

/**
 * Grid of clickable image tiles with a gradient scrim and caption.
 * Stacks on mobile/tablet, 3-up from 1024px. Hover lifts the card and gently
 * zooms the image.
 */
export function ActionCardGrid({ cards }: { cards: ActionCard[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
      {cards.map((card) => (
        <li key={card.title} className="flex">
          <a
            href={card.href}
            className="scrim-bottom group relative isolate flex min-h-50 w-full items-end overflow-hidden rounded-md text-text-inverse no-underline transition-transform duration-200 hover:-translate-y-0.5 md:min-h-[13.75rem] lg:min-h-70"
          >
            <Image
              src={card.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="z-0 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="relative z-[2] flex flex-col gap-1 p-6 md:p-8">
              <h3 className="text-[1.375rem] font-semibold leading-tight text-text-inverse md:text-[1.5rem]">
                {card.title}
              </h3>
              <p className="text-[0.8125rem] text-text-inverse-soft md:text-sm">{card.subtitle}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
