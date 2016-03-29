<template>
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
</div>
</template>
<script>
</script>
