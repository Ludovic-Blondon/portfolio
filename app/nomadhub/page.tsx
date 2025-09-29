import { ProjectCard } from "@/components/project-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NomadHub",
  description: "NomadHub est une plateforme d'hébergement de voyageurs.",
};

export default function Page() {
  const project = {
    title: "NomadHub",
    description:
      "NomadHub est une plateforme d'hébergement de voyageurs. Vous pouvez " +
      "mettre à disposition des voyageurs, votre salon ou une chambre d'ami. En " +
      "retour, vous pouvez aussi accéder à des hébergements à travers le monde " +
      "grâce à la plateforme.",
    link: "https://nomadhub-tau.vercel.app/",
    github: "https://github.com/Ludovic-Blondon/nomadhub",
  };

  return <ProjectCard project={project} />;
}
