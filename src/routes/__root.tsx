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
      { title: "Oviedo Prompeties" },
      { property: "og:title", content: "Oviedo Prompeties" },
      { name: "twitter:title", content: "Oviedo Prompeties" },
      { name: "description", content: "SwiftLift Conversion Pro rebuilds websites with a conversion-focused layout." },
      { property: "og:description", content: "SwiftLift Conversion Pro rebuilds websites with a conversion-focused layout." },
      { name: "twitter:description", content: "SwiftLift Conversion Pro rebuilds websites with a conversion-focused layout." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/84c18e4e-c6f9-4514-b020-65ed258d5569/id-preview-93b01b49--5c5db213-5183-40b3-b53d-f9301c1eaf21.lovable.app-1776881326476.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/84c18e4e-c6f9-4514-b020-65ed258d5569/id-preview-93b01b49--5c5db213-5183-40b3-b53d-f9301c1eaf21.lovable.app-1776881326476.png" },
      { property: "og:type", content: "website" },
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
