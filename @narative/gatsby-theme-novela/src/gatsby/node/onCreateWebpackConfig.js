const path = require('path');

module.exports = ({ actions, loaders }) => {
  const jsLoader = loaders.js()

  if (!jsLoader) {
    return
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, '../../components/'),
        '@icons': path.resolve(__dirname, '../../icons/'),
        '@styles': path.resolve(__dirname, '../../styles/'),
        '@utils': path.resolve(__dirname, '../../utils/'),
        '@types': path.resolve(__dirname, '../../types/'),
      },
      extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.tsx?$/,
    //       use: jsLoader,
    //     },
    //   ],
    // },
  });
};
