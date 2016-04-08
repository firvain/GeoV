<template>
<div id="app">
  <sidebar></sidebar>
  <map></map>
  <mdl-snackbar display-on="showSnackbar"></mdl-snackbar>
  <div>

  </div>
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
// import { checkAuth } from '../javascripts/auth0';
// import { qs, hasClass, removeClass, addClass } from '../javascripts/utils';

// Vue.nextTick(function () {
//   router.start(sidebar, '#will')  // body...
// });
export default {
  components: {
    sidebar,
    map,
  },
  data() {
    return {
      messages: '',
    };
  },
  events: {
    'showSnackbar'(msg) {
      this.$broadcast('showSnackbar', msg);
    }
  },
};
</script>

<style lang="scss">

#app {
  height: 100%;
}
.test {
  height: 50px;
  width: 200px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100000000;
}
</style>
