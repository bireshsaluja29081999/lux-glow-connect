import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Sparkles, Lightbulb, Ruler, Home, Building2, Cpu, Gem, ArrowRight, Quote, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { useReveal } from "@/hooks/use-reveal";
import { PHONE_PRIMARY, PHONE_SECONDARY, telLink, PHONE_PRIMARY_TEL, waLink } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bellus Lighting Solutions — Transform Your Space With Premium Lighting" },
      { name: "description", content: "Modern, architectural, decorative & smart lighting solutions. Free site visit, free lighting layout planning. Premium products for homes, offices and showrooms." },
      { property: "og:title", content: "Bellus Lighting Solutions — Premium Lighting" },
      { property: "og:description", content: "Free consultation, free lighting layouts. Premium architectural & decorative lighting." },
    ],
  }),
  component: HomePage,
});

const WHY = [
  { icon: Sparkles, title: "Lighting Expertise", text: "Years of experience designing premium lighting for architects, builders & homeowners." },
  { icon: Home, title: "Free Site Visit", text: "Our specialists visit your space, measure & assess at no cost to you." },
  { icon: Ruler, title: "Free Lighting Layout", text: "Architect-grade lighting plans drawn for your false ceiling and rooms." },
  { icon: Gem, title: "Premium Products", text: "Curated catalog of modern fixtures with anti-glare optics and superior CRI." },
  { icon: Cpu, title: "Smart Lighting", text: "Automation, dimming and CCT control built into every recommendation." },
  { icon: Lightbulb, title: "Custom Designs", text: "Every project is tailored — no templates, just lighting designed for you." },
];

const CATEGORIES = [
  "COB Lights",
  "Panel Lights",
  "Profile Lights",
  "Track Lights",
  "Decorative Lights",
  "Smart Lights",
  "Outdoor Lighting",
  "Architectural Lighting",
];

const CLIENTELE = ["Architects", "Interior Designers", "Builders", "Luxury Homes", "Showrooms", "Cafés & Restaurants", "Corporate Offices", "Retail Stores"];

const PROJECTS = [
  { src: project1, title: "Penthouse Dining" },
  { src: project2, title: "Master Bedroom Cove" },
  { src: project3, title: "Premium Showroom" },
  { src: project4, title: "Villa Facade" },
];

const TESTIMONIALS = [
  { name: "Rohan Mehta", role: "Architect, Lucknow", text: "Bellus delivered the cleanest lighting layout we've worked with. Anti-glare COBs are flawless." },
  { name: "Anita Verma", role: "Homeowner", text: "Free visit, free design, and the result feels like a 5-star hotel. Highly recommended." },
  { name: "Kunal Singh", role: "Showroom Owner", text: "Track and COB lights from Bellus completely transformed how our products look." },
];

function HomePage() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={heroBg}
          alt="Luxury interior with premium architectural lighting"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

        <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 pt-32 pb-20">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs uppercase tracking-[0.2em] text-gold">
              <Sparkles className="size-3.5" /> Lighting Fixtures & Beyond
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white">
              Transform Your Space With{" "}
              <span className="gradient-text-gold">Premium Lighting</span> Solutions
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl">
              Modern · Architectural · Decorative · Smart Lighting — designed by experts and installed beautifully.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Free Visit", "Free Consultation", "Free Lighting Layouts"].map((b) => (
                <span key={b} className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium text-white">
                  ✦ {b}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink("Hello Bellus Lighting Solutions, I want a lighting consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-whatsapp text-whatsapp-foreground font-medium shadow-elegant hover:opacity-90 transition-smooth"
              >
                <MessageCircle className="size-5" /> Book Free Consultation
              </a>
              <a
                href={telLink(PHONE_PRIMARY_TEL)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full gradient-gold text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth"
              >
                <Phone className="size-5" /> Call Now
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-white/80">
              <a href={telLink(PHONE_PRIMARY_TEL)} className="hover:text-gold transition-smooth">{PHONE_PRIMARY}</a>
              <a href={`tel:+916392730761`} className="hover:text-gold transition-smooth">{PHONE_SECONDARY}</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BELLUS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Why Bellus</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Lighting designed with intent, installed with care.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <div key={w.title} className="reveal glass rounded-2xl p-7 hover:shadow-glow transition-smooth" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="size-11 rounded-xl gradient-gold text-primary-foreground flex items-center justify-center">
                  <w.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Featured Categories</div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Explore the catalog</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-gold hover:opacity-80 transition-smooth">
              View all products <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-4">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c}
                to="/products"
                className="reveal group relative overflow-hidden rounded-2xl border border-border bg-secondary/40 p-6 aspect-[4/3] flex flex-col justify-between hover:border-gold/40 transition-smooth"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <Lightbulb className="size-7 text-gold opacity-80 group-hover:scale-110 transition-smooth" />
                <div>
                  <div className="text-base font-semibold">{c}</div>
                  <div className="mt-1 text-xs text-muted-foreground inline-flex items-center gap-1 group-hover:text-gold transition-smooth">
                    Browse <ArrowRight className="size-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Bestsellers</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Premium fixtures, ready to ship.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p, i) => (
              <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTELE */}
      <section className="py-16 border-y border-border bg-card/30 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal text-center text-xs uppercase tracking-[0.3em] text-gold">Trusted By Our Clientele</div>
        </div>
        <div className="mt-8 relative">
          <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap" style={{ animation: "scroll 35s linear infinite" }}>
            {[...CLIENTELE, ...CLIENTELE, ...CLIENTELE].map((c, i) => (
              <div key={i} className="text-2xl sm:text-3xl font-display font-semibold text-muted-foreground/70">
                {c} <span className="text-gold mx-4">✦</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
      </section>

      {/* FREE CONSULTATION BANNER */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-14 text-center">
            <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-gold)" }} />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Limited time</div>
              <h2 className="mt-4 text-3xl sm:text-5xl font-bold max-w-3xl mx-auto leading-tight">
                FREE Site Visit, Consultation & Lighting Layouts
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Get a tailored lighting plan for your home, office or showroom — at zero cost.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-whatsapp text-whatsapp-foreground font-medium shadow-elegant hover:opacity-90 transition-smooth"
                >
                  <MessageCircle className="size-5" /> Book Now on WhatsApp
                </a>
                <a
                  href={telLink(PHONE_PRIMARY_TEL)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/50 text-gold font-medium hover:bg-gold hover:text-primary-foreground transition-smooth"
                >
                  <Phone className="size-5" /> Call to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Recent Projects</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Spaces transformed by light.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <div
                key={p.title}
                className={`reveal group relative overflow-hidden rounded-2xl ${i % 3 === 0 ? "md:row-span-2" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-72 md:h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold">Project</div>
                  <div className="mt-1 text-xl font-semibold">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="reveal max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Testimonials</div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold">Loved by the people we light up.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="reveal glass rounded-2xl p-7" style={{ transitionDelay: `${i * 80}ms` }}>
                <Quote className="size-6 text-gold" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-current" />
                  ))}
                </div>
                <div className="mt-4">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center reveal">
          <Building2 className="size-10 text-gold mx-auto" />
          <h2 className="mt-6 text-4xl sm:text-6xl font-bold leading-[1.05]">
            Let's Light Up Your <span className="gradient-text-gold">Dream Space</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Talk to a Bellus lighting expert today and get your free design consultation started in minutes.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-whatsapp text-whatsapp-foreground font-medium shadow-elegant hover:opacity-90 transition-smooth"
            >
              <MessageCircle className="size-5" /> WhatsApp Now
            </a>
            <a
              href={telLink(PHONE_PRIMARY_TEL)}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full gradient-gold text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth"
            >
              <Phone className="size-5" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
