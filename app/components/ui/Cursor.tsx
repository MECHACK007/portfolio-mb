"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/app/lib/cn";
import { useMediaQuery } from "./hooks";

type Variant = "default" | "link" | "view";

const SIZES: Record<Variant, number> = { default: 12, link: 54, view: 104 };

export default function Cursor() {
  const enabled = useMediaQuery("(hover: hover) and (pointer: fine)");
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 });

  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };

    const handleOver = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest?.(
        "[data-cursor], a, button, [role='button'], label, select"
      );
      if (!target) {
        setVariant("default");
        setLabel("");
        return;
      }
      if (target.getAttribute("data-cursor") === "view") {
        setVariant("view");
        setLabel(target.getAttribute("data-cursor-label") || "Voir");
        return;
      }
      setVariant("link");
      setLabel("");
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver);
    root.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      root.removeEventListener("pointerleave", handleLeave);
      root.classList.remove("has-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = SIZES[variant];

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[400]",
        variant !== "view" && "mix-blend-difference"
      )}
    >
      <motion.div
        animate={{ width: size, height: size, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className={cn(
          "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full",
          variant === "view" ? "bg-ember text-ink" : "bg-bone"
        )}
      >
        <AnimatePresence>
          {variant === "view" && (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
