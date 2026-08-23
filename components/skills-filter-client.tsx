"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { SkillDetails } from "@/components/skill-details";
import { Skill } from "@/config/skills";
import { cn } from "@/lib/utils";

/** La plateforme ne change jamais en cours de session : rien à écouter. */
const subscribeToPlatform = () => () => {};
const readIsMac = () => navigator.userAgent.includes("Mac");
const readIsMacOnServer = () => false;

export function SkillsFilterClient({ skills }: { skills: Skill[] }) {
  const [filter, setFilter] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const isMac = useSyncExternalStore(
    subscribeToPlatform,
    readIsMac,
    readIsMacOnServer,
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (selectedSkill) {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedSkill]);

  const filteredSkills = useMemo(() => {
    const query = filter.trim().toLowerCase();
    if (!query) return skills;
    return skills.filter((skill) => skill.name.toLowerCase().includes(query));
  }, [filter, skills]);

  const handleClose = () => {
    setSelectedSkill(null);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <>
      <div className="border-border focus-within:border-primary flex max-w-[420px] items-center gap-3 border px-4 py-[14px] transition-colors">
        <span className="text-dim text-[13px]" aria-hidden>
          ›
        </span>
        <input
          ref={inputRef}
          type="search"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Rechercher une technologie..."
          aria-label="Rechercher une technologie"
          className="placeholder:text-dim min-w-0 flex-1 bg-transparent text-[13px] outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {filter && (
          <button
            type="button"
            onClick={() => {
              setFilter("");
              inputRef.current?.focus();
            }}
            aria-label="Réinitialiser la recherche"
            className="text-dim hover:text-primary text-[11px] transition-colors"
          >
            ✕
          </button>
        )}
        <kbd className="border-border text-dim border px-1.5 py-[3px] text-[10px]">
          {isMac ? "⌘K" : "CTRL+K"}
        </kbd>
      </div>

      {filteredSkills.length > 0 ? (
        <ul className="flex flex-wrap gap-2">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.name === skill.name;

            return (
              <li key={skill.name}>
                <button
                  type="button"
                  onClick={() => setSelectedSkill(isSelected ? null : skill)}
                  aria-pressed={isSelected}
                  className={cn(
                    "cursor-pointer border px-3 py-[9px] text-xs transition-colors",
                    isSelected
                      ? "border-primary text-primary"
                      : "border-border text-chip hover:border-primary hover:text-primary",
                  )}
                >
                  {skill.name}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-faint text-[13px]">Aucun résultat.</p>
      )}

      <p className="text-dim text-[11px] tracking-[.1em]">
        {filteredSkills.length} TECHNOLOGIES
      </p>

      {selectedSkill && (
        <div ref={detailsRef}>
          <SkillDetails skill={selectedSkill} onClose={handleClose} />
        </div>
      )}
    </>
  );
}
