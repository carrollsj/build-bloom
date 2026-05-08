import { createFileRoute } from "@tanstack/react-router";
import { Calendar, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/_site/book")({
  head: () => ({
    meta: [
      { title: "Book a free discovery call — Sitecraft" },
      { name: "description", content: "Pick a time that works. Free 20-minute discovery call to map out your project." },
      { property: "og:title", content: "Book a free call — Sitecraft" },
      { property: "og:description", content: "Free 20-minute discovery call." },
    ],
  }),
  component: BookPage,
});

// Replace this with your Cal.com or Calendly link
const BOOKING_URL = "https://cal.com/your-handle/discovery";

function BookPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary mb-4 shadow-glow mx-auto">
          <Calendar className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">Book your free call</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          20 minutes. No pitch. We'll talk through your goals and tell you what we'd do.
        </p>
      </div>

      <div className="max-w-4xl mx-auto rounded-2xl border border-border/60 bg-card overflow-hidden shadow-card">
        <iframe
          src={BOOKING_URL}
          title="Booking calendar"
          className="w-full h-[700px] bg-background"
          frameBorder={0}
        />
      </div>

      <p className="text-center mt-6 text-sm text-muted-foreground">
        Trouble loading? <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="text-primary inline-flex items-center gap-1 hover:underline">
          Open booking page <ExternalLink className="h-3 w-3" />
        </a>
      </p>
    </section>
  );
}
