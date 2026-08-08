"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquarePlus, HeartHandshake } from "lucide-react";
import { testimonials } from "@/app/lib/testimonials";

export default function TestimonialsBook() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <div className="mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-[#FBE8DD]/60 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D9491F]"
        >
          <HeartHandshake className="h-3.5 w-3.5" />
          Avis &amp; Témoignages
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-text tracking-tight"
        >
          Ce que mes <span className="framed-accent text-[#D9491F]">clients expriment</span>
        </motion.h2>
      </div>

      {/* Main Interactive Showcase */}
      <div className="relative mx-auto max-w-3xl">
        {/* Card Container */}
        <div className="relative overflow-hidden rounded-3xl border border-[#D9491F]/20 bg-white p-8 sm:p-12 shadow-xl shadow-[#D9491F]/10">
          {/* Decorative Background Ribbon */}
          <div className="absolute top-0 right-10 h-16 w-12 bg-gradient-to-b from-[#D9491F] to-[#E85D35] clip-path-ribbon shadow-md hidden sm:block opacity-90" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-between"
            >
              {/* Quote Icon & Rating */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBE8DD] text-[#D9491F]">
                  <Quote className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote Content */}
              <blockquote className="text-lg sm:text-xl font-medium leading-relaxed text-text italic mb-8">
                "{current.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-between border-t border-black/5 pt-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{current.avatar}</span>
                  <div>
                    <h3 className="font-extrabold text-base text-text">{current.name}</h3>
                    <p className="text-xs text-muted">
                      {current.role} • <span className="text-[#D9491F] font-semibold">{current.company}</span>
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block rounded-full bg-[#FBE8DD]/60 border border-[#D9491F]/10 px-3 py-1 text-xs font-medium text-[#D9491F]">
                  {current.project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls Bar */}
        <div className="mt-8 flex items-center justify-between px-2">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Témoignage ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? "w-8 bg-[#D9491F]" : "w-2.5 bg-[#D9491F]/20 hover:bg-[#D9491F]/40"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              aria-label="Témoignage précédent"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9491F]/20 bg-white text-[#D9491F] shadow-sm transition-all hover:bg-[#D9491F] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Témoignage suivant"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D9491F]/20 bg-white text-[#D9491F] shadow-sm transition-all hover:bg-[#D9491F] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Leave a review button */}
        <div className="mt-10 flex justify-center">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}?text=${encodeURIComponent(
              "Bonjour Rosca, je souhaite vous laisser un avis sur votre prestation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#D9491F] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#D9491F]/20 transition-all duration-300 hover:bg-[#c43e16] hover:shadow-xl"
          >
            <MessageSquarePlus className="h-4 w-4" />
            Laisser un avis sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

