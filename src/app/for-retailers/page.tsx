import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';

export const metadata: Metadata = {
  title: 'Wholesale Water-Soluble Bags for Retailers | Solubelle®',
  description: 'Wholesale PVA water-soluble checkout bags for grocery stores, farmers markets, and specialty retailers. Request samples and wholesale pricing.',
  alternates: { canonical: 'https://solubelle.com/for-retailers' },
};

const pricingTiers = [
  {
    name: 'Starter',
    units: '500 units',
    price: 'Contact for pricing',
    features: ['All bag styles available', 'Free sample pack included', 'Standard 7–10 day shipping', 'Email support'],
    popular: false,
  },
  {
    name: 'Growth',
    units: '2,500 units',
    price: 'Contact for pricing',
    features: ['All bag styles available', 'Priority fulfillment', 'Net-30 terms available', 'Dedicated account contact', 'Custom label options'],
    popular: true,
  },
  {
    name: 'Partner',
    units: '10,000+ units',
    price: 'Contact for pricing',
    features: ['Custom bag printing', 'Net-30 terms standard', 'Dedicated account manager', 'Co-marketing support', 'Priority restock', 'Volume discounts'],
    popular: false,
  },
];

const steps = [
  { num: '01', title: 'Request Free Samples', desc: 'Fill out the form below and we\'ll send a sample pack of all three bag styles. Drop one in a glass of water at your next staff meeting.' },
  { num: '02', title: 'Choose Your SKUs & Quantities', desc: 'Once you\'ve seen the demo, select the bag styles and quantities that fit your checkout volume. We\'ll send a formal quote within 24 hours.' },
  { num: '03', title: 'Place Your First Order', desc: 'Net-30 payment terms are available for qualified accounts. Most first orders ship within 5–7 business days.' },
];

export default function ForRetailersPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #e8f5e9 100%)', padding: '5rem 0 4rem' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <p style={{ color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Wholesale &amp; Retail Partnerships</p>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: '#1a1a1a' }}>
              Bring the Bag That Sells Itself<br />to Your Store
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: 640, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Your customers are already asking about plastic alternatives. Solubelle gives you something better than an answer — a demo.
            </p>
            <a href="#inquiry-form" className="btn-primary" style={{ marginRight: '1rem' }}>Request Free Samples</a>
            <Link href="/products" className="btn-outline-blue">View Products</Link>
          </FadeInSection>
        </div>
      </section>

      {/* The Pitch */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <FadeInSection>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1.5rem', color: '#1a1a1a' }}>Why Solubelle Works for Your Business</h2>
              <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Drop one bag in a glass of water at checkout. That 30 seconds sells more bags than any shelf sign ever could. Customers watch it dissolve, they ask questions, they talk to other customers, and then they buy. The bag is its own marketing.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                With plastic bag bans now active in over 12 states — and more on the way — retailers need an alternative that works in existing dispensers, holds a full grocery load, and doesn't cost a fortune. Solubelle checks every box.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '2rem' }}>
                Beyond compliance, Solubelle is an ESG story your team can actually be proud of — and a customer conversation-starter that differentiates your store from every competitor still handing out paper.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Fits existing T-shirt bag dispensers — zero equipment cost',
                  'State plastic bag ban compliant',
                  'ESG differentiator for store reporting',
                  'Customers become advocates after the demo',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#374151', fontSize: '0.95rem' }}>
                    <span style={{ color: '#4CAF50', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </FadeInSection>
            <FadeInSection delay={150}>
              <div style={{ background: '#1a1a1a', borderRadius: 16, padding: '2.5rem', color: '#fff' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🥤</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#fff', marginBottom: '1rem' }}>The Checkout Demo</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Keep a glass of water at your checkout counter. Drop a Solubelle bag in. Watch what happens over the next few minutes.
                </p>
                <p style={{ color: '#4CAF50', fontStyle: 'italic', lineHeight: 1.7, fontWeight: 600 }}>
                  "Every customer stopped to watch." — Sarah M., Natural Grocery Store Owner
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* How Wholesale Works */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div className="container-max">
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '3rem' }}>How It Works</h2>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {steps.map((step, i) => (
              <FadeInSection key={step.num} delay={i * 120}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                  <p style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '0.75rem' }}>Wholesale Pricing Tiers</h2>
            <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '3rem' }}>Transparent, volume-based pricing. No surprises.</p>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            {pricingTiers.map((tier, i) => (
              <FadeInSection key={tier.name} delay={i * 120}>
                <div style={{ position: 'relative', background: '#fff', borderRadius: 12, border: tier.popular ? '2px solid #1A7DC4' : '1px solid #e5e7eb', padding: tier.popular ? '2.5rem 2rem' : '2rem', boxShadow: tier.popular ? '0 8px 32px rgba(26,125,196,0.15)' : 'none' }}>
                  {tier.popular && (
                    <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)', color: '#fff', padding: '0.3rem 1.25rem', borderRadius: 20, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
                      Most Popular
                    </div>
                  )}
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem', color: tier.popular ? '#1A7DC4' : '#1a1a1a' }}>{tier.name}</h3>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.25rem' }}>{tier.units}</p>
                  <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#374151', marginBottom: '1.5rem' }}>{tier.price}</p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#374151' }}>
                        <span style={{ color: '#4CAF50', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#inquiry-form" className={tier.popular ? 'btn-primary' : 'btn-outline-blue'} style={{ width: '100%', display: 'block', textAlign: 'center', boxSizing: 'border-box' }}>
                    Get Started
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bold Callout */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ background: '#fff', borderRadius: 16, padding: '3rem', border: '3px solid transparent', backgroundClip: 'padding-box', position: 'relative', textAlign: 'center' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: 16, padding: 3, background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', pointerEvents: 'none' }} />
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: '#1a1a1a', maxWidth: 640, margin: '0 auto', lineHeight: 1.5 }}>
                &ldquo;Bring a glass of water to your next staff meeting. Drop one in. That demo sells the bag better than any sign.&rdquo;
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* B2B Inquiry Form */}
      <section id="inquiry-form" style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div className="container-max">
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <FadeInSection>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '0.75rem' }}>Start Your Wholesale Inquiry</h2>
              <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '3rem' }}>Fill out the form and we'll follow up within 1 business day with samples and pricing.</p>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div style={{ background: '#fff', borderRadius: 12, padding: '2.5rem', border: '1px solid #e5e7eb', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <form action="https://formspree.io/f/placeholder" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label htmlFor="business-name" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Business Name</label>
                      <input id="business-name" name="business_name" type="text" required placeholder="Your store name" style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label htmlFor="store-type" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Store Type</label>
                      <select id="store-type" name="store_type" required style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', background: '#fff', appearance: 'none', cursor: 'pointer', boxSizing: 'border-box' }}>
                        <option value="">Select type</option>
                        <option value="grocery">Grocery Store</option>
                        <option value="farmers-market">Farmers Market</option>
                        <option value="specialty">Specialty Retail</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="monthly-usage" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Monthly Bag Usage Estimate</label>
                    <select id="monthly-usage" name="monthly_usage" required style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', background: '#fff', appearance: 'none', cursor: 'pointer', boxSizing: 'border-box' }}>
                      <option value="">Select monthly volume</option>
                      <option value="under-500">Under 500</option>
                      <option value="500-2500">500–2,500</option>
                      <option value="2500-10000">2,500–10,000</option>
                      <option value="10000+">10,000+</option>
                    </select>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label htmlFor="contact-name" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Contact Name</label>
                      <input id="contact-name" name="contact_name" type="text" required placeholder="Your full name" style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Email Address</label>
                      <input id="contact-email" name="email" type="email" required placeholder="you@store.com" style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>
                      Phone <span style={{ color: '#9ca3af', fontWeight: 400 }}>(optional)</span>
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                    Request Free Samples &amp; Pricing
                  </button>
                  <p style={{ fontSize: '0.8rem', color: '#9ca3af', textAlign: 'center', margin: 0 }}>We reply within 1 business day. No spam, ever.</p>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
}
