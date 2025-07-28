import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/sign-in',
          '/unauthorized'
        ],
      },
    ],
    sitemap: 'https://www.perficios.com/sitemap.xml',
  }
}
