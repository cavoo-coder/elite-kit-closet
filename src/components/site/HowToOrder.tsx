import { Button } from "@/components/ui/button";
import { orderMessage, whatsappLink } from "@/lib/business";
import { Section } from "./Section";

const steps = [
  { n: "01", title: "Choose Your Jersey", text: "Browse our available jerseys." },
  { n: "02", title: "Select Your Size", text: "Choose the size you want." },
  {
    n: "03",
    title: "Contact Elite Kits",
    text: "Place your order through WhatsApp or Instagram.",
  },
];

export function HowToOrder() {
  return (
    <Section id="order" eyebrow="How to Order" title="Three steps. That's it.">
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="rounded-lg border border-border bg-card p-8">
            <span className="display text-4xl text-primary/30">{s.n}</span>
            <h3 className="display mt-5 text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Button variant="whatsapp" size="xl" className="w-full sm:w-auto" asChild>
          <a
            href={whatsappLink(orderMessage({ name: "(tell us which jersey you want)" }))}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on WhatsApp
          </a>
        </Button>
      </div>
    </Section>
  );
}