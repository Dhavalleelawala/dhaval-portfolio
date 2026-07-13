import { motion } from "framer-motion";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & DevOps",
};

const categoryColors = {
  frontend: "from-blue-500 to-cyan-400",
  backend: "from-green-500 to-emerald-400",
  database: "from-yellow-500 to-orange-400",
  tools: "from-purple-500 to-pink-400",
};

export default function Skills({ skills }) {
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies I use to build full stack applications
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {Object.entries(grouped).map(([category, items], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="card"
          >
            <h3 className="mb-6 font-display text-lg font-semibold">
              {categoryLabels[category]}
            </h3>
            <div className="space-y-4">
              {items.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-text">{skill.name}</span>
                    <span className="text-muted">{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-border">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
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
