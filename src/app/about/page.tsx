import type { Metadata } from 'next';
import FadeInSection from '@/components/FadeInSection';

export const metadata: Metadata = {
  title: 'About Solubelle | Our Mission to End Plastic Bags in America',
  description: "Solubelle's mission is to give every American retailer a plastic-free bag option that actually works. Learn our story, mission, and values.",
  alternates: { canonical: 'https://solubelle.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #e8f4fd, #e8f5e9)', padding: '4rem 0 3rem' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#0f172a', marginBottom: '0.75rem' }}>
            We Saw the Future. We Decided to Bring It Home.
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4b5563', maxWidth: 560, margin: '0 auto' }}>
            Solubelle is a US distributor on a single mission: make plastic-free checkout the obvious choice for every American store.
          </p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '5rem 0' }}>
        <div className="container-max" style={{ maxWidth: 820 }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#0f172a', marginBottom: '1.25rem' }}>
              Our Story
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              We didn&apos;t start with a bag. We started with a problem: plastic bag bans were passing across the US, but the alternatives on offer — flimsy paper, thin &quot;reusable&quot; plastic, cloth bags that never actually got reused — weren&apos;t solving anything. Retailers were frustrated. Consumers were confused. And the bags kept piling up.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Then we saw PVA bags being used in Europe and parts of Asia. A bag that worked exactly like a plastic bag — strong, lightweight, waterproof in normal conditions — but dissolved completely in hot water and biodegraded naturally. No microplastics. No landfill. No consumer behavior change required.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.85 }}>
              Someone needed to bring this to the American market properly — with the right supply chain, the right certifications, and the right distribution infrastructure. That&apos;s what Solubelle is built to do.
            </p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div style={{ margin: '3.5rem 0', padding: '2rem 2.5rem', background: 'linear-gradient(135deg,#e8f4fd,#e8f5e9)', borderRadius: 14 }}>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.75rem' }}>Our Mission</h2>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '1.15rem', color: '#1A7DC4', lineHeight: 1.6 }}>
                To make plastic-free checkout the obvious, easy, beautiful default for every American store.
              </p>
            </div>
          </FadeInSection>

          {/* Values */}
          <FadeInSection delay={100}>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#0f172a', marginBottom: '1.75rem' }}>
              What We Stand For
            </h2>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {[
              { title: 'Radical Transparency', body: 'We share the science — including the hard parts. The wastewater research is real. The limitations are real. We believe consumers and retailers deserve the full picture.', icon: '🔬' },
              { title: 'Quality That Earns Trust', body: 'We only carry bags we\'d use ourselves. Every SKU is tested, certified, and held to the standards we\'d apply to anything our own families handle.', icon: '✅' },
              { title: 'Partnership Over Transaction', body: 'We\'re not here to move units and disappear. We want your store to succeed with these bags long-term — which means supporting you through demos, education, and repeat orders.', icon: '🤝' },
            ].map((v, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="card" style={{ padding: '1.75rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }} aria-hidden="true">{v.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1rem', color: '#0f172a', marginBottom: '0.6rem' }}>{v.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.75 }}>{v.body}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Founder note */}
          <FadeInSection>
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '2.5rem' }}>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.25rem', color: '#0f172a', marginBottom: '1rem' }}>A note from our founder</h2>
              <blockquote className="pull-quote">
                <p style={{ marginBottom: '0.75rem' }}>
                  I&apos;ve watched this industry for years. Every &quot;eco&quot; bag that came to market promised to solve the problem and ended up creating a different one. PVA is the first option I&apos;ve seen that actually does what it says — and I&apos;ve dissolved a lot of bags in a lot of glasses of water to be sure.
                </p>
                <p>
                  We&apos;re not trying to save the world with a single product. We&apos;re trying to give every retailer in America one less reason to reach for the plastic roll. That&apos;s it. That&apos;s enough.
                </p>
              </blockquote>
              <p style={{ marginTop: '1rem', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#374151' }}>— Solubelle Founder</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg,#1A7DC4,#4CAF50)', padding: '4rem 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', marginBottom: '1.25rem' }}>
            Want to carry Solubelle in your store?
          </h2>
          <a href="/for-retailers" style={{ background: '#fff', color: '#1A7DC4', fontFamily: "'Poppins',sans-serif", fontWeight: 700, padding: '0.9rem 2.25rem', borderRadius: 6, textDecoration: 'none', fontSize: '1rem' }}>
            Get Wholesale Pricing
          </a>
        </div>
      </section>
    </>
  );
}
