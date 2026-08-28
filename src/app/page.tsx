"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="flex flex-col min-h-screen" ref={containerRef}>
      
      {/* GIANT BACKGROUND TEXT (PARALLAX) */}
      <motion.div 
        style={{ y: yBg }} 
        className="fixed top-24 left-0 w-full pointer-events-none -z-10 overflow-hidden flex justify-center"
      >
        <h1 className="text-[20vw] font-bold tracking-[-0.04em] text-outline whitespace-nowrap opacity-50">
          SEMICONSTRUCTOR
        </h1>
      </motion.div>

      {/* HERO SECTION */}
      <section className="min-h-[95vh] flex flex-col justify-center pt-24 pb-12 relative">
        <motion.div 
          style={{ y: y1, opacity: opacity1 }}
          className="space-y-4"
        >
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-9xl font-bold tracking-[-0.04em] leading-[0.85] uppercase"
            >
              Tony.
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] md:text-8xl font-bold tracking-[-0.04em] leading-[0.85] text-white/40 uppercase"
            >
              Backend
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-4">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] md:text-8xl font-bold tracking-[-0.04em] leading-[0.85] text-white/40 uppercase relative inline-block"
            >
              Developer.
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-between items-end mt-24 md:mt-32"
          >
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
              Scroll to explore <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>

            {/* Rotating Badge */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 hidden md:flex items-center justify-center rounded-full border border-white/20 relative"
            >
              <span className="absolute text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 text-center">
                SCROLL<br/>DOWN
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE SEPARATOR */}
      <div className="py-12">
        <Marquee />
      </div>

      {/* ABOUT SECTION */}
      <section className="py-32 md:py-48 relative">
        {/* Decorative giant number */}
        <div className="absolute top-32 right-12 text-[30vw] font-bold tracking-[-0.04em] text-outline opacity-20 pointer-events-none -z-10">
          01
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground sticky top-32">
              (01) About
            </h2>
          </div>
          <div className="md:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-medium leading-tight tracking-[-0.02em]"
            >
              I build scalable backend architectures and run heavy self-hosted infrastructure. 
              <span className="text-white/30"> Based in Germany, I bridge the gap between low-level system administration and modern web application development.</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24"
            >
              <div className="space-y-6">
                <div className="w-12 h-px bg-white/30" />
                <h3 className="text-xl font-bold uppercase tracking-[0.2em]">Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I believe in owning your infrastructure. Whether it's spinning up a Proxmox cluster or writing bare-metal Rust services, true scale comes from understanding the stack from top to bottom.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-px bg-white/30" />
                <h3 className="text-xl font-bold uppercase tracking-[0.2em]">Experience</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Founder of VaultScope, creating seamless VPS experiences. Architect behind Local.fm and Pegasus, handling thousands of real-time events.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS SECTION */}
      <section className="py-32 md:py-48 border-t border-border relative">
        <div className="absolute top-32 right-12 text-[30vw] font-bold tracking-[-0.04em] text-outline opacity-20 pointer-events-none -z-10">
          02
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground sticky top-32">
              (02) Selected Work
            </h2>
          </div>
          <div className="md:col-span-8 space-y-32">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div 
                key={project.slug}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-border/50 mb-8 relative">
                    {project.image && (
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <h3 className="text-4xl md:text-6xl font-bold tracking-[-0.02em] mb-4 flex items-center justify-between">
                    {project.title}
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </h3>
                  <p className="text-xl md:text-2xl text-muted-foreground font-light">
                    {project.subtitle}
                  </p>
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-12"
            >
              <Link 
                href="/projects" 
                className="group inline-flex items-center justify-center px-12 py-6 text-sm font-bold tracking-[0.2em] uppercase border border-white rounded-full hover:bg-white hover:text-black transition-colors duration-500"
              >
                View All Projects
                <ArrowRight className="w-4 h-4 ml-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FOOTER CTA */}
      <section className="py-32 md:py-48 border-t border-border flex flex-col items-center text-center relative overflow-hidden">
        {/* Background spinning circles */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[10%] w-[120%] aspect-square border border-white/5 rounded-full pointer-events-none -z-10"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[50%] -right-[10%] w-[120%] aspect-square border border-white/5 rounded-full pointer-events-none -z-10"
        />

        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-bold tracking-[-0.04em] mb-12"
        >
          Let's build<br/>something.
        </motion.h2>
        <motion.a 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          href="mailto:tony@vaultscope.de" 
          className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-white text-black text-lg font-bold uppercase tracking-[0.2em] hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
        >
          Get in touch
        </motion.a>
      </section>
    </div>
  );
}
