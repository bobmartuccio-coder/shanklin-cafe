import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star } from "lucide-react";

import heroImage from "@/assets/shanklin-hero.jpg";
import prawnImage from "@/assets/chilli-prawn-scramble.jpg";
import shakshukaImage from "@/assets/shakshuka.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Shanklin Cafe — Brunch in Hawthorn East" },
    { name: "description", content: "Slow-brewed single origin coffee and modern Australian brunch with Middle Eastern warmth in Hawthorn East." },
    { property: "og:title", content: "Shanklin Cafe — Brunch in Hawthorn East" },
    { property: "og:description", content: "A room that feels like a long Sunday. Brunch in Hawthorn East, poured the way it should be." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-foreground text-background">
        <img src={heroImage} alt="Flat white glowing in the morning light at Shanklin Cafe" width={1920} height={1280} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="site-container relative flex min-h-[calc(100vh-5rem)] flex-col justify-end pb-12 pt-24 sm:pb-16 lg:pb-20">
          <div className="rating-pill mb-7 w-fit"><span className="flex gap-0.5 text-accent" aria-hidden>{[1,2,3,4,5].map((n) => <Star key={n} className="size-3.5 fill-current" />)}</span><strong>4.6</strong><span>1,012 reviews</span></div>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.98] sm:text-7xl lg:text-[5.6rem]">The first pour, in golden morning light.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-background/80 sm:text-lg">Slow-brewed single origin, a menu built on layers of flavour, and a room that feels like a long Sunday. Brunch in Hawthorn East, poured the way it should be.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><Link to="/book">Book a table</Link></Button><Button asChild size="lg" variant="outline" className="border-background/50 bg-background/10 text-background hover:bg-background hover:text-foreground"><Link to="/menu">See the menu</Link></Button></div>
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">From our kitchen</p><h2 className="mt-4 font-display text-5xl sm:text-6xl">What we’re known for.</h2></div><Link to="/menu" className="inline-flex items-center gap-2 text-sm font-semibold">Explore the full menu <ArrowRight className="size-4" /></Link></div>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          <Dish image={prawnImage} name="Chilli Prawn Scramble" price="$29" copy="Wild-caught prawns, soft scramble, feta, smoked paprika." />
          <Dish image={shakshukaImage} name="Baked Eggs Shakshuka" price="$27" copy="Spiced tomato, Persian feta, coriander, charred sourdough." />
          <Dish image={heroImage} name="The Shanklin Flat White" price="$5.50" copy="Double shot single origin, dialled in daily." crop="object-[70%_65%]" />
        </div>
      </section>

      <section className="bg-clay"><div className="site-container py-20 md:py-28"><div className="grid gap-10 lg:grid-cols-[0.65fr_1fr]"><div><p className="eyebrow">Neighbourhood notes</p><h2 className="mt-4 font-display text-5xl">Kind words, from local tables.</h2><div className="mt-8 flex items-center gap-3"><strong className="font-display text-4xl">4.6</strong><div><div className="flex text-accent">★★★★★</div><p className="text-xs text-muted-foreground">1,012 Google reviews</p></div></div></div><div className="grid gap-5 sm:grid-cols-2"><Review quote="The Chilli Prawn Scramble was a nice surprise—prawns, feta and smoky chilli worked really well together." name="Jesse" /><Review quote="Warm service, excellent coffee and the kind of brunch menu where it’s impossible to choose badly." name="Mia" /></div></div></div></section>

      <section className="site-container py-20"><div className="grid overflow-hidden rounded-lg bg-primary text-primary-foreground lg:grid-cols-[1fr_0.7fr]"><div className="p-8 sm:p-12 lg:p-16"><p className="eyebrow text-accent">Weekend plans</p><h2 className="mt-4 font-display text-5xl">Hold your table.</h2><p className="mt-5 max-w-lg leading-7 text-primary-foreground/70">Book ahead for your next slow breakfast. A $10 per guest hold secures your table and comes off your final bill.</p><Button asChild size="lg" variant="secondary" className="mt-8"><Link to="/book">Book now <ArrowRight /></Link></Button></div><div className="flex min-h-64 items-end bg-accent p-8 text-accent-foreground sm:p-12"><div><MapPin className="mb-5 size-7"/><p className="font-display text-3xl">500 Tooronga Rd</p><p className="mt-2 text-sm">Hawthorn East VIC 3123</p><p className="mt-6 text-sm font-semibold">Open daily · 7:00am—3:00pm</p></div></div></div></section>
    </main>
  );
}

function Dish({ image, name, price, copy, crop = "" }: { image: string; name: string; price: string; copy: string; crop?: string }) { return <article><img src={image} alt={name} loading="lazy" width={1200} height={1200} className={`aspect-square w-full rounded-lg object-cover ${crop}`} /><div className="mt-5 flex items-baseline justify-between gap-4"><h3 className="font-display text-2xl">{name}</h3><span className="font-display text-xl">{price}</span></div><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></article>; }
function Review({ quote, name }: { quote: string; name: string }) { return <blockquote className="rounded-lg border border-border bg-background p-7"><div className="text-accent">★★★★★</div><p className="mt-5 font-display text-2xl leading-relaxed">“{quote}”</p><footer className="mt-7 flex items-center justify-between text-sm"><strong>{name}</strong><span className="tag">Verified Local Guide</span></footer></blockquote>; }
