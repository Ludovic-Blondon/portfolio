import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "IFT",
    period: {
      start: "2022",
      end: "Present",
    },
    achievements: [
      "Refonte et optimisation de bases de données MySQL",
      "Développement d'API avec Node, Express et TypeScript",
      "Mise en place de tests automatisés avec Jest, Vitest, PHPUnit et Pytest",
      "Automatisation du transfert de fichiers via FTP et SFTP avec Python, PHP et Node",
      "Développement d'un SaaS pour passer des commandes B2B avec React et Next",
      "Gestion et consommation de files de messages avec RabbitMQ et Node",
    ],
    technologies: [
      "JavaScript",
      "Node",
      "TypeScript",
      "Jest",
      "Vitest",
      "Vue",
      "React",
      "Next",
      "PHP",
      "Laravel",
      "Python",
      "MySQL",
      "RabbitMQ",
    ],
  },
  {
    company: "MMCreation",
    period: {
      start: "2019",
      end: "2022",
    },
    achievements: [
      "Développement d'un DAM (Digital Asset Management) from scratch avec React, Symfony et API Platform",
      "Développement, mise à jour et maintenance de web scrapers (Node)",
      "Mise à jour et maintenance d'anciens sites web avec PHP et jQuery",
    ],
    technologies: [
      "Node",
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
    period: {
      start: "2019",
      end: "2019",
    },
    achievements: [
      "Intégration de bannières publicitaires sur des sites web avec HTML, CSS et JavaScript",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
