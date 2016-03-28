<template>
<div id="app">
  <!-- <sidebar></sidebar> -->
  <div id="sidebar" class="sidebar collapsed">
    <div id='will'></div>
  </div>
  <map></map>
</div>
</template>

<script>
/*eslint-disable*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import sidebar from './sidebar';
import map from './map';
import account from './account';
import search from './search';
import messages from './messages';
import settings from './settings';
Vue.use(VueRouter);
const router = new VueRouter({
  hashbang: false,
  // history: true;
});
router.map({
  'account': {
    component: account,
  },
  'search': {
    component: search,
  },
  'messages': {
    component: messages,
  },
  'settings': {
    component: settings,
  },
});

export default {
  components: {
    // sidebar,
    map,
  },
  ready() {
    router.start(sidebar, '#will');
    router.beforeEach(function (transition) { //eslint-disable-line
        console.log("Called beforeEach any route transition starts"); //eslint-disable-line
        console.log(transition.from); //eslint-disable-line
        console.log(transition.to); //eslint-disable-line
    });
  },
};
</script>

<style lang="scss">
@import '../stylesheets/abstracts/_variables.scss';

#app {


  height: 100%;

}

</style>
