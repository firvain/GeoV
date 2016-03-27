import Vue from 'vue';

import 'material-design-lite/material';

import vmdl from 'vue-mdl';
import App from './components/App';
import utils from './javascripts/utils.js';
// import $ from 'jquery';
window.utils = utils;
vmdl.registerAll(Vue);
Vue.config.debug = true;
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
