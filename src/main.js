import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('loading-screen', {
  template: '<div id="loading">Loading...</div>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
