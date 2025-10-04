import { experiences } from "./experiences";
import { projects } from "./projects";
import { studies } from "./studies";

export type Skill = {
  name: string;
  projectIds: string[];
  achievementIds: { company: string; id: string }[];
  studyIds: string[];
};

// Helper to get or create a skill in the map
function getOrCreateSkill(map: Map<string, Skill>, tech: string): Skill {
  if (!map.has(tech)) {
    map.set(tech, {
      name: tech,
      projectIds: [],
      achievementIds: [],
      studyIds: [],
    });
  }
  return map.get(tech)!;
}

// Build skills with references to related projects, achievements, and studies
function buildSkills(): Skill[] {
  const skillsMap = new Map<string, Skill>();

  // Process projects
  Object.values(projects).forEach((project) => {
    project.technologies.forEach((tech) => {
      getOrCreateSkill(skillsMap, tech).projectIds.push(project.id);
    });
  });

  // Process experiences (achievements)
  experiences.forEach((experience) => {
    experience.technologies.forEach((tech) => {
      const skill = getOrCreateSkill(skillsMap, tech);
      experience.achievements.forEach((achievement) => {
        skill.achievementIds.push({
          company: experience.company,
          id: achievement.id,
        });
      });
    });
  });

  // Process studies
  studies.forEach((study) => {
    study.technologies.forEach((tech) => {
      getOrCreateSkill(skillsMap, tech).studyIds.push(study.id);
    });
  });

  // Convert to array and sort by name
  return Array.from(skillsMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

export const skills = buildSkills();
