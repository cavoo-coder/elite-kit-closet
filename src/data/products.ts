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
  {
    id: "royal-blue-home",
    name: "Royal Blue Home Jersey",
    team: "Blaugrana Club",
    type: "Home Jersey 25/26",
    price: 45000,
    image: jersey1,
    categories: ["club", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Classic club home jersey in deep blue and crimson. Lightweight breathable fabric built for match day heat and everyday street style.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-01",
    inStock: true,
  },
  {
    id: "canary-yellow-national",
    name: "Canary Yellow National Jersey",
    team: "Samba Nation",
    type: "National Team Home",
    price: 42000,
    image: jersey2,
    categories: ["national", "new"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Bold yellow with green trim — the most iconic look in world football. Soft, quick-dry fabric with a clean modern cut.",
    isNew: true,
    featured: true,
    addedAt: "2026-07-28",
    inStock: true,
  },
  {
    id: "all-white-royal",
    name: "All White Royal Jersey",
    team: "Los Blancos Club",
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
    id: "red-black-stripes",
    name: "Red & Black Stripe Jersey",
    team: "Rossoneri Club",
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
    id: "sky-blue-city",
    name: "Sky Blue City Jersey",
    team: "Citizens Club",
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