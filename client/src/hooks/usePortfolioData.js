import { useEffect, useState } from "react";
import {
  getProfile,
  getPortfolioProfile,
  getSocials,
  getRepos,
  getSkills,
  getProjects,
  getExperience,
} from "../api";

export function usePortfolioData() {
  const [data, setData] = useState({
    profile: null,
    portfolio: null,
    socials: [],
    repos: [],
    skills: [],
    projects: [],
    experience: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [
          profileRes,
          portfolioRes,
          socialsRes,
          reposRes,
          skillsRes,
          projectsRes,
          expRes,
        ] = await Promise.all([
          getProfile(),
          getPortfolioProfile(),
          getSocials(),
          getRepos(),
          getSkills(),
          getProjects(),
          getExperience(),
        ]);

        setData({
          profile: profileRes.data,
          portfolio: portfolioRes.data,
          socials: socialsRes.data,
          repos: reposRes.data,
          skills: skillsRes.data,
          projects: projectsRes.data,
          experience: expRes.data,
        });
      } catch (err) {
        setError("Failed to load portfolio data. Is the server running?");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  return { ...data, loading, error };
}
