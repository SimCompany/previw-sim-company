
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://simcompany.com.br',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://simcompany.com.br/server-sitemap.xml', // <==== Add here
    ],
  },
}
