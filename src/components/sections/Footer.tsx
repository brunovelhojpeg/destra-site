"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { SplitWords } from "@/components/ui/Reveal";

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const otherLocale = locale === "pt" ? "en" : "pt";

  const cols = {
    explore: [
      { href: "/", label: "Home" },
      { href: "/trabalhos", label: t("nav.work") },
      { href: "/metodo", label: t("nav.about") },
      { href: "/contato", label: t("nav.contact") },
    ],
    services: [
      { href: "/servicos#branding", label: "Branding" },
      { href: "/servicos#ads", label: "Meta & Google Ads" },
      { href: "/servicos#packaging", label: "Packaging" },
      { href: "/servicos#inbound", label: "Inbound" },
      { href: "/servicos#video", label: "Video" },
      { href: "/servicos#launch", label: "Digital Launch" },
    ],
    social: [
      { href: "https://instagram.com", label: "Instagram" },
      { href: "https://linkedin.com", label: "LinkedIn" },
      { href: "https://youtube.com", label: "YouTube" },
      { href: "https://behance.net", label: "Behance" },
    ],
  };

  return (
    <footer className="relative overflow-hidden border-t border-ink-border bg-ink pt-24 pb-10">
      <div className="container-x">
        <div className="mb-20">
          <p className="text-eyebrow mb-6">{t("footer.tagline")}</p>
          <h2 className="text-display text-[clamp(4rem,14vw,16rem)] font-display leading-none text-bone">
            <SplitWords text="Destra." />
          </h2>
        </div>

        <div className="grid gap-12 border-t border-ink-border pt-14 md:grid-cols-4">
          <div>
            <p className="text-eyebrow mb-4">{t("footer.columns.contact")}</p>
            <p className="text-bone">{t("cta.email")}</p>
            <p className="mt-2 text-sm text-muted">{t("footer.address")}</p>
          </div>

          <nav>
            <p className="text-eyebrow mb-4">{t("footer.columns.explore")}</p>
            <ul className="space-y-2">
              {cols.explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-bone/80 transition-colors hover:text-orange"
                  >
                    <span className="h-px w-2 bg-current opacity-40 transition-all group-hover:w-6 group-hover:opacity-100" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <p className="text-eyebrow mb-4">{t("footer.columns.services")}</p>
            <ul className="space-y-2">
              {cols.services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-bone/80 transition-colors hover:text-orange"
                  >
                    <span className="h-px w-2 bg-current opacity-40 transition-all group-hover:w-6 group-hover:opacity-100" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <p className="text-eyebrow mb-4">{t("footer.columns.social")}</p>
            <ul className="space-y-2">
              {cols.social.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-bone/80 transition-colors hover:text-orange"
                  >
                    <span className="h-px w-2 bg-current opacity-40 transition-all group-hover:w-6 group-hover:opacity-100" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-border pt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted md:flex-row md:items-center">
          <span>
            © {year} Destra — {t("footer.rights")}
          </span>
          <div className="flex items-center gap-6">
            <span>São Paulo · Brasil</span>
            <Link
              href={pathname}
              locale={otherLocale}
              className="rounded-full border border-ink-border px-3 py-1.5 text-bone transition-colors hover:border-orange hover:text-orange"
            >
              {t("common.switchLang")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
