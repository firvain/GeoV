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
};
</script>

