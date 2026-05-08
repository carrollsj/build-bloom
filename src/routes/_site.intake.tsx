import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, Loader2 } from "lucide-react";

export const Route = createFileRoute("/_site/intake")({
  head: () => ({
    meta: [
      { title: "Project intake form — Sitecraft" },
      { name: "description", content: "Tell us about your project. We'll review and get back within 1 business day." },
      { property: "og:title", content: "Project intake — Sitecraft" },
      { property: "og:description", content: "Share your project details so we can prepare." },
    ],
  }),
  component: IntakePage,
});

const intakeSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().max(150).optional(),
  website: z.string().trim().max(255).optional(),
  project_type: z.string().min(1, "Please pick one"),
  goals: z.string().trim().min(10, "Tell us a bit more").max(2000),
  budget: z.string().max(50).optional(),
  timeline: z.string().max(100).optional(),
  integrations: z.string().max(500).optional(),
  notes: z.string().max(2000).optional(),
});

type IntakeForm = z.infer<typeof intakeSchema>;

const inputCls =
  "w-full rounded-md border border-border bg-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent";

function IntakePage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = intakeSchema.safeParse(raw);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const payload: IntakeForm = parsed.data;
    const { error: dbErr } = await supabase.from("intake_submissions").insert({
      name: payload.name,
      email: payload.email,
      company: payload.company || null,
      website: payload.website || null,
      project_type: payload.project_type,
      goals: payload.goals,
      budget: payload.budget || null,
      timeline: payload.timeline || null,
      integrations: payload.integrations || null,
      notes: payload.notes || null,
    });
    setSubmitting(false);
    if (dbErr) {
      setError(dbErr.message);
      return;
    }
    setSuccess(true);
  }

  if (success) {
    return (
      <section className="container mx-auto px-4 py-24 text-center max-w-xl">
        <CheckCircle2 className="h-14 w-14 mx-auto text-primary mb-4" />
        <h1 className="text-3xl font-bold">Thanks — we got it!</h1>
        <p className="mt-3 text-muted-foreground">
          We'll review your project and reply within one business day.
        </p>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold">Project intake</h1>
        <p className="mt-3 text-muted-foreground">
          The more detail, the better the proposal. Takes ~3 minutes.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5 rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-card">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Your name *"><input name="name" required maxLength={100} className={inputCls} /></Field>
            <Field label="Email *"><input name="email" type="email" required maxLength={255} className={inputCls} /></Field>
            <Field label="Company"><input name="company" maxLength={150} className={inputCls} /></Field>
            <Field label="Current website"><input name="website" maxLength={255} placeholder="https://" className={inputCls} /></Field>
          </div>

          <Field label="Project type *">
            <select name="project_type" required className={inputCls} defaultValue="">
              <option value="" disabled>Pick one…</option>
              <option>New website</option>
              <option>Website redesign</option>
              <option>AI chatbot</option>
              <option>Automation / integration</option>
              <option>Other</option>
            </select>
          </Field>

          <Field label="What are you trying to achieve? *">
            <textarea name="goals" required rows={4} maxLength={2000} className={inputCls} />
          </Field>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Budget">
              <select name="budget" className={inputCls} defaultValue="">
                <option value="">Not sure</option>
                <option>Under $500</option>
                <option>$500 – $2,000</option>
                <option>$2,000 – $10,000</option>
                <option>$10,000+</option>
              </select>
            </Field>
            <Field label="Timeline"><input name="timeline" maxLength={100} placeholder="e.g. ASAP, next month" className={inputCls} /></Field>
          </div>

          <Field label="Tools & integrations needed">
            <input name="integrations" maxLength={500} placeholder="e.g. Stripe, HubSpot, Google Calendar" className={inputCls} />
          </Field>

          <Field label="Anything else?">
            <textarea name="notes" rows={3} maxLength={2000} className={inputCls} />
          </Field>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition disabled:opacity-60"
          >
            {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
            Submit project
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      {children}
    </label>
  );
}
