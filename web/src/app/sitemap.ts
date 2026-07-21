import { MetadataRoute } from 'next';

const BASE_URL = 'https://portfolio-j24wgc3sa-zandro-narvazas-projects.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/projects',
    '/experience',
    '/cv',
    '/contact',
    '/stack',
    '/certifications',
    '/uses',
    '/philosophy',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
