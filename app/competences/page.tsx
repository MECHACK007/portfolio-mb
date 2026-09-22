import { CodeXml, Layers3, Smartphone } from "lucide-react";
import SkillsCircuit from "@/app/components/sections/SkillsCircuit";
import TechStackTerminal from "@/app/components/sections/TechStackTerminal";
import FinalCTA from "@/app/components/sections/FinalCTA";
import PageHero from "@/app/components/ui/PageHero";
import { FadeIn } from "@/app/components/ui/Reveal";

export const metadata = {
  title: "Compétences & Stack — Rosca",
  description: "Découvrez les technologies, frameworks et approches d'architecture utilisées par Rosca.",
};

const pillars = [
  {
    title: "Frontend Web",
    description: "Next.js 16, React 19, TypeScript & Tailwind CSS pour des interfaces ultra réactives et optimisées.",
    icon: CodeXml,
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
    <>
      <PageHero
        index="01"
        eyebrow="Stack & Technologies"
        crumb="Compétences"
        lines={[
          "Un écosystème",
          "polyvalent pour",
          <span key="accent">
            <span className="font-serif font-normal italic tracking-[-0.02em] text-ember">concrétiser</span> vos projets.
          </span>,
        ]}
        description="De l'interface utilisateur à la logique serveur, j'utilise les meilleurs standards du développement moderne pour garantir vitesse, sécurité et évolutivité."
      >
        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeIn key={pillar.title} delay={index * 0.1} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-bone/10 bg-ink-2 p-7 sm:p-9">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-bottom scale-y-0 bg-ember transition-transform duration-700 ease-expo group-hover:scale-y-100"
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ember text-ink transition-colors duration-500 group-hover:bg-ink group-hover:text-ember">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs text-smoke transition-colors duration-500 group-hover:text-ink/60">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="relative mt-16 text-3xl font-bold tracking-[-0.04em] transition-colors duration-500 group-hover:text-ink">
                    {pillar.title}
                  </h2>
                  <p className="relative mt-3 leading-relaxed text-smoke transition-colors duration-500 group-hover:text-ink/75">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </PageHero>

      <div className="space-y-2 sm:space-y-4">
        <SkillsCircuit index="02" />
        <TechStackTerminal index="03" />
      </div>
      <div className="h-20 sm:h-28" />
      <FinalCTA />
    </>
  );
}
