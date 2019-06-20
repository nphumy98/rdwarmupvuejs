import Vue from 'vue'
import Header from './components/Header.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.component('header-comp',Header);
Vue.component('left-panel',LeftPanel);
Vue.component('right-panel',RightPanel);

new Vue({
  el: '.container',
  data () {
   return {
     info: null
   }
 },
  mounted () {
    axios
      .get('http://localhost:3000/companies')
      .then((response) => {
        console.log(response.data);
        this.info = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.info = response
      })
  }
})
