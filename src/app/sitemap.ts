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
    { path: '/blog', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/dissolvable-grocery-bags-guide', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/blog/pva-bags-vs-compostable-bags', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog/plastic-bag-bans-what-retailers-need-to-know', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog/what-happens-when-pva-bag-dissolves', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog/how-to-switch-your-store-to-dissolvable-bags', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/blog/zero-microplastics-what-it-really-means', priority: 0.75, changeFrequency: 'monthly' as const },
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
