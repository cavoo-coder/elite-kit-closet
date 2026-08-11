/** Central place for ELITE KITS business details. */
export const BUSINESS = {
  name: "ELITE KITS",
  tagline: "Wear the Game. Live the Legacy.",
  phoneDisplay: "0617304403",
  phoneTel: "+255617304403",
  whatsapp: "255617304403",
  instagramHandle: "@ELITE_KITS",
  instagramUrl: "https://www.instagram.com/ELITE_KITS/",
  location: "Tanzania",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

export const orderMessage = (opts: {
  name: string;
  size?: string;
  quantity?: number;
  price?: string;
}) =>
  [
    `Hello ELITE KITS, I would like to order:`,
    `Jersey: ${opts.name}`,
    opts.size ? `Size: ${opts.size}` : null,
    opts.quantity ? `Quantity: ${opts.quantity}` : null,
    opts.price ? `Price: ${opts.price}` : null,
  ]
    .filter(Boolean)
    .join("\n");