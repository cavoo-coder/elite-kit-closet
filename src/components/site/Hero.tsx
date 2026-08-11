import { Link } from "@tanstack/react-router";

import heroJersey from "@/assets/hero-jersey.jpg";
import { Button } from "@/components/ui/button";
import { orderMessage, whatsappLink } from "@/lib/business";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border pt-28 pb-16 lg:pt-40 lg:pb-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="fade-up">
          <p className="eyebrow">Premium Football Jerseys • Tanzania</p>
          <h1 className="display mt-5 text-4xl leading-[0.95] sm:text-6xl xl:text-7xl">
            Wear the Game.
            <br />
            <span className="text-primary">Live the Legacy.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Premium football jerseys and kits for those who don’t just watch the game — they live
            it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="gold" size="xl" asChild>
              <Link to="/jerseys">Shop Jerseys</Link>
            </Button>
            <Button variant="elite" size="xl" asChild>
              <a
                href={whatsappLink(
                  orderMessage({ name: "(tell us which jersey you want)" }),
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["Clubs", "Top European kits"],
              ["Nations", "World football"],
              ["Retro", "Classic legends"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="display text-sm text-primary">{k}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={heroJersey}
            alt="Premium white and gold football jersey from ELITE KITS Tanzania"
            width={1200}
            height={1504}
            className="relative mx-auto w-full max-w-md rounded-lg object-cover shadow-[var(--shadow-elite)]"
          />
        </div>
      </div>
    </section>
  );
}