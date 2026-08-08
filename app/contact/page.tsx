import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Send } from "lucide-react";

export const metadata = {
  title: "Contact — Rosca",
  description: "Prêt à démarrer votre prochain projet ? Contactez-moi pour un premier échange simple et utile.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="rounded-[2rem] border border-[#D9491F]/15 bg-[linear-gradient(135deg,#FFF7F0_0%,#FFFDF9_45%,#FFF2E7_100%)] p-8 shadow-[0_35px_100px_-45px_rgba(217,73,31,0.35)] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/15 bg-white/70 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9491F] backdrop-blur">
              <Send className="h-4 w-4" />
              Contact
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-text sm:text-5xl">
              Parlons de votre prochain projet.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
              Que vous ayez une idée claire ou simplement besoin d&apos;un avis, je suis là pour aider à transformer votre besoin en solution fiable.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <a
              href="mailto:contact@rosca.dev"
              className="rounded-3xl border border-[#D9491F]/10 bg-white/80 p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9491F]/10 text-[#D9491F]">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-text">Email</h2>
              <p className="mt-2 text-sm leading-7 text-muted">contact@rosca.dev</p>
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-[#D9491F]/10 bg-white/80 p-6 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D9491F]/10 text-[#D9491F]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-text">WhatsApp</h2>
              <p className="mt-2 text-sm leading-7 text-muted">Un échange rapide, direct et sans friction.</p>
            </a>
          </div>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D9491F] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Revenir à l&apos;accueil
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
