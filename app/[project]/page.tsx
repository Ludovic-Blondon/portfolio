import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/config/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(projects).map((project) => ({ project }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}): Promise<Metadata> {
  const { project } = await params;
  return projects[project]?.metadata ?? {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const data = projects[project];

  if (!data) notFound();

  return <ProjectCard project={data} />;
}
