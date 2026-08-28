"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  website?: string;
  github?: string;
  image?: string;
  index: number;
}

export function ProjectCard({ title, description, tools, website, github, image, index }: ProjectCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className="group relative border border-border bg-background overflow-hidden flex flex-col hover:border-primary transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      {image && (
        <div className="relative w-full aspect-[16/9] border-b border-border overflow-hidden bg-muted">
          <Image 
            src={image} 
            alt={`${title} preview`} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0"
          />
        </div>
      )}
      <div className="p-8 flex flex-col flex-1 relative z-10">
        <h3 className="text-2xl font-bold tracking-[-0.02em] text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground mb-8 flex-1 text-base leading-relaxed font-light">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tools.map(tool => (
            <span key={tool} className="px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-muted/50 text-muted-foreground border border-border/50">
              {tool}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {website && (
            <a 
              href={website.startsWith('http') ? website : `https://${website}`} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors flex items-center gap-2 px-4 py-3 border border-border hover:border-primary bg-background"
            >
              <ExternalLink className="w-4 h-4" /> Website
            </a>
          )}
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noreferrer"
              className="text-xs font-bold tracking-[0.2em] uppercase hover:text-primary transition-colors flex items-center gap-2 px-4 py-3 border border-border hover:border-primary bg-background"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
