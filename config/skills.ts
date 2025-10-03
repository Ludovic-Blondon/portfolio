import { experiences } from "./experiences";
import { projects } from "./projects";
import { studies } from "./studies";

// Combine all technologies from studies and experiences, remove duplicates, and sort alphabetically
export const skills = Array.from(
  new Set([
    ...studies.flatMap((study) => study.technologies),
    ...experiences.flatMap((experience) => experience.technologies),
    ...Object.values(projects).flatMap((project) => project.technologies),
  ])
).sort();
