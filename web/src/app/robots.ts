import { MetadataRoute } from 'next';

const BASE_URL = 'https://portfolio-j24wgc3sa-zandro-narvazas-projects.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
