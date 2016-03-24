<template>
  <div class="mdl-selectfield mdl-js-selectfield mdl-selectfield--floating-label">
    <select class="mdl-selectfield__select" id="asdad" name="asdad" v-model="selected">
     <option v-for="option in list"  v-bind:value="option.value" v-bind:selected="option.selected" >{{ option.text }}</option>
   </select>
   <label class="mdl-selectfield__label" for="asdad">asdad</label>
   <!-- <span>Selected: {{ selected }}</span> -->
 </div>

</template>
<script>
  export default {
    props: ['list'],
    data() {
      return {
        clicked: false,
        selected: 0,
      };
    },
    ready() {
      // componentHandler.upgradeElement(this.$el) //eslint-disable-line
    },
  };
</script>
