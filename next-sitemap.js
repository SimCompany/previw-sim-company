module.exports = {
  siteUrl: 'https://simcompany.com.br',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  exclude: ['/server-sitemap.xml', '/post/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://simcompany.com.br/server-sitemap.xml'],
  },
}