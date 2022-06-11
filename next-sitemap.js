const { SITE_URL } = process.env;

const siteUrl = SITE_URL;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/500' },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
  exclude: ['/500'],
};
