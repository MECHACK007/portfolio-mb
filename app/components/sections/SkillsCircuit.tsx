import { Code2, Smartphone, Plug, Bot } from "lucide-react";

const domains = [
  { idx: "01", icon: Code2, title: "Développement Web", desc: "Next.js · React · Tailwind" },
  { idx: "02", icon: Smartphone, title: "Développement Mobile", desc: "Flutter · Kotlin" },
  { idx: "03", icon: Plug, title: "API & Intégrations", desc: "REST · Mobile Money" },
  { idx: "04", icon: Bot, title: "Agents IA", desc: "OpenAI · Automatisation" },
];

export default function SkillsCircuit() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-[#FBE8DD] px-6 py-3 text-base font-bold tracking-wide text-[#D9491F] shadow-sm md:text-lg">
          ◆ STACK &amp; COMPÉTENCES
        </span>
        <h2 className="text-6xl font-extrabold text-text md:text-[5.75rem]">
          Mes <span className="rounded-full bg-[#FBE8DD] px-3 py-1 text-[#D9491F] font-semibold">domaines</span> d'expertise
        </h2>
      </div>

      {/* --- Desktop : hub + circuit --- */}
      <div className="relative mx-auto hidden h-[700px] max-w-4xl md:block">
        {/* halo doux */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[70px]" />

        {/* lignes de circuit */}
        <svg viewBox="0 0 900 640" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D9491F" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D9491F" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#lg)" strokeWidth="1.6">
            <path d="M420,285 H320 V180" />
            <path d="M480,285 H580 V180" />
            <path d="M420,345 H320 V460" />
            <path d="M480,345 H580 V460" />
          </g>
          <g fill="#D9491F">
            <circle cx="420" cy="285" r="3.5" />
            <circle cx="480" cy="285" r="3.5" />
            <circle cx="420" cy="345" r="3.5" />
            <circle cx="480" cy="345" r="3.5" />
            <circle cx="320" cy="180" r="3.5" />
            <circle cx="580" cy="180" r="3.5" />
            <circle cx="320" cy="460" r="3.5" />
            <circle cx="580" cy="460" r="3.5" />
          </g>
        </svg>

        {/* hub central */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-gradient-to-br from-[#FF9A4E] via-accent to-[#7a1710] shadow-[0_14px_34px_-6px_rgba(217,73,31,0.45)]">
            <div className="grid grid-cols-2 gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
          </div>
          <span className="mt-4 text-[10px] font-bold tracking-[2px] text-muted">
            ROSCA
          </span>
        </div>

        {/* cartes */}
        {domains.map(({ idx, icon: Icon, title, desc }, i) => {
          const positions = ["left-0 top-0", "right-0 top-0", "left-0 bottom-0", "right-0 bottom-0"];
          return (
            <div
              key={idx}
              className={`absolute ${positions[i]} w-[300px] rounded-[22px] border border-black/5 bg-surface p-5 shadow-[0_24px_50px_-20px_rgba(23,24,26,0.16)]`}
            >
              <span className="absolute right-4 top-4 text-sm font-bold tracking-wide text-[#D9491F]">
                {idx}
              </span>
              <div className="mb-3.5 flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-1.5 text-xl font-bold text-text">{title}</h3>
              <p className="text-sm text-muted">{desc}</p>
            </div>
          );
        })}
      </div>

      {/* --- Mobile : liste simple --- */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {domains.map(({ idx, icon: Icon, title, desc }) => (
          <div key={idx} className="rounded-2xl border border-black/5 bg-surface p-5 shadow-sm">
            <div className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="mb-1 text-lg font-bold text-text">{title}</h3>
            <p className="text-sm text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
