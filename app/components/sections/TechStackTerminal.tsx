"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Terminal, Copy, Check, Sparkles, Code2, Server, Smartphone, Wrench } from "lucide-react";

type StackCategory = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { name: string; level: string; icon: string }[];
};

const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    name: "Frontend Web",
    icon: Code2,
    items: [
      { name: "Next.js 16", level: "Avancé", icon: "⚡" },
      { name: "React 19", level: "Avancé", icon: "⚛️" },
      { name: "TypeScript", level: "Avancé", icon: "📘" },
      { name: "Tailwind CSS v4", level: "Avancé", icon: "🎨" },
      { name: "Framer Motion", level: "Intermédiaire", icon: "✨" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile & Cross-Platform",
    icon: Smartphone,
    items: [
      { name: "Flutter & Dart", level: "Avancé", icon: "💙" },
      { name: "Kotlin", level: "Intermédiaire", icon: "🤖" },
      { name: "Mobile Money API", level: "Avancé", icon: "💳" },
      { name: "Firebase", level: "Intermédiaire", icon: "🔥" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Cloud",
    icon: Server,
    items: [
      { name: "Node.js & Express", level: "Avancé", icon: "🟢" },
      { name: "REST & GraphQL APIs", level: "Avancé", icon: "🔌" },
      { name: "Laravel", level: "Intermédiaire", icon: "🔴" },
      { name: "MySQL & PostgreSQL", level: "Avancé", icon: "🛢️" },
      { name: "Docker", level: "Intermédiaire", icon: "🐳" },
    ],
  },
  {
    id: "ai-tools",
    name: "IA & Tools",
    icon: Wrench,
    items: [
      { name: "OpenAI API & Agents", level: "Avancé", icon: "🤖" },
      { name: "Git & GitHub", level: "Avancé", icon: "📦" },
      { name: "Vercel & Cloud", level: "Avancé", icon: "▲" },
      { name: "Postman", level: "Avancé", icon: "🚀" },
    ],
  },
];

export default function TechStackTerminal(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [copied, setCopied] = useState(false);
  const [typed, setTyped] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);
  const fullCommand = "rosca --show-stack --format json";
  const hasTriggered = useRef(false);

  useEffect(() => {
    return () => {
      hasTriggered.current = true;
    };
  }, []);

  function startTyping() {
    if (hasTriggered.current) return;
    hasTriggered.current = true;
    setTyped("");
    setTypingFinished(false);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(fullCommand.slice(0, i));
      if (i >= fullCommand.length) {
        clearInterval(id);
        setTypingFinished(true);
      }
    }, 35);
  }

  const copyToClipboard = () => {
    const text = stackCategories
      .map((cat) => `${cat.name}: ${cat.items.map((i) => i.name).join(", ")}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredCategories =
    activeTab === "all"
      ? stackCategories
      : stackCategories.filter((cat) => cat.id === activeTab);

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-[#FBE8DD]/60 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D9491F]"
        >
          <Terminal className="h-3.5 w-3.5" />
          Stack &amp; Outils
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-text tracking-tight"
        >
          Terminal &amp; <span className="framed-accent text-[#D9491F]">Technologies</span>
        </motion.h2>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "all"
                ? "bg-[#D9491F] text-white shadow-md shadow-[#D9491F]/20"
                : "bg-white border border-[#D9491F]/15 text-muted hover:text-text hover:bg-gray-50"
            }`}
          >
            Tout afficher
          </button>
          {stackCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === cat.id
                    ? "bg-[#D9491F] text-white shadow-md shadow-[#D9491F]/20"
                    : "bg-white border border-[#D9491F]/15 text-muted hover:text-text hover:bg-gray-50"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Terminal Container */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-[#16171B] shadow-2xl shadow-black/20">
          {/* Header Bar */}
          <div className="flex items-center justify-between bg-[#22242A] px-5 py-3.5 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-2 font-mono text-xs text-gray-400">bash — rosca@dev-terminal</span>
            </div>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? "Copié !" : "Copier"}</span>
            </button>
          </div>

          {/* Terminal Content Body */}
          <div className="p-6 sm:p-8 font-mono text-sm leading-relaxed text-gray-200">
            {/* Prompt line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onViewportEnter={() => startTyping()}
              className="flex items-center gap-2 text-xs sm:text-sm mb-6 pb-4 border-b border-white/10"
            >
              <span className="text-[#D9491F] font-bold">rosca@portfolio</span>
              <span className="text-gray-500">:~$</span>
              <span className="text-emerald-400 font-semibold">{typed}</span>
              <span
                className={`inline-block h-4 w-2 bg-[#D9491F] ${
                  typingFinished ? "animate-blink" : ""
                }`}
              />
            </motion.div>

            {/* Stack list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-[#D9491F]/40"
                >
                  <div className="flex items-center gap-2 mb-4 text-[#D9491F]">
                    <category.icon className="h-4 w-4" />
                    <h3 className="font-sans font-bold text-base text-white">{category.name}</h3>
                  </div>

                  <div className="space-y-2.5">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <span>{item.icon}</span>
                          <span className="font-semibold text-gray-200">{item.name}</span>
                        </div>
                        <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-mono text-[#D9491F]">
                          {item.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Status Footer line */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Statut : Prêt pour déploiement &amp; intégration</span>
              </div>
              <span className="text-gray-500">Rosca Fullstack Dev v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

