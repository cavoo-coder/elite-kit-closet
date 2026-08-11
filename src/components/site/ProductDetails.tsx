import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { formatPrice, type Product } from "@/data/products";
import { BUSINESS, orderMessage, whatsappLink } from "@/lib/business";

export function ProductDetails({
  product,
  onOpenChange,
}: {
  product: Product | null;
  onOpenChange: (open: boolean) => void;
}) {
  const { addItem, setOpen } = useCart();
  const [size, setSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setSize(product.sizes[1] ?? product.sizes[0] ?? "M");
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  return (
    <Dialog open={!!product} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-4xl overflow-y-auto border-border bg-popover p-0">
        <div className="grid gap-0 md:grid-cols-2">
          <img
            src={product.image}
            alt={`${product.team} ${product.type} football jersey`}
            width={900}
            height={1100}
            className="h-64 w-full object-cover md:h-full"
          />

          <div className="flex flex-col gap-5 p-6 md:p-8">
            <div>
              <p className="eyebrow">{product.team}</p>
              <DialogTitle className="display mt-2 text-2xl leading-tight">
                {product.name}
              </DialogTitle>
              <p className="mt-1 text-sm text-muted-foreground">{product.type}</p>
              <p className="display mt-3 text-2xl text-primary">{formatPrice(product.price)}</p>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

            <div>
              <p className="eyebrow mb-2">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={`h-10 w-12 rounded-sm border text-sm font-medium transition-colors ${
                      size === s
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground hover:border-primary"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Need help choosing your size?{" "}
                <a
                  href={whatsappLink(
                    `Hello ELITE KITS, I need help choosing a size for: ${product.name}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  Contact ELITE KITS.
                </a>
              </p>
            </div>

            <div>
              <p className="eyebrow mb-2">Quantity</p>
              <div className="inline-flex items-center rounded-sm border border-border">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  className="grid h-10 w-10 place-items-center text-muted-foreground hover:text-primary"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  className="grid h-10 w-10 place-items-center text-muted-foreground hover:text-primary"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="size-4" />
                </button>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <Button
                variant="gold"
                size="xl"
                onClick={() => {
                  addItem({
                    id: product.id,
                    name: product.name,
                    size,
                    quantity,
                    price: product.price,
                    image: product.image,
                  });
                  toast.success(`${product.name} (${size}) added to cart`);
                  onOpenChange(false);
                  setOpen(true);
                }}
              >
                Add to Cart
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href={whatsappLink(
                    orderMessage({
                      name: product.name,
                      size,
                      quantity,
                      price: formatPrice(product.price * quantity),
                    }),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order via WhatsApp
                </a>
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Call or WhatsApp {BUSINESS.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}