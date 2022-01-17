const { SITE_URL } = process.env

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
  