"use client";

import { useRef } from "react";
import { Briefcase, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  desc: string;
  tags: string[];
};

const experiences: Experience[] = [
  {
    period: "décembre-mai 2026",
    role: "Développeur Fullstack Web & Mobile",
    company: "Freelance et Accademique",
    location: "Présentiel",
    desc: "Conception complète d'applications web React, développement backend Laravel et intégration de bases MongoDb.",
    tags: ["React", "Flutter", "MongoDb", "express", "Git", "Tailwind CSS", "Nodes"],
  },
  {
    period: "janvier-juin 2026",
    role: "Développeur Front-End React et backend Laravel",
    company: "Met-Tech",
    location: "Présentiel",
    desc: "Conception d'interfaces React performantes et développement backend Laravel pour des applications web robustes.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Laravel", "Git"],
  },
];

type Props = {
  compact?: boolean;
};

export default function ExperienceTimeline({ compact }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <div className={compact ? "w-full" : "mx-auto max-w-6xl px-6 py-12"}>
      <div className="mb-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-[#FBE8DD]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9491F]">
          <Briefcase className="h-4 w-4" />
          Parcours Professionnel
        </span>

        {/* Scroll Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Précédent"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9491F]/20 bg-white text-[#D9491F] shadow-sm transition-all hover:bg-[#D9491F] hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Suivant"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D9491F]/20 bg-white text-[#D9491F] shadow-sm transition-all hover:bg-[#D9491F] hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-2"
      >
        {experiences.map((exp, index) => (
          <div
            key={exp.role + exp.period}
            className="group snap-start flex-shrink-0 w-72 sm:w-80 rounded-3xl border border-[#D9491F]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9491F]/30 hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-2xl font-black text-[#D9491F]/30 group-hover:text-[#D9491F] transition-colors">
                  0{index + 1}
                </span>
                <span className="rounded-full bg-[#FBE8DD] px-3 py-1 text-[11px] font-semibold text-[#D9491F]">
                  {exp.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-text group-hover:text-[#D9491F] transition-colors">
                {exp.role}
              </h3>
              <p className="mt-1 text-xs font-medium text-muted flex items-center gap-1.5">
                <span>{exp.company}</span>
                <span>•</span>
                <span className="flex items-center gap-0.5">
                  <MapPin className="h-3 w-3 text-[#D9491F]" />
                  {exp.location}
                </span>
              </p>

              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted">
                {exp.desc}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5 border-t border-black/5 pt-3">
              {exp.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-text">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

