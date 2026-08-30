// ─── PNK3DLAB site configuration ────────────────────────────────────────────
// Update values here once; they apply across the whole site.

export const site = {
  name: "PNK3DLAB",
  tagline: "Personalized 3D Creations",

  // WhatsApp number in international format, digits only (no +, spaces, dashes).
  whatsappNumber: "919265540711",
  whatsappDisplay: "+91 92655 40711",
  whatsappMessage: "Hi! I'd like to place a custom 3D print order.",

  email: "niyatik20@gmail.com",
  instagram: "https://www.instagram.com/pnk3dlab",
  instagramHandle: "@pnk3dlab",
  location: "Ahmedabad, Gujarat, India",

  // Custom request Google Form — replace with the live form URL once created.
  customFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSeUS50VVKBk6JBXOvXMR1v3x-2AINNg7uHghYbpHNQfISB5nQ/viewform?usp=publish-editor",
};

export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
