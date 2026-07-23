import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "DevOps & Tools",
};

const categoryColors = {
  frontend: "from-cyan-500 to-blue-400",
  backend: "from-emerald-500 to-teal-400",
  database: "from-amber-500 to-orange-400",
  tools: "from-violet-500 to-purple-400",
};

const categoryIcons = {
  frontend: "⚛️",
  backend: "⚙️",
  database: "🗄️",
  tools: "🛠️",
};

export default function Skills({ skills }) {
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="section-container">
      <SectionHeader
        label="Skills"
        title="Tech stack I work with"
        subtitle="Technologies I use daily to build production-grade full stack applications"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(grouped).map(([category, items], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIndex * 0.08 }}
            className="card-hover"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xl">{categoryIcons[category]}</span>
              <h3 className="font-display text-lg font-semibold">
                {categoryLabels[category]}
              </h3>
            </div>

            <div className="mb-5 flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill.name} className="tech-pill">
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              {items.slice(0, 4).map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-muted">{skill.name}</span>
                    <span className="font-mono text-accent">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className={`h-full rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
