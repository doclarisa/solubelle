'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'Are PVA bags safe for food contact?',
    a: 'Yes. PVA is an FDA-recognized safe material used in food packaging, eye drops, and laundry pods. Our bags contain no BPA, phthalates, or heavy metals.',
  },
  {
    q: 'Will rain dissolve my bag before I get to the store?',
    a: "No. Our standard bags are cold-water resistant up to approximately 60°F. Rain won't dissolve them. Hot water (above 140°F) is needed to fully dissolve in minutes.",
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
    a: 'Hot water grade (60°C+): 2–5 minutes. Cold water grade: 10–30 minutes. Full environmental biodegradation in aerobic conditions: days to weeks.',
  },
  {
    q: 'Are they certified?',
    a: 'Yes. Our bags meet ASTM D6400 standards for biodegradable materials. Raw materials are FDA-recognized safe. See our Certifications page for full documentation.',
    link: { href: '/certifications', label: 'View Certifications →' },
  },
  {
    q: 'What about the ASU wastewater study?',
    a: "The 2021 ASU/Rolsky study found that PVA does not fully biodegrade in all wastewater treatment plants. This is a real finding we take seriously. We're working with enhanced-biodegradability suppliers and monitoring research closely. Full transparency: this science is evolving. We'll update our guidance as peer-reviewed literature develops.",
    link: { href: '/how-it-works', label: 'Read our full wastewater explainer →' },
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

type FAQ = typeof faqs[0];

function AccordionItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid #e5e7eb' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: '1rem', color: isOpen ? '#1A7DC4' : '#1a1a1a', lineHeight: 1.5 }}>
          {faq.q}
        </span>
        <span style={{ color: isOpen ? '#1A7DC4' : '#9ca3af', fontSize: '1.5rem', flexShrink: 0, transition: 'transform 0.25s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', display: 'inline-block', lineHeight: 1 }}>
          +
        </span>
      </button>
      <div className={`accordion-content${isOpen ? ' open' : ''}`} aria-hidden={!isOpen}>
        <div style={{ paddingBottom: '1.5rem' }}>
          <p style={{ color: '#374151', lineHeight: 1.8, margin: 0, marginBottom: faq.link ? '1rem' : 0 }}>{faq.a}</p>
          {faq.link && (
            <Link href={faq.link.href} style={{ color: '#1A7DC4', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
              {faq.link.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {faqs.map((faq, i) => (
        <AccordionItem
          key={i}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </>
  );
}
