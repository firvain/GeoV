<template>
  <div class="map sidebar-map" id="map"></div>

</template>

<script>
/* eslint-disable */
// import ol from 'openlayers/dist/ol.js';
import createMap from '../javascripts/map.js';
export default {
  data() {
    return {};
  },
  ready() {
    // console.log(this);
    // mitsos.setTarget(this.$el);
   createMap(this.$el);
   // return {};
  },
};


</script>
<style lang="scss">
@import '../stylesheets/variables';
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
