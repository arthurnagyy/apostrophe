import Vue from 'apostrophe/vue';
import { VTooltip } from 'v-tooltip';
Vue.directive('tooltip', VTooltip);

export default function() {
  // Careful, login page is in user scene but has no admin bar
  if (apos.adminBar) {
    return new Vue({
      el: '#apos-admin-bar',
      computed: {
        apos () {
          return window.apos;
        }
      },
      template: '<component :is="`TheAposAdminBar`" :items="apos.adminBar.items" />'
    });
  }
};
