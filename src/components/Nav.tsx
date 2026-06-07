'use client';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const GREEN = '#1B5E20';

const links = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/products', label: 'Products' },
  { href: '/why-solubelle', label: 'Why Solubelle' },
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
        background: GREEN,
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.25)' : '0 1px 0 rgba(0,0,0,0.15)',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div className="container-max" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        <Logo large />

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
                color: 'rgba(255,255,255,0.82)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.82)')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#wholesale"
            style={{
              background: '#fff',
              color: GREEN,
              padding: '9px 22px',
              borderRadius: '999px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
              fontFamily: "'Poppins',sans-serif",
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Wholesale ›
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
          <span style={{ display: 'block', width: 22, height: 2, background: '#fff', marginBottom: 5, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#fff', marginBottom: 5, opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#fff', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: GREEN, borderTop: '1px solid rgba(255,255,255,0.12)', padding: '1rem 1.5rem 1.5rem' }} className="md:hidden">
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
                color: 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#wholesale"
            onClick={() => setOpen(false)}
            style={{
              display: 'block', marginTop: '1rem', width: '100%', textAlign: 'center',
              background: '#fff', color: GREEN,
              fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.95rem',
              padding: '0.85rem', borderRadius: 8, textDecoration: 'none',
            }}
          >
            Get Wholesale Pricing
          </a>
        </div>
      )}
    </header>
  );
}
