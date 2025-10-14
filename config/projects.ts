import { ProjectConfig } from "@/types";

export const projects: Record<string, ProjectConfig> = {
  nomadhub: {
    id: "nomadhub",
    title: "NomadHub",
    description:
      "NomadHub est une plateforme d'hébergement de voyageurs. Vous pouvez " +
      "mettre à disposition des voyageurs, votre salon ou une chambre d'ami. En " +
      "retour, vous pouvez aussi accéder à des hébergements à travers le monde " +
      "grâce à la plateforme.",
    link: "https://nomadhub.ludovicblondon.fr",
    github: "https://github.com/Ludovic-Blondon/nomadhub",
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
  },
  codehub: {
    id: "codehub",
    title: "CodeHub",
    description:
      "CodeHub est un site de documentation technique destiné aux développeurs, construit avec " +
      "Fumadocs et Next.js 15. L'objectif est fournir une documentation complète en français sur les outils et raccourcis essentiels pour " +
      "développeurs, avec un accent particulier sur l'écosystème macOS.",
    link: "https://codehub.ludovicblondon.fr",
    github: "https://github.com/Ludovic-Blondon/codehub",
    metadata: {
      title: "CodeHub",
      description:
        "CodeHub est un site de documentation technique destiné aux développeurs.",
    },
    technologies: ["Next", "Fumadocs", "MDX", "React", "ESLint", "Prettier"],
  },
  argument: {
    id: "argument",
    title: "Argument",
    description:
      "Argument est une application iOS native conçue pour sauvegarder et organiser vos arguments de " +
      "débat sous forme de notes structurées. Elle vous permet d'archiver vos idées, de les " +
      "retrouver rapidement par thème, et de les copier-coller lors de discussions.",
    github: "https://github.com/Ludovic-Blondon/argument",
    metadata: {
      title: "Argument",
      description:
        "Application iOS pour sauvegarder et organiser vos arguments de débat.",
    },
    technologies: ["Swift"],
  },
  portfolio: {
    id: "portfolio",
    title: "Portfolio",
    description:
      "J'ai bien sûr également réalisé ce portfolio. J'ai utilisé des technologies modernes comme Next.js 15, Shadcn/ui et Tailwind CSS 4. " +
      "J'ai voulu créer un design minimaliste et épuré pour mettre en valeur mes projets et compétences. " +
      "Le site intègre un système de thèmes (dark/light mode) et une architecture modulaire pour faciliter les futures évolutions.",
    github: "https://github.com/Ludovic-Blondon/portfolio",
    metadata: {
      title: "Portfolio",
      description:
        "Portfolio personnel construit avec Next.js 15 et Tailwind CSS.",
    },
    technologies: ["Next", "React", "TypeScript", "Tailwind", "Shadcn"],
  },
  cocotte: {
    id: "cocotte",
    title: "Cocotte",
    description:
      "Cocotte est un site qui regroupe des recettes de cuisine. Conçu pour être clair, concis et intuitif, sans une tonne de publicités " +
      "qui peuvent gâcher l'expérience utilisateur. Les recettes partagées ont été réalisées à plusieurs reprises et ont pu être ainsi optimisées. " +
      "Il est construit avec Next.js 15 et Tailwind CSS.",
    github: "https://github.com/Ludovic-Blondon/cocotte",
    link: "https://cocotte.ludovicblondon.fr",
    metadata: {
      title: "Cocotte",
      description:
        "Site de recettes de cuisine clair et sans publicité, avec des recettes testées et optimisées.",
    },
    technologies: ["Next", "React", "TypeScript", "Tailwind", "Shadcn"],
  },
};
