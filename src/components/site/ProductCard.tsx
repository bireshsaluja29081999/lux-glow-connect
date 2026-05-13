import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/products";
import { waLink } from "@/lib/contact";

export function ProductCard({ product }: { product: Product }) {
  const message = `Hello Bellus Lighting Solutions, I'd like more details on ${product.name} (Model: ${product.model}).`;
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-smooth">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={`${product.name} ${product.model}`}
          loading="lazy"
          width={800}
          height={800}
          className="size-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full glass text-[10px] uppercase tracking-wider text-foreground">
          {product.category}
        </div>
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-gold text-primary-foreground text-[11px] font-semibold">
          {product.watt}
        </div>
      </div>
      <div className="p-5">
        <div className="text-[10px] uppercase tracking-[0.2em] text-gold">{product.model}</div>
        <h3 className="mt-1 text-base font-semibold text-foreground">{product.name}</h3>
        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{product.description}</p>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-whatsapp text-whatsapp-foreground text-sm font-medium hover:opacity-90 transition-smooth"
        >
          <MessageCircle className="size-4" /> Inquire on WhatsApp
        </a>
      </div>
    </article>
  );
}
