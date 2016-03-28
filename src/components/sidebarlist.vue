<template>
<ul role="tablist">
  <li v-for="task in list" :class="{ 'disabled' : task.disabled }">
    <a v-link="{ path: '/{{ task.href }}'}" role="tab"><i class="material-icons">{{ task.iconame }}</i></a>
  </li>
  <!-- {{ $data | json }} -->
</ul>
</template>
<script>
  export default {
    props: ['list'],
    data() {
      return {
      };
    },
  };
</script>
<style lang='scss'>
  .material-icons {

    vertical-align: middle;
  }
</style>
