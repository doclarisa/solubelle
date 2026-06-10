'use client';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: '#2F3A3B', color: 'rgba(255,255,255,.6)', paddingTop: 0, paddingBottom: '2rem' }}>
      <div style={{ height: 3, background: 'linear-gradient(90deg, #3AAED8, #5DAE61)' }} />
      <div className="container-max">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
          paddingTop: '3.5rem',
        }}>

          {/* Brand column */}
          <div>
            <a href="/" aria-label="Solubelle Home" style={{ display: 'inline-block', lineHeight: 0, marginBottom: '1rem' }}>
              <Image
                src="/SolubelleLOGO.png"
                alt="Solubelle"
                width={130}
                height={40}
                style={{ objectFit: 'contain', height: '38px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(255,255,255,.5)', maxWidth: 220 }}>
              The bag that disappears. PVA water-soluble grocery bags for US retailers and homes.
            </p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(255,255,255,.5)', marginTop: '0.75rem' }}>
              Oak Park, IL
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {[
                { href: 'https://instagram.com/solubelle', label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { href: 'https://linkedin.com/company/solubelle', label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={`Solubelle on ${s.label}`} style={{ color: 'rgba(255,255,255,.4)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#5DAE61')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.4)')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d={s.d} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '1rem' }}>Products</h4>
            {[['Standard Grocery Bag', '/products'], ['Produce Bag', '/products'], ['Heavy-Duty Shopper', '/products'], ['Custom Branding', '/for-retailers#custom']].map(([label, href]) => (
              <a key={href + label} href={href} style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.875rem', color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}>{label}</a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '1rem' }}>Company</h4>
            {[['How It Works', '/how-it-works'], ['Our Story', '/about'], ['For Retailers', '/for-retailers'], ['FAQ', '/faq'], ['Contact', '/contact'], ['Privacy Policy', '/privacy-policy']].map(([label, href]) => (
              <a key={href} href={href} style={{ display: 'block', marginBottom: '0.6rem', fontSize: '0.875rem', color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.5)')}>{label}</a>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '1rem' }}>Certifications</h4>
            {['ASTM D6400', 'EN13432', 'FDA 21 CFR 175.300', 'Marine Biodegradable', 'Food-grade safe'].map((cert) => (
              <p key={cert} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,.5)' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#5DAE61', flexShrink: 0, display: 'inline-block' }} />
                {cert}
              </p>
            ))}
            <a href="/certifications" style={{ fontSize: '0.8rem', color: '#3AAED8', textDecoration: 'none', marginTop: '0.5rem', display: 'block' }}>
              View lab reports →
            </a>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.08)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,.3)' }}>© {year} Solubelle LLC. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,.3)' }}>
            <a href="mailto:hello@solubelle.com" style={{ color: 'rgba(255,255,255,.4)', textDecoration: 'none' }}>hello@solubelle.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
