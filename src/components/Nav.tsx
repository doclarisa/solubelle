'use client';
import { useState } from 'react';
import Image from 'next/image';

const links = [
  { href: '/',              label: 'Home' },
  { href: '/products',      label: 'Products' },
  { href: '/how-it-works',  label: 'How it works' },
  { href: '/why-solubelle', label: 'Applications' },
  { href: '/for-retailers', label: 'For retailers' },
  { href: '/blog',          label: 'Blog' },
  { href: '/about',         label: 'Our story' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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
      {/* Responsive switching — inline styles can't hold media queries, so this
          scoped style block drives desktop/mobile visibility via CSS (works on
          first server render, no hydration mismatch, no flash). */}
      <style>{`
        .nav-desktop { display: none; }
        .nav-burger  { display: flex; }
        .nav-bar     { height: 58px; padding: 0 20px; }
        .nav-logo    { height: 19px; width: auto; }
        @media (min-width: 900px) {
          .nav-desktop { display: flex; }
          .nav-burger  { display: none; }
          .nav-bar     { height: 64px; padding: 0 52px; }
          .nav-logo    { height: 21px; }
        }
      `}</style>

      <div className="nav-bar" style={{
        maxWidth: 1240,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* Logo mark — cropped to remove transparent padding so it reads larger
            within the same header height (~1/3 of the bar height) */}
        <a href="/" aria-label="Solubelle Home" style={{ display: 'inline-block', lineHeight: 0, flexShrink: 0 }}>
          <Image
            src="/SolubelleLOGO-mark.png"
            alt="Solubelle — water-soluble grocery bags"
            width={1115}
            height={354}
            priority
            className="nav-logo"
            style={{ objectFit: 'contain', display: 'block' }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Main navigation" style={{ alignItems: 'center', gap: '1.75rem' }}>
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

        {/* Mobile hamburger */}
        <button
          className="nav-burger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', flexDirection: 'column', gap: 5 }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#2F3A3B', transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#2F3A3B', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#2F3A3B', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile dropdown — only renders when open; hidden ≥900px via .nav-burger wrapper logic */}
      {open && (
        <div className="nav-burger" style={{
          flexDirection: 'column',
          background: 'rgba(254,252,247,.99)',
          borderTop: '1px solid #d0ece0',
          padding: '1rem 20px 1.5rem',
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