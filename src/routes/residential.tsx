import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand, PageHero } from "@/components/Sections";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByCategory, sortProjects } from "@/lib/projects";

const projects = sortProjects(getProjectsByCategory("residential"));
const heroImg = projects[0]?.heroImage ?? "";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential Projects | Oviedo Properties" },
      {
        name: "description",
        content:
          "Explore Oviedo Properties' residential developments across Surrey and the Lower Mainland — from Bridgecity and Altus to Harth, Maple, and more.",
      },
      { property: "og:title", content: "Residential Projects | Oviedo Properties" },
      {
        property: "og:description",
        content:
          "Concrete towers, townhomes, and modern residences across Surrey, White Rock, and Metro Vancouver.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  const active = projects.filter((p) => p.status !== "Past Project");
  const past = projects.filter((p) => p.status === "Past Project");

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Building Legacy"
        title="Residential projects"
        subtitle="At Oviedo Properties, we craft exceptional homes for ownership or rent in some of the most dynamic communities. From modern condos to stylish rental properties, every space we create is thoughtfully designed with people at the heart, inspiring a lifestyle of comfort, connection, and effortless living."
        image={heroImg}
      />

      <section className="section-pad">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <p className="eyebrow">Current & Upcoming</p>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
                Featured developments
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              {active.length} active residential projects across Surrey, White Rock, and the Lower Mainland.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {active.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {past.length > 0 && (
        <section className="section-pad bg-surface border-t border-border">
          <div className="container-wide">
            <p className="eyebrow">Past Projects</p>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
              A legacy of completed homes
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {past.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand
        title="Planning a residential build?"
        subtitle="Get a no-pressure consultation with our Surrey-based residential team."
      />
    </SiteLayout>
  );
}
