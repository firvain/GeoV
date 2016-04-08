<template>
<div :class="{hasSnackBar: msg === true}" id="app">
  <sidebar></sidebar>
  <map></map>
  <mdl-snackbar display-on="showSnackbar"></mdl-snackbar>
</div>
</template>

<script>
import sidebar from './sidebar';
import map from './map';
import store from '../vuex/store'; // import the store
import { snack } from '../vuex/getters';
export default {
  components: {
    sidebar,
    map,
  },
  data() {
    return {
      hasSnackBar: false,
    };
  },
  store,
  vuex: {
    getters: snack,
  },
  computed: {
    msg() {
      this.$broadcast('showSnackbar', { message: this.snack.snackbarMsg.message });
      return this.snack.snackbar;
    },
  },
};
</script>

<style lang="scss">

#app {
  height: 100%;
}
.test {
  height: 50px;
  width: 200px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100000000;
}
</style>
