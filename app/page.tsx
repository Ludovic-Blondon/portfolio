import { PageWrapper } from "@/components/page-wrapper";
import { ConsoleLink } from "@/components/console-link";
import { featuredProjects } from "@/config/projects";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  description: "Ludovic Blondon, développeur fullstack",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ludovic Blondon",
    jobTitle: "Développeur Fullstack",
    url: "https://ludovicblondon.com",
    sameAs: [
      "https://github.com/Ludovic-Blondon",
      "https://www.linkedin.com/in/ludovic-blondon-746016178/",
    ],
  };

  return (
    <PageWrapper className="max-w-[1100px] gap-[52px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="flex max-w-[660px] flex-col gap-[22px]">
        <p className="text-primary text-[11px] tracking-[.24em]">
          DÉVELOPPEUR FULLSTACK · FRANCE
        </p>
        <h1 className="font-pixel text-[22px] leading-[1.6] md:text-[30px]">
          Ludovic
          <br />
          Blondon
          <span className="text-primary animate-blink" aria-hidden>
            _
          </span>
        </h1>
        <p className="text-muted-foreground text-sm leading-[1.95]">
          Développeur fullstack passionné par l'exploration de nouvelles
          technologies et la création de solutions innovantes. J'aime
          expérimenter avec des outils modernes, partager mes découvertes et
          contribuer à des projets ambitieux qui repoussent les limites du
          possible. Mon approche combine curiosité technique et pragmatisme pour
          transformer des idées en produits concrets et performants.
        </p>
        <div className="flex flex-wrap gap-3">
          <ConsoleLink href="/career" aria-label="Parcours">
            PARCOURS ↗
          </ConsoleLink>
          <ConsoleLink
            href="https://github.com/Ludovic-Blondon"
            variant="muted"
            external
            aria-label="GitHub"
          >
            GITHUB ↗
          </ConsoleLink>
          <ConsoleLink
            href="https://www.linkedin.com/in/ludovic-blondon-746016178/"
            variant="muted"
            external
            aria-label="LinkedIn"
          >
            LINKEDIN ↗
          </ConsoleLink>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-dim text-[11px] tracking-[.24em]">SÉLECTION</h2>
          <div className="bg-border h-px flex-1" />
        </div>
        <div className="grid gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/${project.id}`}
              className="border-border hover:border-primary flex min-h-[180px] flex-col gap-3 border p-[22px] transition-colors"
            >
              <span className="font-pixel text-[10px] leading-[1.7]">
                {project.title}
              </span>
              <span className="text-faint text-xs leading-[1.7]">
                {project.tagline}
              </span>
              <span className="text-primary mt-auto text-[10px] tracking-[.12em]">
                {project.technologies.slice(0, 2).join(" · ").toUpperCase()}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
