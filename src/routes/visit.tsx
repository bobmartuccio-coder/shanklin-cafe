import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone, TramFront } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/visit")({
  head: () => ({ meta: [
    { title: "Visit Shanklin — Hawthorn East Cafe" },
    { name: "description", content: "Find Shanklin Cafe at 500 Tooronga Road, Hawthorn East. Open daily from 7am to 3pm." },
    { property: "og:title", content: "Visit Shanklin — Hawthorn East Cafe" },
    { property: "og:description", content: "Directions, opening hours and contact details for Shanklin Cafe." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: VisitPage,
});

function VisitPage() { return <main>
  <PageHero eyebrow="Visit us" title="Your corner table in Hawthorn East." intro="Find us on the corner of Tooronga Road, pouring from seven every morning. Walk in, take away, or book ahead for an easy weekend brunch." />
  <section className="site-container grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
    <div className="relative min-h-[430px] overflow-hidden rounded-lg bg-clay p-8 sm:p-12"><div className="absolute inset-0 map-pattern opacity-50" /><div className="relative flex h-full flex-col justify-between"><span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground"><MapPin /></span><div><p className="eyebrow">Shanklin Cafe</p><h2 className="mt-3 max-w-md font-display text-4xl sm:text-5xl">500 Tooronga Rd<br />Hawthorn East VIC 3123</h2><a className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4" href="https://maps.google.com/?q=500+Tooronga+Rd+Hawthorn+East+VIC+3123" target="_blank" rel="noreferrer">Open in maps <ArrowUpRight className="size-4" /></a></div></div></div>
    <div className="divide-y divide-border border-y border-border">
      <div className="flex gap-5 py-7"><Clock3 className="mt-1 size-5 shrink-0 text-accent-foreground" /><div><p className="eyebrow">Opening hours</p><p className="mt-3 text-lg">Monday – Sunday</p><p className="text-muted-foreground">7:00am – 3:00pm</p><p className="mt-2 text-sm text-muted-foreground">Kitchen closes at 2:30pm</p></div></div>
      <div className="flex gap-5 py-7"><Phone className="mt-1 size-5 shrink-0" /><div><p className="eyebrow">Call us</p><a href="tel:+61398827549" className="mt-3 block text-lg">(03) 9882 7549</a></div></div>
      <div className="flex gap-5 py-7"><Mail className="mt-1 size-5 shrink-0" /><div><p className="eyebrow">Email</p><a href="mailto:hello@shanklincafe.com.au" className="mt-3 block break-all text-lg">hello@shanklincafe.com.au</a></div></div>
      <div className="flex gap-5 py-7"><TramFront className="mt-1 size-5 shrink-0" /><div><p className="eyebrow">Getting here</p><p className="mt-3 leading-7 text-muted-foreground">We’re on the corner of Tooronga Road, a two-minute walk from the tram stop. Street parking is available along Tooronga Road and nearby side streets.</p></div></div>
    </div>
  </section>
  <section className="bg-foreground text-background"><div className="site-container flex flex-col items-start justify-between gap-8 py-14 sm:flex-row sm:items-center"><div><p className="eyebrow text-accent">Dine in · Takeaway · Delivery</p><h2 className="mt-2 font-display text-4xl">We’ll save you a seat.</h2><p className="mt-3 text-sm text-background/65">Everyone is welcome at Shanklin. Always.</p></div><Button asChild variant="secondary" size="lg"><Link to="/book">Book a table</Link></Button></div></section>
  </main>; }