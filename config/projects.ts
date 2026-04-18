import generated from "@/lib/generated/projects.json";
import {
  GeneratedProjectsData,
  GitHubProjectData,
  ProjectConfig,
} from "@/types";
import { projectOverrides } from "./project-overrides";
import { mapTopicsToTechnologies } from "./topic-map";

const data = generated as GeneratedProjectsData;

const FALLBACK_DESCRIPTION = "Description à venir prochainement.";

function toTitle(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function buildProject(repo: GitHubProjectData): ProjectConfig {
  const override = projectOverrides[repo.id];
  const title = override?.title ?? toTitle(repo.name);
  const description =
    override?.description ?? repo.description ?? FALLBACK_DESCRIPTION;
  const derivedTechnologies = mapTopicsToTechnologies(repo.topics);

  return {
    id: repo.id,
    title,
    description,
    link: override?.link ?? repo.homepage ?? undefined,
    npm: override?.npm,
    github: override?.github ?? repo.html_url,
    metadata: {
      title,
      description,
      ...override?.metadata,
    },
    technologies: override?.technologies ?? derivedTechnologies,
  };
}

const orderedRepos = [...data.projects].sort((a, b) => {
  const orderA = projectOverrides[a.id]?.order;
  const orderB = projectOverrides[b.id]?.order;

  if (orderA !== undefined && orderB !== undefined) return orderA - orderB;
  if (orderA !== undefined) return -1;
  if (orderB !== undefined) return 1;

  return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
});

export const projects: Record<string, ProjectConfig> = Object.fromEntries(
  orderedRepos.map((repo) => [repo.id, buildProject(repo)])
);
