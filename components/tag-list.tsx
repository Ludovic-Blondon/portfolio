import { cn } from "@/lib/utils";

/** Étiquettes encadrées : `md` sur les pages projet, `sm` dans les listes parcours et études. */
export function TagList({
  items,
  size = "md",
  className,
}: {
  items: string[];
  size?: "sm" | "md";
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <ul
      className={cn(
        "flex flex-wrap gap-2",
        size === "sm" && "gap-1.5",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "text-faint border",
            size === "sm"
              ? "px-2 py-[5px] text-[10px] tracking-[.08em]"
              : "px-2.5 py-1.5 text-[11px] tracking-[.1em]",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
