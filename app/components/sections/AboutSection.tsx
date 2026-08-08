"use client";

import Image from "next/image";
import { Download, UserRound, Sparkles, CheckCircle2 } from "lucide-react";
import ExperienceTimeline from "./ExperienceTimeline";
import Formation from "./Formation";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 overflow-hidden">
      {/* Glow background */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full bg-[#D9491F]/10 blur-[120px]" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Photo & Quick Bio Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-[#D9491F]/20 bg-white p-4 shadow-xl shadow-[#D9491F]/10"
          >
            {/* Image container */}
            <div className="relative h-[340px] sm:h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#FFF7F0] to-[#FBE8DD]">
              <Image
                src="/images/bongo_concentre.png"
                alt="Rosca — Développeur Web & Mobile"
                fill
                sizes="(min-width: 1024px) 400px, 100vw"
                className="object-cover object-center transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Status pill overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-xs font-semibold text-text shadow-md backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-[#D9491F]" />
                <span>Rosca • Dev Fullstack</span>
              </div>

              {/* Name badge */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-black">Rosca</h3>
                <p className="text-xs text-white/80">Passionné par le code &amp; l'innovation</p>
              </div>
            </div>

            {/* Quick Skills list under image */}
            <div className="mt-4 p-2 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-text">
                <CheckCircle2 className="h-4 w-4 text-[#D9491F] shrink-0" />
                <span>Spécialiste Next.js 16, React &amp; Tailwind</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-text">
                <CheckCircle2 className="h-4 w-4 text-[#D9491F] shrink-0" />
                <span>Développement Mobile Flutter &amp; Paiement Mobile Money</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-text">
                <CheckCircle2 className="h-4 w-4 text-[#D9491F] shrink-0" />
                <span>Architecture APIs REST &amp; Automatisation IA</span>
              </div>
            </div>

            {/* Download CV button */}
            <div className="mt-4 pt-4 border-t border-black/5 text-center">
              <a
                href="/cv-rosca.pdf"
                download="CV_Rosca_Dev.pdf"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#D9491F] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#D9491F]/20 transition-all duration-300 hover:bg-[#c43e16] hover:shadow-lg"
              >
                <Download className="h-4 w-4" />
                Télécharger mon CV (PDF)
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Bio text + Experience + Formation */}
        <div className="lg:col-span-7 space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-[#FBE8DD]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9491F]">
              <UserRound className="h-4 w-4" />
              À propos de moi
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-text tracking-tight leading-tight">
              Créer des produits digitaux{" "}
              <span className="framed-accent text-[#D9491F]">qui ont de l'impact</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted">
              Développeur Web &amp; Mobile avec <strong className="text-text font-semibold">2+ ans d'expérience</strong>, je combine adaptabilité, rigueur technique et compréhension des enjeux métier. J'interviens sur l'ensemble du cycle d'un projet : du design d'architecture à la mise en production.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ExperienceTimeline compact />
          </motion.div>

          {/* Formation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Formation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

