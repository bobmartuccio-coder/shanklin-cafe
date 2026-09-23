import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, aside }: { eyebrow: string; title: string; intro: string; aside?: ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="site-container grid gap-10 py-16 md:grid-cols-[1fr_0.7fr] md:items-end md:py-24">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
        </div>
        <div>
          <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">{intro}</p>
          {aside}
        </div>
      </div>
    </section>
  );
}