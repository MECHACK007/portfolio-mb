"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeIn, RevealLines } from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";

type Stat = {
  label: string;
  sublabel: string;
  value: number;
  suffix?: string;
};

const stats: Stat[] = [
  { label: "Expérience", sublabel: "Années de pratique web & mobile", value: 2, suffix: "+" },
  { label: "Projets livrés", sublabel: "Applications & sites déployés", value: 3, suffix: "+" },
  { label: "Satisfaction client", sublabel: "Engagement & qualité garantis", value: 90, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      <span className="text-ember">{suffix}</span>
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionLabel index="01">Impact &amp; Résultats</SectionLabel>
        <RevealLines
          as="h2"
          className="mt-8 text-[clamp(2.4rem,5.6vw,5.6rem)] font-bold leading-[0.92] tracking-[-0.05em]"
          lines={[
            "Les chiffres qui",
            <span key="accent" className="font-serif font-normal italic tracking-[-0.02em] text-ember">
              témoignent.
            </span>,
          ]}
        />

        <div className="mt-16 grid border-t border-bone/10 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeIn
              key={stat.label}
              delay={index * 0.12}
              className="group relative border-b border-bone/10 py-10 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
                <span>{stat.label}</span>
                <span className="text-ember">0{index + 1}</span>
              </div>
              <p className="mt-10 font-display text-[clamp(5.5rem,12vw,12rem)] font-bold leading-[0.8] tracking-[-0.07em] transition-transform duration-700 ease-expo group-hover:-translate-y-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-6 text-smoke">{stat.sublabel}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
