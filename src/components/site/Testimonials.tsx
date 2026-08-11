import { Quote } from "lucide-react";

import { Section } from "./Section";

/** EDIT REVIEWS HERE — replace with real customer reviews when you have them. */
export const reviews = [
  {
    name: "Baraka M.",
    location: "Dar es Salaam",
    text: "Ordered on WhatsApp in the morning and had my jersey the same week. Quality is exactly what they showed.",
  },
  {
    name: "Neema K.",
    location: "Arusha",
    text: "The fabric feels premium and the fit is perfect. I already ordered a second one for my brother.",
  },
  {
    name: "Yusuf A.",
    location: "Mwanza",
    text: "Fair prices and very easy communication. They helped me pick the right size before I paid.",
  },
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Customer Reviews"
      title="Trusted by football lovers"
      intro="What customers say about ordering from ELITE KITS."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="flex h-full flex-col gap-5 rounded-lg border border-border bg-card p-7"
          >
            <Quote className="size-5 text-primary" />
            <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
              “{r.text}”
            </blockquote>
            <figcaption>
              <span className="block text-sm font-semibold">{r.name}</span>
              <span className="text-xs text-muted-foreground">{r.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}