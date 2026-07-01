import type { Metadata } from 'next';
import Link from 'next/link';
import { SPECS } from '@/lib/specs';

export const metadata: Metadata = {
  title: 'Dissolvable Grocery Bags: The Complete 2026 Guide | Solubelle®',
  description: 'What dissolvable grocery bags are, how PVA dissolution works, whether they\'re safe and legal, and how stores switch — the complete guide to water-soluble bags.',
  alternates: { canonical: 'https://solubelle.com/dissolvable-grocery-bags-guide' },
};

/* ── Design tokens (matches blog) ───────────────────────────── */
const INK   = '#2F3A3B';
const INKM  = '#3D4748';
const INKL  = '#5E6E6F';
const MINT  = '#EAF9F2';
const SKY   = '#EAF7FB';
const OFF   = '#FEFCF7';
const LEAF  = '#5DAE61';
const LEAFD = '#3D8C41';
const OCEAND = '#1E8CB5';

const faqs = [
  {
    q: 'What are dissolvable grocery bags made of?',
    a: 'Dissolvable grocery bags are made from PVA (polyvinyl alcohol), a synthetic polymer that forms hydrogen bonds with water. Unlike polyethylene, PVA\'s molecular structure allows it to dissolve completely in water rather than fragmenting into microplastics.',
  },
  {
    q: 'Do dissolvable grocery bags actually dissolve completely?',
    a: `Yes. In hot water (${SPECS.dissolution.hotWaterTemp}), Solubelle bags dissolve completely in ${SPECS.dissolution.hotWaterTime}. In cold or room-temperature water, dissolution takes ${SPECS.dissolution.coldWaterTime}. FTIR analysis confirms no polymer fragments remain after dissolution.`,
  },
  {
    q: 'Are dissolvable grocery bags safe for food contact?',
    a: 'Yes. PVA is widely used in food packaging coatings, eye drops, and laundry detergent pods. Solubelle bags are food-grade safe. Certification is available upon request.',
  },
  {
    q: 'Will my dissolvable bag fall apart in the rain or with wet groceries?',
    a: 'No. Solubelle bags are formulated for cold-water resistance, so light rain, condensation, and damp produce won\'t dissolve them. Full dissolution requires sustained contact with hot water.',
  },
  {
    q: 'Are dissolvable bags legal where plastic bags are banned?',
    a: 'Yes, in all 50 states. Because PVA is not polyethylene or polypropylene, dissolvable bags fall outside most "single-use plastic bag" definitions. They are independently tested and EN13432 certified.',
  },
  {
    q: 'How is "zero microplastics" verified for dissolvable bags?',
    a: 'Through FTIR (Fourier-transform infrared spectroscopy) testing of post-dissolution water by an independent lab. Because PVA dissolves at the molecular level rather than fragmenting, FTIR analysis detects no remaining polymer particles.',
  },
  {
    q: 'Can a grocery store switch entirely to dissolvable bags?',
    a: 'Yes. Standard Solubelle bags fit existing T-shirt bag dispensers without modification, and most stores complete the switch — sample, staff training, customer rollout, first wholesale order — in about 30 days.',
  },
];

export default function DissolvableGroceryBagsGuidePage() {
  return (
    <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", background: OFF, color: INK }}>

      {/* Header */}
      <header style={{ background: MINT, padding: '64px 0 52px', borderBottom: '1.5px solid #d0ece0' }}>
        <div className="container-max" style={{ maxWidth: 800 }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <Link href="/blog" style={{ fontSize: 14, color: OCEAND, textDecoration: 'none', fontWeight: 600 }}>
              ← Back to Blog
            </Link>
          </nav>

          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: LEAFD, marginBottom: 14 }}>
            The Complete Guide
          </p>

          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.1rem)', fontWeight: 800, color: INK, lineHeight: 1.15, marginBottom: 18 }}>
            Dissolvable Grocery Bags: The Complete 2026 Guide
          </h1>
          <p style={{ fontSize: 19, color: INKM, lineHeight: 1.7, maxWidth: 720 }}>
            Dissolvable grocery bags are PVA (polyvinyl alcohol) bags that disappear completely in water — no microplastics, no landfill, no industrial composting facility required. This guide covers how they work, whether they&apos;re safe and legal, and how stores switch from plastic.
          </p>
        </div>
      </header>

      {/* Body */}
      <article style={{ padding: '56px 0 0' }}>
        <div className="container-max" style={{ maxWidth: 800, fontSize: 17, lineHeight: 1.8, color: INKM }}>
          <style>{`
            .guide h2 {
              font-size: clamp(1.35rem, 2.4vw, 1.8rem);
              font-weight: 800;
              color: #2F3A3B;
              margin: 2.6rem 0 1rem;
              line-height: 1.3;
              scroll-margin-top: 90px;
            }
            .guide h3 {
              font-size: 1.1rem;
              font-weight: 700;
              color: #2F3A3B;
              margin: 1.6rem 0 0.6rem;
            }
            .guide p { margin: 0 0 1.3rem; }
            .guide ul, .guide ol {
              padding-left: 1.4rem;
              margin: 0 0 1.3rem;
              display: flex;
              flex-direction: column;
              gap: 8px;
            }
            .guide li { font-size: 17px; color: #3D4748; line-height: 1.7; }
            .guide strong { color: #2F3A3B; font-weight: 700; }
            .guide a.inline-link { color: #1E8CB5; font-weight: 600; }
            .guide table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; font-size: 15px; }
            .guide th, .guide td { padding: 12px 16px; text-align: left; }
            .guide th { background: #EAF9F2; font-weight: 700; font-size: 14px; }
            .guide tr:nth-child(even) td { background: #f9fafb; }
          `}</style>

          {/* Table of contents */}
          <nav aria-label="Table of contents" style={{ background: SKY, border: '1.5px solid #cdeaf6', borderRadius: 16, padding: '24px 28px', marginBottom: 8 }}>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: OCEAND, marginBottom: 12 }}>
              In this guide
            </p>
            <ol style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <li><a className="inline-link" href="#what-are-they" style={{ color: OCEAND, textDecoration: 'none' }}>What Are Dissolvable Grocery Bags?</a></li>
              <li><a className="inline-link" href="#how-they-work" style={{ color: OCEAND, textDecoration: 'none' }}>How Do They Work? (The Science)</a></li>
              <li><a className="inline-link" href="#vs-compostable" style={{ color: OCEAND, textDecoration: 'none' }}>Dissolvable vs. Compostable vs. Biodegradable vs. Reusable</a></li>
              <li><a className="inline-link" href="#safety" style={{ color: OCEAND, textDecoration: 'none' }}>Are Dissolvable Bags Safe?</a></li>
              <li><a className="inline-link" href="#legal" style={{ color: OCEAND, textDecoration: 'none' }}>Are They Legal? Plastic Bag Bans by State</a></li>
              <li><a className="inline-link" href="#who-uses" style={{ color: OCEAND, textDecoration: 'none' }}>Who Uses Dissolvable Grocery Bags?</a></li>
              <li><a className="inline-link" href="#how-to-switch" style={{ color: OCEAND, textDecoration: 'none' }}>How to Switch Your Store</a></li>
              <li><a className="inline-link" href="#faq" style={{ color: OCEAND, textDecoration: 'none' }}>FAQ</a></li>
            </ol>
          </nav>

          <div className="guide" style={{ marginTop: '2.4rem' }}>

            <h2 id="what-are-they">What Are Dissolvable Grocery Bags?</h2>
            <p>
              Dissolvable grocery bags are checkout and produce bags made from <strong>PVA (polyvinyl alcohol)</strong> — a water-soluble synthetic polymer that disappears completely when it contacts hot water. Instead of ending up in a landfill or recycling stream, a dissolvable bag can be dropped directly into a sink, dissolved in {SPECS.dissolution.hotWaterTime}, and poured down the drain.
            </p>
            <p>
              They look and feel like a normal plastic T-shirt bag. They hold up to {SPECS.capacity.standard} for a standard checkout bag (and up to {SPECS.capacity.heavyDuty} for a heavy-duty shopper), they&apos;re rain-resistant in everyday use, and they fit standard bag dispensers without any equipment changes. The difference is what happens after the bag leaves the store: instead of persisting for centuries, it dissolves.
            </p>
            <p>
              Solubelle makes three formats — a <Link className="inline-link" href="/products">standard grocery bag, a produce bag, and a heavy-duty shopper</Link> — and explains the full mechanism on our <Link className="inline-link" href="/how-it-works">How It Works page</Link>.
            </p>

            <h2 id="how-they-work">How Do Dissolvable Grocery Bags Work? (The Science)</h2>
            <p>
              PVA&apos;s molecular structure contains hydroxyl groups (-OH) that form strong hydrogen bonds with water molecules. Conventional plastics like polyethylene don&apos;t have this property — their chains are held together by weak, water-resistant forces, which is why plastic bags persist for hundreds of years and only ever <em>fragment</em> into smaller and smaller pieces (microplastics).
            </p>
            <p>
              PVA dissolves in three stages:
            </p>
            <ol>
              <li><strong>Water penetration</strong> — hot water molecules wedge between the PVA polymer chains and bond with the hydroxyl groups.</li>
              <li><strong>Chain separation</strong> — the polymer network swells and the long chains break apart into shorter segments that disperse uniformly through the water. This is dissolution at the molecular level, not physical fragmentation.</li>
              <li><strong>Biodegradation</strong> — naturally occurring bacteria metabolize the dissolved PVA into water, CO₂, and trace acetate over days to weeks in aerobic conditions (surface water, treated wastewater).</li>
            </ol>
            <p>
              For a deeper, step-by-step breakdown of the chemistry, see <Link className="inline-link" href="/blog/what-happens-when-pva-bag-dissolves">What Actually Happens When a PVA Bag Dissolves in Water?</Link>
            </p>

            <h2 id="vs-compostable">Dissolvable vs. Compostable vs. Biodegradable vs. Reusable Bags</h2>
            <p>
              &quot;Eco-friendly bag&quot; covers a lot of very different products, and the differences matter for both the environment and your compliance obligations.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Bag Type</th>
                  <th>Breaks down where?</th>
                  <th>Microplastics?</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Dissolvable (PVA)</strong></td>
                  <td>Any sink, hot water, in minutes</td>
                  <td>None — dissolves, doesn&apos;t fragment</td>
                  <td>Grocery checkout, produce, retail</td>
                </tr>
                <tr>
                  <td>Compostable (PLA)</td>
                  <td>Industrial composting facility only</td>
                  <td>None if composted; fragments in landfill</td>
                  <td>Areas with industrial composting access</td>
                </tr>
                <tr>
                  <td>&quot;Biodegradable&quot; plastic</td>
                  <td>Often unverified — many never fully break down</td>
                  <td>Frequently fragments into microplastics</td>
                  <td>Avoid unless independently certified</td>
                </tr>
                <tr>
                  <td>Reusable (cotton/RPET)</td>
                  <td>Doesn&apos;t break down — designed for reuse</td>
                  <td>RPET sheds microfibers when washed</td>
                  <td>Customers who reliably bring their own bag</td>
                </tr>
              </tbody>
            </table>
            <p>
              The key distinction is <strong>accessibility</strong>: industrial composting facilities are available to fewer than 9% of Americans, so compostable bags that miss that stream behave like ordinary landfill plastic. Dissolvable bags solve this because the &quot;facility&quot; is just a kitchen sink. For the full side-by-side comparison, read <Link className="inline-link" href="/blog/pva-bags-vs-compostable-bags">PVA Bags vs Compostable Bags: What&apos;s Actually the Difference?</Link>
            </p>

            <h2 id="safety">Are Dissolvable Grocery Bags Safe?</h2>
            <p>
              Yes — and the safety case rests on three independent pillars rather than a single marketing claim:
            </p>
            <ul>
              <li><strong>Food contact:</strong> PVA is widely used in food packaging coatings, eye drops, and laundry pods. Solubelle bags are food-grade safe — certification is available upon request.</li>
              <li><strong>Material standard:</strong> Solubelle bags are EN13432 certified and meet California&apos;s SB 270 / SB 1053 carryout bag requirements.</li>
              <li><strong>Zero microplastics, independently verified:</strong> Post-dissolution water is tested with FTIR (Fourier-transform infrared spectroscopy), which detects polymer particles down to trace levels. PVA dissolution leaves none.</li>
            </ul>
            <p>
              We also believe in addressing the honest caveats directly. A widely cited 2021 Arizona State University study (often referenced as the &quot;Rolsky study&quot;) found that PVA does not fully biodegrade in <em>every</em> wastewater treatment configuration. That finding is real, and it&apos;s why the industry — including Solubelle&apos;s suppliers — has continued refining PVA formulations for enhanced biodegradability across more conditions, not just the lab-ideal ones. It does not change the dissolution chemistry (PVA still dissolves and does not fragment into microplastics); it&apos;s a question of how completely it fully mineralizes afterward in certain treatment environments, and it&apos;s an area we monitor as the science develops.
            </p>
            <p>
              See our <Link className="inline-link" href="/certifications">Certifications page</Link> for documentation, and <Link className="inline-link" href="/blog/zero-microplastics-what-it-really-means">&quot;Zero Microplastics&quot; — What It Really Means</Link> for how the FTIR claim is verified.
            </p>

            <h2 id="legal">Are Dissolvable Grocery Bags Legal? Plastic Bag Bans by State</h2>
            <p>
              As of 2026, more than a dozen US states — including California, New York, New Jersey, Illinois, Oregon, Washington, and others — have enacted bans or fees on single-use plastic checkout bags, with many more cities and counties going further on their own.
            </p>
            <p>
              Dissolvable PVA bags are compliant in all 50 states: they are not polyethylene or polypropylene, so they fall outside the scope of &quot;single-use plastic bag&quot; as most legislation defines it. They are also EN13432 certified and independently tested. For a state-by-state breakdown, see <Link className="inline-link" href="/blog/plastic-bag-bans-what-retailers-need-to-know">Plastic Bag Bans in 2026: What US Retailers Need to Know</Link>.
            </p>

            <h2 id="who-uses">Who Uses Dissolvable Grocery Bags?</h2>
            <p>
              Dissolvable bags work anywhere a conventional plastic or paper bag would be used — but they tend to make the biggest impression in a few specific settings:
            </p>
            <ul>
              <li><strong>Grocery stores and supermarkets</strong> — replacing checkout T-shirt bags one-for-one, with the dissolution &quot;wow moment&quot; becoming a customer talking point.</li>
              <li><strong>Farmers markets and produce stands</strong> — produce bags that are food-safe, transparent, and compostable in the most literal sense: a sink.</li>
              <li><strong>Eco-conscious retail brands</strong> — using <Link className="inline-link" href="/products">custom-branded bags</Link> as a visible sustainability statement at checkout.</li>
              <li><strong>Households</strong> — anyone who wants to stop accumulating plastic bag clutter under the sink.</li>
            </ul>
            <p>
              Retailers evaluating a switch — including wholesale pricing, minimum order quantities, and net-30 terms — should start on our <Link className="inline-link" href="/for-retailers">For Retailers page</Link>.
            </p>

            <h2 id="how-to-switch">How to Switch Your Store to Dissolvable Bags</h2>
            <p>
              Switching is closer to a one-month rollout than a major operational change, since dissolvable bags fit existing T-shirt bag dispensers without modification. The short version:
            </p>
            <ol>
              <li><strong>Order samples</strong> and test internally — fill bags with typical purchase weights, check rain resistance, and try the dissolve demo.</li>
              <li><strong>Train staff</strong> on the one-line explanation: it&apos;s a bag that dissolves completely in hot water in minutes — drop it in the sink when you&apos;re done.</li>
              <li><strong>Announce to customers</strong> with simple signage and a demo video — these tend to get strong organic engagement on social media.</li>
              <li><strong>Place a wholesale order</strong> sized to your weekly bag volume, with net-30 terms available for qualified accounts.</li>
            </ol>
            <p>
              For the full 30-day playbook, including reorder schedules and custom branding lead times, read <Link className="inline-link" href="/blog/how-to-switch-your-store-to-dissolvable-bags">How to Switch Your Store to Dissolvable Bags in 30 Days</Link>.
            </p>

            <h2 id="faq">Dissolvable Grocery Bags: FAQ</h2>
            {faqs.map((item) => (
              <div key={item.q} style={{ marginBottom: '1.4rem' }}>
                <h3>{item.q}</h3>
                <p style={{ marginBottom: 0 }}>{item.a}</p>
              </div>
            ))}

          </div>
        </div>
      </article>

      {/* CTA */}
      <section style={{ background: MINT, borderTop: '1.5px solid #d0ece0', padding: '60px 0', marginTop: '3rem' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: INK, marginBottom: 14 }}>
            Ready to see it dissolve for yourself?
          </h2>
          <p style={{ fontSize: 17, color: INKM, marginBottom: 28 }}>
            Request a free sample kit — no commitment required.
          </p>
          <Link href="/#contact" style={{
            display: 'inline-flex', alignItems: 'center',
            background: LEAF, color: '#fff',
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
          { '@type': 'ListItem', position: 3, name: 'Dissolvable Grocery Bags Guide', item: 'https://solubelle.com/dissolvable-grocery-bags-guide' },
        ],
      })}} />

      {/* FAQPage schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      })}} />

    </div>
  );
}
