import ownerImage from "@/assets/owner-kelvin.jpg";

export function Owner() {
  return (
    <section
      id="owner"
      aria-labelledby="owner-heading"
      className="relative overflow-hidden border-b border-border bg-card/40 py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/0.10),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16 lg:px-8">
        <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/10 blur-xl" />
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-background shadow-2xl">
            <img
              src={ownerImage}
              alt="Kelvin, founder and owner of ELITE KITS"
              width={900}
              height={1100}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>
        </div>

        <div>
          <p className="eyebrow">Meet the Owner</p>
          <h2
            id="owner-heading"
            className="display mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl"
          >
            ELITE KITS
          </h2>
          <p className="mt-4 text-lg font-medium text-primary">
            Founded &amp; Owned by Kelvin
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            “Bringing quality football jerseys closer to every football fan.”
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Built in Tanzania for supporters who want the real match-day look — honest
            pricing, genuine quality and personal service on every single order.
          </p>
        </div>
      </div>
    </section>
  );
}
