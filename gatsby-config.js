const emotionConfig =
  process.env.NODE_ENV === 'production'
    ? { hoist: true }
    : { sourceMap: true, autoLabel: true };

module.exports = {
  siteMetadata: {
    title: 'Gatsby Live MDX',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayout: require.resolve('./src/components/Layout'),
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: emotionConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-live-mdx',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
