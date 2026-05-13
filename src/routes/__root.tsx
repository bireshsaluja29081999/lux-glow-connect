import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { LeadPopup } from "@/components/site/LeadPopup";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold gradient-text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-gold text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-smooth"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full gradient-gold text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-smooth"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-card transition-smooth">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bellus Lighting Solutions — Premium Architectural & Decorative Lighting" },
      { name: "description", content: "Premium architectural, decorative, and smart lighting solutions. Free site visit, free lighting layout planning. Transform your space with Bellus." },
      { name: "author", content: "Bellus Lighting Solutions" },
      { name: "keywords", content: "Lighting Solutions, Modern Lighting, Architectural Lighting, COB Lights, Panel Lights, Luxury Lighting, False Ceiling Lighting, Smart Lighting, Interior Lighting" },
      { name: "theme-color", content: "#0F0F0F" },
      { property: "og:title", content: "Bellus Lighting Solutions — Premium Architectural & Decorative Lighting" },
      { property: "og:description", content: "Premium architectural, decorative, and smart lighting solutions. Free site visit, free lighting layout planning. Transform your space with Bellus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bellus Lighting Solutions — Premium Architectural & Decorative Lighting" },
      { name: "twitter:description", content: "Premium architectural, decorative, and smart lighting solutions. Free site visit, free lighting layout planning. Transform your space with Bellus." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a40c4a79-a7b4-4898-b066-d77c4a94bfb6/id-preview-78800bbb--c2726aae-3ca2-4911-8efc-d546dd56bcb6.lovable.app-1778667791214.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a40c4a79-a7b4-4898-b066-d77c4a94bfb6/id-preview-78800bbb--c2726aae-3ca2-4911-8efc-d546dd56bcb6.lovable.app-1778667791214.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&family=Montserrat:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Bellus Lighting Solutions",
          description: "Premium architectural and decorative lighting solutions.",
          telephone: "+917800088848",
          email: "belluslighting@gmail.com",
          areaServed: "IN",
          slogan: "Transforming Spaces With Light",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
        <LeadPopup />
      </div>
    </QueryClientProvider>
  );
}
