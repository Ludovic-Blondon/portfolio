import { execFileSync } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const GITHUB_USER = "Ludovic-Blondon";
const OUTPUT_PATH = join(process.cwd(), "lib/generated/projects.json");
const REPO_LIMIT = 200;

type GhRepo = {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  repositoryTopics: { name: string }[] | null;
  updatedAt: string;
};

type GeneratedProject = {
  id: string;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
};

function fetchRepos(): GhRepo[] {
  const args = [
    "repo",
    "list",
    GITHUB_USER,
    "--limit",
    String(REPO_LIMIT),
    "--source",
    "--no-archived",
    "--visibility",
    "public",
    "--json",
    "name,description,url,homepageUrl,repositoryTopics,updatedAt",
  ];

  console.log(`Fetching repos via gh: gh ${args.join(" ")}`);

  try {
    return JSON.parse(
      execFileSync("gh", args, {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      }),
    ) as GhRepo[];
  } catch (error) {
    const err = error as NodeJS.ErrnoException & { stderr?: Buffer | string };

    if (err.code === "ENOENT") {
      throw new Error(
        "GitHub CLI introuvable. Installe-la avec `brew install gh`, puis lance `gh auth login`.",
      );
    }

    const stderr = err.stderr?.toString().trim();
    throw new Error(
      `La commande gh a échoué${stderr ? ` :\n${stderr}` : "."}\n` +
        "Vérifie ton authentification avec `gh auth status` (ou `gh auth login`).",
    );
  }
}

async function main(): Promise<void> {
  const repos = fetchRepos();
  console.log(
    `Found ${repos.length} public repos owned by ${GITHUB_USER} (excluding forks and archived)`,
  );

  if (repos.length === REPO_LIMIT) {
    console.warn(
      `⚠️  Limite de ${REPO_LIMIT} repos atteinte — augmente REPO_LIMIT si des projets manquent.`,
    );
  }

  const projects: GeneratedProject[] = repos
    .map((repo) => ({
      id: repo.name.toLowerCase(),
      name: repo.name,
      description: repo.description || null,
      html_url: repo.url,
      homepage: repo.homepageUrl || null,
      topics: (repo.repositoryTopics ?? []).map((topic) => topic.name),
      updated_at: repo.updatedAt,
    }))
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );

  const output = {
    generated_at: new Date().toISOString(),
    projects,
  };

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2) + "\n", "utf8");
  console.log(`✓ Wrote ${projects.length} projects to ${OUTPUT_PATH}`);
}

main().catch((error: Error) => {
  console.error(`✗ ${error.message}`);
  process.exit(1);
});
