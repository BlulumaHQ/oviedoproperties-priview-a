import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Users, Award, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTABand({
  title = "Ready to start your next project?",
  subtitle = "Talk to our Surrey-based development team about residential, commercial, or rental opportunities.",
  primaryLabel = "Book Consultation",
  primaryTo = "/contact",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
}) {
  return (
    <section className="section-pad bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="container-wide relative grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
        <div>
          <p className="eyebrow">Begin the Conversation</p>
          <h2 className="mt-5 font-heading text-4xl md:text-6xl leading-[1.05]">{title}</h2>
          <p className="mt-6 text-white/70 max-w-2xl text-lg leading-relaxed">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
          <Link to={primaryTo} className="btn-gold w-full sm:w-auto">
            {primaryLabel} <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a href={SITE.phoneHref} className="btn-ghost-light w-full sm:w-auto">
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "Integrated Developer & Builder" },
    { icon: Users, label: "Dedicated In-House Team" },
    { icon: Award, label: "Sustainable Real Estate" },
    { icon: MapPin, label: "Surrey, British Columbia" },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="container-wide py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="w-4 h-4 text-[var(--gold)] shrink-0" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.14em] uppercase text-foreground/70">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" aria-hidden />
      <div className="container-wide relative py-28 md:py-40">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 font-heading text-5xl md:text-7xl lg:text-[88px] leading-[1.02] max-w-4xl tracking-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
