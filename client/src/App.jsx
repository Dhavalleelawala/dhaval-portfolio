import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SeoManager from "./components/SeoManager";
import { usePortfolioData } from "./hooks/usePortfolioData";
import { Loader2, Terminal } from "lucide-react";

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
          <Terminal className="animate-pulse text-accent" size={24} />
        </div>
        <Loader2 className="mx-auto animate-spin text-accent" size={28} />
        <p className="mt-4 font-mono text-sm text-muted">Loading portfolio...</p>
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
          Run <code className="rounded bg-border px-2 py-0.5 font-mono text-xs">npm run dev</code>{" "}
          from the project root.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const {
    profile,
    portfolio,
    stack,
    socials,
    repos,
    skills,
    projects,
    experience,
    loading,
    error,
  } = usePortfolioData();

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;

  return (
    <>
      <SeoManager profile={profile} />
      <Navbar />
      <main>
        <Hero profile={profile} portfolio={portfolio} stack={stack} />
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
