import { useEffect, useState } from 'react';

export default function CountdownRedirect({ seconds = 3, url, cancelled = false }) {
  const [count, setCount] = useState(seconds);

  useEffect(() => {
    if (cancelled) return; // user clicked Book Now — stop auto redirect
    if (count <= 0) {
      if (typeof window.fbq === 'function') window.fbq('track', 'Schedule');
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
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#f59e0b', textDecoration: 'underline' }}
        >
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
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: '13px', color: '#f59e0b', textDecoration: 'underline' }}
      >
        Not redirecting? Click here →
      </a>
    </div>
  );
}
