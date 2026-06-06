'use client';
import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // Connect to Mailchimp/Klaviyo here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#e8f5e9', padding: '1rem 1.75rem', borderRadius: 10, color: '#388E3C' }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="9" fill="#4CAF50" />
          <polyline points="6,10 9,13 14,7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600 }}>You&#39;re on the list! We&#39;ll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: 520, margin: '0 auto' }} noValidate>
      <div style={{ flex: 1, minWidth: 240 }}>
        <label htmlFor="email-capture" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>
          Email address
        </label>
        <input
          id="email-capture"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          style={{
            width: '100%',
            padding: '0.8rem 1.1rem',
            borderRadius: 6,
            border: error ? '1.5px solid #ef4444' : '1.5px solid #d1d5db',
            fontFamily: "'Inter',sans-serif",
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => (e.target.style.borderColor = '#1A7DC4')}
          onBlur={(e) => (e.target.style.borderColor = error ? '#ef4444' : '#d1d5db')}
          aria-describedby={error ? 'email-error' : undefined}
        />
        {error && <p id="email-error" role="alert" style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '0.3rem', textAlign: 'left' }}>{error}</p>}
      </div>
      <button type="submit" className="btn-secondary">
        Join the List
      </button>
    </form>
  );
}
