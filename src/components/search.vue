<template>
<div class="sidebar-pane" id="search">
  <h1 class="sidebar-header">
    Search
    <span class="sidebar-close"><i class="material-icons">keyboard_arrow_left</i></span>
  </h1>
  <search-properties></search-properties>
</div>
</template>

<script>
import searchProperties from './search-properties';
// import { qs, hasClass, removeClass, addClass } from '../javascripts/utils';

// Vue.nextTick(function () {
//   router.start(sidebar, '#will')  // body...
// });
export default {
  name: 'search',
  components: {
    searchProperties,
  },
};
</script>
