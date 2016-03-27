import Vue from 'vue';

import 'material-design-lite/material';

import vmdl from 'vue-mdl';
import App from './components/App';
// import account from './components/account';
// import search from './components/search';
// import messages from './components/messages';
// import settings from './components/settings';
import utils from './javascripts/utils.js';
// import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
Vue.config.debug = true;
// Vue.use(VueResource);
// Vue.use(VueRouter({ //eslint-disable-line
//   hashbang: false,
// }));
// export const router = new VueRouter({
//   hashbang: false,
// });
// import $ from 'jquery';
window.utils = utils;
vmdl.registerAll(Vue);
// router.map({
//   account: {
//     component: account,
//   },
//   search: {
//     component: search,
//   },
//   messsages: {
//     component: messages,
//   },
//   settings: {
//     component: settings,
//   },
// });
// router.redirect({
//   '*': '/App',
// });
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    App,
  },
});
// router.start(App, '#app');
// expose ol to global
// require("expose?ol!openlayers/dist/ol.js");
// require("expose?mitsos!./javascripts/map.js");
