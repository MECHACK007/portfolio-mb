"use client";

import { useRef } from "react";
import { Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

type Experience = {
  period: string;
  role: string;
  company: string;
  mode: string;
  desc: string;
};

const experiences: Experience[] = [
  {
    period: "2025 — Présent",
    role: "Développeur Web & Mobile",
    company: "Nom de l'entreprise",
    mode: "Télétravail",
    desc: "Développement complet web & mobile. Déploiement, publication stores.",
  },
  {
    period: "2024 — 2025",
    role: "Développeur Web & Mobile",
    company: "Nom de l'entreprise",
    mode: "Présentiel",
    desc: "Description courte de la mission et des technos utilisées.",
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
    <section className={compact ? "px-0 pb-0" : "mx-auto max-w-6xl px-6 pb-24"}>
      <div className={compact ? "mb-6" : "mb-8 flex items-center justify-between"}>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/18 bg-[#FBE8DD] px-8 py-3 text-base font-semibold text-[#D9491F] shadow-sm">
          <Briefcase className="h-5 w-5 text-[#D9491F]" />
          EXPÉRIENCES
        </span>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-4"
      >
        {experiences.map((exp, index) => (
          <div
            key={exp.role + exp.period}
            className="group snap-start flex-shrink-0 w-80 sm:w-96 rounded-3xl border-t-4 border-transparent bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-t-orange-500 hover:bg-slate-50 hover:shadow-lg"
          >
            <span className="inline-block text-4xl font-bold leading-none text-gray-200 transition duration-300 ease-out group-hover:text-orange-500 group-hover:scale-105">0{index + 1}</span>

            <div className="mt-4 space-y-3">
              <span className="block text-sm uppercase tracking-wide text-gray-400">
                {exp.period}
              </span>

              <div>
                <h3 className="text-xl font-bold text-text">{exp.role}</h3>
                <p className="mt-1 text-sm text-gray-500">{exp.company} · {exp.mode}</p>
              </div>

              <p className="text-base leading-7 text-text/80">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
