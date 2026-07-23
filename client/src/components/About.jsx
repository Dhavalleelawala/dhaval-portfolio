import { motion } from "framer-motion";
import { Code2, Database, Layers, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    icon: Layers,
    title: "Frontend",
    desc: "React, TypeScript, Tailwind — responsive & accessible UI",
  },
  {
    icon: Code2,
    title: "Backend",
    desc: "Node.js, Express, REST APIs, auth & real-time with Socket.io",
  },
  {
    icon: Database,
    title: "Database",
    desc: "MongoDB, MySQL, PostgreSQL, Firebase — schema design & queries",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Vercel, Docker, Git — shipping production-ready apps",
  },
];

export default function About({ profile, portfolio }) {
  return (
    <section id="about" className="section-container">
      <SectionHeader
        label="About"
        title="Building full stack products that scale"
        subtitle="From UI to database — I handle the entire development lifecycle"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-muted"
        >
          <p className="text-base leading-relaxed md:text-lg">
            I&apos;m{" "}
            <span className="font-medium text-text">
              {profile?.name || "Dhaval Leelawala"}
            </span>
            , a{" "}
            <span className="font-medium text-accent">Full Stack Developer</span>{" "}
            based in {portfolio?.location || "Surat, Gujarat"}. I specialize in
            building end-to-end web applications with the MERN stack — crafting
            clean React interfaces, scalable Node.js APIs, and well-structured
            databases.
          </p>
          <p className="leading-relaxed">
            {portfolio?.about}
          </p>
          <p className="leading-relaxed">
            With{" "}
            <span className="font-medium text-text">
              {profile?.public_repos || "60"}+ GitHub repositories
            </span>{" "}
            and hands-on experience across admin panels, e-commerce platforms,
            authentication systems, and REST APIs — I bring both depth and
            breadth to every project.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projects" className="btn-primary text-sm">
              See Projects
            </a>
            <a
              href={portfolio?.linkedin || "https://www.linkedin.com/in/dhaval-leelawala"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover group"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <item.icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
