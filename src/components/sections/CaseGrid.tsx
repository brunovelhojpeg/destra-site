"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CASES } from "@/content/cases";
import { cn } from "@/lib/cn";

export function CaseGrid() {
  const locale = useLocale();

  return (
    <section className="relative border-t border-ink-border py-24 md:py-32">
      <div className="container-x">
        <ul className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-y-24">
          {CASES.map((c, i) => {
            const copy = c.locales[locale as "pt" | "en"] ?? c.locales.pt;
            const large = i % 3 === 0;
            const colSpan = large
              ? "md:col-span-12"
              : i % 3 === 1
                ? "md:col-span-7"
                : "md:col-span-5";
            const offset = i % 3 === 2 ? "md:mt-24" : "";

            return (
              <motion.li
                key={c.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  delay: (i % 3) * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className={cn(colSpan, offset)}
              >
                <Link
                  href={`/trabalhos/${c.slug}`}
                  data-cursor="hover"
                  data-cursor-label="ver"
                  className="group block"
                >
                  {/* Cover */}
                  <div
                    className={cn(
                      "relative mb-5 overflow-hidden rounded-2xl border border-ink-border",
                      large ? "aspect-[16/9]" : "aspect-[4/5]",
                    )}
                  >
                    <div
                      className="absolute inset-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${c.palette[0]}, ${c.palette[1]})`,
                      }}
                    />
                    <div className="absolute inset-0 noise" />

                    {/* Número de fundo gigante */}
                    <span
                      className="pointer-events-none absolute -bottom-6 -right-4 font-display text-[22vw] font-medium leading-none text-bone/10 md:text-[14vw]"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Faixa de metadata */}
                    <div className="absolute inset-x-5 top-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-bone">
                      <span>{c.year}</span>
                      <span>{c.duration}</span>
                    </div>

                    {/* Tagline — aparece no hover */}
                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                      <p className="max-w-[80%] font-display text-xl text-bone opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 md:text-2xl">
                        {copy.tagline}
                      </p>
                      <span
                        aria-hidden
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-500 group-hover:rotate-[-35deg]"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path
                            d="M3 11L11 3M11 3H5M11 3V9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                        {c.category}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-medium text-bone transition-colors group-hover:text-orange md:text-2xl">
                        {c.client}
                      </h3>
                    </div>
                    <span className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                      {String(i + 1).padStart(2, "0")} / {CASES.length}
                    </span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
