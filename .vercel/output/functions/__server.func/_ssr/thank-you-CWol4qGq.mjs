import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Calendar, g as CircleCheck, v as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/thank-you-CWol4qGq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CountdownRedirect({ seconds = 3, url, cancelled = false }) {
	const [count, setCount] = (0, import_react.useState)(seconds);
	(0, import_react.useEffect)(() => {
		if (cancelled) return;
		if (count <= 0) {
			if (typeof window.fbq === "function") window.fbq("track", "Schedule");
			window.location.href = url;
			return;
		}
		const timer = setTimeout(() => setCount((c) => c - 1), 1e3);
		return () => clearTimeout(timer);
	}, [
		count,
		url,
		cancelled
	]);
	if (cancelled) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-center text-xs text-[#71717a]",
		children: [
			"Booking page opened in a new tab.",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: url,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "text-[#f59e0b] underline",
				children: "Reopen it →"
			})
		]
	});
	const progress = count / seconds * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-2.5 text-sm text-[#71717a]",
				children: [
					"Redirecting you to our booking page in",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold text-[#f59e0b]",
						children: [count, "s"]
					}),
					"..."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "progress-bar-track mb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "progress-bar-fill",
					style: { width: `${progress}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: url,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "text-xs text-[#f59e0b] underline",
				children: "Not redirecting? Click here →"
			})
		]
	});
}
function ThankYouPage() {
	const { name: leadName, email: leadEmail } = useSearch({ from: "/thank-you" });
	const [cancelled, setCancelled] = (0, import_react.useState)(false);
	const CALENDLY_URL = "https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07";
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-[#09090b] px-6 py-10 text-[#fafafa]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-[560px] text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#22c55e] bg-[rgba(34,197,94,0.15)] text-2xl text-[#22c55e]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 text-[#22c55e]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-4 text-[clamp(24px,4vw,34px)] font-bold tracking-tight text-[#fafafa]",
					children: "You're in — we'll be in touch shortly."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-8 text-base leading-relaxed text-[#a1a1aa]",
					children: [leadName ? `Thanks, ${leadName}! ` : "Thanks for reaching out! ", "Your free AI system audit request has been received. To lock in your spot right now, book your 1:1 strategy call below — it takes 60 seconds."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "btn-amber mb-7 py-4 text-base",
					onClick: handleBookNow,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-5 w-5" }), " Book Your Free 1:1 Strategy Call Now"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownRedirect, {
					seconds: 3,
					url: finalUrl,
					cancelled
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 mt-7 text-xs text-[#52525b]",
					children: "You'll speak directly with Harsh Vyas — no reps, no pressure, no fluff."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl border border-[#27272a] bg-[#18181b] p-5 text-left",
					children: [
						"30-minute session, no strings attached",
						"We diagnose your current lead setup live on the call",
						"You leave with a clear plan, even if we never work together"
					].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2.5 flex items-start gap-2.5 text-sm text-[#a1a1aa] last:mb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 font-bold text-[#22c55e]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[#22c55e]" })
						}), b]
					}, b))
				})
			]
		})
	});
}
//#endregion
export { ThankYouPage as component };
