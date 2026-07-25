import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { CheckCircle2, Calendar, Check } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      name: typeof search.name === "string" ? search.name : "",
      email: typeof search.email === "string" ? search.email : "",
    };
  },
  head: () => ({
    meta: [
      { title: "Audit Request Received — Zen Miraculous" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

function CountdownRedirect({ seconds = 3, url, cancelled = false }: { seconds?: number; url: string; cancelled?: boolean }) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (cancelled) return;
    if (count <= 0) {
      if (typeof window.fbq === "function") window.fbq("track", "Schedule");
      window.location.href = url;
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, url, cancelled]);

  if (cancelled) {
    return (
      <p className="text-center text-xs text-[#71717a]">
        Booking page opened in a new tab.{" "}
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] underline">
          Reopen it →
        </a>
      </p>
    );
  }

  const progress = (count / seconds) * 100;
  return (
    <div className="text-center">
      <p className="mb-2.5 text-sm text-[#71717a]">
        Redirecting you to our booking page in{" "}
        <span className="font-bold text-[#f59e0b]">{count}s</span>...
      </p>
      <div className="progress-bar-track mb-3">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-[#f59e0b] underline"
      >
        Not redirecting? Click here →
      </a>
    </div>
  );
}

function ThankYouPage() {
  const { name: leadName, email: leadEmail } = useSearch({ from: "/thank-you" });
  const [cancelled, setCancelled] = useState(false);

  const CALENDLY_URL =
    import.meta.env.VITE_CALENDLY_URL ||
    "https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07";

  const buildCalendlyUrl = () => {
    try {
      const u = new URL(CALENDLY_URL);
      if (leadName) u.searchParams.set("name", leadName);
      if (leadEmail) u.searchParams.set("email", leadEmail);
      return u.toString();
    } catch {
      return CALENDLY_URL;
    }
  };
  const finalUrl = buildCalendlyUrl();

  const handleBookNow = () => {
    setCancelled(true);
    if (typeof window.fbq === "function") window.fbq("track", "Schedule");
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#09090b] px-6 py-10 text-[#fafafa]">
      <div className="w-full max-w-[560px] text-center">
        {/* Check icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#22c55e] bg-[rgba(34,197,94,0.15)] text-2xl text-[#22c55e]">
          <CheckCircle2 className="h-8 w-8 text-[#22c55e]" />
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-[clamp(24px,4vw,34px)] font-bold tracking-tight text-[#fafafa]">
          You're in — we'll be in touch shortly.
        </h1>

        {/* Subtext */}
        <p className="mb-8 text-base leading-relaxed text-[#a1a1aa]">
          {leadName ? `Thanks, ${leadName}! ` : "Thanks for reaching out! "}
          Your free AI system audit request has been received. To lock in your spot right now, book your 1:1 strategy call below — it takes 60 seconds.
        </p>

        {/* PRIMARY CTA BUTTON */}
        <button
          className="btn-amber mb-7 py-4 text-base"
          onClick={handleBookNow}
        >
          <Calendar className="h-5 w-5" /> Book Your Free 1:1 Strategy Call Now
        </button>

        {/* COUNTDOWN REDIRECT */}
        <CountdownRedirect seconds={3} url={finalUrl} cancelled={cancelled} />

        {/* Reassurance */}
        <p className="mb-5 mt-7 text-xs text-[#52525b]">
          You'll speak directly with Harsh Vyas — no reps, no pressure, no fluff.
        </p>

        {/* Benefits */}
        <div className="rounded-xl border border-[#27272a] bg-[#18181b] p-5 text-left">
          {[
            "30-minute session, no strings attached",
            "We diagnose your current lead setup live on the call",
            "You leave with a clear plan, even if we never work together",
          ].map((b) => (
            <div key={b} className="mb-2.5 flex items-start gap-2.5 text-sm text-[#a1a1aa] last:mb-0">
              <span className="shrink-0 font-bold text-[#22c55e]">
                <Check className="h-4 w-4 text-[#22c55e]" />
              </span>
              {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
