# MindByte — "THE AI SHORTCUT" Ebook Landing Page

A minimal, high-converting, mobile-first single-product sales website designed for **MindByte**'s digital ebook **"THE AI SHORTCUT"** (Price: **₹79**).

Engineered to run natively on **GitHub Pages** (or any static hosting platform) with zero server setup, fast loading speeds, clean accessible HTML/CSS/JS, and an official WhatsApp order flow.

---

## 📖 Project Overview

- **Brand:** MindByte
- **Product Title:** THE AI SHORTCUT
- **Subtitle:** A Practical Beginner's Guide to Using AI to Learn Faster, Work Smarter, Save Time & Simplify Everyday Life
- **Price:** ₹79
- **Tech Stack:** HTML5, Modern CSS (Tailwind + Custom CSS Variables), Vanilla JavaScript / React Vite, SVG Assets

---

## 🚀 Quick Setup (Beginner Friendly)

Follow these simple steps to customize and deploy your ebook website:

### Step 1: Open the Project
Download or clone this repository to your computer and open it in your code editor (e.g., VS Code).

### Step 2: Configure Your WhatsApp Number
Open `script.js` (or in `src/config.ts` if running the Vite build) and find the configuration block at the top:

```javascript
const CONFIG = {
  // WhatsApp phone number:
  whatsappNumber: "916350449157", // International format (no +, no dashes, no spaces)
  productName: "THE AI SHORTCUT",
  price: "₹79"
};
```
*Note: For India, include country code `91` followed by your 10-digit number without any `+` or spaces (e.g., `919876543210`).*

### Step 3: Replace Ebook Cover Image (Optional)
The project comes with a high-resolution vector 3D ebook cover (`assets/ebook-cover.svg`).
To use your custom design:
1. Place your PNG/JPG/SVG image into the `public/assets/` or `assets/` folder.
2. Name it `ebook-cover.png` (or update the `src` attribute in `index.html`).

### Step 4: Replace Payment QR Code (Optional)
If you want to display your UPI payment QR code directly:
1. Replace `public/assets/qr-placeholder.svg` with your actual Google Pay / PhonePe / Paytm / BHIM UPI QR code image.

---

## 🌐 How to Deploy to GitHub Pages (100% Free)

GitHub Pages allows you to host this website completely for free in under 2 minutes:

### Method A: Direct Repository Upload (Simplest)
1. Go to [GitHub.com](https://github.com) and create a new public repository (e.g., `mindbyte-ebook`).
2. Upload all the files from this folder (`index.html`, `style.css`, `script.js`, `assets/`, `README.md`).
3. Click **Settings** in your GitHub repository toolbar.
4. In the left sidebar, click **Pages** (under the "Code and automation" section).
5. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
6. Set **Branch** to `main` (or `master`) and folder to `/ (root)`, then click **Save**.
7. Wait 30–60 seconds. GitHub will give you your live URL (e.g., `https://yourusername.github.io/mindbyte-ebook/`).

### Method B: Vite Production Build
If you are developing using Vite:
1. Run `npm install`
2. Run `npm run build`
3. The production-ready files will be generated in `dist/`.
4. Deploy the contents of `dist/` to GitHub Pages.

---

## 🔒 Order & Payment Verification Architecture

This website deliberately uses an honest, transparent seller-verified payment workflow. **No fake automatic verification or deceptive payment gateways**:

```
Customer clicks "Get the Ebook — ₹79"
       ↓
WhatsApp opens with pre-filled order text
       ↓
Seller receives message & sends official UPI QR
       ↓
Customer completes ₹79 payment via UPI
       ↓
Customer sends UTR / Transaction Reference on WhatsApp
       ↓
Seller verifies payment & delivers the PDF ebook
```

### Security Guarantees for Customers
- **Zero Credentials Collected:** The website never asks for UPI PIN, card numbers, or bank passwords.
- **Official MindByte Verification:** Payments are only conducted using verified details sent inside the official chat.
- **Protected Digital Asset:** The actual ebook PDF URL is never exposed in client-side source code.

---

## 📁 File Structure

```
├── index.html               # Main semantic HTML structure
├── style.css                # Minimal, mobile-first responsive stylesheet
├── script.js                # Dynamic WhatsApp link generator & UI accordions
├── README.md                # Setup & GitHub Pages documentation
├── public/assets/
│   ├── favicon.svg          # MindByte brand icon
│   ├── ebook-cover.svg      # High-fidelity 3D book mockup
│   └── qr-placeholder.svg   # Scalable payment QR placeholder
└── src/                     # Modular React source code for Vite live preview
```

---

## © License & Copyright
© 2026 MindByte. All rights reserved. Designed for digital creators & indie publishers.
