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
    <div className="relative w-screen left-1/2 -translate-x-1/2 flex overflow-x-hidden border-y border-border py-6 bg-black z-10">
      <motion.div 
        className="flex whitespace-nowrap text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] text-muted-foreground/30"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {items.map((item, i) => (
          <span key={i} className="mx-6 md:mx-12">
            {item === "•" ? <span className="text-primary/20">{item}</span> : item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
