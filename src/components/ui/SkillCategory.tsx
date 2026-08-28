"use client";

import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

export function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className="space-y-6 p-8 border border-border bg-background hover:border-primary/50 transition-colors"
    >
      <h3 className="text-xl font-bold tracking-[-0.02em] text-foreground flex items-center gap-4">
        <span className="w-8 h-[2px] bg-primary" />
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (index * 0.1) + (i * 0.05) }}
            key={skill} 
            className="px-4 py-2 text-sm font-medium bg-muted/30 border border-border/50 hover:border-primary hover:text-primary transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
