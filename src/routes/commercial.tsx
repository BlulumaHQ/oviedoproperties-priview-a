import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand, PageHero } from "@/components/Sections";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByCategory, sortProjects } from "@/lib/projects";

const projects = sortProjects(getProjectsByCategory("commercial"));
const heroImg = projects[0]?.heroImage ?? "";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Projects | Oviedo Properties" },
      {
        name: "description",
        content:
          "Retail, office, and mixed-use commercial properties managed by Oviedo Property Management across Metro Vancouver and the Fraser Valley.",
      },
      { property: "og:title", content: "Commercial Projects | Oviedo Properties" },
      {
        property: "og:description",
        content:
          "High-visibility retail and office leasing opportunities across Metro Vancouver and the Fraser Valley.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Building Quality"
        title="Commercial projects"
        subtitle="At Oviedo Property Management, we specialize in managing commercial properties across Metro Vancouver and the Fraser Valley. Our dedicated team delivers reliable, efficient, and professional solutions to maximize your property's value."
        image={heroImg}
      />

      <section className="section-pad">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <p className="eyebrow">Now Leasing</p>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
                Available commercial spaces
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              {projects.length} commercial properties offering retail, office, and mixed-use opportunities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Looking for the right commercial space?"
        subtitle="Speak with our leasing team about availability and upcoming projects."
      />
    </SiteLayout>
  );
}
