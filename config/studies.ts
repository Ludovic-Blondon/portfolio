import { Study } from "@/types";

export const studies: Study[] = [
  {
    id: "1",
    year: "2025",
    title: "Certifications NestJS et NextJS",
    descriptions: [
      "NestJS Fundamentals : REST API, PostgreSQL avec TypeORM, Dependency Injection, Configuration, OpenAPI, Tests, MongoDB avec Mongoose",
      "NestJS Authentication : Authentification approfondie, Autorisation, API Keys, Google Authentication, Two-Factor Authentication",
      "NextJS Fundamentals : Styling, Optimisations, Routing, Data Fetching, Search et Pagination, Mutations avec Server Actions, Error Handling, Form Validation et Accessibilité, Authentication avec NextAuth.js, Metadata",
    ],
    certificates: [
      {
        name: "NestJS Fundamentals",
        path: "/Certificat de réussite NestJS.pdf",
      },
      {
        name: "NestJS Authentication",
        path: "/nestjs-authentication-course.pdf",
      },
      {
        name: "NextJS Fundamentals",
        path: "/next-dashboard-app-certificate.pdf",
      },
    ],
  },
  {
    id: "2",
    year: "2019",
    title: "Développeur Web",
    descriptions: [
      "Intégration HTML5 et CSS3 depuis maquettes graphiques",
      "Standards du Web et normes W3C, accessibilité et référencement",
      "Responsive design adapté à tous types d'écrans",
      "JavaScript interactif et connexion aux API",
      "Programmation orientée objet",
      "Gestion des comptes utilisateurs et des erreurs",
      "Création et gestion de bases de données",
    ],
    certificates: [
      {
        name: "Voir le diplôme",
        path: "/Diplome.pdf",
      },
    ],
  },
];
