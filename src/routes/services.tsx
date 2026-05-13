import { createFileRoute } from "@tanstack/react-router";
import { Home, Building2, Ruler, Landmark, Cpu, Sparkles, MessageCircle, Phone } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { telLink, waLink, PHONE_PRIMARY_TEL } from "@/lib/contact";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Lighting Services — Bellus Lighting Solutions" },
      { name: "description", content: "Residential, commercial, architectural, smart and decorative lighting. Free site visits and lighting layout planning across India." },
      { property: "og:title", content: "Our Lighting Services — Bellus" },
      { property: "og:description", content: "Premium lighting design for homes, offices, showrooms and architectural projects." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Home, title: "Residential Lighting", description: "Modern lighting solutions for homes and luxury interiors." },
  { icon: Building2, title: "Commercial Lighting", description: "Lighting setups for offices, cafés, showrooms and commercial spaces." },
  { icon: Ruler, title: "False Ceiling Lighting Layout", description: "Professional architect-style lighting layout planning." },
  { icon: Landmark, title: "Architectural Lighting", description: "Premium lighting concepts for modern architecture." },
  { icon: Cpu, title: "Smart Lighting Solutions", description: "Automation and smart control lighting systems." },
  { icon: Sparkles, title: "Decorative Lighting", description: "Luxury decorative lighting and ambiance creation." },
];

function ServicesPage() {
  useReveal();
  return (
    <>
      <section className="pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">What we do</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold leading-tight">
            Our Lighting <span className="gradient-text-gold">Services</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            From the first sketch to the final fixture, Bellus designs and installs lighting that elevates every space.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <div key={s.title} className="reveal group glass rounded-2xl p-8 hover:shadow-glow transition-smooth" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="size-12 rounded-xl gradient-gold text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <s.icon className="size-6" />
                </div>
                <h2 className="mt-6 text-xl font-semibold">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                <a
                  href={waLink(`Hello Bellus, I'm interested in ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold hover:opacity-80 transition-smooth"
                >
                  Get a free quote →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="reveal relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Need help picking the right service?</h2>
            <p className="mt-3 text-muted-foreground">Speak directly with a Bellus lighting designer.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-whatsapp text-whatsapp-foreground font-medium hover:opacity-90 transition-smooth">
                <MessageCircle className="size-5" /> WhatsApp Us
              </a>
              <a href={telLink(PHONE_PRIMARY_TEL)} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-gold text-primary-foreground font-medium hover:opacity-90 transition-smooth">
                <Phone className="size-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
