import Vue from 'vue'
import Header from './components/Header.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Header),
}).$mount('#headComp')

new Vue({
  render: h => h(LeftPanel),
}).$mount('#leftPanel')

new Vue({
  render: h => h(RightPanel),
}).$mount('#rightPanel')
