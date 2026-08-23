import { ReactNode } from "react";

export function EntryList({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-[38px]">{children}</div>;
}

export function Entry({
  title,
  meta,
  children,
}: {
  title: string;
  meta: string;
  children: ReactNode;
}) {
  return (
    <article className="border-border grid gap-4 border-t pt-[26px] md:grid-cols-[170px_1fr] md:gap-8">
      <header className="flex flex-col gap-2">
        <h2 className="font-pixel text-primary text-[11px] leading-[1.7] break-words">
          {title}
        </h2>
        <p className="text-dim text-xs">{meta}</p>
      </header>
      <div className="flex flex-col gap-[18px]">{children}</div>
    </article>
  );
}

export function EntryLines({ children }: { children: ReactNode }) {
  return <ul className="flex flex-col gap-[9px]">{children}</ul>;
}

export function EntryLine({ children }: { children: ReactNode }) {
  return (
    <li className="text-muted-foreground text-[13px] leading-[1.75]">
      {children}
    </li>
  );
}
