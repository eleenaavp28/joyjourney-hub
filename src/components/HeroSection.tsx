import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Corner X marks */}
      <span className="absolute top-8 left-8 text-volcano/30 font-display text-xl">✕</span>
      <span className="absolute top-8 right-8 text-volcano/30 font-display text-xl">✕</span>
      <span className="absolute bottom-8 left-8 text-volcano/30 font-display text-xl">✕</span>
      <span className="absolute bottom-8 right-8 text-volcano/30 font-display text-xl">✕</span>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <p className="font-mono text-[10px] tracking-[0.3em] text-volcano mb-8">
          BLUE BANANA ATHLETICS × CLASSPASS
        </p>

        <h1 className="font-display text-7xl md:text-9xl leading-[0.85] mb-4">
          GET YOUR<br />
          <span className="text-volcano">HIGH</span>
        </h1>

        <p className="font-mono text-sm text-muted-foreground max-w-md mx-auto mb-12">
          The collab that turns your workout into a movement.
        </p>

        <p className="font-mono text-[9px] tracking-[0.2em] text-muted-foreground/50 mb-6">
          A STRATEGIC MARKETING COLLABORATION · IE BUSINESS SCHOOL
        </p>

        <a
          href="#signup"
          className="inline-block font-mono text-[11px] tracking-[0.2em] border border-volcano text-volcano px-8 py-4 hover:bg-volcano hover:text-primary-foreground transition-all duration-300"
        >
          JOIN THE MOVEMENT
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
