<template>
<div id="right-panel-id" class="rPanel">
  <div class="rContainer" v-if="this.isLoading==true">
    <Loading></Loading>
  </div>
  <div class="rContainer" v-else-if="this.isLoading==false && this.company.first !=null">
    <img class ="smartpayLogo" src="../assets/smartpaylogo.svg" alt="smartpay_logo">
    <table>
      <tr v-for="item in this.company">
        <td>{{item}}</td>
      </tr>
      <!-- <tr>
        <td>{{company.second}}</td>
      </tr>
      <tr>
        <td>{{company.third}}</td>
      </tr> -->
    </table>
    <!-- <ul>
      <li v-for="item in this.company">{{ item }}</li>
    </ul> -->

  </div>
  <div class="rContainer" v-else>
    <img class ="smartpayLogo" src="../assets/smartpaylogo.svg" alt="smartpay_logo">
    <p>{{company}}</p>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Loading from './Loading.vue'

export default {
  name: 'RightPanel',
  components: {
    Loading
  },
  data () {
   return {
     company: [],
     isLoading: true
   }
 },
  mounted () {
    axios
      .get('http://localhost:3000/companies')
      .then((response) => {
        console.log(response.data);
        this.company = response.data;
        this.isLoading=false;
      })
      .catch((error) => {
        this.company="Connect to Sever Fail";
        console.log(error);
        this.isLoading=false;
      })
  }
}
</script>
