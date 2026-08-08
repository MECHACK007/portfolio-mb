"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Plug, Bot, Cpu, Sparkles } from "lucide-react";

const domains = [
  {
    idx: "01",
    icon: Code2,
    title: "Développement Web",
    desc: "Applications web sur-mesure, performantes et optimisées SEO.",
    techs: ["Next.js 16", "React", "TypeScript", "Tailwind CSS"],
    color: "from-orange-500 to-amber-500",
  },
  {
    idx: "02",
    icon: Smartphone,
    title: "Développement Mobile",
    desc: "Applications natives & multiplateformes iOS & Android.",
    techs: ["Flutter", "Dart", "Kotlin", "Firebase"],
    color: "from-[#D9491F] to-rose-500",
  },
  {
    idx: "03",
    icon: Plug,
    title: "API & Intégrations",
    desc: "Architecture Backend, APIs REST & systèmes de paiement.",
    techs: ["Node.js", "REST API", "Mobile Money", "MySQL"],
    color: "from-amber-500 to-orange-600",
  },
  {
    idx: "04",
    icon: Bot,
    title: "Agents IA & Automation",
    desc: "Intégration de modèles d'IA et automatisation de workflows.",
    techs: ["OpenAI API", "Python", "Automation", "Workflows"],
    color: "from-emerald-500 to-[#D9491F]",
  },
];

export default function SkillsCircuit() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#D9491F]/10 blur-[130px]" />

      {/* Header */}
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-[#FBE8DD]/60 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D9491F]"
        >
          <Cpu className="h-3.5 w-3.5" />
          Domaines d'expertise
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-text tracking-tight"
        >
          Compétences &amp; <span className="framed-accent text-[#D9491F]">savoir-faire</span>
        </motion.h2>
        <p className="mt-4 max-w-xl mx-auto text-muted text-base sm:text-lg">
          Un ensemble de compétences couvrant l'intégralité de la chaîne de valeur d'un projet numérique moderne.
        </p>
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {domains.map(({ idx, icon: Icon, title, desc, techs }, index) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-[#D9491F]/15 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#D9491F]/15 hover:border-[#D9491F]/30"
          >
            {/* Top row: Icon + Idx */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBE8DD] text-[#D9491F] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D9491F] group-hover:text-white shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-mono text-sm font-black tracking-wider text-[#D9491F]/40 group-hover:text-[#D9491F]">
                  {idx}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-extrabold text-text tracking-tight group-hover:text-[#D9491F] transition-colors duration-200">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted mb-6">
                {desc}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="border-t border-black/5 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {techs.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-[#D9491F]/10 bg-[#FBE8DD]/40 px-2.5 py-1 text-[11px] font-medium text-text transition-colors group-hover:bg-[#FBE8DD] group-hover:text-[#D9491F]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

