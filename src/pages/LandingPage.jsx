import { useState } from 'react';
import LeadForm from '../components/LeadForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faLock, faBolt, faFileContract, faHandshake, faBullseye,
  faCheck, faCalendarCheck, faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

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

const FAQS = [
  {
    q: 'How fast will my custom AI lead system be built and live?',
    a: 'Your complete AI lead capture and appointment booking system is built, tested, and fully deployed in 2 to 4 weeks. We handle 100% of the technical setup, prompt engineering, CRM integration, and end-to-end testing.',
  },
  {
    q: 'Will this AI replace my existing sales team or CRM?',
    a: 'No. The AI system acts as your 24/7 lead triage assistant. It connects directly with your current CRM (GoHighLevel, HubSpot, Salesforce, etc.) to instantly qualify leads, answer preliminary questions, and book serious prospects straight onto your calendar.',
  },
  {
    q: 'How does the AI handle after-hours inquiries at 2:00 AM or on weekends?',
    a: 'Over 70% of inbound paid ad leads arrive outside normal office hours. The moment a lead submits a form or sends a message, our AI responds in under 60 seconds via SMS, WhatsApp, or Voice — starting the conversation immediately while your competitors sleep.',
  },
  {
    q: 'Is the AI lead system TCPA and GDPR compliant?',
    a: 'Yes, 100%. All systems are designed with strict consent checkboxes, opt-in logging, unsubscribe mechanisms, and enterprise-grade 256-bit encryption. Consent timestamps are stored automatically for complete legal proof.',
  },
  {
    q: 'What kind of ROI and conversion increase can I expect?',
    a: 'Speed-to-lead is the single biggest factor in conversion rates. Responding in under 60 seconds increases lead-to-appointment conversion by up to 391% compared to manual follow-up over 1 hour later.',
  },
];

const COMPARISON = [
  {
    feature: 'Speed-to-Lead Response',
    traditional: '2 to 6 hours average (or next day)',
    aiSystem: 'Under 60 seconds (24/7 instant)',
    aiIcon: 'bolt',
  },
  {
    feature: 'After-Hours & Weekend Lead Handling',
    traditional: 'Voicemail or ignored until Monday',
    aiSystem: '100% automated intake & calendar booking',
    aiIcon: 'check',
  },
  {
    feature: 'Lead Qualification Efficiency',
    traditional: 'Manual phone tag & unqualified calls',
    aiSystem: 'Automated AI screening filters bad leads out',
    aiIcon: 'check',
  },
  {
    feature: 'Show-Up Rate Protection',
    traditional: 'No reminders, up to 50% ghosting',
    aiSystem: '2-step SMS & email reminders (85%+ show rate)',
    aiIcon: 'check',
  },
  {
    feature: 'Setup & Management Effort',
    traditional: 'Hiring & training expensive staff',
    aiSystem: '100% Done-for-you build in 2–4 weeks',
    aiIcon: 'check',
  },
];

const STEPS = [
  {
    num: '01',
    title: 'Instant Lead Engagement (<60s)',
    desc: 'The instant a paid ad lead touches your form or ad, our AI initiates immediate outreach via SMS, Email, or Voice AI.',
  },
  {
    num: '02',
    title: 'Intelligent AI Qualification',
    desc: 'The AI asks natural, pre-vetted qualification questions tailored to your exact industry parameters before offering a call.',
  },
  {
    num: '03',
    title: 'Direct Calendar Booking',
    desc: 'Qualified prospects choose a time slot on your live calendar and receive automated confirmation & reminder notifications.',
  },
];

export default function LandingPage({ calendlyUrl }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
      <section className="max-w-[1200px] mx-auto px-6 pt-10 pb-10 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN / MAIN HERO TEXT */}
          <div className="lg:col-span-7">
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

            {/* LEAD FORM FOR MOBILE (placed at the top right below H1) */}
            <div className="block lg:hidden my-6">
              <LeadForm />
            </div>

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
            <p style={{ fontSize: '13px', color: '#71717a', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ color: '#f59e0b' }}>
                {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
              </span>
              Trusted by mortgage brokers, law firms, HVAC companies & more across US, UK, Canada & Australia
            </p>
          </div>

          {/* RIGHT COLUMN — Lead Form (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-20">
            <LeadForm />
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION (SEO Keyword Optimization) */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', borderTop: '1px solid #27272a' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Proven 3-Step Process
          </span>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, marginTop: '8px' }}>
            How Zen Miraculous AI Converts Leads 24/7
          </h2>
          <p style={{ fontSize: '15px', color: '#a1a1aa', maxWidth: '640px', margin: '12px auto 0' }}>
            Our done-for-you AI system handles every step from instant initial contact to direct calendar booking, completely hands-free.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {STEPS.map((s) => (
            <div key={s.num} style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '28px' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#f59e0b', marginBottom: '16px' }}>{s.num}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON MATRIX (High Trust & High Google Quality Score) */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', borderTop: '1px solid #27272a' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700 }}>
            Traditional Manual Follow-Up vs. Zen Miraculous AI
          </h2>
          <p style={{ fontSize: '15px', color: '#a1a1aa', marginTop: '8px' }}>
            Why leading service businesses are upgrading from slow manual intake to instant AI automation.
          </p>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #27272a', background: '#18181b' }}>
                <th style={{ padding: '16px', fontSize: '14px', color: '#fafafa' }}>Key Feature</th>
                <th style={{ padding: '16px', fontSize: '14px', color: '#ef4444' }}>Traditional Follow-Up</th>
                <th style={{ padding: '16px', fontSize: '14px', color: '#f59e0b' }}>Zen Miraculous AI System</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((c, i) => (
                <tr key={c.feature} style={{ borderBottom: '1px solid #27272a', background: i % 2 === 0 ? '#09090b' : '#141417' }}>
                  <td style={{ padding: '16px', fontSize: '14px', fontWeight: 600, color: '#fafafa' }}>{c.feature}</td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#71717a' }}>{c.traditional}</td>
                  <td style={{ padding: '16px', fontSize: '14px', color: '#fafafa', fontWeight: 600 }}>
                    <span style={{ color: '#f59e0b', marginRight: '6px' }}>
                      <FontAwesomeIcon icon={c.aiIcon === 'bolt' ? faBolt : faCircleCheck} />
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
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', borderTop: '1px solid #27272a' }}>
        <div style={{ background: '#18181b', border: '1px solid #27272a', borderRadius: '16px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 600, letterSpacing: '0.05em' }}>100% HIGH-TRUST PROMISE</span>
            <h2 style={{ fontSize: '26px', fontWeight: 700, marginTop: '8px', marginBottom: '12px' }}>
              Built Directly by Senior AI Engineers
            </h2>
            <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.7, marginBottom: '20px' }}>
              When you work with Zen Miraculous, you work directly with <strong>Harsh Vyas</strong> and senior AI specialists. No junior account managers, no generic copy-paste templates, and no outsourced fluff.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px', color: '#fafafa' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FontAwesomeIcon icon={faLock} style={{ color: '#f59e0b' }} /> 256-Bit Data Encryption</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FontAwesomeIcon icon={faBolt} style={{ color: '#f59e0b' }} /> 99.9% Uptime Guarantee</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FontAwesomeIcon icon={faFileContract} style={{ color: '#f59e0b' }} /> TCPA & GDPR Compliant</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FontAwesomeIcon icon={faHandshake} style={{ color: '#f59e0b' }} /> Turnkey 2–4 Wk Deployment</div>
            </div>
          </div>

          <div style={{ background: '#09090b', border: '1px solid #27272a', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '36px', marginBottom: '12px', color: '#f59e0b' }}><FontAwesomeIcon icon={faBullseye} /></div>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#f59e0b' }}>391% Average Conversion Lift</div>
            <p style={{ fontSize: '13px', color: '#71717a', marginTop: '6px' }}>
              78% of customers buy from the vendor that responds first. Speed-to-lead is your ultimate competitive advantage.
            </p>
          </div>
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
              <div style={{ color: '#f59e0b', fontSize: '14px', marginBottom: '12px', display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
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

      {/* FAQ SECTION (SEO & Google Ads Quality Score Booster) */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 24px 80px', borderTop: '1px solid #27272a' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 600, letterSpacing: '0.05em' }}>GOT QUESTIONS?</span>
          <h2 style={{ fontSize: '28px', fontWeight: 700, marginTop: '8px' }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, index) => (
            <div
              key={faq.q}
              onClick={() => toggleFaq(index)}
              style={{
                background: '#18181b',
                border: '1px solid #27272a',
                borderRadius: '10px',
                padding: '20px 24px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 600, margin: 0, color: '#fafafa' }}>{faq.q}</h3>
                <span style={{ color: '#f59e0b', fontSize: '20px', fontWeight: 700 }}>
                  {openFaq === index ? '−' : '+'}
                </span>
              </div>
              {openFaq === index && (
                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.7, marginTop: '12px', marginBottom: 0 }}>
                  {faq.a}
                </p>
              )}
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
