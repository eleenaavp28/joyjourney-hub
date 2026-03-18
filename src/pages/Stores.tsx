import { motion } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const stores = [
  { city: "Madrid", address: "Calle Serrano 42, 28001 Madrid", maps: "https://maps.google.com/?q=Calle+Serrano+42+Madrid" },
  { city: "Barcelona", address: "Passeig de Gràcia 55, 08007 Barcelona", maps: "https://maps.google.com/?q=Passeig+de+Gracia+55+Barcelona" },
  { city: "Valencia", address: "Calle Colón 28, 46004 Valencia", maps: "https://maps.google.com/?q=Calle+Colon+28+Valencia" },
];

const Stores = () => (
  <div className="min-h-screen bg-soft-peach text-warm-espresso">
    <Navbar />
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-warm-espresso/60 hover:text-soft-volcano transition-colors mb-12">
        <ArrowLeft size={14} /> BACK
      </Link>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="font-display text-6xl md:text-8xl mb-4">FIND US</h1>
        <p className="font-mono text-xs tracking-[0.2em] text-warm-espresso/50 mb-16">
          VISIT US IN STORE OR SHOP ONLINE
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {stores.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white/60 border border-warm-espresso/10 rounded-2xl p-8"
          >
            <MapPin className="text-soft-volcano mb-4" size={20} />
            <h3 className="font-display text-3xl mb-2">{s.city}</h3>
            <p className="font-mono text-xs text-warm-espresso/60 mb-2">{s.address}</p>
            <p className="font-mono text-[9px] tracking-[0.15em] text-warm-espresso/30 mb-6">MON–SAT 10:00–20:00</p>
            <a
              href={s.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.2em] text-soft-volcano hover:underline"
            >
              GET DIRECTIONS
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <h2 className="font-display text-4xl mb-4">SHOP ONLINE</h2>
        <p className="font-mono text-xs text-warm-espresso/50 mb-8">
          Browse the full BB Athletics collection from anywhere.
        </p>
        <Link
          to="/collections"
          className="inline-block bg-warm-espresso text-soft-peach font-mono text-xs tracking-[0.2em] px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          ENTER THE STORE
        </Link>
      </motion.div>
    </div>
  </div>
);

export default Stores;
