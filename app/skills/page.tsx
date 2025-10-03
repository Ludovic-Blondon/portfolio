import { PageWrapper } from "@/components/page-wrapper";
import { skills } from "@/config/skills";
import { SkillsFilterClient } from "@/components/skills-filter-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compétences",
  description:
    "Compétences techniques de Ludovic Blondon, développeur fullstack",
};

export default function Page() {
  return (
    <PageWrapper>
      <h1 className="text-2xl font-medium">Technologies</h1>
      <SkillsFilterClient skills={skills} />
    </PageWrapper>
  );
}
