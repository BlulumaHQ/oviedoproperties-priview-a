import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="container-wide section-pad text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="font-heading text-5xl md:text-7xl mt-4">Page not found</h1>
        <p className="mt-4 text-muted-foreground">The page you are looking for doesn't exist.</p>
        <a href="/" className="btn-primary mt-8 inline-flex">Return Home</a>
      </div>
    </SiteLayout>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Oviedo Properties" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: () => <Outlet />,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
