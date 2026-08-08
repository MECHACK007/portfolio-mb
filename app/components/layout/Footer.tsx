import Link from "next/link";
import { Zap, Mail, Globe, Code2 } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/competences", label: "Stack & Compétences" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/temoignage", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#D9491F]/20 bg-gradient-to-br from-[#FFF8F2] via-white to-[#FBE8DD] p-8 sm:p-12 shadow-xl shadow-[#D9491F]/10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand & Tagline */}
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-text">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D9491F] text-white">
                <Zap className="h-5 w-5 fill-white text-white" />
              </div>
              <span>Rosca<span className="text-[#D9491F]">.</span></span>
            </Link>

            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-text sm:text-3xl">
              Construisons des produits utiles, élégants et performants.
            </h3>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
              Développeur Fullstack spécialisé en Next.js, React, APIs REST et applications mobiles Flutter. Disponible pour projets en freelance et consultance.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {/* GitHub SVG */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9491F]/15 bg-white text-text transition-all hover:bg-[#D9491F] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9491F]/15 bg-white text-text transition-all hover:bg-[#D9491F] hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@rosca.dev"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9491F]/15 bg-white text-text transition-all hover:bg-[#D9491F] hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 rounded-2xl border border-[#D9491F]/10 bg-white/80 p-6 shadow-sm sm:min-w-[220px]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9491F]">Navigation</h4>
            <div className="flex flex-col gap-2.5 mt-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text/80 transition-colors hover:text-[#D9491F]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/5 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rosca — Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>Conçu avec Next.js 16 &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
