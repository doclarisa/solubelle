import type { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';

export const metadata: Metadata = {
  title: 'Shop Water-Soluble Bags | Solubelle® Products',
  description: 'Shop Solubelle\'s PVA water-soluble grocery bags. Standard, produce, and heavy-duty options for home use and wholesale retail.',
  alternates: { canonical: 'https://solubelle.com/products' },
};

const products = [
  {
    name: 'Standard Grocery Bag',
    sub: 'T-shirt style, 12″×20″',
    description: 'Great for checkout lanes and daily shopping. Holds up to 12 lbs.',
    detail: 'Hot-water dissolvable. Perfect drop-in replacement for conventional plastic T-shirt bags at retail checkout.',
    sizes: 'Available in rolls of 50, 100, or 500',
    icon: '🛍️',
  },
  {
    name: 'Produce Bag',
    sub: 'Ultra-thin, 10″×14″',
    description: 'Ultra-thin for fresh produce. Cold-water grade. Transparent and lightweight.',
    detail: 'Designed for loose fruits, vegetables, and bulk items. Crystal-clear film so produce is visible at a glance.',
    sizes: 'Available in rolls of 100 or 500',
    icon: '🥦',
  },
  {
    name: 'Heavy-Duty Shopper',
    sub: '14″×22″',
    description: 'For heavier loads up to 20 lbs. Reinforced seams. Perfect for farmers market vendors.',
    detail: 'Extra-wide gusset and reinforced handle seams for oversized or mixed loads. Makes a statement at any market.',
    sizes: 'Available in packs of 50 or 250',
    icon: '💪',
  },
];

export default function ProductsPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #e8f5e9 100%)', padding: '5rem 0 4rem' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <p style={{ color: '#4CAF50', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>PVA Water-Soluble Bags</p>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: '#1a1a1a' }}>
              Water-Soluble Bags for Every Use
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: 600, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              From the checkout counter to the farmers market, Solubelle has a bag that dissolves the plastic problem at the moment of disposal.
            </p>
            <Link href="/for-retailers" className="btn-outline-blue" style={{ marginRight: '1rem' }}>Wholesale Pricing</Link>
            <Link href="/contact" className="btn-secondary">Request Samples</Link>
          </FadeInSection>
        </div>
      </section>

      {/* Product Cards */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', textAlign: 'center', marginBottom: '3rem' }}>Our Products</h2>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2rem' }}>
            {products.map((product, i) => (
              <FadeInSection key={product.name} delay={i * 120}>
                <div style={{ background: '#fff', border: '1.5px solid #4CAF50', borderRadius: 12, padding: '2.25rem', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ fontSize: '2.75rem', marginBottom: '1.25rem' }}>{product.icon}</div>
                  <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.25rem', color: '#1a1a1a' }}>{product.name}</h2>
                  <p style={{ fontSize: '0.85rem', color: '#6b7280', marginBottom: '1rem', fontStyle: 'italic' }}>{product.sub}</p>
                  <p style={{ color: '#374151', lineHeight: 1.7, marginBottom: '0.75rem', flex: 1 }}>{product.description}</p>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{product.detail}</p>
                  <p style={{ fontSize: '0.85rem', color: '#1A7DC4', fontWeight: 600, marginBottom: '1.75rem' }}>{product.sizes}</p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <Link href="/contact" className="btn-primary" style={{ flex: 1, minWidth: 120, textAlign: 'center' }}>Order Samples</Link>
                    <button className="btn-secondary" style={{ flex: 1, minWidth: 120 }}>Add to Cart</button>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Branded Bags */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <FadeInSection>
              <p style={{ color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>For Retailers &amp; Brands</p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1.25rem', color: '#1a1a1a' }}>Custom Branded Bags</h2>
              <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
                Put your store's name, logo, or messaging on every bag. Custom printing turns each checkout into a brand moment — and every dissolved bag into a story your customers tell.
              </p>
              <p style={{ color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
                Minimum order quantities apply. We work with your design team or can connect you with our in-house design resources. Most orders ship within 4–6 weeks of artwork approval.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['1–4 color printing available', 'Pantone color matching', 'Custom sizing on request', 'Net-30 terms for qualified accounts'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#374151', fontSize: '0.95rem' }}>
                    <span style={{ color: '#4CAF50', fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </FadeInSection>

            <FadeInSection delay={150}>
              <div style={{ background: '#fff', borderRadius: 12, padding: '2.5rem', border: '1px solid #e5e7eb', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.15rem', marginBottom: '2rem', color: '#1a1a1a' }}>Request a Custom Quote</h3>
                <form action="https://formspree.io/f/placeholder" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label htmlFor="company-name" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Company Name</label>
                    <input
                      id="company-name"
                      name="company_name"
                      type="text"
                      required
                      placeholder="Your business name"
                      style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="order-qty" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Estimated Order Quantity</label>
                    <select
                      id="order-qty"
                      name="order_quantity"
                      required
                      style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', background: '#fff', appearance: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                    >
                      <option value="">Select quantity range</option>
                      <option value="500">500</option>
                      <option value="2500">2,500</option>
                      <option value="10000+">10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Contact Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                    Get Custom Quote
                  </button>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)', padding: '4rem 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#fff', marginBottom: '1rem' }}>
              Ready to Bring Solubelle to Your Store?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', marginBottom: '2rem', maxWidth: 520, margin: '0 auto 2rem' }}>
              Request free samples, get wholesale pricing, or talk to our team about custom options.
            </p>
            <Link href="/for-retailers" style={{ display: 'inline-flex', alignItems: 'center', padding: '0.85rem 2.25rem', background: '#fff', color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', borderRadius: 6, textDecoration: 'none' }}>
              See Wholesale Options →
            </Link>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}
