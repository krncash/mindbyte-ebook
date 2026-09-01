/**
 * MindByte - "THE AI SHORTCUT" Ebook Landing Page
 * Configurable WhatsApp Ordering & Interaction Script
 * 
 * -------------------------------------------------------------
 * 🛠️ HOW TO CONFIGURE YOUR WHATSAPP NUMBER:
 * 1. Replace "YOUR_WHATSAPP_NUMBER" below with your real number.
 * 2. Format: International country code + phone number (no '+', spaces, or dashes).
 *    Example for India (+91 9876543210): "919876543210"
 * -------------------------------------------------------------
 */

const CONFIG = {
  // WhatsApp Number:
  whatsappNumber: "916350449157",
  
  // Product Details
  productName: "THE AI SHORTCUT",
  price: "₹79"
};

/**
 * Generates the official WhatsApp purchase URL with pre-filled message
 */
function getWhatsAppOrderUrl() {
  const message = `Hello! I want to buy your ebook.

Ebook: ${CONFIG.productName}
Price: ${CONFIG.price}

Please send me the payment QR code.

Thanks!`;

  const encodedMessage = encodeURIComponent(message);
  
  // If the placeholder is still present, guide the seller in console
  if (CONFIG.whatsappNumber === "YOUR_WHATSAPP_NUMBER") {
    console.warn(
      "[MindByte Config] Reminder: Please replace 'YOUR_WHATSAPP_NUMBER' in script.js with your real WhatsApp number."
    );
  }
  
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
}

/**
 * Reusable purchase trigger function
 * Attached to all Buy / Order CTAs across the page
 */
function openWhatsAppOrder() {
  const targetUrl = getWhatsAppOrderUrl();
  window.open(targetUrl, "_blank", "noopener,noreferrer");
}

// Make globally accessible
window.openWhatsAppOrder = openWhatsAppOrder;
window.CONFIG = CONFIG;

// Interactive DOM handlers for static HTML environment
document.addEventListener("DOMContentLoaded", () => {
  // 1. Attach openWhatsAppOrder to all elements with class .js-buy-btn or data-action="buy"
  const buyButtons = document.querySelectorAll(".js-buy-btn, [data-action='buy']");
  buyButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsAppOrder();
    });
  });

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
    });

    // Close menu when clicking nav links
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (trigger && content) {
      trigger.addEventListener("click", () => {
        const isOpen = !content.classList.contains("hidden");

        // Close all others for clean accordion feel
        faqItems.forEach((other) => {
          const otherContent = other.querySelector(".faq-content");
          const otherIcon = other.querySelector(".faq-icon");
          if (otherContent) otherContent.classList.add("hidden");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        });

        if (!isOpen) {
          content.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    }
  });

  // 4. Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
});
