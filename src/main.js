import Vue from 'vue';

import 'material-design-lite/material.js';
import './stylesheets/main.scss';
import 'material-design-lite/src/material-design-lite.scss';
import App from './components/App';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
// eslint-disable
// import store from './vuex/store'; // import the store
// import 'material-design-lite';


import VueMdl from 'vue-mdl';

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

Vue.use(VueMdl);

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

sync(store, router);
router.start(App, '#app');
Vue.http.interceptors.push({
  response(response) {
    if (response.status === 401) {
      this.logout();
      this.authenticated = false;
      router.go('/');
    }
    return response;
  },
});

// expose ol to global
// require("expose?ol!openlayers/dist/ol.js");
// require("expose?mitsos!./javascripts/map.js");
