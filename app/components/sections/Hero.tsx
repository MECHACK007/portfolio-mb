"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Folder, Code2, Smartphone, Cpu, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-6 pt-12 pb-20 md:pt-16 md:pb-28 md:flex-row">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D9491F]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-[300px] w-[300px] rounded-full bg-amber-400/10 blur-[90px]" />

      {/* Content Column */}
      <div className="flex max-w-2xl flex-col items-center text-center md:items-start md:text-left z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#D9491F]/20 bg-white/80 px-4 py-2 text-sm font-medium text-text shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-sm font-semibold text-[#D9491F]">Disponible</span>
          <span className="text-gray-300">•</span>
          <span className="text-muted text-xs md:text-sm">Pour de nouveaux projets</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text leading-[1.1]"
        >
          Je conçois, je développe,{" "}
          <span className="relative inline-block mt-1">
            <span className="framed-accent font-extrabold text-[#D9491F]">
              je concrétise.
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-muted"
        >
          Développeur <strong className="text-text font-semibold">Fullstack Web & Mobile</strong> — Je façonne des applications performantes, élégantes et sur-mesure pour transformer vos idées en réalité.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <Link
            href="/portfolio"
            className="btn-with-folder inline-flex items-center gap-2.5 rounded-full bg-[#D9491F] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#D9491F]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c43e16] hover:shadow-xl hover:shadow-[#D9491F]/35"
          >
            <Folder className="h-5 w-5 folder-icon text-white" />
            Voir mes réalisations
          </Link>
          <Link
            href="/contact"
            className="btn-secondary-bg inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-base font-semibold text-text shadow-sm"
          >
            Discutons
            <ArrowRight className="h-4 w-4 text-[#D9491F] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Highlights line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs sm:text-sm text-muted border-t border-black/5 pt-6"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#D9491F]" />
            <span>Next.js & React</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#D9491F]" />
            <span>Flutter & Mobile Money</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#D9491F]" />
            <span>APIs & Intégration IA</span>
          </div>
        </motion.div>
      </div>

      {/* Visual Avatar / Graphic Column */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative flex items-center justify-center shrink-0"
      >
        {/* Decorative Ring */}
        <div className="absolute -inset-4 rounded-full border border-[#D9491F]/20 animate-pulse-glow" />
        <div className="absolute -inset-8 rounded-full border border-dashed border-[#D9491F]/15 animate-[spin_40s_linear_infinite]" />

        {/* Main Avatar Card Container */}
        <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-[#FFF6EE] via-white to-[#FBE8DD] shadow-[0_25px_70px_-15px_rgba(217,73,31,0.3)]">
          <Image
            src="/images/bongo_concentre.png"
            alt="Rosca — Développeur Web & Mobile"
            fill
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

        {/* Floating Badge 1: Web */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -left-4 sm:-left-6 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-md"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#D9491F]/10 text-[#D9491F]">
            <Code2 className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-text">Web Fullstack</p>
            <p className="text-[10px] text-muted">Next.js 16 & React</p>
          </div>
        </motion.div>

        {/* Floating Badge 2: Mobile */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-2 -right-4 sm:-right-6 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-md"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
            <Smartphone className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-text">App Mobile</p>
            <p className="text-[10px] text-muted">Flutter & Kotlin</p>
          </div>
        </motion.div>

        {/* Floating Badge 3: IA & APIs */}
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 -right-6 sm:-right-10 -translate-y-1/2 hidden sm:flex items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-md"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
            <Cpu className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-bold text-text">Agents IA & APIs</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

