import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import LeftPanel from './LeftPanel.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(Header),
}).$mount('#header')

new Vue({
  render: h => h(LeftPanel),
}).$mount('#leftPanel')
