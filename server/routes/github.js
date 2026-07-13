import express from "express";

const router = express.Router();
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "Dhavalleelawala";

async function fetchGitHub(path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "Dhaval-Portfolio",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

router.get("/profile", async (_req, res) => {
  try {
    const profile = await fetchGitHub(`/users/${GITHUB_USERNAME}`);
    res.json({
      login: profile.login,
      name: profile.name,
      avatar_url: profile.avatar_url,
      html_url: profile.html_url,
      bio: profile.bio,
      location: profile.location,
      blog: profile.blog,
      company: profile.company,
      public_repos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
      hireable: profile.hireable,
      created_at: profile.created_at,
    });
  } catch (error) {
    console.error("GitHub profile error:", error);
    res.status(500).json({ error: "Failed to fetch GitHub profile" });
  }
});

router.get("/repos", async (_req, res) => {
  try {
    const repos = await fetchGitHub(
      `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed`
    );

    const filtered = repos
      .filter((repo) => !repo.fork)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        topics: repo.topics,
        pushed_at: repo.pushed_at,
      }))
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

    res.json(filtered);
  } catch (error) {
    console.error("GitHub repos error:", error);
    res.status(500).json({ error: "Failed to fetch GitHub repositories" });
  }
});

export default router;
