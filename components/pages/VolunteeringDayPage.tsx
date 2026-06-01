import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Hero } from "@/components/ui/Hero";
import { CardGrid, MediaCard } from "@/components/ui/MediaCard";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { Timeline } from "@/components/ui/Timeline";
import { Split } from "@/components/ui/Split";
import { CtaBlock } from "@/components/ui/CtaBlock";
import { Notice } from "@/components/ui/Notice";
import { getDictionary } from "@/lib/content/dictionaries";
import { images } from "@/lib/content/images";
import { routes } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/config";

export function VolunteeringDayPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.volunteeringDay;

  return (
    <SiteFrame locale={locale} dict={dict} pageKey="volunteeringDay">
      <Hero image={images.volunteeringDay.hero} chip={t.hero.chip} title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* Photography contest */}
      <Section labelledby="contest-title">
        <Container>
          <SectionHeader heading={t.contest.heading} id="contest-title" center />
          <CardGrid>
            {t.contest.cards.map((card) => (
              <MediaCard key={card.title} card={card} />
            ))}
          </CardGrid>
          <Notice className="mt-8 text-center">{t.contest.notice}</Notice>
        </Container>
      </Section>

      {/* Photo strip */}
      <Section pad="none">
        <Container>
          <PhotoStrip images={images.volunteeringDay.strip} />
        </Container>
      </Section>

      {/* Volunteering Day Award */}
      <Section labelledby="award-title">
        <Container>
          <SectionHeader heading={t.award.heading} id="award-title" />
          <Timeline entries={t.award.entries} />
          <Notice className="mt-8">{t.award.notice}</Notice>
        </Container>
      </Section>

      {/* Round table */}
      <Section labelledby="round-title">
        <Container>
          <Split
            image={images.volunteeringDay.roundTable}
            imageAlt={t.roundTable.imageAlt}
            heading={t.roundTable.heading}
            headingId="round-title"
            body={t.roundTable.body}
          />
          <Notice className="mt-8">{t.roundTable.notice}</Notice>
        </Container>
      </Section>

      {/* Back to main event */}
      <Section alt labelledby="back-link-title">
        <Container>
          <CtaBlock
            eyebrow={t.cta.eyebrow}
            title={t.cta.title}
            titleId="back-link-title"
            body={t.cta.body}
            button={t.cta.button}
            href={routes[locale].program}
          />
        </Container>
      </Section>
    </SiteFrame>
  );
}
