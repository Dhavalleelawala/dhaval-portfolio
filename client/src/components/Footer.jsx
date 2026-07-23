import { ArrowUp, Github, Heart, Instagram, Linkedin, Youtube } from "lucide-react";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  YouTube: Youtube,
};

export default function Footer({ socials = [] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="font-display text-sm font-semibold">
              <span className="gradient-text">Dhaval Leelawala</span>
              <span className="text-muted"> — Full Stack Developer</span>
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted">
              Built with <Heart size={12} className="text-red-400" /> MERN Stack · {year}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = iconMap[social.name] || Github;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border p-2.5 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  title={social.name}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted shadow-lg transition-colors hover:border-accent/40 hover:text-accent"
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
}
