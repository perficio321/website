/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.perficios.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: [
    '/admin/*',
    '/api/*',
    '/unauthorized',
    '/sign-in',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/sign-in', '/unauthorized'],
      },
    ],
    additionalSitemaps: [
      'https://www.perficios.com/server-sitemap.xml',
    ],
  },
}
