import { Instagram } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/business";

export function InstagramSection() {
  return (
    <section className="border-b border-border bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Instagram className="mx-auto size-7 text-primary" />
        <h2 className="display mt-6 text-3xl sm:text-4xl lg:text-5xl">Follow the Elite</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Follow {BUSINESS.instagramHandle} for new arrivals, jersey drops, offers and football
          style.
        </p>
        <div className="mt-8">
          <Button variant="gold" size="xl" asChild>
            <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer">
              Follow us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}