<template>
<div class="sidebar-pane" id="search">
  <h1 class="sidebar-header">
    Search
    <span class="sidebar-close"><i class="material-icons">keyboard_arrow_left</i></span>
  </h1>
  <search-properties></search-properties>
</div>
</template>


<script >
import searchProperties from './search-properties';

export default {
  components: {
    searchProperties,
  },
  data() {
    return {
    };
  },
  ready() {
  },
};
</script>

