import { Metadata } from 'next';
import Link from 'next/link';
import FadeInSection from '@/components/FadeInSection';
import FAQAccordion from '@/components/FAQAccordion';
import { faqSchema } from '@/lib/faqs';
import { SPECS } from '@/lib/specs';

export const metadata: Metadata = {
  title: 'How PVA Water-Soluble Bags Work | Solubelle®',
  description: 'Learn how PVA water-soluble bags dissolve safely in water, how they differ from compostable bags, and why they leave zero microplastics. Plus answers to common safety, dissolution, and ordering questions.',
  alternates: { canonical: 'https://solubelle.com/how-it-works' },
};

export default function HowItWorksPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #e8f4fd 0%, #e8f5e9 100%)', padding: '5rem 0 4rem' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <p style={{ color: '#1A7DC4', fontFamily: "'Poppins',sans-serif", fontWeight: 600, letterSpacing: '0.08em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem' }}>Science &amp; Transparency</p>
            <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.25rem)', lineHeight: 1.15, color: '#1a1a1a', marginBottom: '1.5rem' }}>
              How PVA Water-Soluble Bags Work
            </h1>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.2rem', color: '#4b5563', maxWidth: 680, margin: '0 auto' }}>
              Plain-English explanations of the science behind our bags — including the parts that are still being studied.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Section 1: What is PVA */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '4rem', alignItems: 'center' }}>
            <FadeInSection>
              <p style={{ color: '#1A7DC4', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Section 1</p>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: '#1a1a1a', marginBottom: '1.25rem' }}>What Is PVA?</h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                PVA — polyvinyl alcohol — is a synthetic polymer that dissolves in water. You encounter it every day without realizing it: it&apos;s the film around laundry pods, the lubricant in certain eye drops, and a material approved for food packaging.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Here&apos;s the critical distinction: PVA is <strong>not a traditional plastic</strong>. Traditional plastics like polyethylene (PE) and polypropylene (PP) are built on a carbon-carbon backbone — chains that water, sunlight, and most biological processes cannot break apart. PVA has a different molecular structure that water actually interacts with and breaks down.
              </p>
              <blockquote className="pull-quote" style={{ margin: '2rem 0' }}>
                &ldquo;Think of PVA the way you think of gelatin — it dissolves in water, not forever into the water.&rdquo;
              </blockquote>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div style={{ background: 'linear-gradient(135deg, #e8f4fd, #e8f5e9)', borderRadius: 16, padding: '3rem', textAlign: 'center' }}>
                <div role="img" aria-label="Molecular structure diagram placeholder showing PVA polymer chain dissolving in water" style={{ width: '100%', height: 240, background: 'rgba(26,125,196,0.08)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: "'Poppins',sans-serif", color: '#1A7DC4', fontWeight: 600, fontSize: '0.9rem' }}>PVA Molecular Diagram</span>
                </div>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.9rem', color: '#6b7280' }}>Polyvinyl alcohol vs. polyethylene — a structural comparison</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section style={{ background: '#e8f5e9', padding: '3rem 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.2rem,3vw,1.75rem)', color: '#388E3C', maxWidth: 720, margin: '0 auto' }}>
              &ldquo;PVA has been used in eye drops and food packaging for decades. Its safety profile is well-established — only its environmental fate is still being studied.&rdquo;
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Section 2: What happens when wet */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '4rem', alignItems: 'center' }}>
            <FadeInSection delay={100}>
              <div style={{ background: '#1a1a1a', borderRadius: 16, padding: '3rem', color: '#fff' }}>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.2rem', marginBottom: '2rem', color: '#fff' }}>Dissolution Times</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ background: '#1A7DC4', borderRadius: 10, padding: '1.25rem 1.5rem' }}>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#bde0f7', marginBottom: '0.4rem' }}>Cold / Room-Temp Water</p>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: '1.75rem' }}>{SPECS.dissolution.coldWaterTime}</p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.9rem', color: '#bde0f7' }}>This is what makes the bag rain- and moisture-resistant in normal use</p>
                  </div>
                  <div style={{ background: '#4CAF50', borderRadius: 10, padding: '1.25rem 1.5rem' }}>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c8e6c9', marginBottom: '0.4rem' }}>Hot Water ({SPECS.dissolution.hotWaterTemp})</p>
                    <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: '1.75rem' }}>{SPECS.dissolution.hotWaterTime}</p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.9rem', color: '#c8e6c9' }}>Full dissolution — every SKU, same formula</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection>
              <p style={{ color: '#4CAF50', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Section 2</p>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: '#1a1a1a', marginBottom: '1.25rem' }}>What Happens When It Gets Wet?</h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Water molecules penetrate the PVA polymer matrix, breaking the hydrogen bonds that hold the material together. At room temperature, this process takes {SPECS.dissolution.coldWaterTime}. Heat accelerates it significantly — at {SPECS.dissolution.hotWaterTemp}, the bag dissolves in {SPECS.dissolution.hotWaterTime}.
              </p>
              <blockquote className="pull-quote" style={{ margin: '2rem 0', borderLeftColor: '#1A7DC4', color: '#1A7DC4', fontWeight: 600 }}>
                &ldquo;Rain won&apos;t dissolve it — a glass of hot water will.&rdquo;
              </blockquote>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75 }}>
                Every Solubelle bag — including the produce bag — uses the same formula and is rain-resistant under normal conditions. A brief shower, wet produce, or damp hands won&apos;t compromise the bag; full dissolution takes {SPECS.dissolution.coldWaterTime} in cold water, or {SPECS.dissolution.hotWaterTime} in hot water.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Section 3: Safety */}
      <section style={{ background: '#f9fafb', padding: '5rem 0' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ color: '#4CAF50', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Section 3</p>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: '#1a1a1a' }}>Is It Safe for Food, People &amp; Animals?</h2>
            </div>
          </FadeInSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🍎', title: 'FDA-Recognized Safe', body: 'PVA is recognized as safe by the FDA. It\'s used in approved food packaging applications, eye drops, and as a pharmaceutical excipient.' },
              { icon: '🚫', title: 'No BPA or Phthalates', body: 'Our bags contain no BPA, no phthalates, and no heavy metals. We provide SGS third-party testing documentation to confirm.' },
              { icon: '🐾', title: 'Safe for Animals', body: 'Animals that ingest PVA pass it safely. It does not accumulate in tissue or cause toxic effects at incidental exposure levels.' },
            ].map((item) => (
              <FadeInSection key={item.title}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem', color: '#1a1a1a' }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Inter',sans-serif", color: '#4b5563', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.body}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
          <FadeInSection delay={100}>
            <blockquote className="pull-quote" style={{ maxWidth: 680, margin: '3rem auto 0', textAlign: 'left' }}>
              &ldquo;PVA has been used safely in direct food-contact applications for decades. The safety question is well-settled — we carry certification documentation if you need it.&rdquo;
            </blockquote>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4: Wastewater */}
      <section id="wastewater" style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '4rem', alignItems: 'start' }}>
            <FadeInSection>
              <p style={{ color: '#1A7DC4', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Section 4</p>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: '#1a1a1a', marginBottom: '1.25rem' }}>What About Wastewater?</h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                We want to be direct with you about this. The 2021 ASU/Rolsky study found that PVA does not fully biodegrade in all wastewater treatment plants — particularly those without the right microbial populations or operating at lower temperatures.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                This is a real and evolving area of research. We are monitoring it closely.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75, marginBottom: '2rem' }}>
                We work exclusively with certified suppliers who are developing and testing enhanced-biodegradability formulations specifically to address this gap. We believe full transparency here is essential — because trust matters more to us than a clean-looking claim.
              </p>
              <Link href="/certifications" className="btn-outline-blue">View Our Certifications</Link>
            </FadeInSection>
            <FadeInSection delay={100}>
              <div style={{ background: '#fff8e1', border: '1px solid #fbbf24', borderRadius: 12, padding: '2rem' }}>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1rem', color: '#92400e', marginBottom: '1rem' }}>⚠️ What We Know — And Don&apos;t Know</p>
                <ul style={{ fontFamily: "'Inter',sans-serif", color: '#374151', lineHeight: 2, paddingLeft: '1.25rem', fontSize: '0.95rem' }}>
                  <li>PVA dissolves completely in water — ✅ confirmed</li>
                  <li>PVA biodegrades in aerobic conditions — ✅ confirmed</li>
                  <li>PVA fully biodegrades in all WWTPs — ⚠️ not confirmed in all plants</li>
                  <li>PVA creates microplastics — ❌ it does not fragment this way</li>
                  <li>Enhanced formulations close the gap — 🔬 active research area</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Section 5: vs Compostable */}
      <section style={{ background: '#f9fafb', padding: '5rem 0' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
              <p style={{ color: '#4CAF50', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', textAlign: 'center' }}>Section 5</p>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: '#1a1a1a', marginBottom: '1.5rem', textAlign: 'center' }}>
                How Is It Different from Compostable or Biodegradable Bags?
              </h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                <strong>&ldquo;Compostable&rdquo;</strong> bags — typically made from PLA (polylactic acid) — require industrial composting facilities operating at 58°C or above to break down. In the real world, less than 10% of Americans have access to industrial composting. Most &ldquo;compostable&rdquo; bags end up in landfill, where they behave identically to conventional plastic.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                <strong>&ldquo;Biodegradable&rdquo;</strong> has no legal definition in the United States. Any manufacturer can print it on any bag. It means nothing without a standard behind it.
              </p>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#374151', lineHeight: 1.75, marginBottom: '2rem' }}>
                PVA bags dissolve in any water source and biodegrade in aerobic conditions — including soil and water — without requiring specialized infrastructure that most people don&apos;t have access to.
              </p>
              <blockquote className="pull-quote">
                &ldquo;PVA is the only alternative that solves the disposal problem at the moment of disposal — not in a facility most people never use.&rdquo;
              </blockquote>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <FadeInSection>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p style={{ color: '#1A7DC4', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Common Questions</p>
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.25rem)', color: '#1a1a1a' }}>Frequently Asked Questions</h2>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.05rem', color: '#4b5563', maxWidth: 600, margin: '0.75rem auto 0' }}>
                Safety, dissolution, microplastics, ordering, and more — answered honestly.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
              <FAQAccordion />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Strip */}
      <section style={{ background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)', padding: '4rem 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.4rem,3vw,2rem)', color: '#fff', marginBottom: '1rem' }}>
              Still Have a Question?
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: 560, margin: '0 auto 2rem' }}>
              We reply to every message within 1 business day.
            </p>
            <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.85rem 2.25rem', background: '#fff', color: '#1A7DC4', fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1rem', borderRadius: 6, textDecoration: 'none', transition: 'transform 0.15s' }}>
              Contact Us →
            </Link>
          </FadeInSection>
        </div>
      </section>
    </main>
    </>
  );
}
