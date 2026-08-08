"use client";

import Image from "next/image";
import { Download, UserRound } from "lucide-react";
import ExperienceTimeline from "./ExperienceTimeline";
import Formation from "./Formation";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
        {/* Photo */}
        <div className="relative mx-auto w-full max-w-lg self-start md:sticky md:top-24 group">
          <div className="absolute -inset-5 -z-10 rounded-3xl border-2 border-[#D9491F]/28 bg-white/60 transition-shadow duration-350 ease-out group-hover:shadow-[0_40px_100px_rgba(217,73,31,0.22)]" />
          <div className="relative h-[32rem] w-full overflow-hidden rounded-3xl border border-[#D9491F]/40 bg-white transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_40px_90px_rgba(23,24,26,0.16)]">
            <Image
              src="/images/bongo_concentre.png"
              alt="Rosca — Développeur Web & Mobile"
              fill
              sizes="(min-width:1024px) 420px, (min-width:768px) 360px, 100vw"
              className="object-cover filter grayscale transition duration-500 ease-in-out group-hover:grayscale-0"
            />
          </div>
        </div>

        {/* Texte */}
        <div className="space-y-12 md:pl-10">
          <div className="py-10 md:py-12">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9491F]/18 bg-[#FBE8DD] px-8 py-3.5 text-base font-semibold text-[#D9491F] md:px-9 md:py-4 md:text-lg shadow-sm">
              <UserRound className="h-4 w-4" />
              À PROPOS
            </span>

            <h2 className="mb-6 text-5xl md:text-6xl lg:text-[6.2rem] font-extrabold leading-tight text-text tracking-tight">
              Dev Web &amp; Mobile
              <br />
              depuis <span className="rounded-full bg-[#FBE8DD] px-5 py-1.5 text-[#D9491F] font-semibold">1-2 ans</span>
            </h2>

            <p className="leading-relaxed text-muted text-base md:text-lg max-w-prose">
              Je combine <span className="font-semibold text-text">capacité d'adaptation</span>, curiosité constante et maîtrise de technologies modernes. J'interviens sur l'ensemble du cycle de développement : web, mobile, API REST et intégrations.
            </p>
          </div>

          <div className="py-16">
            <div className="space-y-6">
              <ExperienceTimeline compact />
            </div>
          </div>

          <div className="py-16">
            <Formation />
            <div className="mt-14 lg:mt-16">
              <a
                href="/assets/cv-rosca.pdf"
                download="cv-rosca.pdf"
                className="group inline-flex items-center gap-3 rounded-full bg-[#D9491F] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
