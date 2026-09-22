"use client";

import VelocityMarquee from "@/app/components/ui/Marquee";

const technologies = ["React", "Next.js", "Flutter", "Laravel", "Node.js", "TypeScript", "APIs REST", "Agents IA"];
const services = ["Conception", "Développement", "Mobile", "Intégration IA", "Déploiement"];

function Spark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
    </svg>
  );
}

export default function MarqueeBand() {
  return (
    <section aria-label="Technologies maîtrisées" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 rotate-[2.5deg] scale-110 border-y border-bone/10 bg-ink-2 py-4 sm:py-6">
        <VelocityMarquee baseVelocity={3}>
          {services.map((item) => (
            <span
              key={item}
              className="text-outline flex items-center font-display text-[clamp(2rem,5vw,4.8rem)] font-bold uppercase leading-none tracking-[-0.03em] [--stroke-color:rgba(242,237,228,0.35)] [--stroke-width:1px]"
            >
              {item}
              <Spark className="mx-8 h-[0.45em] w-[0.45em] shrink-0 text-bone/25 sm:mx-12" />
            </span>
          ))}
        </VelocityMarquee>
      </div>

      <div className="-rotate-[2.5deg] scale-110 bg-ember py-4 text-ink shadow-[0_30px_80px_-20px_rgba(255,90,31,0.45)] sm:py-6">
        <VelocityMarquee baseVelocity={-4}>
          {technologies.map((item) => (
            <span
              key={item}
              className="flex items-center font-display text-[clamp(2.4rem,6.4vw,6.4rem)] font-bold uppercase leading-none tracking-[-0.04em]"
            >
              {item}
              <Spark className="mx-8 h-[0.5em] w-[0.5em] shrink-0 sm:mx-12" />
            </span>
          ))}
        </VelocityMarquee>
      </div>
    </section>
  );
}
