import { Metadata } from "next";
import { experiences } from "@/config/experiences";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";
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
          {experiences.map((experience, index) => (
            <div key={index} className="relative pl-8 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <Card>
                <CardHeader>
                  <div className="space-y-3">
                    {/* Company and Role */}
                    <div>
                      <h2 className="text-xl font-bold flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        {experience.role}
                      </h2>
                      <p className="text-lg text-muted-foreground mt-1">
                        {experience.company}
                      </p>
                    </div>

                    {/* Period and Location */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {experience.period.start} -{" "}
                          {experience.period.end === "Present"
                            ? "Aujourd'hui"
                            : experience.period.end}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {experience.description}
                  </p>

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
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
