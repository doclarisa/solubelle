import Image from 'next/image';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center no-underline ${className}`} aria-label="Solubelle Home">
      <Image src="/SolubelleLOGO.png" alt="Solubelle" width={160} height={48} style={{ objectFit: 'contain', height: '42px', width: 'auto' }} priority />
    </a>
  );
}
