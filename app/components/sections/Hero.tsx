import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Folder, Shield } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 overflow-visible px-6 py-24 md:flex-row md:justify-between">
            {/* --- Motifs de fond --- */}
            <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

            {/* --- Texte --- */}
            <div className="flex max-w-xl flex-col items-center gap-6 text-center md:items-start md:text-left">
                <span className="flex items-center gap-2 rounded-full border border-accent/30 bg-surface px-4 py-1.5 text-sm text-muted">
                    <Sparkles className="h-3.5 w-3.5 text-accent animate-blink" />
                    Disponible pour de nouveaux projets
                </span>

                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-text">
                    Je conçois, je développe,
                    <br />
                    <span className="text-accent framed-accent">je concrétise.</span>
                </h1>

                <p className="text-muted text-base md:text-xl leading-relaxed">
                    Développeur fullstack — je construis des applications rapides,
                    solides et pensées pour durer.
                </p>

                {/* experience text moved to card right of image on md+ */}
            </div>

            {/* --- Photo --- */}
            <div className="relative h-64 w-64 shrink-0 md:h-80 md:w-80">
                <div className="absolute inset-0 rounded-full bg-accent/30 blur-2xl" />
                <Image
                    src="/images/bongo_concentre.png"
                    alt="Rosca — Développeur Web & Mobile"
                    fill
                    className="relative rounded-full border-2 border-accent/40 object-cover"
                    priority
                />

                {/* experience moved to About section */}
            </div>

            {/* Buttons fixed at bottom center of Hero */}
            <div className="absolute left-0 right-0 bottom-6 flex justify-center gap-4 z-10">
                <Link
                    href="/portfolio"
                    className="btn-with-folder flex items-center justify-center gap-2 rounded-full bg-[#D9491F] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#D9491F]/20 transition-transform hover:-translate-y-0.5"
                >
                    <Folder className="h-4 w-4 folder-icon text-white" />
                    Voir mes réalisations
                </Link>
                <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-full btn-secondary-bg px-6 py-3 text-base font-semibold text-text"
                >
                    Discutons
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
            </div>
        </section>
    );
}
