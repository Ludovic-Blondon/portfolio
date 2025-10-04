"use client";

import { Skill } from "@/config/skills";
import { getSkillRelatedItems } from "@/lib/get-skill-related-items";
import Link from "next/link";
import { useEffect } from "react";

interface SkillDetailsProps {
  skill: Skill;
  onClose: () => void;
}

export function SkillDetails({ skill, onClose }: SkillDetailsProps) {
  const { projects, achievements, studies } = getSkillRelatedItems(skill);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const hasContent =
    projects.length > 0 || achievements.length > 0 || studies.length > 0;

  if (!hasContent) {
    return null;
  }

  return (
    <div className="space-y-6 border-t pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">{skill.name}</h2>
        <button
          onClick={onClose}
          className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors"
          aria-label="Fermer"
        >
          Fermer ✕
        </button>
      </div>

      {/* Projects */}
      {projects.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Projets personnels
          </h3>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.id} className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">{project.title}</span>
                  <div className="flex gap-2 text-xs text-muted-foreground/70">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                        aria-label={`Visiter ${project.title} (ouvre dans un nouvel onglet)`}
                      >
                        Site ↗
                      </Link>
                    )}
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors"
                      aria-label={`Voir le code source de ${project.title} sur GitHub (ouvre dans un nouvel onglet)`}
                    >
                      GitHub ↗
                    </Link>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Expériences professionnelles
          </h3>
          <ul className="space-y-2">
            {achievements.map((achievement) => (
              <li
                key={`${achievement.company}-${achievement.id}`}
                className="flex gap-3 text-sm leading-relaxed"
              >
                <span className="text-muted-foreground/40 flex-shrink-0">
                  –
                </span>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-muted-foreground">
                      {achievement.description}
                    </span>
                    {achievement.landingPage && (
                      <Link
                        href={achievement.landingPage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors"
                        aria-label={`Visiter ${achievement.landingPage.name} (ouvre dans un nouvel onglet)`}
                      >
                        {achievement.landingPage.name} ↗
                      </Link>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground/70">
                    {achievement.company}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Studies */}
      {studies.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Formations
          </h3>
          <ul className="space-y-4">
            {studies.map((study) => (
              <li key={study.id} className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">{study.title}</span>
                  <span className="text-xs text-muted-foreground/70">
                    {study.year}
                  </span>
                </div>
                <ul className="space-y-1">
                  {study.descriptions.map((desc, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed"
                    >
                      <span className="text-muted-foreground/40 flex-shrink-0">
                        –
                      </span>
                      <span className="text-muted-foreground">{desc}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
