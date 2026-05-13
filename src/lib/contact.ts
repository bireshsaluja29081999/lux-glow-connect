export const PHONE_PRIMARY = "+91 7800088848";
export const PHONE_SECONDARY = "+91 6392730761";
export const PHONE_PRIMARY_TEL = "+917800088848";
export const PHONE_SECONDARY_TEL = "+916392730761";
export const WHATSAPP_NUMBER = "917800088848";
export const EMAIL = "belluslighting@gmail.com";

export function waLink(message = "Hello Bellus Lighting Solutions, I want a Free Lighting Consultation.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telLink(num: string = PHONE_PRIMARY_TEL) {
  return `tel:${num}`;
}
