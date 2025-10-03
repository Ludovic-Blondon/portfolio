"use client";

import { SkillsFilter } from "@/components/skills-filter";
import { useState } from "react";

interface SkillsFilterClientProps {
  skills: string[];
}

export function SkillsFilterClient({ skills }: SkillsFilterClientProps) {
  const [filter, setFilter] = useState("");

  const filteredSkills = filter
    ? skills.filter((skill) =>
        skill.toLowerCase().includes(filter.toLowerCase())
      )
    : skills;

  return (
    <>
      <div className="max-w-xs">
        <SkillsFilter skills={skills} value={filter} onValueChange={setFilter} />
      </div>

      {filteredSkills.length > 0 ? (
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground/70">
          {filteredSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground/70">
          Aucune compétence ne correspond à votre recherche.
        </p>
      )}
    </>
  );
}
