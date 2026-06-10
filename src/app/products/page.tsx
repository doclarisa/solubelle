import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';
import { SPECS } from '@/lib/specs';

export const metadata: Metadata = {
  title: 'Shop Water-Soluble Bags | Solubelle® Products',
  description: "Shop Solubelle's PVA water-soluble grocery bags. Standard, produce, and heavy-duty options for home use and wholesale retail.",
  alternates: { canonical: 'https://solubelle.com/products' },
};

const products = [
  {
    name: 'Standard Grocery Bag',
    sub: 'T-shirt style · 12″ × 20″',
    description: 'The drop-in replacement for conventional checkout bags. Holds up to 12 lbs and dissolves completely in hot water.',
    detail: 'Hot-water dissolvable. Fits any standard T-shirt bag dispenser. Perfect for grocery checkout lanes and general retail use.',
    sizes: 'Available in rolls of 50, 100, or 500',
    accent: '#1A7DC4',
    accentLight: '#e8f4fd',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M10 10V8a5 5 0 0110 0v2" stroke="#1A7DC4" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="5" y="10" width="20" height="17" rx="3" stroke="#1A7DC4" strokeWidth="1.7" fill="#1A7DC4" fillOpacity="0.08" />
        <line x1="5" y1="16" x2="25" y2="16" stroke="#1A7DC4" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    name: 'Produce Bag',
    sub: 'Ultra-thin · 10″ × 14″',
    description: 'Crystal-clear, ultra-thin film for loose fruits, vegetables, and bulk items. Same hot-water dissolving formula as every Solubelle bag.',
    detail: 'Transparent so produce is visible at a glance. Rain- and produce-moisture resistant — full dissolution requires hot water, not a wet countertop. Designed for the produce aisle.',
    sizes: 'Available in rolls of 100 or 500',
    accent: '#4CAF50',
    accentLight: '#e8f5e9',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M15 4C15 4 7 11 7 17a8 8 0 0016 0C23 11 15 4 15 4z" fill="#4CAF50" fillOpacity="0.1" stroke="#4CAF50" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M11 18c0 2.2 1.8 4 4 4" stroke="#4CAF50" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 12v4" stroke="#4CAF50" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Heavy-Duty Shopper',
    sub: '14″ × 22″ · Reinforced',
    description: `For loads up to ${SPECS.capacity.heavyDuty}. Wide gusset and reinforced handle seams for mixed or oversized grocery runs.`,
    detail: 'Makes a statement at any market or large-format store. Same dissolution properties — just built for heavier use.',
    sizes: 'Available in packs of 50 or 250',
    accent: '#1A7DC4',
    accentLight: '#e8f4fd',
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M9 10V8a6 6 0 0112 0v2" stroke="#1A7DC4" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="4" y="10" width="22" height="17" rx="3" stroke="#1A7DC4" strokeWidth="1.7" fill="#1A7DC4" fillOpacity="0.08" />
        <path d="M9 20l4-4 4 4" stroke="#1A7DC4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="17" y1="22" x2="17" y2="16" stroke="#1A7DC4" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProductsPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e8f5e9 100%)', padding: '5rem 0 4rem' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <p style={{ color: '#4CAF50', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              PVA Water-Soluble Bags
            </p>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.12, marginBottom: '1.5rem', color: '#0f172a' }}>
              Water-Soluble Bags for Every Use
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#4b5563', maxWidth: 600, margin: '0 auto 2.25rem', lineHeight: 1.75 }}>
              From the checkout counter to the farmers market, Solubelle has a bag that dissolves the plastic problem at the moment of disposal.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/for-retailers" className="btn-outline-blue" style={{ borderRadius: 8 }}>Wholesale Pricing</Link>
              <Link href="/contact" className="btn-secondary" style={{ borderRadius: 8 }}>Request Samples</Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Product Cards */}
      <section style={{ padding: '5.5rem 0' }}>
        <div className="container-max">
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '3.25rem', color: '#0f172a' }}>
              Our Products
            </h2>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
            {products.map((product, i) => (
              <FadeInSection key={product.name} delay={i * 120}>
                <div style={{ background: '#fff', border: `1.5px solid ${product.accentLight === '#e8f4fd' ? '#bde0f7' : '#c8e6c9'}`, borderRadius: 14, padding: '2.5rem 2.25rem', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ width: 58, height: 58, borderRadius: 13, background: product.accentLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    {product.icon}
                  </div>
                  <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.3rem', color: '#0f172a' }}>{product.name}</h2>
                  <p style={{ fontSize: '0.82rem', color: '#9ca3af', marginBottom: '1rem', fontFamily: "'Poppins', sans-serif" }}>{product.sub}</p>
                  <p style={{ color: '#374151', lineHeight: 1.75, marginBottom: '0.75rem', flex: 1 }}>{product.description}</p>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{product.detail}</p>
                  <p style={{ fontSize: '0.85rem', color: product.accent, fontWeight: 600, marginBottom: '1.75rem', fontFamily: "'Poppins', sans-serif" }}>{product.sizes}</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <Link href="/contact" className="btn-primary" style={{ flex: 1, minWidth: 120, textAlign: 'center', borderRadius: 8 }}>Order Samples</Link>
                    <button className="btn-secondary" style={{ flex: 1, minWidth: 120, borderRadius: 8 }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Branded Bags */}
      <section style={{ padding: '5rem 0', background: '#f8fcff', borderTop: '1px solid #ddeef8' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <FadeInSection>
              <p style={{ color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: '0.85rem' }}>
                For Retailers &amp; Brands
              </p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1.25rem', color: '#0f172a' }}>
                Custom Branded Bags
              </h2>
              <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
                Put your store&apos;s name, logo, or messaging on every bag. Custom printing turns each checkout into a brand moment — and every dissolved bag into a story your customers tell.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Minimum order quantity is {SPECS.moq.customBranded}. Most orders ship within {SPECS.leadTime.customBranded} of artwork approval.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {['1–4 color printing available', 'Pantone color matching', 'Custom sizing on request', 'Net-30 terms for qualified accounts'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#374151', fontSize: '0.95rem' }}>
                    <span style={{ color: '#4CAF50', fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </FadeInSection>

            <FadeInSection delay={150}>
              <div style={{ background: '#fff', borderRadius: 14, padding: '2.5rem', border: '1px solid #e4eef8', boxShadow: '0 2px 20px rgba(26,125,196,0.05)' }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: '2rem', color: '#0f172a' }}>Request a Custom Quote</h3>
                <form action="https://formspree.io/f/placeholder" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="company-name" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', color: '#374151', marginBottom: '0.4rem', fontFamily: "'Poppins', sans-serif" }}>Company Name</label>
                    <input
                      id="company-name"
                      name="company_name"
                      type="text"
                      required
                      placeholder="Your business name"
                      style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 7, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="order-qty" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', color: '#374151', marginBottom: '0.4rem', fontFamily: "'Poppins', sans-serif" }}>Estimated Order Quantity</label>
                    <select
                      id="order-qty"
                      name="order_quantity"
                      required
                      style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 7, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', background: '#fff', appearance: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                    >
                      <option value="">Select quantity range</option>
                      <option value="500">500</option>
                      <option value="2500">2,500</option>
                      <option value="10000+">10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontWeight: 600, fontSize: '0.875rem', color: '#374151', marginBottom: '0.4rem', fontFamily: "'Poppins', sans-serif" }}>Contact Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 7, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem', borderRadius: 8 }}>
                    Get Custom Quote
                  </button>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ background: 'linear-gradient(135deg, #1A7DC4, #2fa55a)', padding: '4.5rem 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', marginBottom: '1rem' }}>
              Ready to Bring Solubelle to Your Store?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem', lineHeight: 1.75 }}>
              Request free samples, get wholesale pricing, or talk to our team about custom options.
            </p>
            <Link href="/for-retailers" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.9rem 2.5rem', background: '#fff', color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', borderRadius: 8, textDecoration: 'none' }}>
              See Wholesale Options →
            </Link>
          </FadeInSection>
        </div>
      </section>

    </main>
  );
}
