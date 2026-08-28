import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Semiconstructor",
  description: "My recent work and side projects.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 md:py-24 space-y-24">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-6xl md:text-9xl font-bold tracking-[-0.04em] text-white">
          Work.
        </h1>
        <p className="text-2xl text-muted-foreground font-light leading-relaxed">
          A collection of my recent infrastructure setups, applications, and tools.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <Link 
            href={`/projects/${project.slug}`} 
            key={project.slug}
            className="group block"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              <div className="lg:col-span-7 relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden bg-border/30">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted/30">
                    {project.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              
              <div className="lg:col-span-5 space-y-6 lg:group-even:order-first">
                <div className="space-y-2">
                  <p className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">0{index + 1}</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] group-hover:text-white/80 transition-colors">
                    {project.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
