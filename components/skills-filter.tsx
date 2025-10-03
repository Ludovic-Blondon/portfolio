"use client";

import * as React from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SkillsFilterProps {
  skills: string[];
  value: string;
  onValueChange: (value: string) => void;
}

const PLACEHOLDER_TEXT = "Rechercher une compétence...";
const EMPTY_TEXT = "Aucune compétence trouvée.";

export function SkillsFilter({
  skills,
  value,
  onValueChange,
}: SkillsFilterProps) {
  const [open, setOpen] = React.useState(false);
  const [isMac, setIsMac] = React.useState(false);

  React.useEffect(() => {
    setIsMac(navigator.userAgent.includes("Mac"));
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const displayValue = value
    ? skills.find((skill) => skill.toLowerCase() === value.toLowerCase())
    : PLACEHOLDER_TEXT;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Filtrer les compétences"
          className="w-full justify-between text-sm text-muted-foreground font-normal h-9"
        >
          <span>{displayValue}</span>
          <div className="flex items-center gap-2">
            {value && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onValueChange("");
                }}
                className="flex h-4 w-4 items-center justify-center rounded-sm hover:bg-muted cursor-pointer"
                role="button"
                aria-label="Réinitialiser le filtre"
              >
                <X className="h-3 w-3" />
              </div>
            )}
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              {isMac ? <span className="text-xs">⌘</span> : "Ctrl+"}K
            </kbd>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <Command>
          <CommandInput
            placeholder={PLACEHOLDER_TEXT}
            className="text-sm"
          />
          <CommandList>
            <CommandEmpty className="text-sm text-muted-foreground py-6 text-center">
              {EMPTY_TEXT}
            </CommandEmpty>
            <CommandGroup>
              {skills.map((skill) => (
                <CommandItem
                  key={skill}
                  value={skill}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value.toLowerCase() ? "" : currentValue;
                    onValueChange(newValue);
                    setOpen(false);
                  }}
                  className="text-sm"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value.toLowerCase() === skill.toLowerCase()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {skill}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
