import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects } from "@/app/lib/projects";

export const metadata = {
  title: "Portfolio — Rosca",
  description: "Découvrez les projets web et mobiles réalisés avec une attention particulière à l'expérience utilisateur et à la qualité technique.",
};

const highlights = [
  "Sites vitrines premium et interfaces sur mesure",
  "Applications web modernes avec performances et SEO",
  "Solutions mobiles et produits orientés conversion",
];

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="rounded-[2rem] border border-[#D9491F]/15 bg-[linear-gradient(135deg,#FFF7F0_0%,#FFFDF9_45%,#FFF2E7_100%)] p-8 shadow-[0_35px_100px_-45px_rgba(217,73,31,0.35)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/15 bg-white/70 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9491F] backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Réalisations
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-text sm:text-5xl">
              Des projets pensés pour l&apos;effet, la clarté et les résultats.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
              Chaque réalisation est construite autour d&apos;un objectif précis : transmettre un message fort, guider l&apos;utilisateur et faire grandir votre présence en ligne.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-[#D9491F]/10 bg-white/80 p-6 shadow-sm">
              <ul className="space-y-3 text-base text-muted">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D9491F]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#D9491F] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Discutons de votre prochain projet
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-[#D9491F]/10 bg-[#FFF8F2] p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D9491F]">Focus</p>
              <h2 className="mt-3 text-2xl font-semibold text-text">Des produits modernes, rapides et orientés conversion.</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Les réalisations ci-dessous sont présentées comme un aperçu de mon approche : structure claire, design soigné et attention aux détails qui façonnent la confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="group overflow-hidden rounded-[1.5rem] border border-[#D9491F]/10 bg-white shadow-[0_20px_60px_-35px_rgba(17,24,39,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(217,73,31,0.3)]">
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#D9491F]/10 bg-[#FFF3EA] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D9491F]">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-text">{project.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{project.description}</p>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D9491F]"
                  >
                    Voir le projet
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
