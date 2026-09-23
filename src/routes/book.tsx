import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/book")({
  head: () => ({ meta: [
    { title: "Book a Table — Shanklin Cafe" },
    { name: "description", content: "Reserve a table for breakfast or brunch at Shanklin Cafe in Hawthorn East." },
    { property: "og:title", content: "Book a Table — Shanklin Cafe" },
    { property: "og:description", content: "Choose your date, time and party size, then hold your table at Shanklin." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: BookPage,
});

const times = Array.from({ length: 15 }, (_, index) => { const total = 7 * 60 + index * 30; const hour = Math.floor(total / 60); const minute = total % 60; const suffix = hour >= 12 ? "pm" : "am"; const displayHour = hour > 12 ? hour - 12 : hour; return `${displayHour}:${minute.toString().padStart(2, "0")}${suffix}`; });
type FormData = { date: string; time: string; guests: string; name: string; email: string; phone: string; card: string; expiry: string; cvc: string };

function BookPage() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [form, setForm] = useState<FormData>({ date: "", time: "", guests: "2", name: "", email: "", phone: "", card: "", expiry: "", cvc: "" });
  const update = (key: keyof FormData, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const today = new Date().toISOString().slice(0, 10);
  const proceed = () => { if (!form.date || !form.time || !form.name.trim() || !form.email.includes("@") || !form.phone.trim()) { setError("Please complete every field with valid contact details."); return; } setError(""); setStep(2); };
  const confirm = () => { if (form.card.replace(/\s/g, "").length < 12 || !form.expiry || form.cvc.length < 3) { setError("Please enter valid payment details to hold your table."); return; } setError(""); setReference(`SHK-${crypto.randomUUID().slice(0, 6).toUpperCase()}`); setStep(3); };
  return <main className="bg-secondary py-12 sm:py-20"><div className="site-container max-w-5xl">
    <div className="mb-10 text-center"><p className="eyebrow">Reservations</p><h1 className="mt-4 font-display text-5xl sm:text-6xl">Hold your table.</h1><p className="mx-auto mt-4 max-w-xl text-muted-foreground">A $10 per guest hold secures your booking and is deducted from your final bill.</p></div>
    <ol className="mx-auto mb-10 flex max-w-xl items-center justify-between" aria-label="Booking progress">{["Details", "Payment", "Confirmed"].map((label, index) => <li key={label} className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wide ${step >= index + 1 ? "text-foreground" : "text-muted-foreground/50"}`}><span className={`flex size-7 items-center justify-center rounded-full ${step >= index + 1 ? "bg-primary text-primary-foreground" : "border border-border"}`}>{step > index + 1 ? <Check className="size-3" /> : index + 1}</span><span className="hidden sm:inline">{label}</span></li>)}</ol>
    <div className="mx-auto max-w-2xl rounded-lg border border-border bg-background p-6 shadow-sm sm:p-10">
      {step === 1 ? <div><h2 className="font-display text-3xl">Choose your morning</h2><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Date"><Input type="date" min={today} value={form.date} onChange={(e) => update("date", e.target.value)} /></Field><Field label="Guests"><select className="form-select" value={form.guests} onChange={(e) => update("guests", e.target.value)}>{Array.from({length:8},(_,i)=><option key={i+1} value={i+1}>{i+1} {i === 0 ? "guest" : "guests"}</option>)}</select></Field><div className="sm:col-span-2"><Label>Time</Label><div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">{times.map((time) => <Button key={time} type="button" variant={form.time === time ? "default" : "outline"} className="px-2" onClick={() => update("time", time)}>{time}</Button>)}</div></div><Field label="Name"><Input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></Field><Field label="Phone"><Input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="0400 000 000" /></Field><div className="sm:col-span-2"><Field label="Email"><Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></Field></div></div>{error ? <p className="mt-5 text-sm text-destructive" role="alert">{error}</p> : null}<Button size="lg" className="mt-7 w-full" onClick={proceed}>Continue to payment <ChevronRight /></Button></div> : null}
      {step === 2 ? <div><h2 className="font-display text-3xl">Secure your booking</h2><div className="mt-6 rounded-md bg-secondary p-5"><div className="flex justify-between text-sm"><span>{form.guests} guests · {form.date} · {form.time}</span><strong>${Number(form.guests) * 10}.00</strong></div><p className="mt-2 text-xs text-muted-foreground">This hold is deducted from your final bill.</p></div><div className="mt-7 space-y-5"><Field label="Card number"><Input inputMode="numeric" value={form.card} maxLength={19} onChange={(e) => update("card", e.target.value.replace(/[^0-9 ]/g, ""))} placeholder="4242 4242 4242 4242" /></Field><div className="grid grid-cols-2 gap-4"><Field label="Expiry"><Input value={form.expiry} maxLength={5} onChange={(e) => update("expiry", e.target.value)} placeholder="MM/YY" /></Field><Field label="CVC"><Input inputMode="numeric" value={form.cvc} maxLength={4} onChange={(e) => update("cvc", e.target.value.replace(/\D/g, ""))} placeholder="123" /></Field></div></div><p className="mt-5 flex gap-2 text-xs leading-5 text-muted-foreground"><ShieldCheck className="size-4 shrink-0" />Demo checkout — no payment will be processed.</p>{error ? <p className="mt-4 text-sm text-destructive" role="alert">{error}</p> : null}<div className="mt-7 flex gap-3"><Button variant="outline" size="lg" onClick={() => { setError(""); setStep(1); }}><ChevronLeft /> Back</Button><Button size="lg" className="flex-1" onClick={confirm}>Hold for ${Number(form.guests) * 10}.00</Button></div></div> : null}
      {step === 3 ? <div className="py-5 text-center"><span className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check /></span><p className="eyebrow mt-7">Booking confirmed</p><h2 className="mt-3 font-display text-4xl">See you soon, {form.name.split(" ")[0]}.</h2><p className="mx-auto mt-4 max-w-md leading-7 text-muted-foreground">Your table for {form.guests} is held for {form.time} on {form.date}. We’ve sent the details to {form.email}.</p><div className="mx-auto mt-7 max-w-xs rounded-md bg-secondary p-5"><p className="text-xs uppercase tracking-wide text-muted-foreground">Reference</p><p className="mt-1 font-display text-2xl">{reference}</p></div><Button asChild variant="outline" className="mt-8"><Link to="/">Back to home</Link></Button></div> : null}
    </div>
  </div></main>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <div><Label>{label}</Label><div className="mt-2">{children}</div></div>; }