import { motion } from "framer-motion";

const funnelSteps = [
  {
    label: "REACH",
    desc: "ClassPass distribution puts BB Athletics in front of 35M+ active users.",
    icon: "→",
  },
  {
    label: "ENGAGE",
    desc: "BB Athletics content + running clubs build emotional connection & brand identity.",
    icon: "→",
  },
  {
    label: "CONVERT",
    desc: "Exclusive drops + community events turn engagement into loyalty & sales.",
    icon: "✕",
  },
];

const StrategySection = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-4">MARKETING STRATEGY</p>
          <h2 className="font-display text-5xl md:text-6xl mb-16">THE APPROACH.</h2>
        </motion.div>

        {/* Positioning statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border p-10 mb-16"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-4">POSITIONING</p>
          <h3 className="font-display text-3xl md:text-4xl mb-6">
            NOT JUST SPORTSWEAR — A DOPAMINE MOVEMENT.
          </h3>
          <p className="font-mono text-sm text-foreground/70 leading-relaxed max-w-2xl">
            ClassPass gives access + community. BB Athletics gives identity + aspiration. Together: the full "get your high" experience. The brand that makes you feel more alive.
          </p>
        </motion.div>

        {/* Persona cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-border p-8 card-hover"
          >
            <div className="w-12 h-12 rounded-full bg-soft-volcano/20 flex items-center justify-center mb-6">
              <span className="font-display text-xl text-soft-volcano">F</span>
            </div>
            <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground mb-2">SEGMENT_01</p>
            <h3 className="font-display text-2xl mb-3">THE FINISHER</h3>
            <p className="font-mono text-xs text-foreground/60 leading-relaxed">
              25–40 · Sport as transformation<br />
              Wants to feel and look her best<br />
              ClassPass power user · Instagram-native
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border border-border p-8 card-hover"
          >
            <div className="w-12 h-12 rounded-full bg-sky-blue/20 flex items-center justify-center mb-6">
              <span className="font-display text-xl text-sky-blue">R</span>
            </div>
            <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground mb-2">SEGMENT_02</p>
            <h3 className="font-display text-2xl mb-3">THE RADICAL RUNNER</h3>
            <p className="font-mono text-xs text-foreground/60 leading-relaxed">
              30–45 · Performance obsessed<br />
              Pushes limits · Discipline is dopamine<br />
              Community-driven · Brand-loyal
            </p>
          </motion.div>
        </div>

        {/* Strategy funnel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border p-10"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-8">THE FUNNEL</p>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {funnelSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-6 flex-1">
                <div>
                  <p className="font-display text-2xl mb-2">{step.label}</p>
                  <p className="font-mono text-xs text-foreground/60">{step.desc}</p>
                </div>
                {i < funnelSteps.length - 1 && (
                  <span className="hidden md:block font-display text-2xl text-volcano/40">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategySection;
