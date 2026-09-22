import type { StaticImageData } from "next/image";
import gestionDetteImage from "@/public/images/projects/Gestion_Dette.webp";
import mobileNdakoImage from "@/public/images/projects/mobile_Ndako.webp";
import ndakoImage from "@/public/images/projects/Ndako.webp";
import tangoImage from "@/public/images/projects/Tango.webp";

export type ProjectSpec = {
  isHosted: boolean;
  statusText: string;
  author: string;
  version: string;
  category: string;
  year: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  challenge?: string;
  solution?: string;
  /** Static import (compressed WebP, with blur placeholder) or a public path. */
  image: StaticImageData | string;
  url?: string;
  githubUrl?: string;
  domain: string;
  tags: string[];
  featured?: boolean;
  specs: ProjectSpec;
};

export const projects: Project[] = [
  {
    slug: "tango-na-ngai",
    title: "Tango Na Ngai",
    subtitle: "Application Web PWA de gestion de temps",
    description: "Application Web PWA de gestion du temps qui permet de planifier en deux ou trois clics et de rester productif partout.",
    longDescription: "Tango Na Ngai est une solution complète de gestion du temps conçue sous forme de Progressive Web App (PWA) et d'application mobile. Elle offre une planification ultra-rapide, une organisation par priorités, un suivi en temps réel du temps consacré aux tâches et des statistiques d'analyse de productivité. Son architecture garantit un fonctionnement fluide même en l'absence de réseau internet avec synchronisation automatique dès le retour de la connexion.",
    challenge: "Offrir une expérience fluide et instantanée sur tous les écrans tout en assurant la persistance et la synchronisation des données hors-ligne.",
    solution: "Mise en place d'un Service Worker PWA sur mesure avec gestion intelligente du cache, couplé à un backend Laravel et une base de données MySQL.",
    image: tangoImage,
    url: undefined,
    domain: "Gestion de temps",
    tags: ["React", "Laravel", "MySQL"],
    featured: true,
    specs: {
      isHosted: false,
      statusText: "Développement finalisé / Version PWA",
      author: "Rosca MB",
      version: "1.0.0",
      category: "Productivité & Organisation",
      year: "2026",
      features: [
        "Planification d'activités en 2-3 clics",
        "Mode offline PWA avec synchronisation automatique",
        "Statistiques visuelles de productivité",
        "Interface multi-plateforme (Web & Flutter Mobile)",
        "Notifications push et rappels intelligents"
      ],
      techStack: ["React", "Laravel", "MySQL"]
    }
  },
  {
    slug: "e-commerce-boutique",
    title: "Boutique E-Commerce Premium",
    subtitle: "Catalogue interactif & tunnel de paiement fluide",
    description: "Expérience d'achat ultra rapide avec panier persistant, paiement Mobile Money (Orange, Wave, MTN) et console d'administration sur mesure.",
    longDescription: "Plateforme e-commerce haute performance développée sous Next.js avec Server Components pour des temps de chargement ultra-rapides. Le projet intègre un catalogue dynamique réactif, la recherche et le filtrage instantanés, un panier d'achat persistant et une passerelle de paiement unifiée supportant les opérateurs Mobile Money locaux (Orange Money, Wave, MTN) ainsi que Stripe pour les cartes bancaires.",
    challenge: "Offrir un tunnel de commande sans friction adapté aux modes de paiement africains tout en maintenant un score Google Web Vitals optimal.",
    solution: "Architecture Next.js App Router ultra-optimisée avec rendu côté serveur, mise en cache granulaire et intégration sécurisée des APIs de paiement via Webhooks.",
    image: "/images/projects/project-ecommerce.png",
    url: "https://shop-demo.rosca.dev",
    domain: "shop.rosca.dev",
    tags: ["React", "Next.js", "Mobile Money API", "Stripe"],
    featured: true,
    specs: {
      isHosted: true,
      statusText: "Hébergé & En ligne",
      author: "Rosca MB",
      version: "v2.1.0",
      category: "E-Commerce & FinTech",
      year: "2024",
      liveUrl: "https://shop-demo.rosca.dev",
      features: [
        "Paiement Mobile Money (Orange, Wave, MTN) + Stripe",
        "Catalogue dynamique avec filtres multi-critères instantanés",
        "Panier d'achat persistant et checkout en 1 étape",
        "Console d'administration sur-mesure pour la gestion des stocks",
        "Score SEO et performances Google Web Vitals > 95"
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Mobile Money API", "Stripe"]
    }
  },
  {
    slug: "ndako-na-ngai",
    title: "Ndako na Ngai mobile",
    subtitle: "Application de gestion immobilière Ndako Na ngai",
    description: "Application de gestion immobilière Ndako Na ngai - Flutter, Dart et MongoDB, Node.",
    longDescription: "Ndako na Ngai est une plateforme de PropTech conçue pour simplifier la mise en relation entre propriétaires, agences et locataires/acheteurs. L'application propose la recherche géolocalisée de logements, l'exploration de galeries photos enrichies, la réservation de visites et la gestion en ligne des dossiers locatifs.",
    challenge: "Créer une synergie parfaite entre la plateforme web administrative et l'application mobile grand public sans duplication de code métier.",
    solution: "Conception d'une API REST centrale sous Node.js/Express assurant l'authentification sécurisée, la validation des données Zod et la distribution vers le Web (React) et le Mobile (Flutter).",
    image: mobileNdakoImage,
    url: undefined,
    domain: "Gestion immobilière",
    tags: ["Flutter", "Dart", "MongoDB", "Node"],
    featured: true,
    specs: {
      isHosted: false,
      statusText: "Projet v1.0 / Version Démo",
      author: "Rosca MB",
      version: "v1.0.0",
      category: "PropTech & Immobilier",
      year: "2026",
      features: [
        "Gestion complète des annonces et biens immobiliers",
        "Filtres de recherche avancés par budget, quartier et commodités",
        "Prise de rendez-vous et messagerie directe",
        "Espace bailleur pour le suivi des loyers et des contrats",
        "Applications natives iOS / Android via Flutter"
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Flutter", "Dart"]
    }
  },
  {
    slug: "ndako-na-ngai-web",
    title: "Ndako Na Ngai",
    subtitle: "Application web de gestion immobilière",
    description: "Application web de gestion immobilière Ndako Na Ngai.",
    longDescription: "Ndako Na Ngai Web est une plateforme immobilière complète développée avec la stack MERN pour offrir une gestion fluide des annonces, des utilisateurs et des transactions. Le site permet aux propriétaires de publier leurs biens, aux locataires de rechercher facilement des logements et aux agents de suivre les demandes en temps réel.",
    challenge: "Unifier l'expérience d'administration et de recherche immobilière en ligne tout en conservant une navigation réactive et une gestion sécurisée des données.",
    solution: "Développement d'une application web moderne avec React pour le front-end, Express/Node pour l'API backend et MongoDB pour la persistance des données.",
    image: ndakoImage,
    url: undefined,
    domain: "Gestion immobilière",
    tags: ["MongoDB", "Express", "React", "Node"],
    featured: true,
    specs: {
      isHosted: false,
      statusText: "Application web / Version Démo",
      author: "Rosca MB",
      version: "v1.0.0",
      category: "PropTech & Immobilier",
      year: "2026",
      features: [
        "Publication et gestion d'annonces immobilières",
        "Recherche avancée par localisation, prix et caractéristiques",
        "Gestion sécurisée des profils utilisateurs",
        "Dashboard web pour agents et propriétaires",
        "Flux de demandes et messagerie intégrée"
      ],
      techStack: ["MongoDB", "Express", "React", "Node"]
    }
  },
  {
    slug: "gestion-dette",
    title: "Gestion Dette",
    subtitle: "Application desktop de suivi des dettes",
    description: "Application desktop de gestion et de suivi des dettes clients et fournisseurs, avec un tableau de bord clair pour le recouvrement et le paiement.",
    longDescription: "Solution logicielle desktop robuste dédiée aux PME et commerçants pour la tenue et le suivi des créances et dettes financières. L'application offre un tableau de bord centralisé des créances en souffrance, des échéanciers interactifs, des alertes de relance et l'impression automatique de factures, de reçus et d'états financiers.",
    challenge: "Garantir un haut niveau de sécurité et de performances hors-ligne sur ordinateur avec une base de données locale résiliente.",
    solution: "Développement d'une application Java desktop native avec gestion des transactions MySQL, validation stricte des bilans et génération de rapports PDF personnalisés.",
    image: gestionDetteImage,
    url: undefined,
    domain: "Application Desktop",
    tags: ["Java", "git", "MySQL"],
    featured: true,
    specs: {
      isHosted: false,
      statusText: "Application Desktop Native (Local)",
      author: "Rosca MB",
      version: "1.0.0",
      category: "FinTech & Desktop Software",
      year: "2026",
      features: [
        "Suivi précis des créances clients & dettes fournisseurs",
        "Alerte automatique des impayés et échéances",
        "Génération et impression de reçus & bilans au format PDF",
        "Gestion multi-utilisateurs et niveaux d'accès",
        "Base de données relationnelle sécurisée avec sauvegarde"
      ],
      techStack: ["Java", "MySQL", "Git", "Swing/JavaFX"]
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

