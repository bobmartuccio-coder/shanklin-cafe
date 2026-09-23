import { Link } from "@tanstack/react-router";
import { Clock3, Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const links = [
  { to: "/menu" as const, label: "Menu" },
  { to: "/story" as const, label: "Our story" },
  { to: "/visit" as const, label: "Visit" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="site-container flex h-20 items-center justify-between gap-6">
        <Link to="/" className="font-display text-[1.7rem] font-semibold leading-none text-foreground">
          Shanklin
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="nav-link"
              activeProps={{ className: "nav-link nav-link-active" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild size="lg">
            <Link to="/book">Book a table</Link>
          </Button>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open ? (
        <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm font-semibold uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="mt-4">
              <Link to="/book" onClick={() => setOpen(false)}>Book a table</Link>
            </Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="site-container grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="font-display text-4xl font-semibold">Shanklin</Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-background/70">
            A neighbourhood cafe serving layered brunch, thoughtful coffee and long, easy mornings in Hawthorn East.
          </p>
          <a href="https://www.instagram.com/shanklincafe/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
            <Instagram className="size-4" /> Instagram
          </a>
        </div>
        <div>
          <p className="eyebrow text-accent">Find us</p>
          <address className="mt-5 space-y-3 text-sm not-italic text-background/75">
            <p className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0" />500 Tooronga Rd<br />Hawthorn East VIC 3123</p>
            <a href="tel:+61398827549" className="flex items-center gap-3"><Phone className="size-4" />(03) 9882 7549</a>
          </address>
        </div>
        <div>
          <p className="eyebrow text-accent">Open daily</p>
          <p className="mt-5 flex items-center gap-3 text-sm text-background/75"><Clock3 className="size-4" />7:00am — 3:00pm</p>
          <div className="mt-7 flex gap-5 text-sm">
            <Link to="/menu">Menu</Link><Link to="/visit">Visit</Link><Link to="/book">Book</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="site-container flex flex-col gap-2 py-5 text-xs text-background/50 sm:flex-row sm:justify-between">
          <p>© 2026 Shanklin Cafe</p><p>Made for slow mornings.</p>
        </div>
      </div>
    </footer>
  );
}