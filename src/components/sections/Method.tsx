"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Pillar = {
  n: string;
  name: string;
  desc: string;
};

export function Method() {
  const t = useTranslations("method");
  const pillars = t.raw("pillars") as Pillar[];

  return (
    <section className="relative border-t border-ink-border bg-bone text-ink">
      <div className="container-x py-28 md:py-40">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60 md:col-span-3">
            {t("eyebrow")}
          </p>
          <h2 className="text-display text-[clamp(2.25rem,6.5vw,5.5rem)] text-ink md:col-span-9">
            {t("title")}
          </h2>
        </div>

        <ul className="grid gap-px bg-ink/15 md:grid-cols-5">
          {pillars.map((p, i) => (
            <motion.li
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="group relative flex flex-col gap-6 bg-bone p-6 transition-colors duration-500 hover:bg-orange md:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60 group-hover:text-ink">
                  {p.n}
                </span>
                <span className="h-2 w-2 rounded-full bg-ink/30 transition-colors group-hover:bg-ink" />
              </div>
              <h3 className="font-display text-3xl leading-tight text-ink md:text-4xl">
                {p.name}
              </h3>
              <p className="mt-auto text-sm text-ink/75 group-hover:text-ink">
                {p.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
