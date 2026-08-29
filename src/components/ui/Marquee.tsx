"use client";

import { motion } from "framer-motion";

export function Marquee() {
  const words = [
    "BACKEND DEVELOPMENT", "•",
    "SYSTEM ADMINISTRATION", "•",
    "SELF HOSTING", "•",
    "INFRASTRUCTURE", "•",
  ];
  
  // Duplicate array for seamless infinite scroll
  const items = [...words, ...words, ...words, ...words];

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 flex overflow-x-hidden border-y border-white/[0.06] py-5 bg-black z-10">
      <motion.div
        className="flex whitespace-nowrap text-2xl md:text-3xl font-black uppercase tracking-[0.25em] text-white/[0.07]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {items.map((item, i) => (
          <span key={i} className="mx-8 md:mx-14">
            {item === "•" ? <span className="text-white/20">{item}</span> : item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
