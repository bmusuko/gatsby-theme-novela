/* eslint-disable import/no-extraneous-dependencies */
exports.createPages = require('@narative/gatsby-theme-novela/src/gatsby/node/createPages');
exports.createResolvers = require('@narative/gatsby-theme-novela/src/gatsby/node/createResolvers');
exports.onCreateNode = require('@narative/gatsby-theme-novela/src/gatsby/node/onCreateNode');
exports.onCreateWebpackConfig = require('@narative/gatsby-theme-novela/src/gatsby/node/onCreateWebpackConfig');
exports.onPreBootstrap = require('@narative/gatsby-theme-novela/src/gatsby/node/onPreBootstrap');
exports.sourceNodes = require('@narative/gatsby-theme-novela/src/gatsby/node/sourceNodes');
exports.createSchemaCustomization = require('@narative/gatsby-theme-novela/src/gatsby/node/createSchemaCustomization');

const resolvableExtensions = () => [`.ts`, `.tsx`]

function onCreateBabelConfig({ actions }) {
  actions.setBabelPreset({
    name: `@babel/preset-typescript`,
    options: {
       isTSX: true,
       allExtensions: true,
    },
  })
}

exports.resolvableExtensions = resolvableExtensions
exports.onCreateBabelConfig = onCreateBabelConfig
