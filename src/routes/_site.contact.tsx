import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, Loader2, Mail } from "lucide-react";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sitecraft" },
      { name: "description", content: "Get in touch. We reply within one business day." },
      { property: "og:title", content: "Contact — Sitecraft" },
      { property: "og:description", content: "Send us a message." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(5).max(2000),
});

const inputCls =
  "w-full rounded-md border border-border bg-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent";

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const raw = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error: dbErr } = await supabase.from("contact_submissions").insert(parsed.data);
    setSubmitting(false);
    if (dbErr) return setError(dbErr.message);
    setSuccess(true);
  }

  return (
    <section className="container mx-auto px-4 py-20 max-w-xl">
      <div className="text-center mb-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary mb-4 shadow-glow mx-auto">
          <Mail className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold">Say hi</h1>
        <p className="mt-3 text-muted-foreground">We'll reply within one business day.</p>
      </div>

      {success ? (
        <div className="text-center rounded-2xl border border-border/60 bg-card p-8 shadow-card">
          <CheckCircle2 className="h-12 w-12 mx-auto text-primary mb-3" />
          <p className="font-semibold">Message sent. Talk soon!</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-card">
          <label className="block">
            <span className="block text-sm font-medium mb-1.5">Name</span>
            <input name="name" required maxLength={100} className={inputCls} />
          </label>
          <label className="block">
            <span className="block text-sm font-medium mb-1.5">Email</span>
            <input name="email" type="email" required maxLength={255} className={inputCls} />
          </label>
          <label className="block">
            <span className="block text-sm font-medium mb-1.5">Message</span>
            <textarea name="message" required rows={5} maxLength={2000} className={inputCls} />
          </label>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition disabled:opacity-60"
          >
            {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
            Send message
          </button>
        </form>
      )}
    </section>
  );
}
