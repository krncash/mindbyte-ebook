/**
 * MindByte Ebook Landing Page Configuration
 * 
 * To change your WhatsApp number:
 * Replace "YOUR_WHATSAPP_NUMBER" with your real international phone number (e.g., "919876543210").
 */
export const CONFIG = {
  // 🔴 WhatsApp phone number (international format without + or spaces)
  whatsappNumber: "916350449157",
  productName: "THE AI SHORTCUT",
  subtitle: "A Practical Beginner's Guide to Using AI to Learn Faster, Work Smarter, Save Time & Simplify Everyday Life",
  price: "₹79",
  currency: "INR",
  brandName: "MindByte",
  supportEmail: "contact@mindbyte.digital",
  deliveryMode: "Delivered After Payment Verification",
  year: 2026
};

/**
 * Builds the standard WhatsApp order text
 */
export function buildWhatsAppMessage(customProductName?: string, customPrice?: string): string {
  const name = customProductName || CONFIG.productName;
  const price = customPrice || CONFIG.price;

  return `Hello! I want to buy your ebook.

Ebook: ${name}
Price: ${price}

Please send me the payment QR code.

Thanks!`;
}

/**
 * Builds the URL link for WhatsApp
 */
export function getWhatsAppOrderUrl(customNumber?: string): string {
  const rawNumber = customNumber || CONFIG.whatsappNumber;
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");
  const message = buildWhatsAppMessage();
  const encoded = encodeURIComponent(message);
  
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

/**
 * Standard trigger to open WhatsApp order flow
 */
export function openWhatsAppOrder(customNumber?: string): void {
  const url = getWhatsAppOrderUrl(customNumber);
  window.open(url, "_blank", "noopener,noreferrer");
}
