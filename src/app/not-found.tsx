import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Solubelle®',
  description: 'The page you were looking for could not be found.',
};

export default function NotFound() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
      <div style={{ textAlign: 'center', maxWidth: 560 }}>
        {/* Gradient accent number */}
        <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(5rem, 20vw, 9rem)', lineHeight: 1, background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '1rem', userSelect: 'none' }}>
          404
        </div>

        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: '#1a1a1a', marginBottom: '1rem', lineHeight: 1.3 }}>
          Page Not Found
        </h1>

        <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2.5rem' }}>
          The page you're looking for seems to have dissolved — much like our bags in hot water. Let's get you back on solid ground.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <Link href="/" className="btn-primary">
            ← Back to Home
          </Link>
          <Link href="/products" className="btn-outline-blue">
            Shop Products
          </Link>
        </div>

        {/* Quick links */}
        <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2rem' }}>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '1rem', fontFamily: "'Poppins', sans-serif", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Popular Pages
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { href: '/how-it-works', label: 'How It Works' },
              { href: '/why-solubelle', label: 'Why Solubelle' },
              { href: '/for-retailers', label: 'For Retailers' },
              { href: '/how-it-works#faq', label: 'FAQ' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ color: '#1A7DC4', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, padding: '0.4rem 0.9rem', background: '#e8f4fd', borderRadius: 6, transition: 'background 0.2s' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
