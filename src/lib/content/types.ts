import type { PageKey } from "@/lib/i18n/routes";
import type { ActivityId, CategoryKey, DayNumber, VenueKey } from "@/lib/content/activities";

/* ── Small reusable content shapes ─────────────────────────────────────── */

export interface Meta {
  title: string;
  description: string;
}

/** A media card: image + category chip + title + supporting line. */
export interface MediaCard {
  image: string;
  chip: string;
  title: string;
  text: string;
}

/** A single timeline entry (opening/closing day, award ceremony). */
export interface TimelineEntry {
  time: string;
  /** Machine-readable value for the `<time datetime>` attribute. */
  datetime: string;
  title: string;
  description: string;
  thumb: string;
}

/** A clickable image tile linking somewhere ("how to participate"). */
export interface ActionCard {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

/** Heading + optional subtitle that introduces a section. */
export interface SectionHeading {
  title: string;
  subtitle?: string;
}

/** Decorative photo with its (often empty) alt text. */
export interface Photo {
  src: string;
  alt: string;
}

/** Partner logo entry. */
export interface Partner {
  src: string;
  alt: string;
}

/** The #VoluntariadoUPorto social-share callout block. */
export interface SocialCallout {
  eyebrow: string;
  title: string;
  body: string;
  /** Label for the native share-sheet button (shown only where supported). */
  shareLabel: string;
  /** Accessible-name prefix for each network link, e.g. "Share on" → "Share on Facebook". */
  shareOn: string;
  /** Label for the copy-link button. */
  copyLabel: string;
  /** Confirmation announced after a successful copy. */
  copiedLabel: string;
  /** Text payload used by the native share sheet and the X / WhatsApp links. */
  shareText: string;
}

/* ── Shared chrome (header / footer / a11y) ────────────────────────────── */

export interface Chrome {
  langSwitchLabel: string;
  /** Visually-hidden-until-focused skip link to the main content. */
  skipToContent: string;
  header: {
    logo: string;
    openMenu: string;
    closeMenu: string;
  };
  /** Visible label for each page in the primary nav. */
  nav: Record<PageKey, string>;
  footer: {
    brandName: string;
    /** Event dates, always shown under the brand name (e.g. "21 a 26 de setembro de 2026"). */
    dates: string;
    org: string;
    tagline: string;
    navLabel: string;
    contactLabel: string;
    contactEmail: string;
    contactLines: string[];
    copyright: string;
    privacyLabel: string;
  };
}

/* ── Per-page content ──────────────────────────────────────────────────── */

export interface HomeContent {
  meta: Meta;
  /** Countdown announcement bar between the header and the logo banner. */
  announcement: {
    label: string;
    units: { days: string; hours: string; minutes: string; seconds: string };
    ariaLabel: string;
    noscript: string;
    ended: string;
  };
  hero: {
    chip: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  intro: { heading: string; body: string; cta: string; imageAlt: string };
  highlights: { heading: SectionHeading; cards: MediaCard[] };
  video: { srTitle: string; caption: string; ariaLabel: string };
  ods: { heading: SectionHeading; notice: string };
  partners: { title: string; items: Partner[] };
  social: SocialCallout;
}

/** Translated strings for one program activity (joined by `Activity.id`). */
export interface ActivityStrings {
  title: string;
  description: string;
  /** Venue + room line shown in the timeline/popup, e.g. "Reitoria · Salão Nobre". */
  venueLabel: string;
}

/** The day-by-day schedule block (tabs + timeline + map + filters). */
export interface ProgramScheduleContent {
  heading: SectionHeading;
  /** Accessible name for the day tablist. */
  tabsLabel: string;
  /** Tab labels per event day: `short` on the tab, `long` for announcements. */
  dayTabs: Record<DayNumber, { short: string; long: string }>;
  /** Translated strings for every activity in `ACTIVITIES`. */
  activities: Record<ActivityId, ActivityStrings>;
  /** Category chip labels. */
  categories: Record<CategoryKey, string>;
  /** Venue names (map popups and accessible marker names). */
  venues: Record<VenueKey, string>;
  /** Legend for the category filter group. */
  filterLabel: string;
  /** Reset chip that clears the category filter. */
  filterAllLabel: string;
  /** Capacity line template; `{n}` is replaced by the number, e.g. "Lotação: {n} participantes". */
  capacityLabel: string;
  mapHeading: SectionHeading;
  /** Accessible name for the map region. */
  mapAriaLabel: string;
  /** Shown when the active filter leaves a day with no activities. */
  emptyState: string;
  /** aria-live template on day/filter change; `{day}` and `{count}` are replaced. */
  dayAnnounce: string;
  /** Placeholder-program disclaimer shown under the schedule. */
  notice: string;
}

export interface ProgramContent {
  meta: Meta;
  hero: { chip: string; title: string; subtitle: string };
  intro: { heading: SectionHeading; lede: string };
  schedule: ProgramScheduleContent;
  participate: { heading: SectionHeading; cards: ActionCard[] };
  note: string;
}

export interface LocationContent {
  meta: Meta;
  hero: { chip: string; title: string; subtitle: string };
  polos: { heading: SectionHeading; cards: MediaCard[] };
  faculties: { heading: SectionHeading; notice: string };
  community: { heading: SectionHeading; lede: string; notice: string };
  estadio: { heading: string; body: string; cta: string; imageAlt: string; notice: string };
  transport: { heading: SectionHeading; notice: string };
}

export interface OrganizationContent {
  meta: Meta;
  hero: { chip: string; title: string; subtitle: string };
  about: { heading: string; body: string; imageAlt: string; notice: string };
  video: { srTitle: string; caption: string; ariaLabel: string };
  partners: { heading: SectionHeading; items: Partner[]; notice: string };
  contact: { heading: SectionHeading; notice: string };
  social: SocialCallout;
}

/** One question/answer pair in the FAQ accordion. */
export interface FaqItem {
  question: string;
  /** Placeholder copy until organizers confirm the real answer. */
  answer: string;
}

export interface FaqContent {
  meta: Meta;
  hero: { chip: string; title: string; subtitle: string };
  title: string;
  items: FaqItem[];
  notice: string;
}

export interface PrivacyContent {
  meta: Meta;
  hero: { chip: string; title: string; subtitle: string };
  title: string;
  sections: { heading: string; body: string }[];
  notice: string;
}

export interface VolunteeringDayContent {
  meta: Meta;
  hero: { chip: string; title: string; subtitle: string };
  contest: { heading: SectionHeading; cards: MediaCard[]; notice: string };
  award: { heading: SectionHeading; entries: TimelineEntry[]; notice: string };
  roundTable: { heading: string; body: string; imageAlt: string; notice: string };
  cta: { eyebrow: string; title: string; body: string; button: string };
}

export interface NotFoundContent {
  meta: Meta;
  code: string;
  title: string;
  subtitle: string;
  /** Language of the subtitle (the original 404 shows a cross-language line). */
  subtitleLang: string;
  button: string;
}

/* ── The full dictionary for one locale ────────────────────────────────── */

export interface Dictionary {
  chrome: Chrome;
  home: HomeContent;
  program: ProgramContent;
  location: LocationContent;
  organization: OrganizationContent;
  faq: FaqContent;
  privacy: PrivacyContent;
  volunteeringDay: VolunteeringDayContent;
  notFound: NotFoundContent;
}
