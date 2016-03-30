<template>
<div class="sidebar-pane" id="search">
  <h1 class="sidebar-header">
    Search
    <span class="sidebar-close" @click.stop.prevent="close"><i class="material-icons">keyboard_arrow_left</i></span>
  </h1>
  <search-properties></search-properties>
</div>
</template>

<script>
import { qs, addClass, removeClass } from '../javascripts/utils.js'; //eslint-disable-line
import searchProperties from './search-properties';
// import { qs, hasClass, removeClass, addClass } from '../javascripts/utils';

// Vue.nextTick(function () {
//   router.start(sidebar, '#will')  // body...
// });
export default {
  name: 'search',
  route: {
    activate({ next }) {
      removeClass('collapsed', qs('#sidebar'));
      addClass('active', this.$el);
      next();
    },
  },
  methods: {
    close: function close() {
      addClass('collapsed', qs('#sidebar'));
      this.$route.router.go({ path: '/' });
    },
  },
  components: {
    searchProperties,
  },
};
</script>
