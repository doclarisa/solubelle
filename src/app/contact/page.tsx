import type { Metadata } from 'next';
import FadeInSection from '@/components/FadeInSection';

export const metadata: Metadata = {
  title: 'Contact Solubelle | Questions, Orders & Wholesale Inquiries',
  description: 'Contact Solubelle for product questions, wholesale inquiries, or customer support. We reply within 1 business day.',
  alternates: { canonical: 'https://solubelle.com/contact' },
};

export default function ContactPage() {
  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #e8f5e9 100%)', padding: '5rem 0 4rem' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <p style={{ color: '#4CAF50', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>We'd Love to Hear From You</p>
            <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.15, marginBottom: '1.25rem', color: '#1a1a1a' }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#4b5563', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Product questions, wholesale inquiries, or just curious — we reply within 1 business day.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Two-column: Form + Contact Info */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            {/* Form */}
            <FadeInSection>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.4rem', marginBottom: '2rem', color: '#1a1a1a' }}>Send Us a Message</h2>
              <form action="https://formspree.io/f/placeholder" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
                <div>
                  <label htmlFor="subject" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', background: '#fff', appearance: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Question</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="order-support">Order Support</option>
                    <option value="media">Media</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '0.4rem' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us what's on your mind..."
                    style={{ width: '100%', padding: '0.85rem 1rem', border: '1.5px solid #d1d5db', borderRadius: 6, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1rem' }}>
                  Send Message
                </button>
              </form>
            </FadeInSection>

            {/* Contact Info */}
            <FadeInSection delay={150}>
              <div style={{ position: 'sticky', top: '2rem' }}>
                <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.4rem', marginBottom: '2rem', color: '#1a1a1a' }}>Contact Information</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {/* Response time */}
                  <div style={{ background: '#e8f5e9', borderRadius: 10, padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>⚡</span>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem', color: '#388E3C' }}>Fast Response Guarantee</p>
                      <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>We reply within 1 business day. Usually faster.</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, background: '#e8f4fd', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.25rem' }}>✉️</div>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.25rem' }}>Email</p>
                      <a href="mailto:hello@solubelle.com" style={{ color: '#1A7DC4', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }} rel="noopener noreferrer">
                        hello@solubelle.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, background: '#fce7f3', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1.25rem' }}>📸</div>
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.25rem' }}>Instagram</p>
                      <a href="https://instagram.com/solubelle" target="_blank" rel="noopener noreferrer" style={{ color: '#1A7DC4', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>
                        @solubelle
                      </a>
                    </div>
                  </div>

                  {/* Wholesale CTA */}
                  <div style={{ background: 'linear-gradient(135deg, #e8f4fd, #e8f5e9)', borderRadius: 12, padding: '1.5rem' }}>
                    <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>Wholesale Inquiry?</p>
                    <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
                      For faster wholesale response, use our dedicated retailer form.
                    </p>
                    <a href="/for-retailers" className="btn-outline-blue" style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}>
                      Retailer Inquiry Form →
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
}
