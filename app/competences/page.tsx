import { Code2, Layers3, Smartphone, Cpu, CheckCircle2 } from "lucide-react";
import SkillsCircuit from "@/app/components/sections/SkillsCircuit";
import TechStackTerminal from "@/app/components/sections/TechStackTerminal";
import FinalCTA from "@/app/components/sections/FinalCTA";

export const metadata = {
  title: "Compétences & Stack — Rosca",
  description: "Découvrez les technologies, frameworks et approches d'architecture utilisées par Rosca.",
};

const pillars = [
  {
    title: "Frontend Web",
    description: "Next.js 16, React 19, TypeScript & Tailwind CSS pour des interfaces ultra réactives et optimisées.",
    icon: Code2,
  },
  {
    title: "Mobile Native & Cross",
    description: "Applications Flutter & Kotlin fluides avec intégration de paiement Mobile Money.",
    icon: Smartphone,
  },
  {
    title: "APIs & IA",
    description: "Architectures REST solides, bases de données MySQL/PostgreSQL et intégrations d'agents IA.",
    icon: Layers3,
  },
];

export default function CompetencesPage() {
  return (
    <main className="overflow-hidden pt-6">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[2.5rem] border border-[#D9491F]/20 bg-gradient-to-br from-[#FFF8F2] via-white to-[#FBE8DD] p-8 sm:p-12 md:p-16 shadow-xl shadow-[#D9491F]/10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9491F]">
              <Cpu className="h-3.5 w-3.5" />
              Stack &amp; Technologies
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text leading-tight">
              Un écosystème polyvalent pour <span className="framed-accent text-[#D9491F]">concrétiser</span> vos projets.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
              De l'interface utilisateur à la logique serveur, j'utilise les meilleurs standards du développement moderne pour garantir vitesse, sécurité et évolutivité.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-[#D9491F]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9491F]/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBE8DD] text-[#D9491F]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-text">{pillar.title}</h2>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SkillsCircuit />
      <TechStackTerminal />
      <FinalCTA />
    </main>
  );
}

