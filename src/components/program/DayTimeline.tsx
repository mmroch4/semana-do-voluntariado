import { cn } from "@/lib/cn";
import type { CategoryKey, DayNumber } from "@/lib/content/activities";
import { categoryStyles } from "./categoryStyles";
import { CategoryIcon, ClockIcon, MapPinIcon, UsersIcon } from "./icons";
import type { ScheduleActivity, ScheduleDay } from "./types";

/** Formats "10:00" / "10:00–13:00" for display. */
function timeRange(a: ScheduleActivity): string {
  return a.endTime ? `${a.time}–${a.endTime}` : a.time;
}

/**
 * The six day tabpanels. All panels are server-rendered (full week present in
 * the HTML for crawlers and no-JS visitors); only the selected one is shown,
 * the rest are `hidden`. Each activity is a card accented with its category
 * color — icon circle, left border and badge — with an icon-led meta line
 * (venue, capacity) instead of label text.
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
            className="program-panel-enter mt-8"
          >
            <h3 className="sr-only">{d.tab.long}</h3>
            {visible.length === 0 ? (
              <div className="rounded-md border-2 border-dashed border-border bg-surface/60 px-6 py-10 text-center">
                <p className="text-[0.9375rem] italic text-text-secondary">{emptyState}</p>
              </div>
            ) : (
              <ol className="flex flex-col gap-3 md:gap-4">
                {visible.map((a) => {
                  const style = categoryStyles[a.category];
                  return (
                    <li
                      key={a.id}
                      className={cn(
                        "flex gap-4 rounded-md rounded-l-none border-l-4 bg-surface p-4 shadow-card md:p-5",
                        style.border,
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full md:h-11 md:w-11",
                          style.soft,
                          style.text,
                        )}
                        aria-hidden="true"
                      >
                        <CategoryIcon category={a.category} className="h-5 w-5" />
                      </span>

                      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          <time
                            dateTime={a.datetime}
                            className="inline-flex items-center gap-1.5 text-sm font-bold leading-none tabular-nums text-text-primary"
                          >
                            <ClockIcon className="h-3.5 w-3.5 text-text-secondary" />
                            {timeRange(a)}
                          </time>
                          <span
                            className={cn(
                              "rounded-pill px-2.5 py-1 text-[0.625rem] font-bold uppercase leading-none tracking-[0.15em]",
                              style.solid,
                            )}
                          >
                            {a.categoryLabel}
                          </span>
                        </div>

                        <h4 className="text-[1.125rem] font-semibold leading-tight text-text-primary md:text-[1.25rem]">
                          {a.title}
                        </h4>
                        <p className="text-[0.8125rem] text-text-secondary md:text-sm">{a.description}</p>

                        <p className="mt-0.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8125rem] text-text-secondary md:text-sm">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPinIcon className={cn("h-4 w-4 shrink-0", style.text)} />
                            {a.venueLabel}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <UsersIcon className={cn("h-4 w-4 shrink-0", style.text)} />
                            <span aria-hidden="true">{a.capacity}</span>
                            <span className="sr-only">{capacityLabel.replace("{n}", String(a.capacity))}</span>
                          </span>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        );
      })}
    </>
  );
}
