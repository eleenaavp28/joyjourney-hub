import { motion } from "framer-motion";

const WeBuiltThisSection = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-4">TACTIC_005 · THE WEBSITE</p>
          <h2 className="font-display text-5xl md:text-6xl mb-16">WE BUILT THIS.</h2>
        </motion.div>

        {/* "You are here" mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-volcano/30 p-12 text-center"
        >
          <p className="font-display text-3xl md:text-4xl mb-4">GET YOUR HIGH</p>
          <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground mb-8">
            BB ATHLETICS × CLASSPASS — CAMPAIGN LANDING PAGE
          </p>
          <div className="inline-block border border-volcano/20 px-6 py-3">
            <p className="font-mono text-[10px] tracking-[0.2em] text-volcano">← YOU ARE HERE →</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-sm text-foreground/60 leading-relaxed mt-12 max-w-2xl"
        >
          This landing page is a live prototype of the campaign's digital presence — designed to capture leads, communicate brand positioning, and convert ClassPass users into BB Athletics customers. It's not a mockup. It's the real thing.
        </motion.p>
      </div>
    </section>
  );
};

export default WeBuiltThisSection;
