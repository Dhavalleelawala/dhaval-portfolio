import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

export const getProfile = () => api.get("/github/profile");
export const getPortfolioProfile = () => api.get("/portfolio/profile");
export const getStack = () => api.get("/portfolio/stack");
export const getSocials = () => api.get("/portfolio/socials");
export const getRepos = () => api.get("/github/repos");
export const getSkills = () => api.get("/portfolio/skills");
export const getProjects = () => api.get("/portfolio/projects");
export const getExperience = () => api.get("/portfolio/experience");
export const sendContact = (data) => api.post("/contact", data);

export default api;
