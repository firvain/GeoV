<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  vuex: {
    getters: {
      count: state => state.count,
      path: ({ route }) => route.path,
    },
  },
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    msg: function () {
      // this.increment(3);
      return 'hello' + this.count;
    },
  },
};
</script>
