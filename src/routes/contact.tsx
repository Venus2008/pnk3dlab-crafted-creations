import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Truck } from "lucide-react";
import { site, whatsappLink } from "../lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — PNK3DLAB" },
      {
        name: "description",
        content:
          "Get in touch with PNK3DLAB — WhatsApp +91 92655 40711, Instagram @pnk3dlab, or email niyatik20@gmail.com. Based in Ahmedabad, delivering pan-India.",
      },
      { property: "og:title", content: "Contact Us — PNK3DLAB" },
      {
        property: "og:description",
        content:
          "Reach PNK3DLAB on WhatsApp, Instagram or email. Based in Ahmedabad, delivering custom 3D prints pan-India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: site.whatsappDisplay,
    href: whatsappLink,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: site.location,
  },
];

function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="text-center text-xs font-semibold tracking-[0.35em] text-gold uppercase">
        Get In Touch
      </p>
      <h1 className="mt-4 text-center text-5xl font-semibold text-foreground">
        Let's make something together
      </h1>
      <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden="true" />
      <p className="mx-auto mt-6 max-w-lg text-center text-muted-foreground">
        The fastest way to reach us is WhatsApp — tell us your idea and we'll take it
        from there.
      </p>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {channels.map((c) => {
          const inner = (
            <>
              <c.icon className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {c.label}
                </p>
                <p className="mt-1 font-medium text-foreground">{c.value}</p>
              </div>
            </>
          );
          const cls =
            "flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-gold";
          return c.href ? (
            <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
              {inner}
            </a>
          ) : (
            <div key={c.label} className={cls}>
              {inner}
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex items-start gap-4 rounded-lg border border-gold/30 bg-gold-soft/50 p-6">
        <Truck className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.5} />
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Delivery
          </p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">
            We currently ship pan-India. Delivery time depends on your location and will
            be confirmed after order details are finalized.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
          <Phone className="h-4 w-4" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
