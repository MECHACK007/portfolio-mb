"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquarePlus } from "lucide-react";
import { testimonials } from "@/app/lib/testimonials";

// Regroupe les témoignages par 2 (une page = un spread du livre)
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function TestimonialsBook() {
  const spreads = chunk(testimonials, 2);
  const [spreadIndex, setSpreadIndex] = useState(0);

  const hasNext = spreadIndex < spreads.length - 1;
  const current = spreads[spreadIndex];
  const upcoming = spreads[hasNext ? spreadIndex + 1 : spreadIndex];

  const next = () => {
    if (hasNext) setSpreadIndex((i) => i + 1);
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-14 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9491F]/18 bg-[#FBE8DD] px-8 py-3 text-base font-semibold text-[#D9491F] shadow-sm">
          ◆ TÉMOIGNAGES
        </span>
        <h2 className="text-4xl font-extrabold text-text md:text-5xl">
          Ce qu'ils <span className="rounded-full bg-[#FBE8DD] px-4 py-1 text-[#D9491F] font-semibold">disent</span>
        </h2>
      </div>

      <div className="relative mx-auto" style={{ perspective: "1800px" }}>
        {/* Ruban */}
        <div
          className="absolute -top-1 left-1/2 z-10 h-[60px] w-[26px] -translate-x-1/2"
          style={{
            background: "linear-gradient(180deg, #FF7A1E, #D9491F)",
            clipPath: "polygon(0 0,100% 0,100% 82%,50% 100%,0 82%)",
          }}
        />

        <div className="relative h-[420px] max-w-3xl overflow-hidden rounded-[14px] border border-black/5 bg-[#FFFDF8] shadow-[0_40px_80px_-30px_rgba(23,24,26,0.28)] mx-auto">
          {/* Spread suivant, déjà en place dessous */}
          <div className="absolute inset-0 flex divide-x divide-dashed divide-black/5">
            {upcoming.map((t, i) => (
              <Page key={i} t={t} pageNum={hasNext ? (spreadIndex + 1) * 2 + i + 1 : spreadIndex * 2 + i + 1} />
            ))}
          </div>

          {/* Spread actuel qui se retourne */}
          <AnimatePresence initial={false}>
            <motion.div
              key={spreadIndex}
              className="absolute inset-0 flex divide-x divide-dashed divide-black/5"
              style={{ transformStyle: "preserve-3d", transformOrigin: "left center" }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 0 }}
              exit={{ rotateY: -170 }}
              transition={{ duration: 0.75, ease: [0.45, 0, 0.55, 1] }}
            >
              <div className="absolute inset-0 flex divide-x divide-dashed divide-black/5 bg-[#FFFDF8]" style={{ backfaceVisibility: "hidden" }}>
                {current.map((t, i) => (
                  <Page key={i} t={t} pageNum={spreadIndex * 2 + i + 1} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation prev / next */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => setSpreadIndex((i) => Math.max(i - 1, 0))}
            disabled={spreadIndex === 0}
            aria-label="Précédent"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 bg-surface text-accent shadow-sm transition-all duration-200 enabled:hover:bg-[#D9491F] enabled:hover:text-white enabled:hover:shadow-md disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            disabled={!hasNext}
            aria-label="Suivant"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 bg-surface text-accent shadow-sm transition-all duration-200 enabled:hover:bg-[#D9491F] enabled:hover:text-white enabled:hover:shadow-md disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Bouton Laisser un avis — animé */}
        <div className="mt-10 flex justify-center">
          <motion.a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Bonjour, je voudrais laisser un avis sur votre travail."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-transparent bg-[#D9491F] px-6 py-3 text-sm font-semibold text-white shadow-sm"
          >
            {/* Halo pulsé en fond */}
            <motion.span
              className="absolute inset-0 rounded-full bg-white/10"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              animate={{ rotate: [0, -12, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.5 }}
              className="relative"
            >
              <MessageSquarePlus className="h-4 w-4 text-white" />
            </motion.span>
            <span className="relative text-white">Laisser un avis</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function Page({ t, pageNum }: { t: (typeof testimonials)[number]; pageNum: number }) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col p-10">
      <div>
        <Quote className="mb-3 h-9 w-9 text-accent/30" fill="currentColor" />
        <p className="mb-6 min-h-[150px] font-serif text-base italic leading-relaxed text-[#2B2B2E]">
          {t.quote}
        </p>
      </div>

      <div className="mt-auto">
        <div className="mb-4 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
          ))}
        </div>
        <div className="border-t border-dashed border-[#E2DBCC] pt-3">
          <p className="font-serif font-bold text-text">{t.name}</p>
          <p className="text-sm text-muted">{t.role}</p>
        </div>
      </div>

      <span className="absolute bottom-5 right-6 font-serif text-sm text-[#D9491F]">{pageNum}</span>
    </div>
  );
}
