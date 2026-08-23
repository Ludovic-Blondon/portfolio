import Link from "next/link";
import { cn } from "@/lib/utils";

/** Bouton texte encadré du design console : bordure verte pour l'action principale, grise sinon. */
export function ConsoleLink({
  href,
  external,
  variant = "primary",
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link> & {
  external?: boolean;
  variant?: "primary" | "muted";
}) {
  return (
    <Link
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={cn(
        "border px-[18px] py-[11px] text-xs transition-colors",
        variant === "primary"
          ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          : "border-border-strong text-muted-foreground hover:border-primary hover:text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
