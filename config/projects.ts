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

/** Projets mis en avant dans la section « Sélection » de l'accueil, indépendants de l'ordre du menu. */
const FEATURED_IDS = ["diag-adresse", "skullking", "casemorph"];

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

/** Ordre d'affichage : `order` des overrides d'abord, puis les projets récents sans `order`. */
export const orderedProjects: ProjectConfig[] = Object.values(projects);

/** Numéro « 01 », « 02 »… suivant l'ordre d'affichage, partagé par la navigation et les pages projet. */
export const projectNumbers: Record<string, string> = Object.fromEntries(
  orderedProjects.map((project, index) => [
    project.id,
    String(index + 1).padStart(2, "0"),
  ]),
);

export const featuredProjects: ProjectConfig[] = FEATURED_IDS.map(
  (id) => projects[id],
).filter((project) => project !== undefined);
