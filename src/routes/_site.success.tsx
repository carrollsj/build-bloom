import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/_site/success")({
  head: () => ({
    meta: [
      { title: "Payment received — Sitecraft" },
      { name: "description", content: "Thanks for your payment. Next step: tell us about your project." },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <section className="container mx-auto px-4 py-24 text-center max-w-xl">
      <CheckCircle2 className="h-16 w-16 mx-auto text-primary mb-4" />
      <h1 className="text-4xl font-bold">You're in!</h1>
      <p className="mt-4 text-muted-foreground">
        Payment received. The next step is a quick intake form so we can hit the ground running.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/intake" className="inline-flex items-center justify-center rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
          Fill intake form
        </Link>
        <Link to="/book" className="inline-flex items-center justify-center rounded-md border border-border/60 px-6 py-3 font-semibold hover:bg-secondary transition">
          Book kickoff call
        </Link>
      </div>
    </section>
  );
}
