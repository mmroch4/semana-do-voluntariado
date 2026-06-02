import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Hero } from "@/components/ui/Hero";
import { Lede } from "@/components/ui/Lede";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { CardGrid, MediaCard } from "@/components/ui/MediaCard";
import { Split } from "@/components/ui/Split";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Notice } from "@/components/ui/Notice";
import { getDictionary } from "@/lib/content/dictionaries";
import { images } from "@/lib/content/images";
import type { Locale } from "@/lib/i18n/config";

export function LocationPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.location;

  return (
    <SiteFrame locale={locale} dict={dict} pageKey="location">
      <Hero image={images.location.hero} chip={t.hero.chip} title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* Campuses */}
      <Section labelledby="polos-title" className="pb-0">
        <Container>
          <SectionHeader heading={t.polos.heading} id="polos-title" />
          <CardGrid>
            {t.polos.cards.map((card) => (
              <MediaCard key={card.title} card={card} />
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* Photo strip */}
      <Section pad="tight">
        <Container>
          <PhotoStrip images={images.location.strip} />
        </Container>
      </Section>

      {/* Participating faculties */}
      <Section alt labelledby="faculdades-title">
        <Container>
          <SectionHeader heading={t.faculties.heading} id="faculdades-title" />
          <Notice>{t.faculties.notice}</Notice>
        </Container>
      </Section>

      {/* Community venues */}
      <Section labelledby="comunidade-title">
        <Container>
          <SectionHeader heading={t.community.heading} id="comunidade-title" />
          <Lede>{t.community.lede}</Lede>
          <Notice className="mt-4">{t.community.notice}</Notice>
        </Container>
      </Section>

      {/* University stadium */}
      <Section alt labelledby="estadio-title">
        <Container>
          <Split
            image={images.location.estadio}
            imageAlt={t.estadio.imageAlt}
            heading={t.estadio.heading}
            headingId="estadio-title"
            body={t.estadio.body}
          >
            <ButtonLink href="#estadio-mapa" variant="primary">
              {t.estadio.cta}
            </ButtonLink>
          </Split>
          <Notice className="mt-8">{t.estadio.notice}</Notice>
        </Container>
      </Section>

      {/* Getting there */}
      <Section labelledby="transporte-title">
        <Container>
          <SectionHeader heading={t.transport.heading} id="transporte-title" />
          <Notice>{t.transport.notice}</Notice>
        </Container>
      </Section>
    </SiteFrame>
  );
}
