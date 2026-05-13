
# Bellus Lighting Solutions — Build Plan

A premium, dark-luxury, conversion-focused marketing site (4 routes) optimized for WhatsApp inquiries and phone calls.

## Pages (TanStack Start routes)
- `/` Home — Hero, Why Choose Us, Featured Categories, Clientele, Free Consultation Banner, Project Showcase, Testimonials, Final CTA
- `/services` — 6 service cards
- `/products` — Filterable category grid with per-product WhatsApp inquiry
- `/contact` — Contact cards, form, About section

Shared layout in `__root.tsx`: sticky top nav, footer, floating WhatsApp + Call buttons, 15s lead-gen popup.

## Design system (`src/styles.css`)
- Background `#0F0F0F`, surface `#1A1A1A`, accent gold `#D4AF37`, CTA WhatsApp green `#25D366`, text `#FFFFFF` / `#CCCCCC` (all converted to oklch tokens).
- Fonts via Google Fonts: Poppins (headings), Inter (body), Montserrat (premium accents).
- Tokens for gradients (gold shimmer), glassmorphism (backdrop blur surfaces), shadow-elegant, shadow-glow.
- Smooth fade/reveal-on-scroll via IntersectionObserver hook; hover glow, parallax hero.

## Assets
- Copy all 10 uploaded WhatsApp images into `src/assets/products/` and use across product cards, project showcase, and category tiles.
- Hero background: use the **Master Image** you'll send next (placeholder until then). Apply dark cinematic gradient overlay.

## Key components
- `FloatingActions` — fixed bottom-right WhatsApp + Call buttons (always visible).
- `LeadPopup` — appears after 15s, dismissible, links to WhatsApp.
- `ProductCard` — image, title, model, "Inquire on WhatsApp" button (prefilled message with product name).
- `ServiceCard`, `CategoryTile`, `TestimonialCard` (glassmorphism), `SectionReveal` wrapper.
- `Navbar` (sticky, blurred), `Footer`.

## Integrations
- WhatsApp link format: `https://wa.me/917800088848?text=<encoded message>`
- Tel links: `tel:+917800088848`, `tel:+916392730761`
- Contact form: client-side validation + opens WhatsApp with prefilled details (no backend needed unless you want Lovable Cloud for lead storage — see open question).

## SEO
- Per-route `head()` with unique title/description/OG tags using provided keywords.
- Semantic HTML, single H1 per page, alt text on every product image, JSON-LD `LocalBusiness` schema on home.

## Technical notes
- Tailwind v4 tokens in `src/styles.css` only (no custom color classes in components).
- All routes as separate files (`index.tsx`, `services.tsx`, `products.tsx`, `contact.tsx`) — no hash navigation.
- Mobile-first; floating buttons sized for thumb reach on mobile.

## Open items (will proceed with defaults unless you say otherwise)
1. **Master hero image** — I'll wait for your upload before finalizing the hero. Until then I'll use a tasteful placeholder.
2. **Lead storage** — form currently routes to WhatsApp only. Want me to also enable Lovable Cloud to store leads in a database? (Default: no, WhatsApp-only.)
3. **Testimonials & client logos** — I'll use realistic placeholder names/initials since none were provided. Send real ones anytime to swap in.
