import { createFileRoute } from "@tanstack/react-router";

import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { HowToOrder } from "@/components/site/HowToOrder";
import { Layout } from "@/components/site/Layout";

const title = "Contact ELITE KITS | Order Football Jerseys in Tanzania";
const description =
  "Contact ELITE KITS to order football jerseys in Tanzania. Call or WhatsApp 0617304403, or message @ELITE_KITS on Instagram.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <div className="pt-24" />
      <Contact />
      <HowToOrder />
      <FAQ />
    </Layout>
  );
}