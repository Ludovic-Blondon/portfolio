import { Metadata } from "next";
import { studies } from "@/config/studies";
import { PageWrapper } from "@/components/page-wrapper";
import { Timeline, TimelineItem, TimelineHeader } from "@/components/timeline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation",
  description:
    "Formation et certifications de Ludovic Blondon, développeur fullstack autodidacte",
};

export default function StudiesPage() {
  return (
    <PageWrapper>
      <h1 className="text-2xl font-medium">Formation</h1>

      <Timeline>
        {studies.map((study) => (
          <TimelineItem key={study.id}>
            <TimelineHeader title={study.title} subtitle={study.year} />

            {/* Descriptions */}
            <ul className="space-y-1">
              {study.descriptions.map((description, index) => (
                <li key={index} className="flex gap-3 text-sm leading-relaxed">
                  <span className="text-muted-foreground/40 flex-shrink-0">
                    –
                  </span>
                  <span className="text-muted-foreground">{description}</span>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground/70">
              {study.certificates.map((certificate, index) => (
                <span key={index}>
                  <Link
                    href={certificate.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${certificate.name} (ouvre dans un nouvel onglet)`}
                    className="hover:text-foreground transition-colors"
                  >
                    {certificate.name} ↗
                  </Link>
                </span>
              ))}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </PageWrapper>
  );
}
