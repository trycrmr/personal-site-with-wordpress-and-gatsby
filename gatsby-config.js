require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'TERRY CREAMER',
    siteUrl: `${process.env.PERSONAL_SITE_PROTOCOL}://${process.env.PERSONAL_SITE_URL}`,
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
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        // your google analytics tracking id
        trackingId: `UA-31386246-6`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    'gatsby-plugin-sitemap', // Only runs in production (NODE_ENV=production)
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => process.env.NODE_ENV,
        production: {
          policy: [
            {
              userAgent: '*',
              allow: ['/'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        // configs: https://web.dev/add-manifest/
        name: `Terry Creamer's Personal Site`,
        short_name: `Terry Creamer`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#f5f5f5`,
        display: `minimal-ui`,
        icon: 'src/images/favicon-32x32.png',
        icon_options: {
          // More options https://developer.mozilla.org/en-US/docs/Web/Manifest
          purpose: 'maskable',
        },
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
