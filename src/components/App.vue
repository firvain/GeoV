<template>
  <div id="app">
    <sidebar></sidebar>
    <map></map>
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
@import '../stylesheets/abstracts/_variables.scss';

#app {


  height: 100%;

}

</style>
