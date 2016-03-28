import Vue from 'vue';

import 'material-design-lite/material';

import vmdl from 'vue-mdl';
import App from './components/App';
// import sidebar from './components/sidebar';
// import map from './components/map';

// import sidebarContent from './components/sidebar-content';
// import account from './components/account';
// import search from './components/search';
// import messages from './components/messages';
// import settings from './components/settings';
import utils from './javascripts/utils.js';
// import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.config.debug = true;
Vue.use(VueResource);

// import $ from 'jquery';
window.utils = utils;
vmdl.registerAll(Vue);

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
