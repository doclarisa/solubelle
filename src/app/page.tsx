import type { Metadata } from 'next';
import FadeInSection from '@/components/FadeInSection';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Solubelle® | Water-Soluble Grocery Bags | Zero Plastic. Zero Guilt.',
  alternates: { canonical: 'https://solubelle.com' },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Solubelle PVA Water-Soluble Grocery Bag",
  "brand": { "@type": "Brand", "name": "Solubelle" },
  "description": "PVA water-soluble grocery bags that dissolve completely in water. Zero microplastics, zero landfill waste.",
  "category": "Eco-friendly bags",
  "url": "https://solubelle.com/products",
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden', background: '#fff', padding: '6rem 0 5rem' }} aria-label="Hero">
        <div className="blob blob-blue" style={{ width: 500, height: 500, top: -100, left: -150 }} aria-hidden="true" />
        <div className="blob blob-green" style={{ width: 400, height: 400, bottom: -80, right: -100 }} aria-hidden="true" />

        <div className="container-max" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'linear-gradient(135deg,#e8f4fd,#e8f5e9)', borderRadius: 100, padding: '0.35rem 1.1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, fontFamily: "'Poppins',sans-serif", background: 'linear-gradient(135deg,#1A7DC4,#4CAF50)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Now available to US retailers
            </span>
          </div>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', lineHeight: 1.12, color: '#0f172a', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            The Bag That Disappears.{' '}
            <span className="gradient-text">For Real.</span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#4b5563', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Solubelle brings PVA water-soluble grocery bags to American retailers — no microplastics, no landfill, no compromise.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/products" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
              Shop for Your Home
            </a>
            <a href="/for-retailers" className="btn-outline-green" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
              Wholesale for Your Store
            </a>
          </div>

          <div style={{ marginTop: '3.5rem' }}>
            <div
              style={{
                width: 'min(580px, 90vw)',
                height: 'clamp(240px, 40vw, 340px)',
                background: 'linear-gradient(145deg, #e8f4fd 0%, #e8f5e9 60%, #d4edda 100%)',
                borderRadius: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(26,125,196,0.1)',
              }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    borderRadius: '50%',
                    background: i % 2 === 0 ? 'rgba(26,125,196,0.15)' : 'rgba(76,175,80,0.12)',
                    width: 20 + i * 18,
                    height: 20 + i * 18,
                    top: `${15 + i * 12}%`,
                    left: `${10 + i * 14}%`,
                    animation: `rippleBlob ${3 + i * 0.7}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                  aria-hidden="true"
                />
              ))}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PVA water-soluble grocery bag dissolving in water" style={{ animation: 'float 5s ease-in-out infinite' }}>
                  <defs>
                    <linearGradient id="bagGrad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#1A7DC4" />
                      <stop offset="100%" stopColor="#4CAF50" />
                    </linearGradient>
                  </defs>
                  <path d="M20 30 L15 70 L65 70 L60 30 Z" fill="url(#bagGrad)" fillOpacity="0.85" />
                  <path d="M30 30 C30 20 35 15 40 15 C45 15 50 20 50 30" stroke="url(#bagGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <ellipse cx="40" cy="74" rx="25" ry="4" fill="rgba(26,125,196,0.2)" />
                </svg>
                <p style={{ marginTop: '0.75rem', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.95rem', background: 'linear-gradient(135deg,#1A7DC4,#4CAF50)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Dissolves completely in water
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Problem / Solution */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }} aria-label="The problem and solution">
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0f172a', marginBottom: '0.75rem' }}>
                The Problem. The Solution. The Proof.
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#6b7280', maxWidth: 520, margin: '0 auto' }}>
                100 billion plastic bags enter landfills each year in the US. We built the alternative.
              </p>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" fill="#fee2e2" />
                    <path d="M16 32 L18 18 L30 18 L32 32 Z" stroke="#ef4444" strokeWidth="2" fill="none" />
                    <path d="M20 18 L20 14 L28 14 L28 18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <line x1="22" y1="22" x2="21" y2="30" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="26" y1="22" x2="27" y2="30" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                headline: '100 Billion Bags a Year',
                description: 'Americans discard 100 billion single-use plastic bags annually. They take 400–1,000 years to break down — leaving microplastics in soil, water, and food chains.',
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" fill="#e8f4fd" />
                    <path d="M24 10 C24 10 14 20 14 26 C14 31.5 18.5 36 24 36 C29.5 36 34 31.5 34 26 C34 20 24 10 24 10Z" fill="#1A7DC4" fillOpacity="0.7" />
                    <path d="M19 28 Q24 22 29 28" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                ),
                headline: 'Gone in Minutes',
                description: 'Drop a Solubelle bag in hot water and it fully dissolves in minutes — leaving behind only water, CO₂, and a trace of biomass. No fragments. No residue.',
              },
              {
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <circle cx="24" cy="24" r="22" fill="#e8f5e9" />
                    <path d="M24 12 C24 12 16 18 16 24 C16 28 19 32 24 32 C29 32 32 28 32 24 C32 18 24 12 24 12Z" fill="#4CAF50" fillOpacity="0.6" />
                    <polyline points="19,24 22,28 30,19" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                ),
                headline: 'Zero Trace Left Behind',
                description: 'PVA (polyvinyl alcohol) is not a microplastic. It biodegrades in standard wastewater treatment and leaves no persistent polymer fragments in the environment.',
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="card" style={{ textAlign: 'center', padding: '2.25rem 1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.75rem' }}>{item.headline}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Watch It Dissolve */}
      <section style={{ background: '#fff', padding: '5rem 0' }} aria-label="See it dissolve">
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', marginBottom: '0.75rem' }}>
              See It to Believe It
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem', marginBottom: '2.5rem' }}>No tricks. No editing. Just a bag, a glass, and hot water.</p>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div style={{ background: 'linear-gradient(145deg, #e8f4fd, #e8f5e9)', borderRadius: 20, maxWidth: 680, margin: '0 auto', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <div
                style={{ width: '100%', maxWidth: 560, aspectRatio: '16/9', background: 'linear-gradient(135deg, #1A7DC4 0%, #4CAF50 100%)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                role="img"
                aria-label="Video placeholder: PVA water-soluble grocery bag dissolving in hot water"
              >
                <div style={{ textAlign: 'center', color: 'white' }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{ marginBottom: '0.75rem', opacity: 0.9 }}>
                    <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,0.2)" />
                    <polygon points="26,20 50,32 26,44" fill="white" />
                  </svg>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.95rem', opacity: 0.95 }}>Video coming soon</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '0.3rem' }}>Dissolution demo</p>
                </div>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#374151', fontStyle: 'italic', maxWidth: 440 }}>
                This is what happens when you drop our bag in hot water. No tricks. No editing.
              </p>
              <a href="/how-it-works" style={{ color: '#1A7DC4', fontWeight: 600, textDecoration: 'none', fontFamily: "'Poppins',sans-serif", fontSize: '0.9rem' }}>
                Learn how PVA works →
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4 — Who It's For */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }} aria-label="Who it's for">
        <div className="container-max">
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', textAlign: 'center', marginBottom: '2.5rem' }}>
              Built for Stores. Loved at Home.
            </h2>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'For Stores & Retailers', body: 'Replace your checkout bags with something your customers will actually talk about. A glass of water and a 30-second demo at the register sells more bags than any sign ever could.', cta: 'Get Wholesale Pricing', href: '/for-retailers', borderColor: '#1A7DC4', ctaClass: 'btn-primary' },
              { title: 'For Your Home', body: 'Order a box, keep them in the car, bring them everywhere. Guilt-free grocery runs for the whole family. They hold up in the rain — they just dissolve when you choose to let them.', cta: 'Shop Now', href: '/products', borderColor: '#4CAF50', ctaClass: 'btn-secondary' },
            ].map((c, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div style={{ background: '#fff', border: `1px solid ${c.borderColor}`, borderRadius: 14, padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', transition: 'box-shadow 0.3s, transform 0.3s', height: '100%' }}>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.25rem', color: '#0f172a' }}>{c.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.75, flex: 1 }}>{c.body}</p>
                  <a href={c.href} className={c.ctaClass} style={{ alignSelf: 'flex-start' }}>{c.cta}</a>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Comparison Table */}
      <section style={{ background: '#fff', padding: '5rem 0' }} aria-label="Comparison with other bag types">
        <div className="container-max">
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0f172a', textAlign: 'center', marginBottom: '0.5rem' }}>
              How We Compare
            </h2>
            <p style={{ textAlign: 'center', color: '#6b7280', marginBottom: '2.5rem' }}>See why smart retailers are making the switch.</p>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div style={{ overflowX: 'auto', borderRadius: 14, boxShadow: '0 2px 16px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb' }}>
              <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter',sans-serif" }} aria-label="Eco bag comparison table">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg,#1A7DC4,#4CAF50)' }}>
                    {['Feature', 'Solubelle PVA Bag', 'Traditional Plastic', 'Paper Bag'].map((h, i) => (
                      <th key={i} scope="col" style={{ padding: '1rem', color: '#fff', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.875rem', textAlign: i === 0 ? 'left' : 'center' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Dissolves in nature', '✅', '❌', '⚠️ Partial'],
                    ['Microplastics risk', '✅ None', '❌ High', '✅ None'],
                    ['Load strength', '✅ 10–15 lbs', '✅ High', '⚠️ Moderate'],
                    ['Rain resistance', '✅ Yes', '✅ Yes', '❌ No'],
                    ['Toxic residue', '✅ None', '❌ Yes', '⚠️ Inks/bleach'],
                    ['Available in US', '✅ Ships now', '✅', '✅'],
                  ].map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: '0.875rem 1rem', fontSize: '0.9rem', color: '#374151', textAlign: j === 0 ? 'left' : 'center', borderBottom: '1px solid #f1f5f9', fontWeight: j === 0 ? 500 : 400 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 6 — Trust Bar */}
      <section style={{ background: 'linear-gradient(135deg,#1A7DC4,#4CAF50)', padding: '2.5rem 0' }} aria-label="Trust indicators">
        <div className="container-max">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            {['FDA-safe materials', 'ASTM D6400 certified', 'Zero microplastics', 'Ships from US', 'No landfill waste'].map((badge) => (
              <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="8" fill="rgba(255,255,255,0.25)" />
                  <polyline points="5,9 8,12 13,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.875rem' }}>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Email Capture */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }} aria-label="Join the list">
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0f172a', marginBottom: '0.75rem' }}>
              Be First. Stay Ahead.
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: 480, margin: '0 auto 2rem' }}>
              Be the first to know about wholesale pricing, new SKUs, and launch events.
            </p>
            <EmailCapture />
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
