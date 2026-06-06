import type { CategoryKey, DayNumber } from "@/lib/content/activities";

/**
 * Serializable props for the interactive schedule subtree. The server-side
 * `ProgramPage` joins the language-neutral activity data with the dictionary
 * strings into these flat shapes, so the client components never import the
 * dictionaries.
 */

/** One activity, fully localized and with its venue coordinates inlined. */
export interface ScheduleActivity {
  id: string;
  /** Start time, e.g. "10:00". */
  time: string;
  /** Optional end time (rendered as "10:00–13:00"). */
  endTime?: string;
  /** Machine-readable value for `<time datetime>`. */
  datetime: string;
  category: CategoryKey;
  categoryLabel: string;
  capacity: number;
  lat: number;
  lng: number;
  title: string;
  description: string;
  /** Venue + room line, e.g. "Reitoria da U.Porto · Salão Nobre". */
  venueLabel: string;
  /** Venue name alone (accessible marker names on the map). */
  venueName: string;
}

/** One event day: tab labels plus its localized activities. */
export interface ScheduleDay {
  day: DayNumber;
  tab: { short: string; long: string };
  activities: ScheduleActivity[];
}

/** UI strings for the schedule (everything except per-activity content). */
export interface ScheduleStrings {
  tabsLabel: string;
  filterLabel: string;
  filterAllLabel: string;
  /** Template; `{n}` is replaced by the capacity number. */
  capacityLabel: string;
  mapHeading: { title: string; subtitle?: string };
  mapAriaLabel: string;
  emptyState: string;
  /** Template; `{day}` and `{count}` are replaced for the live region. */
  dayAnnounce: string;
  notice: string;
}
