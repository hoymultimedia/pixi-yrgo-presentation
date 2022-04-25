const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web',
  module: {
    rules: [
      {
        /**
         * Image Loader
         * When running production we use image-webpack-loader to optimize images (disable: false).
         * https://github.com/tcoopman/image-webpack-loader
         *
         * Excluding bmpfonts png files (src/assets/bmpfonts/)
         */
        test: /\.(gif|png|jpe?g)$/i,
        exclude: [path.resolve(__dirname, '../src/assets/bmpfonts/')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              context: 'src',
            },
          },
          /*
          {
            loader: 'image-webpack-loader',
            options: {
              disable: false,
            },
          },
          */
        ],
      },
    ],
  },
  devServer: {
    open: true,
    devMiddleware: {
      stats: 'minimal',
    },
  },
};
