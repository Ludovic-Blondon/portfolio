"use client";

import { Skill } from "@/config/skills";
import { getSkillRelatedItems } from "@/lib/get-skill-related-items";
import Link from "next/link";
import { useEffect } from "react";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-dim text-[10px] tracking-[.2em] uppercase">
        — {title}
      </h3>
      {children}
    </section>
  );
}

function ItemHeader({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-3">
      <span className="text-chip text-[13px]">{title}</span>
      {meta && <span className="text-dim text-[11px]">{meta}</span>}
    </div>
  );
}

function Lines({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-[9px]">{children}</ul>;
}

function Line({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-muted-foreground text-[13px] leading-[1.75]">
      {children}
    </li>
  );
}

export function SkillDetails({
  skill,
  onClose,
}: {
  skill: Skill;
  onClose: () => void;
}) {
  const { projects, experiences, studies } = getSkillRelatedItems(skill);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const hasContent =
    projects.length > 0 || experiences.length > 0 || studies.length > 0;

  if (!hasContent) return null;

  return (
    <div className="border-border flex flex-col gap-8 border-t pt-[26px]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-pixel text-primary text-[11px] leading-[1.7]">
          {skill.name}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="text-dim hover:text-primary cursor-pointer text-[11px] tracking-[.18em] transition-colors"
        >
          FERMER ✕
        </button>
      </div>

      {projects.length > 0 && (
        <Section title="Projets personnels">
          <ul className="flex flex-col gap-5">
            {projects.map((project) => (
              <li key={project.id} className="flex flex-col gap-2">
                <div className="flex flex-wrap items-baseline gap-3">
                  <Link
                    href={`/${project.id}`}
                    className="text-chip hover:text-primary text-[13px] transition-colors"
                  >
                    {project.title}
                  </Link>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visiter ${project.title} (ouvre dans un nouvel onglet)`}
                      className="text-dim hover:text-primary text-[11px] transition-colors"
                    >
                      SITE ↗
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le code source de ${project.title} sur GitHub (ouvre dans un nouvel onglet)`}
                    className="text-dim hover:text-primary text-[11px] transition-colors"
                  >
                    GITHUB ↗
                  </Link>
                </div>
                <p className="text-muted-foreground text-[13px] leading-[1.75]">
                  {project.tagline}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {experiences.length > 0 && (
        <Section title="Expériences professionnelles">
          <ul className="flex flex-col gap-5">
            {experiences.map((experience) => (
              <li key={experience.company} className="flex flex-col gap-2">
                <ItemHeader
                  title={experience.company}
                  meta={`${experience.period.start} — ${
                    experience.period.end === "Present"
                      ? "Aujourd'hui"
                      : experience.period.end
                  }`}
                />
                <Lines>
                  {experience.achievements.map((achievement) => (
                    <Line key={achievement.id}>
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
                    </Line>
                  ))}
                </Lines>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {studies.length > 0 && (
        <Section title="Formations">
          <ul className="flex flex-col gap-5">
            {studies.map((study) => (
              <li key={study.id} className="flex flex-col gap-2">
                <ItemHeader title={study.title} meta={study.year} />
                <Lines>
                  {study.descriptions.map((description) => (
                    <Line key={description}>{description}</Line>
                  ))}
                </Lines>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
