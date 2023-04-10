// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/server-sitemap-index.xml'],
  transform: async (config,path)=>({
    loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      news: {
      title: '--',
        publicationName: 'BPHN',
        publicationLanguage: 'id',
        date: new Date(),
    },
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL}/server-sitemap-index.xml`,
    ],
  },
}
