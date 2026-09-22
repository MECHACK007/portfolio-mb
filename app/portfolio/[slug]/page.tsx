import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Cpu, ExternalLink, Rocket } from "lucide-react";
import { getProjectBySlug, projects } from "@/app/lib/projects";
import { cn } from "@/app/lib/cn";
import { keepWords } from "@/app/lib/text";
import FinalCTA from "@/app/components/sections/FinalCTA";
import ParallaxImage from "@/app/components/ui/ParallaxImage";
import ProjectImage from "@/app/components/ui/ProjectImage";
import { FadeIn, RevealLines } from "@/app/components/ui/Reveal";
import RollText from "@/app/components/ui/RollText";
import SectionLabel from "@/app/components/ui/SectionLabel";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const pad = (n: number) => String(n).padStart(2, "0");

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet non trouvé — Rosca",
    };
  }

  return {
    title: `${project.title} — Spécifications & Détails`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { specs } = project;
  const position = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(position + 1) % projects.length];
  const liveUrl = project.url || specs.liveUrl;

  const specRows: [string, string][] = [
    ["Auteur", specs.author],
    ["Version", specs.version],
    ["Hébergement", specs.isHosted ? "Oui (En Ligne)" : "Non (Démo/Local)"],
    ["Domaine", specs.category],
    ["Année", specs.year],
    ["Statut", specs.statusText],
  ];

  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 left-[-10%] h-[38rem] w-[38rem] rounded-full bg-ember/15 blur-[150px]"
        />

        <div className="container-x relative">
          <FadeIn y={12} className="flex flex-wrap items-center justify-between gap-5">
            <Link
              href="/portfolio"
              className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-smoke transition-colors hover:text-bone"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 transition-colors duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                <ArrowLeft className="h-4 w-4" />
              </span>
              Retour à la liste des réalisations
            </Link>
            <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
              <span className="rounded-full border border-bone/15 px-3 py-1.5 text-ember">{specs.category}</span>
              <span className="rounded-full border border-bone/15 px-3 py-1.5 text-bone/80">{specs.year}</span>
              <span className="rounded-full border border-bone/15 px-3 py-1.5 text-bone/80">{specs.version}</span>
            </div>
          </FadeIn>

          <RevealLines
            as="h1"
            waitIntro
            lines={[keepWords(project.title)]}
            className="mt-14 text-[clamp(3rem,9.5vw,10.5rem)] font-bold leading-[0.88] tracking-[-0.055em]"
          />

          <div className="mt-12 grid gap-8 border-t border-bone/10 pt-8 lg:grid-cols-12">
            <FadeIn delay={0.2} className="lg:col-span-5">
              <p className="font-serif text-2xl italic leading-snug text-ember sm:text-3xl">{project.subtitle}</p>
            </FadeIn>
            <FadeIn delay={0.3} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-smoke">{project.description}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="container-x">
        <FadeIn>
          <div className="overflow-hidden rounded-[2rem] border border-bone/10 bg-ink-2">
            <div className="flex items-center justify-between gap-4 border-b border-bone/10 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="max-w-[60%] truncate rounded-full bg-ink px-4 py-1 font-mono text-xs text-smoke">
                {specs.isHosted ? `https://${project.domain}` : project.domain}
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-smoke sm:inline">
                Aperçu interactif
              </span>
            </div>
            <ParallaxImage src={project.image} title={project.title} preload sizes="(min-width: 1472px) 1400px, 100vw" />
          </div>
        </FadeIn>
      </section>

      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-24 lg:col-span-8">
            <div>
              <SectionLabel index="01">Présentation détaillée</SectionLabel>
              <FadeIn>
                <p className="mt-8 whitespace-pre-line font-display text-[clamp(1.4rem,2.3vw,2.1rem)] font-medium leading-[1.3] tracking-[-0.02em] text-bone/90">
                  {project.longDescription}
                </p>
              </FadeIn>
            </div>

            {(project.challenge || project.solution) && (
              <div>
                <SectionLabel index="02">Défi &amp; Solution</SectionLabel>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {project.challenge && (
                    <FadeIn className="rounded-[1.75rem] border border-bone/10 bg-ink-2 p-7 sm:p-9">
                      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ember">
                        <Cpu className="h-4 w-4" />
                        Le Défi Technique
                      </p>
                      <p className="mt-6 text-lg leading-relaxed text-bone/90">{project.challenge}</p>
                    </FadeIn>
                  )}
                  {project.solution && (
                    <FadeIn delay={0.1} className="rounded-[1.75rem] bg-bone p-7 text-ink sm:p-9">
                      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-rust">
                        <Rocket className="h-4 w-4" />
                        La Solution Apportée
                      </p>
                      <p className="mt-6 text-lg leading-relaxed">{project.solution}</p>
                    </FadeIn>
                  )}
                </div>
              </div>
            )}

            <div>
              <SectionLabel index="03">Fonctionnalités clés</SectionLabel>
              <ol className="mt-8 border-t border-bone/10">
                {specs.features.map((feature, i) => (
                  <li key={feature} className="group/feature flex items-baseline gap-6 border-b border-bone/10 py-6">
                    <span className="font-mono text-xs text-ember">{pad(i + 1)}</span>
                    <span className="font-display text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold leading-tight tracking-[-0.03em] transition-transform duration-500 ease-expo group-hover/feature:translate-x-2">
                      {feature}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <SectionLabel index="04">Technologies &amp; Outils</SectionLabel>
              <ul className="mt-8 flex flex-wrap gap-3">
                {specs.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-bone/15 px-5 py-2.5 font-display text-lg font-medium tracking-tight transition-colors duration-300 hover:border-ember hover:text-ember"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-[1.75rem] border border-bone/10 bg-ink-2 p-6 sm:p-8 lg:sticky lg:top-28">
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-ink px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-smoke">Statut &amp; Hébergement</span>
                <span className="flex items-center gap-2 text-right text-xs font-semibold">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span
                      className={cn(
                        "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                        specs.isHosted ? "bg-emerald-400" : "bg-amber-400"
                      )}
                    />
                    <span
                      className={cn("relative h-2.5 w-2.5 rounded-full", specs.isHosted ? "bg-emerald-400" : "bg-amber-400")}
                    />
                  </span>
                  {specs.isHosted ? "Hébergé & En Ligne" : "Local / Non Hébergé"}
                </span>
              </div>

              <h2 className="mt-8 text-2xl font-bold tracking-[-0.035em]">Spécifications du Projet</h2>
              <dl className="mt-5 divide-y divide-bone/10 border-y border-bone/10 text-sm">
                {specRows.map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 py-3">
                    <dt className="shrink-0 text-smoke">{label}</dt>
                    <dd className="text-right font-medium text-bone">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 space-y-3">
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-between gap-4 rounded-full bg-ember py-2 pl-6 pr-2 font-semibold text-ink transition-colors duration-500 hover:bg-bone"
                  >
                    <RollText>Visiter le projet en direct</RollText>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bone">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </a>
                ) : (
                  <p className="rounded-2xl border border-dashed border-bone/15 px-4 py-3 text-center text-xs text-smoke">
                    Projet hébergé en environnement privé ou local
                  </p>
                )}
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-between gap-4 rounded-full border border-bone/20 py-2 pl-6 pr-2 font-semibold transition-colors duration-500 hover:border-ember hover:text-ember"
                >
                  <RollText>Discuter d&apos;un projet similaire</RollText>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bone text-ink transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-x pb-24 sm:pb-32">
        <Link
          href={`/portfolio/${nextProject.slug}`}
          data-cursor="view"
          data-cursor-label="Suivant"
          className="group relative block overflow-hidden rounded-[2rem] border border-bone/10"
        >
          <div className="absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-60">
            <ProjectImage
              src={nextProject.image}
              title={nextProject.title}
              fill
              sizes="100vw"
              className="object-cover object-top transition-transform duration-[1.4s] ease-expo group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/30" />
          <div className="relative flex flex-col gap-8 p-8 sm:p-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">Projet suivant</p>
              <p className="mt-4 font-display text-[clamp(2.4rem,6vw,6rem)] font-bold leading-[0.9] tracking-[-0.05em] transition-colors duration-500 group-hover:text-ember">
                {keepWords(nextProject.title)}
              </p>
              <p className="mt-3 text-smoke">{nextProject.subtitle}</p>
            </div>
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-ember text-ink transition-transform duration-700 ease-expo group-hover:rotate-45 sm:h-28 sm:w-28">
              <ArrowUpRight className="h-8 w-8" />
            </span>
          </div>
        </Link>
      </section>

      <FinalCTA />
    </>
  );
}
