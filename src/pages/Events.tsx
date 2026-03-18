import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const badgeColors: Record<string, string> = {
  "Running Club": "bg-soft-volcano text-primary-foreground",
  "Pop-Up Store": "bg-sky-blue text-primary-foreground",
  "Drop Launch": "bg-dusty-rose text-primary-foreground",
};

const events = [
  { name: "GET YOUR HIGH Run", city: "Madrid", date: "April 5, 2026", type: "Running Club" },
  { name: "BB Athletics Pop-Up", city: "Barcelona", date: "April 12, 2026", type: "Pop-Up Store" },
  { name: "ClassPass × BB Drop Launch", city: "Madrid", date: "April 20, 2026", type: "Drop Launch" },
  { name: "Trail Series Run", city: "Valencia", date: "May 3, 2026", type: "Running Club" },
];

const Events = () => (
  <div className="min-h-screen bg-soft-peach text-warm-espresso">
    <Navbar />
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-warm-espresso/60 hover:text-soft-volcano transition-colors mb-12">
        <ArrowLeft size={14} /> BACK
      </Link>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-display text-6xl md:text-8xl mb-4">WHERE WE MEET</h1>
        <p className="font-mono text-xs tracking-[0.2em] text-warm-espresso/50 mb-16">
          REAL EVENTS. REAL PEOPLE. REAL DOPAMINE.
        </p>
      </motion.div>

      <div className="space-y-6">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/60 border border-warm-espresso/10 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h3 className="font-display text-2xl mb-1">{e.name}</h3>
              <p className="font-mono text-xs text-warm-espresso/50">{e.city} · {e.date}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`font-mono text-[9px] tracking-[0.15em] px-4 py-1.5 rounded-full ${badgeColors[e.type]}`}>
                {e.type.toUpperCase()}
              </span>
              <button
                onClick={() => toast({ title: "Added! We'll be in touch soon 🧡" })}
                className="bg-warm-espresso text-soft-peach font-mono text-xs tracking-[0.2em] px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-fit"
              >
                SIGN UP
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Events;
