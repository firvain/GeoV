<template>
<div id="app">
   <div>
    <h3>{{ msg }}</h3>
  </div>
  <sidebar></sidebar>
  <map></map>
  <mdl-snackbar display-on="showSnackbar"></mdl-snackbar>
</div>
<!--   <sidebar></sidebar>
  <map></map> -->
</template>

<script>
import sidebar from './sidebar';
import map from './map';
// import Display from './Display';
import store from '../vuex/store'; // import the store
import getCount from '../vuex/getters';
export default {
  components: {
    // Display,
    sidebar,
    map,
  },
  data() {
    return {
      messages: '',
      msg: 'adsad',
    };
  },
  events: {
    'showSnackbar'(msg) {
      this.$broadcast('showSnackbar', msg);
    },
  },
  store,
  vuex: {
    getters: getCount,
  },
  computed: {
    msg() {
      // this.increment(3);
      return `hello ${this.count}`;
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
