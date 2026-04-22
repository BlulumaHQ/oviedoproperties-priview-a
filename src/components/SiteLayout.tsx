import { useRouterState } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { location } = useRouterState();
  const isHome = location.pathname === "/";
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className={`flex-1 ${isHome ? "" : "pt-[84px]"} pb-20 md:pb-0`}>{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
