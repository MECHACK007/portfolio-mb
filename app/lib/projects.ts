export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url?: string;
  githubUrl?: string;
  domain: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics Fintech",
    subtitle: "Plateforme de gestion & métriques financières",
    description: "Tableau de bord haute performance avec visualisations interactives en temps réel, export de données et gestion d'abonnements multi-devises.",
    image: "/images/projects/project-dashboard.png",
    url: "https://fintech-demo.rosca.dev",
    domain: "fintech.rosca.dev",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Recharts"],
    featured: true,
  },
  {
    slug: "e-commerce-boutique",
    title: "Boutique E-Commerce Premium",
    subtitle: "Catalogue interactif & tunnel de paiement fluide",
    description: "Expérience d'achat ultra rapide avec panier persistant, paiement Mobile Money (Orange, Wave, MTN) et console d'administration sur mesure.",
    image: "/images/projects/project-ecommerce.png",
    url: "https://shop-demo.rosca.dev",
    domain: "shop.rosca.dev",
    tags: ["React", "Next.js", "Mobile Money API", "Stripe"],
    featured: true,
  },
  {
    slug: "plateforme-saas-ai",
    title: "Plateforme SaaS AI Automation",
    subtitle: "Workflow automatique & agents intelligents",
    description: "Solution web permettant d'automatiser le traitement de documents et l'intégration d'agents LLM dans les flux opérationnels des entreprises.",
    image: "/images/projects/project-saas.png",
    url: "https://saas-ai.rosca.dev",
    domain: "ai-flow.rosca.dev",
    tags: ["Next.js", "Node.js", "OpenAI API", "Docker"],
    featured: true,
  },
  {
    slug: "mobile-money-pay",
    title: "Application Mobile Money Pay",
    subtitle: "Portefeuille numérique iOS & Android",
    description: "Application mobile native multi-plateforme permettant des transferts instantanés, paiement QR code et suivi du budget en temps réel.",
    image: "/images/projects/project-mobile.png",
    url: "https://mobilepay.rosca.dev",
    domain: "mobilepay.app",
    tags: ["Flutter", "Kotlin", "REST API", "Firebase"],
    featured: true,
  },
];