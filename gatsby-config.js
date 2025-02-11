module.exports = {
  pathPrefix: '/resume',
  siteMetadata: {
    title: 'Resume Generator',
    githubUrl: 'https://github.com/Angels-D/resume.git',
    author: 'visiky',
    changed: 'Angels-D',
    contact: 'https://github.com/Angels-D',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    // {
    //   // https://developers.google.com/analytics/devguides/collection/gtagjs?hl=zh_CN
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingIds: ['G-2K3PH6MKBG'],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        strictMath: true,
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'font-family': 'roboto-regular, Arial',
            'primary-color': '#2f5785',
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-pnpm',
  ],
};
