import { useMemo, useState } from "react";

import { categories, products as allProducts, type CategoryId, type Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductDetails } from "./ProductDetails";

type Sort = "newest" | "price-asc" | "price-desc";

const sorts: { id: Sort; label: string }[] = [
  { id: "newest", label: "Newest" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
];

export function ProductGrid({
  initialCategory = "all",
  query = "",
  showControls = true,
  items,
}: {
  initialCategory?: "all" | CategoryId;
  query?: string;
  showControls?: boolean;
  items?: Product[];
}) {
  const [category, setCategory] = useState<"all" | CategoryId>(initialCategory);
  const [sort, setSort] = useState<Sort>("newest");
  const [selected, setSelected] = useState<Product | null>(null);

  const source = items ?? allProducts;

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = source.filter((p) => {
      const matchesCategory = category === "all" || p.categories.includes(category);
      const matchesQuery =
        !q || [p.name, p.team, p.type].join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return b.addedAt.localeCompare(a.addedAt);
    });
  }, [source, category, sort, query]);

  return (
    <div>
      {showControls && (
        <div className="mb-10 flex flex-col gap-5 border-b border-border pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 lg:mx-0 lg:flex-wrap lg:px-0">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={category === c.id}
                className={`shrink-0 rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                  category === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <label className="flex shrink-0 items-center gap-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-sm border border-border bg-card px-3 py-2 text-xs tracking-normal text-foreground outline-none focus:border-primary"
            >
              {sorts.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {visible.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted-foreground">
          No jerseys match your selection. Contact ELITE KITS to request a specific team.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setSelected} />
          ))}
        </div>
      )}

      <ProductDetails product={selected} onOpenChange={(open) => !open && setSelected(null)} />
    </div>
  );
}