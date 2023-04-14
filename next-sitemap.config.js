// next-sitemap.config.js

const slugify = require('@sindresorhus/slugify')
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/server-sitemap-index.xml'],
  transform: async (config, path) => {

    const paths = path.split("/")
    const slug = slugify(paths[paths.length-1]);
    const newPath = `${paths.pop().join("/")}/${slug}`

    return {
      loc: newPath, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
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
