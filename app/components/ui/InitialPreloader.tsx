"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialPreloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check if already loaded in this session
    const hasLoaded = sessionStorage.getItem("portfolio_intro_loaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Fast counter ticker (total duration ~1.5s)
    const duration = 1400;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextCount = Math.min(100, Math.floor((currentStep / steps) * 100));
      setCount(nextCount);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsLoading(false);
          sessionStorage.setItem("portfolio_intro_loaded", "true");
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-between bg-[#0B0C0E] text-white p-6 md:p-12 overflow-hidden select-none"
        >
          {/* Subtle Ambient Lighting */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D9491F]/20 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Background Technical Grid */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: '28px 28px'
            }}
          />

          {/* Top Header info */}
          <div className="w-full flex justify-between items-center z-10 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D9491F] animate-ping" />
              <span className="text-zinc-200 font-semibold tracking-wider">ROSCA.DEV</span>
            </div>
            <span className="hidden sm:inline-block text-zinc-500">FULLSTACK DEVELOPER</span>
            <span className="text-zinc-400 font-mono">CONGO, BZZ</span>
          </div>

          {/* Center Title & Counter */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center max-w-xl">
            
            {/* Glowing Logo Mark */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D9491F] to-orange-600 p-[1px] mb-8 shadow-[0_0_40px_rgba(217,73,31,0.4)]"
            >
              <div className="w-full h-full bg-[#0F1012] rounded-[15px] flex items-center justify-center font-extrabold text-2xl text-[#D9491F]">
                MB
              </div>
            </motion.div>

            {/* Subtitle / Quote */}
            <p className="text-xs md:text-sm font-mono tracking-widest text-zinc-400 uppercase mb-4">
              {count < 100 ? "Création d'expériences numériques" : "Bienvenue sur le Portfolio"}
            </p>

            {/* Giant Smooth Digital Counter */}
            <div className="font-mono text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 my-2">
              {count.toString().padStart(2, "0")}
              <span className="text-2xl md:text-4xl text-[#D9491F] font-bold tracking-normal ml-1">%</span>
            </div>

            {/* Dynamic Progress Line */}
            <div className="w-64 md:w-80 h-1 bg-zinc-800 rounded-full overflow-hidden mt-6 relative">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#D9491F] via-orange-500 to-[#FF7A59]"
                style={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {/* Bottom Footer Info */}
          <div className="w-full flex justify-between items-center z-10 text-[11px] font-mono text-zinc-500">
            <span>DESIGN & CODE</span>
            <div className="flex gap-1 items-center">
              <span className="text-zinc-400">CHARGE:</span>
              <span className="text-[#D9491F] font-semibold">{count}%</span>
            </div>
            <span>© {new Date().getFullYear()}</span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
