import { FadeIn } from "@/app/components/ui/Reveal";

type Diploma = {
  period: string;
  title: string;
  school: string;
  detail: string;
};

const formations: Diploma[] = [
  {
    period: "2023 — 2026",
    title: "Licence / Diplôme en Génie Logiciel",
    school: "Ecole supérieure de gestion d'administration des entreprises (ESGAE)",
    detail: "Formation approfondie en ingénierie logicielle avec une forte orientation vers le développement web, la conception d'applications et la gestion des projets informatiques.",
  },
  {
    period: "2022 — 2023",
    title: "Baccalauréat Général D",
    school: "Lycée de Massengo",
    detail: "Obtention du Baccalauréat Général avec une base solide en culture générale, sciences et communication, préparant une transition réussie vers les études supérieures en informatique.",
  },
  {
    period: "2022 — 2023",
    title: "Certification A1 en anglais",
    school: "FLTC",
    detail: "Certification de niveau A1 attestant d’une compréhension et d’une communication basique en anglais, acquise dans un contexte d’apprentissage structuré.",
  },
];

export default function Formation() {
  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-4 border-b border-bone/10 pb-5">
        <h3 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
          Diplômes &amp; <span className="font-serif font-normal italic tracking-[-0.02em] text-ember">formations</span>
        </h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
          {String(formations.length).padStart(2, "0")} titres
        </span>
      </div>

      <ul>
        {formations.map((formation, index) => (
          <li key={formation.title} className="group relative overflow-hidden border-b border-bone/10">
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-bottom scale-y-0 bg-ink-2 transition-transform duration-700 ease-expo group-hover:scale-y-100"
            />
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-ember transition-transform delay-100 duration-700 ease-expo group-hover:scale-y-100"
            />
            <FadeIn delay={index * 0.08} className="relative grid gap-3 py-8 sm:grid-cols-12 sm:gap-6 sm:px-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ember sm:col-span-3 sm:pt-2">
                {formation.period}
              </span>
              <div className="sm:col-span-9">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-xl font-bold tracking-[-0.03em] sm:text-2xl">{formation.title}</h4>
                  <span className="mt-1.5 font-mono text-[11px] text-smoke">0{index + 1}</span>
                </div>
                <p className="mt-1 text-sm text-bone/70">{formation.school}</p>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{formation.detail}</p>
              </div>
            </FadeIn>
          </li>
        ))}
      </ul>
    </div>
  );
}
