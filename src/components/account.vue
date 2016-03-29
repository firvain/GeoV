<template>
  <div class="sidebar-pane" id="account">
    <h1 class="sidebar-header">Account
      <span class="sidebar-close" @click.stop.prevent="close"><i class="material-icons">keyboard_arrow_left</i></span>
    </h1>
    <p>This is a private route. If you are reading this, you are authenticated.</p>
  </div>
</template>

<script>
import { qs, addClass, removeClass, checkAuth } from '../javascripts/utils.js'; //eslint-disable-line
export default {
  name: 'account',
  route: {
    canActivate() {
      console.log(checkAuth()); //eslint-disable-line
      return checkAuth();
    },
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
