import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { EMAIL, PHONE_PRIMARY, PHONE_SECONDARY, telLink, PHONE_PRIMARY_TEL, PHONE_SECONDARY_TEL, waLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl font-bold">Bellus</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Transforming Spaces With Light. Premium architectural & decorative lighting solutions for modern homes and commercial spaces.
          </p>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full gradient-gold text-primary-foreground font-medium text-sm shadow-glow hover:opacity-90 transition-smooth"
          >
            Book Your Free Consultation Today
          </a>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Quick Links</div>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "Products" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-gold transition-smooth">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Get in Touch</div>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={telLink(PHONE_PRIMARY_TEL)} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-smooth">
                <Phone className="size-4" /> {PHONE_PRIMARY}
              </a>
            </li>
            <li>
              <a href={telLink(PHONE_SECONDARY_TEL)} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-smooth">
                <Phone className="size-4" /> {PHONE_SECONDARY}
              </a>
            </li>
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-smooth">
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-smooth break-all">
                <Mail className="size-4" /> {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <div>© {new Date().getFullYear()} Bellus Lighting Solutions. All rights reserved.</div>
          <div>Lighting Fixtures & Beyond</div>
        </div>
      </div>
    </footer>
  );
}
