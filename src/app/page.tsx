import type { Metadata } from 'next';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: 'Solubelle® | Water-Soluble Grocery Bags | Zero Plastic. Zero Guilt.',
  alternates: { canonical: 'https://solubelle.com' },
};

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: '#fff' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0a5fa0 0%, #0d7ec4 40%, #2aab5e 80%, #3ebd6b 100%)',
        padding: '90px 40px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* decorative circles */}
        <div style={{ position: 'absolute', top: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -40, width: 350, height: 350, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.22)', color: '#fff',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '6px 18px', borderRadius: 999, marginBottom: 22, border: '1px solid rgba(255,255,255,0.4)',
          }}>
            🌿 Now Available to US Retailers
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: '#fff', lineHeight: 1.12, marginBottom: 18, position: 'relative', zIndex: 1 }}>
            The Bag That<br />Disappears. For Real.
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.88)', maxWidth: 560, margin: '0 auto 36px', lineHeight: 1.65, position: 'relative', zIndex: 1 }}>
            Solubelle brings PVA water-soluble grocery bags to American retailers — no microplastics, no landfill, no compromise.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <a href="/products" style={{ background: '#fff', color: '#0d7ec4', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 10, border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
              Shop for Your Home
            </a>
            <a href="/for-retailers" style={{ background: 'transparent', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 10, border: '2px solid #fff', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
              Wholesale for Your Store
            </a>
          </div>
          <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'rgba(255,255,255,0.8)', fontSize: 13, position: 'relative', zIndex: 1 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#a8f5c4', display: 'inline-block' }} />
            Dissolves completely in water · Leaves zero microplastics
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: '#0f2027', padding: '20px 40px', display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
        {[
          { num: '100B', label: 'Bags Discarded Per Year' },
          { num: '0', label: 'Microplastics Left Behind' },
          { num: '< 2 min', label: 'To Fully Dissolve' },
          { num: '12+', label: 'States Banned Plastic Bags' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: 22, fontWeight: 800, color: '#3ebd6b' }}>{s.num}</span>
            <span style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* THREE FEATURE CARDS */}
      <div style={{ background: '#f0f9ff', padding: '72px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#3ebd6b', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
          The Problem · The Solution · The Proof
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: '#0f2027', marginBottom: 12, lineHeight: 1.2 }}>
          Why Everything Else Falls Short
        </div>
        <div style={{ fontSize: 17, color: '#3a5068', maxWidth: 540, margin: '0 auto 52px', lineHeight: 1.65 }}>
          100 billion plastic bags enter landfills each year in the US. We built the alternative.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28, maxWidth: 900, margin: '0 auto' }}>
          {[
            { circleBg: '#fff0f0', emoji: '🗑️', stat: '100B', title: 'Bags a Year', desc: 'Americans discard 100 billion single-use plastic bags annually — taking 400–1,000 years to break down.' },
            { circleBg: '#e8f4fd', emoji: '💧', stat: '< 2 min', title: 'Gone in Minutes', desc: 'Drop a Solubelle bag in hot water and it fully dissolves. No fragments. No residue. Just water.' },
            { circleBg: '#edfaf3', emoji: '🌿', stat: 'Zero', title: 'Trace Left Behind', desc: 'PVA is not a microplastic. It biodegrades completely — no persistent polymer fragments, ever.' },
          ].map((c) => (
            <div key={c.title} style={{ background: '#fff', borderRadius: 16, padding: '32px 28px', border: '1px solid #e0eef8', textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: c.circleBg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 28 }}>
                {c.emoji}
              </div>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#0d7ec4', marginBottom: 8 }}>{c.stat}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0f2027', marginBottom: 10 }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: '#3a5068', lineHeight: 1.6 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div style={{ background: '#0f2027', padding: '72px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#3ebd6b', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
          See It to Believe It
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
          No Tricks. No Editing.
        </div>
        <div style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 540, margin: '0 auto 40px', lineHeight: 1.65 }}>
          Just a bag, a glass of hot water, and 90 seconds of your time.
        </div>
        <div style={{ background: '#1a3a52', borderRadius: 16, padding: '72px 40px', textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #0d7ec4, #3ebd6b)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 28, color: '#fff' }}>
            ▶
          </div>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Watch It Dissolve Live</h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)' }}>
            This is the demo that closes every sales meeting.<br />A glass of water. Drop the bag in. Watch the room react.
          </p>
          <a href="/how-it-works" style={{ color: '#3ebd6b', fontSize: 14, fontWeight: 600, marginTop: 20, display: 'inline-block', textDecoration: 'none' }}>
            Learn how PVA works →
          </a>
        </div>
      </div>

      {/* TWO AUDIENCE CARDS */}
      <div style={{ background: '#fff', padding: '72px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#3ebd6b', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
          Who It&apos;s For
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: '#0f2027', marginBottom: 44, lineHeight: 1.2 }}>
          Built for Stores. Loved at Home.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 860, margin: '0 auto' }}>
          <div style={{ background: '#0d7ec4', borderRadius: 20, padding: '44px 36px', textAlign: 'left' }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 14 }}>For Stores &amp; Retailers</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: 28 }}>
              Replace your checkout bags with something your customers will actually talk about. A glass of water and a 30-second demo sells itself.
            </p>
            <a href="/for-retailers" style={{ display: 'inline-block', background: '#fff', color: '#0d7ec4', fontWeight: 700, fontSize: 14, padding: '12px 26px', borderRadius: 10, textDecoration: 'none' }}>
              Get Wholesale Pricing
            </a>
          </div>
          <div style={{ background: '#3ebd6b', borderRadius: 20, padding: '44px 36px', textAlign: 'left' }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 14 }}>For Your Home</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: 28 }}>
              Order a box, keep them in the car, bring them everywhere. Guilt-free grocery runs for the whole family. Rain-safe until you&apos;re done.
            </p>
            <a href="/products" style={{ display: 'inline-block', background: '#fff', color: '#3ebd6b', fontWeight: 700, fontSize: 14, padding: '12px 26px', borderRadius: 10, textDecoration: 'none' }}>
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div style={{ background: '#f0f9ff', padding: '72px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#3ebd6b', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
          How We Compare
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: '#0f2027', marginBottom: 44, lineHeight: 1.2 }}>
          See Why Smart Retailers Are Switching
        </div>
        <div style={{ maxWidth: 820, margin: '0 auto', borderRadius: 16, overflow: 'hidden', border: '1px solid #d0e8f5' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '16px 20px', fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'left', background: '#0f2027' }}>Feature</th>
                <th style={{ padding: '16px 20px', fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'left', background: '#0d7ec4' }}>
                  Solubelle PVA <span style={{ display: 'inline-block', background: '#3ebd6b', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999, marginLeft: 8 }}>Best</span>
                </th>
                <th style={{ padding: '16px 20px', fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'left', background: '#0f2027' }}>Traditional Plastic</th>
                <th style={{ padding: '16px 20px', fontSize: 13, fontWeight: 700, color: '#fff', textAlign: 'left', background: '#0f2027' }}>Paper Bag</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Dissolves in nature', '✅ Yes', '❌ 400–1,000 yrs', '⚠️ Partial'],
                ['Microplastics risk', '✅ None', '❌ High', '✅ None'],
                ['Load strength', '✅ 10–15 lbs', '✅ High', '⚠️ Moderate'],
                ['Rain resistance', '✅ Yes', '✅ Yes', '❌ No'],
                ['Toxic residue', '✅ None', '❌ Yes', '⚠️ Inks/bleach'],
                ['Available in US', '✅ Ships now', '✅', '✅'],
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ padding: '14px 20px', fontSize: 14, color: '#3a5068', background: i % 2 === 0 ? '#fff' : '#f7fbff', borderBottom: '1px solid #e8f4fd' }}>{row[0]}</td>
                  <td style={{ padding: '14px 20px', fontSize: 14, fontWeight: 700, color: '#0d7ec4', background: i % 2 === 0 ? '#e8f5ff' : '#d6edff', borderBottom: '1px solid #e8f4fd' }}>{row[1]}</td>
                  <td style={{ padding: '14px 20px', fontSize: 14, color: '#3a5068', background: i % 2 === 0 ? '#fff' : '#f7fbff', borderBottom: '1px solid #e8f4fd' }}>{row[2]}</td>
                  <td style={{ padding: '14px 20px', fontSize: 14, color: '#3a5068', background: i % 2 === 0 ? '#fff' : '#f7fbff', borderBottom: '1px solid #e8f4fd' }}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: '#0f2027', padding: '22px 40px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['FDA-Safe Materials', 'ASTM D6400 Certified', 'Zero Microplastics', 'Ships From US', 'No Landfill Waste'].map((item, i, arr) => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 28px', borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3ebd6b', flexShrink: 0, display: 'inline-block' }} />
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{item}</span>
          </div>
        ))}
      </div>

      {/* EMAIL CTA */}
      <div style={{ background: 'linear-gradient(135deg, #0d7ec4, #3ebd6b)', padding: '72px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 34, fontWeight: 800, color: '#fff', marginBottom: 10 }}>Be First. Stay Ahead.</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.82)', marginBottom: 30 }}>
          Wholesale pricing, new SKUs, and launch events — straight to your inbox.
        </p>
        <EmailCapture />
      </div>

    </div>
  );
}
