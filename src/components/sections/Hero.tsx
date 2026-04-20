"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Marquee } from "@/components/ui/Marquee";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const marquee = t.raw("marquee") as string[];

  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 600], [0, -60]);
  const opacityOut = useTransform(scrollY, [0, 500], [1, 0.25]);

  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Sao_Paulo",
        hour12: false,
      }).format(new Date());
    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, [locale]);

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28">
      {/* grade sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-bone) 1px, transparent 1px), linear-gradient(to bottom, var(--color-bone) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 90% 60% at 50% 35%, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 60% at 50% 35%, black 40%, transparent 80%)",
        }}
      />

      {/* orbe laranja */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.55, scale: 1 }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute -right-[10vw] top-[18vh] h-[46vw] w-[46vw] max-h-[680px] max-w-[680px] rounded-full bg-orange blur-[140px]"
      />

      <div className="container-x relative flex flex-1 flex-col justify-between">
        {/* meta row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-orange" />
            {t("eyebrow")}
          </span>
          <span className="hidden md:inline">
            SP · BR · {time || "00:00:00"}
          </span>
        </motion.div>

        {/* título */}
        <motion.h1
          style={{ y: titleY, opacity: opacityOut }}
          className="text-display mt-16 text-[clamp(3.25rem,13vw,14rem)] text-bone"
        >
          <LineReveal delay={0.1}>{t("titleA")}</LineReveal>
          <LineReveal delay={0.25}>
            <span className="inline-flex items-baseline gap-[0.25em]">
              <span className="text-orange italic">{t("titleB")}</span>
            </span>
          </LineReveal>
          <LineReveal delay={0.4}>{t("titleC")}</LineReveal>
        </motion.h1>

        {/* rodapé do hero */}
        <div className="mt-16 grid gap-10 pb-10 md:grid-cols-12 md:items-end md:gap-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="max-w-xl text-balance text-lg text-bone/80 md:col-span-5 md:col-start-1"
          >
            {t("lead")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="flex items-center justify-end gap-4 md:col-span-4 md:col-start-9"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {t("scroll")}
            </span>
            <svg width="18" height="36" viewBox="0 0 18 36" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="17"
                height="35"
                rx="8.5"
                stroke="currentColor"
                className="text-muted"
              />
              <motion.rect
                x="7"
                y="6"
                width="4"
                height="6"
                rx="2"
                fill="currentColor"
                className="text-orange"
                animate={{ y: [6, 18, 6] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* marquee inferior */}
      <div className="relative border-y border-ink-border py-5">
        <Marquee duration={35}>
          {marquee.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-display text-2xl text-bone"
            >
              <span>{item}</span>
              <span className="text-orange">◆</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function LineReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.19, 1, 0.22, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
