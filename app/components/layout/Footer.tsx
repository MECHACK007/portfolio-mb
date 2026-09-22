"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useRef, type ReactNode } from "react";
import RollText from "@/app/components/ui/RollText";
import SectionLabel from "@/app/components/ui/SectionLabel";
import { useLenis } from "@/app/components/ui/SmoothScroll";
import { useLocalTime } from "@/app/components/ui/hooks";
import { CONTACT_EMAIL, whatsappUrl } from "@/app/lib/contact";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/competences", label: "Stack & Compétences" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/temoignage", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: whatsappUrl("Bonjour Rosca, je vous contacte depuis votre portfolio."), label: "WhatsApp" },
];

export default function Footer() {
  const time = useLocalTime();
  const lenisRef = useLenis();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const wordY = useTransform(scrollYProgress, [0.3, 1], ["60%", "0%"]);

  const scrollToTop = () => {
    const lenis = lenisRef?.current;
    if (lenis) lenis.scrollTo(0, { duration: 1.8 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink pt-24 sm:pt-32">
      <div className="container-x">
        <div className="grid gap-16 border-t border-bone/10 pt-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionLabel index="∞">Restons en contact</SectionLabel>
            <h2 className="mt-8 text-[clamp(2.2rem,4.6vw,4.4rem)] font-bold leading-[0.95] tracking-[-0.045em]">
              Construisons des produits{" "}
              <span className="font-serif font-normal italic tracking-[-0.02em] text-ember">utiles, élégants</span> et
              performants.
            </h2>
            <p className="mt-6 max-w-lg text-smoke">
              Développeur Fullstack en Next.js, React, APIs REST et Flutter mobile. Disponible pour des missions
              freelance et des collaborations en consultance.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group mt-10 inline-flex max-w-full items-center gap-4 font-display text-lg font-semibold tracking-tight sm:text-3xl"
            >
              <span className="link-underline truncate">{CONTACT_EMAIL}</span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember text-ink transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6 lg:pl-12">
            <FooterColumn title="Navigation">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="group w-fit text-bone/80 transition-colors hover:text-bone">
                  <RollText>{link.label}</RollText>
                </Link>
              ))}
            </FooterColumn>

            <FooterColumn title="Réseaux">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-1.5 text-bone/80 transition-colors hover:text-bone"
                >
                  <RollText>{social.label}</RollText>
                  <ArrowUpRight className="h-3.5 w-3.5 text-ember" />
                </a>
              ))}
            </FooterColumn>

            <FooterColumn title="Infos">
              <span className="text-bone/80">Brazzaville, Congo</span>
              <span className="text-bone/80">
                Heure locale <span className="font-mono text-ember">{time}</span>
              </span>
              <span className="text-bone/80">Remote &amp; Hybride</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="group mt-3 flex w-fit items-center gap-2 rounded-full border border-bone/15 px-4 py-2 text-sm transition-colors hover:border-ember hover:text-ember"
              >
                Haut de page
                <ArrowUp className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5" />
              </button>
            </FooterColumn>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="relative mt-16 select-none overflow-hidden">
        <motion.p
          style={{ y: wordY }}
          className="text-center font-display text-[25.5vw] font-bold leading-[0.8] tracking-[-0.075em]"
        >
          <span className="bg-linear-to-b from-bone via-bone/80 to-bone/5 bg-clip-text text-transparent">Rosca</span>
          <span className="text-ember">.</span>
        </motion.p>
      </div>

      <div className="container-x relative flex flex-col gap-2 border-t border-bone/10 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-smoke sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Rosca — Tous droits réservés.</p>
        <p>Conçu avec Next.js 16 &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <h3 className="mb-2 font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-smoke">{title}</h3>
      {children}
    </div>
  );
}
