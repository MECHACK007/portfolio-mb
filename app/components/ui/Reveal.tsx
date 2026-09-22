"use client";

import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/app/lib/cn";
import { useIntroReady } from "./hooks";

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

type RevealLinesProps = {
  lines: ReactNode[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  /** Hold the animation until the first-visit preloader has left. */
  waitIntro?: boolean;
};

/** Masked line-by-line reveal: each line slides up from behind its own clip. */
export function RevealLines({
  lines,
  as = "div",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.09,
  waitIntro = false,
}: RevealLinesProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const introReady = useIntroReady();
  const show = inView && (!waitIntro || introReady);
  const Tag = as as ElementType;

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={index} className={cn("-mb-[0.2em] block overflow-hidden pb-[0.2em]", lineClassName)}>
          <motion.span
            className="block origin-bottom-left will-change-transform"
            initial={{ y: "115%", rotate: 3 }}
            animate={show ? { y: "0%", rotate: 0 } : undefined}
            transition={{ duration: 1.15, ease: EASE_EXPO, delay: delay + index * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeIn({ children, className, delay = 0, y = 36 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 1, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

type ScrollTextProps = {
  text: string;
  className?: string;
  highlight?: string[];
};

/** Paragraph whose words light up one after another as it scrolls through the viewport. */
export function ScrollText({ text, className, highlight = [] }: ScrollTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");
  const accents = new Set(highlight.map((h) => h.toLowerCase()));

  return (
    <p ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        const accent = accents.has(word.toLowerCase().replace(/[.,:;!?]/g, ""));
        return (
          <ScrollWord key={index} progress={scrollYProgress} range={[start, end]} accent={accent}>
            {word}
          </ScrollWord>
        );
      })}
    </p>
  );
}

function ScrollWord({
  children,
  progress,
  range,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className={cn("mr-[0.26em]", accent && "text-ember")}>
      {children}
    </motion.span>
  );
}
