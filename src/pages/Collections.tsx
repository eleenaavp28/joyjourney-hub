import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

import womenLeggings from "@/assets/products/women-leggings.jpg";
import womenBra from "@/assets/products/women-bra.jpg";
import womenJacket from "@/assets/products/women-jacket.jpg";
import womenLongsleeve from "@/assets/products/women-longsleeve.jpg";
import menShorts from "@/assets/products/men-shorts.jpg";
import menTshirt from "@/assets/products/men-tshirt.jpg";
import menVest from "@/assets/products/men-vest.jpg";
import menTights from "@/assets/products/men-tights.jpg";

const womenProducts = [
  { name: "High-Rise Run Tight", price: "€89", image: womenLeggings },
  { name: "Trail Bra Pro", price: "€65", image: womenBra },
  { name: "Wind Shell Jacket", price: "€145", image: womenJacket },
  { name: "Seamless Long Sleeve", price: "€72", image: womenLongsleeve },
];

const menProducts = [
  { name: "Run Pace Short", price: "€75", image: menShorts },
  { name: "Trail Run Tee", price: "€68", image: menTshirt },
  { name: "Wind Vest", price: "€120", image: menVest },
  { name: "Compression Tight", price: "€85", image: menTights },
];

const ProductCard = ({
  product,
  index,
  variant,
}: {
  product: { name: string; price: string; image: string };
  index: number;
  variant: "women" | "men";
}) => {
  const isWomen = variant === "women";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
      style={{
        border: isWomen
          ? "1px solid rgba(61,53,48,0.08)"
          : "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        className="h-64 md:h-72 relative flex items-center justify-center p-6"
        style={{ backgroundColor: isWomen ? "#F0EBE8" : "#2A2522" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>
      <div
        className="p-4"
        style={{ backgroundColor: isWomen ? "#FFF8F4" : "#1A1210" }}
      >
        <p
          className="font-display text-lg mb-1"
          style={{ color: isWomen ? "#3D3530" : "#FFFFFF" }}
        >
          {product.name}
        </p>
        <p
          className="font-mono text-sm mb-2"
          style={{ color: isWomen ? "#FF8C6B" : "#7B93F5" }}
        >
          {product.price}
        </p>
        <span
          className="inline-block font-mono text-[9px] tracking-[0.15em] px-3 py-1 rounded-full mb-3"
          style={{
            backgroundColor: isWomen ? "#D4B5A8" : "#4A5A8A",
            color: "#FFFFFF",
          }}
        >
          ONLY 50 UNITS
        </span>
        <button
          onClick={() =>
            toast({ title: isWomen ? "Added to waitlist! 🧡" : "Added to waitlist! 💪" })
          }
          className="w-full font-mono text-xs tracking-[0.2em] py-3 rounded-full transition-opacity hover:opacity-90"
          style={{
            backgroundColor: isWomen ? "#FF8C6B" : "#7B93F5",
            color: "#FFFFFF",
          }}
        >
          ADD TO WAITLIST
        </button>
      </div>
    </motion.div>
  );
};

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
          <h1 className="font-display text-4xl md:text-7xl mb-4" style={{ color: "#FFFFFF" }}>
            LIMITED DROP — GET YOUR HIGH COLLECTION
          </h1>
          <p className="font-mono text-sm md:text-base mb-6" style={{ color: "#FFFFFF" }}>
            50 units each. Once it's gone, it's gone.
          </p>
          <p className="font-display text-5xl md:text-7xl" style={{ color: "#FFFFFF" }}>
            48:00:00
          </p>
        </motion.div>
      </div>
    </div>

    {/* TWO COLUMNS */}
    <div className="flex flex-col md:flex-row">
      {/* LEFT — WOMEN ROSE SERIES */}
      <div className="flex-1" style={{ backgroundColor: "#FFF8F4" }}>
        <div className="px-6 py-4" style={{ backgroundColor: "#FF8C6B" }}>
          <p className="font-mono text-xs tracking-[0.2em] text-center" style={{ color: "#FFFFFF" }}>
            WOMEN · ROSE SERIES · LIMITED DROP
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6">
          {womenProducts.map((p, i) => (
            <ProductCard key={i} product={p} index={i} variant="women" />
          ))}
        </div>
        <div className="px-6 py-6 text-center" style={{ backgroundColor: "#FFE8DF" }}>
          <p className="font-mono text-xs tracking-[0.15em]" style={{ color: "#3D3530" }}>
            Designed for The Finisher. Soft on skin. Strong on trail.
          </p>
        </div>
      </div>

      <div className="hidden md:block w-px" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />

      {/* RIGHT — MEN SHADOW SERIES */}
      <div className="flex-1" style={{ backgroundColor: "#1A1210" }}>
        <div className="px-6 py-4" style={{ backgroundColor: "#7B93F5" }}>
          <p className="font-mono text-xs tracking-[0.2em] text-center" style={{ color: "#FFFFFF" }}>
            MEN · SHADOW SERIES · LIMITED DROP
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6">
          {menProducts.map((p, i) => (
            <ProductCard key={i} product={p} index={i} variant="men" />
          ))}
        </div>
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
