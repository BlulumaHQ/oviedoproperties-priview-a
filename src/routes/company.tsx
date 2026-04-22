import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand, PageHero, TrustBar } from "@/components/Sections";
import { SITE } from "@/lib/site";
import aboutImg from "@/assets/about-construction.jpg";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company | Oviedo Properties" },
      {
        name: "description",
        content:
          "Learn about Oviedo Properties — an integrated development and construction company based in Surrey, BC, dedicated to sustainable real estate.",
      },
      { property: "og:title", content: "Company | Oviedo Properties" },
      {
        property: "og:description",
        content: "Integrated development and construction in Surrey, British Columbia.",
      },
      { property: "og:image", content: aboutImg },
      { name: "twitter:image", content: aboutImg },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="An integrated team building lasting places."
        subtitle="Investment, development, construction, and management — all under one roof in Surrey, British Columbia."
        image={aboutImg}
      />

      <section className="section-pad">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <img src={aboutImg} alt="Construction by Oviedo Properties" width={1280} height={960} loading="lazy" className="rounded-2xl w-full" />
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
              Built locally. Built to stay.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{SITE.description}</p>
            <ul className="mt-7 space-y-3">
              {[
                "Integrated development & construction company",
                "Headquartered in Surrey, British Columbia",
                "Diverse portfolio: residential, commercial, rental",
                "Innovative, sustainable real estate solutions",
                "Dedicated in-house property management team",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustBar />

      <CTABand
        title="Want to work with us?"
        subtitle="Owners, partners, and tenants — we'd love to hear from you."
      />
    </SiteLayout>
  );
}
