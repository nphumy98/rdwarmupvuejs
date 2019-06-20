<template>
<div id="right-panel-id" class="rPanel">
  <!-- <loading-screen v-if="isLoading==true"></loading-screen> -->
  <div class="rContainer" v-if="this.isLoading==true">
    <Loading></Loading>
    <!-- <loading-screen></loading-screen> -->
  </div>
  <div class="rContainer" v-else-if="this.isLoading==false && this.company.first !=null">
    <img class ="smartpayLogo" src="../assets/smartpaylogo.svg" alt="smartpay_logo">
    <table>
      <tr>
        <td>{{company.first}}</td>
      </tr>
      <tr>
        <td>{{company.second}}</td>
      </tr>
      <tr>
        <td>{{company.third}}</td>
      </tr>
    </table>
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
     company: null,
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
