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

/** Nombre de projets mis en avant dans la section « Sélection » de l'accueil. */
const FEATURED_COUNT = 3;

function toTitle(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/** Repli sur la première phrase de la description quand aucune accroche n'est fournie. */
function toTagline(description: string): string {
  const [firstSentence] = description.split(/(?<=\.)\s/);
  return firstSentence ?? description;
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
    tagline: override?.tagline ?? toTagline(description),
    link: override?.link || repo.homepage || undefined,
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
  orderedRepos.map((repo) => [repo.id, buildProject(repo)]),
);

/** Projets triés alphabétiquement, l'ordre utilisé par la navigation. */
export const projectsByTitle: ProjectConfig[] = Object.values(projects).sort(
  (a, b) => a.title.localeCompare(b.title, "fr"),
);

/** Numéro « 01 », « 02 »… attribué selon l'ordre alphabétique, partagé par la navigation et les pages projet. */
export const projectNumbers: Record<string, string> = Object.fromEntries(
  projectsByTitle.map((project, index) => [
    project.id,
    String(index + 1).padStart(2, "0"),
  ]),
);

/** Les premiers projets de l'ordre curaté, mis en avant sur l'accueil. */
export const featuredProjects: ProjectConfig[] = Object.values(projects).slice(
  0,
  FEATURED_COUNT,
);
