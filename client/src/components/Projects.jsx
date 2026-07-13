import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

export default function Projects({ projects, repos }) {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Hand-picked projects showcasing full stack development skills
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`card group ${project.highlight ? "md:col-span-1" : ""}`}
          >
            <div className="flex items-start justify-between">
              <h3 className="font-display text-xl font-semibold text-text">
                {project.name}
              </h3>
              {project.highlight && (
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                  Featured
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-border px-2.5 py-1 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                <Github size={16} />
                Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {repos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl font-bold">GitHub Repositories</h3>
          <p className="mt-2 text-sm text-muted">
            Latest repositories from{" "}
            <a
              href="https://github.com/Dhavalleelawala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              @Dhavalleelawala
            </a>
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.slice(0, 9).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-text group-hover:text-accent transition-colors">
                    {repo.name}
                  </h4>
                  {repo.language && (
                    <span className="text-xs text-muted">{repo.language}</span>
                  )}
                </div>
                {repo.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-muted">
                    {repo.description}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.homepage && (
                    <span className="text-accent">Live →</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
