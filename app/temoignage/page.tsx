import { MessageCircleMore, Sparkles } from "lucide-react";
import TestimonialsBook from "@/app/components/sections/TestimonialsBook";

export const metadata = {
  title: "Témoignages — Rosca",
  description: "Découvrez ce que disent les clients et partenaires ayant travaillé avec moi.",
};

export default function TestimonialPage() {
  return (
    <main className="overflow-hidden">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="rounded-[2rem] border border-[#D9491F]/15 bg-[linear-gradient(135deg,#FFF7F0_0%,#FFFDF9_45%,#FFF2E7_100%)] p-8 shadow-[0_35px_100px_-45px_rgba(217,73,31,0.35)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/15 bg-white/70 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9491F] backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Témoignages
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-text sm:text-5xl">
              La meilleure preuve : les retours de ceux avec qui j&apos;ai travaillé.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
              Des collaborations humaines, claires et orientées résultats — avec une vraie attention à la qualité du produit.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-[#D9491F]/10 bg-white/80 p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D9491F]/10 text-[#D9491F]">
                <MessageCircleMore className="h-5 w-5" />
              </div>
              <p className="text-base leading-8 text-muted sm:text-lg">
                Chaque projet est traité avec sérieux, écoute et une vraie volonté d&apos;apporter de la valeur — du premier échange à la livraison.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsBook />
    </main>
  );
}
