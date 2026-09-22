"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  Atom,
  Check,
  Cloud,
  CodeXml,
  Copy,
  Cpu,
  Database,
  Feather,
  FileCode,
  Flame,
  GitBranch,
  Package,
  RotateCcw,
  Send,
  Server,
  Smartphone,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/cn";
import { EASE_EXPO, FadeIn, RevealLines } from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";

type StackCategory = {
  id: string;
  name: string;
  icon: LucideIcon;
  items: { name: string; level: string; icon: LucideIcon }[];
};

const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    name: "Frontend Web",
    icon: CodeXml,
    items: [
      { name: "React 19", level: "Moyen", icon: Atom },
      { name: "JavaScript", level: "Débutant", icon: CodeXml },
      { name: "TypeScript", level: "Débutant", icon: FileCode },
      { name: "Tailwind CSS v4", level: "Moyen", icon: Feather },
      { name: "Framer Motion", level: "Moyen", icon: Sparkles },
    ],
  },
  {
    id: "mobile",
    name: "Mobile & Cross-Platform",
    icon: Smartphone,
    items: [
      { name: "Flutter & Dart", level: "Moyen", icon: Smartphone },
      { name: "Firebase", level: "Débutant", icon: Flame },
    ],
  },
  {
    id: "backend",
    name: "Backend & Cloud",
    icon: Server,
    items: [
      { name: "Node.js & Express", level: "Moyen", icon: CodeXml },
      { name: "REST APIs", level: "Moyen", icon: RotateCcw },
      { name: "Laravel", level: "Moyen", icon: CodeXml },
      { name: "PHP", level: "Moyen", icon: CodeXml },
      { name: "MySQL & PostgreSQL", level: "Moyen", icon: Database },
      { name: "Docker", level: "Moyen", icon: Package },
    ],
  },
  {
    id: "ai-tools",
    name: "IA & Tools",
    icon: Wrench,
    items: [
      { name: "OpenAI API & Agents", level: "Moyen", icon: Cpu },
      { name: "Git & GitHub", level: "Moyen", icon: GitBranch },
      { name: "Vercel & Cloud", level: "Débutant", icon: Cloud },
      { name: "Postman", level: "Moyen", icon: Send },
    ],
  },
];

const LEVEL_FILL: Record<string, number> = { Débutant: 0.38, Moyen: 0.66, Avancé: 0.9 };
const FULL_COMMAND = "rosca --show-stack --format json";
const totalTools = stackCategories.reduce((sum, category) => sum + category.items.length, 0);

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EXPO } },
};

export default function TechStackTerminal({ index = "05" }: { index?: string }) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [copied, setCopied] = useState(false);
  const [typed, setTyped] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);
  const hasTriggered = useRef(false);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearInterval(intervalRef.current), []);

  function startTyping() {
    if (hasTriggered.current) return;
    hasTriggered.current = true;
    let i = 0;
    intervalRef.current = window.setInterval(() => {
      i += 1;
      setTyped(FULL_COMMAND.slice(0, i));
      if (i >= FULL_COMMAND.length) {
        window.clearInterval(intervalRef.current);
        setTypingFinished(true);
      }
    }, 35);
  }

  const copyToClipboard = () => {
    const text = stackCategories
      .map((category) => `${category.name}: ${category.items.map((item) => item.name).join(", ")}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const filteredCategories =
    activeTab === "all" ? stackCategories : stackCategories.filter((category) => category.id === activeTab);

  const filters = [{ id: "all", name: "Tout afficher" }, ...stackCategories];

  return (
    <section className="relative mx-2 overflow-clip rounded-[2rem] bg-bone py-24 text-ink sm:mx-4 sm:rounded-[3rem] sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionLabel index={index} tone="light">
              Stack &amp; Outils
            </SectionLabel>
            <RevealLines
              as="h2"
              className="mt-8 text-[clamp(2.4rem,4.6vw,4.8rem)] font-bold leading-[0.9] tracking-[-0.05em]"
              lines={[
                "Terminal &",
                <span key="accent" className="font-serif font-normal italic tracking-[-0.02em] text-rust">
                  technologies.
                </span>,
              ]}
            />

            <div className="mt-10 grid grid-cols-2 border-y border-ink/15">
              <div className="border-r border-ink/15 py-5 pr-4">
                <p className="font-display text-5xl font-bold tracking-[-0.06em]">{totalTools}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-stone">Outils</p>
              </div>
              <div className="py-5 pl-5">
                <p className="font-display text-5xl font-bold tracking-[-0.06em]">
                  {String(stackCategories.length).padStart(2, "0")}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-stone">Catégories</p>
              </div>
            </div>

            <div role="group" aria-label="Filtrer la stack" className="mt-8 flex flex-wrap gap-2">
              {filters.map((filter) => {
                const active = activeTab === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveTab(filter.id)}
                    aria-pressed={active}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300",
                      active ? "border-ink bg-ink text-bone" : "border-ink/20 text-ink hover:border-ink"
                    )}
                  >
                    {filter.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <FadeIn className="lg:col-span-8">
          <div className="overflow-hidden rounded-[1.5rem] bg-ink text-bone shadow-[0_50px_120px_-40px_rgba(11,11,12,0.6)]">
            <div className="flex items-center justify-between border-b border-bone/10 bg-ink-2 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 hidden font-mono text-xs text-smoke sm:inline">bash — rosca@dev-terminal</span>
              </div>
              <button
                type="button"
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 rounded-full border border-bone/15 px-3 py-1 font-mono text-xs text-bone/80 transition-colors hover:border-ember hover:text-ember"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? "Copié !" : "Copier"}</span>
              </button>
            </div>

            <div className="p-5 font-mono text-[13px] leading-relaxed sm:p-8">
              <motion.div
                onViewportEnter={startTyping}
                viewport={{ once: true, amount: 0.6 }}
                className="flex flex-wrap items-center gap-x-2 border-b border-bone/10 pb-5"
              >
                <span className="text-ember">rosca@portfolio</span>
                <span className="text-smoke">:~$</span>
                <span className="text-emerald-400">
                  {typed}
                  {typingFinished && activeTab !== "all" && <span className="text-bone/70"> --only {activeTab}</span>}
                </span>
                <span className={cn("inline-block h-4 w-2 bg-ember", typingFinished && "animate-blink")} />
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={listVariants}
                  initial="hidden"
                  animate={typingFinished ? "show" : "hidden"}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                  className="mt-7 grid gap-x-10 gap-y-9 md:grid-cols-2"
                >
                  {filteredCategories.map((category) => (
                    <motion.div key={category.id} variants={blockVariants}>
                      <div className="mb-4 flex items-center gap-2">
                        <span className="text-ember">▸</span>
                        <category.icon className="h-4 w-4 text-ember" />
                        <span className="font-sans text-[15px] font-semibold text-bone">{category.name}</span>
                        <span className="text-smoke">[{category.items.length}]</span>
                      </div>
                      <ul className="space-y-3">
                        {category.items.map((item) => (
                          <li key={item.name} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5">
                            <span className="flex items-center gap-2 text-bone/90">
                              <item.icon className="h-3.5 w-3.5 text-smoke" />
                              {item.name}
                            </span>
                            <span className="text-[11px] text-ember">{item.level}</span>
                            <span className="col-span-2 h-[3px] overflow-hidden rounded-full bg-bone/10">
                              <motion.span
                                className="block h-full origin-left rounded-full bg-linear-to-r from-ember-deep to-ember"
                                variants={{
                                  hidden: { scaleX: 0 },
                                  show: {
                                    scaleX: LEVEL_FILL[item.level] ?? 0.5,
                                    transition: { duration: 1.2, ease: EASE_EXPO, delay: 0.15 },
                                  },
                                }}
                              />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-bone/10 pt-5 text-xs text-smoke">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Statut : Prêt pour déploiement &amp; intégration
                </span>
                <span>Rosca Fullstack Dev v2.0</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
