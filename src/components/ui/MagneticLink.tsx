"use client";

import { Magnetic } from "./Magnetic";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import type { ComponentProps, ReactNode } from "react";

type LinkHref = ComponentProps<typeof Link>["href"];

export function MagneticButton({
  href,
  children,
  className,
  variant = "primary",
  cursorLabel,
  external,
}: {
  href: LinkHref | string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "outline";
  cursorLabel?: string;
  external?: boolean;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] transition-colors duration-300";
  const variants = {
    primary: "bg-orange text-ink hover:bg-orange-hot",
    ghost: "bg-bone text-ink hover:bg-bone-soft",
    outline:
      "border border-ink-border text-bone hover:border-orange hover:text-orange",
  };

  const content = (
    <span className="relative z-10 flex items-center gap-3">
      {children}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path
          d="M3 11L11 3M11 3H5M11 3V9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );

  const classes = cn(base, variants[variant], className);

  if (external) {
    return (
      <Magnetic>
        <a
          href={href as string}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          data-cursor-label={cursorLabel}
        >
          {content}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <Link
        href={href as LinkHref}
        className={classes}
        data-cursor-label={cursorLabel}
      >
        {content}
      </Link>
    </Magnetic>
  );
}
