import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Lock } from 'lucide-react';

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
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xykrbjbk';

export default function LeadForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    challenge: '',
    consent: false,
    website: '', // honeypot — bots fill it, humans never see it
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
    if (!form.consent) e.consent = 'Consent is required to submit.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Honeypot check: real users never see or fill this field
    if (form.website) {
      await new Promise((r) => setTimeout(r, 400));
      navigate({
        to: '/thank-you',
        search: {
          name: form.name.trim().split(' ')[0],
          email: form.email.trim(),
        },
      });
      return;
    }

    setLoading(true);
    try {
      if (typeof window.fbq === 'function') window.fbq('track', 'Lead');
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: 'AW-XXXXXXXXXX/XXXXXXXX' });
      }

      const params = new URLSearchParams(window.location.search);
      const attribution = {
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term: params.get('utm_term') || '',
        utm_content: params.get('utm_content') || '',
        gclid: params.get('gclid') || '',
        fbclid: params.get('fbclid') || '',
        landing_url: window.location.href,
      };

      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        businessType: form.businessType,
        challenge: form.challenge,
        consent: form.consent,
        consent_timestamp: new Date().toISOString(),
        ...attribution,
      };

      if (FORMSPREE_URL.includes('YOUR_FORM_ID')) {
        console.log('[Dev Mode] Form submitted successfully:', payload);
        await new Promise((r) => setTimeout(r, 400));
        navigate({
          to: '/thank-you',
          search: {
            name: form.name.trim().split(' ')[0],
            email: form.email.trim(),
          },
        });
        return;
      }

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigate({
          to: '/thank-you',
          search: {
            name: form.name.trim().split(' ')[0],
            email: form.email.trim(),
          },
        });
      } else {
        setSubmitError('Something went wrong. Please check your Formspree endpoint or email us directly.');
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
        {/* HONEYPOT — visually hidden */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', height: 0, opacity: 0, pointerEvents: 'none' }}
        />
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
        <div style={{ marginBottom: '20px' }}>
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

        {/* TCPA Consent Checkbox */}
        <div style={{ marginBottom: '20px' }}>
          <label
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontSize: '12px',
              color: '#71717a',
              lineHeight: 1.6,
              cursor: 'pointer',
            }}
          >
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={handleChange}
              style={{ marginTop: '2px', accentColor: '#f59e0b' }}
            />
            <span>
              I agree to receive calls, texts, and emails from Zen Miraculous about my inquiry,
              including via automated technology and AI voice assistant. Consent is not a condition
              of purchase. Msg & data rates may apply. Reply STOP to opt out. See our{' '}
              <a href="/privacy" style={{ color: '#a1a1aa', textDecoration: 'underline' }}>
                Privacy Policy
              </a>.
            </span>
          </label>
          {errors.consent && <div className="form-error">{errors.consent}</div>}
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
          }}
        >
          <Lock className="h-3.5 w-3.5 text-[#52525b]" /> No spam. No sales reps. You speak directly to Harsh.
        </p>
      </form>
    </div>
  );
}
