import { setRequestLocale, getTranslations } from "next-intl/server";
import { PageHero } from "@/components/ui/PageHero";
import { CaseGrid } from "@/components/sections/CaseGrid";
import { CtaBlock } from "@/components/sections/CtaBlock";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.work");

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
      />
      <CaseGrid />
      <CtaBlock />
    </>
  );
}
