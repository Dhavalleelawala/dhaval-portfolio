import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Users } from "lucide-react";

export default function About({ profile, portfolio }) {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Red & White Faculty",
      desc: `${portfolio?.studentsRedWhite || "120+"} students mentored in Surat`,
    },
    {
      icon: Users,
      title: "C-DAC Faculty",
      desc: `${portfolio?.studentsCDAC || "200+"} students trained in full stack`,
    },
    {
      icon: Briefcase,
      title: "Placement Coordinator",
      desc: "Bridging education and industry for students",
    },
    {
      icon: Code2,
      title: "Full Stack Dev",
      desc: "React, Node.js, MySQL, Firebase & MERN",
    },
  ];

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
          Full Stack Developer, Faculty & Placement Coordinator based in Surat, Gujarat
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
            , a dedicated Full Stack Development Faculty and Placement Coordinator at{" "}
            <span className="font-medium text-text">
              Red & White Multimedia Education, Surat
            </span>
            . I specialize in teaching modern web technologies including front-end and
            back-end development using React, Node.js, MySQL, Firebase, and more.
          </p>
          <p>
            {portfolio?.about ||
              "With a strong focus on practical learning and real-world projects, I guide students through hands-on development, coding best practices, and deployment strategies."}{" "}
            I&apos;ve mentored{" "}
            <span className="font-medium text-text">
              {portfolio?.studentsRedWhite || "120+"} students at Red & White
            </span>{" "}
            and trained{" "}
            <span className="font-medium text-text">
              {portfolio?.studentsCDAC || "200+"} students at C-DAC
            </span>{" "}
            — helping them grow with confidence and discipline.
          </p>
          <p>
            As a Placement Coordinator, I bridge the gap between education and industry
            by supporting students in their career journey. I also maintain{" "}
            <span className="font-medium text-text">
              {profile?.public_repos || "60"}+ open-source projects
            </span>{" "}
            on GitHub spanning admin panels, e-commerce platforms, and REST APIs.
          </p>
          <a
            href={portfolio?.linkedin || "https://www.linkedin.com/in/dhaval-leelawala"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm text-accent transition-colors hover:underline"
          >
            View full profile on LinkedIn →
          </a>
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
