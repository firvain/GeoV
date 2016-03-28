<template>
  <div class="sidebar-content" id="sidebarcontent">
    <account></account>
    <search></search>
    <messages></messages>
    <settings></settings>
  </div>
</template>
<script>
  import Vue from 'vue';
  import VueRouter from 'vue-router';

  export default {
    components: {
      account,
      search,
      messages,
      settings,
    },
    data() {
      return {};
    },
    ready() {

    },
  };
</script>

