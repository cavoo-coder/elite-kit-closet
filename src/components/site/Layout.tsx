import type { ReactNode } from "react";

import { Cart } from "./Cart";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <Cart />
    </div>
  );
}