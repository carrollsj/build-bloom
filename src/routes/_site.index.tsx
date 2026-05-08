import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Code2, Sparkles, Workflow, Zap } from "lucide-react";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Sitecraft — Websites & Automations that pay for themselves" },
      { name: "description", content: "Custom websites, AI chatbots, and business automations. Free discovery call, transparent pricing, fast delivery." },
      { property: "og:title", content: "Sitecraft — Websites & Automations" },
      { property: "og:description", content: "Custom websites, AI chatbots, and business automations." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="container mx-auto px-4 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground mb-6">
            <Sparkles className="h-3 w-3 text-primary" /> Now booking new projects
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            Websites & automations that <span className="text-gradient-primary">pay for themselves</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We design, build, and automate. From a $499 launch site to AI chatbots and end-to-end workflows that save you hours every week.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/book" className="inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
              Book a free call <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-card/40 px-6 py-3 font-semibold hover:bg-card transition">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">What we build</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Code2, title: "Custom websites", desc: "Fast, beautiful sites built to convert. Launch in days, not months." },
            { icon: Workflow, title: "Automations", desc: "Connect your tools. Eliminate busywork. Spend time on real work." },
            { icon: Bot, title: "AI chatbots", desc: "24/7 assistants trained on your business. Answer leads while you sleep." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-card hover:border-primary/40 transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary mb-4 shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="rounded-3xl border border-border/60 bg-card/60 p-10 md:p-16 text-center bg-hero-glow">
          <Zap className="h-10 w-10 mx-auto text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold">Ready to ship?</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Grab a free 20-minute call. We'll map out your project and tell you exactly what it'll take.
          </p>
          <Link to="/book" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
            Book your call <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
