import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/ui/Hero";
import { Prose } from "@/components/ui/Prose";
import { getDictionary } from "@/lib/content/dictionaries";
import { images } from "@/lib/content/images";
import type { Locale } from "@/lib/i18n/config";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.privacy;

  return (
    <SiteFrame locale={locale} dict={dict} pageKey="privacy">
      <Hero image={images.privacy.hero} chip={t.hero.chip} title={t.hero.title} subtitle={t.hero.subtitle} />

      <Section labelledby="privacy-title">
        <Container>
          <Prose title={t.title} titleId="privacy-title" sections={t.sections} notice={t.notice} />
        </Container>
      </Section>
    </SiteFrame>
  );
}
