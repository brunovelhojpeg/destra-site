"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Magnetic } from "@/components/ui/Magnetic";
import { cn } from "@/lib/cn";

export function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = [
    { href: "/trabalhos", label: t("nav.work") },
    { href: "/servicos", label: t("nav.services") },
    { href: "/metodo", label: t("nav.about") },
    { href: "/contato", label: t("nav.contact") },
  ] as const;

  const otherLocale = locale === "pt" ? "en" : "pt";

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.4 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          scrolled
            ? "bg-ink/80 backdrop-blur-xl border-b border-ink-border"
            : "bg-transparent"
        )}
      >
        <div className="container-x flex items-center justify-between py-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-2"
            aria-label="Destra — Home"
            data-cursor-label="Home"
          >
            <Image
              src="/logo.png"
              alt="Destra"
              width={1024}
              height={241}
              priority
              className="h-6 w-auto md:h-7 [filter:invert(1)_hue-rotate(180deg)] transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-full px-4 py-2 text-sm text-bone/80 transition-colors hover:text-bone"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full border border-transparent transition-all duration-300",
                      active && "border-ink-border bg-ink-soft",
                      "group-hover:border-ink-border"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={pathname}
              locale={otherLocale}
              className="hidden items-center gap-1.5 rounded-full border border-ink-border px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-bone/70 transition-colors hover:border-orange hover:text-orange md:inline-flex"
              aria-label={t("common.switchLangLabel")}
            >
              <span>{t("common.switchLang")}</span>
            </Link>

            <Magnetic className="hidden md:inline-flex">
              <Link
                href="/contato"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-orange-hot"
                data-cursor-label="→"
              >
                <span>{t("nav.cta")}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
              </Link>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-ink-border md:hidden"
            >
              <span
                className={cn(
                  "h-px w-4 bg-bone transition-transform duration-300",
                  open && "translate-y-[3px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-4 bg-bone transition-transform duration-300",
                  open && "-translate-y-[3px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink md:hidden"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="container-x flex h-full flex-col justify-between pb-12 pt-28"
            >
              <ul className="flex flex-col gap-1">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="border-b border-ink-border"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-5 font-display text-4xl"
                    >
                      <span>{item.label}</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 11L11 3M11 3H5M11 3V9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <Link
                  href={pathname}
                  locale={otherLocale}
                  className="rounded-full border border-ink-border px-4 py-2 font-mono text-xs uppercase tracking-[0.18em]"
                >
                  {t("common.switchLang")}
                </Link>
                <Link
                  href="/contato"
                  className="rounded-full bg-orange px-5 py-3 text-sm font-medium text-ink"
                >
                  {t("nav.cta")}
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
