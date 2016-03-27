import Vue from 'vue';

import 'material-design-lite/material';

import vmdl from 'vue-mdl';
import App from './components/App';
import utils from './javascripts/utils.js';
// import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
Vue.config.debug = true;
// Vue.use(VueResource);
// Vue.use(VueRouter);
// export const router = new VueRouter();
// import $ from 'jquery';
window.utils = utils;
vmdl.registerAll(Vue);
// router.map({
//   '/home': {
//     component: Home,
//   },
//   secretquote: {
//     component: SecretQuote,
//   },
//   '/login': {
//     component: Login,
//   },
//   '/signup': {
//     component: Signup,
//   },
// });
// router.redirect({
//   '*': '/App'
// });
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App,
  },
});

// expose ol to global
// require("expose?ol!openlayers/dist/ol.js");
// require("expose?mitsos!./javascripts/map.js");
