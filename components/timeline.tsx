import { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-border/60 md:left-8" />

      {/* Timeline items */}
      <div className="space-y-12">{children}</div>
    </div>
  );
}

interface TimelineItemProps {
  children: ReactNode;
}

function TimelineItem({ children }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-20">
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/70" />

      <div className="space-y-6">{children}</div>
    </div>
  );
}

interface TimelineHeaderProps {
  title: string;
  subtitle: string;
}

function TimelineHeader({ title, subtitle }: TimelineHeaderProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="text-xs text-muted-foreground">{subtitle}</div>
    </div>
  );
}

export { Timeline, TimelineItem, TimelineHeader };
