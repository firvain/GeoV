<template>
  <div class="map sidebar-map" id="map"></div>

</template>

<script>
/* eslint-disable */
import ol from 'openlayers';
// import createMap from '../javascripts/map.js';
// const ol = require('openlayers');
const myMap = new ol.Map({
 layers: [
 new ol.layer.Tile({
   source: new ol.source.MapQuest({
     layer: 'sat',
   }),
 }),
 ],
 view: new ol.View({
   center: ol.proj.fromLonLat([37.41, 8.82]),
   zoom: 4,
 }),
});
export default {
  name: 'map',
  data() {
    return {};
  },
  methods: {
    setMapTarget() {
      myMap.setTarget(this.$el);
    }
  },
  ready() {
    this.setMapTarget();
  },
};


</script>
<style lang="scss">
@import './node_modules/openlayers/css/ol';
@import './node_modules/material-design-lite/src/_variables.scss';

.map {
  height: 100%;
}
.ol-control {
  button {
    background-color: unquote("rgb(#{$color-primary})");
    &:hover {
    background-color: unquote("rgb(#{$color-primary-contrast})");
    color: unquote("rgb(#{$color-accent})");

    }
  }
}
</style>
