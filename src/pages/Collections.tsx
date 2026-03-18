import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const collections = [
  {
    num: "01",
    title: "GET YOUR HIGH SS25",
    desc: "Spring/Summer launch — performance meets identity.",
    bg: "hsl(350 35% 85%)",
    cta: "SHOP NOW",
    ctaColor: "bg-soft-volcano text-primary-foreground",
    enabled: true,
  },
  {
    num: "02",
    title: "BB × CLASSPASS EXCLUSIVE",
    desc: "Members-only drop — unlock with your membership.",
    bg: "hsl(228 87% 90%)",
    cta: "CLASSPASS MEMBERS ONLY — UNLOCK",
    ctaColor: "bg-sky-blue text-primary-foreground",
    enabled: true,
  },
  {
    num: "03",
    title: "TRAIL SERIES",
    desc: "Designed for outdoor terrain.",
    bg: "hsl(25 40% 90%)",
    cta: "COMING SOON",
    ctaColor: "bg-warm-espresso/20 text-warm-espresso/40 cursor-not-allowed",
    enabled: false,
  },
];

const Collections = () => (
  <div className="min-h-screen bg-soft-peach text-warm-espresso">
    <Navbar />
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-warm-espresso/60 hover:text-soft-volcano transition-colors mb-12">
        <ArrowLeft size={14} /> BACK
      </Link>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-display text-6xl md:text-8xl mb-4">THE DROPS</h1>
        <p className="font-mono text-xs tracking-[0.2em] text-warm-espresso/50 mb-16">
          LIMITED COLLECTIONS. BUILT FOR THE OBSESSED.
        </p>
      </motion.div>

      <div className="space-y-8">
        {collections.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="rounded-2xl overflow-hidden border border-warm-espresso/10"
            style={{ backgroundColor: c.bg }}
          >
            <div className="p-10 md:p-16">
              <p className="font-mono text-[9px] tracking-[0.2em] text-warm-espresso/40 mb-4">
                COLLECTION {c.num}
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-4">{c.title}</h2>
              <p className="font-mono text-sm text-warm-espresso/60 mb-8">{c.desc}</p>
              <button
                className={`font-mono text-xs tracking-[0.2em] px-8 py-3 rounded-full ${c.ctaColor} ${c.enabled ? "hover:opacity-90" : ""} transition-opacity`}
                disabled={!c.enabled}
              >
                {c.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Collections;
