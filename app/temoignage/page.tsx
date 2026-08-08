import { MessageCircleMore, Sparkles, HeartHandshake } from "lucide-react";
import TestimonialsBook from "@/app/components/sections/TestimonialsBook";
import FinalCTA from "@/app/components/sections/FinalCTA";

export const metadata = {
  title: "Témoignages & Avis — Rosca",
  description: "Découvrez les avis et retours des clients et collaborateurs qui font confiance à Rosca pour leurs projets web & mobiles.",
};

export default function TestimonialPage() {
  return (
    <main className="overflow-hidden pt-6">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[2.5rem] border border-[#D9491F]/20 bg-gradient-to-br from-[#FFF8F2] via-white to-[#FBE8DD] p-8 sm:p-12 md:p-16 shadow-xl shadow-[#D9491F]/10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9491F]">
              <HeartHandshake className="h-3.5 w-3.5" />
              Retours d'expérience
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text leading-tight">
              La meilleure preuve : <span className="framed-accent text-[#D9491F]">la satisfaction client</span>.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
              Des collaborations fluides, transparentes et axées sur la valeur concrète apportée à votre entreprise.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsBook />
      <FinalCTA />
    </main>
  );
}

