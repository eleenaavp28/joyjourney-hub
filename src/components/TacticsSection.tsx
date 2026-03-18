import { motion } from "framer-motion";

const tactics = [
  {
    num: "001",
    title: "CLASSPASS INTEGRATION",
    desc: "Exclusive BB Athletics outdoor running sessions bookable directly on ClassPass. First-of-kind branded outdoor fitness experience on the platform.",
  },
  {
    num: "002",
    title: "DIGITAL CAMPAIGN",
    desc: 'Instagram-first content series "60 MINUTES OFF YOUR PHONE" — raw, lo-fi aesthetic. UGC-driven. Real runners, real sweat, real dopamine.',
  },
  {
    num: "003",
    title: "RUNNING CLUB ACTIVATION",
    desc: 'Monthly "GET YOUR HIGH" running club events in Madrid, Barcelona, and Valencia. Free for ClassPass members. Community-first.',
  },
  {
    num: "004",
    title: "LIMITED DROPS",
    desc: "ClassPass member-exclusive BB Athletics gear drops tied to milestone workouts. Run 10 sessions → unlock the drop. Gamified loyalty.",
  },
];

const TacticsSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-4">TACTICAL PLAN</p>
          <h2 className="font-display text-5xl md:text-6xl mb-16">HOW WE DO IT.</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {tactics.map((tactic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border p-8 card-hover"
            >
              <p className="font-mono text-[9px] tracking-[0.2em] text-volcano mb-4">{tactic.num}</p>
              <h3 className="font-display text-2xl mb-4">{tactic.title}</h3>
              <p className="font-mono text-xs text-foreground/60 leading-relaxed">{tactic.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TacticsSection;
