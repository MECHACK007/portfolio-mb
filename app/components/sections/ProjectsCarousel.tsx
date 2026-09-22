"use client";

import Link from "next/link";
import { AnimatePresence, motion, useInView, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/app/lib/cn";
import { projects, type Project } from "@/app/lib/projects";
import { keepWords } from "@/app/lib/text";
import ProjectImage from "@/app/components/ui/ProjectImage";
import RollText from "@/app/components/ui/RollText";
import { EASE_EXPO, RevealLines } from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import { useScrollLock } from "@/app/components/ui/SmoothScroll";
import { useMediaQuery } from "@/app/components/ui/hooks";

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProjectsCarousel() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [distance, setDistance] = useState(0);
  const distanceValue = useMotionValue(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!isDesktop || !track) return;

    const observer = new ResizeObserver(() => {
      const next = Math.max(0, track.scrollWidth - window.innerWidth);
      distanceValue.set(next);
      setDistance(next);
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, [isDesktop, distanceValue]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(() => -scrollYProgress.get() * distanceValue.get());

  const pinned = isDesktop && distance > 0;
  const carouselNear = useInView(sectionRef, { once: true, margin: "100% 0px 100% 0px" });

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={pinned ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      <div className={cn(pinned ? "sticky top-0 flex h-[100svh] items-center overflow-clip" : "py-24 sm:py-32")}>
        <div className="container-x lg:hidden">
          <Intro />
        </div>

        <motion.div
          ref={trackRef}
          style={pinned ? { x } : undefined}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-10 lg:mt-0 lg:w-max lg:snap-none lg:gap-10 lg:overflow-visible lg:pb-0 lg:pl-[max(3.5rem,calc((100vw-92rem)/2+3.5rem))] lg:pr-[10vw] [&::-webkit-scrollbar]:hidden"
        >
          <div className="hidden w-[30vw] shrink-0 lg:block">
            <Intro />
          </div>

          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              eager={carouselNear}
              onOpen={() => setSelectedProject(project)}
            />
          ))}

          <Link
            href="/portfolio"
            data-cursor="view"
            data-cursor-label="Tout voir"
            className="group flex w-[70vw] shrink-0 snap-start flex-col items-center justify-center gap-7 rounded-[1.75rem] border border-bone/10 py-16 transition-colors duration-500 hover:border-ember/50 sm:w-[40vw] lg:w-[24vw]"
          >
            <span className="flex h-36 w-36 items-center justify-center rounded-full bg-ember text-ink transition-transform duration-700 ease-expo group-hover:scale-110 xl:h-44 xl:w-44">
              <ArrowUpRight className="h-12 w-12 transition-transform duration-700 ease-expo group-hover:rotate-45" />
            </span>
            <span className="text-center font-display text-3xl font-bold leading-none tracking-[-0.045em]">
              Voir tous
              <br />
              les projets
            </span>
          </Link>
        </motion.div>

        {pinned && (
          <div className="container-x absolute inset-x-0 bottom-8">
            <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
              <span>Défilement</span>
              <div className="h-px flex-1 bg-bone/10">
                <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-ember" />
              </div>
              <span className="text-bone">{pad(projects.length)} projets</span>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <QuickView key={selectedProject.slug} project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}

function Intro() {
  return (
    <div className="flex flex-col gap-8">
      <SectionLabel index="04">Réalisations &amp; Portfolio</SectionLabel>
      <RevealLines
        as="h2"
        className="text-[clamp(2.6rem,5vw,5.4rem)] font-bold leading-[0.9] tracking-[-0.05em]"
        lines={[
          "Aperçu de mes",
          <span key="accent" className="font-serif font-normal italic tracking-[-0.02em] text-ember">
            projets récents.
          </span>,
        ]}
      />
      <p className="max-w-sm text-lg leading-relaxed text-smoke">
        Découvrez une sélection de projets web et mobiles développés avec passion et précision.
      </p>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  eager,
  onOpen,
}: {
  project: Project;
  index: number;
  eager: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      data-cursor="view"
      data-cursor-label="Aperçu"
      aria-label={`Aperçu du projet ${project.title}`}
      className="group relative w-[82vw] shrink-0 snap-start text-left sm:w-[56vw] lg:w-[40vw] xl:w-[36vw]"
    >
      <span className="relative block aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-ink-3">
        <ProjectImage
          src={project.image}
          title={project.title}
          fill
          // Cards are shifted by a transform, which native lazy-loading can't see coming,
          // so switch to eager once the section is within a viewport of the screen.
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 40vw, 82vw"
          className="object-cover object-top transition-transform duration-[1.2s] ease-expo group-hover:scale-[1.06]"
        />
        <span className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full bg-ink/60 px-3 py-1 text-[11px] text-bone backdrop-blur-md">
              {tag}
            </span>
          ))}
        </span>
        <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-ember text-ink transition-transform duration-500 ease-expo group-hover:rotate-45 lg:scale-0 lg:group-hover:scale-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </span>

      <span className="mt-5 flex items-start justify-between gap-6">
        <span className="min-w-0">
          <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-smoke">
            {project.specs.category} — {project.specs.year}
          </span>
          <span className="mt-2 block font-display text-[clamp(1.8rem,2.8vw,2.8rem)] font-bold leading-none tracking-[-0.045em] transition-colors duration-500 group-hover:text-ember">
            {keepWords(project.title)}
          </span>
          <span className="mt-2 line-clamp-2 block max-w-md text-sm text-smoke">{project.subtitle}</span>
        </span>
        <span className="font-mono text-xs text-smoke">
          {pad(index + 1)}/{pad(projects.length)}
        </span>
      </span>
    </button>
  );
}

function QuickView({ project, onClose }: { project: Project; onClose: () => void }) {
  useScrollLock(true);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const liveUrl = project.url || project.specs.liveUrl;

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      onClick={onClose}
      className="fixed inset-0 z-[180] flex items-end justify-center bg-ink/75 p-3 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <motion.div
        data-lenis-prevent
        onClick={(event) => event.stopPropagation()}
        initial={{ y: 80, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE_EXPO }}
        className="relative max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-bone/10 bg-ink-2"
      >
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Fermer"
          className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink/70 text-bone backdrop-blur-md transition-colors hover:bg-ember hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/9] bg-ink-3">
          <ProjectImage src={project.image} title={project.title} fill sizes="768px" className="object-cover object-top" />
        </div>

        <div className="p-6 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-smoke">
            {project.specs.category} — {project.specs.year}
          </p>
          <h3 id="quickview-title" className="mt-3 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
            {project.title}
          </h3>
          <p className="mt-2 font-serif text-xl italic text-ember">{project.subtitle}</p>
          <p className="mt-6 leading-relaxed text-bone/80">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full border border-bone/15 px-3 py-1 text-xs text-bone/85">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={`/portfolio/${project.slug}`}
              onClick={onClose}
              className="group flex items-center justify-between gap-4 rounded-full bg-ember py-2 pl-6 pr-2 font-semibold text-ink transition-colors duration-500 hover:bg-bone"
            >
              <RollText>Voir tous les détails</RollText>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-bone/20 px-6 py-3 font-semibold transition-colors hover:border-ember hover:text-ember"
              >
                Visiter le site
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="flex items-center justify-center rounded-full border border-bone/10 px-6 py-3 text-sm text-smoke"
              >
                Visiter le site — non hébergé
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
