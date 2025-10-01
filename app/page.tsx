import { PageWrapper } from "@/components/page-wrapper";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  description: "Ludovic Blondon, développeur fullstack",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ludovic Blondon",
    jobTitle: "Développeur Fullstack",
    url: "https://ludovicblondon.com",
    sameAs: [
      "https://github.com/Ludovic-Blondon",
      "https://www.linkedin.com/in/ludovic-blondon-746016178/",
    ],
  };

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-2xl font-medium">Ludovic Blondon</h1>

      <div className="space-y-8">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Développeur fullstack passionné par l'exploration de nouvelles
            technologies et la création de solutions innovantes. J'aime
            expérimenter avec des outils modernes, partager mes découvertes et
            contribuer à des projets ambitieux qui repoussent les limites du
            possible. Mon approche combine curiosité technique et pragmatisme
            pour transformer des idées en produits concrets et performants.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground/70">
          <Link
            href="/career"
            className="hover:text-foreground transition-colors"
            aria-label="Parcours"
          >
            Parcours ↗
          </Link>
          <Link
            href="https://github.com/Ludovic-Blondon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            GitHub ↗
          </Link>
          <Link
            href="https://www.linkedin.com/in/ludovic-blondon-746016178/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn ↗
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
