import type { CategoryKey, DayNumber } from "@/lib/content/activities";
import { Chip } from "@/components/ui/Chip";
import type { ScheduleActivity, ScheduleDay } from "./types";

/** Formats "10:00" / "10:00–13:00" for display. */
function timeRange(a: ScheduleActivity): string {
  return a.endTime ? `${a.time}–${a.endTime}` : a.time;
}

/**
 * The six day tabpanels. All panels are server-rendered (full week present in
 * the HTML for crawlers and no-JS visitors); only the selected one is shown,
 * the rest are `hidden`. Visual structure follows `ui/Timeline.tsx`, extended
 * with the venue line, capacity and a category chip per activity.
 */
export function DayTimeline({
  days,
  selected,
  activeCategories,
  capacityLabel,
  emptyState,
}: {
  days: ScheduleDay[];
  selected: DayNumber;
  activeCategories: readonly CategoryKey[];
  capacityLabel: string;
  emptyState: string;
}) {
  return (
    <>
      {days.map((d) => {
        const visible =
          activeCategories.length > 0
            ? d.activities.filter((a) => activeCategories.includes(a.category))
            : d.activities;
        return (
          <div
            key={d.day}
            role="tabpanel"
            id={`program-day-panel-${d.day}`}
            aria-labelledby={`program-day-tab-${d.day}`}
            tabIndex={0}
            hidden={d.day !== selected}
            className="mt-8"
          >
            <h3 className="sr-only">{d.tab.long}</h3>
            {visible.length === 0 ? (
              <p className="text-[0.9375rem] italic text-text-secondary">{emptyState}</p>
            ) : (
              <ol className="flex flex-col gap-6 md:gap-8">
                {visible.map((a) => (
                  <li key={a.id} className="flex flex-col gap-1 md:flex-row md:items-start md:gap-4">
                    <div className="flex items-center gap-2 md:flex-shrink-0">
                      <span className="inline-flex items-center justify-center md:h-6 md:w-5">
                        <span className="block h-2 w-2 shrink-0 rounded-full bg-text-accent" aria-hidden="true" />
                      </span>
                      <time
                        dateTime={a.datetime}
                        className="text-sm font-bold leading-tight tabular-nums text-text-primary md:order-first md:w-28 md:text-right md:text-base"
                      >
                        {timeRange(a)}
                      </time>
                    </div>

                    <div className="flex flex-col gap-1 md:flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h4 className="text-[1.125rem] font-medium leading-tight text-text-primary md:text-[1.25rem]">
                          {a.title}
                        </h4>
                        <Chip variant="solid">{a.categoryLabel}</Chip>
                      </div>
                      <p className="text-[0.8125rem] text-text-secondary md:text-sm">{a.description}</p>
                      <p className="text-[0.8125rem] font-medium text-text-secondary md:text-sm">
                        {a.venueLabel}
                        <span aria-hidden="true"> · </span>
                        {capacityLabel.replace("{n}", String(a.capacity))}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        );
      })}
    </>
  );
}
