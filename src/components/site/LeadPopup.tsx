import { useEffect, useState } from "react";
import { X, MessageCircle, Phone } from "lucide-react";
import { waLink, telLink, PHONE_PRIMARY_TEL } from "@/lib/contact";

export function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bellus-lead-shown")) return;
    const t = setTimeout(() => setOpen(true), 15000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem("bellus-lead-shown", "1");
    } catch {}
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md glass-strong rounded-2xl p-7 shadow-elegant">
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-smooth"
        >
          <X className="size-5" />
        </button>
        <div className="text-xs uppercase tracking-[0.25em] text-gold font-medium">Limited Offer</div>
        <h3 className="mt-2 text-2xl font-bold">Free Lighting Consultation</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Get a complimentary site visit and a custom lighting layout designed by our experts. No obligation.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={waLink("Hello Bellus Lighting Solutions, I want a Free Lighting Consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-whatsapp text-whatsapp-foreground font-medium text-sm hover:opacity-90 transition-smooth"
          >
            <MessageCircle className="size-4" /> WhatsApp Now
          </a>
          <a
            href={telLink(PHONE_PRIMARY_TEL)}
            onClick={close}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full gradient-gold text-primary-foreground font-medium text-sm hover:opacity-90 transition-smooth"
          >
            <Phone className="size-4" /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
