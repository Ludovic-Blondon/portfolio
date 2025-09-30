import { ProjectCard } from "@/components/project-card";
import { projects } from "@/config/projects";

export const metadata = projects.codehub.metadata;

export default function Page() {
  return <ProjectCard project={projects.codehub} />;
}
