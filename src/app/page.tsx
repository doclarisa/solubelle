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

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="#EDFAF3" />
    <polyline points="5,10 8.5,13.5 15,7" stroke="#3EBD6B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="#FEF2F2" />
    <line x1="6.5" y1="6.5" x2="13.5" y2="13.5" stroke="#E53E3E" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="13.5" y1="6.5" x2="6.5" y2="13.5" stroke="#E53E3E" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const WarnIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="#FFFBEB" />
    <text x="10" y="14" textAnchor="middle" fontSize="11" fill="#D97706">!</text>
  </svg>
);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* ── 1. Hero ──────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #0D7EC4 0%, #0a9e56 100%)',
          padding: '6rem 0 5rem',
        }}
        aria-label="Hero"
      >
        {/* animated pulse overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 30% 60%, rgba(255,255,255,0.07) 0%, transparent 65%), radial-gradient(ellipse at 75% 25%, rgba(255,255,255,0.05) 0%, transparent 60%)',
            animation: 'rippleBlob 6s ease-in-out infinite',
          }}
        />
        <div className="blob blob-blue" style={{ width: 520, height: 520, top: -120, left: -160, background: 'rgba(255,255,255,0.06)' }} aria-hidden="true" />
        <div className="blob blob-green" style={{ width: 420, height: 420, bottom: -100, right: -120, background: 'rgba(255,255,255,0.05)' }} aria-hidden="true" />

        <div className="container-max" style={{ position: 'relative', textAlign: 'center' }}>
          {/* pill badge */}
          <div style={{ display: 'inline-block', background: '#3EBD6B', borderRadius: 9999, padding: '0.35rem 1.1rem', marginBottom: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, fontFamily: "'Poppins',sans-serif", color: '#fff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Now available to US retailers
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.6rem, 6vw, 4.25rem)',
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 12px rgba(0,0,0,0.15)',
            }}
          >
            The Bag That Disappears.{' '}
            <span style={{ opacity: 0.92 }}>For Real.</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.88)', maxWidth: '640px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
            Solubelle brings PVA water-soluble grocery bags to American retailers — no microplastics, no landfill, no compromise.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/products" className="btn-hero-white">
              Shop for Your Home
            </a>
            <a href="/for-retailers" className="btn-outline-white" style={{ fontSize: '1rem' }}>
              Wholesale for Your Store
            </a>
          </div>

          {/* hero visual */}
          <div style={{ marginTop: '3.5rem' }}>
            <div
              style={{
                width: 'min(580px, 90vw)',
                height: 'clamp(240px, 40vw, 340px)',
                background: 'rgba(255,255,255,0.12)',
                borderRadius: 24,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto',
                position: 'relative', overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(4px)',
              }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute', borderRadius: '50%',
                    background: i % 2 === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.07)',
                    width: 20 + i * 18, height: 20 + i * 18,
                    top: `${15 + i * 12}%`, left: `${10 + i * 14}%`,
                    animation: `rippleBlob ${3 + i * 0.7}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                  aria-hidden="true"
                />
              ))}
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PVA water-soluble grocery bag dissolving in water" style={{ animation: 'float 5s ease-in-out infinite' }}>
                  <path d="M20 30 L15 70 L65 70 L60 30 Z" fill="rgba(255,255,255,0.85)" />
                  <path d="M30 30 C30 20 35 15 40 15 C45 15 50 20 50 30" stroke="rgba(255,255,255,0.9)" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <ellipse cx="40" cy="74" rx="25" ry="4" fill="rgba(255,255,255,0.2)" />
                </svg>
                <p style={{ marginTop: '0.75rem', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.95rem', color: '#fff', opacity: 0.92 }}>
                  Dissolves completely in water
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Problem / Solution / Proof ────────────────────── */}
      <section style={{ background: '#F0F9FF', padding: '5rem 0' }} aria-label="The problem and solution">
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="eyebrow">The Problem &amp; Solution</span>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(2rem, 3vw, 3rem)', color: '#0F1F2E', marginBottom: '0.75rem' }}>
                The Problem. The Solution. The Proof.
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#3A5068', maxWidth: 520, margin: '0 auto' }}>
                100 billion plastic bags enter landfills each year in the US. We built the alternative.
              </p>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              {
                icon: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <circle cx="28" cy="28" r="28" fill="#FFF0F0" />
                    <path d="M20 38 L22 22 L36 22 L38 38 Z" stroke="#E53E3E" strokeWidth="2" fill="none" />
                    <path d="M24 22 L24 18 L32 18 L32 22" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <line x1="26" y1="26" x2="25" y2="35" stroke="#E53E3E" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="30" y1="26" x2="31" y2="35" stroke="#E53E3E" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                stat: '100 Billion',
                headline: 'Bags a Year',
                description: 'Americans discard 100 billion single-use plastic bags annually. They take 400–1,000 years to break down — leaving microplastics in soil, water, and food chains.',
              },
              {
                icon: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <circle cx="28" cy="28" r="28" fill="#E8F4FD" />
                    <path d="M28 12 C28 12 16 24 16 31 C16 38 21.5 43 28 43 C34.5 43 40 38 40 31 C40 24 28 12 28 12Z" fill="#0D7EC4" fillOpacity="0.7" />
                    <path d="M22 33 Q28 27 34 33" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                ),
                stat: 'Minutes',
                headline: 'Gone in Minutes',
                description: 'Drop a Solubelle bag in hot water and it fully dissolves in minutes — leaving behind only water, CO₂, and a trace of biomass. No fragments. No residue.',
              },
              {
                icon: (
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
                    <circle cx="28" cy="28" r="28" fill="#EDFAF3" />
                    <path d="M28 14 C28 14 18 21 18 28 C18 33.5 22.5 38 28 38 C33.5 38 38 33.5 38 28 C38 21 28 14 28 14Z" fill="#3EBD6B" fillOpacity="0.65" />
                    <polyline points="22,28 26,32 35,22" stroke="#3EBD6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                ),
                stat: 'Zero',
                headline: 'Trace Left Behind',
                description: 'PVA (polyvinyl alcohol) is not a microplastic. It biodegrades in standard wastewater treatment and leaves no persistent polymer fragments in the environment.',
              },
            ].map((item, i) => (
              <FadeInSection key={i} delay={i * 150}>
                <div className="card" style={{ textAlign: 'center', padding: '2.5rem 1.75rem', background: '#fff' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>{item.icon}</div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 3rem)', color: '#0D7EC4', lineHeight: 1, marginBottom: '0.25rem' }}>
                    {item.stat}
                  </div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#0F1F2E', marginBottom: '0.75rem' }}>{item.headline}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#3A5068', lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Watch It Dissolve ─────────────────────────────── */}
      <section style={{ background: '#0F1F2E', padding: '5rem 0' }} aria-label="See it dissolve">
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <span className="eyebrow" style={{ color: '#3EBD6B' }}>Proof</span>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#fff', marginBottom: '0.75rem' }}>
              See It to Believe It
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', marginBottom: '2.5rem' }}>No tricks. No editing. Just a bag, a glass, and hot water.</p>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div style={{ maxWidth: 680, margin: '0 auto' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, #0D7EC4 0%, #3EBD6B 100%)',
                  borderRadius: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                }}
                role="img"
                aria-label="Video placeholder: PVA water-soluble grocery bag dissolving in hot water"
              >
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.25)' }} />
                <div style={{ textAlign: 'center', color: 'white', position: 'relative', zIndex: 1 }}>
                  <a
                    href="/how-it-works"
                    aria-label="Watch dissolution demo"
                    className="play-btn-link"
                  >
                    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true" style={{ marginBottom: '0.75rem' }}>
                      <circle cx="36" cy="36" r="34" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                      <polygon points="29,22 55,36 29,50" fill="white" />
                    </svg>
                  </a>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '1rem', opacity: 0.95 }}>Video coming soon</p>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '0.3rem' }}>Dissolution demo</p>
                </div>
              </div>
              <a href="/how-it-works" style={{ display: 'inline-block', marginTop: '1.5rem', color: '#3EBD6B', fontWeight: 600, textDecoration: 'none', fontFamily: "'Poppins',sans-serif", fontSize: '0.9rem' }}>
                Learn how PVA works →
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 4. Who It's For ──────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '5rem 0' }} aria-label="Who it's for">
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="eyebrow">Who It&apos;s For</span>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#0F1F2E' }}>
                Built for Stores. Loved at Home.
              </h2>
            </div>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Retailers card — solid blue */}
            <FadeInSection delay={0}>
              <div className="card-blue">
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.35rem', color: '#fff', position: 'relative' }}>For Stores &amp; Retailers</h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, flex: 1, position: 'relative' }}>
                  Replace your checkout bags with something your customers will actually talk about. A glass of water and a 30-second demo at the register sells more bags than any sign ever could.
                </p>
                <a href="/for-retailers" className="card-cta-blue">Get Wholesale Pricing</a>
              </div>
            </FadeInSection>

            {/* Home card — solid green */}
            <FadeInSection delay={150}>
              <div className="card-green">
                <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.35rem', color: '#fff', position: 'relative' }}>For Your Home</h3>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.75, flex: 1, position: 'relative' }}>
                  Order a box, keep them in the car, bring them everywhere. Guilt-free grocery runs for the whole family. They hold up in the rain — they just dissolve when you choose to let them.
                </p>
                <a href="/products" className="card-cta-green">Shop Now</a>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── 5. Comparison Table ───────────────────────────────── */}
      <section style={{ background: '#F0F9FF', padding: '5rem 0' }} aria-label="Comparison with other bag types">
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="eyebrow">Side by Side</span>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 3rem)', color: '#0F1F2E', marginBottom: '0.5rem' }}>
                How We Compare
              </h2>
              <p style={{ color: '#3A5068', marginBottom: 0 }}>See why smart retailers are making the switch.</p>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div style={{ overflowX: 'auto', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #e0edf7' }}>
              <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter',sans-serif" }} aria-label="Eco bag comparison table">
                <thead>
                  <tr style={{ background: '#0F1F2E' }}>
                    <th scope="col" style={{ padding: '1rem 1.25rem', color: '#fff', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.875rem', textAlign: 'left', borderRadius: '16px 0 0 0' }}>Feature</th>
                    <th scope="col" style={{ padding: '1rem 1.25rem', color: '#fff', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '0.875rem', textAlign: 'center', background: '#0D7EC4', position: 'relative' }}>
                      <span style={{ display: 'block', background: '#3EBD6B', color: '#fff', borderRadius: 9999, fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.15rem 0.6rem', marginBottom: '0.35rem', width: 'fit-content', margin: '0 auto 0.35rem' }}>Best Choice</span>
                      Solubelle PVA Bag
                    </th>
                    <th scope="col" style={{ padding: '1rem 1.25rem', color: '#fff', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.875rem', textAlign: 'center' }}>Traditional Plastic</th>
                    <th scope="col" style={{ padding: '1rem 1.25rem', color: '#fff', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.875rem', textAlign: 'center', borderRadius: '0 16px 0 0' }}>Paper Bag</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Dissolves in nature', { icon: 'check', label: 'Yes' }, { icon: 'x', label: 'No' }, { icon: 'warn', label: 'Partial' }],
                    ['Microplastics risk', { icon: 'check', label: 'None' }, { icon: 'x', label: 'High' }, { icon: 'check', label: 'None' }],
                    ['Load strength', { icon: 'check', label: '10–15 lbs' }, { icon: 'check', label: 'High' }, { icon: 'warn', label: 'Moderate' }],
                    ['Rain resistance', { icon: 'check', label: 'Yes' }, { icon: 'check', label: 'Yes' }, { icon: 'x', label: 'No' }],
                    ['Toxic residue', { icon: 'check', label: 'None' }, { icon: 'x', label: 'Yes' }, { icon: 'warn', label: 'Inks/bleach' }],
                    ['Available in US', { icon: 'check', label: 'Ships now' }, { icon: 'check', label: 'Yes' }, { icon: 'check', label: 'Yes' }],
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ padding: '0.875rem 1.25rem', fontSize: '0.9rem', color: '#0F1F2E', textAlign: 'left', borderBottom: '1px solid #e8f4fd', fontWeight: 500 }}>
                        {row[0] as string}
                      </td>
                      {(row.slice(1) as { icon: string; label: string }[]).map((cell, j) => (
                        <td
                          key={j}
                          className={j === 0 ? 'solubelle-col' : ''}
                          style={{ padding: '0.875rem 1.25rem', fontSize: '0.9rem', color: '#3A5068', textAlign: 'center', borderBottom: '1px solid #e8f4fd' }}
                        >
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', justifyContent: 'center' }}>
                            {cell.icon === 'check' ? <CheckIcon /> : cell.icon === 'x' ? <XIcon /> : <WarnIcon />}
                            {cell.label}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 6. Trust Bar ─────────────────────────────────────── */}
      <section style={{ background: '#0F1F2E', padding: '2rem 0', overflow: 'hidden' }} aria-label="Trust indicators">
        <div style={{ display: 'flex', gap: '3rem', animation: 'marquee 22s linear infinite', width: 'max-content' }}>
          {[...Array(3)].map((_, repeat) =>
            ['FDA-safe materials', 'ASTM D6400 certified', 'Zero microplastics', 'Ships from US', 'No landfill waste'].map((badge) => (
              <div key={`${repeat}-${badge}`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'white', whiteSpace: 'nowrap' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="8" fill="rgba(62,189,107,0.3)" />
                  <polyline points="5,9 8,12 13,6" stroke="#3EBD6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.875rem' }}>{badge}</span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.2rem', marginLeft: '0.5rem' }}>|</span>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ── 7. Email Capture ─────────────────────────────────── */}
      <section style={{ background: '#F0F9FF', padding: '5rem 0' }} aria-label="Join the list">
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <span className="eyebrow">Stay Ahead</span>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0F1F2E', marginBottom: '0.75rem' }}>
              Be First. Stay Ahead.
            </h2>
            <p style={{ color: '#3A5068', fontSize: '1rem', maxWidth: 480, margin: '0 auto 2rem' }}>
              Be the first to know about wholesale pricing, new SKUs, and launch events.
            </p>
            <EmailCapture />
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
