import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-[90px] pb-20 md:pb-0">{children}</main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
