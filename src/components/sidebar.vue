<template>
<div id="sidebar" class="sidebar sidebar-left mdl-shadow--16dp collapsed">
    <!-- Nav tabs -->

    <sidebar-list></sidebar-list>
    <!-- Tab panes -->
    <sidebar-content></sidebar-content>
</div>
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
    return {};
  },
  ready() {
  },
};
</script>
<style lang='scss'>
@import './node_modules/material-design-lite/src/_variables.scss';
@import '../stylesheets/vendor/ol3-sidebar';
  .sidebar {
   font-family: $preferred_font;
  }
  .material-icons {
    vertical-align: middle;
  }
</style>



