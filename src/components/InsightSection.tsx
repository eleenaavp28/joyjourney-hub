import { motion } from "framer-motion";

const stats = [
  {
    value: "44.58%",
    label: "of BB consumers already associate the brand with outdoor sport",
    source: "BB 2024 Brand Tracking Study",
  },
  {
    value: "#1",
    label: "Running is the fastest growing sport in Spain among 25–40 women",
    source: "National Sports Council, 2024",
  },
  {
    value: "35M+",
    label: "ClassPass class bookings globally — with a female-majority user base",
    source: "ClassPass Global Report",
  },
];

const InsightSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-4">SITUATION ANALYSIS</p>
          <h2 className="font-display text-5xl md:text-6xl mb-16">
            WHY THIS, &nbsp;&nbsp;&nbsp;&nbsp; WHY NOW.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border border-border p-8 card-hover"
            >
              <p className="font-display text-5xl text-volcano mb-4">{stat.value}</p>
              <p className="font-mono text-sm text-foreground/80 mb-4">{stat.label}</p>
              <p className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground">
                {stat.source.toUpperCase()}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-l-2 border-volcano pl-8 max-w-2xl"
        >
          <p className="font-mono text-sm text-foreground/70 italic leading-relaxed">
            "We saw a gap. Women want sport that feels like identity, not obligation. Blue Banana Athletics has the soul. ClassPass has the scale. Together — unstoppable."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default InsightSection;
