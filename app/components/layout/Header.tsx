"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/app/lib/cn";
import Magnetic from "@/app/components/ui/Magnetic";
import RollText from "@/app/components/ui/RollText";
import { useScrollLock } from "@/app/components/ui/SmoothScroll";
import { useIntroReady, useLocalTime } from "@/app/components/ui/hooks";
import { CONTACT_EMAIL } from "@/app/lib/contact";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/competences", label: "Stack & Compétences" },
  { href: "/portfolio", label: "Réalisations" },
  { href: "/temoignage", label: "Témoignages" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const introReady = useIntroReady();
  const time = useLocalTime();
  const { scrollY } = useScroll();

  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useScrollLock(open);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    // Smooth-scroll libraries re-emit the same position; only a real move decides visibility.
    if (Math.abs(latest - previous) < 2) return;
    setHidden(latest > previous && latest > 280);
  });

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        initial={{ y: "-130%" }}
        animate={introReady ? { y: hidden && !open ? "-130%" : "0%" } : undefined}
        transition={{ duration: 0.8, ease: EASE }}
        className="fixed inset-x-0 top-0 z-[120] px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <div
          className={cn(
            "mx-auto flex max-w-[92rem] items-center justify-between gap-4 rounded-full border py-2 pl-5 pr-2 transition-[background-color,border-color] duration-500",
            scrolled || open ? "border-bone/10 bg-ink/75 backdrop-blur-xl" : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" aria-label="Rosca — Accueil" className="group flex items-center gap-2.5">
            <span className="font-display text-2xl font-bold tracking-[-0.05em]">Rosca</span>
            <span className="h-2 w-2 rounded-full bg-ember transition-transform duration-500 group-hover:scale-[1.8]" />
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-smoke sm:inline">
              MB©{new Date().getFullYear().toString().slice(2)}
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-bone" : "text-smoke hover:text-bone"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-ember transition-all duration-500",
                      active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    )}
                  />
                  <RollText>{link.label}</RollText>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.2} className="hidden sm:inline-block">
              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-full bg-ember py-2 pl-5 pr-2 text-sm font-semibold text-ink transition-colors duration-500 hover:bg-bone"
              >
                <RollText>Me contacter</RollText>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 bg-ink-2 lg:hidden"
            >
              <span
                className={cn(
                  "absolute h-px w-5 bg-bone transition-transform duration-500 ease-expo",
                  open ? "rotate-45" : "-translate-y-[4px]"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-5 bg-bone transition-transform duration-500 ease-expo",
                  open ? "-rotate-45" : "translate-y-[4px]"
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            data-lenis-prevent
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[110] flex flex-col overflow-y-auto bg-ink px-5 pb-8 pt-28 lg:hidden"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-ember/25 blur-[120px]" />

            <nav aria-label="Menu mobile" className="relative flex flex-1 flex-col justify-center">
              {[...navLinks, { href: "/contact", label: "Contact" }].map((link, index) => (
                <div key={link.href} className="overflow-hidden border-b border-bone/10">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.2 + index * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-baseline justify-between gap-4 py-4 font-display text-[clamp(2rem,9vw,4.5rem)] font-bold leading-none tracking-[-0.045em]",
                        isActive(link.href) ? "text-ember" : "text-bone"
                      )}
                    >
                      <span>{link.label}</span>
                      <span className="font-mono text-xs font-normal tracking-normal text-smoke">0{index + 1}</span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
              exit={{ opacity: 0 }}
              className="relative mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-smoke"
            >
              <a href={`mailto:${CONTACT_EMAIL}`} className="normal-case tracking-normal text-bone">
                {CONTACT_EMAIL}
              </a>
              <span>Brazzaville — {time}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
