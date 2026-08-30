import { createFileRoute, Link } from "@tanstack/react-router";
import { Lightbulb, MessageCircle, Truck, ArrowRight } from "lucide-react";
import { whatsappLink } from "../lib/site";

import galleryFigurine from "../assets/gallery-figurine.jpg";
import galleryBust from "../assets/gallery-bust.jpg";
import galleryVase from "../assets/gallery-vase.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PNK3DLAB — Personalized 3D Creations | Custom 3D Printing, Ahmedabad" },
      {
        name: "description",
        content:
          "Custom 3D-printed gifts, figurines, portraits and functional items, made exactly to your spec. Order on WhatsApp — pan-India delivery from Ahmedabad.",
      },
      { property: "og:title", content: "PNK3DLAB — Personalized 3D Creations" },
      {
        property: "og:description",
        content:
          "Custom 3D-printed gifts, figurines, portraits and functional items, made exactly to your spec. Pan-India delivery from Ahmedabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HomePage,
});

const steps = [
  {
    icon: Lightbulb,
    title: "Share your idea",
    text: "Send us your idea, sketch or reference photo — anything you have in mind.",
  },
  {
    icon: MessageCircle,
    title: "We design & confirm",
    text: "We work out the details together on WhatsApp and confirm before printing.",
  },
  {
    icon: Truck,
    title: "Printed & delivered",
    text: "We print your piece with care and deliver it anywhere in India.",
  },
];

const teaser = [
  { src: galleryFigurine, alt: "Gold 3D-printed couple figurine" },
  { src: galleryBust, alt: "White 3D-printed portrait bust" },
  { src: galleryVase, alt: "White 3D-printed geometric vase" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-24 text-center sm:px-6 sm:pt-28">
        <p className="text-xs font-semibold tracking-[0.35em] text-gold uppercase">
          PNK3DLAB
        </p>
        <h1 className="mt-4 text-5xl leading-tight font-semibold text-foreground sm:text-6xl md:text-7xl">
          Personalized 3D Creations
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden="true" />
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          We turn your ideas into real, custom-printed objects — personalized gifts,
          figurines, portraits and practical pieces, made exactly the way you want them.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
          <Link to="/custom-request" className="btn-outline-dark">
            Request a Custom Design
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-border bg-accent/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-center text-4xl font-semibold text-foreground">How It Works</h2>
          <div className="mx-auto mt-4 h-px w-12 bg-gold" aria-hidden="true" />
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-background">
                  <step.icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                </div>
                <p className="mt-4 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                  Step {i + 1}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-4xl font-semibold text-foreground">Recent Creations</h2>
        <div className="mx-auto mt-4 h-px w-12 bg-gold" aria-hidden="true" />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {teaser.map((img) => (
            <Link
              key={img.alt}
              to="/gallery"
              className="group overflow-hidden rounded-lg border border-border transition-colors hover:border-gold"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-gold transition-colors hover:text-foreground"
          >
            View Gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
