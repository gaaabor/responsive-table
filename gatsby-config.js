module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@content': 'src/content.js',
        },
        extensions: ['js'],
      },
    },
  ],
}
