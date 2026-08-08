"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

export default function TechStackTerminal(): React.JSX.Element {
  const [typed, setTyped] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);
  const fullCommand = "stack --list --all";
  const typingSpeed = 35; // ms per character
  const hasTriggered = useRef(false);

  useEffect(() => {
    return () => {
      // cleanup if unmounted
      hasTriggered.current = true;
    };
  }, []);

  function startTyping() {
    if (hasTriggered.current) return;
    hasTriggered.current = true;
    setTyped("");
    setTypingFinished(false);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(fullCommand.slice(0, i));
      if (i >= fullCommand.length) {
        clearInterval(id);
        setTypingFinished(true);
      }
    }, typingSpeed);
  }

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const rowVariants: Variants = {
    hidden: { opacity: 0, y: -6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-11 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9491F]/18 bg-[#FBE8DD] px-8 py-3 text-base font-semibold text-[#D9491F] shadow-sm">
          ◆ STACK TECHNIQUE
        </span>
        <h2 className="text-4xl font-extrabold text-text md:text-5xl">
          Technologies <span className="rounded-full bg-[#FBE8DD] px-4 py-1 text-[#D9491F] font-semibold">maîtrisées</span>
        </h2>
      </div>

      <div className="relative">
        {/* Ambient halo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-8 -z-10 mx-auto h-[420px] w-[95%] rounded-3xl blur-3xl opacity-40"
          style={{ background: "radial-gradient(closest-side, rgba(217,73,31,0.12), transparent 40%)" }}
        />

        <div className="overflow-hidden rounded-2xl border border-black/5 shadow-2xl shadow-black/10 relative">
          {/* Barre de titre with pulsating dots */}
          <div className="flex items-center gap-2 bg-[#F2EFE9] px-5 py-3.5">
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]"
              animate={{ scale: [1, 1.12, 1], opacity: [1, 0.85, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]"
              animate={{ scale: [1, 1.08, 1], opacity: [1, 0.9, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.span
              className="h-2.5 w-2.5 rounded-full bg-[#28C840]"
              animate={{ scale: [1, 1.06, 1], opacity: [1, 0.92, 1] }}
              transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <span className="mx-auto -translate-x-2 text-xs text-[#8A8680]">rosca@portfolio — stack</span>
          </div>

          {/* Corps terminal */}
          <div className="relative bg-[#1A1B1F] px-8 py-8 font-mono text-base leading-loose text-[#F4F1EC] overflow-hidden">
            {/* Scanline */}
            <motion.div
              aria-hidden
              className="absolute left-0 top-0 h-2 w-full bg-gradient-to-b from-transparent via-white/3 to-transparent opacity-5 blur-sm"
              animate={{ y: [ -200, 200 ] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "linear" }}
              style={{ pointerEvents: "none" }}
            />

            <motion.div
              className="relative z-10"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              onViewportEnter={() => startTyping()}
              variants={containerVariants}
            >
              <motion.p className="flex items-center" variants={rowVariants}>
                <span className="text-accent mr-2">rosca</span>
                <span className="text-muted mr-2">@portfolio:~$</span>
                <span className="text-[#F4F1EC]">
                  {typed}
                  <span
                    className={`inline-block h-4 w-2 translate-y-0.5 ml-1 bg-accent ${
                      typingFinished ? "animate-blink" : ""
                    }`}
                    style={{ verticalAlign: "middle" }}
                  />
                </span>
              </motion.p>

              <motion.div className="mt-4" variants={rowVariants}>
                <motion.p className="mt-3.5 text-base text-[#6B7280]" variants={rowVariants}>
                  # Frontend
                </motion.p>
                <motion.p className="text-accent flex flex-wrap gap-2" variants={rowVariants}>
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-block px-1 transition-shadow duration-200 hover:underline hover:drop-shadow-[0_0_12px_rgba(217,73,31,0.25)]"
                    >
                      {t}
                    </span>
                  ))}
                </motion.p>
              </motion.div>

              <motion.div className="mt-3.5" variants={rowVariants}>
                <motion.p className="text-base text-[#6B7280]" variants={rowVariants}>
                  # Backend
                </motion.p>
                <motion.p className="text-accent flex flex-wrap gap-2" variants={rowVariants}>
                  {[
                    "Node.js",
                    "REST API",
                    "Laravel",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-block px-1 transition-shadow duration-200 hover:underline hover:drop-shadow-[0_0_12px_rgba(217,73,31,0.25)]"
                    >
                      {t}
                    </span>
                  ))}
                </motion.p>
              </motion.div>

              <motion.div className="mt-3.5" variants={rowVariants}>
                <motion.p className="text-base text-[#6B7280]" variants={rowVariants}>
                  # Mobile
                </motion.p>
                <motion.p className="text-accent flex flex-wrap gap-2" variants={rowVariants}>
                  {[
                    "Flutter",
                    "Kotlin",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-block px-1 transition-shadow duration-200 hover:underline hover:drop-shadow-[0_0_12px_rgba(217,73,31,0.25)]"
                    >
                      {t}
                    </span>
                  ))}
                </motion.p>
              </motion.div>

              <motion.div className="mt-3.5" variants={rowVariants}>
                <motion.p className="text-base text-[#6B7280]" variants={rowVariants}>
                  # Data &amp; Infra
                </motion.p>
                <motion.p className="text-accent flex flex-wrap gap-2" variants={rowVariants}>
                  {[
                    "MySQL",
                    "Docker",
                    "Git",
                  ].map((t) => (
                    <span
                      key={t}
                      className="inline-block px-1 transition-shadow duration-200 hover:underline hover:drop-shadow-[0_0_12px_rgba(217,73,31,0.25)]"
                    >
                      {t}
                    </span>
                  ))}
                </motion.p>
              </motion.div>

              <motion.p className="mt-4" variants={rowVariants}>
                <span className="text-accent">rosca</span>
                <span className="text-muted">@portfolio:~$</span>{" "}
                <span className="inline-block h-4 w-2 translate-y-0.5 bg-accent" />
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
