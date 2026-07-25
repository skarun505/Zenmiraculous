import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CountdownRedirect from '../components/CountdownRedirect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL ||
  'https://calendly.com/harshvyas242424/business-automation-audit?month=2026-07';

export default function ThankYouPage({ calendlyUrl }) {
  const location = useLocation();
  const leadName = location.state?.name || null;
  const leadEmail = location.state?.email || null;
  const baseUrl = calendlyUrl || CALENDLY_URL;

  const [cancelled, setCancelled] = useState(false);

  // FIX 3 — Calendly prefill: pass name + email so lead doesn't retype
  const buildCalendlyUrl = () => {
    try {
      const u = new URL(baseUrl);
      if (leadName) u.searchParams.set('name', leadName);
      if (leadEmail) u.searchParams.set('email', leadEmail);
      return u.toString();
    } catch {
      return baseUrl;
    }
  };
  const finalUrl = buildCalendlyUrl();

  const handleBookNow = () => {
    setCancelled(true); // stop auto-redirect
    if (typeof window.fbq === 'function') window.fbq('track', 'Schedule');
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
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
            color: '#22c55e',
          }}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
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
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Your Free 1:1 Strategy Call Now
        </button>

        {/* COUNTDOWN REDIRECT */}
        <CountdownRedirect seconds={3} url={finalUrl} cancelled={cancelled} />

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
              <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0 }}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              {b}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
