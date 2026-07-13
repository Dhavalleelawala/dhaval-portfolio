import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My journey as a full stack developer
        </p>
      </motion.div>

      <div className="relative mt-12 space-y-8">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

        {experience.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative flex gap-6 md:pl-16"
          >
            <div className="absolute left-4 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-bg md:flex">
              <Briefcase size={10} className="text-accent" />
            </div>
            <div className="card flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent">{item.company}</p>
                </div>
                <span className="rounded-lg bg-border px-3 py-1 text-xs text-muted">
                  {item.period}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
