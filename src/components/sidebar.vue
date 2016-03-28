<template>
<div id="sidebar" class="sidebar sidebar-left collapsed">
    <!-- Nav tabs -->
    <div class="sidebar-tabs collapsed">
      <ul role="tablist">
        <li v-link-active>
          <a v-link="{name: 'account', activeClass: 'active'}" role="tab"><i class="material-icons">account_box</i></a>
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
/* eslint-disable*/
/**
 * Create a new sidebar on this jQuery object.
 *
 * @example
 * var sidebar = $('#sidebar').sidebar();
 *
 * @param {Object} [options] - Optional options object
 * @param {string} [options.position=left] - Position of the sidebar: 'left' or 'right'
 * @returns {jQuery}
 */
import $ from 'jquery';
$.fn.sidebar = function(options) {
    var $sidebar = this;
    var $tabs = $sidebar.find('ul.sidebar-tabs, .sidebar-tabs > ul');
    var $container = $sidebar.children('.sidebar-content').first();
    options = $.extend({
        position: 'left'
    }, options || {});
    $sidebar.addClass('sidebar-' + options.position);
    $tabs.children('li').children('a').on('click', function(e) {
        e.preventDefault();
        var $tab = $(this).closest('li');
        if ($tab.hasClass('active'))
            $sidebar.close();
        else if (!$tab.hasClass('disabled'))
            $sidebar.open(this.hash.slice(2), $tab);
    });
    $sidebar.find('.sidebar-close').on('click', function() {
        $sidebar.close();
    });
    /**
     * Open sidebar (if necessary) and show the specified tab.
     *
     * @param {string} id - The id of the tab to show (without the # character)
     * @param {jQuery} [$tab] - The jQuery object representing the tab node (used internally for efficiency)
     */
    $sidebar.open = function(id, $tab) {
        if (typeof $tab === 'undefined')
            $tab = $tabs.find('li > a[href="#' + id + '"]').parent();
        // hide old active contents
        $container.children('.sidebar-pane.active').removeClass('active');
        // show new content
        $container.children('#' + id).addClass('active');
        // remove old active highlights
        $tabs.children('li.active').removeClass('active');
        // set new highlight
        $tab.addClass('active');
        $sidebar.trigger('content', { 'id': id });
        if ($sidebar.hasClass('collapsed')) {
            // open sidebar
            $sidebar.trigger('opening');
            $sidebar.removeClass('collapsed');
        }
    };
    /**
     * Close the sidebar (if necessary).
     */
    $sidebar.close = function() {
        // remove old active highlights
        $tabs.children('li.active').removeClass('active');
        if (!$sidebar.hasClass('collapsed')) {
            // close sidebar
            $sidebar.trigger('closing');
            $sidebar.addClass('collapsed');
        }
    };
    return $sidebar;
};
export default {
  name: 'sidebar',
  data() {
    return {};
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



