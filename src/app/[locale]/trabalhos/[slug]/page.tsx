import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { CASES, getCaseBySlug } from "@/content/cases";
import { CaseView } from "@/components/sections/CaseView";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    CASES.map((c) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug, locale } = await params;
  const caseData = getCaseBySlug(slug);
  if (!caseData) return {};
  const copy = caseData.locales[locale as "pt" | "en"] ?? caseData.locales.pt;
  return {
    title: `${caseData.client} — ${copy.tagline}`,
    description: copy.overview,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const caseData = getCaseBySlug(slug);
  if (!caseData) notFound();

  return <CaseView caseData={caseData} />;
}
