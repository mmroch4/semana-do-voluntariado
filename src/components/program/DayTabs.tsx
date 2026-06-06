import { useRef } from "react";
import { cn } from "@/lib/cn";
import type { DayNumber } from "@/lib/content/activities";
import type { ScheduleDay } from "./types";

/**
 * WAI-ARIA tablist for the six event days, styled as a date-picker strip:
 * weekday eyebrow over a large display-font day numeral. Roving tabindex
 * with automatic activation: Arrow keys move and select (wrapping),
 * Home/End jump to the first/last day. Each tab controls the matching
 * `program-day-panel-*` tabpanel rendered by `DayTimeline`.
 */
export function DayTabs({
  days,
  selected,
  onSelect,
  label,
}: {
  days: ScheduleDay[];
  selected: DayNumber;
  onSelect: (day: DayNumber) => void;
  label: string;
}) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    let next: number | null = null;
    if (event.key === "ArrowRight") next = (index + 1) % days.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + days.length) % days.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = days.length - 1;
    if (next === null) return;
    event.preventDefault();
    onSelect(days[next].day);
    tabRefs.current[next]?.focus();
  }

  return (
    <div role="tablist" aria-label={label} className="grid grid-cols-3 gap-2 sm:grid-cols-6 sm:gap-3">
      {days.map((d, i) => {
        const isSelected = d.day === selected;
        // "Seg 21" / "Mon 21" → weekday eyebrow + display numeral.
        const [weekday, dayNumber] = d.tab.short.split(" ");
        return (
          <button
            key={d.day}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`program-day-tab-${d.day}`}
            aria-selected={isSelected}
            aria-controls={`program-day-panel-${d.day}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelect(d.day)}
            onKeyDown={(event) => handleKeyDown(event, i)}
            className={cn(
              "flex flex-col items-center gap-1 rounded-md border-b-4 px-2 py-3 transition-all duration-150",
              isSelected
                ? "border-gold bg-brown shadow-md"
                : "border-transparent bg-surface shadow-card hover:-translate-y-0.5 hover:shadow-md",
            )}
          >
            <span
              className={cn(
                "text-[0.625rem] font-bold uppercase leading-none tracking-[0.2em]",
                isSelected ? "text-text-inverse-soft" : "text-text-secondary",
              )}
            >
              {weekday}
            </span>
            <span
              className={cn(
                "font-display text-[1.75rem] leading-none",
                isSelected ? "text-gold" : "text-text-primary",
              )}
            >
              {dayNumber}
            </span>
          </button>
        );
      })}
    </div>
  );
}
