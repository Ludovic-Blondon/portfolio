import Link from "next/link";
import { PageWrapper } from "./page-wrapper";
import { ConsoleLink } from "./console-link";
import { TagList } from "./tag-list";
import { projectNumbers } from "@/config/projects";
import { ProjectConfig } from "@/types";

type ProjectLink = { href: string; label: string; ariaLabel: string };

export function ProjectCard({ project }: { project: ProjectConfig }) {
  const links: ProjectLink[] = [
    {
      href: project.link,
      label: "VISITER ↗",
      ariaLabel: `Visiter le site ${project.title}`,
    },
    {
      href: project.appStore,
      label: "APP STORE ↗",
      ariaLabel: `Télécharger ${project.title} sur l'App Store`,
    },
    {
      href: project.playStore,
      label: "GOOGLE PLAY ↗",
      ariaLabel: `Télécharger ${project.title} sur Google Play`,
    },
    {
      href: project.npm,
      label: "NPM ↗",
      ariaLabel: `Voir le package npm ${project.title}`,
    },
    {
      href: project.github,
      label: "GITHUB ↗",
      ariaLabel: `Consulter le code de ${project.title} sur GitHub`,
    },
  ].filter((link): link is ProjectLink => link.href !== undefined);

  return (
    <PageWrapper className="max-w-[780px] gap-[34px]">
      <Link
        href="/"
        className="text-dim hover:text-primary text-[11px] tracking-[.18em] transition-colors"
      >
        ← ACCUEIL
      </Link>

      <div className="flex items-baseline gap-4">
        <span className="font-pixel text-num text-[11px]" aria-hidden>
          {projectNumbers[project.id]}
        </span>
        <h1 className="font-pixel text-[18px] leading-[1.6] md:text-[22px]">
          {project.title}
        </h1>
      </div>

      <div className="bg-border h-px" />

      <p className="text-muted-foreground text-sm leading-[2]">
        {project.description}
      </p>

      <TagList items={project.technologies} />

      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <ConsoleLink
            key={link.href}
            href={link.href}
            external
            aria-label={link.ariaLabel}
          >
            {link.label}
          </ConsoleLink>
        ))}
      </div>
    </PageWrapper>
  );
}
