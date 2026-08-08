import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Send, MapPin, Clock, Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact — Rosca",
  description: "Prêt à démarrer votre prochain projet ? Contactez Rosca pour un échange direct et réactif.",
};

export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const waMessage = encodeURIComponent("Bonjour Rosca, je souhaite échanger sur un projet.");

  return (
    <main className="overflow-hidden pt-6">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[2.5rem] border border-[#D9491F]/20 bg-gradient-to-br from-[#FFF8F2] via-white to-[#FBE8DD] p-8 sm:p-12 md:p-16 shadow-xl shadow-[#D9491F]/10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D9491F]">
              <Send className="h-3.5 w-3.5" />
              Contact Direct
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text leading-tight">
              Parlons de votre <span className="framed-accent text-[#D9491F]">prochain projet</span>.
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
              Que vous ayez un cahier des charges précis ou simplement besoin d&apos;un premier conseil technique, contactez-moi. Je vous répondrai en moins de 24 heures.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Email Card */}
            <a
              href="mailto:contact@rosca.dev"
              className="group rounded-3xl border border-[#D9491F]/15 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D9491F]/30 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBE8DD] text-[#D9491F] transition-transform duration-300 group-hover:scale-110">
                  <Mail className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-bold text-text group-hover:text-[#D9491F] transition-colors">
                  Par Email
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Idéal pour envoyer un brief détaillé, des maquettes ou une demande de devis officielle.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between font-mono text-sm font-semibold text-[#D9491F]">
                <span>contact@rosca.dev</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${phone}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-[#D9491F]/15 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D9491F]/30 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FBE8DD] text-[#D9491F] transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-bold text-text group-hover:text-[#D9491F] transition-colors">
                  WhatsApp Direct
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Pour un échange rapide, direct et instantané sans friction administrative.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between font-mono text-sm font-semibold text-[#D9491F]">
                <span>Discuter instantanément</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs sm:text-sm text-muted">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#D9491F]" />
              <span>Temps de réponse : &lt; 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#D9491F]" />
              <span>Disponible en Remote &amp; Hybride</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

