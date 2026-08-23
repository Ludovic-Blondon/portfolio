import { cn } from "@/lib/utils";

export function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 px-6 py-10 md:px-16 md:py-[72px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
