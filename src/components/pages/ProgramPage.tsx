import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Hero } from "@/components/ui/Hero";
import { Lede } from "@/components/ui/Lede";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { ActionCardGrid } from "@/components/ui/ActionCardGrid";
import { Notice } from "@/components/ui/Notice";
import { ProgramSchedule } from "@/components/program/ProgramSchedule";
import type { ScheduleDay } from "@/components/program/types";
import { getDictionary } from "@/lib/content/dictionaries";
import { activitiesForDay, CATEGORY_KEYS, DAY_NUMBERS, VENUES } from "@/lib/content/activities";
import { images } from "@/lib/content/images";
import type { Locale } from "@/lib/i18n/config";

export function ProgramPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.program;
  const s = t.schedule;

  // Join the language-neutral activity data with the dictionary strings into
  // serializable props — the client subtree never imports the dictionaries.
  const days: ScheduleDay[] = DAY_NUMBERS.map((day) => ({
    day,
    tab: s.dayTabs[day],
    activities: activitiesForDay(day).map((a) => ({
      id: a.id,
      time: a.time,
      endTime: a.endTime,
      datetime: a.datetime,
      category: a.category,
      categoryLabel: s.categories[a.category],
      capacity: a.capacity,
      lat: VENUES[a.venue].lat,
      lng: VENUES[a.venue].lng,
      title: s.activities[a.id].title,
      description: s.activities[a.id].description,
      venueLabel: s.activities[a.id].venueLabel,
      venueName: s.venues[a.venue],
    })),
  }));

  const categories = CATEGORY_KEYS.map((key) => ({ key, label: s.categories[key] }));

  return (
    <SiteFrame locale={locale} dict={dict} pageKey="program">
      <Hero image={images.program.hero} chip={t.hero.chip} title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* Intro + strip */}
      <Section labelledby="intro-title">
        <Container>
          <SectionHeader heading={t.intro.heading} id="intro-title" />
          <Lede>{t.intro.lede}</Lede>
          <PhotoStrip images={images.program.strip} className="mt-12" />
        </Container>
      </Section>

      {/* Day-by-day schedule: tabs + timeline + activity map */}
      <Section alt labelledby="schedule-title">
        <Container>
          <SectionHeader heading={s.heading} id="schedule-title" />
          <ProgramSchedule
            days={days}
            categories={categories}
            paramName={locale === "pt" ? "dia" : "day"}
            strings={{
              tabsLabel: s.tabsLabel,
              filterLabel: s.filterLabel,
              filterAllLabel: s.filterAllLabel,
              capacityLabel: s.capacityLabel,
              mapHeading: s.mapHeading,
              mapAriaLabel: s.mapAriaLabel,
              emptyState: s.emptyState,
              dayAnnounce: s.dayAnnounce,
              notice: s.notice,
            }}
          />
        </Container>
      </Section>

      {/* How to take part */}
      <Section labelledby="participate-title" className="scroll-mt-24" id="como-participar">
        <Container>
          <SectionHeader heading={t.participate.heading} id="participate-title" />
          <ActionCardGrid cards={t.participate.cards} />
        </Container>
      </Section>

      {/* Program note */}
      <Section pad="tight" label={t.note}>
        <Container className="text-center">
          <Notice>{t.note}</Notice>
        </Container>
      </Section>
    </SiteFrame>
  );
}
