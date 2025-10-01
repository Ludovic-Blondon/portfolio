import Link from "next/link";
import { PageWrapper } from "./page-wrapper";
import { ProjectConfig } from "@/types";

export function ProjectCard({ project }: { project: ProjectConfig }) {
  return (
    <PageWrapper>
      <h1 className="text-2xl font-medium">{project.title}</h1>

      <div className="space-y-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground/70">
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label={`Visiter le site ${project.title}`}
            >
              Visiter le site ↗
            </Link>
          )}
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label={`Consulter le code de ${project.title} sur GitHub`}
          >
            GitHub ↗
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
