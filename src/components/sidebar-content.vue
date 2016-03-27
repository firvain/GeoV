<template>
  <div class="sidebar-content">
    <div class="sidebar-pane" id="account">
      <h1 class="sidebar-header">Account
        <span class="sidebar-close"><i class="material-icons">keyboard_arrow_left</i></span>
      </h1>
      <div>Account leme</div>
    </div>
    <div class="sidebar-pane" id="search">
      <h1 class="sidebar-header">
        Search
        <span class="sidebar-close"><i class="material-icons">keyboard_arrow_left</i></span>
      </h1>
      <search-properties></search-properties>
    </div>
    <div class="sidebar-pane" id="messages">
      <h1 class="sidebar-header">Messages
        <span class="sidebar-close"><i class="material-icons">keyboard_arrow_left</i></span>
      </h1>
    </div>
    <div class="sidebar-pane" id="settings">
      <h1 class="sidebar-header">Settings
        <span class="sidebar-close"><i class="material-icons">keyboard_arrow_left</i></span>
      </h1>
    </div>
  </div>
</template>
<script>
  import searchProperties from './search-properties';
  export default {
    components: {
      searchProperties,
    },
    data() {
      return {};
    },
    ready() {
    },
  };
</script>
<style lang='scss'>
  .material-icons {

    vertical-align: middle;
  }
</style>
