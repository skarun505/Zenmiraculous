import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Target, d as Lock, f as Handshake, g as CircleCheck, o as Star, p as FileText, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/landing-F_2cp7IO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BUSINESS_TYPES = [
	"Mortgage Broker",
	"Immigration Consultant",
	"Roofing Company",
	"HVAC Company",
	"Law Firm",
	"Solar Company",
	"Commercial Finance Broker",
	"Debt Relief Firm",
	"Home Remodeling",
	"Other"
];
var FORMSPREE_URL = "https://formspree.io/f/xykrbjbk";
function LeadForm() {
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		phone: "",
		businessType: "",
		challenge: "",
		consent: false,
		website: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)("");
	const validate = () => {
		const e = {};
		if (!form.name.trim()) e.name = "Full name is required.";
		if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid business email required.";
		if (!form.phone.trim() || form.phone.length < 7) e.phone = "Valid phone number required.";
		if (!form.businessType) e.businessType = "Please select your business type.";
		if (!form.consent) e.consent = "Consent is required to submit.";
		return e;
	};
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({
			...form,
			[name]: type === "checkbox" ? checked : value
		});
		if (errors[name]) setErrors({
			...errors,
			[name]: ""
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitError("");
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		if (form.website) {
			await new Promise((r) => setTimeout(r, 400));
			navigate({
				to: "/thank-you",
				search: {
					name: form.name.trim().split(" ")[0],
					email: form.email.trim()
				}
			});
			return;
		}
		setLoading(true);
		try {
			if (typeof window.fbq === "function") window.fbq("track", "Lead");
			if (typeof window.gtag === "function") window.gtag("event", "conversion", { send_to: "AW-XXXXXXXXXX/XXXXXXXX" });
			const params = new URLSearchParams(window.location.search);
			const attribution = {
				utm_source: params.get("utm_source") || "",
				utm_medium: params.get("utm_medium") || "",
				utm_campaign: params.get("utm_campaign") || "",
				utm_term: params.get("utm_term") || "",
				utm_content: params.get("utm_content") || "",
				gclid: params.get("gclid") || "",
				fbclid: params.get("fbclid") || "",
				landing_url: window.location.href
			};
			const payload = {
				name: form.name,
				email: form.email,
				phone: form.phone,
				businessType: form.businessType,
				challenge: form.challenge,
				consent: form.consent,
				consent_timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				...attribution
			};
			if (FORMSPREE_URL.includes("YOUR_FORM_ID")) {
				console.log("[Dev Mode] Form submitted successfully:", payload);
				await new Promise((r) => setTimeout(r, 400));
				navigate({
					to: "/thank-you",
					search: {
						name: form.name.trim().split(" ")[0],
						email: form.email.trim()
					}
				});
				return;
			}
			if ((await fetch(FORMSPREE_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify(payload)
			})).ok) navigate({
				to: "/thank-you",
				search: {
					name: form.name.trim().split(" ")[0],
					email: form.email.trim()
				}
			});
			else setSubmitError("Something went wrong. Please check your Formspree endpoint or email us directly.");
		} catch {
			setSubmitError("Network error. Please check your connection and try again.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			background: "#18181b",
			border: "1px solid #27272a",
			borderRadius: "14px",
			padding: "28px"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { marginBottom: "24px" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				style: {
					fontSize: "20px",
					fontWeight: 700,
					marginBottom: "6px"
				},
				children: "Get Your Free AI System Plan"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					fontSize: "13px",
					color: "#71717a",
					lineHeight: 1.6
				},
				children: "Tell us about your business and we'll show you exactly what your custom AI system would look like."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			noValidate: true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					name: "website",
					value: form.website,
					onChange: handleChange,
					tabIndex: -1,
					autoComplete: "off",
					"aria-hidden": "true",
					style: {
						position: "absolute",
						left: "-9999px",
						height: 0,
						opacity: 0,
						pointerEvents: "none"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { marginBottom: "16px" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "form-label",
							htmlFor: "name",
							children: "Full Name *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							name: "name",
							type: "text",
							value: form.name,
							onChange: handleChange,
							placeholder: "John Smith",
							className: `form-input ${errors.name ? "error" : ""}`,
							autoComplete: "name"
						}),
						errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "form-error",
							children: errors.name
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { marginBottom: "16px" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "form-label",
							htmlFor: "email",
							children: "Business Email *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							name: "email",
							type: "email",
							value: form.email,
							onChange: handleChange,
							placeholder: "john@yourbusiness.com",
							className: `form-input ${errors.email ? "error" : ""}`,
							autoComplete: "email"
						}),
						errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "form-error",
							children: errors.email
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { marginBottom: "16px" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "form-label",
							htmlFor: "phone",
							children: "Phone Number *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							name: "phone",
							type: "tel",
							value: form.phone,
							onChange: handleChange,
							placeholder: "+1 555 000 0000",
							className: `form-input ${errors.phone ? "error" : ""}`,
							autoComplete: "tel"
						}),
						errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "form-error",
							children: errors.phone
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { marginBottom: "16px" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "form-label",
							htmlFor: "businessType",
							children: "Business Type *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "businessType",
							name: "businessType",
							value: form.businessType,
							onChange: handleChange,
							className: `form-input ${errors.businessType ? "error" : ""}`,
							style: { appearance: "auto" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select your industry..."
							}), BUSINESS_TYPES.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: b,
								children: b
							}, b))]
						}),
						errors.businessType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "form-error",
							children: errors.businessType
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { marginBottom: "20px" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "form-label",
						htmlFor: "challenge",
						children: "Biggest Lead Challenge (optional)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "challenge",
						name: "challenge",
						value: form.challenge,
						onChange: handleChange,
						placeholder: "e.g. We get 50+ leads a month but only convert 10% because follow-up is too slow...",
						className: "form-input",
						rows: 3,
						style: { resize: "vertical" }
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: { marginBottom: "20px" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						style: {
							display: "flex",
							alignItems: "flex-start",
							gap: "10px",
							fontSize: "12px",
							color: "#71717a",
							lineHeight: 1.6,
							cursor: "pointer"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							name: "consent",
							checked: form.consent,
							onChange: handleChange,
							style: {
								marginTop: "2px",
								accentColor: "#f59e0b"
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"I agree to receive calls, texts, and emails from Zen Miraculous about my inquiry, including via automated technology and AI voice assistant. Consent is not a condition of purchase. Msg & data rates may apply. Reply STOP to opt out. See our",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/privacy",
								style: {
									color: "#a1a1aa",
									textDecoration: "underline"
								},
								children: "Privacy Policy"
							}),
							"."
						] })]
					}), errors.consent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "form-error",
						children: errors.consent
					})]
				}),
				submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						background: "rgba(239,68,68,0.1)",
						border: "1px solid #ef4444",
						borderRadius: "8px",
						padding: "12px",
						color: "#f87171",
						fontSize: "13px",
						marginBottom: "16px"
					},
					children: submitError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "btn-amber",
					disabled: loading,
					style: {
						opacity: loading ? .7 : 1,
						cursor: loading ? "not-allowed" : "pointer"
					},
					children: loading ? "Submitting..." : "Get My Free AI System Plan →"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						fontSize: "12px",
						color: "#52525b",
						textAlign: "center",
						marginTop: "12px",
						lineHeight: 1.5,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "4px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-[#52525b]" }), " No spam. No sales reps. You speak directly to Harsh."]
				})
			]
		})]
	});
}
var PAIN_POINTS = [
	{
		title: "Slow response kills deals",
		desc: "Manual follow-up takes hours. Buyers move on in minutes. Speed-to-lead is everything."
	},
	{
		title: "After-hours dead zone",
		desc: "70% of leads come outside business hours. Without automation, you miss them all."
	},
	{
		title: "Low show rates drain revenue",
		desc: "No automated reminders means half your booked calls ghost you at the last minute."
	}
];
var STATS = [
	{
		value: "<60s",
		label: "Lead response"
	},
	{
		value: "24/7",
		label: "Always on"
	},
	{
		value: "2–4 wks",
		label: "To live"
	}
];
var TESTIMONIALS = [
	{
		quote: "Within the first week our lead response time went from 4 hours to under a minute. We finally stopped losing deals to the business that called first.",
		name: "Marcus Chen",
		role: "Mortgage Broker, Toronto"
	},
	{
		quote: "Harsh built the entire system in under 3 weeks. It handles repetitive intake so my team only talks to serious prospects. Total game-changer.",
		name: "Priya Sharma",
		role: "Immigration Consultant, London"
	},
	{
		quote: "Emergency calls at 2am used to go straight to voicemail. The Voice AI books them into the calendar overnight. It pays for itself every week.",
		name: "Jordan Blake",
		role: "HVAC Company, Phoenix"
	}
];
var FAQS = [
	{
		q: "How fast will my custom AI lead system be built and live?",
		a: "Your complete AI lead capture and appointment booking system is built, tested, and fully deployed in 2 to 4 weeks. We handle 100% of the technical setup, prompt engineering, CRM integration, and end-to-end testing."
	},
	{
		q: "Will this AI replace my existing sales team or CRM?",
		a: "No. The AI system acts as your 24/7 lead triage assistant. It connects directly with your current CRM (GoHighLevel, HubSpot, Salesforce, etc.) to instantly qualify leads, answer preliminary questions, and book serious prospects straight onto your calendar."
	},
	{
		q: "How does the AI handle after-hours inquiries at 2:00 AM or on weekends?",
		a: "Over 70% of inbound paid ad leads arrive outside normal office hours. The moment a lead submits a form or sends a message, our AI responds in under 60 seconds via SMS, WhatsApp, or Voice — starting the conversation immediately while your competitors sleep."
	},
	{
		q: "Is the AI lead system TCPA and GDPR compliant?",
		a: "Yes, 100%. All systems are designed with strict consent checkboxes, opt-in logging, unsubscribe mechanisms, and enterprise-grade 256-bit encryption. Consent timestamps are stored automatically for complete legal proof."
	},
	{
		q: "What kind of ROI and conversion increase can I expect?",
		a: "Speed-to-lead is the single biggest factor in conversion rates. Responding in under 60 seconds increases lead-to-appointment conversion by up to 391% compared to manual follow-up over 1 hour later."
	}
];
var COMPARISON = [
	{
		feature: "Speed-to-Lead Response",
		traditional: "2 to 6 hours average (or next day)",
		aiSystem: "Under 60 seconds (24/7 instant)",
		aiIcon: "bolt"
	},
	{
		feature: "After-Hours & Weekend Lead Handling",
		traditional: "Voicemail or ignored until Monday",
		aiSystem: "100% automated intake & calendar booking",
		aiIcon: "check"
	},
	{
		feature: "Lead Qualification Efficiency",
		traditional: "Manual phone tag & unqualified calls",
		aiSystem: "Automated AI screening filters bad leads out",
		aiIcon: "check"
	},
	{
		feature: "Show-Up Rate Protection",
		traditional: "No reminders, up to 50% ghosting",
		aiSystem: "2-step SMS & email reminders (85%+ show rate)",
		aiIcon: "check"
	},
	{
		feature: "Setup & Management Effort",
		traditional: "Hiring & training expensive staff",
		aiSystem: "100% Done-for-you build in 2–4 weeks",
		aiIcon: "check"
	}
];
var STEPS = [
	{
		num: "01",
		title: "Instant Lead Engagement (<60s)",
		desc: "The instant a paid ad lead touches your form or ad, our AI initiates immediate outreach via SMS, Email, or Voice AI."
	},
	{
		num: "02",
		title: "Intelligent AI Qualification",
		desc: "The AI asks natural, pre-vetted qualification questions tailored to your exact industry parameters before offering a call."
	},
	{
		num: "03",
		title: "Direct Calendar Booking",
		desc: "Qualified prospects choose a time slot on your live calendar and receive automated confirmation & reminder notifications."
	}
];
function LandingPage() {
	const [openFaq, setOpenFaq] = (0, import_react.useState)(null);
	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#09090b] text-[#fafafa]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "sticky top-0 z-50 flex items-center justify-between border-b border-[#27272a] bg-[#09090b] px-6 py-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "text-lg font-bold text-[#fafafa] no-underline",
					children: "Zen Miraculous"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "text-sm font-semibold text-[#f59e0b] no-underline hover:text-[#d97706]",
					children: "Book a Call →"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-[1200px] px-6 pb-10 pt-10 lg:pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-5 inline-block rounded-full bg-[#fef3c7] px-3.5 py-1 text-xs font-semibold tracking-wide text-[#92400e]",
								children: "Free 30-Min Strategy Audit — No Obligation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mb-5 text-[clamp(28px,4vw,46px)] font-bold leading-[1.15] tracking-tight text-[#fafafa]",
								children: "Stop Losing High-Ticket Leads to Slow Follow-Up"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "my-6 block lg:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-8 text-lg leading-relaxed text-[#a1a1aa]",
								children: "Zen Miraculous builds done-for-you AI systems that respond in under 60 seconds, qualify your leads, and book appointments 24/7 — while you sleep, on weekends, at 2am."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-9 flex flex-wrap gap-6",
								children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-2xl font-bold text-[#f59e0b]",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-xs text-[#71717a]",
									children: s.label
								})] }, s.value))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-7 flex flex-col gap-3",
								children: PAIN_POINTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-[#27272a] border-l-4 border-l-[#f59e0b] bg-[#18181b] p-3.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-1 text-sm font-semibold text-[#fafafa]",
										children: p.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs leading-relaxed text-[#a1a1aa]",
										children: p.desc
									})]
								}, p.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex flex-wrap items-center gap-1.5 text-xs text-[#71717a]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex items-center gap-0.5 text-[#f59e0b]",
									children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-[#f59e0b]" }, i))
								}), "Trusted by mortgage brokers, law firms, HVAC companies & more across US, UK, Canada & Australia"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:sticky lg:top-20 lg:block lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeadForm, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[1200px] border-t border-[#27272a] px-6 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-widest text-[#f59e0b]",
							children: "Proven 3-Step Process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-[clamp(24px,3.5vw,36px)] font-bold text-[#fafafa]",
							children: "How Zen Miraculous AI Converts Leads 24/7"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-[640px] text-sm text-[#a1a1aa]",
							children: "Our done-for-you AI system handles every step from instant initial contact to direct calendar booking, completely hands-free."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 md:grid-cols-3",
					children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-[#27272a] bg-[#18181b] p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-4 text-3xl font-extrabold text-[#f59e0b]",
								children: s.num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-2 text-lg font-semibold text-[#fafafa]",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-[#a1a1aa]",
								children: s.desc
							})
						]
					}, s.num))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[1200px] border-t border-[#27272a] px-6 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[clamp(24px,3.5vw,36px)] font-bold text-[#fafafa]",
						children: "Traditional Manual Follow-Up vs. Zen Miraculous AI"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-[#a1a1aa]",
						children: "Why leading service businesses are upgrading from slow manual intake to instant AI automation."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[600px] border-collapse text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-[#27272a] bg-[#18181b]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-sm font-semibold text-[#fafafa]",
									children: "Key Feature"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-sm font-semibold text-[#ef4444]",
									children: "Traditional Follow-Up"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "p-4 text-sm font-semibold text-[#f59e0b]",
									children: "Zen Miraculous AI System"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: COMPARISON.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: `border-b border-[#27272a] ${i % 2 === 0 ? "bg-[#09090b]" : "bg-[#141417]"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4 text-sm font-semibold text-[#fafafa]",
									children: c.feature
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "p-4 text-sm text-[#71717a]",
									children: c.traditional
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "p-4 text-sm font-semibold text-[#fafafa]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mr-1.5 inline-flex items-center text-[#f59e0b]",
										children: c.aiIcon === "bolt" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" })
									}), c.aiSystem]
								})
							]
						}, c.feature)) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-[1200px] border-t border-[#27272a] px-6 py-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 items-center gap-8 rounded-2xl border border-[#27272a] bg-[#18181b] p-9 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold tracking-wider text-[#f59e0b]",
							children: "100% HIGH-TRUST PROMISE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 mt-2 text-2xl font-bold text-[#fafafa]",
							children: "Built Directly by Senior AI Engineers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-5 text-sm leading-relaxed text-[#a1a1aa]",
							children: [
								"When you work with Zen Miraculous, you work directly with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Harsh Vyas" }),
								" and senior AI specialists. No junior account managers, no generic copy-paste templates, and no outsourced fluff."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 text-xs text-[#fafafa]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-[#f59e0b]" }), " 256-Bit Data Encryption"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-[#f59e0b]" }), " 99.9% Uptime Guarantee"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4 text-[#f59e0b]" }), " TCPA & GDPR Compliant"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "h-4 w-4 text-[#f59e0b]" }), " Turnkey 2–4 Wk Deployment"]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-[#27272a] bg-[#09090b] p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex justify-center text-[#f59e0b]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-9 w-9 text-[#f59e0b]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xl font-bold text-[#f59e0b]",
								children: "391% Average Conversion Lift"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-[#71717a]",
								children: "78% of customers buy from the vendor that responds first. Speed-to-lead is your ultimate competitive advantage."
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[1200px] px-6 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-8 text-center text-2xl font-semibold text-[#fafafa]",
					children: "What clients say"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-4 md:grid-cols-3",
					children: TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-[#27272a] bg-[#18181b] p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 flex items-center gap-1 text-[#f59e0b]",
								children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-[#f59e0b]" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-4 text-sm italic leading-relaxed text-[#a1a1aa]",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-[#fafafa]",
								children: t.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-xs text-[#71717a]",
								children: t.role
							})
						]
					}, t.name))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[900px] border-t border-[#27272a] px-6 pb-20 pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold tracking-wider text-[#f59e0b]",
						children: "GOT QUESTIONS?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-bold text-[#fafafa]",
						children: "Frequently Asked Questions"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-4",
					children: FAQS.map((faq, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => toggleFaq(index),
						className: "cursor-pointer rounded-lg border border-[#27272a] bg-[#18181b] p-5 transition-colors hover:border-[#3f3f46]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "m-0 text-base font-semibold text-[#fafafa]",
								children: faq.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl font-bold text-[#f59e0b]",
								children: openFaq === index ? "−" : "+"
							})]
						}), openFaq === index && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-0 mt-3 text-sm leading-relaxed text-[#a1a1aa]",
							children: faq.a
						})]
					}, faq.q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-[#27272a] p-6 text-center text-xs text-[#52525b]",
				children: [
					"© 2026 Zen Miraculous. All rights reserved.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/privacy",
						className: "ml-2 text-[#71717a] hover:underline",
						children: "Privacy Policy"
					})
				]
			})
		]
	});
}
//#endregion
export { LandingPage as component };
