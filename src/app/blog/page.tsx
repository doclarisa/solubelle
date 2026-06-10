import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — PVA Bags, Sustainability & Retail Tips | Solubelle®',
  description: 'Expert guides on PVA dissolvable bags, plastic bag legislation, sustainability for retailers, and the science of water-soluble packaging.',
  alternates: { canonical: 'https://solubelle.com/blog' },
};

export const posts = [
  {
    slug: 'pva-biodegradability-controversy-explained',
    title: 'The Bag That Disappears — And the Controversy That Didn\'t: The PVA Biodegradability Debate Explained',
    excerpt: 'A 2021 study claimed PVA doesn\'t biodegrade. Independent scientists, the EPA, and the EU disagreed. Here\'s the full story — and why grocery bags are a different case entirely.',
    date: '2026-06-10',
    readTime: '7 min read',
    category: 'Science',
    categoryColor: '#1E8CB5',
  },
  {
    slug: 'pva-bags-vs-compostable-bags',
    title: 'PVA Bags vs Compostable Bags: What\'s Actually the Difference?',
    excerpt: 'Compostable bags need industrial facilities most Americans can\'t access. PVA bags dissolve under your tap. Here\'s the full comparison every retailer should read.',
    date: '2026-05-20',
    readTime: '6 min read',
    category: 'Science',
    categoryColor: '#1E8CB5',
  },
  {
    slug: 'plastic-bag-bans-what-retailers-need-to-know',
    title: 'Plastic Bag Bans in 2026: What US Retailers Need to Know',
    excerpt: '12+ states now ban single-use plastic bags. More are coming. Here\'s a state-by-state breakdown and what compliant alternatives actually look like.',
    date: '2026-05-06',
    readTime: '8 min read',
    category: 'Legislation',
    categoryColor: '#3D8C41',
  },
  {
    slug: 'what-happens-when-pva-bag-dissolves',
    title: 'What Actually Happens When a PVA Bag Dissolves in Water?',
    excerpt: 'We break down the chemistry step by step — from polymer chains to water and CO₂. No jargon. Just the clearest explanation of PVA dissolution you\'ll find anywhere.',
    date: '2026-04-18',
    readTime: '5 min read',
    category: 'Science',
    categoryColor: '#1E8CB5',
  },
  {
    slug: 'how-to-switch-your-store-to-dissolvable-bags',
    title: 'How to Switch Your Store to Dissolvable Bags in 30 Days',
    excerpt: 'A practical playbook for grocery stores, farmers markets, and eco-retailers making the switch — from staff training to customer demos to reorder schedules.',
    date: '2026-04-02',
    readTime: '7 min read',
    category: 'For Retailers',
    categoryColor: '#3D8C41',
  },
  {
    slug: 'zero-microplastics-what-it-really-means',
    title: '"Zero Microplastics" — What It Really Means (And What to Watch Out For)',
    excerpt: 'Not every brand that claims "zero microplastics" has the testing to back it up. Here\'s what FTIR analysis is, why it matters, and how to verify a claim.',
    date: '2026-03-15',
    readTime: '6 min read',
    category: 'Science',
    categoryColor: '#1E8CB5',
  },
];

const INK  = '#2F3A3B';
const INKM = '#3D4748';
const INKL = '#5E6E6F';
const MINT = '#EAF9F2';
const SKY  = '#EAF7FB';
const OFF  = '#FEFCF7';
const LEAFD = '#3D8C41';
const OCEAND = '#1E8CB5';

export default function BlogPage() {
  return (
    <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", background: OFF, color: INK }}>

      {/* Hero */}
      <section style={{ background: MINT, padding: '72px 0 60px', borderBottom: '1.5px solid #d0ece0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: LEAFD, marginBottom: 14 }}>
            Solubelle Journal
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: INK, lineHeight: 1.15, marginBottom: 18 }}>
            Science, Sustainability &amp; Retail Guides
          </h1>
          <p style={{ fontSize: 18, color: INKM, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Everything you need to know about PVA bags, plastic legislation, and making the switch — written for retailers and curious shoppers alike.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section style={{ padding: '72px 0 80px' }}>
        <div className="container-max">
          <Link href="/dissolvable-grocery-bags-guide" style={{ textDecoration: 'none', display: 'block', marginBottom: 36 }}>
            <div style={{ background: SKY, border: '1.5px solid #cdeaf6', borderRadius: 16, padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: OCEAND }}>Start here</span>
                <h2 style={{ fontSize: 19, fontWeight: 800, color: INK, margin: '6px 0 0' }}>
                  Dissolvable Grocery Bags: The Complete 2026 Guide
                </h2>
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: OCEAND, whiteSpace: 'nowrap' }}>Read the guide →</span>
            </div>
          </Link>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}
              >
                <article className="blog-card">
                  {/* Colour band instead of image */}
                  <div style={{ height: 8, background: post.categoryColor }} />

                  <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Category + date */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                      <span style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
                        color: post.categoryColor,
                        background: post.categoryColor === OCEAND ? SKY : MINT,
                        padding: '4px 10px', borderRadius: 999,
                      }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: 13, color: INKL }}>{post.date}</span>
                    </div>

                    <h2 style={{ fontSize: 18, fontWeight: 700, color: INK, lineHeight: 1.35, marginBottom: 12, flex: 1 }}>
                      {post.title}
                    </h2>

                    <p style={{ fontSize: 15, color: INKM, lineHeight: 1.65, marginBottom: 20 }}>
                      {post.excerpt}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <span style={{ fontSize: 13, color: INKL }}>{post.readTime}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: OCEAND }}>Read →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: MINT, borderTop: '1.5px solid #d0ece0', padding: '60px 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: INK, marginBottom: 14 }}>
            Ready to make the switch?
          </h2>
          <p style={{ fontSize: 17, color: INKM, marginBottom: 28 }}>
            Request a free sample kit — no commitment required.
          </p>
          <Link href="/#contact" style={{
            display: 'inline-flex', alignItems: 'center',
            background: '#5DAE61', color: '#fff',
            padding: '14px 30px', borderRadius: 999,
            fontSize: 16, fontWeight: 700, textDecoration: 'none',
          }}>
            Get Free Samples →
          </Link>
        </div>
      </section>

    </div>
  );
}
