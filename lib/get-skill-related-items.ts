import { experiences } from "@/config/experiences";
import { projects } from "@/config/projects";
import { studies } from "@/config/studies";
import { Skill } from "@/config/skills";
import { ProjectConfig, Study, AchievementWithCompany } from "@/types";

export type SkillRelatedItems = {
  projects: ProjectConfig[];
  achievements: AchievementWithCompany[];
  studies: Study[];
};

export function getSkillRelatedItems(skill: Skill): SkillRelatedItems {
  // Get related projects
  const relatedProjects = skill.projectIds
    .map((id) => projects[id])
    .filter(Boolean);

  // Get related achievements with company info
  const relatedAchievements = skill.achievementIds.flatMap(
    ({ company, id }) => {
      const experience = experiences.find((exp) => exp.company === company);
      if (!experience) return [];

      const achievement = experience.achievements.find((ach) => ach.id === id);
      if (!achievement) return [];

      return [{ ...achievement, company }];
    }
  );

  // Get related studies
  const relatedStudies = skill.studyIds
    .map((id) => studies.find((study) => study.id === id))
    .filter(Boolean) as Study[];

  return {
    projects: relatedProjects,
    achievements: relatedAchievements,
    studies: relatedStudies,
  };
}
