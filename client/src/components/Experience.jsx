import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const typeConfig = {
  development: { icon: Code2, color: "text-accent bg-accent/10" },
  teaching: { icon: GraduationCap, color: "text-purple-400 bg-purple-500/10" },
};

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section-container">
      <SectionHeader
        label="Experience"
        title="Professional journey"
        subtitle="Building software and sharing full stack expertise along the way"
      />

      <div className="relative space-y-0">
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-accent/50 via-border to-transparent md:block" />

        {experience.map((item, i) => {
          const config = typeConfig[item.type] || typeConfig.development;
          const Icon = config.icon;

          return (
            <motion.div
              key={item.title + item.period}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex gap-6 pb-8 md:pl-12"
            >
              <div
                className={`absolute left-0 hidden h-10 w-10 items-center justify-center rounded-xl border border-border md:flex ${config.color}`}
              >
                <Icon size={16} />
              </div>

              <div className="card-hover flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="mb-1 flex items-center gap-2 md:hidden">
                      <span className={`rounded-lg p-1.5 ${config.color}`}>
                        <Icon size={14} />
                      </span>
                      <span className="text-xs capitalize text-muted">{item.type}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-text md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-accent">{item.company}</p>
                  </div>
                  <span className="shrink-0 rounded-lg border border-border bg-bg px-3 py-1 font-mono text-xs text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
