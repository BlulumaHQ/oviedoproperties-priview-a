import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand, PageHero } from "@/components/Sections";
import resImg from "@/assets/service-residential.jpg";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential Development | Oviedo Properties" },
      {
        name: "description",
        content:
          "Oviedo Properties builds quality residential homes across Surrey, BC — designed for lasting memories and built to stand the test of time.",
      },
      { property: "og:title", content: "Residential Development | Oviedo Properties" },
      {
        property: "og:description",
        content: "Quality residential homes designed for lasting memories in Surrey, BC.",
      },
      { property: "og:image", content: resImg },
      { name: "twitter:image", content: resImg },
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Residential"
        title="Homes built for the way you really live."
        subtitle="We build more than homes, we create spaces for lasting memories, designed to stand the test of time."
        image={resImg}
      />

      <section className="section-pad">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <img src={resImg} alt="Modern residential development" width={1280} height={960} loading="lazy" className="rounded-2xl w-full" />
          <div>
            <p className="eyebrow">What's Included</p>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
              Designed for families. Engineered for decades.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              From single-family homes to multi-unit residential developments, every Oviedo build
              starts with a focus on liveability, durability, and the long-term value of the people
              living inside.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Modern architectural design",
                "Sustainable materials & energy-efficient systems",
                "Functional layouts that grow with your family",
                "Premium fit and finish across every detail",
                "Full in-house construction oversight",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-8">
              Discuss Your Residential Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Planning a residential build?"
        subtitle="Get a no-pressure consultation with our Surrey-based residential team."
      />
    </SiteLayout>
  );
}
