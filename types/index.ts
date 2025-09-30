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
