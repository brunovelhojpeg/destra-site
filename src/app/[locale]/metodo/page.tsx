import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Method } from "@/components/sections/Method";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBlock } from "@/components/sections/CtaBlock";

export default async function MethodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.method");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
      />
      <Manifesto />
      <Method />
      <Testimonials />
      <CtaBlock />
    </>
  );
}
