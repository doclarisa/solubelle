export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-2 no-underline ${className}`} aria-label="Solubelle Home">
      {/* Water droplet + leaf SVG icon */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A7DC4" />
            <stop offset="100%" stopColor="#4CAF50" />
          </linearGradient>
        </defs>
        {/* Water drop */}
        <path d="M18 4 C18 4 8 15 8 21 C8 26.5 12.5 31 18 31 C23.5 31 28 26.5 28 21 C28 15 18 4 18 4Z" fill="url(#logoGrad)" />
        {/* Leaf overlay */}
        <path d="M18 14 C20 12 24 13 25 17 C26 21 22 24 18 23 C14 24 10 21 11 17 C12 13 16 12 18 14Z" fill="white" fillOpacity="0.35" />
      </svg>
      {/* Wordmark */}
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: '1.4rem',
          background: 'linear-gradient(135deg, #1A7DC4, #4CAF50)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.01em',
        }}
      >
        Solubelle<sup style={{ fontSize: '0.55rem', WebkitTextFillColor: '#1A7DC4', verticalAlign: 'super' }}>®</sup>
      </span>
    </a>
  );
}
