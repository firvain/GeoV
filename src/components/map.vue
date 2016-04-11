<template>
  <div class="map sidebar-map" id="map"></div>

</template>

<script>
/* eslint-disable */
import ol from 'openlayers';
import createMap from '../javascripts/map.js';
// const ol = require('openlayers');
// const myMap = new ol.Map({
//  layers: [
//  new ol.layer.Tile({
//    source: new ol.source.MapQuest({
//      layer: 'sat',
//    }),
//  }),
//  ],
//  view: new ol.View({
//    center: ol.proj.fromLonLat([37.41, 8.82]),
//    zoom: 4,
//  }),
// });
export default {
  name: 'map',
  data() {
    return {};
  },
  methods: {
    setMapTarget() {
      myMap.setTarget(this.$el);
    },
  },
  ready() {
    createMap(this.$el)
  },
};


</script>
<style lang="scss">
@import './node_modules/openlayers/css/ol';
@import './node_modules/material-design-lite/src/_variables.scss';
@import './node_modules/material-design-lite/src/shadow/_shadow.scss';

.map {
  height: 100%;
}
.ol-control {
    padding: 0;
    border: none;
    font-family: $preferred_font;
  button {
    margin: 0;
    // height: 2em;
    // width: 2em;
    font-size: 1.314em;
    background-color: unquote("rgb(#{$color-primary})");
    @include shadow-16dp();
    &:hover {
    background-color: unquote("rgb(#{$color-primary-contrast})");
    color: unquote("rgb(#{$color-accent})");

    }
  }
}
</style>
