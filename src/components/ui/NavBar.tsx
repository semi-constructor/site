"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "Capabilities", href: "/skills" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 mix-blend-difference text-white"
    >
      <Link href="/" className="font-bold text-xl tracking-[0.1em] uppercase relative group overflow-hidden">
        <motion.span 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          Semiconstructor.
        </motion.span>
      </Link>
      
      <div className="flex gap-8">
        {links.map((link, i) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <div key={link.name} className="overflow-hidden">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-bold tracking-[0.15em] uppercase transition-colors hover:text-white/70",
                    isActive ? "text-white" : "text-white/50"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                    />
                  )}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </motion.nav>
  );
}
