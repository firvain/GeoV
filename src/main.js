import Vue from 'vue';

import 'material-design-lite/material';

import vmdl from 'vue-mdl';
import App from './components/App';

/* import map from './components/map';
import account from './components/account';
import search from './components/search';
import messages from './components/messages';
import settings from './components/settings';
*/
import { qs, addClass, removeClass } from './javascripts/utils.js'; //eslint-disable-line
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.config.debug = true;
Vue.use(VueResource);

vmdl.registerAll(Vue);
Vue.use(VueRouter);
const router = new VueRouter({
  hashbang: false,
  // history: true;
});

// TODO: Convert requires into ES6 syntax once its implementated
export default router;
router.map({
  '/account': {
    name: 'account',
    component(resolve) {
      require(['./components/account'], resolve);
    },
  },
  '/search': {
    name: 'search',
    component(resolve) {
      require(['./components/search'], resolve);
    },
  },
  '/messages': {
    name: 'messages',
    component(resolve) {
      require(['./components/messages'], resolve);
    },
  },
  '/settings': {
    name: 'settings',
    component(resolve) {
      require(['./components/settings'], resolve);
    },
  },
});
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   replace: false,
//   components: {
//     // App,
//   },
// });
/* eslint-disable */
router.start(App, '#app');
Vue.http.interceptors.push({
  response: function (response) {
    if(response.status === 401) {
      this.logout();
      this.authenticated = false;
      router.go('/');
    }
    return response;
  },
});
// console.log(config.auth0);

// expose ol to global
// require("expose?ol!openlayers/dist/ol.js");
// require("expose?mitsos!./javascripts/map.js");
