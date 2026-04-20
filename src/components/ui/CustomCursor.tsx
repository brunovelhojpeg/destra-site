"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 22, stiffness: 260, mass: 0.5 });
  const springY = useSpring(y, { damping: 22, stiffness: 260, mass: 0.5 });
  const [variant, setVariant] = useState<"default" | "hover" | "drag">(
    "default"
  );
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const enabledRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;
    enabledRef.current = true;

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const hover = target.closest(
        "a, button, [role='button'], [data-cursor='hover']"
      );
      const drag = target.closest("[data-cursor='drag']");
      if (drag) {
        setVariant("drag");
        setLabel(drag.getAttribute("data-cursor-label"));
      } else if (hover) {
        setVariant("hover");
        setLabel(hover.getAttribute("data-cursor-label"));
      } else {
        setVariant("default");
        setLabel(null);
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y, visible]);

  const size = variant === "default" ? 10 : variant === "hover" ? 64 : 96;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        animate={{
          width: size,
          height: size,
          x: -size / 2,
          y: -size / 2,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 280 }}
        className="flex items-center justify-center rounded-full bg-bone text-[10px] font-medium uppercase tracking-[0.18em] text-ink"
      >
        {label && variant !== "default" ? label : null}
      </motion.div>
    </motion.div>
  );
}
