"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, MessageCircle, Plus, Send, Star, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/app/lib/cn";
import { testimonials as staticTestimonials, type Testimonial } from "@/app/lib/testimonials";
import Magnetic from "@/app/components/ui/Magnetic";
import RollText from "@/app/components/ui/RollText";
import { EASE_EXPO, RevealLines } from "@/app/components/ui/Reveal";
import SectionLabel from "@/app/components/ui/SectionLabel";
import { useScrollLock } from "@/app/components/ui/SmoothScroll";
import { whatsappUrl } from "@/app/lib/contact";

const AUTOPLAY_MS = 9000;
const pad = (n: number) => String(n).padStart(2, "0");

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_EXPO, delay: i * 0.018 },
  }),
  exit: { opacity: 0, y: -10, filter: "blur(6px)", transition: { duration: 0.25 } },
};

const fieldClass =
  "w-full border-0 border-b border-bone/15 bg-transparent px-0 py-3 text-base text-bone placeholder:text-smoke/60 transition-colors focus:border-ember focus:outline-none focus-visible:outline-none";
const labelClass = "font-mono text-[11px] uppercase tracking-[0.2em] text-smoke";

export default function TestimonialsBook({ index = "06" }: { index?: string }) {
  const [list, setList] = useState<Testimonial[]>(staticTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
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

  useScrollLock(isModalOpen);

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
      } catch {
        // Fallback to static
      }
    }
    loadTestimonials();
  }, []);

  // Autoplay
  useEffect(() => {
    if (paused || isModalOpen || list.length < 2) return;
    const id = window.setTimeout(() => setCurrentIndex((prev) => (prev + 1) % list.length), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [currentIndex, paused, isModalOpen, list.length]);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isModalOpen]);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % list.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + list.length) % list.length);

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
    <section className="relative overflow-clip py-24 sm:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-ember/10 blur-[140px]" />

      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <SectionLabel index={index}>Avis &amp; Témoignages</SectionLabel>
            <RevealLines
              as="h2"
              className="mt-8 text-[clamp(2.4rem,5.6vw,5.6rem)] font-bold leading-[0.92] tracking-[-0.05em]"
              lines={[
                "Ce que mes",
                <span key="accent" className="font-serif font-normal italic tracking-[-0.02em] text-ember">
                  clients expriment.
                </span>,
              ]}
            />
          </div>

          <div className="flex items-center gap-3">
            <Magnetic strength={0.3}>
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Témoignage précédent"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-bone/15 transition-colors duration-300 hover:border-ember hover:bg-ember hover:text-ink sm:h-16 sm:w-16"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Témoignage suivant"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-bone/15 transition-colors duration-300 hover:border-ember hover:bg-ember hover:text-ink sm:h-16 sm:w-16"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </Magnetic>
          </div>
        </div>

        <div
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          className="mt-16 grid gap-8 border-t border-bone/10 pt-12 lg:grid-cols-12"
        >
          <div className="flex items-start justify-between lg:col-span-2 lg:flex-col lg:justify-start">
            <span aria-hidden="true" className="font-serif text-[9rem] leading-[0.7] text-ember sm:text-[12rem]">
              &ldquo;
            </span>
            <p className="font-mono text-sm text-smoke lg:mt-6">
              <span className="text-bone">{pad(currentIndex + 1)}</span> / {pad(list.length)}
            </p>
          </div>

          <div className="lg:col-span-10" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure key={current.id} initial="hidden" animate="show" exit="exit">
                <blockquote className="font-serif text-[clamp(1.9rem,3.7vw,3.6rem)] leading-[1.12] text-bone">
                  {current.quote.split(" ").map((word, i) => (
                    <motion.span key={i} custom={i} variants={wordVariants} className="mr-[0.24em] inline-block">
                      {word}
                    </motion.span>
                  ))}
                </blockquote>

                <motion.figcaption
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_EXPO, delay: 0.35 } },
                    exit: { opacity: 0, transition: { duration: 0.2 } },
                  }}
                  className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-bone/10 pt-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-3 text-3xl">
                      {current.avatar}
                    </span>
                    <div>
                      <p className="font-display text-xl font-semibold tracking-tight">{current.name}</p>
                      <p className="text-sm text-smoke">
                        {current.role} • <span className="text-ember">{current.company}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex gap-1" aria-label={`${current.rating} étoiles sur 5`}>
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-ember text-ember" />
                      ))}
                    </div>
                    <span className="rounded-full border border-bone/15 px-3 py-1 text-xs text-bone/80">
                      {current.project}
                    </span>
                  </div>
                </motion.figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 flex gap-2">
          {list.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Témoignage ${idx + 1}`}
              aria-current={currentIndex === idx}
              className="relative h-8 max-w-32 flex-1"
            >
              <span className="absolute inset-x-0 top-1/2 block h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-bone/15">
                {idx < currentIndex && <span className="absolute inset-0 bg-bone/50" />}
                {idx === currentIndex && (
                  <motion.span
                    key={`${currentIndex}-${paused}-${isModalOpen}`}
                    className="absolute inset-0 origin-left bg-ember"
                    initial={{ scaleX: paused || isModalOpen ? 1 : 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: paused || isModalOpen ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Magnetic strength={0.2}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-3 rounded-full bg-ember py-2 pl-6 pr-2 font-semibold text-ink transition-colors duration-500 hover:bg-bone"
            >
              <RollText>Laisser un avis en ligne</RollText>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:rotate-90">
                <Plus className="h-4 w-4" />
              </span>
            </button>
          </Magnetic>

          <a
            href={whatsappUrl("Bonjour Rosca, je souhaite vous laisser un avis sur votre prestation.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full border border-bone/20 px-6 py-3.5 font-semibold transition-colors duration-300 hover:border-ember hover:text-ember"
          >
            <MessageCircle className="h-4 w-4" />
            <RollText>Avis via WhatsApp</RollText>
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[180] flex items-end justify-center bg-ink/75 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <motion.div
              data-lenis-prevent
              onClick={(event) => event.stopPropagation()}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE_EXPO }}
              className="relative max-h-[92svh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-bone/10 bg-ink-2 p-6 sm:p-10"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Fermer"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-bone/10 transition-colors hover:bg-ember hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>

              {showSuccess ? (
                <div className="py-14 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-ember text-ink">
                    <Check className="h-9 w-9" />
                  </div>
                  <h3 className="mt-6 text-3xl font-bold tracking-[-0.04em]">Merci pour votre avis !</h3>
                  <p className="mt-2 text-smoke">Votre témoignage a été publié avec succès.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="pr-12">
                    <p className={labelClass}>Livre d&apos;or</p>
                    <h3 id="review-title" className="mt-3 text-4xl font-bold tracking-[-0.045em]">
                      Laissez votre <span className="font-serif font-normal italic text-ember">avis</span>
                    </h3>
                    <p className="mt-2 text-sm text-smoke">Partagez votre retour d&apos;expérience sur nos réalisations.</p>
                  </div>

                  <fieldset>
                    <legend className={labelClass}>Votre note (Étoiles)</legend>
                    <div className="mt-3 flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          aria-label={`${star} étoile${star > 1 ? "s" : ""}`}
                          aria-pressed={star <= formRating}
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star
                            className={cn(
                              "h-7 w-7 transition-colors",
                              star <= formRating ? "fill-ember text-ember" : "fill-transparent text-bone/25"
                            )}
                          />
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <label className="block">
                    <span className={labelClass}>Nom &amp; Prénom *</span>
                    <input
                      type="text"
                      required
                      placeholder="ex: Kouassi Marc"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className={fieldClass}
                    />
                  </label>

                  <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>Poste / Rôle</span>
                      <input
                        type="text"
                        placeholder="ex: CEO, Product Manager"
                        value={formRole}
                        onChange={(e) => setFormRole(e.target.value)}
                        className={fieldClass}
                      />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Entreprise</span>
                      <input
                        type="text"
                        placeholder="ex: Tech Connect"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        className={fieldClass}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className={labelClass}>Projet réalisé</span>
                    <input
                      type="text"
                      placeholder="ex: Application Mobile, Site Web E-Commerce"
                      value={formProject}
                      onChange={(e) => setFormProject(e.target.value)}
                      className={fieldClass}
                    />
                  </label>

                  <label className="block">
                    <span className={labelClass}>Votre Témoignage / Avis *</span>
                    <textarea
                      required
                      rows={3}
                      placeholder="Racontez votre expérience et la qualité du travail livré..."
                      value={formQuote}
                      onChange={(e) => setFormQuote(e.target.value)}
                      className={cn(fieldClass, "resize-none")}
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-between rounded-full bg-ember py-2 pl-6 pr-2 font-semibold text-ink transition-colors duration-500 hover:bg-bone disabled:pointer-events-none disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Envoi en cours..." : "Publier mon avis"}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:rotate-[-20deg]">
                      <Send className="h-4 w-4" />
                    </span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
