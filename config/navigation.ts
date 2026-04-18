import { NavigationConfig } from "@/types";
import { projects } from "./projects";

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
    items: Object.values(projects)
      .map((project) => ({
        label: project.title,
        href: `/${project.id}`,
      }))
      .sort((a, b) => a.label.localeCompare(b.label, "fr")),
  },
};
