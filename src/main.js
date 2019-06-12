import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import LeftPanel from './LeftPanel.vue'
import RightPanel from './RightPanel.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Header),
}).$mount('#headComp')

new Vue({
  render: h => h(LeftPanel),
}).$mount('#leftPanel')

new Vue({
  render: h => h(RightPanel),
}).$mount('#rightPanel')
