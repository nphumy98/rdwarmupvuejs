<template>
<div id="right-panel-id" class="rPanel">
  <div class="data" v-if="this.isLoading==true">
    <Loading></Loading>
  </div>
  <div class="data" v-else-if="this.isLoading==false && this.company !='Connect to Sever Fail'">
    <table>
      <tr v-for="item in this.company" :key="item.id">
        <td>{{item}}</td>
      </tr>
    </table>
  </div>
  <div class="data" v-else>
    <p>{{company}}</p>
  </div>
  <div class="rContainer">
    <img class ="smartpayLogo" src="../assets/smartpaylogo.svg" alt="smartpay_logo">
  </div>
    <div class="auxilary">
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
        console.log(response.data.companies);
        this.company = response.data.companies;
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
  flex-direction:column;
  align-items: center;
  transition: margin-left 0.8s;
}

.rContainer{
  display:flex;
  width: 200px;
  height: 20%;
  padding:0;
}

.smartpayLogo {
  position: relative;   /* position fixed help the logo position related to brower window */
  width: 100%;
  height:100%;
  animation-name: slowlyappear;   /* make animation for logo */
  animation-duration: 4s;
}

.data {
  margin-top:5px;
  height:40%;
  color: red;
}

.auxilary {
  height: 40%;
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
