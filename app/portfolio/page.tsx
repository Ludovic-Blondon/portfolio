import { projects } from "@/config/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata = projects.portfolio.metadata;

export default function Page() {
  return <ProjectCard project={projects.portfolio} />;
}
