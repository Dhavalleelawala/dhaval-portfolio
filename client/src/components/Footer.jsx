import { Github, Heart, Instagram, Linkedin, Youtube } from "lucide-react";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
  YouTube: Youtube,
};

export default function Footer({ socials = [] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-muted">
            Built with <Heart size={14} className="text-red-400" /> using MERN
            Stack &copy; {year}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((social) => {
              const Icon = iconMap[social.name] || Github;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                  title={social.name}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
