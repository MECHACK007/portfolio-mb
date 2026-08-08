"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const DEFAULT_MESSAGE = "Bonjour, je vous contacte depuis votre portfolio.";

function buildWhatsAppUrl(number: string): string {
  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);

  if (!number.trim()) {
    return `https://wa.me/?text=${encodedMessage}`;
  }

  return `https://wa.me/${number}?text=${encodedMessage}`;
}

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const whatsappHref = useMemo(() => {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? "";
    return buildWhatsAppUrl(number);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 1000);

    if (typeof window.matchMedia === "function") {
      const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      const updateDesktopState = () => setIsDesktop(mediaQuery.matches);

      updateDesktopState();
      mediaQuery.addEventListener?.("change", updateDesktopState);

      return () => {
        window.clearTimeout(timer);
        mediaQuery.removeEventListener?.("change", updateDesktopState);
      };
    }

    return () => window.clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setIsPressed(true);
    window.setTimeout(() => {
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
      setIsPressed(false);
    }, 140);
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
    >
      <div className="relative flex items-center justify-center">
        {!prefersReducedMotion && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full border border-[#25D366]/35"
              animate={{ scale: [0.9, 1.95], opacity: [0.55, 0] }}
              transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full border border-[#25D366]/30"
              animate={{ scale: [0.8, 1.8], opacity: [0.4, 0] }}
              transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeOut", delay: 1.35 }}
            />
          </>
        )}

        <motion.button
          type="button"
          aria-label="Contacter via WhatsApp"
          onClick={handleClick}
          onMouseEnter={() => isDesktop && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          whileHover={isDesktop && !prefersReducedMotion ? { scale: 1.07, y: -2 } : undefined}
          whileTap={{ scale: 0.92 }}
          animate={isPressed ? { scale: 0.94 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
          className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.35)] outline-none transition-colors duration-200 hover:bg-[#1fb95b] focus-visible:ring-4 focus-visible:ring-[#25D366]/25"
        >
          <MessageCircle className="h-7 w-7" aria-hidden="true" />
        </motion.button>

        <AnimatePresence>
          {isDesktop && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-none absolute right-[calc(100%+0.9rem)] top-1/2 -translate-y-1/2"
            >
              <div className="relative rounded-full border border-[#D9491F]/10 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                Discutons de votre projet !
                <span className="absolute left-full top-1/2 h-0 w-0 -translate-y-1/2 border-y-[6px] border-l-[8px] border-y-transparent border-l-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
