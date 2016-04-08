<template>
<div id="app">
  <!-- <p>{{ messages | json }}</p> -->
  <sidebar></sidebar>
  <map></map>
  <mdl-snackbar display-on="colorChanged"></mdl-snackbar>
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
      // messages: '',
    };
  },
  events: {
    'colorChanged'(msg) {
      console.log('asdad = ' + msg.message);
      // `this` in event callbacks are automatically bound
      // to the instance that registered it
      // this.messages = msg.message;
    }
  },
};
</script>

<style lang="scss">

#app {
  height: 100%;
}

</style>
