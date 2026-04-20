"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { MagneticButton } from "@/components/ui/MagneticLink";

type Service = {
  id: string;
  name: string;
  desc: string;
};

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as Service[];
  const [active, setActive] = useState(0);

  return (
    <section
      id="servicos"
      className="relative border-t border-ink-border py-28 md:py-40"
    >
      <div className="container-x">
        <div className="mb-20 grid gap-8 md:grid-cols-12">
          <p className="text-eyebrow md:col-span-3">{t("eyebrow")}</p>
          <h2 className="text-display text-[clamp(2.25rem,6.5vw,5.5rem)] md:col-span-9">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <ul className="md:col-span-7">
            {items.map((s, i) => (
              <motion.li
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: [0.19, 1, 0.22, 1],
                }}
                onMouseEnter={() => setActive(i)}
                className="group border-t border-ink-border last:border-b"
              >
                <button
                  type="button"
                  className="relative flex w-full items-baseline gap-6 py-6 text-left"
                  data-cursor="hover"
                >
                  <span className="font-mono text-xs text-muted">{s.id}</span>
                  <span className="flex-1 font-display text-2xl text-bone transition-colors duration-500 group-hover:text-orange md:text-3xl">
                    {s.name}
                  </span>
                  <span className="font-mono text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>

                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-px h-px origin-left scale-x-0 bg-orange transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-x-100"
                  />
                </button>
              </motion.li>
            ))}
          </ul>

          <div className="md:col-span-5">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink-border bg-ink-soft">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute inset-0 flex flex-col justify-between p-8"
                  >
                    <div
                      className="absolute inset-0 opacity-80"
                      style={{
                        background: `radial-gradient(circle at ${
                          20 + active * 8
                        }% ${30 + active * 6}%, var(--color-orange) 0%, transparent 55%)`,
                      }}
                    />
                    <div className="absolute inset-0 noise" />
                    <div className="relative">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-bone/70">
                        Serviço {items[active].id}
                      </p>
                      <h3 className="mt-3 font-display text-4xl text-bone">
                        {items[active].name}
                      </h3>
                    </div>
                    <p className="relative max-w-xs text-balance text-bone/90">
                      {items[active].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8">
                <MagneticButton
                  href="/contato"
                  variant="primary"
                  cursorLabel="→"
                >
                  {t("cta")}
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
