# PNK3DLAB: Crafted Creations

Build a simple, elegant static business website for PNK3DLAB, a custom/personalized 3D printing business based in Ahmedabad, Gujarat, India. The business does both personalized gift items (figurines, portraits, custom characters) and functional/practical printed items.

Brand & Visual Direction
Background: clean white throughout.
Color palette: black, gold/brass, and white — a luxury, elegant, premium feel (inspired by the brand logo, which is a gold-and-silver "P3D" monogram with a star). Use gold as the primary accent color (buttons, headings, dividers, icons), black for text/contrast elements, white as the dominant background.
Typography: modern, clean sans-serif for body text; a slightly more refined/elegant font for headings to match the premium logo feel.
Logo: I will upload the logo file separately — place it in the navbar (left-aligned) and footer. Keep generous white space around it since it's a detailed metallic design.
Overall tone: premium but approachable — this is a small, personal business, not a faceless factory. Slightly warm/human, not cold-corporate.
Use subtle gold accents (thin lines, icon outlines, hover states) rather than heavy blocks of gold, so it doesn't feel gaudy on white.
Site Structure (Static, single-page or simple multi-page — your call on routing, but these are the sections)
1. Home
Hero section with logo, tagline "Personalized 3D Creations", a short punchy line about turning ideas into physical custom-printed objects.
Primary CTA button: "Order on WhatsApp" (see Ordering section below).
Secondary CTA: "Request a Custom Design" (scrolls/links to the Custom Request Form).
A short "How It Works" 3-step visual: 1) Share your idea/image, 2) We design & confirm details via WhatsApp, 3) We print & deliver pan-India.
A brief teaser of gallery images with a "View Gallery" link.
Floating WhatsApp button fixed on the bottom-right corner of every page (standard chat-icon style), linking to WhatsApp.
2. About
Section telling the founder's story (I'll provide/refine the final text, use this as the draft to structure around): "It all began with a personal problem — I was struggling to find a few basic things made exactly the way I needed them. That frustration sparked an idea: why not create it myself, exactly to spec? Realizing many other people likely face the same problem, PNK3DLAB was born — a small business dedicated to helping people get truly personalized, custom-made 3D printed items, solving real problems one print at a time."
Keep this warm, personal, and founder-voice — not corporate.
Optionally include a small "Our Mission" or "Why Custom 3D Printing" supporting line.
3. Gallery
Simple grid layout (no categories/filtering needed for now — keep it flat and simple).
Use placeholder image blocks styled to fit the black/gold/white theme for now — I will replace these with real photos once they're edited. Make it easy for me to swap images later.
Each grid item can have a subtle hover effect (zoom or gold border highlight) but no captions needed unless it looks better with a one-line caption.
4. Contact
Phone/WhatsApp number +91 9265540711.
Instagram link/button: https://www.instagram.com/pnk3dlab
Email: niyatik20@gmail.com
Location: Ahmedabad, Gujarat, India (mention pan-India delivery, no need for a map/pin — just text).
Delivery note: "We currently ship pan-India. Delivery time depends on your location and will be confirmed after order details are finalized."
5. Custom Request Form

This is the core conversion tool since there's no e-commerce backend yet. The form itself is NOT built on the website — it's a separate Google Form that I will create and link to. Build this section as follows:

A clear "Request a Custom Design" section/page with a short description: e.g. "Tell us what you'd like made — fill out our quick request form and we'll get back to you on WhatsApp or email."
A prominent button/link labeled "Open Custom Request Form" that opens the Google Form in a new tab.
Use a clearly marked placeholder for the Google Form URL: "https://docs.google.com/forms/d/e/1FAIpQLSeUS50VVKBk6JBXOvXMR1v3x-2AINNg7uHghYbpHNQfISB5nQ/viewform?usp=publish-editor" so I can drop in the real link once it's created.
Mention near the button, briefly, what the form will ask for so users know what to expect before clicking: Name, Contact number, Email, Delivery address, Image upload (for reference photos), and Quantity.
No need to build any actual form fields, file upload logic, or backend submission handling on the website itself — the Google Form handles all of that externally.
Ordering Flow (no backend/payment system yet)
All ordering happens via WhatsApp chat — there is no cart or checkout.
"Order on WhatsApp" buttons throughout the site should open a WhatsApp chat (wa.me link) with a short pre-filled generic message like "Hi! I'd like to place a custom 3D print order."
Make sure the WhatsApp number is stored as one variable/placeholder so I only need to update it in one place.
Technical/General Notes
Fully responsive (mobile-first, since most WhatsApp-driven traffic will be on mobile).
Fast-loading, minimal, no unnecessary animations beyond subtle hover/scroll effects.
Clean navbar with Home / About / Gallery / Contact / Custom Request, plus the logo.
Footer with logo, quick links, Instagram icon, and copyright line.
No login, no backend database, no payment integration — this is intentionally a lead-generation + WhatsApp-order site.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/502c091f-8634-4c84-b4a9-ebd603163423).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
