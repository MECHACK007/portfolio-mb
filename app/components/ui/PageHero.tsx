import Link from "next/link";
import type { ReactNode } from "react";
import { FadeIn, RevealLines } from "./Reveal";
import SectionLabel from "./SectionLabel";

type Props = {
  index: string;
  eyebrow: string;
  crumb: string;
  lines: ReactNode[];
  description: ReactNode;
  highlights?: string[];
  children?: ReactNode;
};

export default function PageHero({ index, eyebrow, crumb, lines, description, highlights, children }: Props) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 right-[-15%] h-[40rem] w-[40rem] rounded-full bg-ember/20 blur-[150px]"
      />

      <div className="container-x relative">
        <FadeIn y={12} className="flex flex-wrap items-center justify-between gap-4">
          <SectionLabel index={index}>{eyebrow}</SectionLabel>
          <nav aria-label="Fil d'Ariane" className="font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
            <Link href="/" className="link-underline transition-colors hover:text-bone">
              Accueil
            </Link>
            <span className="mx-2 text-ember">/</span>
            <span className="text-bone">{crumb}</span>
          </nav>
        </FadeIn>

        <RevealLines
          as="h1"
          lines={lines}
          waitIntro
          className="mt-10 text-[clamp(2.8rem,8.6vw,9.5rem)] font-bold leading-[0.9] tracking-[-0.05em]"
        />

        <div className="mt-14 grid gap-10 border-t border-bone/10 pt-8 md:grid-cols-12">
          <FadeIn delay={0.25} className="text-lg leading-relaxed text-smoke sm:text-xl md:col-span-6">
            {description}
          </FadeIn>

          {highlights && highlights.length > 0 && (
            <FadeIn delay={0.35} className="md:col-span-5 md:col-start-8">
              <ul className="divide-y divide-bone/10 border-y border-bone/10">
                {highlights.map((item, i) => (
                  <li key={item} className="flex items-center justify-between gap-4 py-3.5 text-sm sm:text-base">
                    <span className="text-bone">{item}</span>
                    <span className="font-mono text-[11px] text-ember">0{i + 1}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
