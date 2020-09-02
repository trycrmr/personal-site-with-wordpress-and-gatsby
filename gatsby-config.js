require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'TERRY CREAMER',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: { includePaths: ['./src/styles'] },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: `${process.env.PERSONAL_SITE_BASE_URL}`, // The base url to your WP site.
        hostingWPCOM: false, // WP.com sites set to true, WP.org set to false
        protocol: `${process.env.PERSONAL_SITE_PROTOCOL}`, // The protocol. This can be http or https.
        useACF: true, // Use 'Advanced Custom Fields' Wordpress plugin
        auth: process.env.PERSONAL_SITE_AUTH, // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: `${process.env.PERSONAL_SITE_VERBOSE_OUTPUT}`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
