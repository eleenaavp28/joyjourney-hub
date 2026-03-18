import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const events = [
  { city: "Madrid", date: "April 5, 2026", distance: "10K", level: "Intermediate" },
  { city: "Barcelona", date: "April 19, 2026", distance: "5K", level: "Beginner" },
  { city: "Valencia", date: "May 3, 2026", distance: "Trail 15K", level: "Advanced" },
];

const RunningClub = () => (
  <div className="min-h-screen bg-soft-peach text-warm-espresso">
    <Navbar />
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-warm-espresso/60 hover:text-soft-volcano transition-colors mb-12">
        <ArrowLeft size={14} /> BACK
      </Link>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-display text-6xl md:text-8xl mb-4">RUN WITH US</h1>
        <p className="font-mono text-xs tracking-[0.2em] text-warm-espresso/50 mb-16">
          MONTHLY OUTDOOR RUNS IN MADRID, BARCELONA & VALENCIA
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white/60 border border-warm-espresso/10 p-8 rounded-2xl"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] text-warm-espresso/40 mb-4">
              EVENT {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="font-display text-3xl mb-2">{e.city}</h3>
            <p className="font-mono text-xs text-warm-espresso/60 mb-4">{e.date}</p>
            <div className="flex gap-2 mb-6">
              <span className="font-mono text-[9px] tracking-[0.15em] bg-soft-volcano/10 text-soft-volcano px-3 py-1 rounded-full">{e.distance}</span>
              <span className="font-mono text-[9px] tracking-[0.15em] bg-warm-espresso/5 text-warm-espresso/50 px-3 py-1 rounded-full">{e.level}</span>
            </div>
            <button
              onClick={() => toast({ title: "Added! We'll be in touch soon 🧡" })}
              className="w-full bg-soft-volcano text-primary-foreground font-mono text-xs tracking-[0.2em] py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              RESERVE YOUR SPOT
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white/60 border border-warm-espresso/10 p-10 rounded-2xl mb-20"
      >
        <p className="font-mono text-[9px] tracking-[0.2em] text-warm-espresso/40 mb-4">NEXT RUN</p>
        <h3 className="font-display text-3xl mb-2">RETIRO PARK, MADRID</h3>
        <p className="font-mono text-xs text-warm-espresso/60 mb-6">April 5th, 2026 · 8:00 AM</p>
        <div className="bg-warm-espresso/5 rounded-xl h-48 flex items-center justify-center">
          <p className="font-mono text-[10px] tracking-[0.2em] text-warm-espresso/30">MAP PLACEHOLDER</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="font-display text-4xl mb-8">COMMUNITY</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-16">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-warm-espresso/5 rounded-xl" />
          ))}
        </div>

        <div className="text-center">
          <h3 className="font-display text-2xl mb-4">CAN'T MAKE IT?</h3>
          <p className="font-mono text-xs text-warm-espresso/50 mb-6 tracking-[0.15em]">JOIN THE WAITLIST</p>
          <button
            onClick={() => toast({ title: "Added! We'll be in touch soon 🧡" })}
            className="bg-soft-volcano text-primary-foreground font-mono text-xs tracking-wider px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            SUBMIT
          </button>
        </div>
      </motion.div>
    </div>
  </div>
);

export default RunningClub;
