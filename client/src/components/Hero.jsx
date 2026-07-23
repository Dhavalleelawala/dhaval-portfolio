import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin, Terminal } from "lucide-react";

export default function Hero({ profile, portfolio, stack = [] }) {
  const name = profile?.name || "Dhaval Leelawala";

  const stats = [
    { value: portfolio?.yearsExperience || "4+", label: "Years Coding" },
    { value: `${profile?.public_repos || "60"}+`, label: "GitHub Repos" },
    { value: portfolio?.projectsBuilt || "15+", label: "Projects Built" },
    { value: "MERN", label: "Primary Stack" },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="glow-orb left-1/4 top-20 h-[500px] w-[500px] bg-accent/10" />
      <div className="glow-orb bottom-0 right-0 h-96 w-96 bg-purple-500/10" />

      <div className="section-container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5">
            <Terminal size={14} className="text-accent" />
            <span className="text-xs font-medium text-accent">
              {portfolio?.subtitle || "MERN Stack Specialist"}
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-muted">I&apos;m a</span>
            <br />
            <span className="gradient-text">Full Stack Developer</span>
          </h1>

          <p className="mt-2 font-display text-xl text-text/80 md:text-2xl">
            {name}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {portfolio?.tagline}
          </p>

          {stack.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline">
              Hire Me
            </a>
            <a
              href={profile?.html_url || "https://github.com/Dhavalleelawala"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={16} />
            </a>
            <a
              href={portfolio?.linkedin || "https://www.linkedin.com/in/dhaval-leelawala"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <p className="font-display text-xl font-bold text-accent md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative mx-auto w-fit">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-purple-500/30 blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-2">
              <img
                src={
                  profile?.avatar_url ||
                  "https://avatars.githubusercontent.com/u/88814749?v=4"
                }
                alt={name}
                className="h-72 w-72 rounded-xl object-cover md:h-80 md:w-80"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-border/80 bg-bg/90 px-4 py-3 backdrop-blur-md">
                <p className="font-mono text-xs text-accent">const role =</p>
                <p className="font-display text-sm font-semibold text-text">
                  &quot;Full Stack Developer&quot;
                </p>
              </div>
            </div>
          </div>

          {profile?.hireable && (
            <div className="mt-4 flex justify-center">
              <span className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Available for hire
              </span>
            </div>
          )}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
