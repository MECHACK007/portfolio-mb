"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Smartphone,
  Plug,
  Bot,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Layers,
  Activity,
} from "lucide-react";

const domains = [
  {
    id: "web",
    idx: "01",
    icon: Code2,
    title: "Frontend Web Modern",
    subtitle: "Web Application & SSR High Performance",
    desc: "Conception de Web Apps sur-mesure ultra réactives, optimisées SEO, avec des temps de chargement éclair et une expérience utilisateur sans couture.",
    metrics: { score: "99/100", label: "Lighthouse Performance" },
    techs: [
      { name: "Next.js 16", tag: "App Router" },
      { name: "React 19", tag: "Server Components" },
      { name: "TypeScript", tag: "Type Safe" },
      { name: "Tailwind CSS v4", tag: "Styling" },
      { name: "JavaScript", tag: "ES6+" },
      { name: "PHP", tag: "Backend Web" },
    ],
    highlights: [
      "Architecture Clean Code & composants réutilisables",
      "SSR / SSG pour un référencement Google maximal",
      "Animations fluides 60 FPS avec Framer Motion",
    ],
    accentColor: "from-[#D9491F] via-[#E85D35] to-amber-500",
    badgeBg: "bg-[#FBE8DD] text-[#D9491F]",
  },
  {
    id: "mobile",
    idx: "02",
    icon: Smartphone,
    title: "Développement Mobile Cross-Platform",
    subtitle: "Applications iOS & Android Natives",
    desc: "Création d'applications mobiles fluides avec intégration directe de passerelles de paiement locales (Mobile Money) et notifications push en temps réel.",
    metrics: { score: "60 FPS", label: "Fluidité Animations" },
    techs: [
      { name: "Flutter", tag: "Cross-Platform" },
      { name: "Dart", tag: "Core Language" },
      { name: "Mobile Money", tag: "Airtel / MTN API" },
      { name: "Firebase", tag: "Auth & Firestore" },
      { name: "REST APIs", tag: "Sync Data" },
    ],
    highlights: [
      "Interface utilisateur native sur iOS et Android",
      "Paiements Mobile Money automatisés et sécurisés",
      "Mode offline-first avec synchronisation automatique",
    ],
    accentColor: "from-[#D9491F] via-orange-500 to-amber-500",
    badgeBg: "bg-[#FBE8DD] text-[#D9491F]",
  },
  {
    id: "backend",
    idx: "03",
    icon: Plug,
    title: "Backend & Architectures API",
    subtitle: "Microservices, REST & Datastores",
    desc: "Architectures serveurs robustes et scalables, capables de traiter des milliers de requêtes simultanées avec authentification sécurisée.",
    metrics: { score: "< 50ms", label: "Temps de Réponse API" },
    techs: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "API Framework" },
      { name: "Laravel", tag: "PHP Framework" },
      { name: "MySQL", tag: "SQL Relational" },
      { name: "PostgreSQL", tag: "SQL Advanced" },
      { name: "Docker", tag: "Containers" },
    ],
    highlights: [
      "Securité renforcée (JWT, CORS, Rate Limiting, Sanitization)",
      "Gestion optimisée des bases de données relationnelles",
      "Déploiement containerisé et CI/CD automatisé",
    ],
    accentColor: "from-amber-600 via-[#D9491F] to-rose-600",
    badgeBg: "bg-amber-100 text-amber-900",
  },
  {
    id: "ai",
    idx: "04",
    icon: Bot,
    title: "IA, Prompting & Automation",
    subtitle: "Workflows Intelligents & Modèles Generatifs",
    desc: "Intégration de modèles de langage avancés (OpenAI / Claude) dans vos outils métier pour automatiser les tâches répétitives et booster la productivité.",
    metrics: { score: "10x", label: "Productivité Boostée" },
    techs: [
      { name: "OpenAI API", tag: "GPT-4o Integration" },
      { name: "Prompt IA", tag: "Engineering" },
      { name: "Automation", tag: "Scripts & Bots" },
      { name: "Claude API", tag: "Anthropic" },
      { name: "JSON Structured", tag: "Parsed Outputs" },
    ],
    highlights: [
      "Génération automatique de contenu et réponses intelligentes",
      "Fine-tuning des prompts pour des résultats ultra précis",
      "Pipelines d'automatisation d'actions répétitives",
    ],
    accentColor: "from-emerald-600 via-teal-500 to-[#D9491F]",
    badgeBg: "bg-emerald-100 text-emerald-900",
  },
];

export default function SkillsCircuit() {
  const [selectedDomain, setSelectedDomain] = useState<string>("web");

  const current = domains.find((d) => d.id === selectedDomain) || domains[0];

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 overflow-hidden">
      {/* Dynamic Background Glow circles */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#D9491F]/15 via-amber-500/10 to-transparent blur-[140px]" />

      {/* Header */}
      <div className="mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/25 bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D9491F] shadow-sm"
        >
          <Sparkles className="h-4 w-4 text-[#D9491F] animate-pulse" />
          Écosystème &amp; Expertise Technologique
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-text tracking-tight leading-tight"
        >
          Domaines de <span className="framed-accent text-[#D9491F]">Maîtrise &amp; Impact</span>
        </motion.h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted text-base sm:text-lg leading-relaxed">
          Une ingénierie logicielle complète pour concrétiser des idées ambitieuses avec performance et élégance.
        </p>
      </div>

      {/* Interactive Tabs Selector */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5 relative z-10">
        {domains.map((d) => {
          const Icon = d.icon;
          const isActive = selectedDomain === d.id;
          return (
            <button
              key={d.id}
              onClick={() => setSelectedDomain(d.id)}
              className={`group relative flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-[#D9491F] text-white shadow-xl shadow-[#D9491F]/30 scale-105"
                  : "bg-white/80 border border-black/10 text-text hover:bg-white hover:border-[#D9491F]/30 hover:shadow-md"
              }`}
            >
              <Icon className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-white" : "text-[#D9491F]"}`} />
              <span>{d.title.split(" ")[0]} {d.title.split(" ")[1] || ""}</span>
              {isActive && (
                <motion.span
                  layoutId="activeTabBadge"
                  className="ml-1 inline-block h-2 w-2 rounded-full bg-white animate-ping"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Domain Detailed Spotlight Card (Bento Spotlight) */}
      <div className="relative z-10 mb-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-[2.5rem] border border-[#D9491F]/20 bg-gradient-to-br from-white via-[#FFF8F2] to-white p-8 sm:p-12 shadow-2xl shadow-[#D9491F]/10 relative overflow-hidden"
          >
            {/* Top Accent Stripe */}
            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${current.accentColor}`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Domain Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9491F] text-white shadow-lg shadow-[#D9491F]/25">
                    <current.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-black text-[#D9491F] tracking-widest uppercase">
                      DOMAINE {current.idx}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-text tracking-tight">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-muted font-normal">
                  {current.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-2">
                  {current.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#D9491F] shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-semibold text-text">{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Metric Showcase Box */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-[#D9491F]/20 bg-gradient-to-br from-[#16171B] to-[#22242A] p-8 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between h-full">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <current.icon className="h-40 w-40 text-white" />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-mono text-[#D9491F]">
                      <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                      <span>Standard de Qualité</span>
                    </div>

                    <div className="mt-8">
                      <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight block">
                        {current.metrics.score}
                      </span>
                      <span className="mt-2 block text-sm font-semibold text-gray-300">
                        {current.metrics.label}
                      </span>
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-emerald-400" />
                      <span className="text-xs text-gray-300 font-medium">Production Ready</span>
                    </div>
                    <span className="text-xs font-mono text-gray-400">v2026.1</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Grid Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {domains.map((d) => {
          const Icon = d.icon;
          const isSelected = selectedDomain === d.id;
          return (
            <motion.div
              key={d.id}
              onClick={() => setSelectedDomain(d.id)}
              whileHover={{ y: -6 }}
              className={`cursor-pointer group relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 ${
                isSelected
                  ? "border-2 border-[#D9491F] bg-white shadow-xl shadow-[#D9491F]/15"
                  : "border border-black/10 bg-white/90 hover:border-[#D9491F]/40 hover:shadow-lg"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isSelected
                        ? "bg-[#D9491F] text-white shadow-md shadow-[#D9491F]/30"
                        : "bg-[#FBE8DD] text-[#D9491F] group-hover:bg-[#D9491F] group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-black text-[#D9491F]/60">
                    {d.idx}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-text mb-2 group-hover:text-[#D9491F] transition-colors">
                  {d.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">
                  {d.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-bold text-[#D9491F]">
                <span>Exploration</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


