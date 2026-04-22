import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_2px_20px_-12px_rgba(19,67,118,0.25)]"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex items-center justify-between" style={{ height: 90 }}>
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Oviedo Properties home">
          <div
            className="flex items-center justify-center rounded-md bg-primary text-primary-foreground font-heading font-bold"
            style={{ height: 75, width: 75, fontSize: 28 }}
            aria-hidden
          >
            OP
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-heading text-base font-bold text-foreground tracking-tight">
              Oviedo Properties
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Surrey · British Columbia
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[13px] font-semibold tracking-[0.12em] uppercase text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={SITE.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            {SITE.phone}
          </a>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Get In Touch
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-wide py-6 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 text-sm font-semibold tracking-[0.12em] uppercase text-foreground/85 hover:text-primary border-b border-border/60"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <Link to="/contact" className="btn-primary mt-4 w-full">
              Get In Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
