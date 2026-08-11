import jersey1 from "@/assets/jersey-1.jpg";
import jersey2 from "@/assets/jersey-2.jpg";
import jersey3 from "@/assets/jersey-3.jpg";
import jersey4 from "@/assets/jersey-4.jpg";
import jersey5 from "@/assets/jersey-5.jpg";
import jersey6 from "@/assets/jersey-6.jpg";
import jersey7 from "@/assets/jersey-7.jpg";
import jersey8 from "@/assets/jersey-8.jpg";
import jerseyArgentina from "@/assets/jersey-argentina.jpg";
import jerseyFrance from "@/assets/jersey-france.jpg";
import jerseyEngland from "@/assets/jersey-england.jpg";
import jerseyGermany from "@/assets/jersey-germany.jpg";
import jerseyPortugal from "@/assets/jersey-portugal.jpg";

/**
 * EDIT YOUR CATALOGUE HERE.
 * Add, remove or edit products in the `products` array below.
 * To add a photo: drop the image in `src/assets/` and import it at the top.
 */

export type CategoryId =
  | "club"
  | "national"
  | "retro"
  | "kits"
  | "new";

export type Product = {
  id: string;
  name: string;
  team: string;
  type: string;
  price: number; // in TSh
  image: string;
  categories: CategoryId[];
  sizes: string[];
  description: string;
  isNew?: boolean;
  featured?: boolean;
  addedAt: string; // YYYY-MM-DD — used for "Newest" sorting
  inStock?: boolean;
};

export const ALL_SIZES = ["S", "M", "L", "XL", "XXL"] as const;

export const categories: { id: "all" | CategoryId; label: string }[] = [
  { id: "all", label: "All Jerseys" },
  { id: "club", label: "Club Jerseys" },
  { id: "national", label: "National Teams" },
  { id: "retro", label: "Retro Jerseys" },
  { id: "kits", label: "Football Kits" },
  { id: "new", label: "New Arrivals" },
];

export const products: Product[] = [
  // ===== NATIONAL TEAMS =====
  {
    id: "brazil-home",
    name: "Brazil Home Jersey",
    team: "Brazil",
    type: "National Team Home 25/26",
    price: 42000,
    image: jersey2,
    categories: ["national", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "The iconic canary yellow with green trim — the most famous jersey in world football. Soft, quick-dry fabric with a clean modern cut.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-10",
    inStock: true,
  },
  {
    id: "argentina-home",
    name: "Argentina Home Jersey",
    team: "Argentina",
    type: "National Team Home 25/26",
    price: 43000,
    image: jerseyArgentina,
    categories: ["national", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Sky blue and white stripes with three gold World Cup stars. The jersey of champions — lightweight, breathable and unmistakable.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-11",
    inStock: true,
  },
  {
    id: "france-home",
    name: "France Home Jersey",
    team: "France",
    type: "National Team Home 25/26",
    price: 43000,
    image: jerseyFrance,
    categories: ["national", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Deep navy blue with subtle gold detail and two World Cup stars. A modern, elegant look for Les Bleus.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-11",
    inStock: true,
  },
  {
    id: "england-home",
    name: "England Home Jersey",
    team: "England",
    type: "National Team Home 25/26",
    price: 42000,
    image: jerseyEngland,
    categories: ["national"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Clean white with navy trim and the three lions crest. A timeless national look built for the pitch and the terraces.",
    featured: true,
    addedAt: "2026-07-20",
    inStock: true,
  },
  {
    id: "germany-home",
    name: "Germany Home Jersey",
    team: "Germany",
    type: "National Team Home 25/26",
    price: 43000,
    image: jerseyGermany,
    categories: ["national"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Classic white with black and red trim and four World Cup stars. Sharp, disciplined and forever competitive.",
    addedAt: "2026-07-15",
    inStock: true,
  },
  {
    id: "portugal-home",
    name: "Portugal Home Jersey",
    team: "Portugal",
    type: "National Team Home 25/26",
    price: 44000,
    image: jerseyPortugal,
    categories: ["national", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Bold crimson red with green and gold accents. Worn by a generation of champions — striking from the first whistle.",
    isNew: true,
    addedAt: "2026-08-09",
    inStock: true,
  },

  // ===== CLUB TEAMS =====
  {
    id: "barcelona-home",
    name: "FC Barcelona Home Jersey",
    team: "FC Barcelona",
    type: "Home Jersey 25/26",
    price: 45000,
    image: jersey1,
    categories: ["club", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Classic blaugrana blue and crimson stripes. Lightweight breathable fabric built for match day heat and everyday street style.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-01",
    inStock: true,
  },
  {
    id: "real-madrid-home",
    name: "Real Madrid Home Jersey",
    team: "Real Madrid",
    type: "Home Jersey 25/26",
    price: 48000,
    image: jersey3,
    categories: ["club"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Pure white with silver detailing. A minimal, premium jersey that carries the weight of European nights.",
    featured: true,
    addedAt: "2026-07-10",
    inStock: true,
  },
  {
    id: "ac-milan-home",
    name: "AC Milan Home Jersey",
    team: "AC Milan",
    type: "Home Jersey",
    price: 45000,
    image: jersey4,
    categories: ["club"],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Iconic red and black stripes with a sharp v-neck collar. Timeless football style with a tailored fit.",
    addedAt: "2026-06-22",
    inStock: true,
  },
  {
    id: "man-city-home",
    name: "Manchester City Home Jersey",
    team: "Manchester City",
    type: "Home Jersey 25/26",
    price: 44000,
    image: jersey5,
    categories: ["club", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Clean sky blue jersey with a modern athletic cut. Light on the shoulders, heavy on presence.",
    isNew: true,
    addedAt: "2026-08-05",
    inStock: true,
  },

  // ===== RETRO & KITS =====
  {
    id: "retro-green-90s",
    name: "Retro '90s Green Jersey",
    team: "Vintage Collection",
    type: "Retro Jersey",
    price: 55000,
    image: jersey6,
    categories: ["retro"],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "A faithful throwback to the nineties — collar, fade stripes and a relaxed cut. For the fans who remember.",
    featured: true,
    addedAt: "2026-05-14",
    inStock: true,
  },
  {
    id: "navy-full-kit",
    name: "Navy Full Football Kit",
    team: "Elite Kits",
    type: "Jersey + Shorts + Socks",
    price: 85000,
    image: jersey7,
    categories: ["kits"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Complete navy kit: jersey, matching shorts and socks. Ready for your team, your league, your Sunday game.",
    addedAt: "2026-06-02",
    inStock: true,
  },
  {
    id: "black-gold-elite",
    name: "Black & Gold Elite Jersey",
    team: "Elite Kits Signature",
    type: "Limited Jersey",
    price: 65000,
    image: jersey8,
    categories: ["club", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Our signature black and gold jersey. Understated, expensive-looking and made to be worn far beyond the pitch.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-08",
    inStock: true,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const formatPrice = (price: number) =>
  `TSh ${price.toLocaleString("en-US")}`;