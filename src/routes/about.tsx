import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — PNK3DLAB" },
      {
        name: "description",
        content:
          "PNK3DLAB was born from a simple frustration: things not made exactly the way you need them. Learn the story behind our custom 3D printing studio in Ahmedabad.",
      },
      { property: "og:title", content: "About Us — PNK3DLAB" },
      {
        property: "og:description",
        content:
          "The story behind PNK3DLAB — a small Ahmedabad studio making truly personalized 3D-printed items, one print at a time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="text-center text-xs font-semibold tracking-[0.35em] text-gold uppercase">
        Our Story
      </p>
      <h1 className="mt-4 text-center text-5xl font-semibold text-foreground">
        Made personal, from the start
      </h1>
      <div className="mx-auto mt-6 h-px w-16 bg-gold" aria-hidden="true" />

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          It all began with a personal problem — I was struggling to find a few basic
          things made exactly the way I needed them. Not almost right. Not close enough.
          <span className="text-foreground"> Exactly</span> right.
        </p>
        <p>
          That frustration sparked an idea: why not create it myself, exactly to spec?
          And realizing that many other people likely face the same problem, PNK3DLAB
          was born — a small business dedicated to helping people get truly personalized,
          custom-made 3D printed items.
        </p>
        <p>
          Every piece that leaves our studio started as someone's idea — a gift for a
          person they love, a part they couldn't find anywhere, a character from their
          imagination. We treat each one like it matters, because it does.
        </p>
      </div>

      <div className="mt-14 rounded-lg border border-gold/30 bg-gold-soft/50 p-8 text-center">
        <Sparkles className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} />
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Our Mission</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Solving real problems one print at a time — making custom, personal things
          accessible to everyone, not just big companies with big budgets.
        </p>
      </div>

      <div className="mt-12 text-center">
        <Link to="/custom-request" className="btn-gold">
          Start Your Custom Request
        </Link>
      </div>
    </section>
  );
}
