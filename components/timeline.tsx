import { ReactNode } from "react";

interface TimelineProps {
  children: ReactNode;
}

function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="bg-border/60 absolute top-0 bottom-0 left-0 w-[1px] md:left-8" />

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
      <div className="bg-foreground/70 absolute top-1 left-0 h-2 w-2 -translate-x-1/2 rounded-full md:left-8" />

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
      <div className="text-muted-foreground text-xs">{subtitle}</div>
    </div>
  );
}

export { Timeline, TimelineItem, TimelineHeader };
