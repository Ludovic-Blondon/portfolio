import { ProjectOverride } from "@/types";

export const projectOverrides: Record<string, ProjectOverride> = {
  nomadhub: {
    title: "NomadHub",
    description:
      "NomadHub est une plateforme d'hébergement de voyageurs. Vous pouvez " +
      "mettre à disposition des voyageurs, votre salon ou une chambre d'ami. En " +
      "retour, vous pouvez aussi accéder à des hébergements à travers le monde " +
      "grâce à la plateforme.",
    link: "https://nomadhub.ludovicblondon.fr",
    metadata: {
      title: "NomadHub",
      description: "NomadHub est une plateforme d'hébergement de voyageurs.",
    },
    technologies: [
      "Next",
      "Shadcn",
      "Better-auth",
      "Tailwind",
      "TypeScript",
      "JavaScript",
      "React",
      "ESLint",
      "Prettier",
    ],
    order: 1,
  },
  codehub: {
    title: "CodeHub",
    description:
      "CodeHub est un site de documentation technique destiné aux développeurs, construit avec " +
      "Fumadocs et Next.js 15. L'objectif est fournir une documentation complète en français sur les outils et raccourcis essentiels pour " +
      "développeurs, avec un accent particulier sur l'écosystème macOS.",
    link: "https://codehub.ludovicblondon.fr",
    metadata: {
      title: "CodeHub",
      description:
        "CodeHub est un site de documentation technique destiné aux développeurs.",
    },
    technologies: ["Next", "Fumadocs", "MDX", "React", "ESLint", "Prettier"],
    order: 2,
  },
  argument: {
    title: "Argument",
    description:
      "Argument est une application iOS native conçue pour sauvegarder et organiser vos arguments de " +
      "débat sous forme de notes structurées. Elle vous permet d'archiver vos idées, de les " +
      "retrouver rapidement par thème, et de les copier-coller lors de discussions.",
    metadata: {
      title: "Argument",
      description:
        "Application iOS pour sauvegarder et organiser vos arguments de débat.",
    },
    technologies: ["Swift"],
    order: 3,
  },
  portfolio: {
    title: "Portfolio",
    description:
      "J'ai bien sûr également réalisé ce portfolio. J'ai utilisé des technologies modernes comme Next.js 16, Shadcn/ui et Tailwind CSS 4. " +
      "J'ai voulu créer un design minimaliste et épuré pour mettre en valeur mes projets et compétences. " +
      "Le site intègre un système de thèmes (dark/light mode) et une architecture modulaire pour faciliter les futures évolutions.",
    metadata: {
      title: "Portfolio",
      description:
        "Portfolio personnel construit avec Next.js 16 et Tailwind CSS.",
    },
    technologies: ["Next", "React", "TypeScript", "Tailwind", "Shadcn"],
    order: 4,
  },
  cocotte: {
    title: "Cocotte",
    description:
      "Cocotte est un site qui regroupe des recettes de cuisine. Conçu pour être clair, concis et intuitif, sans une tonne de publicités " +
      "qui peuvent gâcher l'expérience utilisateur. Les recettes partagées ont été réalisées à plusieurs reprises et ont pu être ainsi optimisées. " +
      "Il est construit avec Next.js 15 et Tailwind CSS.",
    link: "https://cocotte.ludovicblondon.fr",
    metadata: {
      title: "Cocotte",
      description:
        "Site de recettes de cuisine clair et sans publicité, avec des recettes testées et optimisées.",
    },
    technologies: ["Next", "React", "TypeScript", "Tailwind", "Shadcn"],
    order: 5,
  },
  galerie: {
    title: "Galerie",
    description:
      "Galerie est une plateforme web de galerie d'art moderne construite avec Laravel 12 et Vue 3. L'application combine une architecture backend robuste (PHP 8.2+, Laravel Fortify pour l'authentification avec 2FA) avec un frontend moderne (Vue 3, TypeScript, Inertia.js) pour offrir une expérience utilisateur fluide et élégante. Utilisant Tailwind CSS v4 et shadcn-vue pour le design, le projet illustre la maîtrise du développement full-stack avec SSR, tests automatisés (Pest PHP) et une architecture modulaire permettant la gestion et l'exposition d'œuvres d'art contemporaines.",
    link: "https://galerie-staging-rsv5xd.laravel.cloud/",
    metadata: {
      title: "Galerie",
      description:
        "Plateforme web de galerie d'art moderne construite avec Laravel 12 et Vue 3.",
    },
    technologies: [
      "Laravel",
      "PHP",
      "Vue",
      "TypeScript",
      "Inertia.js",
      "Tailwind",
      "Pest",
    ],
    order: 6,
  },
  "diag-adresse": {
    title: "Diag Adresse",
    description:
      "Diag Adresse est une plateforme web qui fournit un diagnostic complet d'une adresse française : risques naturels et industriels, qualité de l'eau, performance énergétique des bâtiments. Le projet met l'accent sur la structuration du contenu et l'optimisation SEO (maillage interne entre communes, pages régionales) pour offrir aux utilisateurs un accès rapide aux informations territoriales et immobilières clés.",
    metadata: {
      title: "Diag Adresse",
      description:
        "Diagnostic complet d'une adresse française : risques, eau, performance énergétique.",
    },
    technologies: ["Next", "React", "TypeScript", "Tailwind"],
  },
  "block-puzzle-blast": {
    title: "Block Puzzle Blast",
    description:
      "Block Puzzle Blast est un jeu de puzzle mobile (iOS et Android) où l'on place des blocs sur une grille 10x10 pour compléter et effacer des lignes. Construit avec React Native et Expo SDK 55, il intègre des mécaniques addictives (combos, bonus de séries, power-ups), une gestion d'état avec Zustand, la persistance via AsyncStorage et des animations fluides via les APIs natives PanResponder et Animated.",
    metadata: {
      title: "Block Puzzle Blast",
      description:
        "Jeu de puzzle mobile iOS/Android construit avec React Native et Expo.",
    },
    technologies: ["React Native", "Expo", "TypeScript", "Zustand"],
  },
  casemorph: {
    title: "Casemorph",
    description:
      "Casemorph est une bibliothèque TypeScript publiée sur npm qui automatise la conversion des clés d'objets entre conventions de nommage (camelCase, snake_case, kebab-case, PascalCase, CONSTANT_CASE). Elle transforme à la fois les données au runtime et les types à la compilation, ce qui élimine le besoin de mapper manuellement les réponses d'API REST. Zéro dépendance, 387 bytes minifiés + brotli, compatible Node.js 20+, Bun, Deno et edge runtimes.",
    npm: "https://www.npmjs.com/package/casemorph",
    metadata: {
      title: "Casemorph",
      description:
        "Bibliothèque TypeScript pour convertir les conventions de nommage des clés d'objets, avec inférence de types complète.",
    },
    technologies: ["TypeScript"],
  },
  "ts-safe-path": {
    title: "ts-safe-path",
    description:
      "ts-safe-path est une bibliothèque TypeScript publiée sur npm qui offre un accès sécurisé aux propriétés imbriquées d'objets, avec inférence complète des chemins et autocomplétion IDE. Elle expose trois fonctions : `get()` pour lire, `set()` pour modifier de manière immuable, et `has()` pour vérifier l'existence d'un chemin. Zéro dépendance, validation à la compilation, conçue pour surpasser des alternatives comme lodash.get ou dot-prop sur le plan de la sécurité des types.",
    npm: "https://www.npmjs.com/package/ts-safe-path",
    metadata: {
      title: "ts-safe-path",
      description:
        "Accès type-safe aux propriétés imbriquées en TypeScript, avec inférence complète et autocomplétion.",
    },
    technologies: ["TypeScript"],
  },
  "durations-ts": {
    title: "durations-ts",
    description:
      "durations-ts est une bibliothèque TypeScript publiée sur npm qui parse des chaînes de durée comme `'2h 30m'` en millisecondes, avec validation au moment de la compilation grâce aux template literal types. Elle gère les durées composées (semaines, jours, heures, minutes, secondes, millisecondes), propose des opérations arithmétiques, des conversions entre unités et un rendu humanisé. Zéro dépendance, environ 3,7× plus rapide que les alternatives existantes sur les durées complexes.",
    npm: "https://www.npmjs.com/package/durations-ts",
    metadata: {
      title: "durations-ts",
      description:
        "Parsing de durées TypeScript avec validation à la compilation et zéro dépendance.",
    },
    technologies: ["TypeScript"],
  },
};
