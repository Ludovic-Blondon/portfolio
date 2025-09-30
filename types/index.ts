import { Metadata } from "next";

export type ProjectConfig = {
  title: string;
  description: string;
  link?: string;
  github: string;
  metadata: Metadata;
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
  role: string;
  period: {
    start: string;
    end: string | "Present";
  };
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projects?: Project[];
};
