<template>
  <div class="sidebar-pane" id="account">
    <h1 class="sidebar-header">Account
      <span class="sidebar-close" @click.stop.prevent="close"><i class="material-icons">keyboard_arrow_left</i></span>
    </h1>
    <p>This is a private route. If you are reading this, you are authenticated.</p>
  </div>
</template>

<script>
import { qs, addClass, removeClass } from '../javascripts/utils.js'; //eslint-disable-line
import { checkAuth } from '../javascripts/auth0.js';
export default {
  name: 'account',
  route: {
    canActivate() {
      return checkAuth();
    },
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
