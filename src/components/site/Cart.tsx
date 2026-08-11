import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { whatsappLink } from "@/lib/business";

export function Cart() {
  const { items, isOpen, setOpen, removeItem, updateQuantity, total, clear } = useCart();

  const checkoutMessage = [
    "Hello ELITE KITS, I would like to order:",
    ...items.map(
      (i) =>
        `\nJersey: ${i.name}\nSize: ${i.size}\nQuantity: ${i.quantity}\nPrice: ${formatPrice(
          i.price * i.quantity,
        )}`,
    ),
    `\nTotal: ${formatPrice(total)}`,
  ].join("");

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col border-border bg-background sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="display text-lg">Your Cart</SheetTitle>
          <SheetDescription className="text-xs">
            Checkout is completed on WhatsApp with ELITE KITS.
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <ShoppingBag className="size-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-4 overflow-y-auto py-4">
              {items.map((i) => (
                <li key={`${i.id}-${i.size}`} className="flex gap-3 border-b border-border pb-4">
                  <img
                    src={i.image}
                    alt={i.name}
                    loading="lazy"
                    className="h-24 w-20 shrink-0 rounded-sm object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{i.name}</p>
                        <p className="text-xs text-muted-foreground">Size {i.size}</p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${i.name} size ${i.size}`}
                        onClick={() => removeItem(i.id, i.size)}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center rounded-sm border border-border">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="grid h-8 w-8 place-items-center text-muted-foreground hover:text-primary"
                          onClick={() => updateQuantity(i.id, i.size, i.quantity - 1)}
                        >
                          <Minus className="size-3" />
                        </button>
                        <span className="w-8 text-center text-xs">{i.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="grid h-8 w-8 place-items-center text-muted-foreground hover:text-primary"
                          onClick={() => updateQuantity(i.id, i.size, i.quantity + 1)}
                        >
                          <Plus className="size-3" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {formatPrice(i.price * i.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Total</span>
                <span className="display text-xl text-primary">{formatPrice(total)}</span>
              </div>
              <Button variant="whatsapp" size="xl" className="w-full" asChild>
                <a
                  href={whatsappLink(checkoutMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Checkout on WhatsApp
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="w-full" onClick={clear}>
                Clear cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}