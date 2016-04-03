/* eslint-disable */
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var projectRoot = path.resolve(__dirname, '../');
var cssLoaders = require('./css-loaders');
module.exports = {
  entry: {
    app: ['./src/stylesheets/main.scss','./src/main.js'],
    vendor: ['jquery','openlayers'],
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: './static/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
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
      {
        test: /\.scss$/,
        loaders: ['vue-style', 'css', 'sass']
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.html$/,
        loader: 'vue-html',
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]',
        },
      },
    ],
  },
   vue: {
    loaders: cssLoaders(),
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
