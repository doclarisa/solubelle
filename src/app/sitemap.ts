import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://solubelle.com';
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/how-it-works', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/why-solubelle', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/for-retailers', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
    { path: '/certifications', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
