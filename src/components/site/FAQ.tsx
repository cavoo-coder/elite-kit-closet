import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "./Section";

/** EDIT FAQ ANSWERS HERE to match your exact business policies. */
export const faqs = [
  {
    q: "What sizes are available?",
    a: "Most jerseys are available in S, M, L, XL and XXL. Availability can vary per jersey — the sizes listed on each product are the ones we currently stock.",
  },
  {
    q: "How do I order?",
    a: "Choose your jersey, select your size and quantity, then tap Order via WhatsApp. Your order details are sent to us automatically and we confirm from there.",
  },
  {
    q: "How do I pay?",
    a: "Payment is arranged directly with us on WhatsApp. Mobile money and cash on delivery options can be discussed when you place your order.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery time depends on your location within Tanzania. We confirm the expected timeline with you when the order is placed.",
  },
  {
    q: "Do you deliver?",
    a: "Yes, we arrange delivery across Tanzania. Contact us on WhatsApp with your location and we will confirm the options and cost.",
  },
  {
    q: "Can I order a specific team jersey?",
    a: "Yes. If you don't see the jersey you want on the site, message us the team, season and size and we will let you know if we can source it.",
  },
  {
    q: "How can I contact ELITE KITS?",
    a: "Call or WhatsApp 0617304403, or message us on Instagram @ELITE_KITS.",
  },
];

export function FAQ() {
  return (
    <Section
      eyebrow="FAQ"
      title="Questions, answered"
      intro="Anything else? Message ELITE KITS on WhatsApp and we'll reply."
    >
      <Accordion type="single" collapsible className="max-w-3xl">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-sm font-medium hover:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}