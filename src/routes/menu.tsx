import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/menu")({
  head: () => ({ meta: [
    { title: "All Day Menu — Shanklin Cafe" },
    { name: "description", content: "Explore Shanklin Cafe's all-day brunch menu and specialty coffee, served daily in Hawthorn East." },
    { property: "og:title", content: "All Day Menu — Shanklin Cafe" },
    { property: "og:description", content: "Modern Australian brunch with Middle Eastern warmth, served seven days." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: MenuPage,
});

const dishes = [
  ["Chilli Prawn Scramble", "$29", "Wild-caught banana prawns, soft scramble, feta, semi-dried tomato, fried shallot, smoked paprika.", "Popular"],
  ["Baked Eggs Shakshuka", "$27", "Slow-cooked spiced tomato, two baked eggs, Persian feta, coriander, charred sourdough.", "Popular · Vegetarian"],
  ["Lamb Benny", "$28", "15-hour braised lamb, poached eggs, potato rosti, harissa hollandaise, pickled onion.", "Popular"],
  ["Biscoff French Toast", "$28", "Brioche, Biscoff cream, caramelised banana, vanilla gelato, toasted hazelnut.", ""],
  ["Portobello Mushroom", "$27", "Garlic portobello, whipped goats curd, dukkah, poached egg, sourdough.", "Vegetarian"],
  ["Beirut Big Breakfast", "$29", "Eggs your way, halloumi, lamb sujuk, roast tomato, labne, za’atar sourdough.", ""],
  ["Pulled Pork & Rosti", "$27", "Twelve-hour pulled pork, crisp rosti, apple slaw, chipotle aioli.", "Popular"],
  ["Scotch Steak Sandwich", "$30", "Grilled scotch fillet, caramelised onion, gruyère, rocket, house steak sauce, fries.", "Popular"],
  ["Acai Superbowl", "$23", "Acai, banana, berries, house granola, coconut, honey drizzle.", "Vegan option"],
];

const drinks = [
  ["The Shanklin Flat White", "$5.50", "Double shot single origin, dialled in daily."],
  ["Cold Drip", "$7", "Filtered over six hours, served on an oversized block of ice."],
  ["Turkish De Latte", "$7", "Cardamom-spiced coffee, steamed milk and rose petal."],
];

function MenuItem({ item }: { item: string[] }) {
  return <article className="grid gap-2 border-t border-border py-7 sm:grid-cols-[1fr_auto] sm:gap-x-8">
    <div><div className="flex flex-wrap items-center gap-3"><h3 className="font-display text-2xl">{item[0]}</h3>{item[3] ? <span className="tag">{item[3]}</span> : null}</div><p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{item[2]}</p></div>
    <p className="font-display text-xl">{item[1]}</p>
  </article>;
}

function MenuPage() {
  return <main>
    <PageHero eyebrow="The menu" title="All day dining." intro="Modern Australian brunch with Middle Eastern warmth. Seasonal produce, bold flavours and the kind of plates worth lingering over." aside={<p className="mt-5 text-sm font-semibold">Served 7:00am—2:30pm · Seven days</p>} />
    <section className="site-container py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
        <div><p className="eyebrow">Breakfast & lunch</p><h2 className="mt-3 font-display text-4xl">From the kitchen</h2></div>
        <div>{dishes.map((item) => <MenuItem key={item[0]} item={item} />)}</div>
      </div>
    </section>
    <section className="bg-foreground text-background">
      <div className="site-container grid gap-12 py-16 lg:grid-cols-[0.35fr_1fr] lg:py-24">
        <div><p className="eyebrow text-accent">From the bar</p><h2 className="mt-3 font-display text-4xl">Coffee & drinks</h2><p className="mt-4 max-w-xs text-sm leading-6 text-background/65">Single-origin beans rotate through Kenya, Panama and Guatemala.</p></div>
        <div>{drinks.map((item) => <article key={item[0]} className="grid gap-2 border-t border-background/20 py-7 sm:grid-cols-[1fr_auto]"><div><h3 className="font-display text-2xl">{item[0]}</h3><p className="mt-2 text-sm text-background/65">{item[2]}</p></div><p className="font-display text-xl">{item[1]}</p></article>)}</div>
      </div>
    </section>
    <section className="site-container flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center"><div><p className="eyebrow">Your table is waiting</p><h2 className="mt-2 font-display text-3xl">Come hungry. Stay awhile.</h2></div><Button asChild size="lg"><Link to="/book">Book a table</Link></Button></section>
  </main>;
}