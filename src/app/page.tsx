import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FadeInSection from '@/components/FadeInSection';
import { SPECS } from '@/lib/specs';

export const metadata: Metadata = {
  title: 'Dissolvable Grocery Bags for US Retailers | Solubelle®',
  description: 'Solubelle PVA dissolvable grocery bags dissolve completely in water — zero microplastics, zero landfill. Wholesale from 1,000 units. Free samples available.',
  alternates: { canonical: 'https://solubelle.com' },
};

/* ── inline helpers ─────────────────────────────────────────── */
const OCEAN  = '#3AAED8';
const OCEAND = '#1E8CB5';
const LEAF   = '#5DAE61';
const LEAFD  = '#3D8C41';
const INK    = '#2F3A3B';
const INKM   = '#3D4748';
const INKL   = '#5E6E6F';
const MINT   = '#EAF9F2';
const SKY    = '#EAF7FB';
const SAND   = '#F7F3E8';
const OFF    = '#FEFCF7';

const Eyebrow = ({ color = LEAF, children }: { color?: string; children: string }) => (
  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color, marginBottom: 14 }}>
    {children}
  </p>
);

const Check = ({ color = LEAF }: { color?: string }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }}>
    <circle cx="9" cy="9" r="9" fill={color} fillOpacity=".15" />
    <path d="M5 9l3 3 5-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", background: OFF, color: INK }}>

      {/* ── 1. HERO ──────────────────────────────────────────── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 580 }}>

        {/* Left half — solid background, fully readable text */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '72px 52px',
          boxSizing: 'border-box',
        }}>
            {/* Pill badge */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'rgba(93,174,97,.15)', border: '1.5px solid rgba(93,174,97,.3)',
              borderRadius: 999, padding: '6px 16px',
              fontSize: 13, fontWeight: 700, color: LEAFD, letterSpacing: '.02em',
              marginBottom: 22,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1C7 1 2 5.5 2 8.5a5 5 0 0010 0C12 5.5 7 1 7 1z" fill={LEAF} fillOpacity=".25" stroke={LEAFD} strokeWidth="1.2"/>
              </svg>
              {SPECS.fda} · PVA water-soluble · Ships from the US
            </span>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: INK,
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}>
              Drop it in water.<br />
              <span style={{ color: OCEAND }}>Watch it disappear.</span>
            </h1>

            <p style={{ fontSize: 18, color: INKM, maxWidth: 460, lineHeight: 1.7, marginBottom: 28 }}>
              Solubelle delivers PVA dissolvable grocery bags to US retailers — no microplastics, no landfill, no recycling required. The bag that finally solves the problem.
            </p>

            {/* Checklist */}
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 36, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                SPECS.dissolution.hotWaterFull,
                'Zero microplastics — verified by FTIR analysis',
                'FDA 21 CFR 175.300 food-safe materials',
                'Rain-resistant until you choose to dissolve it',
                'ASTM D6400 & EN13432 certified',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 16, color: INKM, fontWeight: 500 }}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-hero-green">
                Get Free Samples →
              </a>
              <Link href="/products" className="btn-hero-ocean-o">
                Shop Now
              </Link>
            </div>
          </div>

        {/* Right half — hero photo, full bleed */}
        <div style={{ position: 'relative', minHeight: 480 }}>
          <Image
            src="/heroimg1.png"
            alt="Solubelle PVA dissolvable grocery bag dissolving in water"
            fill
            priority
            quality={88}
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </section>

      {/* ── 2. TRUST BAR ────────────────────────────────────── */}
      <div style={{
        background: OCEAN,
        padding: '14px 52px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 32, flexWrap: 'wrap',
      }}>
        {[SPECS.fdaShort, 'ASTM D6400', 'EN13432', 'Zero microplastics', 'Food-grade safe', 'Marine biodegradable'].map((item) => (
          <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,.7)', display: 'inline-block' }} />
            {item}
          </span>
        ))}
      </div>

      {/* ── 3. PROBLEM → SOLUTION ───────────────────────────── */}
      <section style={{ background: '#fff', padding: '88px 0 80px' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <Eyebrow>Not waiting for a compost facility. Not hoping it gets recycled. Dissolvable — at home, in minutes.</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: INK, lineHeight: 1.15, marginBottom: 16 }}>
                See Why Traditional Bags<br />Just Don&apos;t Cut It
              </h2>
              <p style={{ fontSize: 17, color: INKM, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
                Every alternative still leaves behind a problem. Only PVA disappears — at home, under your tap, in minutes.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              borderRadius: 24, overflow: 'hidden',
              border: '2px solid #d4ede5', marginTop: 52,
            }}>
              {/* Bad column */}
              <div style={{ background: '#fff8f7', borderRight: '2px solid #d4ede5', padding: '44px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                  <span style={{ fontSize: 22 }}>🛍</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#c53030', margin: 0 }}>Traditional Plastic Bags</h3>
                </div>
                {[
                  ['400–1,000 years to decompose', 'Decomposition time'],
                  ['Breaks into microplastics', 'Microplastics risk'],
                  ['Only 1–3% actually recycled', 'Recycling reality'],
                  ['Toxic to wildlife if ingested', 'Wildlife impact'],
                  ['Banned in 12+ US states', 'Legislation status'],
                  ['Toxic polymer residue remains', 'Final residue'],
                ].map(([val, label]) => (
                  <div key={label} style={{ display: 'flex', gap: 12, marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid rgba(197,48,48,.1)' }}>
                    <span style={{ color: '#e53e3e', fontSize: 16, fontWeight: 700, flexShrink: 0 }}>✗</span>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: '#c53030', margin: '0 0 2px' }}>{val}</p>
                      <p style={{ fontSize: 13, color: INKL, margin: 0 }}>{label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Good column */}
              <div style={{ background: MINT, padding: '44px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C12 2 5 8.5 5 13a7 7 0 0014 0C19 8.5 12 2 12 2z" fill={LEAF} fillOpacity=".2" stroke={LEAFD} strokeWidth="1.5"/>
                  </svg>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: LEAFD, margin: 0 }}>Solubelle PVA Bags</h3>
                </div>
                {[
                  ['Minutes to weeks — at home', 'Decomposition time'],
                  ['Zero — FTIR verified', 'Microplastics risk'],
                  ['Dissolves under your tap', 'Recycling reality'],
                  ['Non-toxic, safe for all life', 'Wildlife impact'],
                  ['Compliant in all 50 states', 'Legislation status'],
                  ['FDA-compliant, zero residue', 'Final residue'],
                ].map(([val, label]) => (
                  <div key={label} style={{ display: 'flex', gap: 12, marginBottom: 18, paddingBottom: 18, borderBottom: '1px solid rgba(61,140,65,.12)' }}>
                    <span style={{ color: LEAF, fontSize: 16, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 600, color: LEAFD, margin: '0 0 2px' }}>{val}</p>
                      <p style={{ fontSize: 13, color: INKL, margin: 0 }}>{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 4. HOPE / NATURE IMAGE ──────────────────────────── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 480 }}>

        {/* Left half — solid background, fully readable text */}
        <FadeInSection>
          <div style={{
            background: MINT,
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '72px 60px',
            height: '100%', boxSizing: 'border-box',
          }}>
            <Eyebrow>Our promise</Eyebrow>
            <h2 style={{ fontSize: 'clamp(1.9rem, 2.8vw, 2.6rem)', fontWeight: 800, color: INK, lineHeight: 1.2, marginBottom: 18 }}>
              This is what we&apos;re <span style={{ color: OCEAND }}>protecting</span>.
            </h2>
            <p style={{ fontSize: 18, color: INKM, lineHeight: 1.75, marginBottom: 28 }}>
              Every Solubelle bag that dissolves is a bag that doesn&apos;t spend centuries in the ocean. Our materials are proven non-toxic in water, soil, and marine environments — certified by ASTM D6400 and EN13432.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Non-toxic in seawater and freshwater',
                'Marine biodegradable — TÜV Austria certified',
                'Zero persistent polymer residue',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 16, color: INKM, fontWeight: 500 }}>
                  <Check color={LEAFD} />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-leaf" style={{ alignSelf: 'flex-start', textDecoration: 'none' }}>
              Get free samples →
            </a>
          </div>
        </FadeInSection>

        {/* Right half — ocean photo, full bleed */}
        <div style={{ position: 'relative', minHeight: 480 }}>
          <Image
            src="/ocean2.png"
            alt="Crystal clear ocean water — the environment Solubelle protects"
            fill
            quality={85}
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

      </section>

      {/* ── 5. STATS ────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '88px 0 80px', background: OFF }}>
        {/* Water texture (serfer.jpg) behind 90% white overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/serfer.jpg"
            alt=""
            fill
            quality={70}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'rgba(254,252,247,.90)' }} />

        <div className="container-max" style={{ position: 'relative', zIndex: 2 }}>
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Eyebrow>The numbers</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: INK, lineHeight: 1.15 }}>
                The Scale of the Problem.<br />The Size of the Opportunity.
              </h2>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: 960, margin: '0 auto' }}>
            {[
              { n: '100B', label: 'Single-use plastic bags discarded in the US every year', color: OCEAND },
              { n: '1,000 yrs', label: 'Time for traditional plastic bags to fully decompose', color: OCEAND },
              { n: '$267M', label: 'Projected dissolvable bag market by 2035 (Grand View Research)', color: LEAFD },
              { n: '12+', label: 'US states with active plastic bag bans or fees', color: LEAFD },
            ].map((stat, i) => (
              <FadeInSection key={stat.label} delay={i * 80}>
                <div style={{
                  background: 'rgba(255,255,255,.88)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: 22, padding: '40px 28px',
                  border: `1.5px solid rgba(58,174,216,.2)`,
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.6rem)', fontWeight: 800, color: stat.color, marginBottom: 12, lineHeight: 1 }}>
                    {stat.n}
                  </div>
                  <p style={{ fontSize: 14, color: INKM, lineHeight: 1.6, margin: 0 }}>{stat.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. HOW IT WORKS ─────────────────────────────────── */}
      <section style={{ background: OFF, padding: '88px 0 80px' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Eyebrow>Simple science</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: INK, lineHeight: 1.15, marginBottom: 16 }}>
                How PVA Bags Actually Work
              </h2>
              <p style={{ fontSize: 17, color: INKM, maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
                Polyvinyl alcohol is a non-plastic polymer. It has none of the persistence of polyethylene or polypropylene. Here&apos;s what happens when you add water.
              </p>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 12 }}>
            {[
              { n: '1', title: 'Use normally', desc: 'Holds up to 12 lbs. Rain-resistant. Works at checkout, farmers markets, and produce sections.' },
              { n: '2', title: 'Add water', desc: 'Drop in hot water at home — your sink, a glass, or a bucket. No facility needed.' },
              { n: '3', title: 'It dissolves', desc: `PVA polymer chains break apart in ${SPECS.dissolution.hotWaterTime}. Completely gone — not just smaller.` },
              { n: '0', title: 'Zero residue', desc: 'What remains is non-toxic water-soluble vinyl alcohol — safe in waterways and soil.' },
            ].map((step, i) => (
              <FadeInSection key={step.n} delay={i * 80}>
                <div style={{ background: '#fff', border: '1.5px solid #d0ece0', borderRadius: 22, padding: '32px 22px', textAlign: 'center', height: '100%', boxSizing: 'border-box' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: step.n === '0' ? LEAF : OCEAN,
                    color: '#fff', fontSize: '1.8rem', fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 18px',
                  }}>
                    {step.n}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, marginBottom: 10 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: INKM, lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={200}>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/how-it-works" style={{ color: OCEAND, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Read the full PVA science explainer →
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 7. PRODUCTS ─────────────────────────────────────── */}
      <section style={{ background: SAND, padding: '88px 0 80px' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Eyebrow>Our bags</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: INK, lineHeight: 1.15, marginBottom: 16 }}>
                Three SKUs. Every Retail Scenario Covered.
              </h2>
              <p style={{ fontSize: 17, color: INKM, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
                From checkout lanes to produce sections to heavy-duty shoppers. Custom branding available on all SKUs.
              </p>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                bg: `linear-gradient(135deg, ${MINT}, #c7f2d5)`,
                name: 'Standard Grocery Bag',
                dims: '12″ × 20″ · T-shirt style',
                desc: 'Fits existing checkout dispensers. Holds 10–12 lbs. The drop-in replacement your store needs.',
                price: 'From $18 / 100 bags',
                moq: `MOQ ${SPECS.moq.wholesale}`,
              },
              {
                bg: `linear-gradient(135deg, ${SKY}, #c5ecfa)`,
                name: 'Produce Bag',
                dims: '10″ × 14″ · Ultra-thin',
                desc: 'Transparent, lightweight. Perfect for bulk bins and produce sections. Same hot-water dissolving formula — rain and produce-moisture resistant.',
                price: 'From $13 / 100 bags',
                moq: `MOQ ${SPECS.moq.wholesale}`,
              },
              {
                bg: `linear-gradient(135deg, #e8f5e9, ${MINT})`,
                name: 'Heavy-Duty Shopper',
                dims: '14″ × 22″ · Reinforced handles',
                desc: `Rated to ${SPECS.capacity.heavyDuty}. Extended rain resistance. Ideal for premium markets and eco-retailers.`,
                price: 'From $24 / 100 bags',
                moq: `MOQ ${SPECS.moq.wholesale}`,
              },
            ].map((p, i) => (
              <FadeInSection key={p.name} delay={i * 80}>
                <div className="prod-card">
                  {/* Image area */}
                  <div style={{ height: 160, background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                      <path d="M20 22h24l-4 28H24L20 22z" fill={LEAF} fillOpacity=".18" stroke={LEAFD} strokeWidth="2" strokeLinejoin="round"/>
                      <path d="M26 22c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke={LEAFD} strokeWidth="2" strokeLinecap="round"/>
                      <path d="M28 32h8M28 38h5" stroke={OCEAND} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div style={{ padding: '28px 24px' }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: INK, marginBottom: 4 }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: INKL, marginBottom: 12, fontWeight: 500 }}>{p.dims}</p>
                    <p style={{ fontSize: 15, color: INKM, lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: OCEAND }}>{p.price}</span>
                      <span style={{ fontSize: 12, color: INKL }}>{p.moq}</span>
                    </div>
                    <Link href="/products" style={{
                      display: 'block', textAlign: 'center',
                      background: LEAF, color: '#fff',
                      padding: '11px', borderRadius: 999,
                      fontSize: 14, fontWeight: 700, textDecoration: 'none',
                    }}>
                      View product
                    </Link>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={200}>
            <p style={{ textAlign: 'center', marginTop: 32, fontSize: 15, color: INKL }}>
              Custom logo printing available · <a href="#contact" style={{ color: OCEAND, fontWeight: 600, textDecoration: 'none' }}>Contact us for custom branding</a>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── 8. CERTIFICATIONS ───────────────────────────────── */}
      <section style={{ background: SKY, padding: '88px 0 80px' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Eyebrow>Trust & verification</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: INK, lineHeight: 1.15, marginBottom: 16 }}>
                Every Claim Is Backed<br />by a Certification Standard
              </h2>
              <p style={{ fontSize: 17, color: INKM, maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                We don&apos;t use vague &ldquo;eco&rdquo; language. Every environmental claim we make is tied to a specific third-party certification.
              </p>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, maxWidth: 960, margin: '0 auto' }}>
            {[
              { cert: 'ASTM D6400', body: 'American Society for Testing and Materials', desc: 'Confirms complete biodisintegration and disintegration in a defined timeframe' },
              { cert: 'EN13432', body: 'European Standard', desc: 'International standard for packaging recoverable through composting and biodegradation' },
              { cert: 'FDA 21 CFR 175.300', body: 'US Food & Drug Administration', desc: 'Food-contact approved — safe for direct contact with fresh produce and groceries' },
              { cert: 'Marine Biodegradable', body: 'ASTM D7991 / TÜV Austria', desc: 'Verified non-toxic breakdown in seawater and marine environments' },
            ].map((c, i) => (
              <FadeInSection key={c.cert} delay={i * 70}>
                <div style={{ background: '#fff', border: '1.5px solid #cde9f5', borderRadius: 18, padding: '30px 20px', textAlign: 'center' }}>
                  <div style={{ width: 58, height: 58, borderRadius: '50%', background: SKY, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <path d="M14 2l3.5 7.5L26 11l-6 5.5 1.5 8.5L14 21l-7.5 4 1.5-8.5L2 11l8.5-1.5L14 2z" fill={OCEAN} fillOpacity=".2" stroke={OCEAND} strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, marginBottom: 4 }}>{c.cert}</h3>
                  <p style={{ fontSize: 12, fontWeight: 600, color: OCEAND, marginBottom: 10 }}>{c.body}</p>
                  <p style={{ fontSize: 13, color: INKM, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={200}>
            <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: INKL }}>
              All lab reports available on request. <a href="/contact" style={{ color: OCEAND, fontWeight: 600, textDecoration: 'none' }}>Contact us for certification docs →</a>
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── 9. WHY DIFFERENT ────────────────────────────────── */}
      <section style={{ background: OFF, padding: '88px 0 80px' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Eyebrow>Our advantage</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: INK, lineHeight: 1.15 }}>
                Why Solubelle Is Different
              </h2>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { title: 'No microplastics — verified', desc: 'FTIR analysis confirms zero microplastic or nano-plastic generation at any stage of dissolution.', bg: MINT },
              { title: 'No industrial composting', desc: 'Compostable PLA bags require special facilities that 91% of Americans can\'t access. Ours dissolve under your tap.', bg: SKY },
              { title: 'No recycling required', desc: 'Only 1–3% of plastic bags are actually recycled. Ours don\'t need a recycling bin — they need a sink.', bg: MINT },
              { title: 'Safe everywhere', desc: 'Non-toxic in soil, freshwater, and marine environments. Tested and certified by independent labs.', bg: SKY },
              { title: 'Same strength as plastic', desc: `Holds up to ${SPECS.capacity.heavyDuty} in our Heavy-Duty Shopper. Rain-resistant. Handles wet produce without issue. Zero compromise on performance.`, bg: MINT },
              { title: 'Custom branded, any size', desc: `Full-color logo printing. 4 standard sizes. MOQ ${SPECS.moq.customBranded}. Typical lead time ${SPECS.leadTime.customBranded}.`, bg: SKY },
            ].map((card, i) => (
              <FadeInSection key={card.title} delay={i * 60}>
                <div style={{ border: '1.5px solid #d0ece0', borderRadius: 18, padding: '28px 24px', background: '#fff' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Check color={LEAFD} />
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, marginBottom: 10 }}>{card.title}</h3>
                  <p style={{ fontSize: 15, color: INKM, lineHeight: 1.65, margin: 0 }}>{card.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. APPLICATIONS ─────────────────────────────────── */}
      <section style={{ background: MINT, padding: '88px 0 80px' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Eyebrow>Where they&apos;re used</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: INK, lineHeight: 1.15 }}>
                Built for Every Retail Environment
              </h2>
            </div>
          </FadeInSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { icon: '🏪', label: 'Grocery stores' },
              { icon: '🥬', label: 'Farmers markets' },
              { icon: '♻️', label: 'Eco retailers' },
              { icon: '🍱', label: 'Food delivery' },
              { icon: '🎓', label: 'Universities' },
              { icon: '🏥', label: 'Healthcare' },
              { icon: '🐾', label: 'Pet products' },
              { icon: '📦', label: 'E-commerce' },
            ].map((app, i) => (
              <FadeInSection key={app.label} delay={i * 50}>
                <div style={{ background: '#fff', borderRadius: 18, padding: '28px 16px', textAlign: 'center', border: '1.5px solid #c0edda' }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{app.icon}</div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: INK, margin: 0 }}>{app.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={200}>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/for-retailers" className="btn-leaf" style={{ textDecoration: 'none' }}>
                See wholesale options →
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 11. FAQ ──────────────────────────────────────────── */}
      <section style={{ background: OFF, padding: '88px 0 80px' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: 52 }}>
              <Eyebrow>Common questions</Eyebrow>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: INK, lineHeight: 1.15 }}>
                Everything You Need to Know
              </h2>
            </div>
          </FadeInSection>

          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {[
              {
                q: 'Will it dissolve if it gets rained on?',
                a: SPECS.dissolution.rainResistant,
              },
              {
                q: 'Is it safe for food and produce contact?',
                a: 'Yes. Our PVA material meets FDA 21 CFR 175.300 for food-contact use. It\'s used in pharmaceutical capsule coatings and laundry pods for the same reason — proven food-safe and non-toxic.',
              },
              {
                q: 'What does it actually break down into?',
                a: 'PVA dissolves into water, carbon dioxide, and trace amounts of water-soluble vinyl alcohol. No persistent polymers, no microplastics, no toxic breakdown products. FTIR analysis verifies zero residual polymer chains.',
              },
              {
                q: 'How is this different from compostable bags?',
                a: `Compostable bags (usually PLA) require industrial composting at 140°F+ — facilities that 91% of Americans can't access. Our bags dissolve at home under your tap in ${SPECS.dissolution.hotWaterTime}. No facilities needed.`,
              },
              {
                q: 'What are the minimum order quantities?',
                a: `Wholesale starts at ${SPECS.moq.wholesale} per SKU. Sample kits (mixed SKUs) are available free for qualified retailers. Custom branded bags start at ${SPECS.moq.customBranded} with a ${SPECS.leadTime.customBranded} lead time.`,
              },
              {
                q: 'Can you print our logo on the bags?',
                a: `Yes. Full-color logo printing is available on all SKUs at a ${SPECS.moq.customBranded} MOQ. We handle the print setup — just send your logo files. Typical lead time is ${SPECS.leadTime.customBranded} from artwork approval.`,
              },
            ].map((faq, i) => (
              <FadeInSection key={faq.q} delay={i * 50}>
                <div style={{ borderBottom: '1.5px solid #d0ece0', padding: '22px 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: INK, margin: 0, lineHeight: 1.45 }}>{faq.q}</h3>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: MINT, color: LEAFD, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18, fontWeight: 700 }}>+</div>
                  </div>
                  <p style={{ fontSize: 16, color: INKM, lineHeight: 1.75, marginTop: 13, marginBottom: 0 }}>{faq.a}</p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={150}>
            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <Link href="/faq" style={{ color: OCEAND, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                View all FAQs →
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 12. OUR STORY ───────────────────────────────────── */}
      <section style={{ background: SAND, padding: '88px 0 80px' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', maxWidth: 1040, margin: '0 auto' }}>
            <FadeInSection>
              <div style={{ borderRadius: 24, overflow: 'hidden', background: MINT, minHeight: 380, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ padding: '48px 40px', textAlign: 'center' }}>
                  <div style={{ width: 80, height: 80, borderRadius: '50%', background: OCEAN, opacity: .18, margin: '0 auto 24px' }} />
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" aria-hidden="true" style={{ display: 'block', margin: '0 auto' }}>
                    <path d="M30 4C30 4 10 22 10 36a20 20 0 0040 0C50 22 30 4 30 4z" fill={OCEAN} fillOpacity=".2" stroke={OCEAND} strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M22 38c0 4.4 3.6 8 8 8" stroke={OCEAND} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <p style={{ marginTop: 20, fontSize: 15, color: INKL, fontStyle: 'italic' }}>Founded after watching a bag dissolve<br />in a Greek supermarket</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={100}>
              <Eyebrow>Our story</Eyebrow>
              <blockquote style={{
                fontSize: 'clamp(1.3rem, 2.4vw, 1.9rem)',
                fontWeight: 700,
                color: OCEAND,
                lineHeight: 1.4,
                borderLeft: `4px solid ${LEAF}`,
                paddingLeft: 22,
                marginBottom: 24,
                marginLeft: 0,
              }}>
                &ldquo;I watched a bag disappear in a glass of water and couldn&apos;t believe America was still using plastic.&rdquo;
              </blockquote>
              <p style={{ fontSize: 17, color: INKM, lineHeight: 1.75, marginBottom: 20 }}>
                Our founder discovered PVA dissolvable bags in a Greek grocery store and spent two years researching why the US didn&apos;t have them yet. The answer wasn&apos;t science — it was distribution.
              </p>
              <p style={{ fontSize: 17, color: INKM, lineHeight: 1.75, marginBottom: 32 }}>
                Solubelle was built to bring this technology to American retailers at scale — without the premium price tag, without the greenwashing. Just a bag that actually disappears.
              </p>
              <Link href="/about" style={{ color: OCEAND, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
                Read the full story →
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── 13. CONTACT / CTA ───────────────────────────────── */}
      <section id="contact" style={{ background: `linear-gradient(135deg, ${LEAFD} 0%, ${OCEAND} 100%)`, padding: '80px 52px' }}>
        <div style={{ maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <FadeInSection>
            <Eyebrow color="#7CCB8A">Get started</Eyebrow>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
              Free Sample Kits for Qualified Retailers
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,.85)', lineHeight: 1.72, marginBottom: 28 }}>
              We&apos;ll send you a mixed sample kit — no commitment, no pitch call required. If your customers love them (they always do), we&apos;ll talk wholesale.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Free sample kits for stores', 'Wholesale from 1,000 units', 'Custom branding available'].map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, color: 'rgba(255,255,255,.9)', fontWeight: 500 }}>
                  <Check color="#fff" />
                  {p}
                </li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection delay={100}>
            <form action="https://formspree.io/f/solubelle" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { name: 'name', placeholder: 'Your name', type: 'text' },
                { name: 'company', placeholder: 'Store / company name', type: 'text' },
                { name: 'email', placeholder: 'Email address', type: 'email' },
              ].map((f) => (
                <input
                  key={f.name}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  required={f.name !== 'company'}
                  aria-label={f.placeholder}
                  style={{
                    background: 'rgba(255,255,255,.12)',
                    border: '2px solid rgba(255,255,255,.22)',
                    borderRadius: 12, padding: '13px 18px',
                    fontSize: 15, color: '#fff',
                    fontFamily: "'Manrope', sans-serif",
                    outline: 'none',
                  }}
                />
              ))}
              <select
                name="interest"
                aria-label="I'm interested in"
                style={{
                  background: 'rgba(255,255,255,.12)',
                  border: '2px solid rgba(255,255,255,.22)',
                  borderRadius: 12, padding: '13px 18px',
                  fontSize: 15, color: '#fff',
                  fontFamily: "'Manrope', sans-serif",
                  outline: 'none',
                }}
              >
                <option value="" style={{ color: '#333' }}>I&apos;m interested in…</option>
                <option value="samples" style={{ color: '#333' }}>Free sample kit</option>
                <option value="wholesale" style={{ color: '#333' }}>Wholesale pricing</option>
                <option value="custom" style={{ color: '#333' }}>Custom branded bags</option>
                <option value="distribution" style={{ color: '#333' }}>Distribution partnership</option>
              </select>
              <button type="submit" className="btn-cta-submit">
                Send my sample request →
              </button>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', textAlign: 'center', margin: 0 }}>
                No spam. No pitch calls unless you ask. Just bags.
              </p>
            </form>
          </FadeInSection>
        </div>
      </section>

      {/* FAQPage structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Will PVA bags dissolve if they get rained on?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: SPECS.dissolution.rainResistant,
                },
              },
              {
                '@type': 'Question',
                name: 'Are PVA dissolvable bags safe for food contact?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Our PVA material meets FDA 21 CFR 175.300 for food-contact use. It is non-toxic and safe for direct contact with fresh produce and groceries.',
                },
              },
              {
                '@type': 'Question',
                name: 'What do PVA bags break down into?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'PVA dissolves into water, carbon dioxide, and trace amounts of water-soluble vinyl alcohol. No microplastics, no toxic breakdown products.',
                },
              },
              {
                '@type': 'Question',
                name: 'How are PVA bags different from compostable bags?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Compostable bags require industrial composting at 140°F+ which 91% of Americans cannot access. Our bags dissolve at home under your tap in ${SPECS.dissolution.hotWaterTime} — no facility needed.`,
                },
              },
            ],
          }),
        }}
      />

    </div>
  );
}
