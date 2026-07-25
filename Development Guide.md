# Zen Miraculous AI — Landing Page Development Guide
### Cursor-Ready · Drag-and-Drop Build File
**Project:** Google & Meta Ads Lead Capture Landing Page + Thank You Page  
**Stack:** React + Vite + Tailwind CSS + shadcn/ui  
**Calendly:** https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [File & Folder Structure](#2-file--folder-structure)
3. [Design Tokens (Colours & Fonts)](#3-design-tokens-colours--fonts)
4. [Page Flow & UX Logic](#4-page-flow--ux-logic)
5. [Cursor Prompt — Project Setup](#5-cursor-prompt--project-setup)
6. [Cursor Prompt — Landing Page](#6-cursor-prompt--landing-page)
7. [Cursor Prompt — Thank You Page](#7-cursor-prompt--thank-you-page)
8. [Full Source Code](#8-full-source-code)
   - 8.1 `index.html`
   - 8.2 `src/index.css`
   - 8.3 `src/App.jsx`
   - 8.4 `src/pages/LandingPage.jsx`
   - 8.5 `src/pages/ThankYouPage.jsx`
   - 8.6 `src/components/LeadForm.jsx`
   - 8.7 `src/components/CountdownRedirect.jsx`
   - 8.8 `tailwind.config.js`
9. [UTM & Tracking Setup](#9-utm--tracking-setup)
10. [Deployment Checklist](#10-deployment-checklist)
11. [Meta Ads & Google Ads Tips](#11-meta-ads--google-ads-tips)
12. [Plan Review — v1.1 Fixes (APPLY THESE)](#12-plan-review--v11-fixes-apply-these)

---

## 1. PROJECT OVERVIEW

### What we're building

Two-page micro-site optimised for paid ads:

```
Ad Click
  └─► Landing Page  (headline + pain points + lead form)
        └─► Form Submit
              └─► Thank You Page
                    ├─► "Book Your Free Call" button → Calendly (manual)
                    └─► Auto-redirect to Calendly after 3 seconds
```

### Goals

- **Landing Page** — capture name, email, phone, business type, biggest challenge
- **Thank You Page** — confirm submission, show a warm message, display the Calendly CTA button, then auto-redirect to Calendly in 3 seconds with a visible countdown

### Brand

Matches `zenmiraculousai.lovable.app`:
- Dark zinc background (#09090B)
- Amber CTA (#F59E0B)
- Inter font (Google Fonts)
- Minimal, high-trust SaaS aesthetic

---

## 2. FILE & FOLDER STRUCTURE

```
zenmiraculous-landing/
├── public/
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   └── ThankYouPage.jsx
│   ├── components/
│   │   ├── LeadForm.jsx
│   │   └── CountdownRedirect.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── .env
```

---

## 3. DESIGN TOKENS (COLOURS & FONTS)

```
BACKGROUNDS
  Page bg:      #09090B  (Zinc 950)
  Card:         #18181B  (Zinc 900)
  Border:       #27272A  (Zinc 800)
  Hover:        #3F3F46  (Zinc 700)

TEXT
  Primary:      #FAFAFA  (near white)
  Secondary:    #A1A1AA  (Zinc 400)
  Muted:        #71717A  (Zinc 500)

ACCENT / CTA
  Amber:        #F59E0B  (Amber 500) — primary CTA background
  Amber hover:  #D97706  (Amber 600)
  Amber text:   #1C1917  (Stone 900) — text ON amber buttons
  Amber badge:  #FEF3C7  (Amber 100) — light badge backgrounds

FONT
  Family:  'Inter', sans-serif (Google Fonts)
  Weights: 400 (body), 500 (label), 600 (button), 700 (heading)
```

---

## 4. PAGE FLOW & UX LOGIC

### Landing Page sections (top → bottom)

```
[NAV BAR]  Logo left | "Book a Call" link right

[HERO]
  Badge:      "AI Lead Conversion · Free 30-Min Audit"
  H1:         "Stop Losing High-Ticket Leads to Slow Follow-Up"
  Subheadline: Pain + promise in 2 lines
  Trust line: "Trusted by mortgage brokers, law firms & HVAC cos in US, UK, CA & AU"

[PAIN POINTS]  3 cards — Slow Response · Ghosted Leads · Missed After-Hours

[LEAD FORM]  (sticky-right on desktop, below hero on mobile)
  - Full Name *
  - Business Email *
  - Phone Number *
  - Business Type (dropdown: Mortgage Broker / Immigration / Roofing / HVAC / Law Firm / Solar / Finance / Debt Relief / Home Remodeling / Other)
  - Biggest Challenge (textarea, optional)
  - CTA Button: "Get My Free AI System Plan →"
  - Trust footnote: "No spam. No sales reps. You speak directly to Harsh."

[SOCIAL PROOF]  3 short testimonial cards

[FOOTER]  © Zen Miraculous | Privacy Policy
```

### Thank You Page logic

```
1. Page loads → show confirmation message + "Book Your 1:1 Call" button
2. Countdown timer starts: 3 → 2 → 1
3. At 0 → window.location.href = Calendly URL (auto redirect)
4. "Book Now" button also opens Calendly immediately on click
5. "If you're not redirected..." fallback link shown below countdown
```

### Form submit flow

```
User clicks "Get My Free AI System Plan →"
  → Validate all required fields
  → If valid: POST to chosen backend (see options below)
  → On success: navigate to /thank-you (pass lead data via state or URL params)
  → On error: show inline error toast, do NOT redirect
```

### Backend options (pick one)

| Option | Best for | Setup time |
|--------|----------|------------|
| **Formspree** (recommended) | No-backend, email delivery | 5 min |
| **Web3Forms** | Free, no-code, email + webhook | 5 min |
| **Supabase** | Store leads in DB, query later | 30 min |
| **Make / Zapier webhook** | Push to CRM (GHL, HubSpot) | 15 min |

> Default code below uses **Formspree** — swap the endpoint URL in `.env`.

---

## 5. CURSOR PROMPT — PROJECT SETUP

Copy this prompt into Cursor chat to initialise the project:

```
Create a new Vite + React project called "zenmiraculous-landing".

Install these dependencies:
- react-router-dom (for /thank-you route)
- @headlessui/react (for accessible dropdown)
- react-hook-form (for form validation)

Set up Tailwind CSS v3 with the following tailwind.config.js:
- darkMode: 'class'
- extend colours: zinc scale + amber scale already in Tailwind defaults
- fontFamily: { sans: ['Inter', 'sans-serif'] }

Add Inter font from Google Fonts in index.html.

Create the folder structure:
src/pages/LandingPage.jsx
src/pages/ThankYouPage.jsx
src/components/LeadForm.jsx
src/components/CountdownRedirect.jsx

Set up react-router-dom in App.jsx with two routes:
- "/" → LandingPage
- "/thank-you" → ThankYouPage

Add a .env file with:
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
VITE_CALENDLY_URL=https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07

The overall design must match zenmiraculousai.lovable.app:
- Dark zinc background #09090B
- Amber CTAs #F59E0B with stone-900 text
- Inter font
- Clean, minimal, high-trust SaaS dark theme
```

---

## 6. CURSOR PROMPT — LANDING PAGE

```
Build src/pages/LandingPage.jsx for Zen Miraculous AI.

This is a Google & Meta Ads lead capture landing page. Dark theme only. 
Font: Inter. Background: #09090B. Accent: #F59E0B (amber).

STRUCTURE — top to bottom:

1. NAVBAR
   - Left: "Zen Miraculous" text logo in white, font-weight 700
   - Right: "Book a Call →" link → opens VITE_CALENDLY_URL in new tab
   - Sticky at top, bg: #09090B with bottom border zinc-800
   - No other nav items (keep focus)

2. HERO SECTION (two-column on desktop, stacked on mobile)
   LEFT COLUMN:
   - Small amber badge pill: "Free 30-Min Strategy Audit"
   - H1 (font-size 44px desktop, 32px mobile, font-weight 700, white):
     "Stop Losing High-Ticket Leads to Slow Follow-Up"
   - Subheadline (16px, zinc-400, line-height 1.7):
     "Zen Miraculous builds done-for-you AI systems that respond in under 60 
     seconds, qualify your leads, and book appointments — 24/7, while you sleep."
   - Three trust stats in a row:
     "<60s Response" | "24/7 Always On" | "2–4 Week Setup"
     (amber text for the stat, zinc-400 for the label below)
   - Three pain point mini-cards (zinc-900 bg, amber left-border):
     • "Leads go cold — manual follow-up takes hours, buyers move on in minutes."
     • "After-hours dead zone — 70% of leads come outside business hours."
     • "Low show rates — no reminders means half your booked calls never show."
   - Trust line: "⭐ Trusted by mortgage brokers, law firms, HVAC companies & more 
     across US, UK, Canada & Australia"

   RIGHT COLUMN (sticky on desktop scroll):
   - Import and render <LeadForm /> component

3. SOCIAL PROOF SECTION
   - Section heading: "What clients say" (white, font-weight 600)
   - Three testimonial cards (zinc-900 bg, zinc-800 border, border-radius 12px):
     Card 1: "Within the first week our lead response time went from 4 hours to 
     under a minute." — Marcus Chen, Mortgage Broker, Toronto
     Card 2: "Harsh built the entire system in under 3 weeks. It handles 
     repetitive intake so my team only talks to serious prospects." 
     — Priya Sharma, Immigration Consultant, London
     Card 3: "Emergency calls at 2am used to go to voicemail. The Voice AI books 
     them overnight. It literally pays for itself every week." 
     — Jordan Blake, HVAC Company, Phoenix
   - Star rating (5 gold stars ★★★★★) on each card

4. FOOTER
   - "© 2026 Zen Miraculous. All rights reserved."
   - "Privacy Policy" link (placeholder href)
   - Zinc-700 text, centered

Use react-hook-form in LeadForm. On form success, 
navigate('/thank-you', { state: { name: formData.name } })

Make the page fully responsive. Mobile-first. No horizontal scroll.
```

---

## 7. CURSOR PROMPT — THANK YOU PAGE

```
Build src/pages/ThankYouPage.jsx for Zen Miraculous AI.

DESIGN: Same dark theme (#09090B bg, amber accents, Inter font).

LAYOUT — centered, max-width 560px, vertically centered on screen:

1. Green checkmark icon (use a simple SVG circle with ✓, color #22c55e, size 64px)

2. Heading (white, 700, 32px):
   "You're in — we'll be in touch shortly."

3. Subtext (zinc-400, 16px, line-height 1.7):
   "Thanks [Name from state/params]! Your free AI system audit request has 
   been received. To lock in your spot right now, book your 1:1 strategy 
   call below — it takes 60 seconds."

   (If no name available, use "Thanks for reaching out!")

4. PRIMARY CTA BUTTON (large, amber #F59E0B, stone-900 text, font-weight 600):
   "📅 Book Your Free 1:1 Strategy Call Now"
   → onClick: window.open(CALENDLY_URL, '_blank')

5. COUNTDOWN REDIRECT COMPONENT:
   Import and render <CountdownRedirect seconds={3} url={CALENDLY_URL} />
   
   This component shows:
   "Redirecting you to our booking page in [X] seconds..."
   (zinc-400, 14px, centered)
   
   Below that, a small fallback link:
   "Not redirecting? Click here →" (amber, underline)

6. Secondary reassurance text (zinc-500, 13px, centered):
   "You'll speak directly with Harsh Vyas — no reps, no pressure, no fluff."

7. Below that — three quick benefit bullets (zinc-400, 14px):
   ✓ 30-minute session, no strings attached
   ✓ We diagnose your current lead setup live
   ✓ You leave with a clear plan, even if we don't work together

COMPONENT: src/components/CountdownRedirect.jsx

Props: { seconds: number, url: string }

Logic:
- useEffect with setInterval, count down from `seconds` to 0
- At 0: clearInterval + window.location.href = url
- Display: "Redirecting you in {count}s..." 
- Show amber progress bar that depletes over the countdown duration
- Show fallback link at all times

Read name from: useLocation().state?.name (react-router-dom)

Make the entire page mobile-first, centered layout.
```

---

## 8. FULL SOURCE CODE

### 8.1 `index.html`

```html
<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Free AI Lead System Audit — Zen Miraculous</title>
    <meta name="description" content="Get a free 30-minute AI lead conversion audit. We build done-for-you systems that respond, qualify, and book leads 24/7." />
    <!-- Prevent indexing on ad landing pages -->
    <meta name="robots" content="noindex, nofollow" />
    <!-- Inter font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <!-- Meta Pixel (add your Pixel ID here) -->
    <!--
    <script>
      !function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    </script>
    -->
    <!-- Google Tag (add your GTM/GA4 ID here) -->
    <!--
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');</script>
    -->
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

### 8.2 `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-bg: #09090b;
  --color-card: #18181b;
  --color-border: #27272a;
  --color-amber: #f59e0b;
  --color-amber-hover: #d97706;
  --color-text: #fafafa;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background-color: var(--color-bg);
  color: var(--color-text);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Amber button */
.btn-amber {
  background-color: var(--color-amber);
  color: #1c1917;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  transition: background-color 0.2s ease, transform 0.1s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  width: 100%;
  justify-content: center;
}

.btn-amber:hover {
  background-color: var(--color-amber-hover);
}

.btn-amber:active {
  transform: scale(0.98);
}

/* Form inputs */
.form-input {
  background-color: #18181b;
  border: 1px solid #27272a;
  color: #fafafa;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

.form-input::placeholder {
  color: #52525b;
}

.form-input.error {
  border-color: #ef4444;
}

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: #a1a1aa;
  margin-bottom: 6px;
}

.form-error {
  color: #f87171;
  font-size: 12px;
  margin-top: 4px;
}

/* Progress bar for countdown */
.progress-bar-track {
  width: 100%;
  height: 4px;
  background: #27272a;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: #f59e0b;
  border-radius: 2px;
  transition: width 1s linear;
}
```

---

### 8.3 `src/App.jsx`

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ThankYouPage from './pages/ThankYouPage';

const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL ||
  'https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage calendlyUrl={CALENDLY_URL} />} />
        <Route path="/thank-you" element={<ThankYouPage calendlyUrl={CALENDLY_URL} />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

### 8.4 `src/pages/LandingPage.jsx`

```jsx
import LeadForm from '../components/LeadForm';

const PAIN_POINTS = [
  {
    title: 'Slow response kills deals',
    desc: 'Manual follow-up takes hours. Buyers move on in minutes. Speed-to-lead is everything.',
  },
  {
    title: 'After-hours dead zone',
    desc: '70% of leads come outside business hours. Without automation, you miss them all.',
  },
  {
    title: 'Low show rates drain revenue',
    desc: 'No automated reminders means half your booked calls ghost you at the last minute.',
  },
];

const STATS = [
  { value: '<60s', label: 'Lead response' },
  { value: '24/7', label: 'Always on' },
  { value: '2–4 wks', label: 'To live' },
];

const TESTIMONIALS = [
  {
    quote:
      'Within the first week our lead response time went from 4 hours to under a minute. We finally stopped losing deals to the business that called first.',
    name: 'Marcus Chen',
    role: 'Mortgage Broker, Toronto',
  },
  {
    quote:
      'Harsh built the entire system in under 3 weeks. It handles repetitive intake so my team only talks to serious prospects. Total game-changer.',
    name: 'Priya Sharma',
    role: 'Immigration Consultant, London',
  },
  {
    quote:
      'Emergency calls at 2am used to go straight to voicemail. The Voice AI books them into the calendar overnight. It pays for itself every week.',
    name: 'Jordan Blake',
    role: 'HVAC Company, Phoenix',
  },
];

export default function LandingPage({ calendlyUrl }) {
  return (
    <div className="min-h-screen" style={{ background: '#09090b', color: '#fafafa' }}>

      {/* NAVBAR */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: '#09090b',
          borderBottom: '1px solid #27272a',
          padding: '14px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontWeight: 700, fontSize: '18px' }}>Zen Miraculous</span>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#f59e0b',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '14px',
          }}
        >
          Book a Call →
        </a>
      </nav>

      {/* HERO */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '60px 24px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* LEFT */}
        <div>
          {/* Badge */}
          <span
            style={{
              display: 'inline-block',
              background: '#fef3c7',
              color: '#92400e',
              fontSize: '12px',
              fontWeight: 600,
              padding: '4px 14px',
              borderRadius: '20px',
              marginBottom: '20px',
              letterSpacing: '0.03em',
            }}
          >
            Free 30-Min Strategy Audit — No Obligation
          </span>

          {/* H1 */}
          <h1
            style={{
              fontSize: 'clamp(28px, 4vw, 46px)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              color: '#fafafa',
            }}
          >
            Stop Losing High-Ticket Leads to Slow Follow-Up
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: '17px',
              color: '#a1a1aa',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}
          >
            Zen Miraculous builds done-for-you AI systems that respond in under 60 seconds, qualify your leads, and book appointments 24/7 — while you sleep, on weekends, at 2am.
          </p>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '36px',
              flexWrap: 'wrap',
            }}
          >
            {STATS.map((s) => (
              <div key={s.value}>
                <div style={{ fontSize: '26px', fontWeight: 700, color: '#f59e0b' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '12px', color: '#71717a', marginTop: '2px' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Pain point cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
            {PAIN_POINTS.map((p) => (
              <div
                key={p.title}
                style={{
                  background: '#18181b',
                  border: '1px solid #27272a',
                  borderLeft: '3px solid #f59e0b',
                  borderRadius: '8px',
                  padding: '14px 16px',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>
                  {p.title}
                </div>
                <div style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.6 }}>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <p style={{ fontSize: '13px', color: '#71717a' }}>
            ⭐⭐⭐⭐⭐ Trusted by mortgage brokers, law firms, HVAC companies & more across US, UK, Canada & Australia
          </p>
        </div>

        {/* RIGHT — Lead Form (sticky on desktop) */}
        <div style={{ position: 'sticky', top: '80px' }}>
          <LeadForm />
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 24px 80px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          What clients say
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: '#18181b',
                border: '1px solid #27272a',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <div style={{ color: '#f59e0b', fontSize: '16px', marginBottom: '12px' }}>
                ★★★★★
              </div>
              <p
                style={{
                  color: '#a1a1aa',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                  fontStyle: 'italic',
                }}
              >
                "{t.quote}"
              </p>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>{t.name}</div>
              <div style={{ fontSize: '12px', color: '#71717a', marginTop: '2px' }}>
                {t.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: '1px solid #27272a',
          padding: '24px',
          textAlign: 'center',
          color: '#52525b',
          fontSize: '13px',
        }}
      >
        © 2026 Zen Miraculous. All rights reserved.{' '}
        <a href="/privacy" style={{ color: '#71717a', marginLeft: '8px' }}>
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
```

---

### 8.5 `src/pages/ThankYouPage.jsx`

```jsx
import { useLocation } from 'react-router-dom';
import CountdownRedirect from '../components/CountdownRedirect';

const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL ||
  'https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07';

export default function ThankYouPage({ calendlyUrl }) {
  const location = useLocation();
  const leadName = location.state?.name || null;
  const url = calendlyUrl || CALENDLY_URL;

  const handleBookNow = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#09090b',
        color: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>

        {/* Check icon */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(34, 197, 94, 0.15)',
            border: '2px solid #22c55e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '28px',
          }}
        >
          ✓
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: 'clamp(24px, 4vw, 34px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            color: '#fafafa',
          }}
        >
          You're in — we'll be in touch shortly.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: '16px',
            color: '#a1a1aa',
            lineHeight: 1.7,
            marginBottom: '32px',
          }}
        >
          {leadName ? `Thanks, ${leadName}! ` : 'Thanks for reaching out! '}
          Your free AI system audit request has been received. To lock in your spot right now, book your 1:1 strategy call below — it takes 60 seconds.
        </p>

        {/* PRIMARY CTA BUTTON */}
        <button
          className="btn-amber"
          onClick={handleBookNow}
          style={{ fontSize: '17px', padding: '16px 28px', marginBottom: '28px' }}
        >
          📅 Book Your Free 1:1 Strategy Call Now
        </button>

        {/* COUNTDOWN REDIRECT */}
        <CountdownRedirect seconds={3} url={url} />

        {/* Reassurance */}
        <p
          style={{
            fontSize: '13px',
            color: '#52525b',
            marginTop: '28px',
            marginBottom: '20px',
          }}
        >
          You'll speak directly with Harsh Vyas — no reps, no pressure, no fluff.
        </p>

        {/* Benefits */}
        <div
          style={{
            background: '#18181b',
            border: '1px solid #27272a',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'left',
          }}
        >
          {[
            '30-minute session, no strings attached',
            'We diagnose your current lead setup live on the call',
            'You leave with a clear plan, even if we never work together',
          ].map((b) => (
            <div
              key={b}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginBottom: '10px',
                fontSize: '14px',
                color: '#a1a1aa',
              }}
            >
              <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0 }}>✓</span>
              {b}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
```

---

### 8.6 `src/components/LeadForm.jsx`

```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BUSINESS_TYPES = [
  'Mortgage Broker',
  'Immigration Consultant',
  'Roofing Company',
  'HVAC Company',
  'Law Firm',
  'Solar Company',
  'Commercial Finance Broker',
  'Debt Relief Firm',
  'Home Remodeling',
  'Other',
];

const FORMSPREE_URL =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';

export default function LeadForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    challenge: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Valid business email required.';
    if (!form.phone.trim() || form.phone.length < 7)
      e.phone = 'Valid phone number required.';
    if (!form.businessType) e.businessType = 'Please select your business type.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      // Fire Meta Pixel Lead event if available
      if (typeof fbq === 'function') fbq('track', 'Lead');
      // Fire Google Ads conversion if available
      if (typeof gtag === 'function') gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXXX/XXXXXXXX' });

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          businessType: form.businessType,
          challenge: form.challenge,
          // UTM params from URL
          utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
          utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
        }),
      });

      if (response.ok) {
        navigate('/thank-you', { state: { name: form.name.split(' ')[0] } });
      } else {
        setSubmitError('Something went wrong. Please try again or email us directly.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        background: '#18181b',
        border: '1px solid #27272a',
        borderRadius: '14px',
        padding: '28px',
      }}
    >
      {/* Form Header */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>
          Get Your Free AI System Plan
        </h2>
        <p style={{ fontSize: '13px', color: '#71717a', lineHeight: 1.6 }}>
          Tell us about your business and we'll show you exactly what your custom AI system would look like.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div style={{ marginBottom: '16px' }}>
          <label className="form-label" htmlFor="name">Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={`form-input ${errors.name ? 'error' : ''}`}
            autoComplete="name"
          />
          {errors.name && <div className="form-error">{errors.name}</div>}
        </div>

        {/* Business Email */}
        <div style={{ marginBottom: '16px' }}>
          <label className="form-label" htmlFor="email">Business Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@yourbusiness.com"
            className={`form-input ${errors.email ? 'error' : ''}`}
            autoComplete="email"
          />
          {errors.email && <div className="form-error">{errors.email}</div>}
        </div>

        {/* Phone */}
        <div style={{ marginBottom: '16px' }}>
          <label className="form-label" htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 555 000 0000"
            className={`form-input ${errors.phone ? 'error' : ''}`}
            autoComplete="tel"
          />
          {errors.phone && <div className="form-error">{errors.phone}</div>}
        </div>

        {/* Business Type */}
        <div style={{ marginBottom: '16px' }}>
          <label className="form-label" htmlFor="businessType">Business Type *</label>
          <select
            id="businessType"
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            className={`form-input ${errors.businessType ? 'error' : ''}`}
            style={{ appearance: 'auto' }}
          >
            <option value="">Select your industry...</option>
            {BUSINESS_TYPES.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          {errors.businessType && <div className="form-error">{errors.businessType}</div>}
        </div>

        {/* Biggest Challenge */}
        <div style={{ marginBottom: '24px' }}>
          <label className="form-label" htmlFor="challenge">
            Biggest Lead Challenge (optional)
          </label>
          <textarea
            id="challenge"
            name="challenge"
            value={form.challenge}
            onChange={handleChange}
            placeholder="e.g. We get 50+ leads a month but only convert 10% because follow-up is too slow..."
            className="form-input"
            rows={3}
            style={{ resize: 'vertical' }}
          />
        </div>

        {/* Submit error */}
        {submitError && (
          <div
            style={{
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid #ef4444',
              borderRadius: '8px',
              padding: '12px',
              color: '#f87171',
              fontSize: '13px',
              marginBottom: '16px',
            }}
          >
            {submitError}
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="btn-amber"
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'Submitting...' : 'Get My Free AI System Plan →'}
        </button>

        {/* Trust footnote */}
        <p
          style={{
            fontSize: '12px',
            color: '#52525b',
            textAlign: 'center',
            marginTop: '12px',
            lineHeight: 1.5,
          }}
        >
          🔒 No spam. No sales reps. You speak directly to Harsh.
        </p>
      </form>
    </div>
  );
}
```

---

### 8.7 `src/components/CountdownRedirect.jsx`

```jsx
import { useEffect, useState } from 'react';

export default function CountdownRedirect({ seconds = 3, url }) {
  const [count, setCount] = useState(seconds);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (count <= 0) {
      setRedirected(true);
      window.location.href = url;
      return;
    }

    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, url]);

  // Progress: starts at 100%, depletes to 0% as count goes 3→0
  const progress = (count / seconds) * 100;

  return (
    <div style={{ textAlign: 'center' }}>
      {!redirected ? (
        <>
          <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '10px' }}>
            Redirecting you to our booking page in{' '}
            <span style={{ color: '#f59e0b', fontWeight: 700 }}>{count}s</span>...
          </p>

          {/* Progress bar */}
          <div className="progress-bar-track" style={{ marginBottom: '12px' }}>
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Fallback link */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '13px',
              color: '#f59e0b',
              textDecoration: 'underline',
            }}
          >
            Not redirecting? Click here →
          </a>
        </>
      ) : (
        <p style={{ fontSize: '14px', color: '#71717a' }}>
          Redirecting...{' '}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#f59e0b', textDecoration: 'underline' }}
          >
            Click here if nothing happens
          </a>
        </p>
      )}
    </div>
  );
}
```

---

### 8.8 `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Zinc and amber are already in Tailwind defaults
        // Add any custom brand colours here
        brand: {
          amber: '#F59E0B',
          'amber-hover': '#D97706',
          bg: '#09090B',
          card: '#18181B',
          border: '#27272A',
        },
      },
    },
  },
  plugins: [],
};
```

---

## 9. UTM & TRACKING SETUP

### URL structure for ads

```
Landing page URL:
https://yourdomain.com/?utm_source=meta&utm_medium=paid_social&utm_campaign=lead_gen_v1&utm_content=pain_ad

Google Ads:
https://yourdomain.com/?utm_source=google&utm_medium=cpc&utm_campaign=lead_gen_v1&gclid={gclid}

Meta Ads:
https://yourdomain.com/?utm_source=facebook&utm_medium=paid_social&utm_campaign=lead_gen_v1&fbclid={fbclid}
```

The form already captures `utm_source`, `utm_medium`, `utm_campaign` from URL params and sends them with every Formspree submission.

### Meta Pixel events

```js
// PageView — fires on load (add to index.html head)
fbq('track', 'PageView');

// Lead — fires on form submit success (already in LeadForm.jsx)
fbq('track', 'Lead');

// Schedule — fire this on Thank You page after Calendly is opened
fbq('track', 'Schedule');
```

### Google Ads conversion

Replace `AW-XXXXXXXXXX/XXXXXXXX` in `LeadForm.jsx` with your actual conversion tag from Google Ads → Goals → Conversions.

---

## 10. DEPLOYMENT CHECKLIST

```
☐ Create Formspree account → get form endpoint → add to .env
☐ Replace VITE_FORMSPREE_ENDPOINT in .env
☐ Replace YOUR_PIXEL_ID in index.html with real Meta Pixel ID
☐ Replace G-XXXXXXXXXX in index.html with real GA4 Measurement ID
☐ Replace AW-XXXXXXXXXX in LeadForm.jsx with Google Ads conversion ID
☐ Add privacy policy page (required for running ads)
☐ Deploy to Vercel / Netlify:
    - npm run build
    - Upload dist/ folder
    - Set environment variables in hosting dashboard
☐ Set up custom domain (e.g. go.zenmiraculous.com)
☐ Test form submit → confirm email received + redirect to /thank-you
☐ Test /thank-you countdown → confirm Calendly opens at 0s
☐ Test on mobile (iOS Safari + Android Chrome)
☐ Run Lighthouse → aim for 90+ Performance, 100 SEO
☐ Set noindex on both pages (already in index.html)
☐ Add OG image (already wired in index.html meta)
```

---

## 11. META ADS & GOOGLE ADS TIPS

### Meta Ads setup

- **Objective:** Lead Generation (use Instant Forms) OR Website Conversions (use this landing page)
- **Pixel event to optimise for:** `Lead`
- **Audience:** Lookalike from customer list OR interest targeting (business owners, entrepreneurs, mortgage industry etc.)
- **Ad format:** Single image or short video (15s) showing the before/after of response time
- **Hook line ideas:**
  - "Your leads are calling your competitors right now."
  - "How fast do you respond to new leads? Your answer is costing you money."
  - "We automated $1M+ in appointments. Here's how."
- **CTA button:** "Learn More" or "Get Quote" → links to this landing page

### Google Ads setup

- **Campaign type:** Search
- **Keywords (exact/phrase):**
  - "AI lead follow-up system"
  - "automated lead response for [mortgage brokers / law firms / HVAC]"
  - "speed to lead automation"
  - "done for you CRM automation"
- **Ad copy headline 1:** "Never Miss a Lead Again"
- **Ad copy headline 2:** "AI Responds in <60 Seconds 24/7"
- **Ad copy headline 3:** "Free Strategy Call — Book Now"
- **Description:** "Done-for-you AI systems that respond, qualify & book every lead automatically. Live in 2–4 weeks. Book your free 30-min audit."

### Landing page optimisation tips

1. **Match the ad copy to the landing page headline** — if your ad says "Never Miss a Lead", the H1 should echo that
2. **No navigation links** — remove nav links to keep focus (only keep the "Book a Call" link that goes to Calendly)
3. **A/B test the H1** — try pain-focused vs. outcome-focused headlines
4. **Form above the fold on mobile** — consider moving form above pain points on mobile
5. **Speed matters** — this Vite build will be fast; keep images optimised
6. **GDPR / CCPA** — add checkbox "I agree to be contacted" if running UK/EU/CA ads

---

## 12. PLAN REVIEW — v1.1 FIXES (APPLY THESE)

> This section supersedes the matching code in Section 8. Six gaps were found
> in review. Fixes #1 and #2 are mandatory before launch.

### FIX 1 — Cancel auto-redirect when "Book Now" is clicked (mandatory)

**Problem:** Button opens Calendly in a new tab, then the countdown still
redirects the original tab → the lead gets two Calendly pages.

**Replace `src/pages/ThankYouPage.jsx` booking logic + countdown usage:**

```jsx
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CountdownRedirect from '../components/CountdownRedirect';

export default function ThankYouPage({ calendlyUrl }) {
  const location = useLocation();
  const leadName = location.state?.name || null;
  const leadEmail = location.state?.email || null;
  const [cancelled, setCancelled] = useState(false);

  // FIX 3 — Calendly prefill: pass name + email so lead doesn't retype
  const buildCalendlyUrl = () => {
    const u = new URL(calendlyUrl);
    if (leadName) u.searchParams.set('name', leadName);
    if (leadEmail) u.searchParams.set('email', leadEmail);
    return u.toString();
  };
  const finalUrl = buildCalendlyUrl();

  const handleBookNow = () => {
    setCancelled(true); // stop the auto-redirect
    if (typeof fbq === 'function') fbq('track', 'Schedule');
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    /* ...same layout as Section 8.5, but: */
    /* <button onClick={handleBookNow}>...</button> */
    /* <CountdownRedirect seconds={3} url={finalUrl} cancelled={cancelled} /> */
    null
  );
}
```

**Replace `src/components/CountdownRedirect.jsx`:**

```jsx
import { useEffect, useState } from 'react';

export default function CountdownRedirect({ seconds = 3, url, cancelled = false }) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (cancelled) return;               // user clicked Book Now — stop
    if (count <= 0) {
      if (typeof fbq === 'function') fbq('track', 'Schedule');
      window.location.href = url;
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, url, cancelled]);

  if (cancelled) {
    return (
      <p style={{ fontSize: '13px', color: '#71717a', textAlign: 'center' }}>
        Booking page opened in a new tab.{' '}
        <a href={url} target="_blank" rel="noopener noreferrer"
           style={{ color: '#f59e0b', textDecoration: 'underline' }}>
          Reopen it →
        </a>
      </p>
    );
  }

  const progress = (count / seconds) * 100;
  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '10px' }}>
        Redirecting you to our booking page in{' '}
        <span style={{ color: '#f59e0b', fontWeight: 700 }}>{count}s</span>...
      </p>
      <div className="progress-bar-track" style={{ marginBottom: '12px' }}>
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer"
         style={{ fontSize: '13px', color: '#f59e0b', textDecoration: 'underline' }}>
        Not redirecting? Click here →
      </a>
    </div>
  );
}
```

---

### FIX 2 — TCPA / marketing consent checkbox (mandatory — legal)

**Problem:** You collect phone numbers for an AI voice agent to call. US TCPA
law requires *express written consent* for automated/AI-dialed calls. Running
Meta/Google ads to US leads without this checkbox = legal exposure + possible
ad rejection.

**Add to `LeadForm.jsx` — new state field + checkbox above submit button:**

```jsx
// Add to form state:
// consent: false

// Add to validate():
if (!form.consent) e.consent = 'Consent is required to submit.';

// Add above the submit button:
<div style={{ marginBottom: '20px' }}>
  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px',
                  fontSize: '12px', color: '#71717a', lineHeight: 1.6,
                  cursor: 'pointer' }}>
    <input
      type="checkbox"
      name="consent"
      checked={form.consent}
      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
      style={{ marginTop: '2px', accentColor: '#f59e0b' }}
    />
    <span>
      I agree to receive calls, texts, and emails from Zen Miraculous about my
      inquiry, including via automated technology and AI voice assistant.
      Consent is not a condition of purchase. Msg & data rates may apply.
      Reply STOP to opt out. See our <a href="/privacy" style={{ color: '#a1a1aa' }}>Privacy Policy</a>.
    </span>
  </label>
  {errors.consent && <div className="form-error">{errors.consent}</div>}
</div>
```

Also include `consent: form.consent` and a `consent_timestamp: new Date().toISOString()`
in the Formspree POST body — you need proof of consent on record.

---

### FIX 3 — Calendly prefill (included in Fix 1 code)

Pass the lead's name and email into the Calendly URL:
`?name=John&email=john@biz.com`. Calendly reads these natively and pre-fills
the booking form. Also update the LeadForm navigate call to pass email:

```jsx
navigate('/thank-you', {
  state: { name: form.name.split(' ')[0], email: form.email }
});
```

---

### FIX 4 — SPA rewrite config (mandatory for deploy)

**Problem:** Direct visits or refreshes on `/thank-you` return 404 on static
hosting. Google Ads review can flag a broken destination.

**Vercel — create `vercel.json` in project root:**

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify — create `public/_redirects`:**

```
/*    /index.html   200
```

---

### FIX 5 — Capture full attribution (all UTMs + click IDs)

Replace the 3-param UTM block in `LeadForm.jsx` with:

```jsx
const params = new URLSearchParams(window.location.search);
const attribution = {
  utm_source:   params.get('utm_source')   || '',
  utm_medium:   params.get('utm_medium')   || '',
  utm_campaign: params.get('utm_campaign') || '',
  utm_term:     params.get('utm_term')     || '',
  utm_content:  params.get('utm_content')  || '',
  gclid:        params.get('gclid')        || '',
  fbclid:       params.get('fbclid')       || '',
  landing_url:  window.location.href,
};
// spread into the POST body: ...attribution
```

`gclid` is what lets you upload offline conversions ("lead booked a call",
"lead became a client") back into Google Ads later — the single biggest lever
for improving ad optimisation over time.

**Bonus:** store params in `sessionStorage` on page load so attribution
survives if the lead navigates before submitting.

---

### FIX 6 — Honeypot spam field

Bots auto-fill every visible field. Add one hidden field; if it's filled,
silently drop the submission:

```jsx
// Add to form state: website: ''  (bots fill it, humans never see it)

// In handleSubmit, before fetch:
if (form.website) {
  navigate('/thank-you'); // fake success — don't tip off the bot
  return;
}

// In JSX (visually hidden, not display:none — some bots skip those):
<input
  type="text"
  name="website"
  value={form.website}
  onChange={handleChange}
  tabIndex="-1"
  autoComplete="off"
  style={{ position: 'absolute', left: '-9999px', height: 0, opacity: 0 }}
  aria-hidden="true"
/>
```

---

### Updated deployment checklist additions

```
☐ Consent checkbox present + consent_timestamp stored with every lead
☐ vercel.json or _redirects file added (test: refresh on /thank-you)
☐ Book Now click cancels countdown (test: no double Calendly)
☐ Calendly opens pre-filled with lead name + email
☐ Submit test lead with ?gclid=test123 → confirm it arrives in Formspree
☐ Honeypot works: fill hidden field via DevTools → no email received
☐ Meta: verify your domain in Business Manager (required for tracking)
☐ fbq('track','Schedule') fires on both button click and auto-redirect
```

---

*Generated by Claude for Zen Miraculous AI — July 2026*  
*Calendly: https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07*