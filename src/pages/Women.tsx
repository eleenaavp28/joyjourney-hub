import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const products = [
  { name: "High-Rise Run Tight", cat: "Bottoms", price: "€89", colors: ["#3D3530", "#FF8C6B", "#D4B5A8"] },
  { name: "Trail Bra Pro", cat: "Tops", price: "€55", colors: ["#3D3530", "#FFF0EB", "#FF8C6B"] },
  { name: "Wind Shell Jacket", cat: "Outerwear", price: "€129", colors: ["#3D3530", "#7B93F5"] },
  { name: "3\" Run Short", cat: "Bottoms", price: "€65", colors: ["#FF8C6B", "#3D3530", "#FFF0EB"] },
  { name: "Seamless Long Sleeve", cat: "Tops", price: "€75", colors: ["#D4B5A8", "#3D3530"] },
  { name: "Compression Sock", cat: "Accessories", price: "€25", colors: ["#3D3530", "#FF8C6B"] },
];

const filters = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];

const Women = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter(p => p.cat === active);

  return (
    <div className="min-h-screen bg-soft-peach text-warm-espresso">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-warm-espresso/60 hover:text-soft-volcano transition-colors mb-12">
          <ArrowLeft size={14} /> BACK
        </Link>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-display text-6xl md:text-8xl mb-4">MADE TO MOVE</h1>
          <p className="font-mono text-xs tracking-[0.2em] text-warm-espresso/50 mb-12">
            PERFORMANCE WEAR DESIGNED FOR THE FINISHER
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono text-[10px] tracking-[0.2em] px-4 py-2 rounded-full border transition-all ${
                active === f
                  ? "bg-soft-volcano text-primary-foreground border-soft-volcano"
                  : "bg-white/60 text-warm-espresso/60 border-warm-espresso/10 hover:border-soft-volcano/40"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/60 border border-warm-espresso/10 rounded-2xl overflow-hidden"
            >
              <div className="aspect-[3/4] bg-warm-espresso/5 flex items-center justify-center">
                <p className="font-mono text-[10px] tracking-[0.2em] text-warm-espresso/20">PRODUCT IMAGE</p>
              </div>
              <div className="p-6">
                <p className="font-mono text-[9px] tracking-[0.2em] text-warm-espresso/40 mb-1">{p.cat.toUpperCase()}</p>
                <h3 className="font-display text-xl mb-1">{p.name}</h3>
                <p className="font-mono text-sm text-warm-espresso/70 mb-3">{p.price}</p>
                <div className="flex gap-2 mb-4">
                  {p.colors.map(c => (
                    <div key={c} className="w-4 h-4 rounded-full border border-warm-espresso/10" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <button
                  onClick={() => toast({ title: "Added! We'll be in touch soon 🧡" })}
                  className="w-full bg-soft-volcano text-primary-foreground font-mono text-xs tracking-[0.2em] py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  ADD TO CART
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
