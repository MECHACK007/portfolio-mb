"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Cpu, Sparkles, Code2, ShieldCheck } from "lucide-react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statusMessages = [
    "Initialisation du système...",
    "Chargement des modules Next.js...",
    "Optimisation des animations...",
    "Rendu de l'expérience utilisateur...",
    "Système prêt !"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 12) + 5;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 25) setStatusIndex(0);
    else if (progress < 50) setStatusIndex(1);
    else if (progress < 75) setStatusIndex(2);
    else if (progress < 95) setStatusIndex(3);
    else setStatusIndex(4);
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0D0E] text-white overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D9491F]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none animate-float" />
      
      {/* Futuristic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top HUD Brackets */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-3 text-xs font-mono text-zinc-500 tracking-wider">
        <span className="w-2 h-2 rounded-full bg-[#D9491F] animate-ping" />
        <span className="text-zinc-300 font-semibold">[ PORTFOLIO.SYS v2.5 ]</span>
      </div>

      <div className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2 text-xs font-mono text-zinc-500">
        <Cpu className="w-3.5 h-3.5 text-[#D9491F]" />
        <span>STATUS: <span className="text-emerald-400 font-semibold">CHARGEMENT</span></span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        
        {/* Animated Central Badge / Orbit Rings */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mb-8">
          
          {/* Outer Rotating Dash Ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-dashed border-[#D9491F]/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          {/* Reverse Orbit Ring */}
          <motion.div 
            className="absolute inset-2 rounded-full border border-orange-500/20 border-t-[#D9491F] border-r-[#D9491F]"
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Glowing Ring */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#D9491F]/20 via-zinc-900 to-black p-[2px] shadow-[0_0_30px_rgba(217,73,31,0.3)]">
            <div className="w-full h-full bg-[#0F1012] rounded-full flex items-center justify-center relative overflow-hidden">
              {/* Laser Scan Line */}
              <motion.div 
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#D9491F] to-transparent"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="flex flex-col items-center justify-center z-10">
                <Code2 className="w-8 h-8 text-[#D9491F] mb-1 animate-pulse" />
                <span className="font-mono text-xs font-bold tracking-widest text-zinc-200">MB.DEV</span>
              </div>
            </div>
          </div>

          {/* Orbiting Sparkle Satellite */}
          <motion.div 
            className="absolute -top-1 left-1/2 -translate-x-1/2 text-[#D9491F]"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50% 88px" }}
          >
            <Sparkles className="w-4 h-4 fill-[#D9491F] text-[#D9491F]" />
          </motion.div>
        </div>

        {/* Counter & Percentage */}
        <div className="flex items-baseline justify-center gap-1 mb-3">
          <span className="font-mono text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-[#D9491F] bg-clip-text text-transparent">
            {progress}
          </span>
          <span className="font-mono text-xl font-bold text-[#D9491F]">%</span>
        </div>

        {/* Custom Glowing Progress Bar */}
        <div className="w-full bg-zinc-900/80 p-1 rounded-full border border-zinc-800 backdrop-blur-md mb-6 shadow-inner">
          <div className="relative h-2 w-full bg-zinc-950 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#D9491F] via-orange-500 to-[#FF7A59] rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              {/* Glowing Head Indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] rounded-full shadow-[0_0_10px_#fff]" />
            </motion.div>
          </div>
        </div>

        {/* Dynamic Terminal Status Line */}
        <div className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-3 backdrop-blur-sm flex items-center gap-3">
          <Terminal className="w-4 h-4 text-[#D9491F] shrink-0" />
          <AnimatePresence mode="wait">
            <motion.p 
              key={statusIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-xs font-mono text-zinc-300 truncate"
            >
              {statusMessages[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>

      {/* Bottom Footer Brackets */}
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[10px] font-mono text-zinc-600 flex items-center gap-2">
        <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
        <span>SECURE HANDSHAKE COMPLETED</span>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-[10px] font-mono text-zinc-600">
        LATENCY: 8ms
      </div>
    </div>
  );
}
