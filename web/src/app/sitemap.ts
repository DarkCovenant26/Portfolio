import { MetadataRoute } from 'next';
import { caseStudies } from '@/data/case-studies';
import { SITE_URL } from '@/lib/site';

// No lastModified: a build timestamp on every URL tells crawlers everything changed on every deploy
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/projects',
    '/experience',
    '/cv',
    '/contact',
    '/stack',
    '/services',
    '/certifications',
    '/uses',
    '/philosophy',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const projects = caseStudies.map((study) => ({
    url: `${SITE_URL}/projects/${study.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...projects];
}
