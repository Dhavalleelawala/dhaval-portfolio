import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { Loader2 } from "lucide-react";

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="text-center">
        <Loader2 className="mx-auto animate-spin text-accent" size={40} />
        <p className="mt-4 text-muted">Loading portfolio...</p>
      </div>
    </div>
  );
}

function ErrorScreen({ message }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6">
      <div className="card max-w-md text-center">
        <p className="text-red-400">{message}</p>
        <p className="mt-3 text-sm text-muted">
          Run <code className="rounded bg-border px-2 py-0.5">npm run dev</code>{" "}
          from the project root to start both server and client.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const { profile, portfolio, socials, repos, skills, projects, experience, loading, error } =
    usePortfolioData();

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={profile} portfolio={portfolio} />
        <About profile={profile} portfolio={portfolio} />
        <Skills skills={skills} />
        <Projects projects={projects} repos={repos} />
        <Experience experience={experience} />
        <Contact portfolio={portfolio} socials={socials} />
      </main>
      <Footer socials={socials} />
    </>
  );
}
