<template>
<div id="sidebar" class="sidebar sidebar-left mdl-shadow--16dp collapsed">
    <!-- Nav tabs -->

    <sidebar-list></sidebar-list>
    <!-- Tab panes -->
    <sidebar-content></sidebar-content>
    <mdl-snackbar display-on="colorChanged"></mdl-snackbar>
    <!-- <p>{{ messages | json }}</p> -->
    <!-- <div class="sidebar-content" id="sidebarcontent">
      <router-view></router-view>
    </div> -->
</div>
    <!-- <sidebar-content></sidebar-content> -->
</template>
<script >

import sidebarList from './sidebar-list';
import sidebarContent from './sidebar-content';
/* eslint-disable*/

export default {
  name: 'sidebar',
  components: {
    sidebarList,
    sidebarContent,
  },
  data() {
    return {
      // messages: '',
    };
  },
  // events: {
  //   'child-msg'(msg) {

  //     // `this` in event callbacks are automatically bound
  //     // to the instance that registered it
  //     this.messages = msg;
  //   }
  // },
  ready() {
  },
};
</script>
<style lang='scss'>
@import './node_modules/material-design-lite/src/_variables.scss';
/* @import './node_modules/material-design-lite/src/__shadow.scss'; */
@import '../stylesheets/vendor/ol3-sidebar';
  .sidebar {
   font-family: $preferred_font;
  }
  .material-icons {
    vertical-align: middle;
  }
</style>



