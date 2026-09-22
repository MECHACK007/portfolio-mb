"use client";

import { useCallback, useSyncExternalStore } from "react";

export const INTRO_STORAGE_KEY = "portfolio_intro_loaded";
export const INTRO_EVENT = "portfolio:intro-done";

function subscribeIntro(callback: () => void) {
  window.addEventListener(INTRO_EVENT, callback);
  return () => window.removeEventListener(INTRO_EVENT, callback);
}

function getIntroSnapshot() {
  const state = document.documentElement.dataset.intro;
  return state === "seen" || state === "done";
}

/** True once the first-visit preloader is gone (or immediately for returning visitors). */
export function useIntroReady() {
  return useSyncExternalStore(subscribeIntro, getIntroSnapshot, () => false);
}

function noopSubscribe() {
  return () => {};
}

/** True when the visitor already saw the intro during this session. */
export function useIntroAlreadySeen() {
  return useSyncExternalStore(
    noopSubscribe,
    () => document.documentElement.dataset.intro === "seen",
    () => false
  );
}

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  );
}

const clockFormatter = new Intl.DateTimeFormat("fr-FR", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Africa/Brazzaville",
});

function subscribeClock(callback: () => void) {
  const id = window.setInterval(callback, 10_000);
  return () => window.clearInterval(id);
}

/** Live local time in Brazzaville, e.g. "14:32". */
export function useLocalTime() {
  return useSyncExternalStore(
    subscribeClock,
    () => clockFormatter.format(new Date()),
    () => "--:--"
  );
}
