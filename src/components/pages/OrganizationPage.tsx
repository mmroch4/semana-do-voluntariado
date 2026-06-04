import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Hero } from "@/components/ui/Hero";
import { Split } from "@/components/ui/Split";
import { VideoPoster } from "@/components/ui/VideoPoster";
import { PartnerRow } from "@/components/ui/PartnerRow";
import { CtaSection } from "@/components/ui/CtaSection";
import { Notice } from "@/components/ui/Notice";
import { getDictionary } from "@/lib/content/dictionaries";
import { images } from "@/lib/content/images";
import type { Locale } from "@/lib/i18n/config";

export function OrganizationPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.organization;

  return (
    <SiteFrame locale={locale} dict={dict} pageKey="organization">
      <Hero image={images.organization.hero} chip={t.hero.chip} title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* About ReVIReS */}
      <Section labelledby="sobre-title">
        <Container>
          <Split
            image={images.organization.about}
            imageAlt={t.about.imageAlt}
            heading={t.about.heading}
            headingId="sobre-title"
            body={t.about.body}
          />
          <Notice className="mt-8">{t.about.notice}</Notice>
        </Container>
      </Section>

      {/* Institutional video */}
      <Section pad="tight" labelledby="video-title" className="pt-0">
        <Container>
          <h2 id="video-title" className="sr-only">
            {t.video.srTitle}
          </h2>
          <VideoPoster
            image={images.organization.video}
            caption={t.video.caption}
            ariaLabel={t.video.ariaLabel}
            href="https://www.youtube.com/"
          />
        </Container>
      </Section>

      {/* Partners */}
      <Section labelledby="parceiros-title">
        <Container>
          <SectionHeader heading={t.partners.heading} id="parceiros-title" center />
          <PartnerRow items={t.partners.items} />
          <Notice className="mt-8 text-center">{t.partners.notice}</Notice>
        </Container>
      </Section>

      {/* Contact */}
      <Section alt labelledby="contacto-title">
        <Container className="text-center">
          <SectionHeader heading={t.contact.heading} id="contacto-title" center />
          <Notice>{t.contact.notice}</Notice>
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
  );
}
