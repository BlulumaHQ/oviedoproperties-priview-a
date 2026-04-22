import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand, PageHero } from "@/components/Sections";
import comImg from "@/assets/service-commercial.jpg";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Development | Oviedo Properties" },
      {
        name: "description",
        content:
          "Retail, industrial, and office spaces developed and managed by Oviedo Properties in Surrey, BC — built to elevate the user experience.",
      },
      { property: "og:title", content: "Commercial Development | Oviedo Properties" },
      {
        property: "og:description",
        content: "Retail, industrial, and office spaces engineered for tenant success.",
      },
      { property: "og:image", content: comImg },
      { name: "twitter:image", content: comImg },
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Commercial"
        title="Spaces where business performs."
        subtitle="We specialize in building quality and managing retail, industrial, and office spaces, prioritizing the user experiences."
        image={comImg}
      />

      <section className="section-pad">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
              Built around the people who use them.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Our commercial portfolio supports retailers, operators, and businesses across the Lower
              Mainland with thoughtful spaces, efficient layouts, and active on-site management.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Retail spaces with strong street presence",
                "Flexible industrial and warehouse layouts",
                "Modern office environments",
                "Tenant-first operations & maintenance",
                "Long-term asset stewardship",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-8">
              Inquire About Commercial Space <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <img src={comImg} alt="Modern commercial building" width={1280} height={960} loading="lazy" className="rounded-2xl w-full" />
        </div>
      </section>

      <CTABand
        title="Looking for the right commercial space?"
        subtitle="Speak with our leasing and development team about availability and upcoming projects."
      />
    </SiteLayout>
  );
}
