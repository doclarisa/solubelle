'use client';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const links = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/products', label: 'Products' },
  { href: '/why-solubelle', label: 'Why Solubelle' },
  { href: '/for-retailers', label: 'For Retailers' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
        transition: 'box-shadow 0.3s',
        borderTop: '3px solid transparent',
        borderImage: 'linear-gradient(90deg, #0D7EC4, #3EBD6B) 1',
      }}
    >
      <div className="container-max" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        <Logo />

        {/* Desktop nav */}
        <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="hidden md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: '0.875rem',
                color: '#374151',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1A7DC4')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/for-retailers"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              padding: '0.5rem 1.25rem',
              background: '#3EBD6B', color: '#fff',
              fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.85rem',
              borderRadius: 9999, textDecoration: 'none',
              boxShadow: '0 2px 8px rgba(62,189,107,0.35)',
              transition: 'background-color 0.2s, transform 0.15s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#2E9E55'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#3EBD6B'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
          >
            Wholesale
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#374151', marginBottom: 5, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#374151', marginBottom: 5, opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#374151', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: '1px solid #e5e7eb', padding: '1rem 1.5rem 1.5rem' }} className="md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: '1rem',
                color: '#374151',
                textDecoration: 'none',
                borderBottom: '1px solid #f3f4f6',
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="/for-retailers" className="btn-secondary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
            Get Wholesale Pricing
          </a>
        </div>
      )}
    </header>
  );
}
