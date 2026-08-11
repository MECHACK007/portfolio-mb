# 🚀 GUIDE ET DOCUMENTATION COMPLÈTE DU PORTFOLIO - ROSCA MB

Ce document regroupe **absolument tout** ce qu'il faut savoir, retenir et maintenir sur le projet du Portfolio Fullstack de **Rosca MB**.

---

## 📑 TABLE DES MATIÈRES
1. [Vue d'ensemble du Projet](#1-vue-densemble-du-projet)
2. [Stack Technique & Choix Technologiques](#2-stack-technique--choix-technologiques)
3. [Architecture des Dossiers & Fichiers](#3-architecture-des-dossiers--fichiers)
4. [Fonctionnalités Clés & Expérience Utilisateur](#4-fonctionnalités-clés--expérience-utilisateur)
5. [Système de Chargement (Preloader & Loading)](#5-système-de-chargement-preloader--loading)
6. [Système de Contact & Resend Email](#6-système-de-contact--resend-email)
7. [Variables d'Environnement (.env.local)](#7-variables-denvironnement-envlocal)
8. [Guide de Déploiement Vercel & GitHub](#8-guide-de-déploiement-vercel--github)
9. [Commandes Utiles & Maintenance](#9-commandes-utiles--maintenance)

---

## 1. VUE D'ENSEMBLE DU PROJET

* **Propriétaire** : Rosca MB (Développeur Fullstack)
* **Objectif** : Portfolio haute performance, moderne, fluide et interactif présentant les compétences, projets, formations, témoignages et un formulaire de contact automatisé.
* **Charte Graphique** :
  * **Couleur Principale / Accent** : `#D9491F` (Terracotta / Orange-rouge chaleureux)
  * **Arrière-plan Lumineux** : `#FBF9F5` (Blanc chaud cassé)
  * **Arrière-plan Sombre / Dark/HUD** : `#0B0C0E` / `#0F1012`
  * **Typographie** : Inter / Monospace pour le style terminal / code.

---

## 2. STACK TECHNIQUE & CHOIX TECHNOLOGIQUES

| Domaine | Technologie / Bibliothèque | Description & Rôle |
| :--- | :--- | :--- |
| **Framework Web** | `Next.js 16.2` (App Router) | Framework React hybride (SSR, SSG, Server Actions, Dynamic Routes) |
| **Langage** | `TypeScript 5` | Typage strict pour une grande fiabilité |
| **Style & UI** | `Tailwind CSS v4` | Framework CSS utilitaire moderne avec variables CSS natives |
| **Animations** | `Framer Motion 12` | Micro-interactions, transitions fluides, apparition d'éléments et preloader |
| **Icônes** | `Lucide React` | Bibliothèque d'icônes vectorielles légères et modernes |
| **Envoi d'Emails** | `Resend` + `React Hook Form` + `Zod` | Validation du formulaire et envoi d'emails transactionnels sans serveur dédié |
| **Contrôle de Version** | `Git` & `GitHub` | Hébergement du code source (`MECHACK007/portfolio-mb`) |
| **Hébergement** | `Vercel` | Déploiement continu automatisé à chaque `git push` |

---

## 3. ARCHITECTURE DES DOSSIERS & FICHIERS

```text
portfolio-mb/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts              # Route API d'envoi de mail via Resend
│   │   └── testimonials/
│   │       └── route.ts              # Route API d'envoi de témoignage
│   ├── competences/
│   │   └── page.tsx                  # Page dédiée aux compétences
│   ├── components/
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx       # Composant interactif du formulaire de contact
│   │   │   └── WhatsAppButton.tsx    # Bouton flottant d'accès direct WhatsApp
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Barre de navigation responsive avec menu mobile
│   │   │   └── Footer.tsx            # Pied de page interactif
│   │   ├── sections/
│   │   │   ├── AboutSection.tsx      # Section "À propos"
│   │   │   ├── ExperienceTimeline.tsx# Parcours chronologique d'expériences
│   │   │   ├── FinalCTA.tsx          # Appel à l'action final
│   │   │   ├── Formation.tsx         # Diplômes et certifications
│   │   │   ├── Hero.tsx              # Section d'accueil principale avec visuel
│   │   │   ├── ProjectsCarousel.tsx  # Carrousel des projets
│   │   │   ├── SkillsCircuit.tsx     # Circuit interactif de compétences
│   │   │   ├── SkillsGrid.tsx        # Grille de compétences
│   │   │   ├── SkillsOrbit.tsx       # Système d'orbite technologique
│   │   │   ├── StatsCounter.tsx      # Chiffres clés animés
│   │   │   ├── TechStackTerminal.tsx # Terminal interactif style CLI
│   │   │   └── TestimonialsBook.tsx  # Livre d'or / Témoignages
│   │   └── ui/
│   │       └── InitialPreloader.tsx  # Rideau d'accueil au 1er chargement
│   ├── contact/
│   │   └── page.tsx                  # Page de contact complète
│   ├── lib/
│   │   ├── projects.ts               # Base de données locale des projets
│   │   └── testimonials.ts           # Liste des témoignages vérifiés
│   ├── portfolio/
│   │   ├── [slug]/
│   │   │   └── page.tsx              # Page de détail dynamique d'un projet
│   │   └── page.tsx                  # Galerie complète des projets
│   ├── temoignage/
│   │   └── page.tsx                  # Page pour soumettre un avis
│   ├── globals.css                   # Animation CSS, variables de couleurs et styles globaux
│   ├── layout.tsx                    # Layout principal englobant Header, Footer, Preloader
│   └── loading.tsx                   # Page de chargement de transition Next.js
├── public/
│   └── images/                       # Captures d'écran et illustrations du portfolio
├── .env.example                      # Modèle de variables d'environnement
├── .env.local                        # Clés privées (ne JAMAIS pusher sur Git)
├── next.config.ts                    # Configuration Next.js
├── package.json                      # Dépendances et scripts
└── README.md                         # Présentation rapide du projet
```

---

## 4. FONCTIONNALITÉS CLÉS & EXPÉRIENCE UTILISATEUR

1. **Page d'Accueil dynamique (`/`)** :
   * **Hero Section** : Présentation à fort impact avec appel à l'action direct, réseaux sociaux et photo officielle.
   * **Tech Stack Terminal** : Un terminal CLI interactif permettant d'exécuter des commandes de démonstration (`help`, `skills`, `contact`, `clear`).
   * **Skills Orbit & Circuit** : Affichage visuel des technologies maîtrisées avec niveau d'expertise et catégories (Frontend, Backend, DevOps, Outils).
   * **Projects Carousel** : Défilé interactif des projets phares avec liens vers leurs pages de détail.
   * **Parcours & Formations** : Timeline interactive des diplômes et expériences.
   * **Livre d'or / Témoignages** : Retours clients/collaborateurs avec possibilité d'ajouter un avis.

2. **Galerie Projets & Détail Dynamique (`/portfolio` & `/portfolio/[slug]`)** :
   * Filtrage des projets par catégories.
   * Fiche détaillée par projet comprenant : problématique, solution apportée, stack technique utilisée, captures d'écran et lien direct vers le projet/code.

3. **Formulaire de Contact Automatisé (`/contact`)** :
   * Validation en temps réel côté client avec `react-hook-form` et `zod`.
   * Envoi instantané d'un email HTML formaté à Rosca via l'API Resend.

---

## 5. SYSTÈME DE CHARGEMENT (PRELOADER & LOADING)

Deux systèmes complémentaires assurent une expérience visuelle mémorable :

1. **`InitialPreloader.tsx` (Écran d'Entrée)** :
   * S'affiche uniquement lors de la **première visite** du site (mémorisé via `sessionStorage`).
   * Affiche un compteur numérique `00% → 100%` en 1.4 seconde avec lueur néon et logo `MB`.
   * Animation de sortie en rideau vertical fluide.

2. **`loading.tsx` (Transitions Next.js)** :
   * S'active automatiquement lors du passage entre les pages ou du rendu serveur.
   * Équipé d'un **double anneau orbital 3D**, d'un **balayage laser**, d'un **terminal de statut** (`"Initialisation du système..."`) et de métriques HUD.

---

## 6. SYSTÈME DE CONTACT & RESEND EMAIL

L'envoi des messages s'effectue via l'API Next.js `/api/contact` connectée au service **Resend**.

* **Route API** : `app/api/contact/route.ts`
* **Sécurité & Validation** : Vérification du format email et des champs obligatoires.
* **Auto-fallback Intelligent** :
  * Si l'adresse `CONTACT_EMAIL_FROM` contient un nom de domaine non vérifié (ex: `tondomaine.com`), la route bascule automatiquement sur `onboarding@resend.dev` pour garantir la délivrabilité sans erreur.
* **Format HTML** : L'email reçu est mis en page avec un template professionnel intégrant le nom, l'email de réponse direct (`replyTo`), le sujet et le message.

---

## 7. VARIABLES D'ENVIRONNEMENT (.env.local)

Voici les variables requises pour le fonctionnement local et sur Vercel :

```dotenv
# Clé d'API Resend pour l'envoi d'emails (disponible sur resend.com)
RESEND_API_KEY=re_votre_cle_resend_ici

# Adresse email qui recevra les messages du formulaire de contact
CONTACT_EMAIL_TO=roscabangoulou@gmail.com

# Adresse d'expéditeur (utilisez onboarding@resend.dev en mode test, ou votre domaine vérifié)
CONTACT_EMAIL_FROM=onboarding@resend.dev

# Numéro WhatsApp (format international sans le +)
NEXT_PUBLIC_WHATSAPP_NUMBER=242065147072

# URL canonique du site (Local ou Production)
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
```

---

## 8. GUIDE DE DÉPLOIEMENT VERCEL & GITHUB

### Étape 1 : Code source sur GitHub
Le code est prêt et synchronisé sur la branche principale :
* **Dépôt** : `https://github.com/MECHACK007/portfolio-mb.git`
* **Branche de production** : `main`

### Étape 2 : Lier Vercel à GitHub
1. Connectez-vous sur [Vercel](https://vercel.com).
2. Cliquez sur **"Add New Project"** → Importez le dépôt **`MECHACK007/portfolio-mb`**.
3. Dans la section **Environment Variables**, renseignez les 5 clés du tableau ci-dessus.
4. Cliquez sur **"Deploy"**.

### Étape 3 : Mises à jour futures
Chaque fois que vous modifiez le code et faites :
```bash
git add .
git commit -m "votre message"
git push origin main
```
Vercel reconstruira et mettra à jour automatiquement le site en ligne en quelques secondes !

---

## 9. COMMANDES UTILES & MAINTENANCE

Voici les commandes principales à exécuter dans le dossier `portfolio-mb` :

| Action | Commande | Description |
| :--- | :--- | :--- |
| **Démarrer en mode dev** | `npm run dev` | Lance le serveur local sur `http://localhost:3000` |
| **Tester le build** | `npm run build` | Vérifie la compilation TypeScript et Next.js |
| **Lancer le build** | `npm run start` | Exécute la version de production localement |
| **Linter le code** | `npm run lint` | Détecte les avertissements ou erreurs de syntaxe |
| **Pusher sur GitHub** | `git push origin main` | Déclenche le re-déploiement automatique Vercel |

---

> 💡 **Remarque importante** : Le fichier `.env.local` est ignoré par Git pour des raisons de sécurité. N'oubliez pas d'ajouter les variables d'environnement directement dans les paramètres de votre projet sur le tableau de bord Vercel (**Settings -> Environment Variables**).
