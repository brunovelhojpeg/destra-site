"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { MagneticButton } from "@/components/ui/MagneticLink";

export function CtaBlock() {
  const t = useTranslations("cta");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-ink-border bg-orange py-28 text-ink md:py-48"
    >
      <div className="absolute inset-0 noise opacity-[0.08]" />

      <motion.div
        aria-hidden
        style={{ y }}
        className="pointer-events-none absolute -left-20 top-1/2 h-[70vw] w-[70vw] max-h-[700px] max-w-[700px] -translate-y-1/2 rounded-full bg-ink/20 blur-[120px]"
      />

      <div className="container-x relative">
        <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/70">
          {t("eyebrow")}
        </p>

        <h2 className="text-display text-[clamp(3rem,12vw,14rem)] leading-[0.88] text-ink">
          <Line delay={0}>{t("title1")}</Line>
          <Line delay={0.1}>
            <span className="italic">{t("title2")}</span>
          </Line>
          <Line delay={0.2}>{t("title3")}</Line>
        </h2>

        <div className="mt-16 grid gap-10 md:grid-cols-12 md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="max-w-lg text-balance text-lg text-ink/80 md:col-span-6"
          >
            {t("lead")}
          </motion.p>

          <div className="flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end">
            <MagneticButton
              href="/contato"
              variant="ghost"
              cursorLabel="→"
            >
              {t("button")}
            </MagneticButton>
            <MagneticButton
              href="https://wa.me/5551996526797"
              variant="outline"
              external
              cursorLabel="wa"
              className="border-ink/25 text-ink hover:border-ink hover:text-ink"
            >
              {t("whatsapp")}
            </MagneticButton>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-end justify-between gap-6 border-t border-ink/15 pt-8 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
          <a
            href={`mailto:${t("email")}`}
            className="text-lg normal-case tracking-normal text-ink underline decoration-ink/40 underline-offset-4 transition-colors hover:decoration-ink"
            data-cursor="hover"
          >
            {t("email")}
          </a>
          <span>São Paulo · Brasil</span>
        </div>
      </div>
    </section>
  );
}

function Line({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, delay, ease: [0.19, 1, 0.22, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
