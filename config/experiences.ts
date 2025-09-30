import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "IFT",
    role: "Développeur Fullstack",
    period: {
      start: "07/2022",
      end: "Present",
    },
    location: "Paris",
    description:
      "Développement et maintenance d'applications fullstack avec un focus sur l'optimisation des performances et l'architecture moderne.",
    achievements: [
      "Refonte et optimisation de bases de données MySQL",
      "Développement d'API avec Node.js, Express et TypeScript",
      "Mise en place de tests automatisés avec Jest, Vitest, PHPUnit et Pytest",
      "Automatisation du transfert de fichiers via FTP et SFTP avec Python, PHP et Node.js",
      "Développement d'une interface utilisateur B2B avec React et Next.js",
      "Gestion et consommation de files de messages avec RabbitMQ et Node.js",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "TypeScript",
      "Jest",
      "Vitest",
      "Vue.js",
      "React",
      "Next.js",
      "PHP",
      "Laravel",
      "Python",
      "MySQL",
      "RabbitMQ",
    ],
  },
  {
    company: "MMCreation",
    role: "Développeur Fullstack",
    period: {
      start: "09/2019",
      end: "06/2022",
    },
    location: "Paris",
    description:
      "Développement d'applications web complexes et maintenance de systèmes existants.",
    achievements: [
      "Développement d'un DAM (Digital Asset Management) from scratch avec React, Symfony et API Platform",
      "Développement, mise à jour et maintenance de web scrapers (Node.js)",
      "Mise à jour et maintenance d'anciens sites web avec PHP et jQuery",
    ],
    technologies: [
      "Node.js",
      "JavaScript",
      "React",
      "PHP",
      "Symfony",
      "API Platform",
      "jQuery",
    ],
  },
  {
    company: "Auto-Entreprise",
    role: "Développeur Frontend",
    period: {
      start: "01/2019",
      end: "08/2019",
    },
    location: "Paris",
    description:
      "Développement d'interfaces web et intégration de publicités interactives.",
    achievements: [
      "Intégration de bannières publicitaires sur des sites web avec HTML, CSS et JavaScript",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
