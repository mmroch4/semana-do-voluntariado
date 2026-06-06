import { SiteFrame } from "@/components/layout/SiteFrame";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Hero } from "@/components/ui/Hero";
import { Accordion } from "@/components/ui/Accordion";
import { Notice } from "@/components/ui/Notice";
import { getDictionary } from "@/lib/content/dictionaries";
import { images } from "@/lib/content/images";
import type { Locale } from "@/lib/i18n/config";

export function FaqPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.faq;

  return (
    <SiteFrame locale={locale} dict={dict} pageKey="faq">
      <Hero image={images.faq.hero} chip={t.hero.chip} title={t.hero.title} subtitle={t.hero.subtitle} />

      <Section labelledby="faq-title">
        <Container>
          <div className="mx-auto flex max-w-[48rem] flex-col gap-8">
            <h2
              id="faq-title"
              className="text-[clamp(1.5rem,1.25rem+1vw,2rem)] font-bold leading-tight text-text-primary"
            >
              {t.title}
            </h2>
            <Accordion items={t.items} />
            <Notice>{t.notice}</Notice>
          </div>
        </Container>
      </Section>
    </SiteFrame>
  );
}
