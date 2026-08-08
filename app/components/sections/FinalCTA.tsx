import { MessageCircle, Mail } from "lucide-react";

export default function FinalCTA() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const waMessage = encodeURIComponent("Bonjour, j'ai un projet à discuter.");

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f7f0ea] via-[#eb9c7f] to-[#c74221] px-8 py-14 text-center shadow-[0_40px_120px_-45px_rgba(199,66,33,0.5)] sm:px-16 sm:py-20">
        {/* Motif diagonal en fond */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0, rgba(255,255,255,0.35) 1px, transparent 1px, transparent 14px)",
          }}
        />

        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-[3.8rem]">
            Un projet à développer ?
            <br />
            Une application à <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-white font-semibold">concrétiser</span> ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Discutons de votre projet web ou mobile. Je réponds en moins de 24h avec une proposition claire et rapide.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href={`https://wa.me/${phone}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#D9491F] shadow-lg shadow-[#D9491F]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#fff0eb]"
            >
              <MessageCircle className="h-4 w-4" />
              Discuter sur WhatsApp
            </a>
            <a
              href="mailto:contact@tondomaine.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white transition duration-200 hover:border-white/80 hover:bg-white/20"
            >
              <Mail className="h-4 w-4 text-white" />
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
