import { SPECS } from '@/lib/specs';

export const faqs = [
  {
    q: 'Are PVA bags safe for food contact?',
    a: 'Yes. PVA is an FDA-recognized safe material used in food packaging, eye drops, and laundry pods. Our bags contain no BPA, phthalates, or heavy metals.',
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
    a: 'Yes. Our bags meet ASTM D6400 standards for biodegradable materials. Raw materials are FDA-recognized safe. See our Certifications page for full documentation.',
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
