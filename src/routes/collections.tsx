import { Link, createFileRoute } from "@tanstack/react-router";

import { Layout } from "@/components/site/Layout";
import { ProductGrid } from "@/components/site/ProductGrid";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const title = "Football Kit Collections | Club, National & Retro — ELITE KITS";
const description =
  "Explore ELITE KITS collections: The Elite Collection, new arrivals, retro football shirts and complete football kits available in Tanzania.";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/collections" },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <Layout>
      <div className="pt-24" />
      <Section
        eyebrow="Collections"
        title="The Elite Collection"
        intro="Our signature line — the jerseys we're proudest to put our name on."
      >
        <ProductGrid items={products.filter((p) => p.featured)} showControls={false} />
      </Section>

      <Section eyebrow="Retro" title="Vintage Classics">
        <ProductGrid
          items={products.filter((p) => p.categories.includes("retro"))}
          showControls={false}
        />
      </Section>

      <Section eyebrow="Full Kits" title="Complete Football Kits">
        <ProductGrid
          items={products.filter((p) => p.categories.includes("kits"))}
          showControls={false}
        />
        <div className="mt-10">
          <Button variant="elite" size="xl" asChild>
            <Link to="/jerseys">View All Jerseys</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}