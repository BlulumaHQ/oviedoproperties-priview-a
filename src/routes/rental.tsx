import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand, PageHero } from "@/components/Sections";
import rentImg from "@/assets/service-rental.jpg";

export const Route = createFileRoute("/rental")({
  head: () => ({
    meta: [
      { title: "Rental Properties | Oviedo Properties" },
      {
        name: "description",
        content:
          "Rental homes in desirable Surrey, BC neighborhoods — managed by Oviedo's dedicated in-house team for a seamless tenant experience.",
      },
      { property: "og:title", content: "Rental Properties | Oviedo Properties" },
      {
        property: "og:description",
        content: "Rental homes in desirable neighborhoods, managed in-house.",
      },
      { property: "og:image", content: rentImg },
      { name: "twitter:image", content: rentImg },
    ],
  }),
  component: RentalPage,
});

function RentalPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Rental"
        title="A home you'll want to stay in."
        subtitle="We offer rental homes in desirable neighborhoods, managed by our dedicated in-house team."
        image={rentImg}
      />

      <section className="section-pad">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <img src={rentImg} alt="Bright modern rental interior" width={1280} height={960} loading="lazy" className="rounded-2xl w-full" />
          <div>
            <p className="eyebrow">Why Rent With Oviedo</p>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
              Real people. Real responsiveness.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Our rental homes sit in some of Surrey's most established neighborhoods, and they're
              looked after by the same team that built them — so questions get answered and
              maintenance gets done.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Quality homes in desirable Surrey neighborhoods",
                "Dedicated in-house property management",
                "Fast, reliable maintenance response",
                "Transparent, professional communication",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-8">
              Ask About Available Rentals <ArrowRight className="w-4 h-4" />
            </Link>
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
