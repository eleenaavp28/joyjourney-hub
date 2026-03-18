import { motion } from "framer-motion";

const kpis = [
  {
    value: "+15%",
    label: "Brand awareness among target segment",
    detail: "Measured via post-campaign brand tracking study",
  },
  {
    value: "5,000",
    label: "ClassPass-BB Athletics session bookings",
    detail: "Target within first 6 months of integration",
  },
  {
    value: "2,000",
    label: "Email signups via this landing page",
    detail: "Direct lead generation from campaign digital presence",
  },
  {
    value: "3×",
    label: "Engagement lift on BB Athletics Instagram",
    detail: "Driven by UGC campaign & running club content",
  },
];

const KPIsSection = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-4">EXPECTED IMPACT</p>
          <h2 className="font-display text-5xl md:text-6xl mb-16">
            HOW WE MEASURE &nbsp;&nbsp;&nbsp; SUCCESS.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-border p-8 card-hover"
            >
              <p className="font-display text-5xl text-volcano mb-4">{kpi.value}</p>
              <p className="font-mono text-sm text-foreground/80 mb-4">{kpi.label}</p>
              <p className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground">
                {kpi.detail.toUpperCase()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPIsSection;
