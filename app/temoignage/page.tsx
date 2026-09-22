import TestimonialsBook from "@/app/components/sections/TestimonialsBook";
import FinalCTA from "@/app/components/sections/FinalCTA";
import PageHero from "@/app/components/ui/PageHero";

export const metadata = {
  title: "Témoignages & Avis — Rosca",
  description: "Découvrez les avis et retours des clients et collaborateurs qui font confiance à Rosca pour leurs projets web & mobiles.",
};

export default function TestimonialPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Retours d'expérience"
        crumb="Témoignages"
        lines={[
          "La meilleure preuve :",
          <span key="accent">
            la <span className="font-serif font-normal italic tracking-[-0.02em] text-ember">satisfaction</span> client.
          </span>,
        ]}
        description="Des collaborations fluides, transparentes et axées sur la valeur concrète apportée à votre entreprise."
      />

      <TestimonialsBook index="02" />
      <FinalCTA />
    </>
  );
}
