import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Star, Search, ClipboardList, Hammer, Key } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { TrustBar } from "@/components/Sections";
import { ProjectCard } from "@/components/ProjectCard";
import { SITE } from "@/lib/site";
import { PROJECTS, sortProjects } from "@/lib/projects";

const HERO_IMG = "https://oviedoproperties.com/wp-content/uploads/2025/05/Bridgecity_Detail.jpg";
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
          "From vision to keys — Oviedo Properties designs, builds and manages premium real estate in Surrey, BC. Quality you can feel. Investments built to endure.",
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
      {/* HERO — full bleed editorial */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-primary text-white">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/85"
          aria-hidden
        />

        <div className="container-wide relative pb-16 md:pb-24 pt-32 w-full">
          <div className="max-w-4xl anim-fade-up">
            <p className="eyebrow !text-[var(--gold)] before:!bg-[var(--gold)]">
              Surrey · British Columbia
            </p>
            <h1 className="mt-7 font-heading text-[44px] sm:text-6xl md:text-7xl lg:text-[96px] leading-[1.0] tracking-tight">
              Crafting quality.<br />
              <span className="italic text-[var(--gold)]">Creating legacy.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-white/80 leading-relaxed">
              Premium residential, commercial, and rental real estate — designed,
              built, and managed by one trusted Surrey-based team.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="btn-gold">
                Book Consultation <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/residential" className="btn-ghost-light">
                Explore Portfolio
              </Link>
            </div>

            {/* Trust pill */}
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/75">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <span className="text-xs tracking-[0.16em] uppercase">
                Trusted by 200+ Homeowners & Tenants
              </span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-6 right-6 items-center gap-3 text-white/60 text-[10px] tracking-[0.3em] uppercase rotate-90 origin-bottom-right">
          Scroll
          <span className="w-12 h-px bg-white/40" />
        </div>
      </section>

      <TrustBar />

      {/* SOCIAL PROOF */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow">What Owners Say</p>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl leading-[1.05]">
              A reputation built on care<span className="text-[var(--gold)]">.</span>
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                q: "Oviedo's team treated our build like it was their own home. The attention to finish quality was exceptional.",
                a: "Residential Owner",
                where: "Surrey, BC",
              },
              {
                q: "Our retail tenants stayed through construction because the team kept them informed every single week.",
                a: "Commercial Partner",
                where: "Lower Mainland",
              },
              {
                q: "Easiest rental we've ever had. Maintenance is handled in-house and they actually pick up the phone.",
                a: "Long-term Tenant",
                where: "Surrey, BC",
              },
            ].map((t, i) => (
              <div key={i} className="border-t border-foreground/15 pt-8">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="font-heading text-xl leading-snug text-foreground">"{t.q}"</p>
                <p className="mt-6 text-xs tracking-[0.18em] uppercase text-muted-foreground">
                  {t.a} · <span className="text-foreground/60">{t.where}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="section-pad bg-surface border-y border-border">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 mb-20 items-end">
            <div>
              <p className="eyebrow">Why Oviedo</p>
              <h2 className="mt-5 font-heading text-4xl md:text-5xl leading-[1.05]">
                One integrated team. <br />
                <span className="italic text-[var(--gold)]">Zero handoffs.</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From land assembly to long-term management, we own every step of the
              process — so quality, timeline, and trust never get lost between
              consultants, GCs, and managers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { n: "01", t: "Higher Final Value", d: "Thoughtful design and premium finishes that hold their value for decades." },
              { n: "02", t: "On-Time Delivery", d: "In-house construction means no finger-pointing and predictable timelines." },
              { n: "03", t: "Less Hassle", d: "One point of contact from your first call to your final keys." },
              { n: "04", t: "Local Expertise", d: "Surrey-rooted with deep relationships across municipalities and trades." },
            ].map((b) => (
              <div key={b.n} className="bg-background p-8 md:p-10">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--gold)]">{b.n}</span>
                <h3 className="mt-5 font-heading text-2xl">{b.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
            <div>
              <p className="eyebrow">Selected Projects</p>
              <h2 className="mt-5 font-heading text-4xl md:text-5xl leading-[1.05] max-w-xl">
                Building legacy across<br />the Lower Mainland.
              </h2>
            </div>
            <Link to="/residential" className="btn-outline">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad bg-primary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          aria-hidden
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container-wide relative">
          <div className="max-w-2xl">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl leading-[1.05]">
              A clear path from <span className="italic text-[var(--gold)]">vision to keys.</span>
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
            {[
              { icon: Search, n: "01", t: "Discovery", d: "We listen first — your goals, timeline, and budget shape every recommendation." },
              { icon: ClipboardList, n: "02", t: "Design & Plan", d: "Thoughtful architecture and transparent budgets, approved before a shovel breaks ground." },
              { icon: Hammer, n: "03", t: "Build", d: "Our in-house construction team delivers craftsmanship with weekly progress updates." },
              { icon: Key, n: "04", t: "Manage", d: "We don't disappear at handover — long-term management keeps your asset performing." },
            ].map((s) => (
              <div key={s.n} className="border-t border-white/15 pt-8">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[var(--gold)]">{s.n}</span>
                  <s.icon className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <h3 className="mt-5 font-heading text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-pad">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={ABOUT_IMG}
              alt="Oviedo Properties development"
              loading="lazy"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
            <div className="hidden md:flex flex-col absolute -bottom-10 -right-10 bg-[var(--gold)] text-[var(--gold-foreground)] p-7 max-w-[240px]">
              <p className="font-heading text-5xl leading-none">100%</p>
              <p className="text-xs mt-3 tracking-[0.14em] uppercase font-semibold">
                In-House Construction & Management
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">About Oviedo</p>
            <h2 className="mt-5 font-heading text-4xl md:text-5xl leading-[1.05]">
              Integrated development<br />
              <span className="italic text-[var(--gold)]">from the ground up.</span>
            </h2>
            <p className="mt-7 text-muted-foreground text-lg leading-relaxed">
              {SITE.description}
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "End-to-end development & construction",
                "Sustainable design across every property",
                "In-house property management team",
                "Locally rooted in Surrey, British Columbia",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--gold)] mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/company" className="btn-primary mt-10">
              Learn More About Us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA — strong, contrasting */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-primary/90" aria-hidden />
        <div className="container-wide relative py-24 md:py-36 text-center text-white">
          <p className="eyebrow justify-center">Begin the Conversation</p>
          <h2 className="mt-6 font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl mx-auto">
            Your next chapter starts with a <span className="italic text-[var(--gold)]">conversation.</span>
          </h2>
          <p className="mt-6 text-white/75 text-lg max-w-xl mx-auto">
            Tell us about your project. We'll respond within one business day with a clear path forward.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold">
              Book Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href={SITE.phoneHref} className="btn-ghost-light">
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
