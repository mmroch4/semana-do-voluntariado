import { useRef } from "react";
import { cn } from "@/lib/cn";
import type { DayNumber } from "@/lib/content/activities";
import type { ScheduleDay } from "./types";

/**
 * WAI-ARIA tablist for the six event days. Roving tabindex with automatic
 * activation: Arrow keys move and select (wrapping), Home/End jump to the
 * first/last day. Each tab controls the matching `program-day-panel-*`
 * tabpanel rendered by `DayTimeline`.
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
    <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
      {days.map((d, i) => {
        const isSelected = d.day === selected;
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
              "rounded-pill px-4 py-2 text-sm font-semibold tabular-nums transition-colors",
              isSelected
                ? "bg-brown text-text-inverse"
                : "bg-surface-alt text-text-secondary hover:bg-border",
            )}
          >
            {d.tab.short}
          </button>
        );
      })}
    </div>
  );
}
