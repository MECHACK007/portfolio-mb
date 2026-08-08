export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Kouassi Jean-Marc",
    role: "CEO & Fondateur",
    company: "FinTech Connect",
    avatar: "👨🏽‍💼",
    quote: "Rosca a livré notre plateforme de paiement et dashboard analytique avec un niveau de finition exceptionnel. Les délais ont été parfaitement respectés et la réactivité constante.",
    rating: 5,
    project: "Dashboard Fintech & Mobile Payment",
  },
  {
    id: "t2",
    name: "Moussa K.",
    role: "Responsable Produit",
    company: "PayQuick Studio",
    avatar: "🧑🏽‍💻",
    quote: "Rosca a su comprendre nos besoins métiers les plus complexes dès les premiers échanges. L'intégration de l'application mobile Flutter est fluide et ultra rapide.",
    rating: 5,
    project: "App Mobile Money iOS & Android",
  },
  {
    id: "t3",
    name: "Aïcha Sanogo",
    role: "Fondatrice",
    company: "Maison Elegance Studio",
    avatar: "👩🏽‍💼",
    quote: "Réactif, force de proposition et extrêmement minutieux. Le nouveau site e-commerce qu'il a conçu a permis de doubler nos conversions en quelques semaines.",
    rating: 5,
    project: "Vitrine E-Commerce & Panier fluide",
  },
];

