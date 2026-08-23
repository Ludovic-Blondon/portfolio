import { NavigationConfig } from "@/types";
import { orderedProjects, projectNumbers } from "./projects";

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
    items: orderedProjects.map((project) => ({
      label: project.title,
      href: `/${project.id}`,
      num: projectNumbers[project.id],
    })),
  },
};
