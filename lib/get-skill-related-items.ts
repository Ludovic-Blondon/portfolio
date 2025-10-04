import { experiences } from "@/config/experiences";
import { projects } from "@/config/projects";
import { studies } from "@/config/studies";
import { Skill } from "@/config/skills";
import { ProjectConfig, Study, Experience } from "@/types";

export type SkillRelatedItems = {
  projects: ProjectConfig[];
  experiences: Experience[];
  studies: Study[];
};

export function getSkillRelatedItems(skill: Skill): SkillRelatedItems {
  // Get related projects
  const relatedProjects = skill.projectIds
    .map((id) => projects[id])
    .filter(Boolean);

  // Get related experiences (full experiences, not individual achievements)
  // Extract unique company names from achievementIds
  const companyNames = Array.from(
    new Set(skill.achievementIds.map(({ company }) => company))
  );

  const relatedExperiences = companyNames
    .map((company) => experiences.find((exp) => exp.company === company))
    .filter(Boolean) as Experience[];

  // Get related studies
  const relatedStudies = skill.studyIds
    .map((id) => studies.find((study) => study.id === id))
    .filter(Boolean) as Study[];

  return {
    projects: relatedProjects,
    experiences: relatedExperiences,
    studies: relatedStudies,
  };
}
