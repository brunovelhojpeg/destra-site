"use client";

import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink-border pb-20 pt-40 md:pb-28 md:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20vw] top-0 h-[40vw] w-[40vw] rounded-full bg-orange/60 blur-[160px]"
      />
      <div className="container-x relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-eyebrow mb-6"
        >
          {eyebrow}
        </motion.p>
        <h1 className="text-display max-w-5xl text-[clamp(2.75rem,9vw,9rem)] leading-[0.9]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="block"
            >
              {title}
            </motion.span>
          </span>
        </h1>
        {intro ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-10 max-w-2xl text-balance text-lg text-bone/75"
          >
            {intro}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
