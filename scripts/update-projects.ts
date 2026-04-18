import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const GITHUB_USER = "Ludovic-Blondon";
const OUTPUT_PATH = join(process.cwd(), "lib/generated/projects.json");

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
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

function buildHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": `${GITHUB_USER}-portfolio-script`,
    "X-GitHub-Api-Version": "2022-11-28",
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

function logRateLimit(response: Response): void {
  const remaining = response.headers.get("x-ratelimit-remaining");
  const limit = response.headers.get("x-ratelimit-limit");
  const reset = response.headers.get("x-ratelimit-reset");

  if (remaining && limit) {
    const resetDate = reset
      ? new Date(Number(reset) * 1000).toISOString()
      : "unknown";
    console.log(
      `  ↳ Rate limit: ${remaining}/${limit} remaining (resets at ${resetDate})`
    );
  }
}

async function fetchRepos(): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner`;
  console.log(`Fetching repos from ${url}`);

  const response = await fetch(url, { headers: buildHeaders() });
  logRateLimit(response);

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed: ${response.status} ${response.statusText}`
    );
  }

  return (await response.json()) as GitHubRepo[];
}

async function main(): Promise<void> {
  if (!process.env.GITHUB_TOKEN) {
    console.warn(
      "⚠️  No GITHUB_TOKEN set — using unauthenticated quota (60 req/h)."
    );
  }

  const repos = await fetchRepos();
  console.log(`Found ${repos.length} repos owned by ${GITHUB_USER}`);

  const publicRepos = repos.filter(
    (repo) => !repo.private && !repo.fork && !repo.archived
  );
  console.log(
    `Filtered to ${publicRepos.length} public repos (excluding forks and archived)`
  );

  const projects: GeneratedProject[] = publicRepos
    .map((repo) => ({
      id: repo.name.toLowerCase(),
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics,
      updated_at: repo.updated_at,
    }))
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

  const output = {
    generated_at: new Date().toISOString(),
    projects,
  };

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2) + "\n", "utf8");
  console.log(`✓ Wrote ${projects.length} projects to ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
