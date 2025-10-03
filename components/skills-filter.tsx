"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
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
          {displayValue}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
