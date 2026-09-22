"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/app/lib/cn";

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

type Props = {
  children: ReactNode;
  /** Percent of one copy per second; negative scrolls left. */
  baseVelocity?: number;
  repeat?: number;
  className?: string;
};

/** Infinite marquee that speeds up — and flips direction — with scroll velocity. */
export default function VelocityMarquee({ children, baseVelocity = -3, repeat = 4, className }: Props) {
  const reduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (value) => `${wrap(-100 / repeat, 0, value)}%`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduceMotion) return;
    let moveBy = direction.current * (baseVelocity / repeat) * (delta / 1000);
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap", className)}>
      <motion.div className="flex shrink-0 flex-nowrap will-change-transform" style={{ x }}>
        {Array.from({ length: repeat }).map((_, index) => (
          <div key={index} className="flex shrink-0 items-center" aria-hidden={index > 0}>
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
