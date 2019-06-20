<template>
<div id="right-panel-id" class="rPanel">
  <div class="rContainer" v-if="this.isLoading==true">
    <Loading></Loading>
  </div>
  <div class="rContainer" v-else-if="this.isLoading==false && this.company.first !=null">
    <img class ="smartpayLogo" src="../assets/smartpaylogo.svg" alt="smartpay_logo">
    <table>
      <tr v-for="item in this.company" :key="item.id">
        <td>{{item}}</td>
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

<style>
.rPanel {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  transition: margin-left 0.8s;
}

.rContainer{
  display:flex;
  width: 200px;
  height: 200px;
  padding:0;
}

.smartpayLogo {
  position: relative;   /* position fixed help the logo position related to brower window */
  width: 100%;
  height:100%;
  animation-name: slowlyappear;   /* make animation for logo */
  animation-duration: 4s;
}

.container {
  height:inherit;
}
/* animation for smartpay_logo image */
@keyframes slowlyappear {
  from{opacity: 0;}
  to% {visibility: visible;opacity: 1;}
}
</style>
