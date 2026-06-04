import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LogoBanner } from "@/components/ui/LogoBanner";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Split } from "@/components/ui/Split";
import { CardGrid, MediaCard } from "@/components/ui/MediaCard";
import { VideoPoster } from "@/components/ui/VideoPoster";
import { Notice } from "@/components/ui/Notice";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { PartnerRow } from "@/components/ui/PartnerRow";
import { CtaSection } from "@/components/ui/CtaSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getDictionary } from "@/lib/content/dictionaries";
import { images } from "@/lib/content/images";
import { homeJsonLd } from "@/lib/seo";
import { routes } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/config";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home;

  return (
    <>
      <JsonLd data={homeJsonLd(locale, t.meta.description)} />
      <SiteFrame locale={locale} dict={dict} pageKey="home">
      {/* White logo banner + CTAs */}
      <LogoBanner
        image={images.home.banner}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        titleId="hero-title"
      >
        <ButtonLink href={routes[locale].program} variant="primary">
          {t.hero.primaryCta}
        </ButtonLink>
        <ButtonLink href={`${routes[locale].program}#como-participar`} variant="secondary">
          {t.hero.secondaryCta}
        </ButtonLink>
      </LogoBanner>

      {/* Intro */}
      <Section labelledby="intro-title">
        <Container>
          <Split
            image={images.home.intro}
            imageAlt={t.intro.imageAlt}
            heading={t.intro.heading}
            headingId="intro-title"
            body={t.intro.body}
          >
            <ButtonLink href={routes[locale].organization} variant="primary">
              {t.intro.cta}
            </ButtonLink>
          </Split>
        </Container>
      </Section>

      {/* Highlights */}
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

      {/* Institutional video */}
      <Section pad="tight" labelledby="video-title">
        <Container>
          <h2 id="video-title" className="sr-only">
            {t.video.srTitle}
          </h2>
          <VideoPoster
            image={images.home.video}
            caption={t.video.caption}
            ariaLabel={t.video.ariaLabel}
            href="https://www.youtube.com/"
          />
        </Container>
      </Section>

      {/* Sustainable Development Goals */}
      <Section labelledby="ods-title">
        <Container>
          <SectionHeader heading={t.ods.heading} id="ods-title" center />
          <Notice className="text-center">{t.ods.notice}</Notice>
        </Container>
      </Section>

      {/* Photo strip */}
      <Section pad="none">
        <Container>
          <PhotoStrip images={images.home.strip} />
        </Container>
      </Section>

      {/* Partners */}
      <Section labelledby="partners-title">
        <Container>
          <SectionHeader heading={{ title: t.partners.title }} id="partners-title" center />
          <PartnerRow items={t.partners.items} />
        </Container>
      </Section>

      {/* #VoluntariadoUPorto */}
      <CtaSection
        eyebrow={t.social.eyebrow}
        title={t.social.title}
        titleId="social-title"
        body={t.social.body}
        button={t.social.cta}
        href="#"
        notice={t.social.notice}
      />
      </SiteFrame>
    </>
  );
}
