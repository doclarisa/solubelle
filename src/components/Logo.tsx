import Image from 'next/image';

export default function Logo({ className = '', large = false }: { className?: string; large?: boolean }) {
  return (
    <a href="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }} className={className} aria-label="Solubelle Home">
      <Image
        src="/SolubelleLOGO.png"
        alt="Solubelle"
        width={large ? 230 : 160}
        height={large ? 70 : 48}
        style={{ objectFit: 'contain', height: large ? '58px' : '42px', width: 'auto' }}
        priority
      />
    </a>
  );
}
