module.exports = {
  siteMetadata: {
    title: "testWeb",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
