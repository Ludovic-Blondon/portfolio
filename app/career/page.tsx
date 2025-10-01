import { Metadata } from "next";
import { experiences } from "@/config/experiences";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Career | Ludovic Blondon",
  description:
    "Expériences professionnelles de Ludovic Blondon, développeur fullstack",
};

export default function CareerPage() {
  return (
    <PageWrapper>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Expériences professionnelles</h1>
        <p className="text-muted-foreground">
          Mon parcours en tant que développeur fullstack
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-8" />

        {/* Experiences */}
        <div className="space-y-12">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.period.start}`}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <div className="space-y-6">
                {/* Header: Company, Period */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    {experience.company}
                  </h2>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {experience.period.start} -{" "}
                      {experience.period.end === "Present"
                        ? "Aujourd'hui"
                        : experience.period.end}
                    </span>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h3 className="font-semibold mb-3 text-sm">Réalisations</h3>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-primary flex-shrink-0">•</span>
                        <span className="text-muted-foreground">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-semibold mb-3 text-sm">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
