import { ProjectOverride } from "@/types";

export const projectOverrides: Record<string, ProjectOverride> = {
  "diag-adresse": {
    title: "Diag Adresse",
    description:
      "Diag Adresse est une plateforme web qui fournit un diagnostic complet d'une adresse française : risques naturels et industriels, qualité de l'eau, performance énergétique des bâtiments. Le projet met l'accent sur la structuration du contenu et l'optimisation SEO (maillage interne entre communes, pages régionales) pour offrir aux utilisateurs un accès rapide aux informations territoriales et immobilières clés.",
    tagline:
      "Diagnostic complet d'une adresse française : risques, eau, performance énergétique.",
    metadata: {
      title: "Diag Adresse",
      description:
        "Diagnostic complet d'une adresse française : risques, eau, performance énergétique.",
    },
    order: 1,
  },
  skullking: {
    title: "Skull Scores",
    description:
      "Skull Scores est une application mobile iOS et Android qui tient la feuille de score du jeu de cartes Skull King. " +
      "La saisie n'enregistre que des données brutes — annonces, plis, bonus — jamais des points : corriger une erreur survenue trois manches plus tôt recalcule toute la partie. " +
      "Le moteur de règles est isolé dans un module TypeScript pur, sans aucun import React Native, couvert à 100 % branches comprises et capable d'appliquer le barème exact de chaque édition du jeu. " +
      "Construite avec Expo SDK 57, expo-router et NativeWind, elle stocke l'intégralité des parties en local via Drizzle et SQLite : aucun compte, aucun serveur, aucune donnée qui quitte le téléphone. Interface traduite en quatre langues.",
    tagline:
      "Feuille de score du jeu Skull King, 100 % hors ligne, en quatre langues.",
    appStore: "https://apps.apple.com/fr/app/skull-scores/id6806288500",
    metadata: {
      title: "Skull Scores",
      description:
        "Application mobile iOS et Android pour tenir la feuille de score du jeu de cartes Skull King, 100 % hors ligne.",
    },
    order: 2,
  },
  casemorph: {
    title: "Casemorph",
    description:
      "Casemorph est une bibliothèque TypeScript publiée sur npm qui automatise la conversion des clés d'objets entre conventions de nommage (camelCase, snake_case, kebab-case, PascalCase, CONSTANT_CASE). Elle transforme à la fois les données au runtime et les types à la compilation, ce qui élimine le besoin de mapper manuellement les réponses d'API REST. Zéro dépendance, 387 bytes minifiés + brotli, compatible Node.js 20+, Bun, Deno et edge runtimes.",
    tagline:
      "Conversion des conventions de nommage des clés d'objets, types inclus. 387 bytes.",
    npm: "https://www.npmjs.com/package/casemorph",
    metadata: {
      title: "Casemorph",
      description:
        "Bibliothèque TypeScript pour convertir les conventions de nommage des clés d'objets, avec inférence de types complète.",
    },
    order: 4,
  },
  "ts-safe-path": {
    title: "ts-safe-path",
    description:
      "ts-safe-path est une bibliothèque TypeScript publiée sur npm qui offre un accès sécurisé aux propriétés imbriquées d'objets, avec inférence complète des chemins et autocomplétion IDE. Elle expose trois fonctions : `get()` pour lire, `set()` pour modifier de manière immuable, et `has()` pour vérifier l'existence d'un chemin. Zéro dépendance, validation à la compilation, conçue pour surpasser des alternatives comme lodash.get ou dot-prop sur le plan de la sécurité des types.",
    tagline:
      "Accès type-safe aux propriétés imbriquées, avec autocomplétion complète.",
    npm: "https://www.npmjs.com/package/ts-safe-path",
    metadata: {
      title: "ts-safe-path",
      description:
        "Accès type-safe aux propriétés imbriquées en TypeScript, avec inférence complète et autocomplétion.",
    },
    order: 5,
  },
  "durations-ts": {
    title: "durations-ts",
    description:
      "durations-ts est une bibliothèque TypeScript publiée sur npm qui parse des chaînes de durée comme `'2h 30m'` en millisecondes, avec validation au moment de la compilation grâce aux template literal types. Elle gère les durées composées (semaines, jours, heures, minutes, secondes, millisecondes), propose des opérations arithmétiques, des conversions entre unités et un rendu humanisé. Zéro dépendance, environ 3,7× plus rapide que les alternatives existantes sur les durées complexes.",
    tagline:
      "Parsing de durées « 2h 30m » validé à la compilation. Zéro dépendance.",
    npm: "https://www.npmjs.com/package/durations-ts",
    metadata: {
      title: "durations-ts",
      description:
        "Parsing de durées TypeScript avec validation à la compilation et zéro dépendance.",
    },
    order: 6,
  },
  "block-puzzle-blast": {
    title: "Block Puzzle Blast",
    description:
      "Block Puzzle Blast est un jeu de puzzle mobile (iOS et Android) où l'on place des blocs sur une grille 10x10 pour compléter et effacer des lignes. Construit avec React Native et Expo SDK 55, il intègre des mécaniques addictives (combos, bonus de séries, power-ups), une gestion d'état avec Zustand, la persistance via AsyncStorage et des animations fluides via les APIs natives PanResponder et Animated.",
    tagline:
      "Jeu de puzzle mobile iOS et Android, grille 10x10, combos et power-ups.",
    metadata: {
      title: "Block Puzzle Blast",
      description:
        "Jeu de puzzle mobile iOS/Android construit avec React Native et Expo.",
    },
    order: 7,
  },
  portfolio: {
    title: "Portfolio",
    description:
      "J'ai bien sûr également réalisé ce portfolio. J'ai utilisé des technologies modernes comme Next.js 16, Shadcn/ui et Tailwind CSS 4. " +
      "J'ai voulu créer un design minimaliste et épuré pour mettre en valeur mes projets et compétences. " +
      "Le site intègre un système de thèmes (dark/light mode) et une architecture modulaire pour faciliter les futures évolutions.",
    tagline:
      "Ce portfolio : interface façon console, Next.js 16 et Tailwind CSS 4.",
    metadata: {
      title: "Portfolio",
      description:
        "Portfolio personnel construit avec Next.js 16 et Tailwind CSS.",
    },
    order: 3,
  },
};
