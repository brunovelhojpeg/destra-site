import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { CtaBlock } from "@/components/sections/CtaBlock";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.services");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
      />
      <Services />
      <Method />
      <CtaBlock />
    </>
  );
}
