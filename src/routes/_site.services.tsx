import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Code2, Plug, Workflow } from "lucide-react";

export const Route = createFileRoute("/_site/services")({
  head: () => ({
    meta: [
      { title: "Services — Sitecraft" },
      { name: "description", content: "Custom websites, business automations, AI chatbots, and integrations — built to ship fast." },
      { property: "og:title", content: "Services — Sitecraft" },
      { property: "og:description", content: "Websites, automations, chatbots, integrations." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Code2,
    title: "Custom websites",
    desc: "Marketing sites, landing pages, portfolios, and small SaaS. Built for speed, SEO, and conversion.",
    examples: ["Lead-gen landing pages", "Multi-page business sites", "Portfolio & personal brand"],
  },
  {
    icon: Workflow,
    title: "Business automations",
    desc: "Stop copy-pasting between tools. We wire up your stack so data flows automatically.",
    examples: ["Lead → CRM → email", "Form → Slack/Sheets", "Invoice & onboarding flows"],
  },
  {
    icon: Bot,
    title: "AI chatbots",
    desc: "Custom GPT assistants trained on your content. Embed on your site, qualify leads, answer FAQs.",
    examples: ["Sales qualification bot", "Support deflection", "Internal knowledge bot"],
  },
  {
    icon: Plug,
    title: "Integrations",
    desc: "Stripe, Calendar, email, CRMs — connect anything to anything with reliable automation.",
    examples: ["Stripe + accounting", "Calendar + CRM", "Custom API workflows"],
  },
];

function ServicesPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">What we do</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Four things, done well. Pick one or stack them — we'll recommend what fits.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map(({ icon: Icon, title, desc, examples }) => (
          <div key={title} className="rounded-2xl border border-border/60 bg-card p-8 shadow-card hover:border-primary/40 transition">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary mb-4 shadow-glow">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground mb-4">{desc}</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {examples.map((e) => (
                <li key={e}>— {e}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-14">
        <Link to="/book" className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
          Book a free discovery call
        </Link>
      </div>
    </section>
  );
}
