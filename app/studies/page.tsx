import { Metadata } from "next";
import { studies } from "@/config/studies";
import { PageWrapper } from "@/components/page-wrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "Parcours d'apprentissage de Ludovic Blondon, développeur fullstack autodidacte",
};

export default function StudiesPage() {
  return (
    <PageWrapper>
      <h1 className="text-2xl font-medium">Parcours</h1>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border/60 md:left-8" />

        {/* Studies */}
        <div className="space-y-12">
          {studies.map((study) => (
            <div key={study.id} className="relative pl-8 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/70" />

              <div className="space-y-6">
                {/* Header: Title, Year */}
                <div className="space-y-1">
                  <h2 className="text-lg font-medium">{study.title}</h2>
                  <div className="text-xs text-muted-foreground">
                    {study.year}
                  </div>
                </div>

                {/* Descriptions */}
                <ul className="space-y-1">
                  {study.descriptions.map((description, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <span className="text-muted-foreground/40 flex-shrink-0">
                        –
                      </span>
                      <span className="text-muted-foreground">
                        {description}
                      </span>
                    </li>
                  ))}
                  <li className="flex gap-3 text-sm leading-relaxed">
                    <span className="ml-2 text-muted-foreground/70 flex flex-wrap gap-3">
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
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
