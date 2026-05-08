import { Link, Outlet } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/book", label: "Book a call" },
  { to: "/intake", label: "Intake" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="text-gradient-primary">Sitecraft</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-semibold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/book"
            className="hidden md:inline-flex items-center justify-center rounded-md bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Free discovery call
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border/60 mt-20">
        <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">
          <div>
            <div className="font-semibold text-foreground mb-2">Sitecraft</div>
            <p>Websites and automations that pay for themselves.</p>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-2">Explore</div>
            <ul className="space-y-1">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-foreground">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-foreground mb-2">Get started</div>
            <p>Book a free 20-minute discovery call. No pitch — just a plan.</p>
          </div>
        </div>
        <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sitecraft. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
