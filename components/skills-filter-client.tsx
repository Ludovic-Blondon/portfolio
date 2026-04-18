"use client";

import { SkillsFilter } from "@/components/skills-filter";
import { SkillDetails } from "@/components/skill-details";
import { useState, useRef, useEffect, useMemo } from "react";
import { Skill } from "@/config/skills";

interface SkillsFilterClientProps {
  skills: Skill[];
}

export function SkillsFilterClient({ skills }: SkillsFilterClientProps) {
  const [filter, setFilter] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setSelectedSkill(null);
    // Remove focus from the button to avoid focus ring
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    if (selectedSkill && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedSkill]);

  const filteredSkills = filter
    ? skills.filter((skill) =>
        skill.name.toLowerCase().includes(filter.toLowerCase()),
      )
    : skills;

  // Get all skill names for the filter input
  const skillNames = useMemo(() => skills.map((skill) => skill.name), [skills]);

  return (
    <>
      <div className="max-w-xs">
        <SkillsFilter
          skills={skillNames}
          value={filter}
          onValueChange={setFilter}
        />
      </div>

      {filteredSkills.length > 0 ? (
        <div className="text-muted-foreground/70 flex flex-wrap gap-2 text-sm">
          {filteredSkills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className={`hover:text-foreground cursor-pointer transition-colors ${
                selectedSkill?.name === skill.name
                  ? "text-foreground font-medium"
                  : ""
              }`}
            >
              {skill.name}
            </button>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground/70 text-sm">
          Aucune technologie ne correspond à votre recherche.
        </p>
      )}

      {selectedSkill && (
        <div ref={detailsRef}>
          <SkillDetails skill={selectedSkill} onClose={handleClose} />
        </div>
      )}
    </>
  );
}
