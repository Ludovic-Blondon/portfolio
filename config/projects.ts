import { ProjectConfig } from "@/types";

export const projects: Record<string, ProjectConfig> = {
  nomadhub: {
    title: "NomadHub",
    description:
      "NomadHub est une plateforme d'hébergement de voyageurs. Vous pouvez " +
      "mettre à disposition des voyageurs, votre salon ou une chambre d'ami. En " +
      "retour, vous pouvez aussi accéder à des hébergements à travers le monde " +
      "grâce à la plateforme.",
    link: "https://nomadhub-tau.vercel.app/",
    github: "https://github.com/Ludovic-Blondon/nomadhub",
    metadata: {
      title: "NomadHub",
      description: "NomadHub est une plateforme d'hébergement de voyageurs.",
    },
  },
  codehub: {
    title: "CodeHub",
    description:
      "CodeHub est un site de documentation technique destiné aux développeurs, construit avec " +
      "Fumadocs et Next.js 15. L'objectif est fournir une documentation complète en français sur les outils et raccourcis essentiels pour " +
      "développeurs, avec un accent particulier sur l'écosystème macOS.",
    link: "https://codehub-sepia.vercel.app/",
    github: "https://github.com/Ludovic-Blondon/codehub",
    metadata: {
      title: "CodeHub",
      description:
        "CodeHub est un site de documentation technique destiné aux développeurs.",
    },
  },
  argument: {
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
  },
};
