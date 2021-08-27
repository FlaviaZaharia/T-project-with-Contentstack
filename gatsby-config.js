require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const {
  CONTENTSTACK_API_KEY,
  CONTENTSTACK_DELIVERY_TOKEN,
  CONTENTSTACK_ENVIRONMENT,
} = process.env;
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "T-project-with-Contentstack",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-contentstack",
    //   options: {
    //     api_key: CONTENTSTACK_API_KEY,
    //     delivery_token: CONTENTSTACK_DELIVERY_TOKEN,
    //     environment: CONTENTSTACK_ENVIRONMENT,
    //   },
    // },
  ],
};
