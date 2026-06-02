import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Hero } from "@/components/ui/Hero";
import { Countdown } from "@/components/ui/Countdown";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Split } from "@/components/ui/Split";
import { CardGrid, MediaCard } from "@/components/ui/MediaCard";
import { VideoPoster } from "@/components/ui/VideoPoster";
import { Notice } from "@/components/ui/Notice";
import { PhotoStrip } from "@/components/ui/PhotoStrip";
import { PartnerRow } from "@/components/ui/PartnerRow";
import { SocialCallout } from "@/components/ui/SocialCallout";
import { JsonLd } from "@/components/seo/JsonLd";
import { getDictionary } from "@/lib/content/dictionaries";
import { images } from "@/lib/content/images";
import { EVENT_OPENING_ISO } from "@/lib/content/event";
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
      {/* Hero with countdown + CTAs */}
      <Hero
        image={images.home.hero}
        chip={t.hero.chip}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        titleId="hero-title"
        compact={false}
      >
        <Countdown
          targetIso={EVENT_OPENING_ISO}
          labels={t.hero.countdownUnits}
          ariaLabel={t.hero.countdownAriaLabel}
          noscriptMessage={t.hero.countdownNoscript}
          endedMessage={t.hero.countdownEnded}
        />
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <ButtonLink href={routes[locale].program} variant="primary">
            {t.hero.primaryCta}
          </ButtonLink>
          <ButtonLink href={`${routes[locale].program}#como-participar`} variant="onImage">
            {t.hero.secondaryCta}
          </ButtonLink>
        </div>
      </Hero>

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
      <SocialCallout content={t.social} tone="dark" titleId="social-title" />
      </SiteFrame>
    </>
  );
}
