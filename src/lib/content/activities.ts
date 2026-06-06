/**
 * Language-neutral program activity data: days, categories, venues
 * (with coordinates for the program map) and the activity schedule.
 *
 * ⚠️ PLACEHOLDER DATA — the real program has not been confirmed by ReVIReS
 * yet. Activities, times, venues and capacities below are plausible examples
 * (migrated from the earlier static program copy) to be replaced once the
 * organizers confirm the program. Coordinates are approximate.
 *
 * Translated strings (titles, descriptions, venue names) live in the
 * dictionaries under `program.schedule`, joined to this data by activity id
 * / venue key / category key.
 */

/** Event day, 1 (Mon 21 Sep 2026) … 6 (Sat 26 Sep 2026). */
export type DayNumber = 1 | 2 | 3 | 4 | 5 | 6;

export const DAY_NUMBERS: readonly DayNumber[] = [1, 2, 3, 4, 5, 6];

/** Calendar date (Europe/Lisbon) of each event day. */
export const DAY_ISO_DATES: Record<DayNumber, string> = {
  1: "2026-09-21",
  2: "2026-09-22",
  3: "2026-09-23",
  4: "2026-09-24",
  5: "2026-09-25",
  6: "2026-09-26",
};

/** Activity category, used by the program filter and map popups. */
export type CategoryKey = "conference" | "volunteering" | "workshop" | "sport" | "culture";

export const CATEGORY_KEYS: readonly CategoryKey[] = [
  "conference",
  "volunteering",
  "workshop",
  "sport",
  "culture",
];

/** U.Porto venues hosting activities (approximate coordinates). */
export type VenueKey =
  | "reitoria"
  | "feup"
  | "flup"
  | "fcup"
  | "fbaup"
  | "fmup"
  | "icbas"
  | "fpceup"
  | "fadeup"
  | "estadio"
  | "jardimBotanico"
  | "palacioCristal";

export const VENUES: Record<VenueKey, { lat: number; lng: number }> = {
  reitoria: { lat: 41.1467, lng: -8.6155 },
  feup: { lat: 41.178, lng: -8.5959 },
  flup: { lat: 41.1494, lng: -8.6311 },
  fcup: { lat: 41.1522, lng: -8.639 },
  fbaup: { lat: 41.1457, lng: -8.5994 },
  fmup: { lat: 41.1814, lng: -8.601 },
  icbas: { lat: 41.1474, lng: -8.6224 },
  fpceup: { lat: 41.1791, lng: -8.6034 },
  fadeup: { lat: 41.1789, lng: -8.6021 },
  estadio: { lat: 41.1727, lng: -8.5963 },
  jardimBotanico: { lat: 41.153, lng: -8.642 },
  palacioCristal: { lat: 41.148, lng: -8.6256 },
};

/** One program activity. Human-readable strings live in the dictionaries. */
export interface Activity {
  /** Stable id joining this entry to its translated strings. */
  id: string;
  day: DayNumber;
  /** Start time shown in the UI, e.g. "10:00". */
  time: string;
  /** Optional end time, e.g. "13:00" (rendered as "10:00–13:00"). */
  endTime?: string;
  /** Machine-readable value for the `<time datetime>` attribute. */
  datetime: string;
  category: CategoryKey;
  venue: VenueKey;
  /** Maximum number of participants. */
  capacity: number;
}

export const ACTIVITIES = [
  /* ── Day 1 · Mon 21 Sep ─────────────────────────────────────────────── */
  { id: "d1-abertura", day: 1, time: "10:00", endTime: undefined, datetime: "2026-09-21T10:00", category: "conference", venue: "reitoria", capacity: 200 },
  { id: "d1-painel", day: 1, time: "11:30", endTime: "13:00", datetime: "2026-09-21T11:30", category: "conference", venue: "reitoria", capacity: 120 },
  { id: "d1-workshop-integracao", day: 1, time: "14:30", endTime: "16:30", datetime: "2026-09-21T14:30", category: "workshop", venue: "fadeup", capacity: 40 },
  { id: "d1-caminhada", day: 1, time: "17:30", endTime: "19:00", datetime: "2026-09-21T17:30", category: "sport", venue: "palacioCristal", capacity: 60 },

  /* ── Day 2 · Tue 22 Sep ─────────────────────────────────────────────── */
  { id: "d2-recolha-bens", day: 2, time: "09:30", endTime: "12:30", datetime: "2026-09-22T09:30", category: "volunteering", venue: "fpceup", capacity: 50 },
  { id: "d2-comunicacao-inclusiva", day: 2, time: "14:00", endTime: "16:00", datetime: "2026-09-22T14:00", category: "workshop", venue: "flup", capacity: 30 },
  { id: "d2-design-inclusivo", day: 2, time: "14:00", endTime: "16:00", datetime: "2026-09-22T14:00", category: "workshop", venue: "fbaup", capacity: 25 },
  { id: "d2-cinema-cidadania", day: 2, time: "18:00", endTime: "20:00", datetime: "2026-09-22T18:00", category: "culture", venue: "reitoria", capacity: 80 },

  /* ── Day 3 · Wed 23 Sep ─────────────────────────────────────────────── */
  { id: "d3-banco-alimentar", day: 3, time: "09:00", endTime: "13:00", datetime: "2026-09-23T09:00", category: "volunteering", venue: "feup", capacity: 60 },
  { id: "d3-limpeza-comunitaria", day: 3, time: "09:00", endTime: "12:00", datetime: "2026-09-23T09:00", category: "volunteering", venue: "palacioCristal", capacity: 45 },
  { id: "d3-saude-mental", day: 3, time: "15:00", endTime: "17:00", datetime: "2026-09-23T15:00", category: "conference", venue: "fmup", capacity: 100 },
  { id: "d3-teatro-oprimido", day: 3, time: "18:30", endTime: "20:30", datetime: "2026-09-23T18:30", category: "culture", venue: "flup", capacity: 35 },

  /* ── Day 4 · Thu 24 Sep ─────────────────────────────────────────────── */
  { id: "d4-dadiva-sangue", day: 4, time: "09:00", endTime: "17:00", datetime: "2026-09-24T09:00", category: "volunteering", venue: "reitoria", capacity: 120 },
  { id: "d4-sustentabilidade", day: 4, time: "10:00", endTime: "12:00", datetime: "2026-09-24T10:00", category: "conference", venue: "fcup", capacity: 150 },
  { id: "d4-primeiros-socorros", day: 4, time: "10:00", endTime: "13:00", datetime: "2026-09-24T10:00", category: "workshop", venue: "icbas", capacity: 24 },
  { id: "d4-torneio-interfaculdades", day: 4, time: "15:00", endTime: "18:00", datetime: "2026-09-24T15:00", category: "sport", venue: "estadio", capacity: 64 },

  /* ── Day 5 · Fri 25 Sep ─────────────────────────────────────────────── */
  { id: "d5-jardim-botanico", day: 5, time: "09:30", endTime: "12:30", datetime: "2026-09-25T09:30", category: "volunteering", venue: "jardimBotanico", capacity: 30 },
  { id: "d5-exposicao-solidaria", day: 5, time: "10:00", endTime: "18:00", datetime: "2026-09-25T10:00", category: "culture", venue: "fbaup", capacity: 100 },
  { id: "d5-projetos-voluntariado", day: 5, time: "14:30", endTime: "16:30", datetime: "2026-09-25T14:30", category: "workshop", venue: "fpceup", capacity: 35 },
  { id: "d5-concerto-solidario", day: 5, time: "21:00", endTime: undefined, datetime: "2026-09-25T21:00", category: "culture", venue: "reitoria", capacity: 250 },

  /* ── Day 6 · Sat 26 Sep ─────────────────────────────────────────────── */
  { id: "d6-corrida-solidaria", day: 6, time: "09:00", endTime: "11:00", datetime: "2026-09-26T09:00", category: "sport", venue: "estadio", capacity: 300 },
  { id: "d6-reflexao-coletiva", day: 6, time: "10:00", endTime: "11:30", datetime: "2026-09-26T10:00", category: "conference", venue: "jardimBotanico", capacity: 80 },
  { id: "d6-mostra-projetos", day: 6, time: "14:00", endTime: "16:00", datetime: "2026-09-26T14:00", category: "culture", venue: "reitoria", capacity: 150 },
  { id: "d6-cerimonia-encerramento", day: 6, time: "16:30", endTime: "18:00", datetime: "2026-09-26T16:30", category: "conference", venue: "reitoria", capacity: 200 },
] as const satisfies readonly Activity[];

/**
 * Union of all activity ids. Typing the dictionaries' `schedule.activities`
 * record with this guarantees (at compile time) that every activity has
 * translated strings in both locales.
 */
export type ActivityId = (typeof ACTIVITIES)[number]["id"];

/**
 * No explicit return type on purpose: the inferred element type keeps `id`
 * as the literal `ActivityId` union, so dictionary lookups stay type-safe.
 */
export function activitiesForDay(day: DayNumber) {
  return ACTIVITIES.filter((a) => a.day === day);
}

/** Formats a Date as "YYYY-MM-DD" in the event's timezone (Europe/Lisbon). */
const lisbonDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Lisbon",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/**
 * Day tab to preselect for a given moment: the matching event day while the
 * week is running, day 1 before it starts, day 6 after it ends. Comparison
 * happens in Europe/Lisbon so visitors in other timezones see the right day.
 */
export function defaultDayForDate(now: Date): DayNumber {
  const today = lisbonDate.format(now);
  const match = DAY_NUMBERS.find((d) => DAY_ISO_DATES[d] === today);
  if (match) return match;
  return today < DAY_ISO_DATES[1] ? 1 : 6;
}

/** Parses a `?dia=` / `?day=` query value into a valid day, else null. */
export function parseDayParam(raw: string | null): DayNumber | null {
  if (!raw) return null;
  const n = Number(raw);
  return (DAY_NUMBERS as readonly number[]).includes(n) ? (n as DayNumber) : null;
}
