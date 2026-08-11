import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Globe,
  CheckCircle2,
  User,
  Code2,
  Calendar,
  Layers,
  Sparkles,
  Cpu,
  Rocket,
  ShieldCheck,
  Tag,
  Laptop,
} from "lucide-react";
import { getProjectBySlug, projects } from "@/app/lib/projects";
import FinalCTA from "@/app/components/sections/FinalCTA";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

  return (
    <main className="pt-6 pb-16">
      {/* Top Header & Breadcrumb */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted hover:text-[#D9491F] transition-colors mb-6 group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Retour à la liste des réalisations</span>
        </Link>

        <div className="rounded-[2.5rem] border border-[#D9491F]/20 bg-gradient-to-br from-[#FFF8F2] via-white to-[#FBE8DD] p-8 sm:p-12 shadow-xl shadow-[#D9491F]/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9491F]">
              <Sparkles className="h-3.5 w-3.5" />
              {specs.category}
            </span>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-text border border-black/5">
                <Calendar className="h-3.5 w-3.5 text-[#D9491F]" />
                {specs.year}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-text border border-black/5">
                <Tag className="h-3.5 w-3.5 text-[#D9491F]" />
                {specs.version}
              </span>
            </div>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text leading-tight">
            {project.title}
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-medium text-[#D9491F]">
            {project.subtitle}
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Main Grid: Details (Left) + Specifications Sidebar (Right) */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">

          {/* LEFT: Detailed Project Overview */}
          <div className="lg:col-span-2 space-y-10">
            {/* Browser Preview Frame */}
            <div className="overflow-hidden rounded-3xl border border-[#D9491F]/20 bg-white shadow-xl">
              <div className="bg-[#F6F4EF] px-5 py-3 border-b border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="font-mono text-xs font-medium text-gray-500 bg-white/80 px-3 py-1 rounded-md border border-black/5 truncate max-w-[220px]">
                  https://{project.domain}
                </span>
                <span className="text-xs text-muted font-medium hidden sm:inline">Aperçu interactif</span>
              </div>

              <div className="relative h-72 sm:h-96 md:h-[420px] w-full bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Detailed Description */}
            <div className="rounded-3xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FBE8DD] text-[#D9491F]">
                  <Laptop className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black text-text">Présentation détaillée</h2>
              </div>

              <p className="text-base sm:text-lg leading-relaxed text-muted whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>

            {/* Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.challenge && (
                  <div className="rounded-3xl border border-[#D9491F]/15 bg-gradient-to-br from-[#FFF8F2] to-white p-6 sm:p-8 shadow-sm space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#D9491F]">
                      <Cpu className="h-4 w-4" />
                      <span>Le Défi Technique</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-text font-medium">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/20 p-6 sm:p-8 shadow-sm space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                      <Rocket className="h-4 w-4" />
                      <span>La Solution Apportée</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-text font-medium">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features List */}
            <div className="rounded-3xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FBE8DD] text-[#D9491F]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black text-text">Fonctionnalités clés</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specs.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-black/5 bg-[#FBF9F5] p-4 transition-all hover:border-[#D9491F]/30 hover:bg-white"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#D9491F] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Stack */}
            <div className="rounded-3xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FBE8DD] text-[#D9491F]">
                  <Code2 className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black text-text">Technologies &amp; Outils</h2>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {specs.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#FBE8DD] border border-[#D9491F]/20 px-4 py-2 text-sm font-bold text-[#D9491F] shadow-xs"
                  >
                    <Code2 className="h-4 w-4" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR: Specifications Frame (Sticky down to end of content) */}
          <div className="lg:col-span-1 lg:sticky lg:top-24 self-start space-y-6">
            <div className="rounded-[2rem] border border-[#D9491F]/25 bg-gradient-to-b from-[#FFF8F2] via-white to-[#FBE8DD]/40 p-6 sm:p-8 shadow-xl shadow-[#D9491F]/10 space-y-6">

              {/* Hosting & Status Badge */}
              <div className="rounded-2xl bg-white p-4 border border-black/5 shadow-xs flex items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted shrink-0">Statut &amp; Hébergement</span>
                <div className="flex items-center gap-2 text-right">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${specs.isHosted ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${specs.isHosted ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  </span>
                  <span className={`text-xs font-black ${specs.isHosted ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {specs.isHosted ? "Hébergé & En Ligne" : "Local / Non Hébergé"}
                  </span>
                </div>
              </div>

              <div className="border-b border-black/10 pb-2">
                <h3 className="text-lg font-black text-text flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#D9491F] shrink-0" />
                  <span>Spécifications du Projet</span>
                </h3>
              </div>

              {/* Specs Table List */}
              <div className="space-y-4 text-sm">

                {/* Author */}
                <div className="flex items-center justify-between gap-3 py-2 border-b border-black/5">
                  <div className="flex items-center gap-2 text-muted font-medium shrink-0">
                    <User className="h-4 w-4 text-[#D9491F]" />
                    <span>Auteur</span>
                  </div>
                  <span className="font-extrabold text-text text-right">{specs.author}</span>
                </div>

                {/* Version */}
                <div className="flex items-center justify-between gap-3 py-2 border-b border-black/5">
                  <div className="flex items-center gap-2 text-muted font-medium shrink-0">
                    <Tag className="h-4 w-4 text-[#D9491F]" />
                    <span>Version</span>
                  </div>
                  <span className="font-mono font-bold text-[#D9491F] bg-[#FBE8DD] px-2.5 py-0.5 rounded-lg border border-[#D9491F]/20 text-xs">
                    {specs.version}
                  </span>
                </div>

                {/* Is Hosted */}
                <div className="flex items-center justify-between gap-3 py-2 border-b border-black/5">
                  <div className="flex items-center gap-2 text-muted font-medium shrink-0">
                    <Globe className="h-4 w-4 text-[#D9491F]" />
                    <span>Hébergement</span>
                  </div>
                  <span className={`font-bold text-xs px-2.5 py-1 rounded-full text-right ${specs.isHosted ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                    {specs.isHosted ? "Oui (En Ligne)" : "Non (Démo/Local)"}
                  </span>
                </div>

                {/* Category */}
                <div className="flex items-start justify-between gap-3 py-2 border-b border-black/5">
                  <div className="flex items-center gap-2 text-muted font-medium shrink-0 mt-0.5">
                    <Layers className="h-4 w-4 text-[#D9491F]" />
                    <span>Domaine</span>
                  </div>
                  <span className="font-bold text-text text-right leading-tight max-w-[200px]">{specs.category}</span>
                </div>

                {/* Year */}
                <div className="flex items-center justify-between gap-3 py-2 border-b border-black/5">
                  <div className="flex items-center gap-2 text-muted font-medium shrink-0">
                    <Calendar className="h-4 w-4 text-[#D9491F]" />
                    <span>Année</span>
                  </div>
                  <span className="font-bold text-text">{specs.year}</span>
                </div>
              </div>

              {/* Base features recap - Complete display without text truncations */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                  Fonctionnalités de base
                </p>
                <ul className="space-y-2.5 text-xs font-semibold text-text">
                  {specs.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 leading-relaxed">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D9491F] shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                {project.url || specs.liveUrl ? (
                  <a
                    href={project.url || specs.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#D9491F] px-6 py-3.5 text-sm font-extrabold text-white shadow-md shadow-[#D9491F]/20 transition-all hover:bg-[#b73721] hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span>Visiter le projet en direct</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <div className="w-full rounded-2xl bg-[#F6F4EF] p-3 text-center text-xs font-semibold text-muted border border-black/5">
                    Projet hébergé en environnement privé ou local
                  </div>
                )}

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#D9491F]/30 bg-white px-6 py-3 text-sm font-extrabold text-[#D9491F] transition-all hover:bg-[#FFF8F2] hover:border-[#D9491F]"
                >
                  <span>Discuter d&apos;un projet similaire</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <FinalCTA />
    </main>
  );
}
