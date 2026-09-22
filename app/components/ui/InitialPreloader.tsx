"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { INTRO_EVENT, INTRO_STORAGE_KEY, useIntroAlreadySeen } from "./hooks";
import { useScrollLock } from "./SmoothScroll";

const WORDS = ["Concevoir", "Développer", "Concrétiser"];
const CURTAIN = [0.76, 0, 0.24, 1] as const;

export default function InitialPreloader() {
  const alreadySeen = useIntroAlreadySeen();
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useScrollLock(visible && !alreadySeen);

  useEffect(() => {
    if (document.documentElement.dataset.intro === "seen") return;

    let cancelled = false;
    let exitTimer: number | undefined;

    const finish = async () => {
      // Lift the curtain once the hero photo is decoded so it never pops in — but never wait more than 2s.
      const heroImage = document.querySelector<HTMLImageElement>("img[data-hero-image]");
      if (heroImage && !heroImage.complete) {
        await Promise.race([
          heroImage.decode().catch(() => undefined),
          new Promise((resolve) => window.setTimeout(resolve, 2000)),
        ]);
      }
      if (cancelled) return;

      exitTimer = window.setTimeout(() => {
        try {
          sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
        } catch {
          // Storage can be unavailable (private mode); the intro simply replays next time.
        }
        document.documentElement.dataset.intro = "done";
        window.dispatchEvent(new Event(INTRO_EVENT));
        setVisible(false);
      }, 120);
    };

    const controls = animate(0, 100, {
      duration: 1.4,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => setCount(Math.round(value)),
      onComplete: () => void finish(),
    });

    return () => {
      cancelled = true;
      controls.stop();
      window.clearTimeout(exitTimer);
    };
  }, []);

  if (alreadySeen) return null;

  const wordIndex = count < 34 ? 0 : count < 67 ? 1 : 2;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div key="preloader" data-preloader className="fixed inset-0 z-[300] overflow-hidden" aria-hidden="true">
          <motion.div
            className="absolute inset-0 bg-ember"
            exit={{ y: "-100%", transition: { duration: 1.05, ease: CURTAIN, delay: 0.14 } }}
          />

          <motion.div
            className="absolute inset-0 flex flex-col justify-between bg-ink p-5 text-bone sm:p-10"
            exit={{ y: "-100%", transition: { duration: 0.95, ease: CURTAIN } }}
          >
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-smoke">
              <span className="flex items-center gap-2 text-bone">
                <span className="h-2 w-2 animate-pulse rounded-full bg-ember" />
                Rosca.dev
              </span>
              <span className="hidden sm:inline">Fullstack Developer</span>
              <span>Congo — BZV</span>
            </div>

            <div className="flex flex-1 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={WORDS[wordIndex]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif text-5xl italic text-bone/90 sm:text-7xl md:text-8xl"
                >
                  {WORDS[wordIndex]}
                  <span className="text-ember">.</span>
                </motion.p>
              </AnimatePresence>
            </div>

            <div>
              <div className="flex items-end justify-between gap-6">
                <p className="font-display text-[30vw] font-bold leading-[0.78] tracking-[-0.07em] sm:text-[19vw]">
                  {count.toString().padStart(3, "0")}
                  <span className="align-top text-[0.25em] text-ember">%</span>
                </p>
                <p className="mb-3 hidden max-w-[14rem] text-right font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-smoke md:block">
                  Création d&apos;expériences numériques — Design &amp; Code ©{new Date().getFullYear()}
                </p>
              </div>
              <div className="mt-6 h-px w-full bg-bone/15">
                <div className="h-full bg-ember" style={{ width: `${count}%` }} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
