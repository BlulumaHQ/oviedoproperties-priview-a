import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const primary = NAV.filter((n) => ["/", "/residential", "/commercial", "/rental"].includes(n.to));
  const secondary = NAV.filter((n) => ["/company", "/customer-care", "/contact"].includes(n.to));

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <div className="font-heading text-2xl font-bold tracking-tight">
              Oviedo Properties
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75 max-w-sm">
              An integrated development and construction company crafting sustainable
              residential, commercial, and rental properties across Surrey, British Columbia.
            </p>
          </div>

          {/* Col 2: Spacer */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden />

          {/* Col 3: Primary */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] mb-5 text-primary-foreground/90">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {primary.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Secondary */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] mb-5 text-primary-foreground/90">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {secondary.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-sm uppercase tracking-[0.2em] mb-5 text-primary-foreground/90">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={SITE.phoneHref} className="hover:text-primary-foreground">{SITE.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={SITE.emailHref} className="hover:text-primary-foreground break-all">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-primary-foreground/60">
            © {year} Oviedo Properties. All rights reserved. |{" "}
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-foreground"
            >
              Bluluma
            </a>
          </p>
          <div className="text-[11px] text-primary-foreground/60 flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
