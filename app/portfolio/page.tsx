import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ExternalLink, Code2, CheckCircle2 } from "lucide-react";
import { projects } from "@/app/lib/projects";
import FinalCTA from "@/app/components/sections/FinalCTA";

export const metadata = {
  title: "Réalisations & Portfolio — Rosca",
  description: "Découvrez l'ensemble des projets web, applications mobiles et intégrations sur-mesure réalisées par Rosca.",
};

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden pt-6">
      {/* Header Banner */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[2.5rem] border border-[#D9491F]/20 bg-gradient-to-br from-[#FFF8F2] via-white to-[#FBE8DD] p-8 sm:p-12 md:p-16 shadow-xl shadow-[#D9491F]/10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9491F]">
              <Sparkles className="h-3.5 w-3.5" />
              Portfolio &amp; Projets
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text leading-tight">
              Des réalisations pensées pour l&apos;impact, la clarté et la <span className="framed-accent text-[#D9491F]">performance</span>.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
              Chaque projet est conçu sur-mesure pour répondre à des besoins précis : transmettre un message fort, offrir une expérience utilisateur remarquable et accélérer votre présence numérique.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 border-t border-black/5 pt-6 text-xs sm:text-sm font-medium text-text">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#D9491F]" />
              <span>Applications Web Sur-mesure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#D9491F]" />
              <span>Apps Mobiles iOS &amp; Android</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#D9491F]" />
              <span>Intégration Mobile Money &amp; APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-3xl border border-[#D9491F]/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#D9491F]/15 hover:border-[#D9491F]/30 flex flex-col justify-between"
            >
              {/* Card Browser Top Bar */}
              <div className="bg-[#F6F4EF] px-4 py-3 border-b border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="font-mono text-xs font-medium text-gray-400">
                  {project.domain}
                </span>
              </div>

              {/* Image Preview */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#D9491F]">
                    {project.subtitle}
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-text group-hover:text-[#D9491F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[#FBE8DD] border border-[#D9491F]/10 px-2.5 py-1 text-xs font-semibold text-[#D9491F]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9491F] hover:underline"
                    >
                      <span>Aperçu live</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <FinalCTA />
    </main>
  );
}

