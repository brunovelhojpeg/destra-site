"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0 items-center gap-16 pr-16">
          {children}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 items-center gap-16 pr-16"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
