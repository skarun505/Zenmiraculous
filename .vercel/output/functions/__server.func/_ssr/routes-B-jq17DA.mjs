import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { S as ArrowRight, _ as ChevronDown, b as Calendar, c as Phone, g as CircleCheck, h as Clock, i as TrendingDown, l as MessageSquare, m as Database, n as X, o as Star, r as UserX, s as Sparkles, t as Zap, u as Menu, x as Bot, y as ChartLine } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B-jq17DA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BOOKING_URL = "https://calendly.com/harshvyas242424/business-automation-audit";
var industries = [
	{
		name: "Mortgage Brokers",
		pain: "Leads go cold before manual follow-up happens. Speed-to-lead is everything."
	},
	{
		name: "Immigration Consultants",
		pain: "High inquiry volume, low conversion. Hours lost answering repeat questions."
	},
	{
		name: "Roofing Companies",
		pain: "Seasonal spikes overwhelm your team. Jobs lost to faster competitors."
	},
	{
		name: "HVAC Companies",
		pain: "After-hours emergency leads go unanswered. No maintenance reminder system."
	},
	{
		name: "Law Firms",
		pain: "Potential clients ghost after inquiry. Manual intake nurture is non-existent."
	},
	{
		name: "Solar Companies",
		pain: "3–6 month decision cycles. Leads go cold without consistent nurturing."
	},
	{
		name: "Commercial Finance Brokers",
		pain: "B2B leads need fast, professional outreach. Pipeline is chaos."
	},
	{
		name: "Debt Relief Firms",
		pain: "Sensitive leads need trust-building before they'll convert."
	},
	{
		name: "Home Remodeling",
		pain: "High quote volume, low close rate. Zero follow-up after quoting."
	}
];
var steps = [
	{
		icon: Database,
		title: "CRM Setup",
		desc: "Full pipeline, automations, calendar, and forms — configured for your business from day one."
	},
	{
		icon: Phone,
		title: "Voice AI Agent",
		desc: "Calls every new lead within 60 seconds, qualifies them, and books the appointment."
	},
	{
		icon: MessageSquare,
		title: "LLM Follow-Up",
		desc: "Human-feeling SMS and email sequences that nurture leads until they're ready to buy."
	},
	{
		icon: Calendar,
		title: "Appointment Nurture",
		desc: "Reminders and re-engagement flows that dramatically cut no-shows."
	},
	{
		icon: ChartLine,
		title: "Reporting Dashboard",
		desc: "See leads in, appointments booked, and deals closed — all in one place."
	}
];
var testimonials = [
	{
		name: "Marcus Chen",
		role: "Mortgage Broker, Toronto",
		stars: 5,
		quote: "Within the first week our lead response time went from 4 hours to under a minute. The booked-call rate jumped and we finally stopped losing deals to the guy who called first."
	},
	{
		name: "Priya Sharma",
		role: "Immigration Consultant, London",
		stars: 5,
		quote: "Harsh built the entire system in under 3 weeks. It handles the repetitive intake questions so my team only talks to serious prospects. Total game-changer."
	},
	{
		name: "David O'Sullivan",
		role: "Roofing Co. Owner, Dallas",
		stars: 5,
		quote: "During storm season we used to drown in leads. Now the AI qualifies them, books estimates, and my crews stay booked out weeks in advance."
	},
	{
		name: "Sarah Whitfield",
		role: "Family Law Firm, Sydney",
		stars: 5,
		quote: "Our intake used to bleed potential clients. The nurture sequence Harsh built brings back people who ghosted us — I never thought AI could feel this human."
	},
	{
		name: "Jordan Blake",
		role: "HVAC Company, Phoenix",
		stars: 5,
		quote: "Emergency calls at 2am used to go straight to voicemail. The Voice AI books them into the calendar overnight. It literally pays for itself every week."
	},
	{
		name: "Alicia Ramos",
		role: "Solar Sales, San Diego",
		stars: 5,
		quote: "Solar is a long game. Their nurture flows kept us in front of leads for months without me lifting a finger. Closed deals I would have written off."
	},
	{
		name: "Ben Alderman",
		role: "Commercial Finance Broker, Manchester",
		stars: 5,
		quote: "Direct access to Harsh, no juniors, no fluff. He understood our niche in one call and shipped exactly what he promised."
	},
	{
		name: "Nathan Cole",
		role: "Home Remodeling, Vancouver",
		stars: 5,
		quote: "Every quote used to disappear into a black hole. Now every lead gets followed up 8+ times automatically. Our close rate more than doubled."
	}
];
var faqs = [
	{
		q: "What exactly does Zen Miraculous do?",
		a: "We build done-for-you AI lead conversion systems: instant response, AI qualification, calendar booking, and long-term nurture — running 24/7 so no lead ever goes cold."
	},
	{
		q: "Where are you based?",
		a: "The agency is based in India and works exclusively with clients in the USA, UK, Canada, and Australia. All communication and delivery is in English, built for Western markets."
	},
	{
		q: "How long does setup take?",
		a: "A typical build is 2–4 weeks from kickoff to fully live."
	},
	{
		q: "Do you offer a free trial?",
		a: "No — instead we offer a free strategy call where we diagnose your current setup and map out what a system for your business would look like."
	},
	{
		q: "What results can we expect?",
		a: "Results depend entirely on your current lead volume and niche. We discuss realistic expectations on the call rather than promising numbers upfront."
	},
	{
		q: "Can I see a case study?",
		a: "Yes — we share the most relevant case studies after a quick conversation so what you see actually matches your industry and situation."
	},
	{
		q: "Who do I speak to on the call?",
		a: "You speak directly with Harsh, the founder. No reps, no juniors, no sales layer."
	},
	{
		q: "What software do you use?",
		a: "A robust CRM platform for automation, plus Voice AI and custom LLM sequences. We integrate with your existing tools wherever possible."
	},
	{
		q: "Is there a monthly cost?",
		a: "Every system is scoped to your business — the strategy call is where we walk through the setup and ongoing structure that fits your volume."
	}
];
function Home() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display font-bold text-lg truncate",
								children: "Zen Miraculous"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how",
									className: "hover:text-foreground transition",
									children: "How It Works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#industries",
									className: "hover:text-foreground transition",
									children: "Industries"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#testimonials",
									className: "hover:text-foreground transition",
									children: "Results"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#faq",
									className: "hover:text-foreground transition",
									children: "FAQ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/landing",
									className: "hover:text-foreground transition text-primary font-medium",
									children: "Ads Landing Page"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: BOOKING_URL,
							target: "_blank",
							rel: "noopener",
							className: "hidden md:inline-flex btn-primary text-sm",
							children: ["Book a Free Call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMenuOpen((v) => !v),
							className: "md:hidden p-2 -mr-2 text-foreground",
							"aria-label": "Toggle menu",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
						})
					]
				}), menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-4 py-4 flex flex-col gap-1 text-sm",
						children: [[
							["How It Works", "#how"],
							["Industries", "#industries"],
							["Results", "#testimonials"],
							["FAQ", "#faq"]
						].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							onClick: () => setMenuOpen(false),
							className: "py-3 px-2 rounded-lg hover:bg-surface text-muted-foreground hover:text-foreground",
							children: label
						}, href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: BOOKING_URL,
							target: "_blank",
							rel: "noopener",
							onClick: () => setMenuOpen(false),
							className: "btn-primary mt-3 w-full",
							children: ["Book a Free Strategy Call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative pt-32 pb-20 sm:pt-40 sm:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 pointer-events-none",
						style: { background: "var(--gradient-hero)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-7xl mx-auto px-4 sm:px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs sm:text-sm text-muted-foreground mb-6 animate-float",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary shadow-[0_0_12px] shadow-primary" }), "AI-powered lead conversion — live 24/7"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight",
								children: [
									"Your leads are going ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-destructive",
										children: "cold"
									}),
									".",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
										children: "We fix that in 60 seconds."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground px-2",
								children: "Zen Miraculous builds done-for-you AI systems that instantly respond, qualify, and book every lead you get — while you sleep, on weekends, at 2am. No more missed opportunities."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 px-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: BOOKING_URL,
									target: "_blank",
									rel: "noopener",
									className: "btn-primary w-full sm:w-auto",
									children: ["Book a Free Strategy Call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#how",
									className: "btn-ghost w-full sm:w-auto",
									children: "See How It Works"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs sm:text-sm text-muted-foreground",
								children: "Trusted by high-ticket service businesses across the US, UK, Canada & Australia"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto",
								children: [
									{
										k: "<60s",
										v: "Lead response"
									},
									{
										k: "24/7",
										v: "Always on"
									},
									{
										k: "2–4 wks",
										v: "To live"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-surface/60 backdrop-blur px-3 py-4 sm:px-6 sm:py-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
										children: s.k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs sm:text-sm text-muted-foreground mt-1",
										children: s.v
									})]
								}, s.v))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 sm:py-28 border-t border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3",
								children: "The Problem"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-5xl font-bold leading-tight",
								children: "Every lead you don't answer in 5 minutes is money in a competitor's pocket."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-muted-foreground text-lg",
								children: "You spend thousands on ads, SEO, and referrals. Then leads come in — and sit. By the time someone follows up, they've already booked with the business that called first."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
						children: [
							{
								icon: Clock,
								title: "Slow response",
								desc: "Manual follow-up takes hours. Buyers move on in minutes."
							},
							{
								icon: UserX,
								title: "Ghosted leads",
								desc: "Nobody nurtures them, so they disappear forever."
							},
							{
								icon: TrendingDown,
								title: "Low show rates",
								desc: "No reminders means half your booked calls never show."
							},
							{
								icon: Zap,
								title: "After-hours dead zone",
								desc: "70% of leads come outside business hours. You miss them all."
							}
						].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-surface p-6 hover:border-primary/50 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-6 w-6 text-primary mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-lg",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: p.desc
								})
							]
						}, p.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "how",
				className: "py-20 sm:py-28 bg-surface/30 border-y border-border/50 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3",
								children: "How It Works"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-5xl font-bold leading-tight",
								children: "One complete system. Five moving parts."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-muted-foreground text-lg",
								children: "Lead comes in → AI responds in under 60 seconds → qualifies → books the call → nurtures until they show up. Fully automated, end to end."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
						children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-2xl border border-border bg-background p-6 group hover:border-primary/60 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -top-3 -left-3 h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center font-bold text-primary-foreground text-sm",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-8 w-8 text-primary mb-4" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-semibold text-xl",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: s.desc
								})
							]
						}, s.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "industries",
				className: "py-20 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl mb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3",
								children: "Industries We Serve"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-5xl font-bold leading-tight",
								children: "Built for high-ticket service businesses."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-muted-foreground text-lg",
								children: "Every industry has a different follow-up problem. We've built systems for all of them."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
						children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: BOOKING_URL,
							target: "_blank",
							rel: "noopener",
							className: "group rounded-2xl border border-border bg-surface p-6 hover:border-primary hover:bg-surface-2 transition",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-semibold text-lg",
									children: ind.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: ind.pain
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 text-sm text-primary inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition",
									children: ["See your build ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						}, ind.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 sm:py-28 bg-surface/30 border-y border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3",
							children: "Why Zen Miraculous"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-5xl font-bold leading-tight",
							children: "Not another ads shop. Not a chatbot vendor. A full system."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground text-lg",
							children: "Most agencies sell you one piece. We build the entire lead-to-appointment engine — CRM, AI voice, follow-up, nurture, reporting — as one unified system that actually works together."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							"Direct access to the founder — no reps, no juniors, no handoffs",
							"One complete system instead of a stack of disconnected tools",
							"Built specifically for high-ticket service businesses ($1k+ deals)",
							"Live in 2–4 weeks — not months of endless discovery calls",
							"Scoped to your exact volume and niche, not a template"
						].map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-background p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm sm:text-base",
								children: point
							})]
						}, point))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "testimonials",
				className: "py-20 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-2xl mb-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3",
								children: "What Clients Say"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-5xl font-bold leading-tight",
								children: "Results across industries and time zones."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
							children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-surface p-6 flex flex-col",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-0.5 text-primary mb-3",
										children: Array.from({ length: t.stars }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm sm:text-base leading-relaxed flex-1",
										children: [
											"\"",
											t.quote,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 pt-4 border-t border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-semibold text-sm",
											children: t.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: t.role
										})]
									})
								]
							}, t.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-16 overflow-hidden border-y border-border/50 py-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-12 animate-marquee whitespace-nowrap text-muted-foreground text-sm font-medium uppercase tracking-widest",
								children: [...Array(2)].map((_, dup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-12 items-center",
									children: [
										"Mortgage · Toronto",
										"Immigration · London",
										"Roofing · Dallas",
										"Law · Sydney",
										"HVAC · Phoenix",
										"Solar · San Diego",
										"Finance · Manchester",
										"Remodeling · Vancouver"
									].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }),
											" ",
											x
										]
									}, x))
								}, dup))
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-20 sm:py-28 bg-surface/30 border-y border-border/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-4xl mx-auto px-4 sm:px-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3",
							children: "Investment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-5xl font-bold leading-tight",
							children: "Every system is scoped to your volume."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg text-muted-foreground max-w-2xl mx-auto",
							children: "That's why we don't post prices. On a 30-minute strategy call we look at your current setup, your lead volume, and your niche — and give you an exact plan and quote."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: BOOKING_URL,
								target: "_blank",
								rel: "noopener",
								className: "btn-primary",
								children: ["Get Your Custom System Plan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faq",
				className: "py-20 sm:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl mx-auto px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3",
							children: "FAQ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl sm:text-5xl font-bold leading-tight",
							children: "Answers before you ask."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: faqs.map((f, i) => {
							const open = openFaq === i;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-surface overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setOpenFaq(open ? null : i),
									className: "w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-base sm:text-lg",
										children: f.q
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180 text-primary" : ""}` })]
								}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-5 sm:px-6 pb-5 sm:pb-6 text-muted-foreground text-sm sm:text-base leading-relaxed animate-fade-in",
									children: f.a
								})]
							}, i);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "py-20 sm:py-32 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-bg pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: { background: "var(--gradient-hero)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-4xl mx-auto px-4 sm:px-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "h-12 w-12 text-primary mx-auto mb-6 animate-float" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-6xl font-bold leading-[1.05]",
								children: "Stop losing leads. Start booking them."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-muted-foreground text-lg max-w-2xl mx-auto",
								children: "Book a free 30-minute strategy call. We'll diagnose your current setup and show you exactly what a done-for-you AI system would look like for your business."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: BOOKING_URL,
									target: "_blank",
									rel: "noopener",
									className: "btn-primary text-base sm:text-lg",
									children: ["Book a Free Strategy Call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs text-muted-foreground",
								children: "You'll speak directly with Harsh. No reps. No pressure."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border/50 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary-foreground" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display font-bold",
							children: "Zen Miraculous"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/privacy",
								className: "hover:text-foreground transition",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/landing",
								className: "hover:text-foreground transition",
								children: "Ads Landing Page"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: BOOKING_URL,
								target: "_blank",
								rel: "noopener",
								className: "text-primary hover:underline font-medium",
								children: "Book a Call →"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
