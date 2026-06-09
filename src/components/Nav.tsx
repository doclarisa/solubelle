'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const links = [
  { href: '/',              label: 'Home' },
  { href: '/products',      label: 'Products' },
  { href: '/how-it-works',  label: 'How it works' },
  { href: '/why-solubelle', label: 'Applications' },
  { href: '/for-retailers', label: 'For retailers' },
  { href: '/about',         label: 'Our story' },
  { href: '/faq',           label: 'FAQs' },
];

export default function Nav() {
  const [open,   setOpen]   = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(254,252,247,.97)',
      borderBottom: '1.5px solid #d0ece0',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    }}>
      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '0 52px',
        height: 170,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <a href="/" aria-label="Solubelle Home" style={{ display: 'inline-block', lineHeight: 0, flexShrink: 0 }}>
          <Image
            src="/SolubelleLOGO.png"
            alt="Solubelle — water-soluble grocery bags"
            width={500}
            height={150}
            priority
            style={{ objectFit: 'contain', height: '150px', width: 'auto', display: 'block' }}
          />
        </a>

        {/* Desktop nav */}
        {!mobile && (
          <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  color: '#3D4748',
                  textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3D8C41')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#3D4748')}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                background: '#5DAE61',
                color: '#fff',
                padding: '10px 22px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
                fontFamily: "'Manrope', sans-serif",
                flexShrink: 0,
                transition: 'background 0.15s',
                marginLeft: 8,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#3D8C41')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#5DAE61')}
            >
              Request samples →
            </a>
          </nav>
        )}

        {/* Mobile hamburger */}
        {mobile && (
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#2F3A3B', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#2F3A3B', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#2F3A3B', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {mobile && open && (
        <div style={{
          background: 'rgba(254,252,247,.99)',
          borderTop: '1px solid #d0ece0',
          padding: '1rem 24px 1.5rem',
        }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 500,
                fontSize: '1rem',
                color: '#3D4748',
                textDecoration: 'none',
                borderBottom: '1px solid #d0ece0',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display: 'block', marginTop: '1rem', textAlign: 'center',
              background: '#5DAE61', color: '#fff',
              fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '0.95rem',
              padding: '0.85rem', borderRadius: 999, textDecoration: 'none',
            }}
          >
            Request samples →
          </a>
        </div>
      )}
    </header>
  );
}
