import { motion } from "framer-motion";

const phases = [
  {
    period: "MONTH 1–2",
    title: "LAUNCH",
    items: ["Partnership announcement", "ClassPass integration goes live", "Landing page & lead capture active"],
  },
  {
    period: "MONTH 3–4",
    title: "ACTIVATE",
    items: ["Running clubs in Madrid, Barcelona, Valencia", '"60 Min Off Your Phone" social campaign', "First UGC wave"],
  },
  {
    period: "MONTH 5–6",
    title: "DROP",
    items: ["First limited BB × ClassPass merch drop", "Milestone workout gamification live", "5,000 session booking target"],
  },
  {
    period: "MONTH 7–12",
    title: "SCALE",
    items: ["Evaluate & optimize", "International expansion (Lisbon, Paris)", "Year-one brand impact report"],
  },
];

const TimelineSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-4">IMPLEMENTATION</p>
          <h2 className="font-display text-5xl md:text-6xl mb-16">THE ROADMAP.</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-12 md:pl-20 pb-16 last:pb-0"
            >
              {/* Dot on timeline */}
              <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-volcano border-2 border-background" />

              <p className="font-mono text-[9px] tracking-[0.2em] text-volcano mb-2">{phase.period}</p>
              <h3 className="font-display text-2xl mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="font-mono text-xs text-foreground/60 flex items-start gap-2">
                    <span className="text-volcano/40 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
