"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ImageProps } from "next/image";
import { useRef } from "react";
import { cn } from "@/app/lib/cn";
import ProjectImage from "./ProjectImage";

type Props = {
  src: ImageProps["src"];
  title: string;
  preload?: boolean;
  sizes?: string;
  className?: string;
};

export default function ParallaxImage({ src, title, preload, sizes = "100vw", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div ref={ref} className={cn("relative aspect-[16/10] overflow-hidden bg-ink-3", className)}>
      <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[8%]">
        <ProjectImage src={src} title={title} fill preload={preload} sizes={sizes} className="object-cover object-top" />
      </motion.div>
    </div>
  );
}
