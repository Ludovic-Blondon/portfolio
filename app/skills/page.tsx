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
    <PageWrapper className="max-w-[900px]">
      <h1 className="font-pixel text-[18px] leading-[1.6] md:text-[22px]">
        Technologies
      </h1>
      <SkillsFilterClient skills={skills} />
    </PageWrapper>
  );
}
