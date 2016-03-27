<template>
  <div id="sidebar" class="sidebar collapsed">
    <!-- Nav tabs -->
    <div class="sidebar-tabs">
      <sidebarlist :list="tasks"></sidebarlist>
      <sidebarlist :list="[{ href: 'settings', iconame: 'settings', disabled: false, header: 'Settings' }]"></sidebarlist>
    </div>
    <!-- <router-view></router-view> -->
    <!-- Tab panes -->
    <sidebar-content></sidebar-content>
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
import sidebarlist from './sidebarlist';
import sidebarContent from './sidebar-content'
// import searchProperties from './search-properties';
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
            $sidebar.open(this.hash.slice(1), $tab);
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
  components: {
    sidebarlist,
    sidebarContent
  },
  data() {
    return {
      tasks: [
      { href: 'account', iconame: 'account_box', disabled: false, header: 'Account' },
      { href: 'search', iconame: 'search', disabled: false, header: 'Search' },
      { href: 'messages', iconame: 'mail_outline', disabled: false, header: 'Messages' },
      ],
   }
  },
  ready() {
    const sidebar = $('#sidebar').sidebar();
    // console.log(this);
  },
};
</script>
<style lang='scss'>
  .material-icons {

    vertical-align: middle;
  }
</style>

