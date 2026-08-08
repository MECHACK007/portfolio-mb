"use client";

import Image from "next/image";
import { ArrowUpRight, Briefcase } from "lucide-react";

// Test images from picsum.photos as requested
const projects = [
  { slug: "1", url: "#", domain: "picsum.photos", image: "https://picsum.photos/id/1011/600/360", title: "Dashboard de pilotage", description: "Tableaux de bord métier." },
  { slug: "2", url: "#", domain: "picsum.photos", image: "https://picsum.photos/id/1012/600/360", title: "Vitrine e-commerce", description: "Catalogue produit fluide." },
  { slug: "3", url: "#", domain: "picsum.photos", image: "https://picsum.photos/id/1013/600/360", title: "Application mobile", description: "Expérience native responsive." },
  { slug: "4", url: "#", domain: "picsum.photos", image: "https://picsum.photos/id/1015/600/360", title: "Plateforme SaaS", description: "Outil collaboratif en ligne." },
];

const marqueeProjects = [...projects, ...projects, ...projects, ...projects, ...projects, ...projects];

export default function ProjectsCarousel() {

  return (
    <section className="mx-auto max-w-full px-6 py-24">
      <div className="flex flex-col items-center text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9491F]/18 bg-[#FBE8DD] px-8 py-3 text-base font-semibold text-[#D9491F] shadow-sm">
          <Briefcase className="h-3.5 w-3.5 text-[#D9491F]" />
          RÉALISATIONS
        </span>

        <h2 className="max-w-4xl text-5xl font-extrabold tracking-tight text-text sm:text-6xl">
          Projets{' '}
          <span className="rounded-full bg-[#FBE8DD] px-4 py-1 text-[#D9491F] font-semibold">
            récents
          </span>
        </h2>
      </div>

      <div
        className="relative mt-16 overflow-hidden rounded-3xl border-[0.5px]"
        style={{ borderColor: "rgba(0,0,0,0.03)" }}
      >
        {/* Fog overlays */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-3/4 fog-left rounded-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-3/4 fog-right rounded-3xl" />

        {/* Edge fade indicators (background -> transparent) to show more horizontal content */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 rounded-l-3xl sm:w-40"
          aria-hidden="true"
          style={{ background: "linear-gradient(to right, var(--color-background) 60%, transparent)" }}
        />

        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 rounded-r-3xl sm:w-40"
          aria-hidden="true"
          style={{ background: "linear-gradient(to left, var(--color-background) 60%, transparent)" }}
        />

        <div className="space-y-6 px-6 py-6 rounded-3xl">
          <div className="overflow-hidden pause-on-hover rounded-3xl">
            <div className="relative rounded-3xl">
              <div className="flex animate-marquee-right flex-nowrap gap-6 will-change-transform">
                {marqueeProjects.map((project, index) => (
                  <a
                    key={`top-${project.slug}-${index}`}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card group shrink-0 w-72 sm:w-80 max-w-[18rem] rounded-3xl bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border hover:border-orange-500 overflow-hidden"
                  >
                    <div className="rounded-t-3xl bg-gray-100 px-4 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-500" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400" />
                          <span className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <div className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400">
                          {project.domain}
                        </div>
                      </div>
                    </div>

                    <div className="relative h-40 w-full sm:h-44">
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </div>

                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
                        <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden pause-on-hover rounded-3xl">
            <div className="relative rounded-3xl">
              <div className="flex animate-marquee-left flex-nowrap gap-6 will-change-transform">
                {marqueeProjects.map((project, index) => (
                  <a
                    key={`bottom-${project.slug}-${index}`}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card group shrink-0 w-72 sm:w-80 max-w-[18rem] rounded-3xl bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border hover:border-orange-500 overflow-hidden"
                  >
                    <div className="rounded-t-3xl bg-gray-100 px-4 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-500" />
                          <span className="h-3 w-3 rounded-full bg-yellow-400" />
                          <span className="h-3 w-3 rounded-full bg-green-500" />
                        </div>
                        <div className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-400">
                          {project.domain}
                        </div>
                      </div>
                    </div>

                    <div className="relative h-40 w-full sm:h-44">
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </div>

                    <div className="p-4">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
                        <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
