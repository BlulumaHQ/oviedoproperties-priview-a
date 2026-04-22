import { Link } from "@tanstack/react-router";
import { ArrowRight, Star, ShieldCheck, Users, Award } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTABand({
  title = "Ready to start your next project?",
  subtitle = "Talk to our Surrey-based development team about residential, commercial, or rental opportunities.",
  primaryLabel = "Request a Consultation",
  primaryTo = "/contact",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
}) {
  return (
    <section className="section-pad bg-primary text-primary-foreground">
      <div className="container-wide grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight">{title}</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-2xl">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
          <Link to={primaryTo} className="btn-light w-full sm:w-auto">
            {primaryLabel} <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-sm border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition w-full sm:w-auto"
          >
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
    { icon: Star, label: "Surrey, British Columbia" },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-wide py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-full bg-primary/10 text-primary w-10 h-10 shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold text-foreground/85">{label}</span>
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
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/40" aria-hidden />
      <div className="container-wide relative py-24 md:py-32">
        <span className="eyebrow !text-primary-foreground/80 before:!bg-primary-foreground/60">{eyebrow}</span>
        <h1 className="mt-5 font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl">{title}</h1>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}
