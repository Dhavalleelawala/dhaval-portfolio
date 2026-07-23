import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Folder, Github, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Projects({ projects, repos }) {
  const featured = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="section-container">
      <SectionHeader
        label="Portfolio"
        title="Projects I've built"
        subtitle="Full stack applications — from API design to deployed production apps"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="card-hover group relative overflow-hidden md:col-span-1"
          >
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-accent/5 transition-transform group-hover:scale-150" />

            <div className="relative">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Folder size={18} />
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-border p-2 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                    aria-label="View code"
                  >
                    <Github size={15} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-border p-2 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-text group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill font-mono">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {others.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card-hover group flex items-center justify-between gap-4"
            >
              <div>
                <h3 className="font-medium text-text group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-muted">{project.tech.join(" · ")}</p>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </motion.a>
          ))}
        </div>
      )}

      {repos.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold md:text-2xl">
                More on GitHub
              </h3>
              <p className="mt-1 text-sm text-muted">
                Latest repos from{" "}
                <a
                  href="https://github.com/Dhavalleelawala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  @Dhavalleelawala
                </a>
              </p>
            </div>
            <a
              href="https://github.com/Dhavalleelawala"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline hidden py-2 text-xs sm:inline-flex"
            >
              View All Repos
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {repos.slice(0, 6).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group block"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="truncate font-mono text-sm text-text group-hover:text-accent transition-colors">
                    {repo.name}
                  </h4>
                  {repo.language && (
                    <span className="shrink-0 rounded bg-border px-2 py-0.5 font-mono text-xs text-muted">
                      {repo.language}
                    </span>
                  )}
                </div>
                {repo.description && (
                  <p className="mt-2 line-clamp-2 text-xs text-muted">
                    {repo.description}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-3 text-xs text-muted">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star size={11} />
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
