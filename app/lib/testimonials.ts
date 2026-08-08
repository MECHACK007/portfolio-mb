export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  { name: "Nom Client", role: "CEO, Entreprise 1", quote: "Travail sérieux, délais respectés et bonne communication tout au long du projet." },
  { name: "Moussa K.", role: "Responsable produit", quote: "Rosca a su comprendre nos besoins rapidement et proposer des solutions adaptées, avec un vrai souci du détail." },
  { name: "Aïcha S.", role: "Fondatrice, Studio", quote: "Réactif, force de proposition, et le résultat final dépasse ce qu'on attendait." },
];
