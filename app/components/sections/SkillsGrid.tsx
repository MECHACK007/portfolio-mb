import { Code2, Smartphone, Plug, Bot, ShieldCheck, Server } from "lucide-react";

const domains = [
  {
    icon: Code2,
    title: "Développement Web",
    desc: "React · Next.js · Node",
    tags: ["UI moderne", "SSR", "API"],
  },
  {
    icon: Smartphone,
    title: "Développement Mobile",
    desc: "Flutter · Kotlin",
    tags: ["Apps natives", "UX mobile", "performances"],
  },
  {
    icon: Plug,
    title: "API & Intégrations",
    desc: "REST · Paiement Mobile Money",
    tags: ["APIs sécurisées", "webhooks", "flux de données"],
  },
  {
    icon: Bot,
    title: "Agents IA",
    desc: "OpenAI · Claude API · Automatisation",
    tags: ["chatbots", "scripts", "prototypage"],
  },
  {
    icon: ShieldCheck,
    title: "Sécurité",
    desc: "Bonnes pratiques · Audit basique",
    tags: ["revue de code", "authentification", "données"],
  },
  {
    icon: Server,
    title: "DevOps",
    desc: "Docker · CI/CD · VPS",
    tags: ["déploiement", "monitoring", "scalabilité"],
  },
];

export default function SkillsGrid() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-accent/10 to-transparent" />

      <div className="relative">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent/90">
            Ce que je maîtrise
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-text md:text-4xl">
            Mes <span className="text-accent">compétences</span> principales
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted md:text-base">
            Un ensemble de domaines complémentaires pour concevoir des produits digitaux fiables, esthétiques et performants.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map(({ icon: Icon, title, desc, tags }) => (
            <article
              key={title}
              className="overflow-hidden rounded-[28px] border border-border bg-surface/95 p-6 shadow-[0_24px_80px_rgba(23,25,34,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(23,25,34,0.1)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-accent/10 text-accent shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-text">{title}</h3>
              <p className="mb-5 text-sm text-muted">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm font-medium uppercase tracking-[0.16em] text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}