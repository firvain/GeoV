import Vue from 'vue';

import 'material-design-lite/material';

import vmdl from 'vue-mdl';
import App from './components/App';
// import sidebar from './components/sidebar';
import map from './components/map';
import account from './components/account';
import search from './components/search';
import messages from './components/messages';
import settings from './components/settings';
import utils from './javascripts/utils.js';
import { qs } from './javascripts/utils.js';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.config.debug = true;
Vue.use(VueResource);

// import $ from 'jquery';
window.utils = utils;
vmdl.registerAll(Vue);
Vue.use(VueRouter);
const router = new VueRouter({
  hashbang: false,
  // history: true;
});
router.map({
  '/account': {
    name: 'account',
    component: account,
  },
  '/search': {
    name: 'search',
    component: search,
  },
  '/messages': {
    name: 'messages',
    component: messages,
  },
  '/settings': {
    name: 'settings',
    component: settings,
  },
  '/map': {
    name: 'map',
    // Same for Baz, but only when /foo/baz is matched
    component: map,
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
// router.beforeEach( function(transition) { //eslint-disable-line

//     console.log("Called beforeEach any route transition starts"); //eslint-disable-line
//     // console.log(transition); //eslint-disable-line
//     const $sidebar = qs('#sidebar');
//     removeClass($sidebar,'collapsed');
//     const $sidebarPane = qs('.sidebar-pane');
//     console.log($sidebarPane);
//     // addClass($sidebarPane,'active');
//     transition.next();

// });
router.afterEach( function(transition) { //eslint-disable-line

    console.log("Called afterEach any route transition starts"); //eslint-disable-line
    // console.log(transition); //eslint-disable-line

    const $sidebarPane = qs('.sidebar-pane');
    console.log($sidebarPane);
    // addClass($sidebarPane,'active');


});
// expose ol to global
// require("expose?ol!openlayers/dist/ol.js");
// require("expose?mitsos!./javascripts/map.js");
