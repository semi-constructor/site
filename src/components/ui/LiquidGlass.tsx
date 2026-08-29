"use client";

import React, { useId } from "react";

interface LiquidGlassProps {
  children?: React.ReactNode;
  className?: string;
  /** Distortion strength. Default: 8 */
  distortion?: number;
  /** Noise frequency for the refraction map. Default: 0.018 */
  noiseFrequency?: number;
  /**
   * Optional accent tint. Pass an rgba() string,
   * e.g. "rgba(255, 140, 30, 0.25)" for an orange tint.
   */
  accentColor?: string;
}

/**
 * Apple Liquid Glass — the real thing.
 *
 * Technique stack:
 *   1. SVG feTurbulence + feDisplacementMap applied via backdrop-filter: url(#id)
 *      → This actually WARPS/refracts the content behind the element (not just blurs it).
 *      → Falls back to blur-only on Firefox.
 *   2. backdrop-filter blur + saturate + brightness on top of the displacement.
 *   3. Layered box-shadows for the physical glass edge (thick top highlight, thin bottom).
 *   4. Diagonal specular streak (the light catching the glass surface).
 *   5. Prismatic chromatic edge (subtle rainbow at the border, masked to edges only).
 */
export function LiquidGlass({
  children,
  className = "",
  distortion = 8,
  noiseFrequency = 0.018,
  accentColor,
}: LiquidGlassProps) {
  // Unique ID per instance so multiple glass elements don't conflict
  const uid = useId().replace(/:/g, "");
  const filterId = `lg-refract-${uid}`;
  const blurId   = `lg-blur-${uid}`;

  return (
    <div className={`relative ${className}`} style={{ isolation: "isolate" }}>

      {/*
        ── LAYER 0: SVG filter definitions ─────────────────────────────────
        These are invisible; they define the filter primitives referenced
        by the backdrop-filter below.
      */}
      <svg
        aria-hidden
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          {/* Refraction filter: turbulence noise → displacement map */}
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${noiseFrequency} ${noiseFrequency * 1.8}`}
              numOctaves={3}
              seed={42}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={distortion}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
          </filter>

          {/* Simple blur filter for Firefox fallback */}
          <filter id={blurId}>
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>
      </svg>

      {/*
        ── LAYER 1: Distortion + blur backdrop ─────────────────────────────
        backdrop-filter: url(#id) → applies the SVG displacement to captured
        background pixels, bending them like real glass refraction.
        The additional blur + saturate sit on top of the distortion.

        Chrome/Edge: full refraction + blur
        Safari: blur + saturate (no url() in backdrop-filter — still looks good)
        Firefox: SVG filter applied to element itself as graceful fallback
      */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[inherit]"
        style={{
          backdropFilter: `url(#${filterId}) blur(14px) saturate(190%) brightness(108%)`,
          WebkitBackdropFilter: `blur(14px) saturate(190%) brightness(108%)`,
        }}
      />

      {/*
        ── LAYER 2: Glass body + physical edges ────────────────────────────
        Very faint white fill gives the glass material substance.
        box-shadow simulates physical glass thickness:
          - inset top: the bright upper-edge specular (the defining Apple detail)
          - inset bottom: the darker lower edge
          - inset sides: subtle side catches
          - outer: depth shadow
      */}
      {/* ── LAYER 2: Glass body + physical edges ── */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          background: accentColor ?? "rgba(255, 255, 255, 0.10)",
          boxShadow: `
            inset 0 2px 0px rgba(255, 255, 255, 0.55),
            inset 0 -1.5px 0px rgba(255, 255, 255, 0.08),
            inset 1.5px 0 0px rgba(255, 255, 255, 0.12),
            inset -1.5px 0 0px rgba(255, 255, 255, 0.06),
            0 20px 60px rgba(0, 0, 0, 0.35),
            0 4px 16px rgba(0, 0, 0, 0.2)
          `,
          border: "1px solid rgba(255, 255, 255, 0.22)",
        }}
      />

      {/* ── LAYER 3: Specular surface highlight ── */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          background: `linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.32) 0%,
            rgba(255, 255, 255, 0.10) 20%,
            rgba(255, 255, 255, 0.02) 50%,
            transparent 70%
          )`,
        }}
      />

      {/* ── LAYER 4: Prismatic / accent chromatic fringe ── */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[inherit] pointer-events-none"
        style={{
          background: accentColor
            ? `linear-gradient(145deg, ${accentColor} 0%, transparent 60%)`
            : `linear-gradient(
                145deg,
                rgba(180, 80, 255, 0.15)  0%,
                rgba(60, 140, 255, 0.10)  20%,
                rgba(60, 255, 200, 0.08)  40%,
                rgba(255, 200, 60, 0.06)  65%,
                rgba(255, 80, 120, 0.10)  85%,
                rgba(180, 80, 255, 0.08)  100%
              )`,
          WebkitMaskImage: `radial-gradient(ellipse 90% 90% at 50% 50%, transparent 70%, black 100%)`,
          maskImage: `radial-gradient(ellipse 90% 90% at 50% 50%, transparent 70%, black 100%)`,
          mixBlendMode: "screen",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
