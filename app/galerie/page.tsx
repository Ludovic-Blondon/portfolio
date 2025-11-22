import { projects } from "@/config/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata = projects.galerie.metadata;

export default function Page() {
  return <ProjectCard project={projects.galerie} />;
}
