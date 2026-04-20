"use client";

import { useTranslations } from "next-intl";
import { Marquee } from "@/components/ui/Marquee";

const CLIENTS = [
  "Verdana",
  "NovaSaúde",
  "Kira Energia",
  "Estúdio Forma",
  "Base&Co",
  "Orbital",
  "Monte Vivo",
  "Pramo",
  "Ferrata",
  "Kamada",
  "Zênite",
  "Labora",
  "Seiva",
  "Norte Sul",
  "Viverde",
];

export function Clients() {
  const t = useTranslations("clients");

  return (
    <section className="relative border-t border-ink-border bg-ink py-20">
      <div className="container-x mb-10 flex items-end justify-between">
        <p className="text-eyebrow">{t("eyebrow")}</p>
        <h3 className="font-display text-2xl md:text-3xl">{t("title")}</h3>
      </div>

      <Marquee duration={55} className="mask-fade-x">
        {CLIENTS.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-display text-4xl font-medium text-bone/60 transition-colors hover:text-bone md:text-6xl"
          >
            {c}
            <span className="text-orange/80">✦</span>
          </span>
        ))}
      </Marquee>

      <Marquee duration={45} reverse className="mt-4 mask-fade-x">
        {[...CLIENTS].reverse().map((c, i) => (
          <span
            key={`${c}-r-${i}`}
            className="flex items-center gap-10 whitespace-nowrap font-display text-3xl text-bone/40 md:text-5xl"
          >
            {c}
            <span className="text-muted">/</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
