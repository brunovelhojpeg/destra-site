import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Method } from "@/components/sections/Method";
import { Clients } from "@/components/sections/Clients";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBlock } from "@/components/sections/CtaBlock";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Manifesto />
      <Work />
      <Services />
      <Method />
      <Clients />
      <Testimonials />
      <CtaBlock />
    </>
  );
}
