import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/_site/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Sitecraft" },
      { name: "description", content: "Website builds from $499. Care plan $99/mo. Custom automations & chatbots quoted on request." },
      { property: "og:title", content: "Pricing — Sitecraft" },
      { property: "og:description", content: "Transparent pricing for websites, care, and automations." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Website Build",
    price: "$499",
    period: "one-time",
    desc: "Launch a polished site fast. Perfect for new businesses and rebrands.",
    features: [
      "Up to 5 pages",
      "Mobile-first design",
      "SEO setup & metadata",
      "Contact form + calendar embed",
      "1 round of revisions",
      "Delivered in ~7 days",
    ],
    cta: "Book a call",
    href: "/book",
    highlight: false,
  },
  {
    name: "Care + Growth",
    price: "$99",
    period: "/month",
    desc: "Hosting, edits, monitoring, and small improvements every month.",
    features: [
      "Hosting & uptime monitoring",
      "Up to 1 hr of edits / month",
      "Monthly performance report",
      "Priority email support",
      "Cancel anytime",
    ],
    cta: "Book a call",
    href: "/book",
    highlight: true,
  },
  {
    name: "Automations & Chatbots",
    price: "Custom",
    period: "",
    desc: "AI assistants and end-to-end workflows scoped to your business.",
    features: [
      "Custom AI chatbot",
      "Workflow automations",
      "CRM, email, Stripe integrations",
      "Discovery + scoping included",
      "Quoted per project",
    ],
    cta: "Talk to us",
    href: "/book",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">Simple, honest pricing</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Start with a website. Add care. Layer in automations whenever you're ready.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={[
              "rounded-2xl border p-8 flex flex-col shadow-card transition",
              p.highlight
                ? "border-primary/60 bg-card relative shadow-glow"
                : "border-border/60 bg-card hover:border-primary/40",
            ].join(" ")}
          >
            {p.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </div>
            )}
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold">{p.price}</span>
              {p.period && <span className="text-muted-foreground text-sm">{p.period}</span>}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            <ul className="mt-6 space-y-2 text-sm flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to={p.href}
              className={[
                "mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition",
                p.highlight
                  ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                  : "border border-border/60 hover:bg-secondary",
              ].join(" ")}
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-10">
        Payment securely processed by Stripe. Subscriptions cancel anytime.
      </p>
    </section>
  );
}
