"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useIntroReady, useMediaQuery } from "@/app/components/ui/hooks";
import { whatsappUrl } from "@/app/lib/contact";

const DEFAULT_MESSAGE = "Bonjour, je vous contacte depuis votre portfolio.";

export default function WhatsAppButton() {
  const ready = useIntroReady();
  const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
  const prefersReducedMotion = useReducedMotion();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-[100] sm:bottom-6 sm:right-6"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={ready ? { opacity: 1, scale: 1, y: 0 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.4 }}
    >
      <div className="relative flex items-center justify-center">
        {!prefersReducedMotion && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full border border-[#25D366]/40"
              animate={{ scale: [0.9, 1.9], opacity: [0.55, 0] }}
              transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-[#25D366]/30"
              animate={{ scale: [0.8, 1.75], opacity: [0.4, 0] }}
              transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeOut", delay: 1.35 }}
            />
          </>
        )}

        <motion.a
          href={whatsappUrl(DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter via WhatsApp"
          onMouseEnter={() => isDesktop && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          whileHover={isDesktop && !prefersReducedMotion ? { scale: 1.08, y: -2 } : undefined}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-[0_12px_35px_rgba(37,211,102,0.35)] sm:h-16 sm:w-16"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
        </motion.a>

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-none absolute right-[calc(100%+0.9rem)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-bone px-4 py-2 text-sm font-medium text-ink shadow-xl"
            >
              Discutons de votre projet !
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
