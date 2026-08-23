"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SiteNav } from "@/components/site-nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-border bg-surface flex h-14 shrink-0 items-center gap-3 border-b px-4 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label="Ouvrir la navigation"
          className="text-dim hover:text-primary transition-colors"
        >
          <MenuIcon className="size-5" />
        </SheetTrigger>
        <SheetContent
          side="left"
          aria-describedby={undefined}
          className="border-border w-[300px] gap-0 p-0 sm:max-w-[300px]"
        >
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SiteNav className="h-full" onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>

      <span className="font-pixel text-primary text-[10px]">LB</span>
      <span className="text-dim text-[10px] tracking-[.14em]">
        DÉVELOPPEUR FULLSTACK
      </span>
    </header>
  );
}
