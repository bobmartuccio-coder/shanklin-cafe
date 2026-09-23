import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import storyImage from "@/assets/shanklin-story.jpg";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/story")({
  head: () => ({ meta: [
    { title: "Our Story — Shanklin Cafe" },
    { name: "description", content: "Meet the two friends behind Shanklin Cafe and discover their warm approach to food, coffee and hospitality." },
    { property: "og:title", content: "Our Story — Shanklin Cafe" },
    { property: "og:description", content: "Two friends, a shared life in hospitality, and a welcoming Hawthorn East cafe." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: StoryPage,
});

function StoryPage() { return <main>
  <PageHero eyebrow="Our story" title="Run by two friends who never left hospitality." intro="Shanklin began with a simple idea: make the kind of neighbourhood cafe we always wanted to walk into — warm, generous and quietly obsessed with the details." />
  <section className="site-container grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
    <img src={storyImage} alt="Two friends working together behind the Shanklin coffee bar" width={1600} height={1104} className="aspect-[4/3] w-full rounded-lg object-cover" />
    <div className="lg:px-10"><p className="eyebrow">Built around people</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Good hospitality should feel effortless.</h2><div className="mt-7 space-y-5 text-base leading-8 text-muted-foreground"><p>We met in hospitality and never really left. Years spent behind coffee machines and across dining rooms taught us that the moments guests remember are rarely complicated: being greeted by name, a plate made with care, a coffee landing exactly when it should.</p><p>Our menu brings modern Australian brunch together with the Middle Eastern flavours we grew up around — labne, za’atar, harissa, slow braises and bright herbs.</p></div></div>
  </section>
  <section className="bg-clay"><div className="site-container grid gap-10 py-16 md:grid-cols-3 md:py-20"><div><p className="eyebrow">The coffee</p><h2 className="mt-3 font-display text-4xl">Dialled in daily.</h2></div><p className="text-sm leading-7 text-muted-foreground">Our single origins move with the harvest. You might find a bright Kenyan one week, a honeyed Panamanian the next, then something beautifully balanced from Guatemala.</p><p className="font-display text-2xl leading-relaxed">“Make every cup with intention, but never make it feel too serious.”</p></div></section>
  <section className="site-container py-20 text-center"><p className="eyebrow">Come say hello</p><h2 className="mx-auto mt-4 max-w-2xl font-display text-5xl">There’s always a seat for the neighbourhood.</h2><Button asChild size="lg" className="mt-8"><Link to="/visit">Plan your visit <ArrowRight /></Link></Button></section>
  </main>; }