<template>
  <div class="map sidebar-map" id="map"></div>

</template>

<script>
/* eslint-disable */
// import ol from 'openlayers/dist/ol.js';
// import createMap from '../javascripts/map.js';
const ol = require('openlayers');
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
@import '../stylesheets/abstracts/_variables.scss';
  .map {

  height: 100%;
}
.ol-control {
  button {
    background-color: $color-primary !important;
    &:hover {
    background-color: $color-primary-contrast !important;
    color: $color-accent;

    }
  }
}
</style>
