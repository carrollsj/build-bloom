## Site overview

A modern dark site with neon accents that sells your "websites + automations" service. Visitors can learn about your offerings, book a free discovery call, fill an intake form, and pay via Stripe.

## Pages (separate routes)

- **Home (`/`)** — Hero ("Websites & Automations that pay for themselves"), what you do, featured plans, testimonials placeholder, CTA to book a free call.
- **Services (`/services`)** — Custom websites, automations, AI chatbots, integrations. Each with a short pitch + example use cases.
- **Pricing (`/pricing`)** — 3 cards:
  1. **Website Build** — $499 one-time
  2. **Care + Growth** — $99/month (hosting, edits, monitoring)
  3. **Automations & Chatbots** — Custom (starts at $X) — "Talk to us" CTA
  Each card lists what's included and a clear CTA.
- **Book a Call (`/book`)** — Embedded Cal.com/Calendly widget for the free discovery call.
- **Intake (`/intake`)** — Multi-step form: contact info, business details, project goals, current website, budget/timeline, integrations needed, notes. Submissions saved to the database and emailed to you.
- **Checkout success (`/success`)** — Thank-you page after Stripe payment, with link to intake form + book call.
- **Contact (`/contact`)** — Simple form + email/social links.

## User flow

1. Visitor lands → sees plans → clicks **Book free discovery call**
2. Books on embedded calendar
3. After the call, you send them either:
   - A Stripe payment link for $499 (and/or $99/mo subscription), or
   - The intake form link to scope the work first
4. After payment → success page guides them to fill intake form
5. You receive intake submissions in your dashboard + email

## Plans & Stripe

- **$499 Website Build** — one-time payment
- **$99/mo Care plan** — recurring subscription
- **Upsell add-ons** — chatbots & automations (custom quoted, can be sent as additional payment links)

Stripe will be set up with Lovable's built-in payments — you don't need a Stripe account up front; a test environment is created immediately so you can try checkout, and you verify your details later to accept real money.

## Booking

Embed Cal.com or Calendly on `/book`. You connect your Google Calendar in their dashboard once, and availability + event creation just works. (Simpler and more reliable than building a native Google Calendar integration.)

## Intake form

Stored in the database with fields: name, email, company, website (if any), project type (new site / redesign / automation / chatbot), goals, budget range, timeline, integrations, extra notes. You'll get an admin view to see submissions, and an email notification on each new one.

## Design

- Dark background (near-black), neon accent (cyan/violet) for buttons and highlights
- Large bold headings, subtle gradient glows behind hero
- Rounded cards with soft borders, smooth hover states
- Mobile-first, fully responsive

## Technical notes

- TanStack Start with separate routes per page (better SEO than one-pager)
- Lovable Cloud enabled for: intake submissions table, contact submissions, admin auth
- Stripe via Lovable's built-in payments (one-time $499 product + $99/mo subscription product)
- Cal.com/Calendly embed via their script — you'll paste your booking link
- Email notifications on form submissions via Resend (optional, can add)

## What I'll need from you after approval

- Your Cal.com or Calendly booking link
- Confirmation to enable Lovable Cloud + Stripe payments
- Logo / brand name (or I'll use a placeholder wordmark)