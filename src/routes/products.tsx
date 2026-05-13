import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Premium Lighting Products — Bellus Lighting Solutions" },
      { name: "description", content: "Browse our premium catalog of COB lights, panel lights, profile lights, track lights, smart lights, outdoor lights and more." },
      { property: "og:title", content: "Premium Lighting Products — Bellus" },
      { property: "og:description", content: "Modern lighting fixtures with anti-glare optics, smart CCT control and architectural design." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  useReveal();
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const list = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <>
      <section className="pt-36 pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">The catalog</div>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-bold leading-tight">
            Premium <span className="gradient-text-gold">Lighting Products</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            Curated fixtures with superior optics, finishes and engineering — ready to inquire on WhatsApp.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-smooth ${
                  active === c
                    ? "bg-gold text-primary-foreground border-gold shadow-glow"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-gold/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No products in this category yet — message us on WhatsApp for the full catalog.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((p, i) => (
                <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 40}ms` }}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
