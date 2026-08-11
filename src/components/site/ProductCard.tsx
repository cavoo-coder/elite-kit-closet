import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice, type Product } from "@/data/products";
import { orderMessage, whatsappLink } from "@/lib/business";
import { toast } from "sonner";

export function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (product: Product) => void;
}) {
  const { addItem, setOpen } = useCart();

  const defaultSize = product.sizes[1] ?? product.sizes[0] ?? "M";

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors duration-300 hover:border-primary/50">
      <button
        type="button"
        onClick={() => onOpen(product)}
        aria-label={`View details for ${product.name}`}
        className="relative block aspect-4/5 overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={`${product.team} ${product.type} football jersey — ELITE KITS Tanzania`}
          loading="lazy"
          width={900}
          height={1100}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-sm bg-primary px-2 py-1 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-primary-foreground">
            New
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="min-w-0">
          <p className="eyebrow">{product.team}</p>
          <h3 className="mt-1 truncate text-base font-semibold tracking-wide">{product.name}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{product.type}</p>
        </div>

        <p className="display text-lg text-primary">{formatPrice(product.price)}</p>

        <p className="text-xs text-muted-foreground">
          Sizes: <span className="text-foreground">{product.sizes.join(" · ")}</span>
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <Button
            variant="gold"
            size="sm"
            onClick={() => {
              addItem({
                id: product.id,
                name: product.name,
                size: defaultSize,
                quantity: 1,
                price: product.price,
                image: product.image,
              });
              toast.success(`${product.name} (${defaultSize}) added to cart`);
              setOpen(true);
            }}
          >
            Add to Cart
          </Button>
          <Button variant="elite" size="sm" asChild>
            <a
              href={whatsappLink(
                orderMessage({
                  name: product.name,
                  size: defaultSize,
                  quantity: 1,
                  price: formatPrice(product.price),
                }),
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}