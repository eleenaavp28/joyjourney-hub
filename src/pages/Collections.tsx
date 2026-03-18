import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import {
  LeggingsIllustration, SportsBraIllustration, JacketIllustration, LongSleeveIllustration,
  ShortsIllustration, TShirtIllustration, VestIllustration, CompressionTightIllustration,
} from "@/components/ClothingIllustrations";

const womenIllustrations = [LeggingsIllustration, SportsBraIllustration, JacketIllustration, LongSleeveIllustration];
const menIllustrations = [ShortsIllustration, TShirtIllustration, VestIllustration, CompressionTightIllustration];

const womenProducts = [
  { name: "High-Rise Run Tight", price: "€89", gradient: "linear-gradient(135deg, #FFD6E0, #E8DCFF)" },
  { name: "Trail Bra Pro", price: "€65", gradient: "linear-gradient(135deg, #FFE8DF, #FFD6CC)" },
  { name: "Wind Shell Jacket", price: "€145", gradient: "linear-gradient(135deg, #E8D5FF, #FFB3C6)" },
  { name: "Seamless Long Sleeve", price: "€72", gradient: "linear-gradient(135deg, #FFF8F4, #FFE0D0)" },
];

const menProducts = [
  { name: "Run Pace Short", price: "€75", gradient: "linear-gradient(135deg, #0F0F0F, #2A2522)" },
  { name: "Trail Run Tee", price: "€68", gradient: "linear-gradient(135deg, #1A1210, #3D3530)" },
  { name: "Wind Vest", price: "€120", gradient: "linear-gradient(135deg, #0F0F0F, #1E2A3A)" },
  { name: "Compression Tight", price: "€85", gradient: "linear-gradient(135deg, #1A1210, #2C2018)" },
];

const Collections = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />

    {/* TOP HEADER */}
    <div
      className="pt-16"
      style={{ background: "linear-gradient(90deg, #FF8C6B, #7B93F5)" }}
    >
      <div className="px-6 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="font-display text-4xl md:text-7xl mb-4"
            style={{ color: "#FFFFFF" }}
          >
            LIMITED DROP — GET YOUR HIGH COLLECTION
          </h1>
          <p className="font-mono text-sm md:text-base mb-6" style={{ color: "#FFFFFF" }}>
            50 units each. Once it's gone, it's gone.
          </p>
          <p
            className="font-display text-5xl md:text-7xl"
            style={{ color: "#FFFFFF" }}
          >
            48:00:00
          </p>
        </motion.div>
      </div>
    </div>

    {/* TWO COLUMNS */}
    <div className="flex flex-col md:flex-row">
      {/* LEFT — WOMEN ROSE SERIES */}
      <div className="flex-1" style={{ backgroundColor: "#FFF8F4" }}>
        {/* Header bar */}
        <div className="px-6 py-4" style={{ backgroundColor: "#FF8C6B" }}>
          <p
            className="font-mono text-xs tracking-[0.2em] text-center"
            style={{ color: "#FFFFFF" }}
          >
            WOMEN · ROSE SERIES · LIMITED DROP
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-4 p-6">
          {womenProducts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
              style={{ border: "1px solid rgba(61,53,48,0.08)" }}
            >
              <div
                className="aspect-[3/4] relative flex items-center justify-center"
                style={{ background: p.gradient }}
              >
                {(() => { const Illus = womenIllustrations[i]; return <Illus />; })()}
              </div>
              <div className="p-4" style={{ backgroundColor: "#FFF8F4" }}>
                <p
                  className="font-display text-lg mb-1"
                  style={{ color: "#3D3530" }}
                >
                  {p.name}
                </p>
                <p
                  className="font-mono text-sm mb-2"
                  style={{ color: "#FF8C6B" }}
                >
                  {p.price}
                </p>
                <span
                  className="inline-block font-mono text-[9px] tracking-[0.15em] px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: "#D4B5A8", color: "#FFFFFF" }}
                >
                  ONLY 50 UNITS
                </span>
                <button
                  onClick={() => toast({ title: "Added to waitlist! 🧡" })}
                  className="w-full font-mono text-xs tracking-[0.2em] py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#FF8C6B", color: "#FFFFFF" }}
                >
                  ADD TO WAITLIST
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="px-6 py-6 text-center" style={{ backgroundColor: "#FFE8DF" }}>
          <p className="font-mono text-xs tracking-[0.15em]" style={{ color: "#3D3530" }}>
            Designed for The Finisher. Soft on skin. Strong on trail.
          </p>
        </div>
      </div>

      {/* VERTICAL DIVIDER — desktop only */}
      <div className="hidden md:block w-px" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />

      {/* RIGHT — MEN SHADOW SERIES */}
      <div className="flex-1" style={{ backgroundColor: "#1A1210" }}>
        {/* Header bar */}
        <div className="px-6 py-4" style={{ backgroundColor: "#7B93F5" }}>
          <p
            className="font-mono text-xs tracking-[0.2em] text-center"
            style={{ color: "#FFFFFF" }}
          >
            MEN · SHADOW SERIES · LIMITED DROP
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-4 p-6">
          {menProducts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="aspect-[3/4]"
                style={{ background: p.gradient }}
              />
              <div className="p-4" style={{ backgroundColor: "#1A1210" }}>
                <p
                  className="font-display text-lg mb-1"
                  style={{ color: "#FFFFFF" }}
                >
                  {p.name}
                </p>
                <p
                  className="font-mono text-sm mb-2"
                  style={{ color: "#7B93F5" }}
                >
                  {p.price}
                </p>
                <span
                  className="inline-block font-mono text-[9px] tracking-[0.15em] px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: "#4A5A8A", color: "#FFFFFF" }}
                >
                  ONLY 50 UNITS
                </span>
                <button
                  onClick={() => toast({ title: "Added to waitlist! 💪" })}
                  className="w-full font-mono text-xs tracking-[0.2em] py-3 rounded-full transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#7B93F5", color: "#FFFFFF" }}
                >
                  ADD TO WAITLIST
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="px-6 py-6 text-center" style={{ backgroundColor: "#0F0F0F" }}>
          <p className="font-mono text-xs tracking-[0.15em]" style={{ color: "#FFFFFF" }}>
            Built for The Radical Runner. No limits. No excuses.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Collections;
