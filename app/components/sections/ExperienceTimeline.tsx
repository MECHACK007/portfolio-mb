"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from "lucide-react";
import { useRef } from "react";
import { FadeIn } from "@/app/components/ui/Reveal";

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
    company: "Freelance et Académique",
    location: "Présentiel",
    desc: "Conception complète d'applications web React, développement backend Laravel et intégration de bases MongoDB.",
    tags: ["React", "Flutter", "MongoDB", "Express", "Git", "Tailwind CSS", "Node.js"],
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
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.8", "end 0.6"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={compact ? "w-full" : "container-x py-12"}>
      <div className="flex items-end justify-between gap-4 border-b border-bone/10 pb-5">
        <h3 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
          Parcours <span className="font-serif font-normal italic tracking-[-0.02em] text-ember">professionnel</span>
        </h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
          {String(experiences.length).padStart(2, "0")} postes
        </span>
      </div>

      <ol ref={listRef} className="relative mt-12 space-y-14 pl-8 sm:pl-12">
        <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-bone/10 sm:left-[7px]" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: lineScale }}
          className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-ember sm:left-[7px]"
        />

        {experiences.map((exp, index) => (
          <li key={exp.role + exp.period} className="group relative">
            <span
              aria-hidden="true"
              className="absolute -left-8 top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-ember bg-ink sm:-left-12 sm:h-4 sm:w-4"
            >
              <span className="h-1 w-1 rounded-full bg-ember transition-transform duration-500 group-hover:scale-[2.5]" />
            </span>

            <FadeIn delay={index * 0.1}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em]">
                <span className="text-ember">0{index + 1}</span>
                <span className="text-smoke">{exp.period}</span>
              </div>
              <h4 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.035em] transition-colors duration-500 group-hover:text-ember sm:text-3xl">
                {exp.role}
              </h4>
              <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-smoke">
                <span className="text-bone">{exp.company}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-ember" />
                  {exp.location}
                </span>
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-bone/75">{exp.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-bone/15 px-3 py-1 text-xs text-bone/80">
                    {tag}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </li>
        ))}
      </ol>
    </div>
  );
}
