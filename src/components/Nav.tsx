'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const DARK_GREEN  = '#1B5E20';
const LIGHT_GREEN = '#C8E6C9';

const links = [
  { href: '/',             label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/products',     label: 'Products' },
  { href: '/why-solubelle',label: 'Why Solubelle' },
  { href: '/faq',          label: 'FAQ' },
  { href: '/about',        label: 'About' },
  { href: '/contact',      label: 'Contact' },
];

export default function Nav() {
  const [open,    setOpen]    = useState(false);
  const [mobile,  setMobile]  = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>

      {/* ── LOGO BAND ── light green, logo 4× original size ───── */}
      <div style={{
        background: LIGHT_GREEN,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '14px 24px',
        borderBottom: '2px solid #A5D6A7',
      }}>
        <a href="/" aria-label="Solubelle Home" style={{ display: 'inline-block', lineHeight: 0 }}>
          <Image
            src="/SolubelleLOGO.png"
            alt="Solubelle — water-soluble grocery bags"
            width={560}
            height={168}
            priority
            style={{ objectFit: 'contain', height: '168px', width: 'auto', display: 'block' }}
          />
        </a>
      </div>

      {/* ── NAV BAND ── dark green, links ─────────────────────── */}
      <div style={{
        background: DARK_GREEN,
        boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
      }}>
        <div className="container-max" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>

          {/* Desktop links */}
          {!mobile && (
            <nav aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', flex: 1 }}>
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
                  marginLeft: 'auto',
                  background: '#fff',
                  color: DARK_GREEN,
                  padding: '8px 22px',
                  borderRadius: '999px',
                  fontSize: '13px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: "'Poppins', sans-serif",
                  flexShrink: 0,
                  transition: 'opacity 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Wholesale ›
              </a>
            </nav>
          )}

          {/* Mobile: show brand name + hamburger */}
          {mobile && (
            <>
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
                Solubelle®
              </span>
              <button
                aria-label="Toggle navigation"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
              >
                <span style={{ display: 'block', width: 22, height: 2, background: '#fff', marginBottom: 5, transition: 'transform 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                <span style={{ display: 'block', width: 22, height: 2, background: '#fff', marginBottom: 5, opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
                <span style={{ display: 'block', width: 22, height: 2, background: '#fff', transition: 'transform 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
              </button>
            </>
          )}
        </div>

        {/* Mobile dropdown */}
        {mobile && open && (
          <div style={{ background: DARK_GREEN, borderTop: '1px solid rgba(255,255,255,0.12)', padding: '1rem 1.5rem 1.5rem' }}>
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
                display: 'block', marginTop: '1rem', textAlign: 'center',
                background: '#fff', color: DARK_GREEN,
                fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: '0.95rem',
                padding: '0.85rem', borderRadius: 8, textDecoration: 'none',
              }}
            >
              Get Wholesale Pricing
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
