import { Link, createFileRoute } from "@tanstack/react-router";

import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Features } from "@/components/site/Features";
import { Hero } from "@/components/site/Hero";
import { HowToOrder } from "@/components/site/HowToOrder";
import { InstagramSection } from "@/components/site/InstagramSection";
import { Layout } from "@/components/site/Layout";
import { ProductGrid } from "@/components/site/ProductGrid";
import { Section } from "@/components/site/Section";
import { Testimonials } from "@/components/site/Testimonials";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const title = "ELITE KITS | Premium Football Jerseys & Kits in Tanzania";
const description =
  "Shop premium football jerseys and kits in Tanzania. Club, national team and retro football shirts at affordable prices. Order on WhatsApp: 0617304403.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "football jerseys Tanzania, football kits Tanzania, football jerseys Dar es Salaam, affordable football jerseys Tanzania, football shirts Tanzania, ELITE KITS Tanzania",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Store",
          name: "ELITE KITS",
          description,
          telephone: "+255617304403",
          address: { "@type": "PostalAddress", addressCountry: "TZ" },
          areaServed: "Tanzania",
          sameAs: ["https://www.instagram.com/ELITE_KITS/"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <Layout>
      <Hero />

      <Section
        eyebrow="Featured"
        title="The Elite Collection"
        intro="Our sharpest jerseys — picked for fit, fabric and pure football presence."
      >
        <ProductGrid items={featured} showControls={false} />
        <div className="mt-10">
          <Button variant="elite" size="xl" asChild>
            <Link to="/jerseys">View All Jerseys</Link>
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="New Arrivals"
        title="Fresh off the drop"
        intro="The latest jerseys added to the ELITE KITS rail."
      >
        <ProductGrid items={newArrivals} showControls={false} />
      </Section>

      <Features />
      <HowToOrder />

      <Section eyebrow="About Elite Kits" title="For those who live the game">
        <div className="grid gap-8 lg:grid-cols-2">
          <p className="text-sm leading-relaxed text-muted-foreground">
            ELITE KITS was built in Tanzania for football lovers who want to represent their
            favourite clubs, nations and players with confidence and style. We select jerseys we
            would wear ourselves — the fits, the colours, the classics worth keeping.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            No complicated checkout, no pressure. Pick your jersey, tell us your size, and we
            handle the rest over WhatsApp. Football is culture here, and your kit should look the
            part on the pitch and on the street.
          </p>
        </div>
      </Section>

      <InstagramSection />
      <Testimonials />
      <FAQ />
      <Contact />
    </Layout>
  );
}
