"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Marquee } from "@/components/ui/Marquee";
import { LiquidGlass } from "@/components/ui/LiquidGlass";

export default function Home() {
  const { scrollY } = useScroll();

  const y1           = useTransform(scrollY, [0, 700],  [0, 280]);
  const opacity1     = useTransform(scrollY, [0, 450],  [1, 0]);
  const yBg          = useTransform(scrollY, [0, 900],  [0, -130]);
  const scaleGlass   = useTransform(scrollY, [0, 600],  [1, 0.86]);
  const opacityGlass = useTransform(scrollY, [0, 450],  [1, 0]);

  // Ref for the orange box so we can compute its rotated clip-path
  const orangeBoxRef = useRef<HTMLDivElement>(null);
  // clip-path string for the white-on-orange text layer
  const [whiteClip, setWhiteClip] = useState("inset(0 0 100% 0)");

  useEffect(() => {
    let raf: number;

    const update = () => {
      if (orangeBoxRef.current) {
        const r = orangeBoxRef.current.getBoundingClientRect();
        // Box is straight (no rotation) — just use the rect corners directly
        setWhiteClip(
          `polygon(${r.left}px ${r.top}px, ${r.right}px ${r.top}px, ${r.right}px ${r.bottom}px, ${r.left}px ${r.bottom}px)`
        );
      }
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/*
        ── LAYER 1: SEMICONSTRUCTOR — black fill, orange outline ──
        Visible everywhere on the black background.
      */}
      <motion.div
        style={{ y: yBg }}
        className="fixed top-16 left-0 w-full pointer-events-none -z-[25] flex justify-center select-none"
      >
        <h1
          className="text-[18vw] font-black tracking-[-0.05em] leading-none whitespace-nowrap"
          style={{
            color: "#0a0a0a",
            WebkitTextStroke: "2px #ff7a1e",
            paintOrder: "stroke fill",
          }}
        >
          SEMICONSTRUCTOR
        </h1>
      </motion.div>

      {/*
        ── LAYER 2: SEMICONSTRUCTOR — white fill, black outline ──
        The clip-path is applied to a fixed inset-0 wrapper so that the
        viewport coordinates from getBoundingClientRect match 1:1 without offsets.
      */}
      <div
        style={{ clipPath: whiteClip }}
        className="fixed inset-0 pointer-events-none -z-[15] overflow-hidden"
      >
        <motion.div
          style={{ y: yBg }}
          className="absolute top-16 left-0 w-full flex justify-center select-none"
        >
          <h1
            className="text-[18vw] font-black tracking-[-0.05em] leading-none whitespace-nowrap"
            style={{ color: "#ffffff" }}
          >
            SEMICONSTRUCTOR
          </h1>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="min-h-screen flex flex-col relative overflow-hidden">

        {/*
          Orange panel — fixed size, straight (no rotation), flush right.
          Height = same space the SEMICONSTRUCTOR text occupies so they
          line up perfectly.
          The panel acts as the strict clip container for Layer 2 above.
        */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity: opacityGlass }}
          className="absolute right-0 top-0 w-[58vw] pointer-events-none -z-20"
        >
          <div
            ref={orangeBoxRef}
            className="w-full rounded-l-[2.5rem]"
            style={{
              backgroundColor: "#ff7a1e",
              height: "calc(4rem + 18vw + 3rem)",
            }}
          />
        </motion.div>

        {/* ── Content column ── */}
        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="relative z-10 flex flex-col min-h-screen"
        >
          {/* Spacer — same height as the orange panel so Tony starts below it */}
          <div style={{ height: "calc(4rem + 18vw + 3rem)" }} />

          {/* ── TONY. — solid white ── */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "102%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-[-0.04em] leading-[0.88] uppercase"
              style={{ fontSize: "clamp(4rem, 13vw, 10rem)", color: "#ffffff" }}
            >
              Tony.
            </motion.h1>
          </div>

          {/* ── BACKEND — warm peach ── */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "102%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-[-0.04em] leading-[0.88] uppercase"
              style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)", color: "#ffb07a" }}
            >
              Backend
            </motion.h1>
          </div>

          {/* ── DEVELOPER. — warm peach ── */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "102%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-[-0.04em] leading-[0.88] uppercase"
              style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)", color: "#ffb07a" }}
            >
              Developer.
            </motion.h1>
          </div>

          {/* ── Bottom row ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="flex justify-between items-end mt-auto pb-12 pt-12"
          >
            <p
              className="text-[13px] leading-relaxed max-w-[220px]"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Scalable infrastructure.<br />
              Bare-metal performance.<br />
              Systems that own their stack.
            </p>

            <a
              href="mailto:tony@vaultscope.de"
              className="group flex items-center gap-3"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase group-hover:text-white transition-colors duration-300">
                Get in touch
              </span>
              <span
                className="w-8 h-8 rounded-full border flex items-center justify-center group-hover:border-white/60 transition-colors duration-300"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section className="py-32 md:py-52 relative">
        <div className="absolute top-24 right-0 text-[28vw] font-black tracking-[-0.05em] text-outline opacity-[0.035] pointer-events-none select-none leading-none -z-10">
          01
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 sticky top-32 pt-1">
              (01) About
            </p>
          </div>

          <div className="md:col-span-9 space-y-12">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-[2.75rem] font-medium leading-[1.22] tracking-[-0.02em]"
            >
              I build scalable backend architectures and run heavy self-hosted infrastructure.{" "}
              <span className="text-white/22">
                Based in Germany, I bridge the gap between low-level system administration and modern web development.
              </span>
            </motion.p>

            {/* Glass info cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {[
                {
                  label: "Philosophy",
                  body: "I believe in owning your infrastructure. Whether it's spinning up a Proxmox cluster or writing bare-metal Rust services, true scale comes from understanding the full stack.",
                },
                {
                  label: "Experience",
                  body: "Founder of VaultScope, creating seamless VPS experiences. Architect behind Local.fm and Pegasus, handling thousands of real-time events at scale.",
                },
              ].map((item, i) => (
                <LiquidGlass
                  key={item.label}
                  className="rounded-2xl"
                  distortion={5}
                  noiseFrequency={0.02}
                >
                  <div className="p-7 md:p-8 space-y-3">
                    <div className="w-6 h-px bg-white/25" />
                    <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-white/35">
                      {item.label}
                    </p>
                    <p className="text-white/65 leading-relaxed text-[14px]">
                      {item.body}
                    </p>
                  </div>
                </LiquidGlass>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SELECTED WORK
      ══════════════════════════════════════ */}
      <section className="py-32 md:py-52 border-t border-white/[0.05] relative">
        <div className="absolute top-24 right-0 text-[28vw] font-black tracking-[-0.05em] text-outline opacity-[0.035] pointer-events-none select-none leading-none -z-10">
          02
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 sticky top-32 pt-1">
              (02) Selected Work
            </p>
          </div>

          <div className="md:col-span-9 space-y-20">
            {projects.slice(0, 2).map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  {/* Glass project card */}
                  <LiquidGlass
                    className="w-full rounded-[2rem] mb-6 overflow-hidden"
                    distortion={7}
                    noiseFrequency={0.018}
                  >
                    <div className="w-full aspect-[16/10] relative overflow-hidden">
                      {project.image ? (
                        <motion.img
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:opacity-85 transition-opacity duration-700"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-white/[0.03]" />
                      )}
                      {/* Bottom gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent group-hover:opacity-40 transition-opacity duration-600 pointer-events-none" />
                    </div>
                  </LiquidGlass>

                  {/* Text row */}
                  <div className="flex items-start justify-between gap-4 px-1">
                    <div>
                      <h3 className="text-3xl md:text-[2.8rem] font-bold tracking-[-0.025em] leading-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/38 text-base font-light">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-1.5 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-350">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* All projects CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-white/35 hover:text-white/75 transition-colors duration-300"
              >
                View all projects
                <span className="w-7 h-7 rounded-full border border-white/15 group-hover:border-white/40 flex items-center justify-center transition-colors duration-300">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER CTA
      ══════════════════════════════════════ */}
      <section className="py-36 md:py-56 border-t border-white/[0.05] relative overflow-hidden flex flex-col items-center text-center">
        {/* Subtle centred glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
          <div className="w-[700px] h-[280px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] font-bold tracking-[0.32em] uppercase text-white/22 mb-8"
        >
          Open to new projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-black tracking-[-0.04em] leading-[1.0] mb-16"
        >
          Let&apos;s build<br />
          <span className="text-white/20">something.</span>
        </motion.h2>

        {/* Apple glass CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="mailto:tony@vaultscope.de"
            className="group block w-40 h-40 rounded-full hover:scale-105 transition-transform duration-500"
          >
            <LiquidGlass className="w-full h-full rounded-full" distortion={10} noiseFrequency={0.02}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-white/75 group-hover:text-white transition-colors duration-300">
                  Say hello
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </LiquidGlass>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-9 text-[11px] text-white/18 tracking-[0.12em]"
        >
          tony@vaultscope.de
        </motion.p>
      </section>

    </div>
  );
}
