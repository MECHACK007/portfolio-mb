import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/portfolio", label: "Réalisation" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] border border-[#D9491F]/20 bg-[linear-gradient(135deg,#FFF6EE_0%,#FFFDF9_45%,#FFEDE2_100%)] p-6 shadow-[0_40px_120px_-40px_rgba(217,73,31,0.45)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9491F]/15 bg-white/70 px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-[#D9491F] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#D9491F]" />
              Disponible pour vos projets
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-tight text-text sm:text-4xl lg:text-[2.4rem]">
              Construisons quelque chose d&apos;utile, d&apos;élégant et de durable.
            </h3>

            <p className="mt-4 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Développeur fullstack spécialisé dans la création d&apos;expériences web et mobiles modernes,
              rapides et pensées pour convertir.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-[#D9491F]/10 bg-white/70 p-4 text-base font-medium text-text/80 shadow-sm backdrop-blur sm:min-w-[220px] lg:items-end">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 transition-all duration-200 hover:text-[#D9491F]"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#D9491F] transition-transform duration-200 group-hover:scale-125" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#D9491F]/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:text-base">
          <p>© {new Date().getFullYear()} Rosca. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="mailto:contact@rosca.dev" className="transition-colors duration-200 hover:text-[#D9491F]">
              contact@rosca.dev
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-[#D9491F]/60 sm:inline-block" />
            <span>Made with care in Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}