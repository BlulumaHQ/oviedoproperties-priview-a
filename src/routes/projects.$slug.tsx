import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand } from "@/components/Sections";
import { getProject, PROJECTS, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project | Oviedo Properties" }] };
    return {
      meta: [
        { title: `${p.title} | Oviedo Properties` },
        { name: "description", content: p.teaser },
        { property: "og:title", content: `${p.title} | Oviedo Properties` },
        { property: "og:description", content: p.teaser },
        { property: "og:image", content: p.heroImage },
        { name: "twitter:image", content: p.heroImage },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <section className="section-pad container-wide text-center">
        <h1 className="font-heading text-5xl">Project not found</h1>
        <p className="mt-4 text-muted-foreground">The project you're looking for doesn't exist.</p>
        <Link to="/residential" className="btn-primary mt-8">
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </SiteLayout>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const backTo =
    project.categories[0] === "commercial"
      ? "/commercial"
      : project.categories[0] === "rental"
      ? "/rental"
      : "/residential";

  // related projects: same primary category, exclude current
  const related = PROJECTS.filter(
    (p) => p.slug !== project.slug && p.categories.some((c) => project.categories.includes(c))
  ).slice(0, 3);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${project.heroImage})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" aria-hidden />
        <div className="container-wide relative py-20 md:py-28">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          {project.status && (
            <span className="inline-block px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-primary-foreground text-primary">
              {project.status}
            </span>
          )}
          <h1 className="mt-5 font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
            {project.teaser}
          </p>
        </div>
      </section>

      {/* FACTS BAR */}
      {Object.keys(project.facts).length > 0 && (
        <section className="border-b border-border bg-surface">
          <div className="container-wide py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(project.facts).map(([k, v]) => (
              <div key={k}>
                <p className="text-[11px] tracking-[0.18em] font-semibold text-muted-foreground uppercase">
                  {k}
                </p>
                <p className="mt-2 font-heading text-xl text-foreground">{String(v)}</p>
              </div>
            ))}
            {project.externalUrl && (
              <div className="md:col-start-4 md:justify-self-end self-end">
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Project Site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* MAIN DETAIL */}
      <section className="section-pad">
        <div className="container-wide grid lg:grid-cols-[1.2fr_1fr] gap-12">
          <div>
            <img
              src={project.heroImage}
              alt={project.title}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="eyebrow">Overview</p>
            <h2 className="font-heading text-3xl md:text-4xl leading-[1.1]">
              About {project.title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{project.description || project.teaser}</p>
            <Link to="/contact" className="btn-primary">
              Inquire About This Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / SECTIONS */}
      {project.sections.length > 0 && (
        <section className="section-pad bg-surface">
          <div className="container-wide">
            <p className="eyebrow">Highlights</p>
            <h2 className="font-heading text-3xl md:text-5xl mt-4 leading-[1.05]">
              Project details
            </h2>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {project.sections.map((s, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-7">
                  <h3 className="font-heading text-xl text-primary uppercase tracking-wide">
                    {s.heading}
                  </h3>
                  {s.para && <p className="mt-4 text-muted-foreground leading-relaxed">{s.para}</p>}
                  {s.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm leading-relaxed">
                          <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-foreground/85">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {project.gallery.length > 1 && (
        <section className="section-pad">
          <div className="container-wide">
            <p className="eyebrow">Gallery</p>
            <h2 className="font-heading text-3xl md:text-5xl mt-4 leading-[1.05]">A closer look</h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.gallery.map((src, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
                >
                  <img
                    src={src}
                    alt={`${project.title} — image ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="section-pad bg-surface border-t border-border">
          <div className="container-wide">
            <p className="eyebrow">Related Projects</p>
            <h2 className="font-heading text-3xl md:text-5xl mt-4 leading-[1.05]">
              More from Oviedo
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:-translate-y-1 transition"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-xl">{p.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">
                      {p.status}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title="Interested in this project?"
        subtitle="Reach out to our team for availability, leasing, or development inquiries."
      />
    </SiteLayout>
  );
}
