import Vue from 'vue';

// require('../node_modules/openlayers/css/ol.css');
// require('../node_modules/material-design-lite/material.css');

require('material-design-lite/material.js');
require('material-design-lite/dist/material.blue_grey-purple.min.css');
import vmdl from 'vue-mdl';
import App from './App';
import utils from './javascripts/utils.js';
// import selectbox from './directives/selectbox.js';
// import $ from 'jquery';
window.utils = utils;
vmdl.registerAll(Vue);

// console.log(selectbox); //eslint-disable-line
Vue.config.debug = true;
// Vue.elementDirective('selectbox', selectbox);
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
