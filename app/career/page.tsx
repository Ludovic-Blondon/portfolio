import { Metadata } from "next";
import { experiences } from "@/config/experiences";
import { PageWrapper } from "@/components/page-wrapper";
import { Timeline, TimelineItem, TimelineHeader } from "@/components/timeline";
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

      <Timeline>
        {experiences.map((experience) => (
          <TimelineItem key={`${experience.company}-${experience.period.start}`}>
            <TimelineHeader
              title={experience.company}
              subtitle={`${experience.period.start} - ${
                experience.period.end === "Present"
                  ? "Aujourd'hui"
                  : experience.period.end
              }`}
            />

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
          </TimelineItem>
        ))}
      </Timeline>
    </PageWrapper>
  );
}
