import { motion } from "framer-motion";
import { Code2, Database, GraduationCap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Dev",
    desc: "React, Node.js, Express, MongoDB & more",
  },
  {
    icon: GraduationCap,
    title: "Faculty Member",
    desc: "Red & White Skill Education, Navsari",
  },
  {
    icon: Users,
    title: "Mentor",
    desc: "425+ students guided in live projects",
  },
  {
    icon: Database,
    title: "Databases",
    desc: "MongoDB, MySQL, PostgreSQL, Firebase",
  },
];

export default function About({ profile, portfolio }) {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Full Stack Developer, Faculty & Mentor passionate about building and teaching
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-muted"
        >
          <p>
            I&apos;m{" "}
            <span className="font-medium text-text">
              {profile?.name || "Dhaval Leelawala"}
            </span>
            , a passionate Full Stack Developer and experienced Faculty Member with a
            strong foundation in modern web technologies and hands-on teaching expertise.
            I specialize in building scalable web applications and guiding students
            toward professional careers in software development.
          </p>
          <p>
            With{" "}
            <span className="font-medium text-text">
              {portfolio?.teachingExperience || "2+ years"}
            </span>{" "}
            of teaching experience at{" "}
            <span className="font-medium text-text">
              Red & White Skill Education, Navsari
            </span>
            , I&apos;ve mentored{" "}
            <span className="font-medium text-text">
              {portfolio?.studentsMentored || "425+"} students
            </span>{" "}
            in live projects, internships, and career building — known for practical,
            project-driven learning and deep industry insights.
          </p>
          <p>
            Alongside teaching, I maintain{" "}
            <span className="font-medium text-text">
              {profile?.public_repos || "60"}+ open-source projects
            </span>{" "}
            on GitHub spanning admin panels, e-commerce platforms, REST APIs, and
            authentication systems built with the MERN stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card"
            >
              <item.icon className="mb-3 text-accent" size={28} />
              <h3 className="font-display font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
