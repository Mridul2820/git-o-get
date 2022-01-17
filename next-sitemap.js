const { SITE_URL } = process.env

const siteUrl = SITE_URL

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            `${SITE_URL}/sitemap.xml`,
        ],
    },
};
  