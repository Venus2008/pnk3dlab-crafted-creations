import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "../lib/site";

export const Route = createFileRoute("/custom-request")({
  head: () => ({
    meta: [
      { title: "Request a Custom Design — PNK3DLAB" },
      {
        name: "description",
        content:
          "Tell PNK3DLAB what you'd like made — fill out our quick custom request form and we'll get back to you on WhatsApp or email.",
      },
      { property: "og:title", content: "Request a Custom Design — PNK3DLAB" },
      {
        property: "og:description",
        content:
          "Tell PNK3DLAB what you'd like made — fill out our quick custom request form and we'll get back to you on WhatsApp or email.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CustomRequestPage,
});

const formFields = [
  "Name",
  "Contact number",
  "Email",
  "Delivery address",
  "Image upload (for reference photos)",
  "Quantity",
];

function CustomRequestPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="text-center text-xs font-semibold tracking-[0.35em] text-gold uppercase">
        Custom Request
      </p>
      <h1 className="mt-4 text-center text-5xl font-semibold text-foreground">
        Request a Custom Design
      </h1>
      <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden="true" />
      <p className="mx-auto mt-6 max-w-xl text-center text-lg text-muted-foreground">
        Tell us what you'd like made — fill out our quick request form and we'll get
        back to you on WhatsApp or email with details and pricing.
      </p>

      <div className="mt-12 rounded-lg border border-border bg-card p-8 sm:p-10">
        <h2 className="text-2xl font-semibold text-foreground">What the form will ask</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Just the essentials, so we can design and quote accurately:
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {formFields.map((field) => (
            <li key={field} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {field}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href={site.customFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <ExternalLink className="h-4 w-4" />
            Open Custom Request Form
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Opens a Google Form in a new tab — takes about 2 minutes.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">
          Prefer to just chat it through?
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-dark mt-4"
        >
          <MessageCircle className="h-4 w-4" />
          Message Us on WhatsApp
        </a>
      </div>
    </section>
  );
}
