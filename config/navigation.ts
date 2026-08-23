import { NavigationConfig } from "@/types";
import { projectNumbers, projectsByTitle } from "./projects";

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
    items: projectsByTitle.map((project) => ({
      label: project.title,
      href: `/${project.id}`,
      num: projectNumbers[project.id],
    })),
  },
};
