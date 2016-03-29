<template>
<div id="sidebar" class="sidebar sidebar-left collapsed">
    <!-- Nav tabs -->
    <div class="sidebar-tabs collapsed">
      <ul role="tablist">
        <li v-link-active>
          <a v-link="{name: 'account', activeClass: 'active'}" role="tab" ><i class="material-icons">account_box</i></a>
        </li>
        <li v-link-active>
          <a v-link="{name: 'search', activeClass: 'active'}" role="tab"><i class="material-icons">search</i></a>
        </li>
        <li v-link-active>
          <a v-link="{name: 'messages', activeClass: 'active'}" role="tab"><i class="material-icons">mail_outline</i></a>
        </li>
        <!-- {{ $data | json }} -->
      </ul>
      <ul role="tablist">
        <li v-link-active>
          <a v-link="{ name: 'settings', activeClass: 'active'}" role="tab"><i class="material-icons">settings</i></a>
        </li>
      </ul>
      <!-- <sidebarlist :list="tasks"></sidebarlist> -->
      <!-- <sidebarlist :list="[{ href: 'settings', iconame: 'settings', disabled: false, header: 'Settings' }]"></sidebarlist> -->
    </div>
    <!-- <router-view></router-view> -->
    <!-- Tab panes -->
    <div class="sidebar-content" id="sidebarcontent">
      <router-view></router-view>
      <!-- <slot><p>asdsadasd</p></slot> -->
    </div>
</div>
    <!-- <sidebar-content></sidebar-content> -->
</template>
<script >
import { qs, addClass, removeClass } from '../javascripts/utils.js'; //eslint-disable-line
/* eslint-disable*/


export default {
  name: 'sidebar',
  data() {
    return {};
  },
  methods: {
    open: function open() {
      console.log(this.$el);
    },
  },
  ready() {
    // const sidebar = $('#sidebar').sidebar();
    // console.log(this.$el);
    // const a = this.$el.querySelector('.sidebar-content');
    // const b = a.querySelector('.sidebar-header');
    // console.log(b);
  },
};
</script>
<style lang='scss'>
  .material-icons {
    vertical-align: middle;
  }
</style>



