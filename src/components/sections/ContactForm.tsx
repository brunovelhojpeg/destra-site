"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

export function ContactForm() {
  const t = useTranslations("pages.contact");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative border-t border-ink-border py-20 md:py-28">
      <div className="container-x grid gap-16 md:grid-cols-12">
        <form
          className="md:col-span-7"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid gap-px bg-ink-border">
            <Field
              name="name"
              label={t("form.name")}
              placeholder={t("form.placeholder.name")}
              required
            />
            <div className="grid gap-px bg-ink-border md:grid-cols-2">
              <Field
                name="email"
                type="email"
                label={t("form.email")}
                placeholder={t("form.placeholder.email")}
                required
              />
              <Field
                name="company"
                label={t("form.company")}
                placeholder={t("form.placeholder.company")}
              />
            </div>
            <Field
              name="budget"
              label={t("form.budget")}
              placeholder={t("form.placeholder.budget")}
            />
            <Field
              name="message"
              label={t("form.message")}
              placeholder={t("form.placeholder.message")}
              multiline
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            data-cursor="hover"
            className={cn(
              "group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-5 text-sm font-medium uppercase tracking-[0.18em] transition-colors md:w-auto",
              sent
                ? "bg-bone text-ink"
                : "bg-orange text-ink hover:bg-orange-hot"
            )}
          >
            {sent ? "✓ ——" : t("form.submit")}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H5M11 3V9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>

        <aside className="md:col-span-4 md:col-start-9">
          <p className="text-eyebrow mb-6">{t("direct")}</p>
          <ul className="space-y-1 border-t border-ink-border">
            <ChannelRow label={t("channels.email")} value="ola@agenciadestra.com.br" />
            <ChannelRow label={t("channels.whatsapp")} value="+55 11 9 9999-9999" />
            <ChannelRow label={t("channels.studio")} value="Av. Paulista, 1000 · SP" />
          </ul>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 rounded-3xl border border-ink-border bg-ink-soft p-6"
          >
            <p className="font-display text-2xl leading-snug text-bone">
              Respondemos em até <span className="text-orange">24h úteis</span>.
            </p>
            <p className="mt-3 text-sm text-muted">
              Seg a sex · 9h–19h · São Paulo
            </p>
          </motion.div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required,
  multiline,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  const common =
    "peer w-full bg-ink px-5 pb-4 pt-8 text-base text-bone placeholder:text-transparent focus:outline-none";

  return (
    <label className="group relative block bg-ink transition-colors focus-within:bg-ink-soft">
      <span className="pointer-events-none absolute left-5 top-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors group-focus-within:text-orange">
        {label}
        {required && <span className="text-orange">*</span>}
      </span>
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={4}
          className={common}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={common}
        />
      )}
    </label>
  );
}

function ChannelRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between border-b border-ink-border py-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      <span className="text-bone">{value}</span>
    </li>
  );
}
