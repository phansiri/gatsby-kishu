/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `gatsby-theme-tut`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
  ],
};
