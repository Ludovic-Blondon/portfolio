import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { PageWrapper } from "./page-wrapper";
import { Button } from "./ui/button";
import { ProjectConfig } from "@/types";

export function ProjectCard({ project }: { project: ProjectConfig }) {
  return (
    <PageWrapper>
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="text-sm text-muted-foreground">{project.description}</p>
      <div className="flex flex-row gap-4">
        {project.link && (
          <Button variant="link" asChild>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter le site ${project.title}`}
            >
              <ExternalLinkIcon className="h-4 w-4" />
              Visiter le site
            </Link>
          </Button>
        )}
        <Button variant="link" asChild>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consulter le code de ${project.title} sur GitHub`}
          >
            <ExternalLinkIcon className="h-4 w-4" />
            Consulter le code sur Github
          </Link>
        </Button>
      </div>
    </PageWrapper>
  );
}
