import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';

export const metadata: Metadata = {
  title: 'Why Solubelle | PVA Bags vs. Plastic, Paper & Compostable',
  description: 'See how Solubelle\'s PVA water-soluble bags compare to plastic, paper, cloth, and compostable PLA bags on every dimension that matters.',
  alternates: { canonical: 'https://solubelle.com/why-solubelle' },
};

const tableRows = [
  { feature: 'Dissolves in water', pva: '✅', plastic: '❌', paper: '❌', pla: '❌', cloth: '❌' },
  { feature: 'Microplastics risk', pva: '✅ None', plastic: '❌ High', paper: '✅ None', pla: '⚠️ Fragments if mishandled', cloth: '✅ None' },
  { feature: 'Requires industrial composting', pva: '✅ No', plastic: '✅ No', paper: '✅ No', pla: '❌ Yes', cloth: '✅ No' },
  { feature: 'Available at retail checkout', pva: '✅', plastic: '✅', paper: '✅', pla: '⚠️ Limited', cloth: '❌' },
  { feature: 'Food-safe certified', pva: '✅ Food-grade safe', plastic: '⚠️ Varies', paper: '✅', pla: '✅', cloth: '⚠️ Varies' },
  { feature: 'Rain resistant', pva: '✅', plastic: '✅', paper: '❌', pla: '✅', cloth: '⚠️ Limited' },
  { feature: 'Carbon footprint (relative)', pva: '🟢 Low', plastic: '🟡 Medium', paper: '🔴 High (7×)', pla: '🟡 Medium', cloth: '🔴 Very high initially' },
  { feature: 'Works in existing bag dispensers', pva: '✅', plastic: '✅', paper: '❌', pla: '⚠️ Sometimes', cloth: '❌' },
];

const testimonials = [
  {
    quote: 'We put a glass of water on the counter and dropped one in. Every customer stopped to watch.',
    name: 'Sarah M.',
    title: 'Natural Grocery Store Owner',
  },
  {
    quote: 'My kids use these to understand why plastic is a problem. They dissolve it in science class.',
    name: 'Parent',
    title: 'Portland, OR',
  },
  {
    quote: 'Finally a bag I can offer customers without feeling like I\'m greenwashing.',
    name: 'Farmers Market Vendor',
    title: 'Austin, TX',
  },
];

export default function WhySolubellePage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #e8f5e9 100%)', padding: '5rem 0 4rem' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <p style={{ color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>The Side-by-Side Truth</p>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: '#1a1a1a' }}>
              Why Solubelle Is Different
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
              We put every bag type head to head on the dimensions that actually matter — not marketing copy.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '0.75rem' }}>The Full Comparison</h2>
            <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '3rem', fontSize: '1rem' }}>Five bag types. Eight criteria. No spin.</p>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div style={{ overflowX: 'auto' }}>
              <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)' }}>
                    {['Feature', 'Solubelle PVA', 'Traditional Plastic', 'Paper', 'Compostable PLA', 'Cloth Reusable'].map((col, i) => (
                      <th
                        key={col}
                        style={{
                          padding: '1rem 1.25rem',
                          color: '#fff',
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          textAlign: i === 0 ? 'left' : 'center',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.feature} style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: 600, color: '#374151', fontFamily: "'Poppins', sans-serif", fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{row.feature}</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'center', background: 'rgba(76,175,80,0.06)', fontWeight: 600 }}>{row.pva}</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'center' }}>{row.plastic}</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'center' }}>{row.paper}</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'center' }}>{row.pla}</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'center' }}>{row.cloth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInSection>

          {/* Key Insight */}
          <FadeInSection delay={150}>
            <div style={{ background: '#f9fafb', borderRadius: 12, padding: '2rem 2.5rem', marginTop: '3rem', borderLeft: '4px solid #1A7DC4' }}>
              <p style={{ color: '#374151', lineHeight: 1.85, fontSize: '1.05rem', margin: 0 }}>
                <strong>The key insight:</strong> Compostable sounds great but less than 10% of Americans have access to industrial composting. Paper bags require 7× more energy to produce than plastic. Cloth bags need to be used 173 times to break even on carbon. PVA is the only option that solves the problem at the moment of disposal — without relying on infrastructure most people don't have access to, and without a break-even timeline that makes the math work only in theory.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div className="container-max">
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '0.75rem' }}>What People Are Saying</h2>
            <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '3rem' }}>Real feedback from real retail partners.</p>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 120}>
                <div className="card" style={{ borderLeft: '4px solid #4CAF50', borderRadius: '0 12px 12px 0' }}>
                  <div style={{ fontSize: '2rem', color: '#4CAF50', marginBottom: '1rem', lineHeight: 1 }}>&ldquo;</div>
                  <blockquote style={{ margin: 0, fontStyle: 'italic', color: '#374151', lineHeight: 1.75, fontSize: '1rem', marginBottom: '1.5rem' }}>
                    {t.quote}
                  </blockquote>
                  <div>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a', margin: 0 }}>— {t.name}</p>
                    <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: '0.25rem 0 0' }}>{t.title}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)', padding: '4rem 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', marginBottom: '1rem' }}>
              See the Difference for Yourself
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
              Request free samples and drop one in a glass of water. The demo sells itself.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/products" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 2.25rem', background: '#fff', color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 700, borderRadius: 6, textDecoration: 'none', fontSize: '1rem' }}>
                Shop Products
              </Link>
              <Link href="/how-it-works" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 2.25rem', background: 'transparent', color: '#fff', fontFamily: "'Poppins', sans-serif", fontWeight: 700, borderRadius: 6, textDecoration: 'none', border: '2px solid rgba(255,255,255,0.8)', fontSize: '1rem' }}>
                Learn the Science
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
