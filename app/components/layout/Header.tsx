"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/competences", label: "Stack & Compétences" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/temoignage", label: "Témoignages" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pb-2">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-[#D9491F]/15 bg-white/90 px-5 py-3 shadow-[0_12px_40px_-15px_rgba(23,24,26,0.12)] backdrop-blur-xl transition-all">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2 text-lg font-black tracking-tight text-text">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D9491F] text-white shadow-md shadow-[#D9491F]/25 transition-transform duration-300 group-hover:scale-110">
            <Zap className="h-5 w-5 fill-white text-white" />
          </div>
          <span className="text-xl font-extrabold text-text">
            Rosca<span className="text-[#D9491F]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex bg-[#FBE8DD]/40 border border-[#D9491F]/10 rounded-full p-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-all ${
                  isActive
                    ? "active"
                    : "text-muted hover:text-text hover:bg-white/60"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact CTA Button */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#D9491F] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#D9491F]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c43e16] hover:shadow-lg md:inline-flex"
        >
          <Send className="h-3.5 w-3.5" />
          Me contacter
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-text md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5 text-[#D9491F]" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mt-3 rounded-3xl border border-[#D9491F]/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base font-semibold transition-all ${
                      isActive
                        ? "bg-[#D9491F] text-white"
                        : "text-text hover:bg-gray-100"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D9491F] px-6 py-3.5 text-base font-bold text-white shadow-md shadow-[#D9491F]/20"
            >
              <Send className="h-4 w-4" />
              Me contacter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}