"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { getFeaturedCases } from "@/content/cases";

export function Work() {
  const t = useTranslations("work");
  const locale = useLocale();
  const cases = getFeaturedCases();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative border-t border-ink-border py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="text-eyebrow mb-5">{t("eyebrow")}</p>
            <h2 className="text-display max-w-3xl text-[clamp(2.25rem,6vw,5rem)]">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/trabalhos"
            className="group hidden items-center gap-2 rounded-full border border-ink-border px-5 py-3 text-sm transition-colors hover:border-orange hover:text-orange md:inline-flex"
          >
            {t("viewAll")}
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>

        <ul
          className="relative border-t border-ink-border"
          onMouseLeave={() => setHovered(null)}
        >
          {cases.map((c, i) => (
            <motion.li
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.19, 1, 0.22, 1],
              }}
              onMouseEnter={() => setHovered(i)}
              className="group relative border-b border-ink-border"
            >
              <Link
                href={`/trabalhos/${c.slug}`}
                data-cursor="hover"
                data-cursor-label="ver"
                className="relative grid grid-cols-12 items-center gap-4 py-8 md:py-10"
              >
                <span className="col-span-1 font-mono text-xs text-muted">
                  0{i + 1}
                </span>
                <span className="col-span-7 font-display text-2xl text-bone transition-transform duration-500 group-hover:-translate-y-[2px] group-hover:text-orange md:col-span-6 md:text-4xl">
                  {c.client}
                </span>
                <span className="col-span-4 hidden text-sm text-muted md:col-span-3 md:block">
                  {c.category}
                </span>
                <span className="col-span-4 text-right font-mono text-xs uppercase tracking-[0.18em] text-muted md:col-span-2">
                  {c.year}
                </span>

                {/* underline */}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute left-0 bottom-0 h-px origin-left bg-orange transition-transform duration-700 ease-[var(--ease-out-expo)]",
                    hovered === i ? "scale-x-100" : "scale-x-0",
                    "w-full"
                  )}
                />
              </Link>
            </motion.li>
          ))}

          {/* preview flutuante */}
          <AnimatePresence>
            {hovered !== null && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                className="pointer-events-none absolute right-4 top-1/2 hidden aspect-[4/5] w-72 -translate-y-1/2 overflow-hidden rounded-2xl border border-ink-border md:block"
              >
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${cases[hovered].palette[0]}, ${cases[hovered].palette[1]})`,
                  }}
                />
                <div className="absolute inset-0 noise" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/70">
                    {cases[hovered].category}
                  </p>
                  <p className="mt-1 font-display text-lg text-bone">
                    {cases[hovered].locales[locale as "pt" | "en"]?.tagline ?? cases[hovered].locales.pt.tagline}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ul>

        <div className="mt-10 md:hidden">
          <Reveal>
            <Link
              href="/trabalhos"
              className="inline-flex items-center gap-2 rounded-full border border-ink-border px-5 py-3 text-sm"
            >
              {t("viewAll")}
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 11L11 3M11 3H5M11 3V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
