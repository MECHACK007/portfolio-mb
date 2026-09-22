import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/app/lib/projects";
import { cn } from "@/app/lib/cn";
import { keepWords } from "@/app/lib/text";
import FinalCTA from "@/app/components/sections/FinalCTA";
import PageHero from "@/app/components/ui/PageHero";
import ProjectImage from "@/app/components/ui/ProjectImage";
import { FadeIn } from "@/app/components/ui/Reveal";
import RollText from "@/app/components/ui/RollText";

export const metadata = {
  title: "Réalisations & Portfolio — Rosca",
  description: "Découvrez l'ensemble des projets web, applications mobiles et intégrations sur-mesure réalisées par Rosca.",
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Portfolio & Projets"
        crumb="Réalisations"
        lines={[
          "Des réalisations",
          "pensées pour l'impact,",
          <span key="accent">
            la clarté &amp; la{" "}
            <span className="font-serif font-normal italic tracking-[-0.02em] text-ember">performance.</span>
          </span>,
        ]}
        description="Chaque projet est conçu sur-mesure pour répondre à des besoins précis : transmettre un message fort, offrir une expérience utilisateur remarquable et accélérer votre présence numérique."
        highlights={["Applications Web Sur-mesure", "Apps Mobiles iOS & Android", "Intégration d'APIs"]}
      />

      <section className="pb-24 sm:pb-36">
        <div className="container-x">
          <div className="flex items-center justify-between border-b border-bone/10 pb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
            <span>Index des projets</span>
            <span className="text-bone">{pad(projects.length)} projets</span>
          </div>

          <div className="mt-16 space-y-28 sm:mt-24 sm:space-y-40">
            {projects.map((project, index) => {
              const reversed = index % 2 === 1;
              const href = `/portfolio/${project.slug}`;
              return (
                <article key={project.slug} className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  <FadeIn className={cn("lg:col-span-7", reversed && "lg:order-2")}>
                    <Link
                      href={href}
                      data-cursor="view"
                      data-cursor-label="Détails"
                      aria-label={`Voir le projet ${project.title}`}
                      className="relative block aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink-3"
                    >
                      <ProjectImage
                        src={project.image}
                        title={project.title}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-cover object-top transition-transform duration-[1.4s] ease-expo group-hover:scale-105"
                      />
                      <span className="absolute left-5 top-5 rounded-full bg-ink/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone backdrop-blur-md">
                        {project.domain}
                      </span>
                    </Link>
                  </FadeIn>

                  <FadeIn delay={0.1} className={cn("lg:col-span-5", reversed && "lg:order-1")}>
                    <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em]">
                      <span className="text-ember">{pad(index + 1)}</span>
                      <span className="h-px w-10 bg-bone/25" />
                      <span className="text-smoke">{project.specs.year}</span>
                    </div>
                    <h2 className="mt-6 text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[0.9] tracking-[-0.05em]">
                      <Link href={href} className="transition-colors duration-500 hover:text-ember">
                        {keepWords(project.title)}
                      </Link>
                    </h2>
                    <p className="mt-4 font-serif text-xl italic text-ember sm:text-2xl">{project.subtitle}</p>
                    <p className="mt-6 text-lg leading-relaxed text-smoke">{project.description}</p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-bone/15 px-3 py-1 text-xs text-bone/85">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 flex flex-wrap items-center gap-6">
                      <Link
                        href={href}
                        className="flex items-center gap-3 rounded-full bg-ember py-2 pl-6 pr-2 font-semibold text-ink transition-colors duration-500 hover:bg-bone"
                      >
                        <RollText>Détails du projet</RollText>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:rotate-45">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </Link>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-semibold"
                        >
                          <ExternalLink className="h-4 w-4 text-ember" />
                          <span className="link-underline pb-0.5">Aperçu live</span>
                        </a>
                      )}
                    </div>
                  </FadeIn>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
