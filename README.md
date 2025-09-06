# HTT CARGO – Multilingual Sourcing Landing Page

**Live demo:** https://httcargo.netlify.app/

A lightweight, multilingual landing page built with plain **HTML • CSS • Vanilla JS**, fully RTL-compatible, focused on converting visitors through WhatsApp. Clean UI, no frameworks, just fast and effective.

---

## Features

- **Hero-first design**  
  Prominent logo + language selector, global value proposition ("استيراد موثوق من الصين إلى جميع أنحاء العالم"), concise subline, and dual CTA: "ابدأ الآن" and "واتساب مباشر".

- **Multilingual + dynamic direction**  
  Supports **Arabic (RTL)**, **English (LTR)**, and **French (LTR)**, all switching seamlessly via the language dropdown without page reload.

- **WhatsApp-based Contact Flow**  
  Form collects: Name, Phone, Product, Country, City, Notes, Consent. Submission opens WhatsApp with a prefilled, structured message using the language selected—clean conversion.

- **Modular sections** limit cognitive load:  
  - **Overview (Why Us)** — Three cards: "توريد موثوق", "فحص جودة", "شحن وجمارك"  
  - **Process Timeline** — Step-by-step visual flow  
  - **Client Testimonials** — Truck/container images with ★★★★★ or ★★★★  
  - **FAQ** — Collapsible `<details>` for quick answers  
  - **Contact Form** — Minimal, user-friendly, mobile-first  
  - **Footer** — Auto-updated year + brand name

- **Responsive Design**  
  Grid layouts adjust gracefully across desktop, tablet, and mobile (1–2–3 columns cascade).

- **Performance-first**  
  No build tool. No frameworks. Clean markup. Everything playable from `index.html`.

---

## Repo Overview

```
HTT-CARGO/
├─ assets/                   # Images, illustrations
├─ index.html                # Core layout + multilingual attributes
├─ styles.css                # Styles with responsive and theming
└─ main.js                   # i18n, form handling, WhatsApp integration
```

Supported languages (I18N) include full structured copy for **ar • en • fr**.

---

## Developer Notes

### WhatsApp Setup
Update `main.js`:
```js
const WHATSAPP_NUMBER = "2126XXXXXXXX"; 
```

### Direction & Language
The initial `<html>` is:
```html
<html lang="ar" dir="rtl">
```
Toggling language updates `dir` and replaces all text via `data-i18n` attributes, no page reload.

### Testimonials
Live site shows 3 cards with images and star counts (currently 5, 5, and 4). These match the hero aesthetic.

### Deployment
Hosted on **Netlify** with zero maintenance. Push to GitHub, connected via Netlify, auto-deploy on commit. Super fast and safe.

---

##  Possible Enhancements

- Add **favicon** + og-image for better branding and link previews
- Add **form input masking** for phone
- Add **client-side analytics** (Google Analytics or Fathom)
- Expand **testimonial pool** with auto-slider
- Add **dark mode toggle**
- Add CI for **automatic Netlify deploy previews**

---

##  Summary

HTT CARGO is a polished, minimal, multilingual landing page built the right way:
-  Single, simple, static page
-  Fast, accessible, RTL-ready
-  Focused on conversions via WhatsApp
-  Easy to extend, style, or fork for other projects
