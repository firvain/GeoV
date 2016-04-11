<template>
<div  :class="{'snackBarActive': handleSnackbar }" id="app">
  <sidebar></sidebar>
  <map></map>
  <mdl-snackbar display-on="A"></mdl-snackbar>
</div>
</template>

<script>
import sidebar from './sidebar';
import map from './map';
import store from '../vuex/store'; // import the store
import { snack } from '../vuex/getters';
import { hideSnackbar } from '../vuex/actions';

export default {
  components: {
    sidebar,
    map,
  },
  data() {
    return {
    };
  },
  ready() {

  },
  store,
  vuex: {
    getters: snack,
    actions: {
      hideSnackbar,
    },
  },
  computed: {
    handleSnackbar() {
      const handler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideSnackbar();
      };
      if (!this.snack.snackbar) {
        return 0;
      }
      this.$broadcast('A', {
        message: this.snack.snackbarMsg,
        actionHandler: handler,
        actionText: 'ok',
      });
      return 1;
    },
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
