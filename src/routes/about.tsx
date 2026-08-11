import { createFileRoute } from "@tanstack/react-router";

import { Features } from "@/components/site/Features";
import { InstagramSection } from "@/components/site/InstagramSection";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { Testimonials } from "@/components/site/Testimonials";

const title = "About ELITE KITS | Football Jersey Brand in Tanzania";
const description =
  "ELITE KITS is a Tanzanian football jersey brand for fans who want to represent their clubs and players with confidence and style. Learn our story.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <div className="pt-24" />
      <Section eyebrow="About Elite Kits" title="Football is not a hobby. It's identity.">
        <div className="grid max-w-4xl gap-6 text-sm leading-relaxed text-muted-foreground lg:grid-cols-2">
          <p>
            ELITE KITS exists for football lovers in Tanzania who want to represent their favourite
            clubs and players with confidence and style. We started because good jerseys were
            either hard to find, overpriced, or simply didn't look the part.
          </p>
          <p>
            Every jersey on this site is chosen for how it fits, how it feels and how it looks off
            the pitch as much as on it. Club shirts, national teams, retro classics and full kits —
            selected, not dumped into a catalogue.
          </p>
          <p>
            Ordering is deliberately simple. Message us on WhatsApp or Instagram, tell us the
            jersey and the size, and we'll confirm availability, price and delivery with you
            directly.
          </p>
          <p>
            We're building ELITE KITS to be a football fashion brand Tanzania can be proud of —
            one honest order at a time.
          </p>
        </div>
      </Section>
      <Features />
      <Testimonials />
      <InstagramSection />
    </Layout>
  );
}