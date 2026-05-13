import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { telLink, PHONE_PRIMARY_TEL } from "@/lib/contact";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // Only the home page has a full-bleed dark hero behind the transparent navbar.
  const overHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        overHero ? "bg-transparent" : "glass-strong"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={`font-display text-2xl md:text-3xl font-bold tracking-tight ${overHero ? "text-white" : "text-foreground"}`}>
            Bellus
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-gold mt-2">
            Lighting
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-smooth ${overHero ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={telLink(PHONE_PRIMARY_TEL)}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground transition-smooth"
          >
            <Phone className="size-4" />
            Call Now
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-foreground"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-border">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-base font-medium text-muted-foreground hover:text-gold transition-smooth"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
