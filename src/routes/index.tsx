import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Database,
  LineChart,
  Menu,
  MessageSquare,
  Phone,
  Sparkles,
  Star,
  TrendingDown,
  UserX,
  X,
  Zap,
} from "lucide-react";

const BOOKING_URL = "https://calendly.com/harshvyas242424/business-automation-audit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zen Miraculous — AI Lead Conversion Systems for Service Businesses" },
      {
        name: "description",
        content:
          "Done-for-you AI systems that respond, qualify, and book your leads 24/7. Built for high-ticket service businesses in the US, UK, Canada & Australia.",
      },
      { name: "keywords", content: "AI lead response, speed to lead automation, 24/7 AI appointment booking, automated CRM lead qualification, done for you AI system, mortgage broker AI lead follow up, HVAC lead automation" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Zen Miraculous — AI Lead Conversion Systems for Service Businesses" },
      {
        property: "og:description",
        content:
          "Done-for-you AI systems that respond, qualify, and book your leads 24/7. Built for high-ticket service businesses in the US, UK, Canada & Australia.",
      },
      { property: "og:url", content: "https://zenmiraculous.com/" },
      { property: "og:site_name", content: "Zen Miraculous" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zen Miraculous — AI Lead Conversion Systems" },
      { name: "twitter:description", content: "Done-for-you AI systems that respond, qualify, and book your leads 24/7." },
    ],
    links: [
      { rel: "canonical", href: "https://zenmiraculous.com/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

const industries = [
  { name: "Mortgage Brokers", pain: "Leads go cold before manual follow-up happens. Speed-to-lead is everything." },
  { name: "Immigration Consultants", pain: "High inquiry volume, low conversion. Hours lost answering repeat questions." },
  { name: "Roofing Companies", pain: "Seasonal spikes overwhelm your team. Jobs lost to faster competitors." },
  { name: "HVAC Companies", pain: "After-hours emergency leads go unanswered. No maintenance reminder system." },
  { name: "Law Firms", pain: "Potential clients ghost after inquiry. Manual intake nurture is non-existent." },
  { name: "Solar Companies", pain: "3–6 month decision cycles. Leads go cold without consistent nurturing." },
  { name: "Commercial Finance Brokers", pain: "B2B leads need fast, professional outreach. Pipeline is chaos." },
  { name: "Debt Relief Firms", pain: "Sensitive leads need trust-building before they'll convert." },
  { name: "Home Remodeling", pain: "High quote volume, low close rate. Zero follow-up after quoting." },
];

const steps = [
  { icon: Database, title: "CRM Setup", desc: "Full pipeline, automations, calendar, and forms — configured for your business from day one." },
  { icon: Phone, title: "Voice AI Agent", desc: "Calls every new lead within 60 seconds, qualifies them, and books the appointment." },
  { icon: MessageSquare, title: "LLM Follow-Up", desc: "Human-feeling SMS and email sequences that nurture leads until they're ready to buy." },
  { icon: Calendar, title: "Appointment Nurture", desc: "Reminders and re-engagement flows that dramatically cut no-shows." },
  { icon: LineChart, title: "Reporting Dashboard", desc: "See leads in, appointments booked, and deals closed — all in one place." },
];

const testimonials = [
  { name: "Marcus Chen", role: "Mortgage Broker, Toronto", stars: 5, quote: "Within the first week our lead response time went from 4 hours to under a minute. The booked-call rate jumped and we finally stopped losing deals to the guy who called first." },
  { name: "Priya Sharma", role: "Immigration Consultant, London", stars: 5, quote: "Harsh built the entire system in under 3 weeks. It handles the repetitive intake questions so my team only talks to serious prospects. Total game-changer." },
  { name: "David O'Sullivan", role: "Roofing Co. Owner, Dallas", stars: 5, quote: "During storm season we used to drown in leads. Now the AI qualifies them, books estimates, and my crews stay booked out weeks in advance." },
  { name: "Sarah Whitfield", role: "Family Law Firm, Sydney", stars: 5, quote: "Our intake used to bleed potential clients. The nurture sequence Harsh built brings back people who ghosted us — I never thought AI could feel this human." },
  { name: "Jordan Blake", role: "HVAC Company, Phoenix", stars: 5, quote: "Emergency calls at 2am used to go straight to voicemail. The Voice AI books them into the calendar overnight. It literally pays for itself every week." },
  { name: "Alicia Ramos", role: "Solar Sales, San Diego", stars: 5, quote: "Solar is a long game. Their nurture flows kept us in front of leads for months without me lifting a finger. Closed deals I would have written off." },
  { name: "Ben Alderman", role: "Commercial Finance Broker, Manchester", stars: 5, quote: "Direct access to Harsh, no juniors, no fluff. He understood our niche in one call and shipped exactly what he promised." },
  { name: "Nathan Cole", role: "Home Remodeling, Vancouver", stars: 5, quote: "Every quote used to disappear into a black hole. Now every lead gets followed up 8+ times automatically. Our close rate more than doubled." },
];

const faqs = [
  { q: "What exactly does Zen Miraculous do?", a: "We build done-for-you AI lead conversion systems: instant response, AI qualification, calendar booking, and long-term nurture — running 24/7 so no lead ever goes cold." },
  { q: "Where are you based?", a: "The agency is based in India and works exclusively with clients in the USA, UK, Canada, and Australia. All communication and delivery is in English, built for Western markets." },
  { q: "How long does setup take?", a: "A typical build is 2–4 weeks from kickoff to fully live." },
  { q: "Do you offer a free trial?", a: "No — instead we offer a free strategy call where we diagnose your current setup and map out what a system for your business would look like." },
  { q: "What results can we expect?", a: "Results depend entirely on your current lead volume and niche. We discuss realistic expectations on the call rather than promising numbers upfront." },
  { q: "Can I see a case study?", a: "Yes — we share the most relevant case studies after a quick conversation so what you see actually matches your industry and situation." },
  { q: "Who do I speak to on the call?", a: "You speak directly with Harsh, the founder. No reps, no juniors, no sales layer." },
  { q: "What software do you use?", a: "A robust CRM platform for automation, plus Voice AI and custom LLM sequences. We integrate with your existing tools wherever possible." },
  { q: "Is there a monthly cost?", a: "Every system is scoped to your business — the strategy call is where we walk through the setup and ongoing structure that fits your volume." },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
          <a href="#top" className="flex items-center gap-2 min-w-0">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center shrink-0">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg truncate">Zen Miraculous</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#how" className="hover:text-foreground transition">How It Works</a>
            <a href="#industries" className="hover:text-foreground transition">Industries</a>
            <a href="#testimonials" className="hover:text-foreground transition">Results</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
            <a href="/landing" className="hover:text-foreground transition text-primary font-medium">Ads Landing Page</a>
          </nav>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="hidden md:inline-flex btn-primary text-sm">
            Book a Free Call <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-4 flex flex-col gap-1 text-sm">
              {[
                ["How It Works", "#how"],
                ["Industries", "#industries"],
                ["Results", "#testimonials"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-2 rounded-lg hover:bg-surface text-muted-foreground hover:text-foreground"
                >
                  {label}
                </a>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs sm:text-sm text-muted-foreground mb-6 animate-float">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary" />
            AI-powered lead conversion — live 24/7
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Your leads are going <span className="text-destructive">cold</span>.
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              We fix that in 60 seconds.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground px-2">
            Zen Miraculous builds done-for-you AI systems that instantly respond, qualify, and book every lead you get — while you sleep, on weekends, at 2am. No more missed opportunities.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-primary w-full sm:w-auto">
              Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="btn-ghost w-full sm:w-auto">See How It Works</a>
          </div>
          <p className="mt-6 text-xs sm:text-sm text-muted-foreground">
            Trusted by high-ticket service businesses across the US, UK, Canada &amp; Australia
          </p>

          {/* Hero stats */}
          <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto">
            {[
              { k: "<60s", v: "Lead response" },
              { k: "24/7", v: "Always on" },
              { k: "2–4 wks", v: "To live" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-surface/60 backdrop-blur px-3 py-4 sm:px-6 sm:py-6">
                <div className="font-display text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {s.k}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 sm:py-28 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">The Problem</p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Every lead you don't answer in 5 minutes is money in a competitor's pocket.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              You spend thousands on ads, SEO, and referrals. Then leads come in — and sit. By the time someone follows up, they've already booked with the business that called first.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, title: "Slow response", desc: "Manual follow-up takes hours. Buyers move on in minutes." },
              { icon: UserX, title: "Ghosted leads", desc: "Nobody nurtures them, so they disappear forever." },
              { icon: TrendingDown, title: "Low show rates", desc: "No reminders means half your booked calls never show." },
              { icon: Zap, title: "After-hours dead zone", desc: "70% of leads come outside business hours. You miss them all." },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-surface p-6 hover:border-primary/50 transition">
                <p.icon className="h-6 w-6 text-primary mb-4" />
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 sm:py-28 bg-surface/30 border-y border-border/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              One complete system. Five moving parts.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Lead comes in → AI responds in under 60 seconds → qualifies → books the call → nurtures until they show up. Fully automated, end to end.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-border bg-background p-6 group hover:border-primary/60 transition">
                <div className="absolute -top-3 -left-3 h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center font-bold text-primary-foreground text-sm">
                  {i + 1}
                </div>
                <s.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display font-semibold text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Industries We Serve</p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Built for high-ticket service businesses.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Every industry has a different follow-up problem. We've built systems for all of them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <a
                key={ind.name}
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                className="group rounded-2xl border border-border bg-surface p-6 hover:border-primary hover:bg-surface-2 transition"
              >
                <h3 className="font-display font-semibold text-lg">{ind.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.pain}</p>
                <div className="mt-4 text-sm text-primary inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  See your build <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 sm:py-28 bg-surface/30 border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why Zen Miraculous</p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Not another ads shop. Not a chatbot vendor. A full system.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Most agencies sell you one piece. We build the entire lead-to-appointment engine — CRM, AI voice, follow-up, nurture, reporting — as one unified system that actually works together.
            </p>
          </div>
          <div className="space-y-4">
            {[
              "Direct access to the founder — no reps, no juniors, no handoffs",
              "One complete system instead of a stack of disconnected tools",
              "Built specifically for high-ticket service businesses ($1k+ deals)",
              "Live in 2–4 weeks — not months of endless discovery calls",
              "Scoped to your exact volume and niche, not a template",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What Clients Say</p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Results across industries and time zones.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-surface p-6 flex flex-col">
                <div className="flex gap-0.5 text-primary mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base leading-relaxed flex-1">"{t.quote}"</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Marquee logos-ish trust bar */}
          <div className="mt-16 overflow-hidden border-y border-border/50 py-6">
            <div className="flex gap-12 animate-marquee whitespace-nowrap text-muted-foreground text-sm font-medium uppercase tracking-widest">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex gap-12 items-center">
                  {["Mortgage · Toronto", "Immigration · London", "Roofing · Dallas", "Law · Sydney", "HVAC · Phoenix", "Solar · San Diego", "Finance · Manchester", "Remodeling · Vancouver"].map((x) => (
                    <span key={x} className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" /> {x}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING (no pricing) */}
      <section className="py-20 sm:py-28 bg-surface/30 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Investment</p>
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Every system is scoped to your volume.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            That's why we don't post prices. On a 30-minute strategy call we look at your current setup, your lead volume, and your niche — and give you an exact plan and quote.
          </p>
          <div className="mt-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-primary">
              Get Your Custom System Plan <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Answers before you ask.
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border border-border bg-surface overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 gap-4"
                  >
                    <span className="font-medium text-base sm:text-lg">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180 text-primary" : ""}`}
                    />
                  </button>
                  {open && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed animate-fade-in">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Bot className="h-12 w-12 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-3xl sm:text-6xl font-bold leading-[1.05]">
            Stop losing leads. Start booking them.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
            Book a free 30-minute strategy call. We'll diagnose your current setup and show you exactly what a done-for-you AI system would look like for your business.
          </p>
          <div className="mt-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-primary text-base sm:text-lg">
              Book a Free Strategy Call <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            You'll speak directly with Harsh. No reps. No pressure.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
              <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold">Zen Miraculous</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="/privacy" className="hover:text-foreground transition">Privacy Policy</a>
            <a href="/landing" className="hover:text-foreground transition">Ads Landing Page</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="text-primary hover:underline font-medium">
              Book a Call →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
