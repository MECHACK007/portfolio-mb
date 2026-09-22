import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import ContactForm from "@/app/components/contact/ContactForm";
import PageHero from "@/app/components/ui/PageHero";
import { FadeIn } from "@/app/components/ui/Reveal";
import { CONTACT_EMAIL, whatsappUrl } from "@/app/lib/contact";

export const metadata = {
  title: "Contact — Rosca",
  description: "Prêt à démarrer votre prochain projet ? Contactez Rosca pour un échange direct et réactif.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Contact Direct"
        crumb="Contact"
        lines={[
          "Parlons de votre",
          <span key="accent" className="font-serif font-normal italic tracking-[-0.02em] text-ember">
            prochain projet.
          </span>,
        ]}
        description="Que vous ayez un cahier des charges précis ou simplement besoin d'un premier conseil technique, contactez-moi. Je vous répondrai en moins de 24 heures."
        highlights={["Temps de réponse : < 24h", "Disponible en Remote & Hybride"]}
      />

      <section className="container-x pb-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FadeIn>
            <ContactCard
              href={`mailto:${CONTACT_EMAIL}`}
              index="01"
              icon={<Mail className="h-6 w-6" />}
              title="Par Email"
              description="Idéal pour envoyer un brief détaillé, des maquettes ou une demande de devis officielle."
              value={CONTACT_EMAIL}
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <ContactCard
              href={whatsappUrl("Bonjour Rosca, je souhaite échanger sur un projet.")}
              external
              index="02"
              icon={<MessageCircle className="h-6 w-6" />}
              title="WhatsApp Direct"
              description="Pour un échange rapide, direct et instantané sans friction administrative."
              value="Discuter instantanément"
            />
          </FadeIn>
        </div>
      </section>

      <section className="container-x pb-24 pt-4 sm:pb-36">
        <ContactForm />
      </section>
    </>
  );
}

function ContactCard({
  href,
  external,
  index,
  icon,
  title,
  description,
  value,
}: {
  href: string;
  external?: boolean;
  index: string;
  icon: ReactNode;
  title: string;
  description: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-bone/10 bg-ink-2 p-7 sm:p-10"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-bottom scale-y-0 bg-ember transition-transform duration-700 ease-expo group-hover:scale-y-100"
      />
      <div className="relative flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-bone/15 transition-colors duration-500 group-hover:border-ink/25 group-hover:text-ink">
          {icon}
        </span>
        <span className="font-mono text-xs text-smoke transition-colors duration-500 group-hover:text-ink/60">{index}</span>
      </div>
      <div className="relative">
        <h2 className="text-[clamp(2.4rem,4.5vw,4rem)] font-bold leading-none tracking-[-0.05em] transition-colors duration-500 group-hover:text-ink">
          {title}
        </h2>
        <p className="mt-4 max-w-sm text-smoke transition-colors duration-500 group-hover:text-ink/75">{description}</p>
        <div className="mt-8 flex items-center justify-between gap-4 border-t border-bone/10 pt-5 transition-colors duration-500 group-hover:border-ink/20">
          <span className="truncate font-mono text-sm transition-colors duration-500 group-hover:text-ink">{value}</span>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember text-ink transition-all duration-500 group-hover:rotate-45 group-hover:bg-ink group-hover:text-bone">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </a>
  );
}
