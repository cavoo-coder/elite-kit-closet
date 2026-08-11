import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { formatPrice, products } from "@/data/products";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((p) =>
        [p.name, p.team, p.type].join(" ").toLowerCase().includes(q),
      )
      .slice(0, 6);
  }, [query]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-border bg-popover">
        <DialogHeader>
          <DialogTitle className="display text-lg">Search Jerseys</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-3 border-b border-border pb-3">
          <Search className="size-4 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by team, jersey or type…"
            aria-label="Search jerseys"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-72 overflow-y-auto">
          {query && results.length === 0 && (
            <p className="py-6 text-center text-sm text-muted-foreground">
              No jerseys found. Contact ELITE KITS to request a specific team.
            </p>
          )}
          <ul>
            {results.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  onClick={() => {
                    onOpenChange(false);
                    setQuery("");
                    void navigate({ to: "/jerseys", search: { q: p.name } });
                  }}
                  className="flex w-full items-center gap-3 rounded-md p-2 text-left transition-colors hover:bg-secondary"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-14 w-12 rounded object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{p.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {p.team} · {formatPrice(p.price)}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}