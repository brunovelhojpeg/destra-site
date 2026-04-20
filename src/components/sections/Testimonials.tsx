"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Item = { quote: string; name: string; role: string };

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Item[];

  return (
    <section className="relative border-t border-ink-border py-28 md:py-40">
      <div className="container-x">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <p className="text-eyebrow md:col-span-3">{t("eyebrow")}</p>
          <h2 className="text-display text-[clamp(2.25rem,6.5vw,5.5rem)] md:col-span-9">
            {t("title")}
          </h2>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: i * 0.1,
                ease: [0.19, 1, 0.22, 1],
              }}
              className="group relative flex flex-col justify-between rounded-3xl border border-ink-border bg-ink-soft p-8 transition-colors duration-500 hover:border-orange"
            >
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                className="mb-8 text-orange"
                fill="currentColor"
              >
                <path d="M0 24V14.4C0 6.72 4.48 1.12 13.44 0V5.6C8.32 6.72 6.08 10.08 6.08 13.44H12V24H0ZM20 24V14.4C20 6.72 24.48 1.12 33.44 0V5.6C28.32 6.72 26.08 10.08 26.08 13.44H32V24H20Z" />
              </svg>

              <p className="mb-10 text-balance text-lg leading-snug text-bone">
                {item.quote}
              </p>

              <div className="flex items-center justify-between border-t border-ink-border pt-5">
                <div>
                  <p className="font-medium text-bone">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  0{i + 1}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
