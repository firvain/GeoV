<template>
  <div class="sidebar-pane" id="settings">
    <h1 class="sidebar-header">Settings
      <span class="sidebar-close" @click.stop.prevent="close"><i class="material-icons">keyboard_arrow_left</i></span>
    </h1>
  </div>
</template>

<script>
import { qs, addClass, removeClass } from '../javascripts/utils.js'; //eslint-disable-line
export default {
  name: 'settings',
  route: {
    activate({ next }) {
      removeClass(qs('#sidebar'), 'collapsed');
      addClass(this.$el, 'active');
      next();
    },
  },
  methods: {
    close: function close() {
      addClass(qs('.sidebar'), 'collapsed');
      this.$route.router.go({ path: '/' });
    },
  },
};
</script>


