import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";

const STATUS_TONE: Record<string, string> = {
  "Now Selling": "bg-primary text-primary-foreground",
  "Now Leasing": "bg-primary text-primary-foreground",
  "Renting": "bg-primary text-primary-foreground",
  "Under Construction": "bg-amber-500 text-white",
  "Coming Soon": "bg-foreground text-background",
  "Past Project": "bg-muted text-muted-foreground",
  "Fully Rented": "bg-muted text-muted-foreground",
};

export function ProjectCard({ project }: { project: Project }) {
  const tone = STATUS_TONE[project.status] ?? "bg-secondary text-secondary-foreground";
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-[0_25px_60px_-30px_rgba(19,67,118,0.45)] hover:-translate-y-1 transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {project.status && (
          <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase ${tone}`}>
            {project.status}
          </span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-heading text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
          {project.teaser}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
