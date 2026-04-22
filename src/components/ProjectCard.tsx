import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

const STATUS_TONE: Record<string, string> = {
  "Now Selling": "bg-[var(--gold)] text-[var(--gold-foreground)]",
  "Now Leasing": "bg-[var(--gold)] text-[var(--gold-foreground)]",
  "Renting": "bg-[var(--gold)] text-[var(--gold-foreground)]",
  "Under Construction": "bg-foreground text-background",
  "Coming Soon": "bg-foreground text-background",
  "Past Project": "bg-white/90 text-foreground",
  "Fully Rented": "bg-white/90 text-foreground",
};

export function ProjectCard({ project }: { project: Project }) {
  const tone = STATUS_TONE[project.status] ?? "bg-white/90 text-foreground";
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        {project.status && (
          <span className={`absolute top-4 left-4 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] uppercase ${tone}`}>
            {project.status}
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="flex items-end justify-between gap-3">
            <h3 className="font-heading text-xl md:text-2xl leading-tight">{project.title}</h3>
            <ArrowUpRight className="w-5 h-5 shrink-0 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {project.teaser}
      </p>
    </Link>
  );
}
