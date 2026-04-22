import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCTA() {
  const { location } = useRouterState();
  if (location.pathname === "/contact") return null;

  return (
    <>
      {/* Desktop: fixed right rail */}
      <div className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
        <Link
          to="/contact"
          className="group flex items-center gap-2 rounded-full px-5 py-3.5 font-semibold text-sm shadow-[0_15px_35px_-10px_rgba(19,67,118,0.55)] text-white transition-all hover:translate-x-[-2px]"
          style={{ backgroundColor: "var(--primary-dark)" }}
        >
          <MessageCircle className="w-4 h-4" />
          Request a Consultation
        </Link>
        <a
          href={SITE.phoneHref}
          className="flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold bg-background/95 backdrop-blur border border-border text-foreground hover:border-primary"
        >
          <Phone className="w-4 h-4" />
          {SITE.phone}
        </a>
      </div>

      {/* Mobile: bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t border-border bg-background/95 backdrop-blur-md">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href={SITE.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full py-3 font-semibold text-sm border border-border text-foreground"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 rounded-full py-3 font-semibold text-sm text-white"
            style={{ backgroundColor: "var(--primary-dark)" }}
          >
            <MessageCircle className="w-4 h-4" /> Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
}
