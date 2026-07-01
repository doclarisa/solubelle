import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { SPECS } from "@/lib/specs";

export const metadata: Metadata = {
  metadataBase: new URL('https://solubelle.com'),
  title: {
    default: 'Dissolvable Grocery Bags for US Retailers | Solubelle®',
    template: '%s | Solubelle®',
  },
  description: `Solubelle PVA dissolvable grocery bags dissolve completely in water — zero microplastics, zero landfill. Wholesale from ${SPECS.moq.wholesale}. Free samples for retailers.`,
  keywords: ['water-soluble grocery bags USA', 'PVA dissolvable bags', 'plastic-free grocery bags', 'biodegradable bags no microplastics', 'dissolvable shopping bags for retailers', 'eco-friendly checkout bags', 'PVA bags for stores'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solubelle.com',
    siteName: 'Solubelle',
    title: 'Solubelle® | Water-Soluble Grocery Bags | Zero Plastic. Zero Guilt.',
    description: 'Solubelle delivers PVA water-soluble grocery bags to US retailers, farmers markets, and eco-conscious consumers. No microplastics. No landfill. Just water.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Solubelle PVA water-soluble grocery bag dissolving in water' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solubelle® | Water-Soluble Grocery Bags',
    description: 'PVA water-soluble bags for US retailers. No microplastics. No landfill.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://solubelle.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Analytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Solubelle",
                "url": "https://solubelle.com",
                "logo": "https://solubelle.com/SolubelleLOGO.png",
                "description": "US distributor of PVA water-soluble grocery bags. Zero microplastics. EN13432 certified. SGS third-party tested. Wholesale and retail.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Oak Park",
                  "addressRegion": "IL",
                  "addressCountry": "US",
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "hello@solubelle.com",
                  "contactType": "customer service",
                },
                "sameAs": [
                  "https://instagram.com/solubelle",
                  "https://linkedin.com/company/solubelle",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Solubelle",
                "url": "https://solubelle.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://solubelle.com/search?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
        <link rel="preload" as="image" href="/ocean1.png" />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
