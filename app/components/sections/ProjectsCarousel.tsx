"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/app/lib/projects";

const marqueeTop = [...projects, ...projects, ...projects];
const marqueeBottom = [...projects.slice().reverse(), ...projects.slice().reverse(), ...projects.slice().reverse()];

export default function ProjectsCarousel() {
  return (
    <section className="relative mx-auto max-w-full py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center text-center px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-[#FBE8DD]/60 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D9491F]"
        >
          <Briefcase className="h-3.5 w-3.5" />
          Réalisations &amp; Portfolio
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-text tracking-tight"
        >
          Aperçu de mes <span className="framed-accent text-[#D9491F]">projets récents</span>
        </motion.h2>

        <p className="mt-4 max-w-xl text-muted text-base sm:text-lg">
          Découvrez une sélection de projets web et mobiles développés avec passion et précision.
        </p>
      </div>

      {/* Marquee Wrapper with side fades */}
      <div className="relative w-full">
        {/* Left Fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 sm:w-40 marquee-fade-left"
          aria-hidden="true"
        />
        {/* Right Fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 sm:w-40 marquee-fade-right"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {/* Row 1: Marquee Right */}
          <div className="overflow-hidden pause-on-hover py-2">
            <div className="flex animate-marquee-right flex-nowrap gap-6 will-change-transform">
              {marqueeTop.map((project, index) => (
                <ProjectCard key={`top-${project.slug}-${index}`} project={project} />
              ))}
            </div>
          </div>

          {/* Row 2: Marquee Left */}
          <div className="overflow-hidden pause-on-hover py-2">
            <div className="flex animate-marquee-left flex-nowrap gap-6 will-change-transform">
              {marqueeBottom.map((project, index) => (
                <ProjectCard key={`bot-${project.slug}-${index}`} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA to portfolio page */}
      <div className="mt-12 text-center px-6">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/25 bg-white px-6 py-3 text-sm font-semibold text-[#D9491F] shadow-sm transition-all duration-300 hover:bg-[#D9491F] hover:text-white hover:shadow-md"
        >
          <span>Voir tous les projets sur la page dédiée</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <a
      href={project.url || "/portfolio"}
      target={project.url ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="project-card group shrink-0 w-80 sm:w-96 rounded-3xl border border-[#D9491F]/15 bg-white shadow-sm overflow-hidden flex flex-col justify-between"
    >
      {/* Browser Bar */}
      <div className="bg-[#F6F4EF] px-4 py-3 border-b border-black/5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="font-mono text-[10px] font-medium text-gray-400 truncate max-w-[180px]">
          {project.domain}
        </span>
      </div>

      {/* Image Container */}
      <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-text backdrop-blur-md">
            <ExternalLink className="h-3.5 w-3.5 text-[#D9491F]" />
            Visiter le site
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-extrabold text-text group-hover:text-[#D9491F] transition-colors duration-200 line-clamp-1">
              {project.title}
            </h3>
            <ArrowUpRight className="h-4 w-4 text-[#D9491F] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <p className="text-xs sm:text-sm text-muted line-clamp-2 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-black/5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-[#FBE8DD]/50 border border-[#D9491F]/10 px-2 py-0.5 text-[10px] font-semibold text-[#D9491F]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

