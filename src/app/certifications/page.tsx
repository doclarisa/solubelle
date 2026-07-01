import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';
import { SPECS } from '@/lib/specs';

export const metadata: Metadata = {
  title: 'Certifications | Solubelle® PVA Bag Safety & Standards',
  description: "View Solubelle's certifications for PVA water-soluble bags including EN13432, SGS third-party testing, and ISO 9001 quality documentation.",
  alternates: { canonical: 'https://solubelle.com/certifications' },
};

const certs = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    ),
    name: 'EN13432',
    subtitle: 'European Standard for Biodegradable Packaging',
    desc: 'International standard specifying requirements for packaging recoverable through composting and biodegradation. EN13432 is recognized by regulators across Europe and the United States as a benchmark for biodegradable materials.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.45l-2.928 2.928m2.928-2.928l3.103 3.103m-3.103-3.103l-3.103-3.103" />
    ),
    name: 'Certification Available Upon Request',
    subtitle: 'Documentation Provided to Partners',
    desc: 'Full certification packets — including safety documentation, material safety data, and lab reports — are available to retailers, partners, and auditors upon request. Contact us to receive documentation.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.45l-2.928 2.928m2.928-2.928l3.103 3.103m-3.103-3.103l-3.103-3.103" />
    ),
    name: 'ISO 9001',
    subtitle: 'Quality Management System',
    desc: 'Our primary suppliers hold ISO 9001 certification for their quality management systems. This ensures consistent production standards, traceability, and ongoing process improvement across every production run.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
    ),
    name: 'SGS Third-Party Testing',
    subtitle: 'Independent Laboratory Verification',
    desc: 'All Solubelle bags are tested by SGS — the world\'s leading testing, inspection, and certification company — for heavy metals, phthalates, BPA, and material composition. Test reports available on request.',
  },
  {
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </>
    ),
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
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1A7DC4" strokeWidth="1.6" aria-hidden="true" style={{ marginBottom: '1rem' }}>
                    {cert.icon}
                  </svg>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem', color: '#1a1a1a' }}>{cert.name}</h3>
                  <p style={{ color: '#1A7DC4', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>{cert.subtitle}</p>
                  <p style={{ color: '#6b7280', lineHeight: 1.75, fontSize: '0.9rem', flex: 1, marginBottom: '1.5rem' }}>{cert.desc}</p>
                  <p style={{ fontSize: '0.85rem', color: '#9ca3af', fontStyle: 'italic', margin: 0 }}>
                    Documentation packet available on request
                  </p>
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
