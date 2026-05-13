import { Phone } from "lucide-react";
import { telLink, waLink, PHONE_PRIMARY_TEL } from "@/lib/contact";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col gap-3">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="size-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant flex items-center justify-center animate-pulse-ring hover:scale-105 transition-smooth"
      >
        <svg viewBox="0 0 32 32" className="size-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.21c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM16.05 5.33h-.02C9.95 5.33 5 10.27 5 16.36c0 2.42.79 4.66 2.13 6.5L5.7 27.3l4.6-1.47a11.07 11.07 0 005.74 1.6h.02c6.08 0 11.03-4.95 11.03-11.04 0-2.95-1.15-5.72-3.23-7.81a11 11 0 00-7.8-3.23z" />
        </svg>
      </a>
      <a
        href={telLink(PHONE_PRIMARY_TEL)}
        aria-label="Call now"
        className="size-14 rounded-full gradient-gold text-primary-foreground shadow-elegant flex items-center justify-center hover:scale-105 transition-smooth"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
