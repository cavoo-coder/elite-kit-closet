import { BadgeCheck, Crown, MessageCircle, Tag } from "lucide-react";

import { Section } from "./Section";

const features = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    text: "Quality jerseys made for true football lovers.",
  },
  { icon: Crown, title: "Elite Style", text: "Stand out on and off the pitch." },
  {
    icon: Tag,
    title: "Affordable Prices",
    text: "Premium football style without unnecessary prices.",
  },
  {
    icon: MessageCircle,
    title: "Easy Ordering",
    text: "Order quickly through WhatsApp or Instagram.",
  },
];

export function Features() {
  return (
    <Section eyebrow="Why Elite Kits?" title="Built for the football obsessed">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary/50"
          >
            <f.icon className="size-6 text-primary" />
            <h3 className="display mt-6 text-base">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}