const path = require('path');

module.exports = {
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
  },

  dev: {
    // Dev server port
    port: 8080,

    // Proxy requests to different backend during development.
    // https://github.com/chimurai/http-proxy-middleware
    proxyTable: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': '',
        },
      },
    },
  },
};
