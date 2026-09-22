"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bot, CodeXml, Plug, Smartphone, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/app/lib/cn";
import { EASE_EXPO, FadeIn, RevealLines } from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";

type Domain = {
  id: string;
  idx: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  metrics: { score: string; label: string };
  techs: { name: string; tag: string }[];
  highlights: string[];
};

const domains: Domain[] = [
  {
    id: "web",
    idx: "01",
    icon: CodeXml,
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
      "Sécurité renforcée (JWT, CORS, Rate Limiting, Sanitization)",
      "Gestion optimisée des bases de données relationnelles",
      "Déploiement containerisé et CI/CD automatisé",
    ],
  },
  {
    id: "ai",
    idx: "04",
    icon: Bot,
    title: "IA, Prompting & Automation",
    subtitle: "Workflows Intelligents & Modèles Génératifs",
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
  },
];

export default function SkillsCircuit({ index = "02" }: { index?: string }) {
  const [selectedDomain, setSelectedDomain] = useState<string>("web");
  const current = domains.find((d) => d.id === selectedDomain) ?? domains[0];

  return (
    <section className="relative mx-2 overflow-clip rounded-[2rem] bg-bone py-24 text-ink sm:mx-4 sm:rounded-[3rem] sm:py-32">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionLabel index={index} tone="light">
              Écosystème &amp; Expertise Technologique
            </SectionLabel>
            <RevealLines
              as="h2"
              className="mt-8 text-[clamp(2.4rem,6vw,6rem)] font-bold leading-[0.9] tracking-[-0.05em]"
              lines={[
                "Domaines de",
                <span key="accent">
                  <span className="pr-[0.14em] font-serif font-normal italic tracking-[-0.02em] text-rust">maîtrise</span> &amp; impact
                </span>,
              ]}
            />
          </div>
          <FadeIn className="text-lg leading-relaxed text-stone lg:col-span-4">
            Une ingénierie logicielle complète pour concrétiser des idées ambitieuses avec performance et élégance.
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {domains.map((domain) => {
              const active = domain.id === selectedDomain;
              return (
                <div key={domain.id} className="border-t border-ink/15 last:border-b">
                  <button
                    type="button"
                    onClick={() => setSelectedDomain(domain.id)}
                    aria-expanded={active}
                    className="group flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-8"
                  >
                    <span className={cn("font-mono text-xs transition-colors", active ? "text-rust" : "text-stone")}>
                      {domain.idx}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "block font-display text-[clamp(1.6rem,3.4vw,3.3rem)] font-bold leading-[0.95] tracking-[-0.045em] transition-all duration-500 ease-expo",
                          active ? "text-ink" : "text-ink/35 group-hover:translate-x-2 group-hover:text-ink/70"
                        )}
                      >
                        {domain.title}
                      </span>
                      <span className="mt-2 block text-sm text-stone">{domain.subtitle}</span>
                    </span>
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-expo",
                        active ? "rotate-45 border-ink bg-ink text-bone" : "border-ink/20 group-hover:border-ink"
                      )}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: EASE_EXPO }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="pb-8">
                          <DomainPanel domain={domain} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: EASE_EXPO }}
                >
                  <DomainPanel domain={current} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainPanel({ domain }: { domain: Domain }) {
  const Icon = domain.icon;
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-ink p-7 text-bone sm:p-9">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-ember/30 blur-[90px]" />

      <div className="relative flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember text-ink">
          <Icon className="h-6 w-6" />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">Domaine {domain.idx}</span>
      </div>

      <div className="relative mt-10">
        <p className="font-display text-[clamp(3.4rem,5.6vw,5.4rem)] font-bold leading-[0.85] tracking-[-0.06em] text-ember">
          {domain.metrics.score}
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">{domain.metrics.label}</p>
      </div>

      <p className="relative mt-8 leading-relaxed text-bone/80">{domain.desc}</p>

      <ul className="relative mt-6 space-y-2.5">
        {domain.highlights.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-bone/90">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
            {item}
          </li>
        ))}
      </ul>

      <div className="relative mt-8 flex flex-wrap gap-2 border-t border-bone/10 pt-6">
        {domain.techs.map((tech) => (
          <span key={tech.name} className="rounded-full border border-bone/15 px-3 py-1.5 text-xs">
            <span className="text-bone">{tech.name}</span>
            <span className="ml-1.5 text-smoke">{tech.tag}</span>
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Production Ready
        </span>
        <span>v2026.1</span>
      </div>
    </div>
  );
}
