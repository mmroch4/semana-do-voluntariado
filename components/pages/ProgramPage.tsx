import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Hero } from "@/components/ui/Hero";
import { Lede } from "@/components/ui/Lede";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { Timeline } from "@/components/ui/Timeline";
import { CardGrid, MediaCard } from "@/components/ui/MediaCard";
import { ActionCardGrid } from "@/components/ui/ActionCardGrid";
import { Notice } from "@/components/ui/Notice";
import { getDictionary } from "@/lib/content/dictionaries";
import { images } from "@/lib/content/images";
import type { Locale } from "@/lib/i18n/config";

export function ProgramPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.program;

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

      {/* Opening day */}
      <Section alt labelledby="opening-title">
        <Container>
          <SectionHeader heading={t.opening.heading} id="opening-title" />
          <Timeline entries={t.opening.entries} />
        </Container>
      </Section>

      {/* Featured activities */}
      <Section labelledby="highlights-title">
        <Container>
          <SectionHeader heading={t.highlights.heading} id="highlights-title" />
          <CardGrid>
            {t.highlights.cards.map((card) => (
              <MediaCard key={card.title} card={card} />
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* Daily activities */}
      <Section labelledby="daily-title">
        <Container>
          <SectionHeader heading={t.daily.heading} id="daily-title" />
          <CardGrid>
            {t.daily.cards.map((card) => (
              <MediaCard key={card.title} card={card} />
            ))}
          </CardGrid>
          <Notice className="mt-8 text-center">{t.daily.notice}</Notice>
        </Container>
      </Section>

      {/* Closing day */}
      <Section alt labelledby="closing-title">
        <Container>
          <SectionHeader heading={t.closing.heading} id="closing-title" />
          <Timeline entries={t.closing.entries} />
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
