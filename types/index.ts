import { Metadata } from "next";

export type ProjectConfig = {
  title: string;
  description: string;
  link?: string;
  github: string;
  metadata: Metadata;
  technologies: string[];
};

export type NavigationConfig = {
  label: string;
  items: { label: string; href: string }[];
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
