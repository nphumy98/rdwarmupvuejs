<template>
  <div class="container">
    <Header></Header>
    <LeftPanel></LeftPanel>
    <RightPanel></RightPanel>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'

export default {
  name: 'app',
  components: {
    Header,
    LeftPanel,
    RightPanel
  }
}
</script>

<style>
header {
  background-color: #fff;
  width:100%;
}

html,
body {
  background-color: #f3f3f3;
  height:100%;
  margin:0;   /* margin 0 so no more margin from nav to top of web */
  padding:0;
}

button {
  background-color: #fff;
  margin:1px;
  border-radius: 4px;
}
</style>
