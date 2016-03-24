<template>
  <div id="app">
    <sidebar></sidebar>
    <map></map>
    <router-view></router-view>
  </div>
</template>

<script>
import sidebar from './sidebar';
import map from './map';

export default {
  components: {
    sidebar,
    map,
  },
};
</script>

<style lang="scss">
@import "../stylesheets/app";
#app {

  font-family: 'Roboto', sans-serif;
  height: 100%;

}

</style>
