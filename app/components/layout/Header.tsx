"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Send } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/competences", label: "Stack & Compétences" },
  { href: "/portfolio", label: "Réalisation" },
  { href: "/temoignage", label: "Témoignages" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-transparent px-4 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-l-full rounded-r-full bg-white/95 px-4 py-3 shadow-[0_24px_80px_-40px_rgba(23,24,26,0.25)] backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-text">
          <Zap className="h-5 w-5 text-accent" />
          Rosca.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-base text-muted transition-colors ${isActive ? "active" : "hover:text-text"}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#D9491F] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#D9491F]/20 transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          <Send className="h-4 w-4" />
          Me contacter
        </Link>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mt-4 rounded-3xl border border-muted/20 bg-white/95 px-6 py-6 shadow-[0_24px_80px_-40px_rgba(23,24,26,0.12)] md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`nav-link text-text text-lg ${isActive ? "active" : ""}`}
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
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D9491F] px-6 py-3 text-base font-semibold text-white"
          >
            <Send className="h-4 w-4" />
            Me contacter
          </Link>
        </nav>
      )}
    </header>
  );
}