import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const primary = NAV.filter((n) => ["/residential", "/commercial", "/rental"].includes(n.to));
  const secondary = NAV.filter((n) => ["/company", "/customer-care", "/contact"].includes(n.to));

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-20 md:py-28">
        {/* Top callout */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 pb-16 mb-16 border-b border-white/10 items-end">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="mt-5 font-heading text-4xl md:text-6xl leading-[1.05]">
              Let's build<br />
              <span className="text-[var(--gold)] italic">something lasting.</span>
            </h2>
          </div>
          <div className="flex lg:justify-end">
            <Link to="/contact" className="btn-gold">
              Book Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <div className="font-heading text-xl tracking-tight">
              Oviedo<span className="text-[var(--gold)]"> Properties</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-sm">
              An integrated development and construction company crafting sustainable
              residential, commercial, and rental properties across Surrey, British Columbia.
            </p>
          </div>

          {/* Col 2: Spacer */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden />

          {/* Col 3: Primary */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-[11px] uppercase tracking-[0.24em] mb-5 text-[var(--gold)]">
              Portfolio
            </h4>
            <ul className="space-y-3 text-sm">
              {primary.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/75 hover:text-white transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Secondary */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-[11px] uppercase tracking-[0.24em] mb-5 text-[var(--gold)]">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {secondary.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-white/75 hover:text-white transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-[11px] uppercase tracking-[0.24em] mb-5 text-[var(--gold)]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--gold)]" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[var(--gold)]" />
                <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[var(--gold)]" />
                <a href={SITE.emailHref} className="hover:text-white break-all">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-white/55">
            © {year} Oviedo Properties. All rights reserved. | Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              Bluluma
            </a>
          </p>
          <div className="text-[11px] text-white/55 flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
