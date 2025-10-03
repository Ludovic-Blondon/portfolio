import { Study } from "@/types";

export const studies: Study[] = [
  {
    id: "1",
    year: "2025",
    title: "Certifications Nest et Next",
    descriptions: [
      "Nest Fundamentals : REST API, PostgreSQL avec TypeORM, Dependency Injection, Configuration, OpenAPI, Tests, MongoDB avec Mongoose",
      "Nest Authentication : Authentification approfondie, Autorisation, API Keys, Google Authentication, Two-Factor Authentication",
      "Next Fundamentals : Styling, Optimisations, Routing, Data Fetching, Search et Pagination, Mutations avec Server Actions, Error Handling, Form Validation et Accessibilité, Authentication avec NextAuth.js, Metadata",
    ],
    certificates: [
      {
        name: "Nest Fundamentals",
        path: "/certificat-de-reussite-nestjs.pdf",
      },
      {
        name: "Nest Authentication",
        path: "/nestjs-authentication-course.pdf",
      },
      {
        name: "Next Fundamentals",
        path: "/next-dashboard-app-certificate.pdf",
      },
    ],
    technologies: ["Nest", "Next", "TypeScript", "JavaScript", "React"],
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
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Git"],
  },
];
