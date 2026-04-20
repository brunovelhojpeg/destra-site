"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

export function Manifesto() {
  const t = useTranslations("manifesto");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0.4]);
  const bodyY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-ink-border py-28 md:py-40"
    >
      <motion.div
        aria-hidden
        style={{ opacity: bgOpacity }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[800px] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange blur-[180px]"
      />

      <div className="container-x relative">
        <div className="mb-12 flex items-center justify-between">
          <span className="text-eyebrow">{t("eyebrow")}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Destra ——
          </span>
        </div>

        <h2 className="text-display text-[clamp(3rem,11vw,11rem)] leading-[0.88]">
          <RevealLine delay={0}>{t("line1")}</RevealLine>
          <RevealLine delay={0.12}>
            <span className="text-muted">{t("line2")}</span>
          </RevealLine>
          <RevealLine delay={0.24}>
            <span className="text-orange">{t("line3")}</span>
          </RevealLine>
        </h2>

        <motion.p
          style={{ y: bodyY }}
          className="ml-auto mt-16 max-w-lg text-balance text-lg text-bone/75"
        >
          {t("body")}
        </motion.p>
      </div>
    </section>
  );
}

function RevealLine({
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
