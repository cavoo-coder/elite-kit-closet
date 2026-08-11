import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-border py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {(eyebrow || title) && (
          <header className="mb-10 max-w-2xl lg:mb-14">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 className="display mt-3 text-3xl leading-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}