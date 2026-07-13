import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ profile, portfolio }) {
  const name = profile?.name || "Dhaval Leelawala";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            {portfolio?.title || "Full Stack Developer | Faculty | Placement Coordinator"}
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{name.split(" ")[0]}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            {portfolio?.tagline ||
              "Teaching and building with React, Node.js, MySQL, and Firebase through practical, project-driven learning."}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href={portfolio?.linkedin || "https://www.linkedin.com/in/dhaval-leelawala"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={profile?.html_url || "https://github.com/Dhavalleelawala"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl font-bold text-text">
                {portfolio?.studentsRedWhite || "120+"}
              </p>
              <p className="text-muted">Red & White Students</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-text">
                {portfolio?.studentsCDAC || "200+"}
              </p>
              <p className="text-muted">C-DAC Students</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-text">
                {portfolio?.teachingExperience || "3+ Years"}
              </p>
              <p className="text-muted">Teaching Experience</p>
            </div>
            {profile && (
              <div>
                <p className="font-display text-2xl font-bold text-text">
                  {profile.public_repos}+
                </p>
                <p className="text-muted">Repositories</p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent to-purple-500 opacity-20 blur-2xl" />
            <img
              src={
                profile?.avatar_url ||
                "https://avatars.githubusercontent.com/u/88814749?v=4"
              }
              alt={name}
              className="relative h-64 w-64 rounded-full border-4 border-border object-cover shadow-2xl md:h-80 md:w-80"
            />
            <div className="absolute -bottom-2 -right-2 rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium shadow-lg">
              Faculty & Mentor
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
}
