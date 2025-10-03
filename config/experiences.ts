import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "IFT",
    period: {
      start: "2022",
      end: "Present",
    },
    achievements: [
      {
        id: "1",
        description: "Refonte et optimisation de bases de données MySQL",
      },
      {
        id: "2",
        description: "Développement d'API avec Node, Express et TypeScript",
      },
      {
        id: "3",
        description:
          "Mise en place de tests automatisés avec Jest, Vitest, PHPUnit et Pytest",
      },
      {
        id: "4",
        description:
          "Automatisation du transfert de fichiers via FTP et SFTP avec Python, PHP et Node",
      },
      {
        id: "5",
        description:
          "Développement d'un SaaS pour passer des commandes B2B avec React et Next",
      },
      {
        id: "6",
        description:
          "Gestion et consommation de files de messages avec RabbitMQ et Node",
      },
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
      {
        id: "1",
        description:
          "Développement d'un widget de reservation de chambre d'hotel ou séminaire à la journée avec React, Symfony",
        landingPage: {
          name: "Breaking Day",
          link: "https://breaking-day.com/",
        },
      },
      {
        id: "2",
        description:
          "Développement d'un DAM (Digital Asset Management) from scratch avec React, Symfony",
        landingPage: {
          name: "HapiDam",
          link: "https://hapidam.com/",
        },
      },
      {
        id: "3",
        description:
          "Développement, mise à jour et maintenance de web scrapers (Node)",
      },
      {
        id: "4",
        description:
          "Mise à jour et maintenance d'anciens sites web avec PHP et jQuery",
      },
    ],
    technologies: [
      "Node",
      "JavaScript",
      "React",
      "PHP",
      "Symfony",
      "API Platform",
      "JQuery",
    ],
  },
  {
    company: "Auto-Entreprise",
    period: {
      start: "2019",
      end: "2019",
    },
    achievements: [
      {
        id: "1",
        description:
          "Intégration de bannières publicitaires sur des sites web avec HTML, CSS et JavaScript",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];
