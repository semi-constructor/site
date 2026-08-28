import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

// This is required in Next 15 to dynamically generate routes statically if we want, or just server rendering
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-12 md:py-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <Link href="/projects" className="inline-flex items-center text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground hover:text-white transition-colors mb-12">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to projects
      </Link>
      
      <div className="space-y-8 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-[1]">
          {project.title}
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground font-light">
          {project.subtitle}
        </p>
        
        <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
          {project.tools.map((tool) => (
            <span key={tool} className="px-4 py-1.5 rounded-full border border-border text-sm font-medium">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-32 space-y-24">
        {project.image && (
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-white/10">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-lg font-light leading-relaxed">
          <div className="md:col-span-2 text-2xl md:text-3xl text-white/90 leading-normal">
            <span className="text-white font-bold">The Challenge: </span><br/>
            {project.longDescription}
          </div>
          <div className="space-y-6">
            <div className="space-y-2 border-b border-border pb-6">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">Website</h3>
              {project.website ? (
                <a href={project.website} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white/70 transition-colors font-medium">
                  {project.website.replace('https://', '')} <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <p>N/A</p>
              )}
            </div>
            <div className="space-y-2 border-b border-border pb-6">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">Source</h3>
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white/70 transition-colors font-medium">
                  View on GitHub <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <p>Private</p>
              )}
            </div>
            <div className="space-y-2 border-b border-border pb-6">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="space-y-12 pt-12">
            <h2 className="text-3xl font-bold tracking-[-0.02em]">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.map((img, i) => (
                <div key={i} className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border group">
                  <Image src={img} alt={`${project.title} screenshot ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
