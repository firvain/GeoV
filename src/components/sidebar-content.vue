<template>
  <div class="sidebar-content">
    <account></account>
    <search></search>
    <messages><messages>
    <settings></settings>
  </div>
</template>
<script>
  import account from './account';
  import search from './search';
  import messages from './messages';
  import settings from './settings';
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

