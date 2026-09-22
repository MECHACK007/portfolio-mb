"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { useRef, type PointerEvent } from "react";
import Magnetic from "@/app/components/ui/Magnetic";
import RollText from "@/app/components/ui/RollText";
import { EASE_EXPO, RevealLines } from "@/app/components/ui/Reveal";
import { useIntroReady, useLocalTime } from "@/app/components/ui/hooks";
import { CONTACT_EMAIL } from "@/app/lib/contact";
import heroPhoto from "@/public/images/About_Rosca.webp";

const highlights = ["React et JavaScript", "Flutter et Dart", "APIs & Intégration IA"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroReady();
  const time = useLocalTime();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const pointerX = useMotionValue(70);
  const pointerY = useMotionValue(30);
  const glowX = useSpring(pointerX, { stiffness: 50, damping: 20 });
  const glowY = useSpring(pointerY, { stiffness: 50, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${glowX}% ${glowY}%, rgba(255, 90, 31, 0.17), transparent 65%)`;

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  const appear = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 1, ease: EASE_EXPO, delay },
  });

  return (
    <section
      ref={ref}
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pb-10 pt-28 sm:pt-32"
    >
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="container-x grid h-full grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`border-l border-bone/[0.05] ${i >= 3 ? "hidden lg:block" : ""} ${i === 5 || i === 2 ? "border-r" : ""} ${i === 2 ? "lg:border-r-0" : ""}`} />
          ))}
        </div>
      </div>

      <div className="container-x relative flex flex-1 flex-col">
        <motion.div
          {...appear(0.1)}
          className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-smoke"
        >
          <span className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-bone">Disponible</span>
            <span className="hidden sm:inline">— Pour de nouveaux projets</span>
          </span>
          <span className="hidden md:inline">Développeur Fullstack Web &amp; Mobile</span>
          <span>
            Brazzaville <span className="text-ember">{time}</span>
          </span>
        </motion.div>

        <div className="relative mt-auto grid grid-cols-1 items-end gap-12 pt-14 lg:grid-cols-12 lg:gap-6">
          <motion.div style={{ y: titleY }} className="relative z-10 lg:col-span-8">
            <RevealLines
              as="h1"
              waitIntro
              delay={0.15}
              stagger={0.11}
              className="text-[clamp(3.1rem,9.2vw,11.5rem)] font-bold leading-[0.86] tracking-[-0.055em]"
              lines={[
                "Je conçois,",
                "je développe,",
                <span key="accent" className="font-serif font-normal italic tracking-[-0.03em] text-ember">
                  je concrétise.
                </span>,
              ]}
            />
          </motion.div>

          <motion.div
            style={{ y: photoY, scale: photoScale }}
            className="relative mx-auto w-full max-w-[22rem] lg:col-span-4 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-b-[2rem] rounded-t-[999px] lg:aspect-[5/6]">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={ready ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
                className="absolute inset-0"
              >
                <motion.div
                  initial={{ scale: 1.35 }}
                  animate={ready ? { scale: 1 } : undefined}
                  transition={{ duration: 1.9, ease: EASE_EXPO, delay: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroPhoto}
                    alt="Rosca — Développeur Web & Mobile"
                    fill
                    preload
                    placeholder="blur"
                    data-hero-image
                    sizes="(min-width: 1024px) 32vw, 90vw"
                    className="object-cover object-top"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-bone/85">
                  <span>Rosca MB</span>
                  <span>Web · Mobile · IA</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0, rotate: -120 }}
              animate={ready ? { scale: 1, rotate: 0 } : undefined}
              transition={{ duration: 1.3, ease: EASE_EXPO, delay: 1.05 }}
              className="absolute -left-4 top-8 sm:-left-10 lg:-left-16"
            >
              <Magnetic strength={0.4}>
                <Link
                  href="/contact"
                  aria-label="Disponible pour de nouveaux projets — me contacter"
                  className="group relative flex h-28 w-28 items-center justify-center rounded-full bg-ember text-ink sm:h-36 sm:w-36"
                >
                  <svg viewBox="0 0 100 100" aria-hidden="true" className="animate-spin-slow absolute inset-0 h-full w-full">
                    <defs>
                      <path id="hero-badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="fill-ink font-mono text-[8.4px] uppercase" letterSpacing="2.1">
                      <textPath href="#hero-badge-circle">Disponible • Nouveaux projets • </textPath>
                    </text>
                  </svg>
                  <ArrowDownRight className="h-8 w-8 transition-transform duration-500 ease-expo group-hover:-rotate-90" />
                </Link>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10 mt-12 grid gap-8 border-t border-bone/10 pt-7 lg:grid-cols-12 lg:items-center lg:gap-6">
          <motion.p {...appear(0.85)} className="max-w-md text-base leading-relaxed text-smoke lg:col-span-5">
            Développeur <strong className="font-medium text-bone">Fullstack Web &amp; Mobile</strong> — Je façonne des
            applications performantes, élégantes et sur-mesure pour transformer vos idées en réalité.
          </motion.p>

          <motion.ul {...appear(0.95)} className="flex flex-wrap gap-2 lg:col-span-3">
            {highlights.map((item) => (
              <li key={item} className="rounded-full border border-bone/15 px-3.5 py-1.5 text-xs text-bone/80">
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div {...appear(1.05)} className="flex flex-wrap items-center gap-6 lg:col-span-4 lg:justify-end">
            <Magnetic strength={0.25}>
              <Link
                href="/portfolio"
                className="group flex items-center gap-3 rounded-full bg-bone py-2 pl-6 pr-2 text-sm font-semibold text-ink transition-colors duration-500 hover:bg-ember"
              >
                <RollText>Voir mes réalisations</RollText>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Magnetic>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-semibold text-bone">
              <span className="link-underline pb-0.5">Discutons →</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
