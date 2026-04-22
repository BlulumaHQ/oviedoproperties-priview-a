import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCTA() {
  const { location } = useRouterState();
  if (location.pathname === "/contact") return null;

  return (
    <>
      {/* Desktop: fixed right rail */}
      <div className="hidden md:flex fixed right-5 bottom-8 z-30 flex-col gap-2.5 items-end">
        <Link
          to="/contact"
          className="btn-gold shadow-[0_18px_45px_-15px_rgba(0,0,0,0.45)]"
        >
          <Calendar className="w-4 h-4" />
          Book Consultation
        </Link>
      </div>

      {/* Mobile: bottom bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 border-t border-border bg-background/95 backdrop-blur-md">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href={SITE.phoneHref}
            className="btn-outline !py-3"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
          <Link to="/contact" className="btn-gold !py-3">
            <Calendar className="w-4 h-4" /> Book
          </Link>
        </div>
      </div>
    </>
  );
}
