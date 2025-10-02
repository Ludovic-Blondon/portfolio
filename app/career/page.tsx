import { Metadata } from "next";
import { experiences } from "@/config/experiences";
import { PageWrapper } from "@/components/page-wrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carrière",
  description:
    "Expériences professionnelles de Ludovic Blondon, développeur fullstack",
};

export default function CareerPage() {
  return (
    <PageWrapper>
      <h1 className="text-2xl font-medium">Expériences professionnelles</h1>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border/60 md:left-8" />

        {/* Experiences */}
        <div className="space-y-12">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.period.start}`}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/70" />

              <div className="space-y-6">
                {/* Header: Company, Period */}
                <div className="space-y-1">
                  <h2 className="text-lg font-medium">{experience.company}</h2>
                  <div className="text-xs text-muted-foreground">
                    {experience.period.start} -{" "}
                    {experience.period.end === "Present"
                      ? "Aujourd'hui"
                      : experience.period.end}
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-1">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement.id}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <span className="text-muted-foreground/40 flex-shrink-0">
                        –
                      </span>
                      <span className="text-muted-foreground">
                        {achievement.description}
                      </span>
                      {achievement.landingPage && (
                        <span className="text-muted-foreground/70">
                          <Link
                            href={achievement.landingPage.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visiter ${achievement.landingPage.name} (ouvre dans un nouvel onglet)`}
                            className="hover:text-foreground transition-colors"
                          >
                            {achievement.landingPage.name} ↗
                          </Link>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground/70">
                  {experience.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
