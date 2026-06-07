import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import EmailCapture from '@/components/EmailCapture';
import FadeInSection from '@/components/FadeInSection';

export const metadata: Metadata = {
  title: 'Solubelle® | Water-Soluble Grocery Bags | Zero Plastic. Zero Guilt.',
  alternates: { canonical: 'https://solubelle.com' },
};

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: '#fff', color: '#1a1a1a' }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        /* Fallback gradient — matches lab-blue tone while image loads */
        background: 'linear-gradient(160deg, #083d6e 0%, #0b1929 55%, #071a10 100%)',
        textAlign: 'center',
      }}>

        {/* ── Background photo ── place licensed image at /public/hero-bg.jpg */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            priority
            quality={88}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>

        {/* ── Colour overlay: blue brand wash + deep darkening at bottom ── */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(15,52,96,0.72) 0%, rgba(11,25,41,0.65) 45%, rgba(11,25,41,0.82) 100%)',
        }} />

        {/* ── Soft vignette edges ── */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          boxShadow: 'inset 0 0 120px 40px rgba(0,0,0,0.45)',
        }} />

        {/* ── Bottom fade into next white section ── */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 100,
          background: 'linear-gradient(to bottom, transparent 0%, #fff 100%)',
        }} />

        {/* ── Content ── */}
        <div className="container-max" style={{ position: 'relative', zIndex: 1, padding: '80px 24px 120px' }}>

          {/* Eyebrow badge */}
          <div style={{ marginBottom: 28 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: '#fff',
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '7px 20px', borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.22)',
              fontFamily: "'Poppins', sans-serif",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50', display: 'inline-block' }} />
              Now Available to US Retailers
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 'clamp(2.6rem, 6vw, 4.25rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            color: '#fff',
            marginBottom: 22,
            letterSpacing: '-0.02em',
            textShadow: '0 2px 24px rgba(0,0,0,0.4)',
          }}>
            The Bag That<br />Disappears. For Real.
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.86)',
            maxWidth: 560,
            margin: '0 auto 44px',
            lineHeight: 1.75,
          }}>
            Solubelle delivers PVA water-soluble grocery bags to US retailers —<br className="hidden md:block" />
            no microplastics, no landfill, no compromise.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
            <a href="#wholesale" style={{
              display: 'inline-flex', alignItems: 'center',
              background: '#1A7DC4',
              color: '#fff',
              padding: '15px 34px', borderRadius: 8, fontSize: 15,
              fontFamily: "'Poppins', sans-serif", fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 4px 24px rgba(26,125,196,0.5)',
            }}>
              Wholesale for Your Store
            </a>
            <Link href="/products" style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: '#fff',
              padding: '15px 34px', borderRadius: 8, fontSize: 15,
              fontFamily: "'Poppins', sans-serif", fontWeight: 700,
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.45)',
            }}>
              Shop for Your Home
            </Link>
          </div>

          {/* Proof points */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {['Dissolves in under 2 min', 'Zero microplastics', 'FDA-safe materials', 'Ships from the US'].map((pt) => (
              <span key={pt} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.78)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50', display: 'inline-block', flexShrink: 0 }} />
                {pt}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────── */}
      <div style={{
        background: '#f0f9ff',
        borderTop: '1px solid #ddeef8',
        borderBottom: '1px solid #ddeef8',
        padding: '14px 40px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 0,
      }}>
        {['FDA-Safe Materials', 'ASTM D6400 Certified', 'Zero Microplastics', 'Ships From US', 'No Landfill Waste'].map((item, i, arr) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 24px', borderRight: i < arr.length - 1 ? '1px solid #c8dff0' : 'none' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontSize: 12.5, color: '#374151', fontWeight: 600, fontFamily: "'Poppins', sans-serif", letterSpacing: '0.01em' }}>{item}</span>
          </div>
        ))}
      </div>

      {/* ── THE NUMBERS ───────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '88px 0 80px' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <p style={{ color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 14 }}>
                The Problem
              </p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(1.85rem, 4.5vw, 2.9rem)', color: '#0f172a', lineHeight: 1.15, marginBottom: 18 }}>
                100 Billion Bags a Year.<br />Zero Good Excuses Left.
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#4b5563', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
                Americans discard 100 billion single-use plastic bags annually. They take up to 1,000 years to break down. The alternatives weren&apos;t working. We built one that does.
              </p>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: 900, margin: '0 auto' }}>
            {[
              { num: '100B', label: 'Plastic bags discarded in the US per year', color: '#1A7DC4' },
              { num: '0', label: 'Microplastics or polymer fragments left behind', color: '#4CAF50' },
              { num: '< 2 min', label: 'To dissolve completely in hot water', color: '#1A7DC4' },
              { num: '12+', label: 'US states with active plastic bag bans', color: '#4CAF50' },
            ].map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 90}>
                <div style={{ textAlign: 'center', padding: '2.25rem 1.5rem', borderRadius: 14, background: '#fafcff', border: '1px solid #eaf2fb' }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(1.85rem, 4vw, 2.6rem)', color: stat.color, marginBottom: 10, lineHeight: 1 }}>
                    {stat.num}
                  </div>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.55, margin: 0 }}>{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────── */}
      <section style={{ background: '#f8fcff', padding: '88px 0 80px', borderTop: '1px solid #ddeef8', borderBottom: '1px solid #ddeef8' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 60 }}>
              <p style={{ color: '#4CAF50', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 14 }}>
                The Solution
              </p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(1.85rem, 4.5vw, 2.9rem)', color: '#0f172a', lineHeight: 1.15 }}>
                Why Everything Else Falls Short
              </h2>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.75rem' }}>
            {[
              {
                icon: (
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                    <path d="M13 2C13 2 4 10 4 16a9 9 0 0018 0C22 10 13 2 13 2z" fill="#1A7DC4" fillOpacity="0.12" stroke="#1A7DC4" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M9 17c0 2.2 1.8 4 4 4" stroke="#1A7DC4" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
                accent: '#e8f4fd',
                title: 'Dissolves Completely',
                desc: "Drop it in hot water. In under two minutes it's gone — not broken into fragments, not floating in pieces. The polymer chains break apart entirely.",
              },
              {
                icon: (
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                    <path d="M13 2L2 7v7c0 5.8 4.8 11.2 11 12.5C20.2 25.2 24 19.8 24 14V7L13 2z" fill="#4CAF50" fillOpacity="0.1" stroke="#4CAF50" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M8 13.5l3.5 3.5 6.5-7" stroke="#4CAF50" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                accent: '#e8f5e9',
                title: "Rain-Safe Until You're Done",
                desc: 'Works exactly like a plastic bag in normal conditions. Handles wet produce, damp hands, and light rain. Dissolves when you choose — not before.',
              },
              {
                icon: (
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                    <circle cx="13" cy="13" r="10" fill="#1A7DC4" fillOpacity="0.08" stroke="#1A7DC4" strokeWidth="1.5" />
                    <path d="M13 7v6l3.5 3.5" stroke="#1A7DC4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 13a5 5 0 0010 0" stroke="#4CAF50" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                ),
                accent: '#f0f9ff',
                title: 'Zero Polymer Fragments',
                desc: 'PVA is not a traditional plastic. It cannot fragment into microplastics. No persistent residue. No polymer persistence in soil or water.',
              },
            ].map((f, i) => (
              <FadeInSection key={f.title} delay={i * 110}>
                <div style={{ background: '#fff', borderRadius: 14, padding: '2.5rem 2.25rem', border: '1px solid #e4eef8', height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 12, background: f.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                    {f.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#0f172a', marginBottom: 12 }}>{f.title}</h3>
                  <p style={{ fontSize: '0.925rem', color: '#4b5563', lineHeight: 1.73, margin: 0 }}>{f.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO ──────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '96px 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center', maxWidth: 940, margin: '0 auto' }}>
            <FadeInSection>
              <p style={{ color: '#4CAF50', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 16 }}>
                See It to Believe It
              </p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)', color: '#0f172a', lineHeight: 1.15, marginBottom: 22 }}>
                No Tricks.<br />No Editing.
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.78, marginBottom: 20 }}>
                Just a bag, a glass of hot water, and 90 seconds. This is the demo that closes every sales meeting.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.78, marginBottom: 36 }}>
                Bring a glass of water to your next staff meeting. Drop one in. By the time you&apos;re done talking, it&apos;ll be gone.
              </p>
              <Link href="/how-it-works" className="btn-outline-blue" style={{ borderRadius: 8 }}>
                Learn How PVA Works →
              </Link>
            </FadeInSection>
            <FadeInSection delay={120}>
              <div style={{
                background: 'linear-gradient(150deg, #e8f4fd 0%, #e8f5e9 100%)',
                borderRadius: 20,
                padding: '4rem 2.75rem',
                textAlign: 'center',
                border: '1px solid #d0e8f5',
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-label="Play video" style={{ marginLeft: 3 }}>
                    <path d="M8 6L22 13L8 20V6z" fill="#fff" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#0f172a', marginBottom: 10 }}>
                  Watch It Dissolve Live
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.7, margin: '0 0 20px' }}>
                  A glass of water. Drop the bag in.<br />Watch the room react.
                </p>
                <Link href="/how-it-works" style={{ color: '#1A7DC4', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', fontFamily: "'Poppins', sans-serif" }}>
                  Read the science →
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────── */}
      <section style={{ background: '#f8fcff', padding: '88px 0 80px', borderTop: '1px solid #ddeef8', borderBottom: '1px solid #ddeef8' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 14 }}>
                Who It&apos;s For
              </p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(1.85rem, 4.5vw, 2.9rem)', color: '#0f172a', lineHeight: 1.15 }}>
                Built for Stores. Loved at Home.
              </h2>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.75rem', maxWidth: 880, margin: '0 auto' }}>
            <FadeInSection>
              <div style={{ background: '#fff', borderRadius: 18, padding: '2.75rem 2.5rem', border: '1.5px solid #bde0f7', height: '100%', boxSizing: 'border-box' }}>
                <div style={{ width: 46, height: 46, borderRadius: 11, background: '#e8f4fd', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <rect x="3" y="6" width="16" height="13" rx="2" stroke="#1A7DC4" strokeWidth="1.5" />
                    <path d="M8 6V5a3 3 0 016 0v1" stroke="#1A7DC4" strokeWidth="1.5" />
                    <line x1="3" y1="11" x2="19" y2="11" stroke="#1A7DC4" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#0f172a', marginBottom: 14 }}>For Stores &amp; Retailers</h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.78, marginBottom: 28 }}>
                  Replace your checkout bags with something your customers will talk about. Plastic ban compliant. Fits existing dispensers. The demo sells itself.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 34, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {['Fits existing T-shirt bag dispensers', 'State bag-ban compliant', 'Net-30 terms for qualified accounts', 'Custom branded bags available'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: '0.875rem', color: '#374151' }}>
                      <span style={{ color: '#1A7DC4', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/for-retailers" className="btn-primary" style={{ display: 'block', textAlign: 'center', borderRadius: 8 }}>
                  Get Wholesale Pricing
                </Link>
              </div>
            </FadeInSection>

            <FadeInSection delay={120}>
              <div style={{ background: '#fff', borderRadius: 18, padding: '2.75rem 2.5rem', border: '1.5px solid #c8e6c9', height: '100%', boxSizing: 'border-box' }}>
                <div style={{ width: 46, height: 46, borderRadius: 11, background: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M11 2C11 2 4 8 4 13a7 7 0 0014 0C18 8 11 2 11 2z" stroke="#4CAF50" strokeWidth="1.5" fill="#4CAF50" fillOpacity="0.1" />
                    <path d="M8 14a3.5 3.5 0 003 1.5" stroke="#4CAF50" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: '#0f172a', marginBottom: 14 }}>For Your Home</h3>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: 1.78, marginBottom: 28 }}>
                  Order a box, keep them in the car, bring them everywhere. Guilt-free grocery runs for the whole family. Rain-safe until you&apos;re ready to dissolve them.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 34, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {['No behavior change required', 'Holds up to 12 lbs of groceries', 'Works for produce too', 'Easy to store and carry'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: '0.875rem', color: '#374151' }}>
                      <span style={{ color: '#4CAF50', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/products" className="btn-secondary" style={{ display: 'block', textAlign: 'center', borderRadius: 8 }}>
                  Shop Now
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '88px 0 80px' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ color: '#4CAF50', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 14 }}>
                From the Field
              </p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(1.85rem, 4.5vw, 2.9rem)', color: '#0f172a', lineHeight: 1.15 }}>
                What Retailers Are Saying
              </h2>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', maxWidth: 960, margin: '0 auto' }}>
            {[
              { quote: 'We put a glass of water on the counter and dropped one in. Every customer stopped to watch.', name: 'Sarah M.', title: 'Natural Grocery Store Owner' },
              { quote: 'Finally a bag I can offer customers without feeling like I\'m greenwashing.', name: 'Market Vendor', title: 'Austin, TX' },
              { quote: 'My staff demo it at checkout. We\'ve had customers come back just to buy more for home use.', name: 'Regional Manager', title: 'Specialty Grocery, Pacific NW' },
            ].map((t, i) => (
              <FadeInSection key={t.name} delay={i * 110}>
                <div style={{ background: '#fafcff', borderRadius: 14, padding: '2.25rem 2rem', border: '1px solid #e4eef8', position: 'relative' }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: '3rem', color: '#1A7DC4', lineHeight: 1, marginBottom: 16, opacity: 0.25 }}>&ldquo;</div>
                  <blockquote style={{ margin: 0, fontStyle: 'italic', color: '#374151', lineHeight: 1.78, fontSize: '0.975rem', marginBottom: 24 }}>
                    {t.quote}
                  </blockquote>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)', flexShrink: 0 }} />
                    <div>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.875rem', color: '#0f172a', margin: 0 }}>{t.name}</p>
                      <p style={{ fontSize: '0.8rem', color: '#9ca3af', margin: '2px 0 0' }}>{t.title}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ──────────────────────────────────── */}
      <section style={{ background: '#f8fcff', padding: '88px 0 80px', borderTop: '1px solid #ddeef8' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <p style={{ color: '#1A7DC4', fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '0.78rem', letterSpacing: '0.13em', textTransform: 'uppercase', marginBottom: 14 }}>
                How We Compare
              </p>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(1.85rem, 4.5vw, 2.9rem)', color: '#0f172a', lineHeight: 1.15, marginBottom: 16 }}>
                See Why Smart Retailers Are Switching
              </h2>
              <p style={{ fontSize: '1rem', color: '#6b7280', maxWidth: 480, margin: '0 auto' }}>
                Three bag types. Six criteria. No spin.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div style={{ maxWidth: 820, margin: '0 auto', borderRadius: 14, overflow: 'hidden', border: '1px solid #d6eaf8', boxShadow: '0 2px 24px rgba(26,125,196,0.06)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '15px 22px', fontSize: 11, fontWeight: 700, color: '#6b7280', textAlign: 'left', background: '#f0f6fc', fontFamily: "'Poppins', sans-serif", textTransform: 'uppercase', letterSpacing: '0.07em' }}>Feature</th>
                    <th style={{ padding: '15px 22px', fontSize: 13, fontWeight: 700, color: '#1A7DC4', textAlign: 'center', background: '#e8f4fd', fontFamily: "'Poppins', sans-serif", borderLeft: '2px solid #bde0f7', borderRight: '2px solid #bde0f7' }}>
                      Solubelle PVA
                      <span style={{ display: 'block', fontSize: 9.5, fontWeight: 700, color: '#4CAF50', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 3 }}>Best Option</span>
                    </th>
                    <th style={{ padding: '15px 22px', fontSize: 11, fontWeight: 600, color: '#6b7280', textAlign: 'center', background: '#f0f6fc', fontFamily: "'Poppins', sans-serif" }}>Traditional Plastic</th>
                    <th style={{ padding: '15px 22px', fontSize: 11, fontWeight: 600, color: '#6b7280', textAlign: 'center', background: '#f0f6fc', fontFamily: "'Poppins', sans-serif" }}>Paper Bag</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Dissolves in nature', '✅ Yes', '❌ 400–1,000 yrs', '⚠️ Partial'],
                    ['Microplastics risk', '✅ None', '❌ High', '✅ None'],
                    ['Load strength', '✅ 10–15 lbs', '✅ High', '⚠️ Moderate'],
                    ['Rain resistance', '✅ Yes', '✅ Yes', '❌ No'],
                    ['Toxic residue', '✅ None', '❌ Yes', '⚠️ Inks/bleach'],
                    ['US availability', '✅ Ships now', '✅', '✅'],
                  ].map((row, i) => (
                    <tr key={String(i)}>
                      <td style={{ padding: '13px 22px', fontSize: 13.5, color: '#374151', background: i % 2 === 0 ? '#fff' : '#fafcff', borderBottom: '1px solid #edf4fb' }}>{row[0]}</td>
                      <td style={{ padding: '13px 22px', fontSize: 13.5, fontWeight: 600, color: '#1A7DC4', background: i % 2 === 0 ? '#f0f9ff' : '#e8f4fd', borderBottom: '1px solid #d6ecf8', textAlign: 'center', borderLeft: '2px solid #bde0f7', borderRight: '2px solid #bde0f7' }}>{row[1]}</td>
                      <td style={{ padding: '13px 22px', fontSize: 13.5, color: '#4b5563', background: i % 2 === 0 ? '#fff' : '#fafcff', borderBottom: '1px solid #edf4fb', textAlign: 'center' }}>{row[2]}</td>
                      <td style={{ padding: '13px 22px', fontSize: 13.5, color: '#4b5563', background: i % 2 === 0 ? '#fff' : '#fafcff', borderBottom: '1px solid #edf4fb', textAlign: 'center' }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ textAlign: 'center', marginTop: 22 }}>
              <Link href="/why-solubelle" style={{ color: '#1A7DC4', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', fontFamily: "'Poppins', sans-serif" }}>
                See the full comparison — all 5 bag types →
              </Link>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── EMAIL CTA ─────────────────────────────────────────── */}
      <section id="wholesale" style={{ background: 'linear-gradient(135deg, #1A7DC4 0%, #2fa55a 100%)', padding: '84px 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)', color: '#fff', marginBottom: 14, letterSpacing: '-0.01em' }}>
              Be First. Stay Ahead.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: 460, margin: '0 auto 38px', lineHeight: 1.75 }}>
              Wholesale pricing, new SKUs, and launch updates — straight to your inbox.
            </p>
            <EmailCapture />
          </FadeInSection>
        </div>
      </section>

    </div>
  );
}
