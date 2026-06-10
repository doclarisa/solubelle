import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../page';
import { SPECS } from '@/lib/specs';

/* ── Static params for all posts ───────────────────────────── */
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/* ── Per-post metadata ──────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://solubelle.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

/* ── Full post content ─────────────────────────────────────── */
const content: Record<string, React.ReactNode> = {
  'pva-bags-vs-compostable-bags': (
    <>
      <p>Walk into any eco-forward grocery store and you&apos;ll find one of two things at the checkout: PLA compostable bags or PVA water-soluble bags. Both are marketed as the sustainable alternative to plastic. But they work very differently — and only one of them actually solves the problem for most shoppers.</p>
      <h2>What Are Compostable Bags?</h2>
      <p>Compostable bags are most often made from PLA (polylactic acid), derived from corn starch or sugarcane. They&apos;re certified under ASTM D6400 or EN13432, which means they break down under <strong>industrial composting conditions</strong>: sustained temperatures above 140°F (60°C), specific humidity, and microbial activity — for 90+ days.</p>
      <p>The problem: industrial composting facilities are accessible to fewer than 9% of Americans. That means 91% of compostable bags end up in landfills, where they don&apos;t decompose meaningfully at all — because landfills are anaerobic (no oxygen) and never reach composting temperatures.</p>
      <h2>What Are PVA Bags?</h2>
      <p>PVA (polyvinyl alcohol) bags dissolve in water. Hot water ({SPECS.dissolution.hotWaterTemp}) dissolves them in {SPECS.dissolution.hotWaterTime}. Cold water dissolves them more slowly, in {SPECS.dissolution.coldWaterTime}. Either way, the dissolution happens at home — no facility required.</p>
      <p>The polymer chains in PVA break apart into water, CO₂, and trace amounts of water-soluble vinyl alcohol. There are no fragments, no pellets, no persistent residue. FTIR (Fourier-transform infrared spectroscopy) analysis confirms zero remaining polymer chains after dissolution.</p>
      <h2>Side-by-Side Comparison</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
        <thead>
          <tr style={{ background: '#EAF9F2' }}>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 14, fontWeight: 700 }}>Feature</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 14, fontWeight: 700 }}>PLA Compostable</th>
            <th style={{ padding: '12px 16px', textAlign: 'left', fontSize: 14, fontWeight: 700 }}>PVA Dissolvable</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Breaks down at home', '✗ No', '✓ Yes — in your sink'],
            ['Facility required', '✗ Industrial composting', '✓ None'],
            ['Accessible to Americans', '✗ ~9%', '✓ 100%'],
            ['Microplastics', '✓ None', '✓ None'],
            ['Rain resistant', '✓ Yes', '✓ Yes'],
            ['Food-safe certified', '✓ Yes', '✓ FDA 21 CFR 175.300'],
          ].map(([f, bad, good], i) => (
            <tr key={f} style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '11px 16px', fontSize: 14, color: '#2F3A3B' }}>{f}</td>
              <td style={{ padding: '11px 16px', fontSize: 14, color: '#6b7280' }}>{bad}</td>
              <td style={{ padding: '11px 16px', fontSize: 14, color: '#3D8C41', fontWeight: 600 }}>{good}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>The Honest Caveat</h2>
      <p>PVA is not perfect. A 2021 Arizona State University study found that PVA doesn&apos;t fully biodegrade in all wastewater treatment plants. This is real and worth knowing. We take it seriously and work with suppliers focused on enhanced biodegradability. The science is still evolving — but PVA&apos;s home-dissolve capability still puts it miles ahead of compostable bags for accessibility.</p>
      <h2>Bottom Line</h2>
      <p>If your customers can&apos;t access industrial composting (and most can&apos;t), compostable bags are effectively a landfill bag with better marketing. PVA bags dissolve where your customers actually are — at home, right now, with tap water.</p>
    </>
  ),

  'plastic-bag-bans-what-retailers-need-to-know': (
    <>
      <p>As of 2026, more than 12 US states have enacted outright bans or fees on single-use plastic bags — and dozens of cities have gone further. If you&apos;re running a grocery store, farmers market, or retail shop anywhere in the US, this legislation directly affects your checkout.</p>
      <h2>Which States Have Plastic Bag Bans?</h2>
      <p>The following states have enacted statewide bans or significant fees on single-use plastic checkout bags:</p>
      <ul>
        <li><strong>California</strong> — First state to ban (2014), extended statewide 2022</li>
        <li><strong>New York</strong> — Statewide ban effective 2020</li>
        <li><strong>Connecticut</strong> — 10¢ fee per bag since 2021</li>
        <li><strong>Delaware</strong> — Statewide ban effective 2021</li>
        <li><strong>Hawaii</strong> — County-level bans covering the entire state</li>
        <li><strong>Illinois</strong> — Statewide ban effective 2024</li>
        <li><strong>Maine</strong> — Statewide ban effective 2021</li>
        <li><strong>New Jersey</strong> — Among the strictest bans in the US (2022)</li>
        <li><strong>Oregon</strong> — Statewide ban effective 2020</li>
        <li><strong>Vermont</strong> — Statewide ban effective 2020</li>
        <li><strong>Washington</strong> — Statewide ban effective 2021</li>
        <li><strong>Colorado</strong> — Fee structure in effect, full ban planned</li>
      </ul>
      <h2>What Counts as a Compliant Alternative?</h2>
      <p>Most legislation bans &quot;single-use plastic checkout bags&quot; and permits alternatives that are either:</p>
      <ul>
        <li>Reusable (minimum thickness, handle requirements)</li>
        <li>Paper bags (often still allowed with a fee)</li>
        <li>Certified compostable or biodegradable bags</li>
      </ul>
      <p>PVA water-soluble bags are compliant in all 50 states. Because they are not polyethylene or polypropylene, they fall outside the scope of &quot;plastic bag&quot; as defined in most legislation. They are also ASTM D6400 certified, which is the standard most laws point to for biodegradable alternatives.</p>
      <h2>What Should Retailers Do Now?</h2>
      <p>Even if your state hasn&apos;t banned plastic bags yet, the trajectory is clear. Getting ahead of the ban — and turning it into a marketing moment — is far better than scrambling to comply. Retailers who switched proactively report that customers <em>notice</em> the dissolving bags. It becomes a conversation starter, a brand differentiator, and a loyalty driver.</p>
      <p>Request a free sample kit to test them at your checkout before committing to wholesale quantities.</p>
    </>
  ),

  'what-happens-when-pva-bag-dissolves': (
    <>
      <p>When you drop a Solubelle bag into hot water, something remarkable happens in under two minutes. The bag doesn&apos;t melt, doesn&apos;t fragment, and doesn&apos;t leave behind a residue you can see. It simply disappears. Here&apos;s the chemistry of exactly what&apos;s happening.</p>
      <h2>Step 1: Water Molecules Attack the Polymer Chains</h2>
      <p>PVA (polyvinyl alcohol) is a synthetic polymer made of repeating vinyl alcohol units. Unlike polyethylene (traditional plastic), PVA&apos;s molecular structure contains hydroxyl groups (-OH) that are strongly attracted to water molecules.</p>
      <p>When PVA contacts hot water, water molecules penetrate the polymer matrix and form hydrogen bonds with those hydroxyl groups. This disrupts the weak Van der Waals forces holding the polymer chains together.</p>
      <h2>Step 2: The Chains Unravel</h2>
      <p>As water molecules wedge between the chains, the polymer network swells, then separates. The long PVA chains break apart into shorter segments that disperse uniformly through the water. This is dissolution — not fragmentation. No microparticles are formed because the chains are breaking down at the molecular level, not the physical level.</p>
      <h2>Step 3: Biodegradation Begins</h2>
      <p>Once dissolved, PVA is metabolized by naturally occurring soil and water bacteria (primarily <em>Pseudomonas</em> and <em>Sphingomonas</em> species) that produce PVA oxidase and PVA dehydrogenase enzymes. These enzymes break the carbon backbone into acetate, which is further broken down into water and CO₂.</p>
      <p>In aerobic conditions (most surface water and treated wastewater), this biodegradation completes in days to weeks. In anaerobic conditions (landfills, some wastewater systems), degradation is slower — this is the legitimate concern raised by the 2021 ASU/Rolsky study.</p>
      <h2>What Remains After Dissolution?</h2>
      <p>Immediately after dissolution in water: a clear, viscous solution of PVA in water — safe to pour down the drain. No polymer fragments detectable by FTIR analysis. No microplastics by any measurement standard.</p>
      <p>After full biodegradation: water, CO₂, and trace acetate — the same byproducts as the biodegradation of natural plant material.</p>
      <h2>The Temperature Factor</h2>
      <p>Our standard grocery bags are formulated for hot water dissolution (60°C+). Cold water will eventually dissolve them, but more slowly. This &quot;cold resistance&quot; is intentional — it&apos;s what keeps them intact in light rain and with damp produce.</p>
    </>
  ),

  'how-to-switch-your-store-to-dissolvable-bags': (
    <>
      <p>Switching your store from plastic bags to dissolvable PVA bags is simpler than you think — and if you do it right, it becomes one of the most memorable things you&apos;ve ever introduced to your customers. Here&apos;s a proven 30-day playbook.</p>
      <h2>Week 1: Order Samples and Test Internally</h2>
      <p>Request a free sample kit (we include all three SKUs — standard grocery, produce, and heavy-duty). Before you introduce them to customers, spend a week testing internally:</p>
      <ul>
        <li>Have staff fill bags with typical purchase weights</li>
        <li>Test rain resistance — leave one outside during a drizzle</li>
        <li>Do the glass-of-water demo in a staff meeting. Film it.</li>
        <li>Note any friction points — dispensers, bag opening, wet produce sections</li>
      </ul>
      <p>Standard Solubelle bags fit T-shirt bag dispensers without modification. Produce bags use the same roll format as conventional produce bags.</p>
      <h2>Week 2: Train Your Staff</h2>
      <p>The checkout counter demo is your single best sales tool. When a customer asks &quot;what is this?&quot;, your staff should be able to say:</p>
      <blockquote style={{ borderLeft: '4px solid #5DAE61', paddingLeft: '1rem', color: '#3D4748', fontStyle: 'italic' }}>
        &quot;It&apos;s a bag that dissolves in hot water — completely, in {SPECS.dissolution.hotWaterTime}. No plastic, no microplastics, nothing left behind. Drop it in your sink when you&apos;re done unpacking.&quot;
      </blockquote>
      <p>Keep a glass of water at the service desk for demo requests. Every demo we&apos;ve seen goes the same way: the customer stops, watches, and says &quot;that&apos;s incredible.&quot;</p>
      <h2>Week 3: Announce to Customers</h2>
      <p>A small counter card is all you need. Simple message: <em>&quot;We&apos;ve switched to bags that dissolve in water. Drop them in a sink. Watch them disappear.&quot;</em></p>
      <p>On social media, film the dissolution demo and post it. These videos get exceptional organic reach — the product essentially sells itself visually. Tag @solubelle and we&apos;ll amplify it.</p>
      <h2>Week 4: Place Your First Wholesale Order</h2>
      <p>After a week of customer-facing use, you&apos;ll know your weekly volume. Standard starting quantity for a single-location grocery is 2,000–5,000 bags/month depending on transaction volume. We offer net-30 terms for qualified accounts and can ship within 3–5 business days from our US warehouse.</p>
      <h2>Ongoing: Reorder Before You Run Out</h2>
      <p>Set a reorder trigger at 20% of your stock level. We recommend setting up a standing monthly order for predictable stores — it gets you preferential pricing and guarantees supply. Custom branded bags with your logo require a {SPECS.leadTime.customBranded} lead time and a {SPECS.moq.customBranded} minimum.</p>
    </>
  ),

  'zero-microplastics-what-it-really-means': (
    <>
      <p>The phrase &quot;zero microplastics&quot; is everywhere now. It&apos;s on bags, packaging, water bottles, clothing brands — and in most cases, it&apos;s not backed by any specific test. Here&apos;s what the claim actually means, how it&apos;s verified, and what to look for when a company says it.</p>
      <h2>What Are Microplastics?</h2>
      <p>Microplastics are plastic particles smaller than 5mm. They form when larger plastic items — bags, bottles, fibers — break down physically through UV exposure, mechanical stress, and weathering. They don&apos;t biodegrade. They accumulate in soil, water, and living organisms.</p>
      <p>Nanoplastics are smaller still (under 1µm) and are increasingly concerning because they can cross biological barriers including the blood-brain barrier.</p>
      <h2>How Is "Zero Microplastics" Verified?</h2>
      <p>The standard method is <strong>FTIR spectroscopy</strong> (Fourier-transform infrared spectroscopy). It works by shining infrared light at a sample and analyzing which wavelengths are absorbed — each polymer type has a unique &quot;fingerprint.&quot;</p>
      <p>A credible &quot;zero microplastics&quot; claim should reference:</p>
      <ul>
        <li>FTIR or Raman spectroscopy analysis of post-dissolution water</li>
        <li>Testing conducted by an independent accredited lab (not just internally)</li>
        <li>Quantification limits stated (e.g., &quot;below 1µg/L detection limit&quot;)</li>
        <li>Specific polymer types tested for (polyethylene, polypropylene, PET, etc.)</li>
      </ul>
      <h2>Why PVA Can Credibly Make This Claim</h2>
      <p>Traditional plastics create microplastics because their polymer chains are chemically stable and don&apos;t dissolve — they only fragment. PVA is different: it dissolves. The chains don&apos;t fragment into smaller particles; they break apart into molecular-scale components that disperse uniformly in water.</p>
      <p>FTIR analysis of water after PVA dissolution finds no detectable polymer particles. This is why PVA can legitimately claim zero microplastics — not because of a marketing decision, but because the dissolution mechanism physically cannot produce fragments.</p>
      <h2>What to Watch Out For</h2>
      <p>Be skeptical of &quot;zero microplastics&quot; claims that:</p>
      <ul>
        <li>Don&apos;t cite a specific test method</li>
        <li>Don&apos;t name the testing lab</li>
        <li>Appear on products made from traditional polymers (polyethylene, polypropylene)</li>
        <li>Confuse &quot;biodegradable&quot; with &quot;zero microplastics&quot; (they&apos;re different)</li>
      </ul>
      <p>At Solubelle, we&apos;re happy to share our test reports. <Link href="/contact" style={{ color: '#1E8CB5', fontWeight: 600 }}>Contact us</Link> and we&apos;ll send the full documentation.</p>
    </>
  ),
};

/* ── Design tokens ──────────────────────────────────────────── */
const INK  = '#2F3A3B';
const INKM = '#3D4748';
const INKL = '#5E6E6F';
const MINT = '#EAF9F2';
const OFF  = '#FEFCF7';
const LEAFD = '#3D8C41';
const OCEAND = '#1E8CB5';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", background: OFF, color: INK }}>

      {/* Article header */}
      <header style={{ background: MINT, padding: '64px 0 52px', borderBottom: '1.5px solid #d0ece0' }}>
        <div className="container-max" style={{ maxWidth: 760 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <Link href="/blog" style={{ fontSize: 14, color: OCEAND, textDecoration: 'none', fontWeight: 600 }}>
              ← Back to Blog
            </Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <span style={{
              fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase',
              color: post.categoryColor,
              background: post.categoryColor === OCEAND ? '#EAF7FB' : MINT,
              padding: '4px 10px', borderRadius: 999,
              border: `1px solid ${post.categoryColor}33`,
            }}>
              {post.category}
            </span>
            <span style={{ fontSize: 14, color: INKL }}>{post.date}</span>
            <span style={{ fontSize: 14, color: INKL }}>·</span>
            <span style={{ fontSize: 14, color: INKL }}>{post.readTime}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.8rem)', fontWeight: 800, color: INK, lineHeight: 1.2, marginBottom: 18 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: 19, color: INKM, lineHeight: 1.7, maxWidth: 680 }}>
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Article body */}
      <article style={{ padding: '60px 0 72px' }}>
        <div className="container-max" style={{
          maxWidth: 760,
          fontSize: 17,
          lineHeight: 1.8,
          color: INKM,
        }}>
          <style>{`
            article h2 {
              font-size: clamp(1.3rem, 2.2vw, 1.7rem);
              font-weight: 800;
              color: #2F3A3B;
              margin: 2.4rem 0 1rem;
              line-height: 1.3;
            }
            article p { margin: 0 0 1.3rem; }
            article ul, article ol {
              padding-left: 1.4rem;
              margin: 0 0 1.3rem;
              display: flex;
              flex-direction: column;
              gap: 8px;
            }
            article li { font-size: 17px; color: #3D4748; line-height: 1.7; }
            article strong { color: #2F3A3B; font-weight: 700; }
            article em { font-style: italic; }
            article blockquote {
              border-left: 4px solid #5DAE61;
              padding-left: 1.2rem;
              margin: 1.5rem 0;
              color: #3D4748;
              font-style: italic;
            }
            article table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; }
            article th, article td { padding: 12px 16px; text-align: left; }
            article th { background: #EAF9F2; font-weight: 700; font-size: 14px; }
            article tr:nth-child(even) td { background: #f9fafb; }
          `}</style>
          <div style={{ background: '#EAF7FB', border: '1.5px solid #cdeaf6', borderRadius: 14, padding: '1.25rem 1.5rem', marginBottom: '2rem', fontSize: 16 }}>
            New to dissolvable bags? Start with our{' '}
            <Link href="/dissolvable-grocery-bags-guide" style={{ color: OCEAND, fontWeight: 700 }}>
              complete guide to dissolvable grocery bags
            </Link>{' '}
            for an overview of how they work, safety, legality, and switching your store.
          </div>

          {content[slug]}
        </div>
      </article>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section style={{ borderTop: '1.5px solid #d0ece0', padding: '60px 0 72px', background: '#fff' }}>
          <div className="container-max">
            <h2 style={{ fontSize: 22, fontWeight: 800, color: INK, marginBottom: 32 }}>More from the blog</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: OFF, border: '1.5px solid #d0ece0', borderRadius: 16, overflow: 'hidden', transition: 'transform .2s' }}>
                    <div style={{ height: 6, background: p.categoryColor }} />
                    <div style={{ padding: '22px 22px 26px' }}>
                      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: p.categoryColor }}>{p.category}</span>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: INK, lineHeight: 1.35, margin: '10px 0 10px' }}>{p.title}</h3>
                      <span style={{ fontSize: 13, color: OCEAND, fontWeight: 700 }}>Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: MINT, borderTop: '1.5px solid #d0ece0', padding: '60px 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: INK, marginBottom: 14 }}>
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

      {/* BreadcrumbList schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solubelle.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://solubelle.com/blog' },
          { '@type': 'ListItem', position: 3, name: post.title, item: `https://solubelle.com/blog/${slug}` },
        ],
      })}} />

      {/* Article schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        publisher: {
          '@type': 'Organization',
          name: 'Solubelle',
          logo: { '@type': 'ImageObject', url: 'https://solubelle.com/SolubelleLOGO.png' },
        },
        mainEntityOfPage: `https://solubelle.com/blog/${slug}`,
      })}} />

    </div>
  );
}
