// require('material-design-lite/material.css');
// require('material-design-lite/material.js');
// require('../node_modules/openlayers/css/ol.css');
// require('../node_modules/material-design-lite/material.css');
import vmdl from 'vue-mdl';
// const vmdl = require('vue-mdl');
import Vue from 'vue';
import App from './App';
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

