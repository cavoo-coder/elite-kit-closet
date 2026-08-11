import { Link } from "@tanstack/react-router";

import { BUSINESS } from "@/lib/business";

const links = [
  { to: "/", label: "Home" },
  { to: "/jerseys", label: "Jerseys" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="display block text-2xl tracking-[0.16em]">
              ELITE<span className="text-primary"> KITS</span>
            </span>
            <p className="mt-3 text-sm text-muted-foreground">{BUSINESS.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {BUSINESS.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 ELITE KITS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}