import { Instagram, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BUSINESS, whatsappLink } from "@/lib/business";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in Touch"
      title="Talk to Elite Kits"
      intro="We reply fast on WhatsApp and Instagram. Tell us the team, the size, and we'll handle the rest."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-8">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Phone className="mt-1 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="eyebrow">Call / WhatsApp</p>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="display mt-1 block text-xl text-foreground hover:text-primary"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Instagram className="mt-1 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="eyebrow">Instagram</p>
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="display mt-1 block text-xl text-foreground hover:text-primary"
                >
                  {BUSINESS.instagramHandle}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MessageCircle className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="eyebrow">Based in</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tanzania — delivery arranged nationwide.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center gap-3 rounded-lg border border-border bg-card p-8">
          <Button variant="gold" size="xl" asChild>
            <a href={`tel:${BUSINESS.phoneTel}`}>Call Now</a>
          </Button>
          <Button variant="whatsapp" size="xl" asChild>
            <a
              href={whatsappLink("Hello ELITE KITS, I have a question about your jerseys.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
          <Button variant="elite" size="xl" asChild>
            <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}