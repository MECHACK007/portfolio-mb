"use client";

import { ComponentType, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock3, Package, Heart, BarChart } from "lucide-react";

type Stat = { label: string; value: number; suffix?: string; icon: ComponentType<{ className?: string }> };

const stats: Stat[] = [
  { label: "Ans d'expérience", value: 2, suffix: "+", icon: Clock3 },
  { label: "Projets livrés", value: 8, suffix: "+", icon: Package },
  { label: "Clients satisfaits", value: 100, suffix: "%", icon: Heart },
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
    <span ref={ref} className="text-7xl font-extrabold tracking-tight bg-gradient-to-br from-orange-500 via-orange-400 to-slate-900 bg-clip-text text-transparent md:text-8xl">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-surface px-6 py-16">
      <div className="mx-auto max-w-6xl text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          <span className="framed-accent text-accent inline-flex items-center gap-2 px-3 py-1">
            <BarChart className="w-4 h-4 text-accent relative top-1" aria-hidden="true" />
            <span className="sr-only">Icône : statistiques</span>
            Les chiffres
          </span>
        </h2>
        <p className="mt-3 text-2xl md:text-3xl font-extrabold">
          Les chiffres
          <span className="framed-accent text-accent inline-flex items-center gap-2 ml-3 px-2 py-1 rounded-md">
            <span className="sr-only">Icône retirée</span>
            parlent
          </span>
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className={`inline-block h-1.5 w-14 rounded-full ${index === 0 ? "bg-orange-500" : index === 1 ? "bg-amber-500" : "bg-slate-900"}`} />
                <Icon className="text-2xl text-orange-500" />
              </div>

              <Counter value={stat.value} suffix={stat.suffix} delay={index * 120} />

              <p className="mt-4 text-sm uppercase tracking-[0.22em] text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
