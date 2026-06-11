'use client';

import { useState } from 'react';
import Link from 'next/link';
import { faqs } from '@/lib/faqs';

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

export default function FAQAccordion() {

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
