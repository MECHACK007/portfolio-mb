import { GraduationCap, Award } from "lucide-react";

type Diploma = {
  period: string;
  title: string;
  school: string;
  detail: string;
};

const formations: Diploma[] = [
  {
    period: "2023 — 2025",
    title: "Licence / Diplôme en Génie Logiciel",
    school: "Institut Supérieur des Technologies",
    detail: "Spécialisation en développement web moderne, bases de données relationnelles et architecture logicielle.",
  },
  {
    period: "2022 — 2023",
    title: "Certification Développeur Fullstack Web & Mobile",
    school: "Formation Intensive Tech & Mobile",
    detail: "Maîtrise approfondie des écosystèmes React/Next.js, Flutter, APIs REST et déploiement cloud.",
  },
];

export default function Formation() {
  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-[#FBE8DD]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9491F]">
          <GraduationCap className="h-4 w-4 text-[#D9491F]" />
          Diplômes &amp; Formations
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {formations.map((f) => (
          <div
            key={f.title}
            className="group rounded-3xl border border-[#D9491F]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9491F]/30 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FBE8DD] text-[#D9491F]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-text group-hover:text-[#D9491F] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-muted">{f.school}</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-[#FBE8DD] px-3 py-1 text-[11px] font-semibold text-[#D9491F]">
                {f.period}
              </span>
            </div>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted pl-13">
              {f.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

