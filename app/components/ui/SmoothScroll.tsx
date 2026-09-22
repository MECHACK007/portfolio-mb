"use client";

import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useRef, type ReactNode, type RefObject } from "react";

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: true,
    });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Drop any in-flight smooth scroll when the route changes.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    lenis.stop();
    lenis.start();
  }, [pathname]);

  return (
    <LenisContext.Provider value={lenisRef}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

/** Freezes page scroll (native + Lenis) while `locked` is true. */
export function useScrollLock(locked: boolean) {
  const lenisRef = useContext(LenisContext);

  useEffect(() => {
    if (!locked) return;
    const lenis = lenisRef?.current;
    const previous = document.body.style.overflow;

    lenis?.stop();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
      lenis?.start();
    };
  }, [locked, lenisRef]);
}
