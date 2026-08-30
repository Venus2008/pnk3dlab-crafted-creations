import { createFileRoute, Link } from "@tanstack/react-router";

import galleryFigurine from "../assets/gallery-figurine.jpg";
import galleryBust from "../assets/gallery-bust.jpg";
import galleryCharacter from "../assets/gallery-character.jpg";
import galleryPhonestand from "../assets/gallery-phonestand.jpg";
import galleryKeychain from "../assets/gallery-keychain.jpg";
import galleryVase from "../assets/gallery-vase.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — PNK3DLAB" },
      {
        name: "description",
        content:
          "Browse custom 3D-printed creations by PNK3DLAB — personalized figurines, portrait busts, name keychains, functional prints and more.",
      },
      { property: "og:title", content: "Gallery — PNK3DLAB" },
      {
        property: "og:description",
        content:
          "Browse custom 3D-printed creations by PNK3DLAB — personalized figurines, portrait busts, name keychains, functional prints and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GalleryPage,
});

// ─── Swap these images with real photos later ────────────────────────────────
// Replace the import paths above (or add entries here) — the grid updates itself.
const items = [
  { src: galleryFigurine, alt: "Personalized gold couple figurine", caption: "Custom Couple Figurine" },
  { src: galleryBust, alt: "3D-printed portrait bust in white", caption: "Portrait Bust" },
  { src: galleryCharacter, alt: "Custom 3D-printed character figurine", caption: "Custom Character" },
  { src: galleryPhonestand, alt: "Functional 3D-printed phone stand", caption: "Phone Stand" },
  { src: galleryKeychain, alt: "Personalized 3D-printed name keychains", caption: "Name Keychains" },
  { src: galleryVase, alt: "3D-printed geometric vase with gold detail", caption: "Geometric Vase" },
];

function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="text-center text-xs font-semibold tracking-[0.35em] text-gold uppercase">
        Our Work
      </p>
      <h1 className="mt-4 text-center text-5xl font-semibold text-foreground">Gallery</h1>
      <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden="true" />
      <p className="mx-auto mt-6 max-w-lg text-center text-muted-foreground">
        A look at some of our custom creations — from personalized gifts to practical
        everyday prints.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.alt}
            className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-gold"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={800}
              height={800}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground">Like something you see? Let's make yours.</p>
        <Link to="/custom-request" className="btn-gold mt-6">
          Request a Custom Design
        </Link>
      </div>
    </section>
  );
}
