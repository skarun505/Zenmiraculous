import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import LeadForm from "../components/LeadForm";
import {
  Star,
  Lock,
  Zap,
  FileText,
  Handshake,
  Target,
  CheckCircle2,
  Menu,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/landing")({
  head: () => ({
    meta: [
      { title: "Free AI Lead System Audit — Zen Miraculous" },
      {
        name: "description",
        content:
          "Get a free 30-minute AI lead conversion audit. We build done-for-you systems that respond, qualify, and book leads 24/7.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: LandingPage,
});

const PAIN_POINTS = [
  {
    title: "Slow response kills deals",
    desc: "Manual follow-up takes hours. Buyers move on in minutes. Speed-to-lead is everything.",
  },
  {
    title: "After-hours dead zone",
    desc: "70% of leads come outside business hours. Without automation, you miss them all.",
  },
  {
    title: "Low show rates drain revenue",
    desc: "No automated reminders means half your booked calls ghost you at the last minute.",
  },
];

const STATS = [
  { value: "<60s", label: "Lead response" },
  { value: "24/7", label: "Always on" },
  { value: "2–4 wks", label: "To live" },
];

const TESTIMONIALS = [
  {
    quote:
      "Within the first week our lead response time went from 4 hours to under a minute. We finally stopped losing deals to the business that called first.",
    name: "Marcus Chen",
    role: "Mortgage Broker, Toronto",
  },
  {
    quote:
      "Harsh built the entire system in under 3 weeks. It handles repetitive intake so my team only talks to serious prospects. Total game-changer.",
    name: "Priya Sharma",
    role: "Immigration Consultant, London",
  },
  {
    quote:
      "Emergency calls at 2am used to go straight to voicemail. The Voice AI books them into the calendar overnight. It pays for itself every week.",
    name: "Jordan Blake",
    role: "HVAC Company, Phoenix",
  },
];

const FAQS = [
  {
    q: "How fast will my custom AI lead system be built and live?",
    a: "Your complete AI lead capture and appointment booking system is built, tested, and fully deployed in 2 to 4 weeks. We handle 100% of the technical setup, prompt engineering, CRM integration, and end-to-end testing.",
  },
  {
    q: "Will this AI replace my existing sales team or CRM?",
    a: "No. The AI system acts as your 24/7 lead triage assistant. It connects directly with your current CRM (GoHighLevel, HubSpot, Salesforce, etc.) to instantly qualify leads, answer preliminary questions, and book serious prospects straight onto your calendar.",
  },
  {
    q: "How does the AI handle after-hours inquiries at 2:00 AM or on weekends?",
    a: "Over 70% of inbound paid ad leads arrive outside normal office hours. The moment a lead submits a form or sends a message, our AI responds in under 60 seconds via SMS, WhatsApp, or Voice — starting the conversation immediately while your competitors sleep.",
  },
  {
    q: "Is the AI lead system TCPA and GDPR compliant?",
    a: "Yes, 100%. All systems are designed with strict consent checkboxes, opt-in logging, unsubscribe mechanisms, and enterprise-grade 256-bit encryption. Consent timestamps are stored automatically for complete legal proof.",
  },
  {
    q: "What kind of ROI and conversion increase can I expect?",
    a: "Speed-to-lead is the single biggest factor in conversion rates. Responding in under 60 seconds increases lead-to-appointment conversion by up to 391% compared to manual follow-up over 1 hour later.",
  },
];

const COMPARISON = [
  {
    feature: "Speed-to-Lead Response",
    traditional: "2 to 6 hours average (or next day)",
    aiSystem: "Under 60 seconds (24/7 instant)",
    aiIcon: "bolt",
  },
  {
    feature: "After-Hours & Weekend Lead Handling",
    traditional: "Voicemail or ignored until Monday",
    aiSystem: "100% automated intake & calendar booking",
    aiIcon: "check",
  },
  {
    feature: "Lead Qualification Efficiency",
    traditional: "Manual phone tag & unqualified calls",
    aiSystem: "Automated AI screening filters bad leads out",
    aiIcon: "check",
  },
  {
    feature: "Show-Up Rate Protection",
    traditional: "No reminders, up to 50% ghosting",
    aiSystem: "2-step SMS & email reminders (85%+ show rate)",
    aiIcon: "check",
  },
  {
    feature: "Setup & Management Effort",
    traditional: "Hiring & training expensive staff",
    aiSystem: "100% Done-for-you build in 2–4 weeks",
    aiIcon: "check",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Instant Lead Engagement (<60s)",
    desc: "The instant a paid ad lead touches your form or ad, our AI initiates immediate outreach via SMS, Email, or Voice AI.",
  },
  {
    num: "02",
    title: "Intelligent AI Qualification",
    desc: "The AI asks natural, pre-vetted qualification questions tailored to your exact industry parameters before offering a call.",
  },
  {
    num: "03",
    title: "Direct Calendar Booking",
    desc: "Qualified prospects choose a time slot on your live calendar and receive automated confirmation & reminder notifications.",
  },
];

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const CALENDLY_URL =
    import.meta.env.VITE_CALENDLY_URL ||
    "https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07";

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-[#27272a] bg-[#09090b]/90 backdrop-blur-md px-6 py-3.5">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold text-[#fafafa] no-underline">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706]">
              <Sparkles className="h-4 w-4 text-black" />
            </div>
            <span>Zen Miraculous</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm font-medium text-[#a1a1aa] no-underline hover:text-[#fafafa] transition-colors">
              Home
            </Link>
            <a href="#how-it-works" className="text-sm font-medium text-[#a1a1aa] no-underline hover:text-[#fafafa] transition-colors">
              How It Works
            </a>
            <a href="#comparison" className="text-sm font-medium text-[#a1a1aa] no-underline hover:text-[#fafafa] transition-colors">
              Comparison
            </a>
            <a href="#faq" className="text-sm font-medium text-[#a1a1aa] no-underline hover:text-[#fafafa] transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#f59e0b] px-4 py-2 text-sm font-semibold text-black no-underline hover:bg-[#d97706] transition-colors"
            >
              Book a Call <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-1.5 text-[#fafafa] md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mt-3 flex flex-col gap-3 border-t border-[#27272a] pt-4 md:hidden">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#a1a1aa] no-underline hover:text-[#fafafa]"
            >
              Home
            </Link>
            <a
              href="#how-it-works"
              onClick={() => setMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#a1a1aa] no-underline hover:text-[#fafafa]"
            >
              How It Works
            </a>
            <a
              href="#comparison"
              onClick={() => setMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#a1a1aa] no-underline hover:text-[#fafafa]"
            >
              Comparison
            </a>
            <a
              href="#faq"
              onClick={() => setMenuOpen(false)}
              className="py-1 text-sm font-medium text-[#a1a1aa] no-underline hover:text-[#fafafa]"
            >
              FAQ
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#f59e0b] px-4 py-2.5 text-sm font-semibold text-black no-underline"
            >
              Book a Strategy Call <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-[1200px] px-6 pb-10 pt-10 lg:pt-16">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN / MAIN HERO TEXT */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <span className="mb-5 inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 text-xs font-semibold tracking-wide text-[#92400e]">
              Free 30-Min Strategy Audit — No Obligation
            </span>

            {/* H1 */}
            <h1 className="mb-5 text-[clamp(28px,4vw,46px)] font-bold leading-[1.15] tracking-tight text-[#fafafa]">
              Stop Losing High-Ticket Leads to Slow Follow-Up
            </h1>

            {/* LEAD FORM FOR MOBILE */}
            <div className="my-6 block lg:hidden">
              <LeadForm />
            </div>

            {/* Subheadline */}
            <p className="mb-8 text-lg leading-relaxed text-[#a1a1aa]">
              Zen Miraculous builds done-for-you AI systems that respond in under 60 seconds, qualify your leads, and book appointments 24/7 — while you sleep, on weekends, at 2am.
            </p>

            {/* Stats row */}
            <div className="mb-9 flex flex-wrap gap-6">
              {STATS.map((s) => (
                <div key={s.value}>
                  <div className="text-2xl font-bold text-[#f59e0b]">{s.value}</div>
                  <div className="mt-0.5 text-xs text-[#71717a]">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Pain point cards */}
            <div className="mb-7 flex flex-col gap-3">
              {PAIN_POINTS.map((p) => (
                <div
                  key={p.title}
                  className="rounded-lg border border-[#27272a] border-l-4 border-l-[#f59e0b] bg-[#18181b] p-3.5"
                >
                  <div className="mb-1 text-sm font-semibold text-[#fafafa]">{p.title}</div>
                  <div className="text-xs leading-relaxed text-[#a1a1aa]">{p.desc}</div>
                </div>
              ))}
            </div>

            {/* Trust line */}
            <p className="flex flex-wrap items-center gap-1.5 text-xs text-[#71717a]">
              <span className="flex items-center gap-0.5 text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#f59e0b]" />
                ))}
              </span>
              Trusted by mortgage brokers, law firms, HVAC companies & more across US, UK, Canada & Australia
            </p>
          </div>

          {/* RIGHT COLUMN — Lead Form (Desktop) */}
          <div className="hidden lg:sticky lg:top-20 lg:block lg:col-span-5">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="mx-auto max-w-[1200px] border-t border-[#27272a] px-6 py-14">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b]">
            Proven 3-Step Process
          </span>
          <h2 className="mt-2 text-[clamp(24px,3.5vw,36px)] font-bold text-[#fafafa]">
            How Zen Miraculous AI Converts Leads 24/7
          </h2>
          <p className="mx-auto mt-3 max-w-[640px] text-sm text-[#a1a1aa]">
            Our done-for-you AI system handles every step from instant initial contact to direct calendar booking, completely hands-free.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.num} className="rounded-xl border border-[#27272a] bg-[#18181b] p-7">
              <div className="mb-4 text-3xl font-extrabold text-[#f59e0b]">{s.num}</div>
              <h3 className="mb-2 text-lg font-semibold text-[#fafafa]">{s.title}</h3>
              <p className="text-sm leading-relaxed text-[#a1a1aa]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section id="comparison" className="mx-auto max-w-[1200px] border-t border-[#27272a] px-6 py-14">
        <div className="mb-10 text-center">
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold text-[#fafafa]">
            Traditional Manual Follow-Up vs. Zen Miraculous AI
          </h2>
          <p className="mt-2 text-sm text-[#a1a1aa]">
            Why leading service businesses are upgrading from slow manual intake to instant AI automation.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b border-[#27272a] bg-[#18181b]">
                <th className="p-4 text-sm font-semibold text-[#fafafa]">Key Feature</th>
                <th className="p-4 text-sm font-semibold text-[#ef4444]">Traditional Follow-Up</th>
                <th className="p-4 text-sm font-semibold text-[#f59e0b]">Zen Miraculous AI System</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((c, i) => (
                <tr key={c.feature} className={`border-b border-[#27272a] ${i % 2 === 0 ? "bg-[#09090b]" : "bg-[#141417]"}`}>
                  <td className="p-4 text-sm font-semibold text-[#fafafa]">{c.feature}</td>
                  <td className="p-4 text-sm text-[#71717a]">{c.traditional}</td>
                  <td className="p-4 text-sm font-semibold text-[#fafafa]">
                    <span className="mr-1.5 inline-flex items-center text-[#f59e0b]">
                      {c.aiIcon === "bolt" ? <Zap className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                    </span>
                    {c.aiSystem}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FOUNDER & TRUST GUARANTEES */}
      <section className="mx-auto max-w-[1200px] border-t border-[#27272a] px-6 py-14">
        <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-[#27272a] bg-[#18181b] p-9 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold tracking-wider text-[#f59e0b]">100% HIGH-TRUST PROMISE</span>
            <h2 className="mb-3 mt-2 text-2xl font-bold text-[#fafafa]">
              Built Directly by Senior AI Engineers
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-[#a1a1aa]">
              When you work with Zen Miraculous, you work directly with <strong>Harsh Vyas</strong> and senior AI specialists. No junior account managers, no generic copy-paste templates, and no outsourced fluff.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs text-[#fafafa]">
              <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-[#f59e0b]" /> 256-Bit Data Encryption</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#f59e0b]" /> 99.9% Uptime Guarantee</div>
              <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-[#f59e0b]" /> TCPA & GDPR Compliant</div>
              <div className="flex items-center gap-2"><Handshake className="h-4 w-4 text-[#f59e0b]" /> Turnkey 2–4 Wk Deployment</div>
            </div>
          </div>

          <div className="rounded-xl border border-[#27272a] bg-[#09090b] p-6 text-center">
            <div className="mb-3 flex justify-center text-[#f59e0b]">
              <Target className="h-9 w-9 text-[#f59e0b]" />
            </div>
            <div className="text-xl font-bold text-[#f59e0b]">391% Average Conversion Lift</div>
            <p className="mt-1.5 text-xs text-[#71717a]">
              78% of customers buy from the vendor that responds first. Speed-to-lead is your ultimate competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="mx-auto max-w-[1200px] px-6 py-14">
        <h2 className="mb-8 text-center text-2xl font-semibold text-[#fafafa]">
          What clients say
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-xl border border-[#27272a] bg-[#18181b] p-6">
              <div className="mb-3 flex items-center gap-1 text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#f59e0b]" />
                ))}
              </div>
              <p className="mb-4 text-sm italic leading-relaxed text-[#a1a1aa]">
                "{t.quote}"
              </p>
              <div className="text-sm font-semibold text-[#fafafa]">{t.name}</div>
              <div className="mt-0.5 text-xs text-[#71717a]">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="mx-auto max-w-[900px] border-t border-[#27272a] px-6 pb-20 pt-10">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold tracking-wider text-[#f59e0b]">GOT QUESTIONS?</span>
          <h2 className="mt-2 text-3xl font-bold text-[#fafafa]">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => (
            <div
              key={faq.q}
              onClick={() => toggleFaq(index)}
              className="cursor-pointer rounded-lg border border-[#27272a] bg-[#18181b] p-5 transition-colors hover:border-[#3f3f46]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="m-0 text-base font-semibold text-[#fafafa]">{faq.q}</h3>
                <span className="text-xl font-bold text-[#f59e0b]">
                  {openFaq === index ? "−" : "+"}
                </span>
              </div>
              {openFaq === index && (
                <p className="mb-0 mt-3 text-sm leading-relaxed text-[#a1a1aa]">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#27272a] p-6 text-center text-xs text-[#52525b]">
        © 2026 Zen Miraculous. All rights reserved.{" "}
        <a href="/privacy" className="ml-2 text-[#71717a] hover:underline">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
