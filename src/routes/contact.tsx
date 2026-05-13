import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { EMAIL, PHONE_PRIMARY, PHONE_SECONDARY, telLink, PHONE_PRIMARY_TEL, PHONE_SECONDARY_TEL, waLink, WHATSAPP_NUMBER } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Bellus Lighting Solutions — Free Consultation" },
      { name: "description", content: "Talk to Bellus Lighting Solutions. Free consultation, free site visit, free lighting layout. WhatsApp, call or email us." },
      { property: "og:title", content: "Contact Bellus Lighting Solutions" },
      { property: "og:description", content: "Get your free lighting consultation. We respond fast on WhatsApp." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  const [form, setForm] = useState({ name: "", phone: "", city: "", requirement: "" });

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hello Bellus Lighting Solutions, I'd like a free consultation.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ACity: ${form.city}%0ARequirement: ${form.requirement}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }

  const cards = [
    { icon: Phone, label: "Call", value: PHONE_PRIMARY, href: telLink(PHONE_PRIMARY_TEL) },
    { icon: Phone, label: "Call", value: PHONE_SECONDARY, href: telLink(PHONE_SECONDARY_TEL) },
    { icon: MessageCircle, label: "WhatsApp", value: PHONE_PRIMARY, href: waLink() },
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  ];

  return (
    <>
      <section className="pt-36 pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Get in touch</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold leading-tight">
            Contact <span className="gradient-text-gold">Bellus</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Free consultation. Free site visit. Free lighting layouts. Reach out — we usually respond on WhatsApp within minutes.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <a
              key={c.label + c.value}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="reveal glass rounded-2xl p-6 hover:shadow-glow hover:border-gold/30 transition-smooth"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="size-11 rounded-xl gradient-gold text-primary-foreground flex items-center justify-center">
                <c.icon className="size-5" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-[0.2em] text-gold">{c.label}</div>
              <div className="mt-1 text-base font-semibold break-all">{c.value}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid gap-10 lg:grid-cols-2">
          <div className="reveal glass-strong rounded-3xl p-8 sm:p-10">
            <h2 className="text-3xl font-bold">Request Free Consultation</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fill in your details — we'll continue the conversation on WhatsApp.</p>

            <form onSubmit={submit} className="mt-7 space-y-4">
              {[
                { k: "name", label: "Name", type: "text", placeholder: "Your full name" },
                { k: "phone", label: "Phone Number", type: "tel", placeholder: "+91 ..." },
                { k: "city", label: "City", type: "text", placeholder: "Your city" },
              ].map((f) => (
                <div key={f.k}>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.label}</label>
                  <input
                    required
                    type={f.type}
                    value={form[f.k as keyof typeof form]}
                    onChange={(e) => update(f.k as keyof typeof form, e.target.value)}
                    placeholder={f.placeholder}
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-smooth"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Requirement</label>
                <textarea
                  required
                  rows={4}
                  value={form.requirement}
                  onChange={(e) => update("requirement", e.target.value)}
                  placeholder="Tell us about your space and what you're looking for..."
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold transition-smooth resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full gradient-gold text-primary-foreground font-medium shadow-glow hover:opacity-90 transition-smooth"
              >
                <Send className="size-4" /> Request Free Consultation
              </button>
            </form>
          </div>

          <div className="reveal flex flex-col gap-6">
            <div className="glass rounded-3xl p-8 sm:p-10">
              <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">About Us</div>
              <h2 className="mt-3 text-3xl font-bold">About Bellus Lighting Solutions</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Bellus Lighting Solutions specializes in modern, premium, and architectural lighting designed to transform spaces beautifully. We provide professional lighting consultation, designer lighting layouts, and premium lighting products for residential and commercial projects.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-3xl font-display font-bold gradient-text-gold">500+</div>
                  <div className="text-xs text-muted-foreground mt-1">Projects illuminated</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold gradient-text-gold">2 Yr</div>
                  <div className="text-xs text-muted-foreground mt-1">Product warranty</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold gradient-text-gold">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Free consultation</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold gradient-text-gold">9+</div>
                  <div className="text-xs text-muted-foreground mt-1">Product categories</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 sm:p-10">
              <MapPin className="size-6 text-gold" />
              <h3 className="mt-4 text-lg font-semibold">Service Area</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Serving residential and commercial projects across India. Free site visits available — message us with your location.
              </p>
              <a
                href={waLink("Hello Bellus, I'd like to know if you serve my area.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-gold hover:opacity-80 transition-smooth"
              >
                <MessageCircle className="size-4" /> Check service availability
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
