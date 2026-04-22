import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Home, Key, CheckCircle2, Phone, Quote } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTABand, TrustBar } from "@/components/Sections";
import { ProjectCard } from "@/components/ProjectCard";
import { SITE } from "@/lib/site";
import { PROJECTS, sortProjects } from "@/lib/projects";

// Use real source imagery from oviedoproperties.com
const HERO_IMG = "https://oviedoproperties.com/wp-content/uploads/2025/05/Bridgecity_Detail.jpg";
const RES_IMG = "https://oviedoproperties.com/wp-content/uploads/2025/04/Altus_01-1.jpg";
const COM_IMG = "https://oviedoproperties.com/wp-content/uploads/2025/05/King-George-Plaza_01.jpg";
const RENT_IMG = "https://oviedoproperties.com/wp-content/uploads/2025/05/The-Heights_01.jpg";
const ABOUT_IMG = "https://oviedoproperties.com/wp-content/uploads/2025/05/Bridgecity_02.jpg";

const featured = sortProjects(
  PROJECTS.filter((p) =>
    ["bridgecity", "altus", "harth", "oviedo-towers-surrey", "white-birch", "ackroyd"].includes(p.slug)
  )
).slice(0, 6);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oviedo Properties | Surrey Real Estate Development & Construction" },
      {
        name: "description",
        content:
          "Oviedo Properties is a leading Surrey, BC real estate development and construction company specializing in sustainable commercial, residential, and rental property solutions.",
      },
      { property: "og:title", content: "Oviedo Properties | Crafting Quality, Creating Legacy" },
      {
        property: "og:description",
        content:
          "Integrated development and construction in Surrey, BC. Residential, commercial, and rental real estate built to last.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMG },
      { name: "twitter:image", content: HERO_IMG },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/55" aria-hidden />
        <div className="container-wide relative pt-20 pb-24 md:pt-28 md:pb-36 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <span className="eyebrow !text-primary-foreground/85 before:!bg-primary-foreground/60">
              Surrey, British Columbia · Property Management Company
            </span>
            <h1 className="mt-6 font-heading text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] leading-[1.02] tracking-tight">
              Crafting Quality,<br />Creating Legacy.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-primary-foreground/85 leading-relaxed">
              An integrated development and construction company building sustainable residential,
              commercial, and rental properties across Surrey, BC.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/residential" className="btn-light">
                View Our Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-sm border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition"
              >
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </div>
          </div>

          {/* Quick contact card */}
          <div className="bg-background text-foreground rounded-2xl p-7 shadow-2xl border border-border max-w-md w-full lg:justify-self-end">
            <p className="eyebrow">Quick Inquiry</p>
            <h3 className="font-heading text-2xl mt-3">Tell us about your project</h3>
            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/contact";
              }}
            >
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <select
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                defaultValue=""
                required
              >
                <option value="" disabled>I'm interested in...</option>
                <option>Residential Development</option>
                <option>Commercial Development</option>
                <option>Rental Properties</option>
                <option>Property Management</option>
              </select>
              <button type="submit" className="btn-primary w-full">
                Request Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-muted-foreground text-center">
                We respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 mb-14 items-end">
            <div>
              <p className="eyebrow">What We Build</p>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
                Three pillars of real estate, one trusted team.
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed md:pl-10">
              From the first concept to long-term management, Oviedo Properties delivers thoughtful
              development across every category — without handing your project off to a stranger.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Home, img: RES_IMG, title: "Residential", desc: "We build more than homes, we create spaces for lasting memories, designed to stand the test of time.", to: "/residential" as const },
              { icon: Building2, img: COM_IMG, title: "Commercial", desc: "We specialize in building quality and managing retail, industrial, and office spaces, prioritizing the user experiences.", to: "/commercial" as const },
              { icon: Key, img: RENT_IMG, title: "Rental", desc: "We offer rental homes in desirable neighborhoods, managed by our dedicated in-house team.", to: "/rental" as const },
            ].map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-[0_25px_60px_-30px_rgba(19,67,118,0.45)] hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-3">
                    <s.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-heading text-2xl">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View {s.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section-pad bg-surface border-t border-border">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
            <div>
              <p className="eyebrow">Featured Projects</p>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
                Building legacy across the Lower Mainland.
              </h2>
            </div>
            <Link to="/residential" className="btn-primary">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow justify-center">Trusted by Owners & Tenants</p>
            <h2 className="font-heading text-4xl md:text-5xl mt-4">A reputation built on care.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { q: "Oviedo's team treated our build like it was their own home. The attention to finish quality was exceptional.", a: "Residential Owner, Surrey" },
              { q: "Our retail tenants stayed through construction because the team kept them informed every single week.", a: "Commercial Partner" },
              { q: "Easiest rental we've ever had. Maintenance is handled in-house and they actually pick up the phone.", a: "Long-term Tenant" },
            ].map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 border border-border">
                <Quote className="w-7 h-7 text-primary/30" />
                <p className="mt-4 text-foreground/90 leading-relaxed">{t.q}</p>
                <p className="mt-6 text-sm font-semibold text-muted-foreground border-t border-border pt-4">
                  — {t.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-pad bg-surface border-t border-border">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={ABOUT_IMG}
              alt="Oviedo Properties development"
              loading="lazy"
              className="w-full h-auto rounded-2xl object-cover"
            />
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-primary text-primary-foreground rounded-2xl p-6 max-w-[220px] shadow-xl">
              <p className="font-heading text-4xl">100%</p>
              <p className="text-sm mt-1 text-primary-foreground/80">In-house construction & management</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-[1.05]">
              Integrated development from the ground up.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              {SITE.description}
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "End-to-end development & construction",
                "Sustainable design across every property",
                "In-house property management team",
                "Locally rooted in Surrey, British Columbia",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/company" className="btn-primary mt-8">
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </SiteLayout>
  );
}
