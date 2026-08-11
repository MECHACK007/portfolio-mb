"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageSquarePlus,
  HeartHandshake,
  PlusCircle,
  X,
  Send,
  CheckCircle2,
} from "lucide-react";
import { testimonials as staticTestimonials, Testimonial } from "@/app/lib/testimonials";

export default function TestimonialsBook() {
  const [list, setList] = useState<Testimonial[]>(staticTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form State
  const [formName, setFormName] = useState("");
  const [formRole, setFormRole] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formProject, setFormProject] = useState("");
  const [formQuote, setFormQuote] = useState("");
  const [formRating, setFormRating] = useState(5);

  // Fetch dynamic testimonials on mount
  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setList(data);
          }
        }
      } catch (err) {
        // Fallback to static
      }
    }
    loadTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % list.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formQuote.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          role: formRole || "Client",
          company: formCompany || "Particulier / Entreprise",
          project: formProject || "Projet Web & Mobile",
          quote: formQuote,
          rating: formRating,
        }),
      });

      if (res.ok) {
        const newTestimonial: Testimonial = await res.json();
        setList((prev) => [newTestimonial, ...prev]);
        setCurrentIndex(0);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          setIsModalOpen(false);
          // Reset form
          setFormName("");
          setFormRole("");
          setFormCompany("");
          setFormProject("");
          setFormQuote("");
          setFormRating(5);
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const current = list[currentIndex] || list[0] || staticTestimonials[0];

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

          {current && (
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
                  &quot;{current.quote}&quot;
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
          )}
        </div>

        {/* Controls Bar */}
        <div className="mt-8 flex items-center justify-between px-2">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2 flex-wrap">
            {list.map((t, idx) => (
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

        {/* Leave a review button bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 rounded-full bg-[#D9491F] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#D9491F]/20 transition-all duration-300 hover:bg-[#c43e16] hover:shadow-xl hover:-translate-y-0.5"
          >
            <PlusCircle className="h-4 w-4" />
            Laisser un avis en ligne
          </button>

          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "242065147072"}?text=${encodeURIComponent(
              "Bonjour Rosca, je souhaite vous laisser un avis sur votre prestation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#D9491F]/30 bg-white px-7 py-3.5 text-sm font-semibold text-[#D9491F] transition-all duration-300 hover:bg-[#FFF8F2]"
          >
            <MessageSquarePlus className="h-4 w-4" />
            Avis via WhatsApp
          </a>
        </div>
      </div>

      {/* Interactive Review Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#D9491F]/20 bg-white p-6 sm:p-8 shadow-2xl"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-text transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {showSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-text">Merci pour votre avis !</h3>
                <p className="text-sm text-muted">Votre témoignage a été publié avec succès.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-text">Laissez votre avis</h3>
                  <p className="text-xs text-muted mt-1">Partagez votre retour d&apos;expérience sur nos réalisations.</p>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-xs font-bold text-text uppercase tracking-wider mb-2">
                    Votre note (Étoiles)
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormRating(star)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-7 w-7 ${
                            star <= formRating
                              ? "fill-amber-400 text-amber-400"
                              : "fill-gray-100 text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-text uppercase tracking-wider mb-1">
                    Nom &amp; Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Kouassi Marc"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm text-text focus:border-[#D9491F] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Role */}
                  <div>
                    <label className="block text-xs font-bold text-text uppercase tracking-wider mb-1">
                      Poste / Rôle
                    </label>
                    <input
                      type="text"
                      placeholder="ex: CEO, Product Manager"
                      value={formRole}
                      onChange={(e) => setFormRole(e.target.value)}
                      className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm text-text focus:border-[#D9491F] focus:outline-none"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-bold text-text uppercase tracking-wider mb-1">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      placeholder="ex: Tech Connect"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm text-text focus:border-[#D9491F] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Project */}
                <div>
                  <label className="block text-xs font-bold text-text uppercase tracking-wider mb-1">
                    Projet réalisé
                  </label>
                  <input
                    type="text"
                    placeholder="ex: Application Mobile, Site Web E-Commerce"
                    value={formProject}
                    onChange={(e) => setFormProject(e.target.value)}
                    className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm text-text focus:border-[#D9491F] focus:outline-none"
                  />
                </div>

                {/* Review / Quote */}
                <div>
                  <label className="block text-xs font-bold text-text uppercase tracking-wider mb-1">
                    Votre Témoignage / Avis *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Racontez votre expérience et la qualité du travail livré..."
                    value={formQuote}
                    onChange={(e) => setFormQuote(e.target.value)}
                    className="w-full rounded-xl border border-black/10 px-4 py-2.5 text-sm text-text focus:border-[#D9491F] focus:outline-none resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9491F] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#b73721] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Publier mon avis</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}


