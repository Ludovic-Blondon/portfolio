export type ProjectConfig = {
  title: string;
  description: string;
  link: string;
  github: string;
};

export type NavigationConfig = {
  label: string;
  items: { label: string; href: string }[];
};
