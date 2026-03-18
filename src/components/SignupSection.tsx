import { motion } from "framer-motion";
import { useState } from "react";

const SignupSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="signup" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-4">EARLY ACCESS</p>
          <h2 className="font-display text-5xl md:text-6xl mb-8">
            READY TO GET &nbsp;&nbsp;&nbsp;&nbsp; YOUR HIGH?
          </h2>
          <p className="font-mono text-sm text-foreground/60 mb-12">
            Be first to unlock BB Athletics × ClassPass classes, drops, and events.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                required
                className="flex-1 bg-secondary border border-border px-6 py-4 font-mono text-sm text-foreground tracking-[0.1em] placeholder:text-muted-foreground focus:outline-none focus:border-volcano transition-colors"
              />
              <button
                type="submit"
                className="bg-volcano text-primary-foreground font-mono text-[11px] tracking-[0.2em] px-8 py-4 hover:opacity-90 transition-opacity"
              >
                GET EARLY ACCESS
              </button>
            </form>
          ) : (
            <p className="font-display text-3xl text-volcano">
              YOU'RE IN. THE HIGH IS COMING. ✕
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SignupSection;
