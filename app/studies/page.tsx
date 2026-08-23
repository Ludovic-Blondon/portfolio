import { Metadata } from "next";
import { studies } from "@/config/studies";
import { PageWrapper } from "@/components/page-wrapper";
import { Entry, EntryLine, EntryLines, EntryList } from "@/components/entry";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation",
  description:
    "Formation et certifications de Ludovic Blondon, développeur fullstack autodidacte",
};

export default function StudiesPage() {
  return (
    <PageWrapper className="max-w-[900px] gap-11">
      <h1 className="font-pixel text-[18px] leading-[1.6] md:text-[22px]">
        Mes études
      </h1>

      <EntryList>
        {studies.map((study) => (
          <Entry key={study.id} title={study.title} meta={study.year}>
            <EntryLines>
              {study.descriptions.map((description) => (
                <EntryLine key={description}>{description}</EntryLine>
              ))}
            </EntryLines>

            {study.certificates.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {study.certificates.map((certificate) => (
                  <li key={certificate.path}>
                    <Link
                      href={certificate.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${certificate.name} (ouvre dans un nouvel onglet)`}
                      className="border-border text-faint hover:border-primary hover:text-primary block border px-2 py-[5px] text-[10px] tracking-[.08em] transition-colors"
                    >
                      {certificate.name} ↗
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </Entry>
        ))}
      </EntryList>
    </PageWrapper>
  );
}
