import { Code2, Layers3, Smartphone } from "lucide-react";
import GradientSeparator from "@/app/components/sections/GradientSeparator";
import SkillsCircuit from "@/app/components/sections/SkillsCircuit";
import TechStackTerminal from "@/app/components/sections/TechStackTerminal";

export const metadata = {
  title: "Compétences — Rosca",
  description: "Découvrez les technologies, stacks et approches utilisées pour créer des expériences web et mobiles modernes.",
};

const pillars = [
  {
    title: "Frontend",
    description: "Interfaces rapides, propres et pensées pour la conversion.",
    icon: Code2,
  },
  {
    title: "Architecture",
    description: "Structuration claire, évolutive et maintenable sur le long terme.",
    icon: Layers3,
  },
  {
    title: "Mobile",
    description: "Expériences natives et hybrides optimisées pour chaque usage.",
    icon: Smartphone,
  },
];

export default function CompetencesPage() {
  return (
    <main className="overflow-hidden">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="rounded-[2rem] border border-[#D9491F]/15 bg-[linear-gradient(135deg,#FFF7F0_0%,#FFFDF9_45%,#FFF2E7_100%)] p-8 shadow-[0_35px_100px_-45px_rgba(217,73,31,0.35)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/15 bg-white/70 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9491F] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#D9491F]" />
              Compétences
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-text sm:text-5xl">
              Un stack polyvalent pour transformer vos idées en produits concrets.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
              Du front-end à l&apos;architecture globale, je conçois des solutions modernes, réactives et pensées pour durer.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-2xl border border-[#D9491F]/10 bg-white/80 p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D9491F]/10 text-[#D9491F]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-text">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <GradientSeparator />
      <SkillsCircuit />
      <TechStackTerminal />
    </main>
  );
}
