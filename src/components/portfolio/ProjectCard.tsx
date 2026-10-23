import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="surface group flex flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-glow"
    >
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="relative block aspect-[16/10] overflow-hidden" aria-label={`View ${project.name} details`}>
        <img src={project.image} alt={`${project.name} interface screenshot`} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 font-mono text-xs">0{index + 1}</span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{project.tagline}</p>
        <h3 className="mt-2 text-2xl font-bold">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((s) => (
            <li key={s} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{s}</li>
          ))}
        </ul>
        <div className="mt-auto flex items-center gap-2 pt-6">
          <Link to="/projects/$slug" params={{ slug: project.slug }} className="inline-flex items-center gap-1 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground">
            View Details <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub`} className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`} className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground">
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
