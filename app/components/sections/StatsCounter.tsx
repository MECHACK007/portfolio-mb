"use client";

import { ComponentType, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock3, Package, Heart, TrendingUp, Sparkles } from "lucide-react";

type Stat = {
  label: string;
  sublabel: string;
  value: number;
  suffix?: string;
  icon: ComponentType<{ className?: string }>;
};

const stats: Stat[] = [
  { label: "Expérience", sublabel: "Années de pratique web & mobile", value: 2, suffix: "+", icon: Clock3 },
  { label: "Projets livrés", sublabel: "Applications & sites déployés", value: 8, suffix: "+", icon: Package },
  { label: "Satisfaction client", sublabel: "Engagement & qualité garantis", value: 100, suffix: "%", icon: Heart },
];

function Counter({ value, suffix, delay }: { value: number; suffix?: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const startTime = performance.now() + delay;

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(Math.max(0, progress) * value));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value, delay]);

  return (
    <span
      ref={ref}
      className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-[#D9491F] via-[#E85D35] to-[#B03410] bg-clip-text text-transparent"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-[#FBE8DD]/60 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D9491F]"
        >
          <TrendingUp className="h-3.5 w-3.5" />
          Impact &amp; Résultats
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-text tracking-tight"
        >
          Les chiffres qui <span className="framed-accent text-[#D9491F]">témoignent</span>
        </motion.h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-3xl border border-[#D9491F]/15 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#D9491F]/10 hover:border-[#D9491F]/30"
            >
              {/* Corner accent glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#D9491F]/5 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#D9491F]/10" />

              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBE8DD] text-[#D9491F] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-[#D9491F]" />
                </div>
                <Sparkles className="h-4 w-4 text-[#D9491F]/40 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <Counter value={stat.value} suffix={stat.suffix} delay={index * 120} />

              <h3 className="mt-4 text-lg font-bold text-text">{stat.label}</h3>
              <p className="mt-1 text-xs sm:text-sm text-muted">{stat.sublabel}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

