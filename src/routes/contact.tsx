import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/Sections";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-residential.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Oviedo Properties" },
      {
        name: "description",
        content:
          "Get in touch with Oviedo Properties in Surrey, BC. Call 778.218.2662, email info@oviedoproperties.com, or send a message about your project.",
      },
      { property: "og:title", content: "Contact | Oviedo Properties" },
      {
        property: "og:description",
        content: "Talk to our Surrey-based development and management team.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's build something lasting together."
        subtitle="Tell us about your project, your space, or your rental search — we respond within one business day."
        image={heroImg}
      />

      <section className="section-pad">
        <div className="container-wide grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <div>
            <p className="eyebrow">Reach Us</p>
            <h2 className="font-heading text-4xl mt-4">Surrey, British Columbia</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Drop by our office, give us a call, or send a message — whichever is easiest for you.
            </p>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <div className="rounded-full bg-primary/10 text-primary w-11 h-11 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-muted-foreground">{SITE.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="rounded-full bg-primary/10 text-primary w-11 h-11 flex items-center justify-center shrink-0"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={SITE.phoneHref} className="text-muted-foreground hover:text-primary">{SITE.phone}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="rounded-full bg-primary/10 text-primary w-11 h-11 flex items-center justify-center shrink-0"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={SITE.emailHref} className="text-muted-foreground hover:text-primary break-all">{SITE.email}</a>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl overflow-hidden border border-border aspect-[4/3]">
              <iframe
                src={SITE.mapEmbed}
                title="Oviedo Properties location"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-7 md:p-10">
            {sent ? (
              <div className="text-center py-12">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl">✓</div>
                <h3 className="font-heading text-2xl mt-5">Thank you</h3>
                <p className="mt-3 text-muted-foreground">
                  Your message has been received. A member of our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <p className="eyebrow">Send a Message</p>
                <h3 className="font-heading text-3xl">How can we help?</h3>
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <input required placeholder="First name" className="rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required placeholder="Last name" className="rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <input required type="email" placeholder="Email address" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <input placeholder="Phone (optional)" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <select required defaultValue="" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="" disabled>What can we help with?</option>
                  <option>Residential Development</option>
                  <option>Commercial Development</option>
                  <option>Rental Inquiry</option>
                  <option>Customer Care</option>
                  <option>General Question</option>
                </select>
                <textarea required rows={5} placeholder="Tell us about your project..." className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                <button type="submit" className="btn-primary w-full">
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-muted-foreground text-center">We respond within one business day.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
