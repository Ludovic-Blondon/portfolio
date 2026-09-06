import { Metadata } from "next";

export type ProjectConfig = {
  id: string;
  title: string;
  description: string;
  /** Accroche courte affichée sur les cartes de la sélection en page d'accueil. */
  tagline: string;
  link?: string;
  npm?: string;
  /** Fiche App Store, pour les projets mobiles publiés. */
  appStore?: string;
  /** Fiche Google Play, pour les projets mobiles publiés. */
  playStore?: string;
  github: string;
  metadata: Metadata;
  technologies: string[];
};

export type GitHubProjectData = {
  id: string;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
};

export type GeneratedProjectsData = {
  generated_at: string;
  projects: GitHubProjectData[];
};

export type ProjectOverride = Partial<Omit<ProjectConfig, "id">> & {
  order?: number;
};

export type NavigationConfig = {
  label: string;
  items: NavigationItem[];
};

export type NavigationItem = {
  label: string;
  href: string;
  /** Numéro d'ordre affiché devant les projets dans la navigation. */
  num?: string;
};

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
};

export type Experience = {
  company: string;
  period: {
    start: string;
    end: string | "Present";
  };
  achievements: Achievement[];
  technologies: string[];
  projects?: Project[];
};

export type Achievement = {
  id: string;
  description: string;
  landingPage?: {
    name: string;
    link: string;
  };
};

export type AchievementWithCompany = Achievement & { company: string };

export type Study = {
  id: string;
  year: string;
  title: string;
  descriptions: string[];
  certificates: {
    name: string;
    path: string;
  }[];
  technologies: string[];
};
