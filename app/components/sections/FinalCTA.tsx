"use client";

import { Mail, MessageCircle } from "lucide-react";
import Magnetic from "@/app/components/ui/Magnetic";
import { FadeIn, RevealLines } from "@/app/components/ui/Reveal";
import { CONTACT_EMAIL, whatsappUrl } from "@/app/lib/contact";

export default function FinalCTA() {
  const waHref = whatsappUrl("Bonjour Rosca, j'ai un projet web/mobile à vous soumettre.");

  return (
    <section className="relative px-2 py-2 sm:px-4 sm:py-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-ember text-ink sm:rounded-[3rem]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="animate-spin-slow pointer-events-none absolute -right-[18%] -top-[25%] h-[75vw] max-h-[60rem] w-[75vw] max-w-[60rem] text-ink/[0.07]"
        >
          <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
        </svg>

        <div className="container-x relative py-20 sm:py-32">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70">
            <span className="flex items-center gap-3">
              <span className="h-px w-10 bg-ink/40" />
              Demande de devis &amp; Échange
            </span>
            <span>Réponse rapide</span>
          </div>

          <RevealLines
            as="h2"
            className="mt-12 text-[clamp(2.7rem,8.4vw,9.5rem)] font-bold leading-[0.88] tracking-[-0.055em]"
            lines={[
              "Un projet en tête ?",
              <span key="accent">
                Concrétisons-le <span className="font-serif font-normal italic tracking-[-0.02em]">ensemble.</span>
              </span>,
            ]}
          />

          <div className="mt-16 grid items-end gap-12 lg:grid-cols-12">
            <FadeIn className="lg:col-span-6">
              <p className="max-w-md text-lg leading-relaxed text-ink/80">
                Un besoin web, mobile ou une intégration sur-mesure&nbsp;? Je réponds rapidement avec une analyse claire et une
                proposition adaptée à vos objectifs.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-8 inline-flex items-center gap-3 font-display text-xl font-semibold tracking-tight sm:text-2xl"
              >
                <Mail className="h-5 w-5" />
                <span className="link-underline pb-0.5">Envoyer un email</span>
              </a>
            </FadeIn>

            <div className="flex lg:col-span-6 lg:justify-end">
              <Magnetic strength={0.45}>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-44 w-44 flex-col items-center justify-center gap-2 overflow-hidden rounded-full bg-ink text-bone sm:h-56 sm:w-56"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 translate-y-full rounded-full bg-bone transition-transform duration-700 ease-expo group-hover:translate-y-0"
                  />
                  <MessageCircle className="relative h-7 w-7 transition-colors duration-500 group-hover:text-ink" />
                  <span className="relative text-center font-display text-lg font-semibold leading-tight tracking-tight transition-colors duration-500 group-hover:text-ink">
                    Discuter sur
                    <br />
                    WhatsApp
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
