<template>
  <div class="sidebar-pane" id="messages">
    <h1 class="sidebar-header">Messages
      <span class="sidebar-close" @click.stop.prevent="close"><i class="material-icons">keyboard_arrow_left</i></span>
    </h1>
  </div>
</template>
<script>
import { qs, addClass, removeClass } from '../javascripts/utils.js';
export default {
  name: 'messages',
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

