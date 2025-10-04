import { NavigationConfig } from "@/types";

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
        label: "Argument",
        href: "/argument",
      },
      {
        label: "CodeHub",
        href: "/codehub",
      },
      {
        label: "NomadHub",
        href: "/nomadhub",
      },
      {
        label: "Portfolio",
        href: "/portfolio",
      },
    ],
  },
};
