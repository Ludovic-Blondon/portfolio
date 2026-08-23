import { Metadata } from "next";
import { experiences } from "@/config/experiences";
import { PageWrapper } from "@/components/page-wrapper";
import { Entry, EntryLine, EntryLines, EntryList } from "@/components/entry";
import { TagList } from "@/components/tag-list";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carrière",
  description:
    "Expériences professionnelles de Ludovic Blondon, développeur fullstack",
};

export default function CareerPage() {
  return (
    <PageWrapper className="max-w-[900px] gap-11">
      <h1 className="font-pixel text-[18px] leading-[1.6] md:text-[22px]">
        Expériences
        <br />
        professionnelles
      </h1>

      <EntryList>
        {experiences.map((experience) => (
          <Entry
            key={`${experience.company}-${experience.period.start}`}
            title={experience.company}
            meta={`${experience.period.start} — ${
              experience.period.end === "Present"
                ? "Aujourd'hui"
                : experience.period.end
            }`}
          >
            <EntryLines>
              {experience.achievements.map((achievement) => (
                <EntryLine key={achievement.id}>
                  {achievement.description}
                  {achievement.landingPage && (
                    <>
                      {" "}
                      <Link
                        href={achievement.landingPage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visiter ${achievement.landingPage.name} (ouvre dans un nouvel onglet)`}
                        className="text-primary hover:underline"
                      >
                        {achievement.landingPage.name} ↗
                      </Link>
                    </>
                  )}
                </EntryLine>
              ))}
            </EntryLines>

            <TagList items={experience.technologies} size="sm" />
          </Entry>
        ))}
      </EntryList>
    </PageWrapper>
  );
}
