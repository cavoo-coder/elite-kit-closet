import { createFileRoute } from "@tanstack/react-router";

import { Layout } from "@/components/site/Layout";
import { ProductGrid } from "@/components/site/ProductGrid";
import { Section } from "@/components/site/Section";

const title = "Football Jerseys Tanzania | Shop All Kits — ELITE KITS";
const description =
  "Browse all football jerseys and kits available in Tanzania: club shirts, national teams, retro jerseys and full kits. Filter, sort and order on WhatsApp.";

export const Route = createFileRoute("/jerseys")({
  validateSearch: (search: Record<string, unknown>): { q?: string } =>
    typeof search["q"] === "string" && search["q"] ? { q: search["q"] } : {},
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/jerseys" },
    ],
    links: [{ rel: "canonical", href: "/jerseys" }],
  }),
  component: JerseysPage,
});

function JerseysPage() {
  const { q = "" } = Route.useSearch();

  return (
    <Layout>
      <div className="pt-24" />
      <Section
        eyebrow="Shop"
        title="All Jerseys"
        intro="Club jerseys, national teams, retro classics and full football kits — all priced in Tanzanian Shillings."
      >
        {q && (
          <p className="mb-6 text-sm text-muted-foreground">
            Showing results for <span className="text-primary">“{q}”</span>
          </p>
        )}
        <ProductGrid query={q} />
      </Section>
    </Layout>
  );
}