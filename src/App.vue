<template>
  <div id="app">
    <sidebar></sidebar>
    <map></map>
  </div>
</template>

<script>
import sidebar from './components/sidebar';
import map from './components/map';

export default {
  components: {
    sidebar,
    map,
  },
};
</script>

<style lang="scss">
@import "./stylesheets/app";
#app {

  font-family: 'Roboto', sans-serif;
  height: 100%;

}

</style>
