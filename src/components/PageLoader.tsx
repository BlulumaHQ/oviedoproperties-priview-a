import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const hideTimer = setTimeout(() => setHidden(true), 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--ink)] transition-opacity duration-[600ms] ease-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={fading}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="page-loader-logo">
          <Logo className="w-24 h-auto md:w-28" color="var(--gold)" />
        </div>
        <div className="overflow-hidden">
          <p className="font-heading text-white/80 tracking-[0.4em] text-[11px] uppercase animate-[fade-in_0.8s_ease-out_0.4s_both]">
            Oviedo Properties
          </p>
        </div>
      </div>
    </div>
  );
}
