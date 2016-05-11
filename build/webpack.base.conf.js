/* eslint-disable */
const path = require('path');
const config = require('../config');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const projectRoot = path.resolve(__dirname, '../');
const utils = require('./utils');
module.exports = {
  entry: {
    app: './src/main.js',
    vendor: ['jquery','openlayers'],
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
       'src': path.resolve(__dirname, '../src'),
       'assets': path.resolve(__dirname, '../src/assets'),
       'components': path.resolve(__dirname, '../src/components'),
       openlayers: 'openlayers/dist/ol.js',  // For things like "ol3/ol.css"
       jquery: 'jquery/dist/jquery.min.js'  // For things like "ol3/ol.css"
    },
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')],
  },
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint?{fix:true}',
        include: projectRoot,
        exclude: /node_modules|dist/,
      },
      {
        test: /\.js$/,
        loader: 'eslint?{fix:true}',
        include: projectRoot,
        exclude: /node_modules|dist/,
      },
    ],
    loaders: [
      {
        test: /\.vue$/,
        include: projectRoot,
        loader: 'vue',
      },
      {
        test: /\.js$/,
        include: projectRoot,
        loader: 'babel',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.css$/,
      //   loader: 'vue-style!css'
      // },
      // {
      //   test: /\.scss$/,
      //   loaders: ['vue-style', 'css', 'sass']
      // },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
    ],
  },
   vue: {
    loaders: utils.cssLoaders(),
    // configure autoprefixer
    autoprefixer: {
      browsers: ['last 4 versions']
    }
  },
  plugins: [
    new CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter'),
  },
};
