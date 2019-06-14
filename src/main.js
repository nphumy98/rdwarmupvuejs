import Vue from 'vue'
import Header from './components/Header.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Header),
}).$mount('#head-comp')

new Vue({
  render: h => h(LeftPanel),
}).$mount('#left-panel')

new Vue({
  render: h => h(RightPanel),
}).$mount('#right-panel')
