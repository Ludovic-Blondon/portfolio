"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { NavigationConfig } from "@/types";

const SOCIAL_LINKS = [
  { label: "GITHUB", href: "https://github.com/Ludovic-Blondon" },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/ludovic-blondon-746016178/",
  },
];

function NavGroup({
  group,
  pathname,
  onNavigate,
}: {
  group: NavigationConfig;
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className="flex flex-col gap-2.5">
      <p className="text-dim text-[10px] tracking-[.2em] uppercase">
        — {group.label}
      </p>
      {group.items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex gap-3 py-[3px] text-[13px] transition-colors",
              item.num && "-mx-2 px-2",
              isActive
                ? item.num
                  ? "bg-primary text-primary-foreground"
                  : "text-primary"
                : "text-chip hover:text-primary",
            )}
          >
            {item.num && (
              <span
                className={cn(isActive ? "text-num-active" : "text-num")}
                aria-hidden
              >
                {item.num}
              </span>
            )}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteNav({
  className,
  onNavigate,
}: {
  className?: string;
  /** Appelé à chaque clic sur un lien, pour refermer le panneau mobile. */
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "bg-surface flex flex-col gap-8 overflow-y-auto px-6 py-[30px]",
        className,
      )}
    >
      <Link href="/" onClick={onNavigate} className="flex flex-col gap-2">
        <span className="font-pixel text-primary text-[11px] leading-[1.7]">
          LUDOVIC
          <br />
          BLONDON
        </span>
        <span className="text-dim text-[11px] tracking-[.14em]">
          DÉVELOPPEUR FULLSTACK
        </span>
      </Link>

      <NavGroup
        group={navigation.navAbout}
        pathname={pathname}
        onNavigate={onNavigate}
      />
      <NavGroup
        group={navigation.navProjects}
        pathname={pathname}
        onNavigate={onNavigate}
      />

      <div className="text-dim mt-auto flex gap-4 pt-4 text-[11px] tracking-[.1em]">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
