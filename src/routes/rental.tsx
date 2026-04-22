import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand, PageHero } from "@/components/Sections";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByCategory, sortProjects } from "@/lib/projects";

const projects = sortProjects(getProjectsByCategory("rental"));
const heroImg = projects[0]?.heroImage ?? "";

export const Route = createFileRoute("/rental")({
  head: () => ({
    meta: [
      { title: "Rental Properties | Oviedo Properties" },
      {
        name: "description",
        content:
          "Rental homes managed in-house across Metro Vancouver — Altus, White Birch, The Heights, and more.",
      },
      { property: "og:title", content: "Rental Properties | Oviedo Properties" },
      {
        property: "og:description",
        content:
          "Tenant screening, maintenance, and management — handled by Oviedo's dedicated in-house team.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: RentalPage,
});

function RentalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Welcome Home"
        title="Rental projects"
        subtitle="At Oviedo Property Management, we handle rental properties across Metro Vancouver and the Fraser Valley. From tenant screening to maintenance, we ensure your property thrives. Trust us to maximize your income, protect your investment, and deliver peace of mind."
        image={heroImg}
      />

      <section className="section-pad">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <p className="eyebrow">Available Rentals</p>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
                Rental properties
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Quality rental homes managed by our dedicated in-house team.
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
        title="Looking for your next rental?"
        subtitle="Tell us what you're looking for and we'll match you with the right home."
      />
    </SiteLayout>
  );
}
