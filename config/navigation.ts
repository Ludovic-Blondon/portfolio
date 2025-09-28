import { NavigationConfig } from "@/types/sidebar";

export const navigation: {
  navAbout: NavigationConfig;
  navProjects: NavigationConfig;
} = {
  navAbout: {
    label: "Présentation",
    items: [
      {
        label: "Mon parcours",
        href: "/career",
      },
      {
        label: "Mes études",
        href: "/studies",
      },
      {
        label: "Mes compétences",
        href: "/skills",
      },
    ],
  },
  navProjects: {
    label: "Mes projets",
    items: [
      {
        label: "NomadHub",
        href: "/projects/nomadhub",
      },
      {
        label: "CodeHub",
        href: "/projects/codehub",
      },
      {
        label: "Argument",
        href: "/projects/argument",
      },
    ],
  },
};
