import { projects } from "@/config/projects";
import { ProjectCard } from "@/components/project-card";

export default function Page() {
  return <ProjectCard project={projects.cocotte} />;
}
