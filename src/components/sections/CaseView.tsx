"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRef } from "react";
import { Link } from "@/i18n/navigation";
import { CASES, type Case } from "@/content/cases";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBlock } from "@/components/sections/CtaBlock";

export function CaseView({ caseData }: { caseData: Case }) {
  const locale = useLocale();
  const t = useTranslations();
  const copy =
    caseData.locales[locale as "pt" | "en"] ?? caseData.locales.pt;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const currentIndex = CASES.findIndex((c) => c.slug === caseData.slug);
  const nextCase = CASES[(currentIndex + 1) % CASES.length];
  const nextCopy =
    nextCase.locales[locale as "pt" | "en"] ?? nextCase.locales.pt;

  return (
    <>
      {/* HERO cinematográfico */}
      <section
        ref={heroRef}
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28 pb-16"
      >
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, ${caseData.palette[0]}, ${caseData.palette[1]})`,
            }}
          />
          <div className="absolute inset-0 noise" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(10,10,10,0.7), transparent)",
            }}
          />
        </motion.div>

        <div className="container-x relative">
          <div className="mb-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-bone/70">
            <Link href="/trabalhos" className="hover:text-bone">
              ← {locale === "pt" ? "Trabalhos" : "Work"}
            </Link>
            <span>/</span>
            <span>{caseData.year}</span>
            <span>/</span>
            <span>{caseData.category}</span>
          </div>

          <h1 className="text-display mb-6 text-[clamp(3rem,10vw,10rem)] text-bone">
            <RevealLine>{caseData.client}</RevealLine>
          </h1>

          <p className="max-w-2xl text-balance font-display text-2xl leading-tight text-bone md:text-3xl">
            {copy.tagline}
          </p>
        </div>
      </section>

      {/* META BAR */}
      <section className="relative border-y border-ink-border bg-ink">
        <div className="container-x grid grid-cols-2 divide-ink-border md:grid-cols-4 md:divide-x">
          {[
            { label: locale === "pt" ? "Cliente" : "Client", value: caseData.client },
            { label: locale === "pt" ? "Ano" : "Year", value: caseData.year },
            { label: locale === "pt" ? "Duração" : "Duration", value: caseData.duration },
            {
              label: locale === "pt" ? "Serviços" : "Services",
              value: caseData.services.join(" · "),
            },
          ].map((item, i) => (
            <div key={item.label} className={`py-6 ${i < 2 ? "md:pr-6" : "md:px-6"}`}>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-bone">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative py-24 md:py-32">
        <div className="container-x grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="text-eyebrow">
              {locale === "pt" ? "Contexto" : "Overview"}
            </span>
          </div>
          <Reveal className="md:col-span-8">
            <p className="text-balance text-xl leading-relaxed text-bone md:text-2xl">
              {copy.overview}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGE / STRATEGY / EXECUTION */}
      {[
        {
          num: "01",
          label: locale === "pt" ? "Desafio" : "Challenge",
          body: copy.challenge,
        },
        {
          num: "02",
          label: locale === "pt" ? "Estratégia" : "Strategy",
          body: copy.strategy,
        },
        {
          num: "03",
          label: locale === "pt" ? "Execução" : "Execution",
          body: copy.execution,
        },
      ].map((block, i) => (
        <section
          key={block.num}
          className="relative border-t border-ink-border py-24 md:py-32"
        >
          <div className="container-x grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {block.num} — {block.label}
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Reveal delay={0.05}>
                <h2 className="font-display text-[clamp(2rem,4vw,3.75rem)] leading-[1.02] tracking-tight text-bone">
                  {block.label}
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-balance text-lg leading-relaxed text-bone/80">
                  {block.body}
                </p>
              </Reveal>

              {/* Visual placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="relative mt-12 aspect-[16/10] overflow-hidden rounded-2xl border border-ink-border"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      i % 2 === 0
                        ? `linear-gradient(135deg, ${caseData.palette[0]}, ${caseData.palette[1]})`
                        : `linear-gradient(315deg, ${caseData.palette[1]}, ${caseData.palette[0]})`,
                  }}
                />
                <div className="absolute inset-0 noise" />
                <span
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[14vw] font-medium text-bone/20 md:text-[9vw]"
                  aria-hidden
                >
                  {block.num}
                </span>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* RESULTS */}
      <section className="relative border-t border-ink-border bg-ink-soft py-24 md:py-32">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-eyebrow mb-4">
                {locale === "pt" ? "Resultados" : "Results"}
              </p>
              <h2 className="text-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] text-bone">
                {locale === "pt" ? (
                  <>
                    Números <span className="text-orange">que ficam.</span>
                  </>
                ) : (
                  <>
                    Numbers <span className="text-orange">that stay.</span>
                  </>
                )}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {copy.results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="relative overflow-hidden rounded-2xl border border-ink-border bg-ink p-6 md:p-8"
              >
                <p className="text-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-orange">
                  {r.value}
                </p>
                <p className="mt-4 text-sm text-bone/70">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT CASE */}
      <section className="relative border-t border-ink-border overflow-hidden">
        <Link
          href={`/trabalhos/${nextCase.slug}`}
          data-cursor="hover"
          data-cursor-label={locale === "pt" ? "próximo" : "next"}
          className="group relative block"
        >
          <div
            className="absolute inset-0 opacity-25 transition-opacity duration-700 group-hover:opacity-45"
            style={{
              backgroundImage: `linear-gradient(135deg, ${nextCase.palette[0]}, ${nextCase.palette[1]})`,
            }}
          />
          <div className="absolute inset-0 noise" />

          <div className="container-x relative flex flex-col items-start justify-center gap-4 py-32 md:py-48">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {locale === "pt" ? "Próximo case" : "Next case"} →
            </span>
            <h3 className="text-display text-[clamp(3rem,10vw,10rem)] leading-none text-bone transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-4">
              {nextCase.client}.
            </h3>
            <p className="max-w-2xl text-balance text-lg text-bone/80">
              {nextCopy.tagline}
            </p>
          </div>
        </Link>
      </section>

      <CtaBlock />
    </>
  );
}

function RevealLine({ children }: { children: React.ReactNode }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
