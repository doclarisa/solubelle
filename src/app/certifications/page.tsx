import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';
import { SPECS } from '@/lib/specs';

export const metadata: Metadata = {
  title: 'Certifications | Solubelle® PVA Bag Safety & Standards',
  description: "View Solubelle's certifications for PVA water-soluble bags including ASTM D6400, FDA material safety, and third-party testing documentation.",
  alternates: { canonical: 'https://solubelle.com/certifications' },
};

const certs = [
  {
    icon: '🏆',
    name: 'ASTM D6400',
    subtitle: 'Standard for Biodegradable Plastics',
    desc: 'The gold standard for biodegradable materials in the United States. ASTM D6400 specifies requirements for labeling plastics designed to be composted in municipal and industrial facilities. Our bags meet this specification.',
  },
  {
    icon: '🏛️',
    name: 'FDA GRAS',
    subtitle: 'Generally Recognized as Safe',
    desc: 'PVA (polyvinyl alcohol) is recognized by the FDA as generally recognized as safe (GRAS) for use in food-contact applications. This designation covers use in food packaging, coatings, and incidental food contact.',
  },
  {
    icon: '🔧',
    name: 'ISO 9001',
    subtitle: 'Quality Management System',
    desc: 'Our primary suppliers hold ISO 9001 certification for their quality management systems. This ensures consistent production standards, traceability, and ongoing process improvement across every production run.',
  },
  {
    icon: '🔬',
    name: 'SGS Third-Party Testing',
    subtitle: 'Independent Laboratory Verification',
    desc: 'All Solubelle bags are tested by SGS — the world\'s leading testing, inspection, and certification company — for heavy metals, phthalates, BPA, and material composition. Test reports available on request.',
  },
  {
    icon: '🌴',
    name: SPECS.caBagLaw.name,
    subtitle: 'California Bag Law Compliance',
    desc: SPECS.caBagLaw.desc,
  },
];

export default function CertificationsPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #e8f5e9 100%)', padding: '5rem 0 4rem' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <p style={{ color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Trust & Transparency</p>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: '#1a1a1a' }}>
              Certifications &amp; Safety Documentation
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#4b5563', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
              We don't ask you to take our word for it. Here's every standard, certification, and third-party test that backs our claims.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Why It Matters */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ maxWidth: 760, margin: '0 auto', background: '#f9fafb', borderRadius: 12, padding: '2.5rem', borderLeft: '4px solid #1A7DC4' }}>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem', color: '#1a1a1a' }}>Why Certifications Matter</h2>
              <p style={{ color: '#374151', lineHeight: 1.85, marginBottom: '1rem' }}>
                When a new material enters the market with bold environmental claims, skepticism is warranted. The retail world has been burned by "compostable" bags that don't compost, "biodegradable" labels with no standard behind them, and suppliers who disappear after the first order.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.85, marginBottom: '1rem' }}>
                Certifications are how you know we're not just marketing. Each one represents an independent third party — a lab, a standards body, or a regulatory agency — that has reviewed our materials and validated our claims. For retailers, they provide the documentation needed for ESG reporting, compliance audits, and customer inquiries. For consumers, they provide assurance that the bag they're using has been tested and meets established safety standards.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.85, margin: 0 }}>
                We post everything we can here, and we'll continue to update this page as new testing and certifications are completed.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Certification Cards */}
      <section style={{ padding: '3rem 0 5rem' }}>
        <div className="container-max">
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '3rem' }}>Our Certifications</h2>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {certs.map((cert, i) => (
              <FadeInSection key={cert.name} delay={i * 100}>
                <div className="card" style={{ borderTop: '3px solid #1A7DC4', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{cert.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem', color: '#1a1a1a' }}>{cert.name}</h3>
                  <p style={{ color: '#1A7DC4', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>{cert.subtitle}</p>
                  <p style={{ color: '#6b7280', lineHeight: 1.75, fontSize: '0.9rem', flex: 1, marginBottom: '1.5rem' }}>{cert.desc}</p>
                  <button
                    type="button"
                    disabled
                    style={{ padding: '0.65rem 1.25rem', borderRadius: 6, border: '1.5px solid #d1d5db', background: '#f9fafb', color: '#9ca3af', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.85rem', cursor: 'not-allowed', width: '100%' }}
                  >
                    📄 Download PDF (Coming Soon)
                  </button>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Note */}
          <FadeInSection delay={100}>
            <div style={{ maxWidth: 680, margin: '3rem auto 0', background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: 12, padding: '1.75rem', textAlign: 'center' }}>
              <p style={{ color: '#92400e', fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>
                <strong>Note:</strong> PDFs will be available for download at launch. For immediate documentation requests — for ESG reporting, compliance audits, or retailer onboarding — contact us at{' '}
                <a href="mailto:hello@solubelle.com" style={{ color: '#1A7DC4', fontWeight: 600, textDecoration: 'none' }}>hello@solubelle.com</a>.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)', padding: '4rem 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', marginBottom: '1rem' }}>
              Questions About Our Documentation?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
              We're happy to share test reports, supplier certifications, or answer compliance questions.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 2.25rem', background: '#fff', color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 700, borderRadius: 6, textDecoration: 'none', fontSize: '1rem' }}>
              Contact Us →
            </Link>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
