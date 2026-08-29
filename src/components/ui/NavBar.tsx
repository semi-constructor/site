"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LiquidGlass } from "@/components/ui/LiquidGlass";

const links = [
  { name: "Home",         href: "/" },
  { name: "Work",         href: "/projects" },
  { name: "Capabilities", href: "/skills" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
    >
      {/* Outer glass pill — low distortion, strong specular */}
      <LiquidGlass
        className="rounded-2xl pointer-events-auto"
        distortion={6}
        noiseFrequency={0.025}
      >
        <nav className="flex items-center gap-1 px-3 py-2">

          {/* Brand */}
          <Link
            href="/"
            className="mr-3 px-2 py-1 text-[12px] font-bold tracking-[0.18em] uppercase text-white/80 hover:text-white transition-colors duration-200 select-none whitespace-nowrap"
          >
            Semi.
          </Link>

          {/* Divider */}
          <div className="w-px h-4 bg-white/15 mr-1" />

          {/* Nav items */}
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-[11px] font-bold tracking-[0.12em] uppercase rounded-xl transition-colors duration-200 z-10 whitespace-nowrap",
                  isActive ? "text-white" : "text-white/40 hover:text-white/70"
                )}
              >
                {/* Active indicator: glass-inside-glass */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      boxShadow:
                        "inset 0 1.5px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.15)",
                      border: "1px solid rgba(255,255,255,0.22)",
                    }}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </nav>
      </LiquidGlass>
    </motion.div>
  );
}
