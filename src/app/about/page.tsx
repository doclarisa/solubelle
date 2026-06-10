import type { Metadata } from 'next';
import Image from 'next/image';
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
              <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.25rem', color: '#0f172a', marginBottom: '1rem' }}>Meet Our Founder</h2>
              <blockquote className="pull-quote">
                <p style={{ marginBottom: '0.75rem' }}>
                  I&apos;m a physician — a dermatologist who fought a syphilis epidemic in St. Petersburg as a single mother of three, then crossed an ocean following my second husband, and repassed all three US medical board exams in my second language.
                </p>
                <p style={{ marginBottom: '0.75rem' }}>
                  My closest friends are Greek, and for years I visited them and watched European supermarkets hand out eco-friendly bags America didn&apos;t have. I asked why — and like a doctor, I investigated.
                </p>
                <p style={{ marginBottom: '0.75rem' }}>
                  The Greek bags were compostable, but flawed. Two years of research led me to something better: PVA, a material that dissolves in water with zero microplastics. I already knew it was safe — it coats pharmaceutical capsules I&apos;ve prescribed.
                </p>
                <p>
                  Solubelle brings these certified dissolvable bags to America, first. I&apos;ve never failed for lack of effort, only paused for the people I love. Now I&apos;m ready to give this everything.
                </p>
              </blockquote>
              <p style={{ marginTop: '1rem', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#374151' }}>— Founder, Solubelle</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* The Solubelle Vision */}
      <section style={{ background: '#f8fcff' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 6', overflow: 'hidden' }}>
          <Image
            src="/ocean1.png"
            alt="Clean ocean water — the future Solubelle is dissolving toward"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container-max" style={{ maxWidth: 760, padding: '4rem 1.5rem' }}>
          <FadeInSection>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#0f172a', marginBottom: '1.5rem' }}>
              The Solubelle Vision
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Today, we live with a quiet kind of permanence. A bag is used for eleven minutes and then exists for a thousand years. It outlives the person who carried it, their children, their grandchildren. It breaks into pieces too small to see and ends up in the water we drink, the fish we eat, the rain that falls. We&apos;ve made disappearance impossible. Everything we touch, we keep — whether we want to or not.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              As a doctor, I spent my life removing harm from the human body. But there&apos;s a harm we&apos;ve all agreed to ignore: the harm that doesn&apos;t bleed, doesn&apos;t show up on a scan, just accumulates — silently, everywhere, forever.
            </p>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#1A7DC4', margin: '2rem 0 1rem' }}>
              Imagine the other world.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Imagine a checkout line where the bag in your hand was never a problem to begin with. You carry your groceries home, and when you&apos;re done, you hold the bag under warm water and watch it vanish — not into a landfill, not into the sea, but into nothing at all. Water, a breath of CO₂, and a little biomass that the earth simply takes back.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Imagine a child who grows up never learning the phrase &quot;this&apos;ll be here forever.&quot; Imagine an ocean where the only thing that dissolves is the thing we meant to dissolve. Imagine a coastline where a turtle&apos;s water is just water. Imagine a country that, having watched the rest of the world act, finally caught up — and then led.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              That&apos;s the world Solubelle is dissolving toward. A world where convenience doesn&apos;t cost a thousand years. Where the things we use for minutes are gone in minutes. Where clean water and clean earth aren&apos;t a sacrifice we make, but the default we never had to think about.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.85 }}>
              I&apos;ve spent my whole life helping things heal. Now I want to help the planet do what it does best — when we finally let it: disappear what we no longer need, and begin again, clean.
            </p>
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
