import { SPECS } from '@/lib/specs';

export const faqs = [
  {
    q: 'Are PVA bags safe for food contact?',
    a: 'Yes. PVA is widely used in food packaging, eye drops, and laundry pods. Our bags contain no BPA, phthalates, or heavy metals. Certification documentation is available upon request.',
  },
  {
    q: 'Will rain dissolve my bag before I get to the store?',
    a: `No. Our standard bags are cold-water resistant up to approximately 60°F. Rain won't dissolve them. Hot water (${SPECS.dissolution.hotWaterTemp}) dissolves them completely in ${SPECS.dissolution.hotWaterTime}.`,
  },
  {
    q: 'What happens if I accidentally put it in the washing machine?',
    a: 'Cold-wash cycles are typically fine. A hot wash cycle may partially dissolve the bag — avoid hot water washes.',
  },
  {
    q: 'Is PVA the same as a microplastic?',
    a: 'No. PVA is not classified as a microplastic. It dissolves in water and biodegrades in aerobic environments. Unlike polyethylene, it does not fragment into persistent micro-particles.',
  },
  {
    q: 'How long does it take to dissolve?',
    a: `In hot water (${SPECS.dissolution.hotWaterTemp}): ${SPECS.dissolution.hotWaterTime}. In cold or room-temperature water: ${SPECS.dissolution.coldWaterTime}. Full environmental biodegradation in aerobic conditions: days to weeks.`,
  },
  {
    q: 'Are they certified?',
    a: 'Yes. Our bags carry third-party certifications including SGS laboratory testing and EN13432. Certification documentation is available upon request.',
    link: { href: '/certifications', label: 'View Certifications →' },
  },
  {
    q: 'What about the ASU wastewater study?',
    a: "The 2021 ASU/Rolsky study found that PVA does not fully biodegrade in all wastewater treatment plants. This is a real finding we take seriously. We're working with enhanced-biodegradability suppliers and monitoring research closely. Full transparency: this science is evolving. We'll update our guidance as peer-reviewed literature develops.",
    link: { href: '/how-it-works#wastewater', label: 'Read our full wastewater explainer →' },
  },
  {
    q: 'Can I use them for hot food?',
    a: 'Our bags are not designed for hot food applications. For grocery and retail use — produce, dry goods, general merchandise — they are well within safe temperature parameters.',
  },
  {
    q: 'How do I order wholesale?',
    a: 'Visit our For Retailers page to request free samples and get wholesale pricing. We offer net-30 payment terms for qualified accounts.',
    link: { href: '/for-retailers', label: 'Go to For Retailers →' },
  },
  {
    q: 'Do you ship to all 50 states?',
    a: 'Yes. We ship from our US warehouse to all 50 states. Standard shipping takes 3–5 business days. Expedited shipping is available at checkout.',
  },
  {
    q: 'Can I get custom printed bags with my store logo?',
    a: 'Yes. Minimum order quantities apply for custom printing. Visit our Products page or contact us directly for a custom printing quote.',
    link: { href: '/products', label: 'See custom options →' },
  },
  {
    q: "What's the shelf life?",
    a: 'Store in a cool, dry place away from humidity. Shelf life is 24 months in original, sealed packaging.',
  },
  {
    q: "Aren't paper bags better for the environment than plastic?",
    a: "Paper is better than conventional plastic on decomposition, but it comes with real environmental costs people often overlook. Paper bags require roughly 4× more energy and significantly more water to manufacture than plastic bags. Their carbon footprint per bag is actually higher than plastic at the point of production. And in a sealed landfill — which is where most bags end up — paper can sit for years without breaking down due to lack of oxygen and moisture. Paper is a step in the right direction, but it's not a clean solution.",
  },
  {
    q: 'How does a PVA bag break down compared to paper?',
    a: 'Paper decomposes through microbial action, which requires the right combination of oxygen, moisture, and active microorganisms — conditions that aren\'t guaranteed in most disposal environments. PVA bags dissolve directly in water and break down into water, CO₂, and biomass. No facility required. No special bin. No waiting months for decomposition to begin.',
  },
  {
    q: 'Can PVA bags handle the same loads as paper bags?',
    a: 'Yes — and they handle wet conditions better. Paper bags lose structural integrity when exposed to moisture; handles tear, bottoms give out. PVA bags are formulated to resist ambient moisture and light rain while still dissolving when fully submerged in water, making them more practical for everyday grocery use.',
  },
  {
    q: "Can't customers just recycle paper bags?",
    a: "Technically yes, but only if the bag is clean, dry, and deposited in the correct stream — and only if the local recycling facility accepts them. In practice, recycling rates for paper bags are far lower than most people assume. PVA eliminates the recycling question: dissolve it at home under hot water and the disposal problem is solved, with nothing harmful left behind.",
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};
