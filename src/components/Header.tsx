import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // On home: transparent over hero. Other pages: always solid.
  const transparent = isHome && !scrolled;
  const textOnDark = transparent;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-background/85 backdrop-blur-xl border-b border-border/60"
      }`}
    >
      <div
        className="container-wide flex items-center justify-between"
        style={{ height: scrolled ? 72 : 84 }}
      >
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Oviedo Properties home">
          <span
            className={`font-heading text-lg md:text-xl tracking-tight font-bold transition-colors ${
              textOnDark ? "text-white" : "text-foreground"
            }`}
          >
            Oviedo
            <span className={textOnDark ? "text-[var(--gold)]" : "text-[var(--gold)]"}> Properties</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[12px] font-medium tracking-[0.18em] uppercase transition-colors whitespace-nowrap ${
                textOnDark
                  ? "text-white/85 hover:text-white"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              activeProps={{
                className: textOnDark ? "!text-[var(--gold)]" : "!text-[var(--gold)]",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={SITE.phoneHref}
            className={`text-[12px] font-medium tracking-[0.16em] transition-colors ${
              textOnDark ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {SITE.phone}
          </a>
          <Link to="/contact" className="btn-gold !py-2.5 !px-5 text-[12px]">
            Book Consultation
          </Link>
        </div>

        <button
          className={`lg:hidden p-2 -mr-2 ${textOnDark ? "text-white" : "text-foreground"}`}
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
                className="py-3 text-sm font-semibold tracking-[0.14em] uppercase text-foreground/85 hover:text-foreground border-b border-border/60"
                activeProps={{ className: "!text-[var(--gold)]" }}
              >
                {item.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="mt-4 text-sm text-foreground/80">
              {SITE.phone}
            </a>
            <Link to="/contact" className="btn-gold mt-4 w-full">
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
