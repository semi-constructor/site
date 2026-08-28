"use client";

import { motion } from "framer-motion";
import { Database, Server, Mail, Activity, Wrench } from "lucide-react";

export default function SkillsPage() {
  const categories = [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "TypeScript", iconSlug: "typescript" },
        { name: "JavaScript", iconSlug: "javascript" },
        { name: "Node.js", iconSlug: "nodedotjs" },
        { name: "Express", iconSlug: "express" },
        { name: "Next.js", iconSlug: "nextdotjs" },
        { name: "React", iconSlug: "react" }
      ]
    },
    {
      title: "Databases & ORMs",
      skills: [
        { name: "PostgreSQL", iconSlug: "postgresql" },
        { name: "MongoDB", iconSlug: "mongodb" },
        { name: "Prisma", iconSlug: "prisma" },
        { name: "Drizzle", iconSlug: "drizzle" },
        { name: "Mongoose", FallbackIcon: Database }
      ]
    },
    {
      title: "Infrastructure & Cloud",
      skills: [
        { name: "Proxmox VE", iconSlug: "proxmox" },
        { name: "Ubuntu Server", iconSlug: "ubuntu" },
        { name: "Debian", iconSlug: "debian" },
        { name: "Docker", iconSlug: "docker" },
        { name: "Cloudflare", iconSlug: "cloudflare" },
        { name: "Vercel", iconSlug: "vercel" },
        { name: "AWS Bedrock", iconSlug: "amazonaws" }
      ]
    },
    {
      title: "Self-Hosted Services",
      skills: [
        { name: "Coolify", FallbackIcon: Server },
        { name: "Forgejo", iconSlug: "forgejo" },
        { name: "Authentik", iconSlug: "authentik" },
        { name: "NGINX", iconSlug: "nginx" },
        { name: "Mailcow", FallbackIcon: Mail },
        { name: "Listmonk", FallbackIcon: Mail },
        { name: "Uptime Kuma", iconSlug: "uptimekuma", FallbackIcon: Activity },
        { name: "Beszel", FallbackIcon: Activity }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", iconSlug: "visualstudiocode" },
        { name: "Termius", iconSlug: "termius" },
        { name: "Claude Code", iconSlug: "anthropic" },
        { name: "Antigravity", FallbackIcon: Wrench },
        { name: "Windows 11", iconSlug: "windows11" }
      ]
    }
  ];

  return (
    <div className="py-24 md:py-32 min-h-screen">
      <div className="space-y-6 max-w-5xl mb-32">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-bold tracking-[-0.04em] text-white uppercase"
          >
            Capabilities.
          </motion.h1>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-2xl md:text-4xl text-muted-foreground font-light leading-relaxed max-w-3xl"
        >
          A comprehensive overview of my technical stack, from bare-metal virtualization to modern web frameworks.
        </motion.p>
      </div>

      <div className="space-y-32">
        {categories.map((category, index) => (
          <div key={category.title} className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border pt-16">
            <div className="md:col-span-4">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl font-bold tracking-[-0.02em] md:sticky md:top-32"
              >
                (0{index + 1}) {category.title}
              </motion.h2>
            </div>
            
            <div className="md:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: i * 0.05,
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:border-white/30 transition-all duration-500">
                      {skill.iconSlug ? (
                        <img 
                          src={`https://cdn.simpleicons.org/${skill.iconSlug}/white`} 
                          alt={`${skill.name} logo`}
                          className="w-5 h-5 object-contain"
                        />
                      ) : skill.FallbackIcon ? (
                        <skill.FallbackIcon className="w-5 h-5 text-white" />
                      ) : null}
                    </div>
                    <span className="text-sm md:text-base font-bold tracking-[-0.02em] text-white/90 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
