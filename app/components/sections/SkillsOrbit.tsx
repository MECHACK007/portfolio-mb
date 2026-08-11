import { Code2, Smartphone, Plug, Bot, ShieldCheck, Server, UserCog } from "lucide-react";
import SkillsGrid from "./SkillsGrid";

const domains = [
  { icon: Code2, title: "Développement Web", desc: "Next.js · React · Node", pos: { left: "50%", top: "6%" } },
  { icon: Smartphone, title: "Développement Mobile", desc: "Flutter · Kotlin", pos: { left: "88%", top: "28%" } },
  { icon: Plug, title: "API & Intégrations", desc: "REST · Mobile Money", pos: { left: "88%", top: "72%" } },
  { icon: Bot, title: "Agents IA", desc: "OpenAI · Automatisation", pos: { left: "50%", top: "94%" } },
  { icon: ShieldCheck, title: "Sécurité", desc: "Bonnes pratiques · Audit", pos: { left: "12%", top: "72%" } },
  { icon: Server, title: "DevOps", desc: "Docker · CI/CD · VPS", pos: { left: "12%", top: "28%" } },
];

export default function SkillsOrbit() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-16 text-center text-3xl font-bold text-text md:text-4xl">
        Mes <span className="text-accent">domaines</span> d'expertise
      </h2>

      {/* Version orbite — desktop only */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-2xl md:block">
        {/* Anneau pointillé */}
        <div className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-accent/25" />

        {/* Avatar central */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-accent to-[#7a2410] shadow-lg shadow-accent/30">
            <UserCog className="h-14 w-14 text-white" />
          </div>
          <p className="mt-4 font-semibold text-text">Rosca</p>
          <p className="text-xs tracking-wide text-muted">WEB &amp; MOBILE</p>
        </div>

        {/* Cartes en orbite */}
        {domains.map(({ icon: Icon, title, desc, pos }) => (
          <div
            key={title}
            style={{ left: pos.left, top: pos.top }}
            className="absolute w-48 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-muted/20 bg-surface p-4 shadow-md transition-colors hover:border-accent/50"
          >
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15">
              <Icon className="h-4.5 w-4.5 text-accent" />
            </div>
            <h3 className="text-sm font-semibold text-text">{title}</h3>
            <p className="mt-1 text-xs text-muted">{desc}</p>
          </div>
        ))}
      </div>

      {/* Version mobile — grille simple */}
      <div className="md:hidden">
        <SkillsGrid />
      </div>
    </section>
  );
}