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
import jerseyLiverpool from "@/assets/jersey-liverpool.jpg";
import jerseyBayern from "@/assets/jersey-bayern.jpg";
import jerseyInterMiami from "@/assets/jersey-inter-miami.jpg";
import jerseyAlNassr from "@/assets/jersey-al-nassr.jpg";
import jerseyManUnited from "@/assets/jersey-man-united.jpg";
import jerseyArsenal from "@/assets/jersey-arsenal.jpg";
import jerseyChelsea from "@/assets/jersey-chelsea.jpg";
import jerseyPsg from "@/assets/jersey-psg.jpg";
import jerseyInterMilan from "@/assets/jersey-inter-milan.jpg";
import jerseyJuventus from "@/assets/jersey-juventus.jpg";
import jerseyDortmund from "@/assets/jersey-dortmund.jpg";
import jerseyTottenham from "@/assets/jersey-tottenham.jpg";
import jerseyAtletico from "@/assets/jersey-atletico.jpg";

/**
 * EDIT YOUR CATALOGUE HERE.
 * Add, remove or edit products in the `products` array below.
 * To add a photo: drop the image in `src/assets/` and import it at the top.
 * Every jersey is priced at JERSEY_PRICE (TSh 15,000).
 */

export type CategoryId = "club" | "national" | "retro" | "kits" | "new";

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

/** Single source of truth for pricing — change it here to update the whole store. */
export const JERSEY_PRICE = 15000;

export const ALL_SIZES = ["S", "M", "L", "XL", "XXL"] as const;
const SIZES = ["S", "M", "L", "XL", "XXL"];

export const categories: { id: "all" | CategoryId; label: string }[] = [
  { id: "all", label: "All Jerseys" },
  { id: "club", label: "Club Jerseys" },
  { id: "national", label: "National Teams" },
  { id: "retro", label: "Retro Jerseys" },
  { id: "kits", label: "Football Kits" },
  { id: "new", label: "New Arrivals" },
];

type Draft = Omit<Product, "price" | "sizes" | "inStock"> & {
  sizes?: string[];
  inStock?: boolean;
};

const drafts: Draft[] = [
  // ===== NATIONAL TEAMS =====
  {
    id: "brazil-home",
    name: "Brazil Home Jersey",
    team: "Brazil",
    type: "National Team Home 25/26",
    image: jersey2,
    categories: ["national", "new"],
    description:
      "The iconic canary yellow with green trim — the most famous jersey in world football. Soft, quick-dry fabric with a clean modern cut.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-10",
  },
  {
    id: "argentina-home",
    name: "Argentina Home Jersey",
    team: "Argentina",
    type: "National Team Home 25/26",
    image: jerseyArgentina,
    categories: ["national", "new"],
    description:
      "Sky blue and white stripes with three gold World Cup stars. The jersey of champions — lightweight, breathable and unmistakable.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-11",
  },
  {
    id: "france-home",
    name: "France Home Jersey",
    team: "France",
    type: "National Team Home 25/26",
    image: jerseyFrance,
    categories: ["national", "new"],
    description:
      "Deep navy blue with subtle gold detail and two World Cup stars. A modern, elegant look for Les Bleus.",
    isNew: true,
    addedAt: "2026-08-11",
  },
  {
    id: "england-home",
    name: "England Home Jersey",
    team: "England",
    type: "National Team Home 25/26",
    image: jerseyEngland,
    categories: ["national"],
    description:
      "Clean white with navy trim and the three lions crest. A timeless national look built for the pitch and the terraces.",
    addedAt: "2026-07-20",
  },
  {
    id: "germany-home",
    name: "Germany Home Jersey",
    team: "Germany",
    type: "National Team Home 25/26",
    image: jerseyGermany,
    categories: ["national"],
    description:
      "Classic white with black and red trim and four World Cup stars. Sharp, disciplined and forever competitive.",
    addedAt: "2026-07-15",
  },
  {
    id: "portugal-home",
    name: "Portugal Home Jersey",
    team: "Portugal",
    type: "National Team Home 25/26",
    image: jerseyPortugal,
    categories: ["national", "new"],
    description:
      "Bold crimson red with green and gold accents. Worn by a generation of champions — striking from the first whistle.",
    isNew: true,
    addedAt: "2026-08-09",
  },

  // ===== CLUB TEAMS =====
  {
    id: "man-city-home",
    name: "Manchester City Home Jersey",
    team: "Manchester City",
    type: "Home Jersey 25/26",
    image: jersey5,
    categories: ["club", "new"],
    description:
      "Clean sky blue jersey with a modern athletic cut. Light on the shoulders, heavy on presence.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-12",
  },
  {
    id: "liverpool-home",
    name: "Liverpool Home Jersey",
    team: "Liverpool",
    type: "Home Jersey 25/26",
    image: jerseyLiverpool,
    categories: ["club", "new"],
    description:
      "The famous Anfield red with crisp white trim. Bold, classic and made for European nights.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-12",
  },
  {
    id: "bayern-home",
    name: "Bayern Munich Home Jersey",
    team: "Bayern Munich",
    type: "Home Jersey 25/26",
    image: jerseyBayern,
    categories: ["club", "new"],
    description:
      "Bavarian red with sharp white detailing. Clean German engineering in jersey form.",
    isNew: true,
    addedAt: "2026-08-12",
  },
  {
    id: "inter-miami-home",
    name: "Inter Miami Home Jersey",
    team: "Inter Miami",
    type: "Home Jersey 25/26",
    image: jerseyInterMiami,
    categories: ["club", "new"],
    description:
      "Signature soft pink with black accents. The most talked-about jersey in world football right now.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-12",
  },
  {
    id: "al-nassr-home",
    name: "Al Nassr Home Jersey",
    team: "Al Nassr",
    type: "Home Jersey 25/26",
    image: jerseyAlNassr,
    categories: ["club", "new"],
    description:
      "Bright yellow with deep blue stripes. Saudi Pro League colours worn by a global icon.",
    isNew: true,
    addedAt: "2026-08-12",
  },
  {
    id: "real-madrid-home",
    name: "Real Madrid Home Jersey",
    team: "Real Madrid",
    type: "Home Jersey 25/26",
    image: jersey3,
    categories: ["club"],
    description:
      "Pure white with silver detailing. A minimal, premium jersey that carries the weight of European nights.",
    featured: true,
    addedAt: "2026-07-10",
  },
  {
    id: "barcelona-home",
    name: "FC Barcelona Home Jersey",
    team: "FC Barcelona",
    type: "Home Jersey 25/26",
    image: jersey1,
    categories: ["club", "new"],
    description:
      "Classic blaugrana blue and crimson stripes. Lightweight breathable fabric built for match day heat and everyday street style.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-01",
  },
  {
    id: "man-united-home",
    name: "Manchester United Home Jersey",
    team: "Manchester United",
    type: "Home Jersey 25/26",
    image: jerseyManUnited,
    categories: ["club", "new"],
    description:
      "Old Trafford red with a black collar and cuffs. A jersey that never goes out of style.",
    isNew: true,
    addedAt: "2026-08-12",
  },
  {
    id: "arsenal-home",
    name: "Arsenal Home Jersey",
    team: "Arsenal",
    type: "Home Jersey 25/26",
    image: jerseyArsenal,
    categories: ["club", "new"],
    description:
      "Red body with white sleeves — the Gunners' unmistakable look, cut for comfort in the Dar heat.",
    isNew: true,
    addedAt: "2026-08-12",
  },
  {
    id: "chelsea-home",
    name: "Chelsea Home Jersey",
    team: "Chelsea",
    type: "Home Jersey 25/26",
    image: jerseyChelsea,
    categories: ["club", "new"],
    description:
      "Deep Stamford Bridge blue with clean white trim. Simple, sharp and always in demand.",
    isNew: true,
    addedAt: "2026-08-12",
  },
  {
    id: "psg-home",
    name: "Paris Saint-Germain Home Jersey",
    team: "Paris Saint-Germain",
    type: "Home Jersey 25/26",
    image: jerseyPsg,
    categories: ["club", "new"],
    description:
      "Navy with the iconic centre red stripe. Parisian style with serious football pedigree.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-12",
  },
  {
    id: "ac-milan-home",
    name: "AC Milan Home Jersey",
    team: "AC Milan",
    type: "Home Jersey 25/26",
    image: jersey4,
    categories: ["club"],
    description:
      "Iconic red and black stripes with a sharp v-neck collar. Timeless football style with a tailored fit.",
    addedAt: "2026-06-22",
  },
  {
    id: "inter-milan-home",
    name: "Inter Milan Home Jersey",
    team: "Inter Milan",
    type: "Home Jersey 25/26",
    image: jerseyInterMilan,
    categories: ["club", "new"],
    description:
      "Black and blue Nerazzurri stripes. Bold on the pitch and even better on the street.",
    isNew: true,
    addedAt: "2026-08-12",
  },
  {
    id: "juventus-home",
    name: "Juventus Home Jersey",
    team: "Juventus",
    type: "Home Jersey 25/26",
    image: jerseyJuventus,
    categories: ["club", "new"],
    description:
      "The legendary black and white stripes of the Old Lady. Clean, classic, unmistakable.",
    isNew: true,
    addedAt: "2026-08-12",
  },
  {
    id: "dortmund-home",
    name: "Borussia Dortmund Home Jersey",
    team: "Borussia Dortmund",
    type: "Home Jersey 25/26",
    image: jerseyDortmund,
    categories: ["club", "new"],
    description:
      "Electric yellow with black trim — the brightest jersey in the Bundesliga.",
    isNew: true,
    addedAt: "2026-08-12",
  },
  {
    id: "tottenham-home",
    name: "Tottenham Hotspur Home Jersey",
    team: "Tottenham Hotspur",
    type: "Home Jersey 25/26",
    image: jerseyTottenham,
    categories: ["club", "new"],
    description:
      "Crisp white with navy trim. Clean lines, premium feel, easy to wear anywhere.",
    isNew: true,
    addedAt: "2026-08-12",
  },
  {
    id: "atletico-madrid-home",
    name: "Atlético Madrid Home Jersey",
    team: "Atlético Madrid",
    type: "Home Jersey 25/26",
    image: jerseyAtletico,
    categories: ["club", "new"],
    description:
      "Red and white stripes with navy sleeves. Built for fans who love a hard-working team.",
    isNew: true,
    addedAt: "2026-08-12",
  },

  // ===== RETRO & KITS =====
  {
    id: "retro-green-90s",
    name: "Retro '90s Green Jersey",
    team: "Vintage Collection",
    type: "Retro Jersey",
    image: jersey6,
    categories: ["retro"],
    description:
      "A faithful throwback to the nineties — collar, fade stripes and a relaxed cut. For the fans who remember.",
    featured: true,
    addedAt: "2026-05-14",
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: "navy-full-kit",
    name: "Navy Full Football Kit",
    team: "Elite Kits",
    type: "Jersey + Shorts + Socks",
    image: jersey7,
    categories: ["kits"],
    description:
      "Complete navy kit: jersey, matching shorts and socks. Ready for your team, your league, your Sunday game.",
    addedAt: "2026-06-02",
  },
  {
    id: "black-gold-elite",
    name: "Black & Gold Elite Jersey",
    team: "Elite Kits Signature",
    type: "Limited Jersey",
    image: jersey8,
    categories: ["club", "new"],
    description:
      "Our signature black and gold jersey. Understated, expensive-looking and made to be worn far beyond the pitch.",
    isNew: true,
    featured: true,
    addedAt: "2026-08-08",
  },
];

export const products: Product[] = drafts.map((d) => ({
  ...d,
  price: JERSEY_PRICE,
  sizes: d.sizes ?? SIZES,
  inStock: d.inStock ?? true,
}));

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const formatPrice = (price: number = JERSEY_PRICE) =>
  `TSh ${price.toLocaleString("en-US")}`;
