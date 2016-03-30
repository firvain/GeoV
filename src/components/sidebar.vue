<template>
<div id="sidebar" class="sidebar sidebar-left collapsed">
    <!-- Nav tabs -->

    <sidebar-list></sidebar-list>
    <!-- Tab panes -->
    <sidebar-content></sidebar-content>
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
    return {};
  },
  ready() {
  },
};
</script>
<style lang='scss'>
  .material-icons {
    vertical-align: middle;
  }
</style>



