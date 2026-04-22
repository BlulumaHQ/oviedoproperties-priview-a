import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wrench, FileText, MessageCircle, Clock } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand, PageHero } from "@/components/Sections";
const rentImg = "https://oviedoproperties.com/wp-content/uploads/2025/05/The-Heights_01.jpg";

export const Route = createFileRoute("/customer-care")({
  head: () => ({
    meta: [
      { title: "Customer Care | Oviedo Properties" },
      {
        name: "description",
        content:
          "Tenant support, maintenance requests, and resident resources — managed by the dedicated in-house team at Oviedo Properties in Surrey, BC.",
      },
      { property: "og:title", content: "Customer Care | Oviedo Properties" },
      {
        property: "og:description",
        content: "Tenant support and maintenance, handled in-house.",
      },
      { property: "og:image", content: rentImg },
      { name: "twitter:image", content: rentImg },
    ],
  }),
  component: CustomerCarePage,
});

function CustomerCarePage() {
  const items = [
    { icon: Wrench, title: "Maintenance Requests", desc: "Submit a request and our in-house team will follow up to schedule the work." },
    { icon: FileText, title: "Resident Resources", desc: "Lease information, building guidelines, and helpful documents in one place." },
    { icon: MessageCircle, title: "Direct Communication", desc: "Talk to a real person — not a ticket queue. We pick up the phone." },
    { icon: Clock, title: "Responsive Turnaround", desc: "We aim to acknowledge every request within one business day." },
  ];
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Customer Care"
        title="Real support from the team that built it."
        subtitle="Because we develop, construct, and manage in-house, every resident concern reaches someone who can actually help."
        image={rentImg}
      />

      <section className="section-pad">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-2xl p-7">
                <div className="flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl mt-5">{title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-primary">
              Submit a Request <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Need help with your home or space?"
        subtitle="Reach our customer care team — we'll respond within one business day."
        primaryLabel="Contact Customer Care"
      />
    </SiteLayout>
  );
}
