<template>
<div id="app">
  <sidebar></sidebar>
  <map></map>
</div>
<!--   <sidebar></sidebar>
  <map></map> -->
</template>

<script>
/*eslint-disable*/
// import Vue from 'vue';
// import VueRouter from 'vue-router';
import sidebar from './sidebar';
import map from './map';
import { checkAuth } from '../javascripts/auth0'
// import { qs, hasClass, removeClass, addClass } from '../javascripts/utils';

// Vue.nextTick(function () {
//   router.start(sidebar, '#will')  // body...
// });
export default {
  components: {
    sidebar,
    map,
  },
};
</script>

<style lang="scss">
@import '../stylesheets/abstracts/_variables.scss';

#app {


  height: 100%;

}

</style>
