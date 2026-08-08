import { GraduationCap } from "lucide-react";

type Diploma = {
  period: string;
  title: string;
  school: string;
};

const formations: Diploma[] = [
  {
    period: "2023 — 2025",
    title: "Licence / Diplôme en Informatique",
    school: "Nom de l'école ou université",
  },
  {
    period: "2022 — 2023",
    title: "Formation développement web & mobile",
    school: "Nom de la formation / organisme",
  },
];

export default function Formation() {
  return (
    <section className="px-0 pb-0">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9491F]/18 bg-[#FBE8DD] px-8 py-3 text-base font-semibold text-[#D9491F] shadow-sm">
          <GraduationCap className="h-5 w-5 text-[#D9491F]" />
          FORMATION
      </span>

      <div className="grid grid-cols-1 gap-6">
        {formations.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-orange-100 bg-surface p-6 shadow-sm"
          >
            <div className="space-y-3">
              <span className="text-sm uppercase tracking-wider text-gray-400">{f.period}</span>
              <h3 className="text-2xl font-semibold text-text">{f.title}</h3>
              <p className="text-base text-muted">{f.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
