"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { Check, Download } from "lucide-react";
import { useRef } from "react";
import Magnetic from "@/app/components/ui/Magnetic";
import RollText from "@/app/components/ui/RollText";
import { RevealLines, ScrollText } from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import ExperienceTimeline from "./ExperienceTimeline";
import Formation from "./Formation";
import portraitPhoto from "@/public/images/Hero_Rosca.webp";

const quickSkills = [
  "Next.js 16, React et Tailwind CSS",
  "Applications mobiles Flutter avec intégration Paiement Mobile",
  "Conception d’APIs REST et solutions IA automatisées",
];

export default function AboutSection() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "center center"] });
  const inset = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const clipPath = useMotionTemplate`inset(${inset}% ${inset}% ${inset}% ${inset}% round 2rem)`;
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.35, 1]);

  return (
    <section id="a-propos" className="relative overflow-clip py-24 sm:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <SectionLabel index="03">À propos de moi</SectionLabel>

            <motion.div
              ref={photoRef}
              style={{ clipPath }}
              className="relative mt-8 aspect-[4/5] overflow-hidden bg-ink-3 lg:aspect-[6/5]"
            >
              <motion.div style={{ scale: imageScale }} className="absolute inset-0">
                <Image
                  src={portraitPhoto}
                  alt="Rosca — Développeur Web & Mobile"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </motion.div>
              <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-bone/20 bg-ink/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] backdrop-blur-md">
                Rosca • Dev Fullstack
              </span>
              <div className="absolute inset-x-6 bottom-6">
                <p className="font-display text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                  Rosca<span className="text-ember">.</span>
                </p>
                <p className="mt-1 font-serif text-lg italic text-bone/80">Passionné par le code &amp; l&apos;innovation</p>
              </div>
            </motion.div>

            <ul className="mt-6 divide-y divide-bone/10 border-y border-bone/10">
              {quickSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 py-2.5 text-sm text-bone/85">
                  <Check className="h-4 w-4 shrink-0 text-ember" />
                  {skill}
                </li>
              ))}
            </ul>

            <Magnetic strength={0.12} className="mt-6 w-full">
              <a
                href="/cv-rosca.pdf"
                download="CV_Rosca_Dev.pdf"
                className="group flex w-full items-center justify-between gap-4 rounded-full bg-ember py-2 pl-6 pr-2 font-semibold text-ink transition-colors duration-500 hover:bg-bone"
              >
                <RollText>Télécharger mon CV (PDF)</RollText>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:translate-y-0.5">
                  <Download className="h-4 w-4" />
                </span>
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <RevealLines
            as="h2"
            className="text-[clamp(2.4rem,5.4vw,5.4rem)] font-bold leading-[0.92] tracking-[-0.05em]"
            lines={[
              "Créer des produits",
              "digitaux",
              <span key="accent" className="font-serif font-normal italic tracking-[-0.02em] text-ember">
                qui ont de l&apos;impact.
              </span>,
            ]}
          />

          <ScrollText
            className="mt-12 font-display text-[clamp(1.45rem,2.5vw,2.25rem)] font-medium leading-[1.25] tracking-[-0.025em]"
            highlight={["2+", "ans", "d'expérience"]}
            text="Développeur Web & Mobile avec 2+ ans d'expérience, je combine adaptabilité, rigueur technique et compréhension des enjeux métier. J'interviens sur l'ensemble du cycle d'un projet : du design d'architecture à la mise en production."
          />

          <div className="mt-24 space-y-24">
            <ExperienceTimeline compact />
            <Formation />
          </div>
        </div>
      </div>
    </section>
  );
}
