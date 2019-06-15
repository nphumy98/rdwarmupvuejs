import Vue from 'vue'
import Header from './components/Header.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'

Vue.config.productionTip = false

Vue.component('header-comp',Header);
Vue.component('left-panel',LeftPanel);
Vue.component('right-panel',RightPanel);

new Vue({
  el: '.container'
})
