require("dotenv").config();

const siteMetadata = {
  title: `Blog by Bram`,
  name: `Bram`,
  siteUrl: `https://blog.bmusuko.tech/`,
  description: `This is personal blog by bram musuko panjaitan discuss tech, book, movie, and many other things`,
  hero: {
    heading: `Welcome to my blog, where I write about things that I like and I don't`,
    maxWidth: 652,
  },
  social: [
    {
      name: `linkedin`,
      url: `https://www.linkedin.com/in/bram-musuko-panjaitan-64410916a/`,
    },
    {
      name: `github`,
      url: `https://github.com/bmusuko`,
    },
    {
      name: `twitter`,
      url: `https://twitter.com/bmusuko`,
    },
    {
      name: `instagram`,
      url: `https://instagram.com/bmusuko`,
    },
    {
      name: `mailto`,
      url: `mailto:bram.musuko@gmail.com`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: false,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Novela by Narative`,
      short_name: `Novela`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-202661994-1",
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://narative.us19.list-manage.com/subscribe/post?u=65ef169332a03669b9538f6ef&amp;id=c55c426282",
    },
  },
  {
    resolve: 'gatsby-plugin-disqus',
    options: {
      shortname: 'https-blog-bmusuko-tech',
    },
  },
];

/**
 * For development purposes if there's no Contentful Space ID and Access Token
 * set we don't want to add in gatsby-source-contentful because it will throw
 * an error.
 *
 * To enanble Contentful you must
 * 1. Create a new Space on contentful.com
 * 2. Import the Contentful Model from @narative/gatsby-theme-novela/conteful
 * 3. Add .env to www/ (see www/env.example)
 * 4. Enable contentful as a source in this file for @narative/gatsby-theme-novela
 */
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  });
}

module.exports = {
  siteMetadata,
  plugins,
};
