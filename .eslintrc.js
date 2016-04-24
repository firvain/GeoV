module.exports = {
  root: true,
  // https://github.com/airbnb/javascript
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'global-require': 0
  },
  settings: {
    'import/resolver': {
        webpack : {
          config: './build/webpack.base.conf.js'
        },
      }
  }
};
