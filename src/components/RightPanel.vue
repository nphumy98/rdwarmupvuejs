<template>
<div id="right-panel-id" class="rPanel">
  <div class="data" v-if="this.isLoading==true">
    <Loading></Loading>
  </div>
  <div class="data" v-else-if="this.isLoading==false && this.companies !='Connect to Sever Fail'">
    <table>
      <tr v-for="item in this.companies" :key="item.id">
        <td>{{item}}</td>
      </tr>
    </table>
  </div>
  <div class="data" v-else>
    <p>{{companies}}</p>
    <button type="button" v-on:click="retry_request()">Retry</button>
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
  methods:{
    retry_request: function() {
      axios
      .get('http://localhost:3000/companies')
      .then((response) => {
        console.log(response.data.companies);
        this.companies = response.data.companies;
      })
      .catch((error) => {
        this.companies ="Connect to Sever Fail";
        this.isError = true;
        console.log(error);  
      })
      .finally(() => {
        this.isLoading = false;
      })
    }
  },
  data () {
   return {
     companies: [],
     isLoading: true,
     isError: false
   }
  },
  mounted () {
    this.retry_request();    
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
