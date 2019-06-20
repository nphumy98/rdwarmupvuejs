<template>
<div id="right-panel-id" class="rPanel">
  <div class="rContainer">
    <img class ="smartpayLogo" src="../assets/smartpaylogo.svg" alt="smartpay_logo">
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RightPanel',
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
        this.info = "Connect to Sever Fail"
      })
  }
}
</script>
