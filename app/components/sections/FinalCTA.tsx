"use client";

import { MessageCircle, Mail, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const waMessage = encodeURIComponent("Bonjour Rosca, j'ai un projet web/mobile à vous soumettre.");

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#D9491F] via-[#E85D35] to-[#992506] px-8 py-16 text-center shadow-[0_30px_90px_-25px_rgba(217,73,31,0.5)] sm:px-16 sm:py-20"
      >
        {/* Decorative Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient Blur circles */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            Demande de devis &amp; Echange
          </div>

          <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-[3.5rem] tracking-tight">
            Un projet en tête ?<br />
            <span className="underline decoration-white/30 underline-offset-8">Concrétisons-le</span> ensemble.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Un besoin web, mobile ou une intégration sur-mesure ? Je réponds rapidement avec une analyse claire et une proposition adaptée à vos objectifs.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href={`https://wa.me/${phone}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-base font-bold text-[#D9491F] shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF7F0] hover:shadow-2xl"
            >
              <MessageCircle className="h-5 w-5 text-[#D9491F]" />
              Discuter sur WhatsApp
            </a>
            <a
              href="mailto:contact@rosca.dev"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border-2 border-white/40 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/20"
            >
              <Mail className="h-5 w-5 text-white" />
              Envoyer un email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

